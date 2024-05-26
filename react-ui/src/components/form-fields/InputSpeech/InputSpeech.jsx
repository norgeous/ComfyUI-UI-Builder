import styled from 'styled-components';
import useVosk from '@/hooks/useVosk';
import useVoskModel from '@/hooks/useVoskModel';
import useMic from '@/hooks/useMic';
import Microphone from './Microphone';

const Wrapper = styled.div`
  width: 80%;
  text-align: left;
  max-width: 700px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem auto;
`;

const ResultContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  border: 1px solid #aaaaaa;
  padding: 1rem;
  resize: vertical;
  overflow: auto;
`;

const Word = styled.span`
  opacity: ${({ confidence }) => confidence};
  white-space: normal;
`;

const InputSpeech = () => {
  const { loading, model } = useVoskModel(
    '/vosk-models/vosk-model-small-en-us-0.15.tar.gz',
  );
  const { recognizer, utterances, partial } = useVosk(model);
  const { muted, toggleMic } = useMic({ recognizer, loading });

  return (
    <Wrapper>
      <Header>
        <Microphone loading={loading} muted={muted} toggleMic={toggleMic} />
      </Header>
      <ResultContainer>
        {utterances.map((utt, uindex) =>
          utt?.result?.map((word, windex) => (
            <Word
              // eslint-disable-next-line react/no-array-index-key
              key={`${uindex}-${windex}`}
              confidence={word.conf}
              title={`Confidence: ${(word.conf * 100).toFixed(2)}%`}
            >
              {word.word}{' '}
            </Word>
          )),
        )}
        <span key="partial">{partial}</span>
      </ResultContainer>
    </Wrapper>
  );
};

export default InputSpeech;
