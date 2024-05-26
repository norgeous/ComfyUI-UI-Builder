import useVosk from '@/hooks/useVosk';
import useVoskModel from '@/hooks/useVoskModel';
import useMic from '@/hooks/useMic';

const MODELPATH = '/vosk-models/vosk-model-small-en-us-0.15.tar.gz';

const useSpeech = () => {
  const { loading, model } = useVoskModel(MODELPATH);
  const { recognizer, utterances, partial } = useVosk(model);
  const { muted, toggleMic } = useMic({ recognizer, loading });

  const simpleUtterances = utterances
    .map(utt => utt.result?.map(({ word }) => word).join(' '))
    .join('. ');
  const simpleOutput = `${simpleUtterances}. ${partial}`;

  const tail = simpleOutput.split(' ').slice(-40).join(' ');

  return { loading, muted, toggleMic, utterances, partial, tail };
};

export default useSpeech;