import { useEffect, useState } from 'react';
import { createModel } from 'vosk-browser';
import MicrophoneStream from 'microphone-stream';
import AudioStreamer from '@/utils/AudioStreamer';
import audioBucket from '@/utils/audioBucket';

const modelFileName = {
  English: 'vosk-model-small-en-us-0.15.tar.gz',
  Catalan: 'vosk-model-small-ca-0.4.tar.gz',
  Chinese: 'vosk-model-small-cn-0.3.tar.gz',
  Deutsch: 'vosk-model-small-de-0.15.tar.gz',
  'Indian English': 'vosk-model-small-en-in-0.4.tar.gz',
  Español: 'vosk-model-small-es-0.3.tar.gz',
  Farsi: 'vosk-model-small-fa-0.4.tar.gz',
  French: 'vosk-model-small-fr-pguyot-0.3.tar.gz',
  Italiano: 'vosk-model-small-it-0.4.tar.gz',
  Malayalam: 'vosk-model-malayalam-bigram.tar.gz',
  Portuguese: 'vosk-model-small-pt-0.3.tar.gz',
  Russian: 'vosk-model-small-ru-0.4.tar.gz',
  Turkish: 'vosk-model-small-tr-0.3.tar.gz',
  Vietnamese: 'vosk-model-small-vn-0.3.tar.gz',
};

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

  // setMute function
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

  // destroy function
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

const useVosk = ({
  enabled = false,
  modelBaseUrl = `${window.parent.location.pathname}vosk-models/`,
  language = 'English',
}) => {
  const [loading, setLoading] = useState(false);
  const [vosk, setVosk] = useState(undefined);
  const [utterances, setUtterances] = useState([]);
  const [partial, setPartial] = useState('');

  useEffect(() => {
    if (enabled) {
      (async () => {
        setLoading(true);
        const modelUrl = `${modelBaseUrl}${modelFileName[language] || modelFileName.English}`;
        console.log({
          modelBaseUrl,
          modelUrl,
          wplp: window.parent.location.pathname,
        });
        const newVosk = await initVosk({ modelUrl });
        newVosk.recognizer.on('result', ({ result }) => {
          setUtterances(utt => [...utt, result]);
        });
        newVosk.recognizer.on('partialresult', ({ result }) => {
          setPartial(result.partial);
        });
        setVosk(newVosk);
        setLoading(false);
      })();
    }

    return () => vosk?.destroy();
  }, [enabled]); // eslint-disable-line react-hooks/exhaustive-deps

  const simpleUtterances = utterances
    .reduce(
      (acc1, { result }) =>
        result
          ? [
              ...acc1,
              result
                .reduce((acc2, { word }) => (word ? [...acc2, word] : acc2), [])
                .join(' '),
            ]
          : acc1,
      [],
    )
    .join(' ');

  const simpleOutput = `${simpleUtterances} ${partial}`.trim();

  const tail = simpleOutput.split(' ').slice(-25).join(' ');

  return {
    loading,
    vosk,
    // utterances,
    // partial,
    // simpleOutput,
    tail,
  };
};

export default useVosk;
