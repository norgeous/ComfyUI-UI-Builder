import { useState } from 'react';
import useVosk from '@/hooks/useVosk';
import useVoskModel from '@/hooks/useVoskModel';
import useMic from '@/hooks/useMic';

const MODELPATH = `${window.parent.location.pathname}vosk-models/vosk-model-small-en-us-0.15.tar.gz`;

const useSpeech = () => {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMic = () => setIsMuted(!isMuted);

  const { loading, model } = useVoskModel(MODELPATH);
  const { recognizer, utterances, partial } = useVosk(model);
  useMic({ recognizer, loading, isMuted, setIsMuted });

  // start by doing nothing

  // if unmuting (in the context)
  // - load en vosk model
  // - give model to vosk, get recogniser
  // - give recogniser to mic stream
  // we can then get utterances and partial

  // if muting
  // - swap audio bucket to empty

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
