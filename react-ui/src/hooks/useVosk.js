import { useState } from 'react';
import { createModel } from 'vosk-browser';

const useVosk = () => {
  const [utterances, setUtterances] = useState([]);
  const [partial, setPartial] = useState('');
  const [loadedModel, setLoadedModel] = useState();
  const [recognizer, setRecognizer] = useState();
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const loadModel = async path => {
    setLoading(true);
    loadedModel?.model.terminate();

    const model = await createModel(`/vosk-models/${path}`);

    setLoadedModel({ model, path });
    const recognizer = new model.KaldiRecognizer(48000);
    recognizer.setWords(true);
    recognizer.on('result', message => {
      const { result } = message;
      setUtterances(utt => [...utt, result]);
    });

    recognizer.on('partialresult', message => {
      setPartial(message.result.partial);
    });

    setRecognizer(() => {
      setLoading(false);
      setReady(true);
      return recognizer;
    });
  };

  return {
    loadModel,
    loadedModel,
    ready,
    setReady,
    loading,
    recognizer,
    utterances,
    partial,
  };
};

export default useVosk;
