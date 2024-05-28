import { useEffect, useState } from 'react';

const useVosk = model => {
  const [recognizer, setRecognizer] = useState();
  const [utterances, setUtterances] = useState([]);
  const [partial, setPartial] = useState('');

  useEffect(() => {
    if (!model) return;
    const recognizer = new model.KaldiRecognizer(48000);
    recognizer.setWords(true);
    recognizer.on('result', message => {
      const { result } = message;
      setUtterances(utt => [...utt, result]);
    });
    recognizer.on('partialresult', message => {
      setPartial(message.result.partial);
    });

    setRecognizer(recognizer);
  }, [model]);

  return {
    recognizer,
    utterances,
    partial,
  };
};

export default useVosk;
