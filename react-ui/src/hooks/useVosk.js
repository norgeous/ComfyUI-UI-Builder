import { useEffect, useState } from 'react';
import initVosk from '@/utils/vosk/initVosk';

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

const useVosk = ({
  modelBaseUrl = `${window.parent.location.pathname}vosk-models/`,
  language = 'English',
} = {}) => {
  const [targetId, setTargetId] = useState(undefined);
  const [unmutedId, setUnmutedId] = useState(undefined);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [vosk, setVosk] = useState(undefined);
  const [utterances, setUtterances] = useState([]);
  const [partial, setPartial] = useState('');

  // do nothing on mounting, waiting until unmutedId becomes set
  // once unmutedId is set, load vosk
  useEffect(() => {
    if (unmutedId && !vosk) {
      setError('');
      setTargetId(unmutedId); // save it for later, so we can tell where to put the error message when multiple on same page
      setLoading(true);
      const modelUrl = `${modelBaseUrl}${modelFileName[language] || modelFileName.English}`;
      initVosk({ modelUrl })
        .then(newVosk => {
          newVosk.recognizer.on('result', ({ result }) => {
            setUtterances(utt => [...utt, result]);
          });
          newVosk.recognizer.on('partialresult', ({ result }) => {
            setPartial(result.partial);
          });
          setVosk(newVosk);
        })
        .catch(e => {
          console.error(e); // eslint-disable-line no-console
          setError(e.message);
          setUnmutedId(undefined);
        })
        .finally(() => setLoading(false));
    }
  }, [unmutedId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (vosk) {
      vosk.setMute(!unmutedId);
    }
  }, [vosk, unmutedId]);
  // eslint-disable-line react-hooks/exhaustive-deps

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
    targetId,
    unmutedId,
    setUnmutedId,
    loading,
    error,
    vosk,
    // utterances,
    // partial,
    // simpleOutput,
    tail,
  };
};

export default useVosk;
