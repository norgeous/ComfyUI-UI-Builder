import { createModel } from 'vosk-browser';
import MicrophoneStream from 'microphone-stream';
import AudioStreamer from './AudioStreamer';
import audioBucket from './audioBucket';

const initVosk = async ({ modelUrl }) => {
  // load vosk
  const model = await createModel(modelUrl);

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
      micStream?.unpipe(audioStreamer);
      micStream?.pipe(audioBucket);
    } else {
      micStream?.unpipe(audioBucket);
      micStream?.pipe(audioStreamer);
    }
  };
  // unmute the mic
  setMute(false);

  // define destroy function
  const destroy = () => {
    recognizer.remove();
    micStream.stop();
    mediaStream.getTracks().forEach(track => track.stop());
    model.terminate();
  };

  // return "vosk"
  return {
    recognizer,
    setMute,
    destroy,
  };
};

export default initVosk;
