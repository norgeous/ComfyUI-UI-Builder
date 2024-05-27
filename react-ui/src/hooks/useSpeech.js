import useVosk from '@/hooks/useVosk';
import useVoskModel from '@/hooks/useVoskModel';
import useMic from '@/hooks/useMic';

const MODELPATH = `${window.parent.location.pathname}vosk-models/vosk-model-small-en-us-0.15.tar.gz`;

const useSpeech = () => {
  const { loading, model } = useVoskModel(MODELPATH);
  const { recognizer, utterances, partial } = useVosk(model);
  const { isMuted, toggleMic } = useMic({ recognizer, loading });

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

  return { loading, isMuted, toggleMic, utterances, partial, tail };
};

export default useSpeech;
