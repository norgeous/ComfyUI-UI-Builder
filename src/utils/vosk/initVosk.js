import { createModel } from 'vosk-browser';
import MicrophoneStream from 'microphone-stream';
import AudioStreamer from './AudioStreamer';
import audioBucket from './audioBucket';

const initVosk = async ({ modelUrl, onSpeech = () => {} }) => {
  // load vosk
  const model = await createModel(modelUrl);

  let lastPartial = '';

  // setup vosk
  const recognizer = new model.KaldiRecognizer(48000);
  recognizer.setWords(true);

  // setup mic
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: false,
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
    },
  });
  const micStream = new MicrophoneStream({
    objectMode: true,
    bufferSize: 1024,
  });
  micStream.setStream(mediaStream);

  // connect mic to vosk
  const audioStreamer = new AudioStreamer(recognizer, { objectMode: true });

  // define setMute function
  const setMute = isMuted => {
    if (isMuted) {
      micStream.unpipe(audioStreamer);
      micStream.pipe(audioBucket);
    } else {
      micStream.unpipe(audioBucket);
      micStream.pipe(audioStreamer);
    }
  };

  // define destroy function
  const destroy = () => {
    recognizer.remove();
    micStream.stop();
    mediaStream.getTracks().forEach(track => track.stop());
    model.terminate();
  };

  recognizer.on('partialresult', ({ result }) => {
    const oldWords = lastPartial.split(' ');
    const newWords = result.partial.split(' ');

    lastPartial = result.partial; // save for next itteration

    const length = Math.max(oldWords.length, newWords.length);

    const comparisonArray = Array.from({ length }, (_, i) => [
      oldWords[i] || '',
      newWords[i] || '',
    ]);

    const difference = comparisonArray.reduce((acc, [o, n]) => {
      if (o === n) return acc;
      return [...acc, [o, n]];
    }, []);

    const correctionCount = difference.reduce((acc, [o]) => {
      if (o === '') return acc;
      return acc + 1;
    }, 0);

    const recentWords = difference
      .reduce((acc, [, n]) => {
        if (!n) return acc;
        return [...acc, n];
      }, [])
      .join(' ');

    if (recentWords) {
      onSpeech({ correctionCount, recentWords });
    }
  });

  // returns "vosk"
  return {
    recognizer,
    setMute,
    destroy,
  };
};

export default initVosk;
