import useVosk from '@/hooks/useVosk';
import useVoskModel from '@/hooks/useVoskModel';
import useMic from '@/hooks/useMic';

const MODELPATH = `${window.parent.location.pathname}vosk-models/vosk-model-small-en-us-0.15.tar.gz`;

const useSpeech = () => {
  const { loading, model } = useVoskModel(MODELPATH);
  const { recognizer, utterances, partial } = useVosk(model);
  const { muted, toggleMic } = useMic({ recognizer, loading });

  const simpleUtterances = utterances
    .map(utt => utt.result?.map(({ word }) => word).join(' '))
    .join(' ');
  const simpleOutput = `${simpleUtterances} ${partial}`.trim();

  const tail = simpleOutput.split(' ').slice(-25).join(' ');

  return { loading, muted, toggleMic, utterances, partial, tail };
};

export default useSpeech;
