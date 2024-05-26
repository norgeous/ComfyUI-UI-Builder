import styled from 'styled-components';
import useVosk from '@/hooks/useVosk';
import useVoskModel from '@/hooks/useVoskModel';
import { useState } from 'react';
import Microphone from './Microphone';
import ModelLoader from './ModelLoader';

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
  const [modelName, setModelName] = useState(
    'vosk-model-small-en-us-0.15.tar.gz',
  );
  const { loading, model } = useVoskModel(`/vosk-models/${modelName}`);
  const { recognizer, utterances, partial } = useVosk(model);

  return (
    <Wrapper>
      <ModelLoader
        loading={loading}
        value={modelName}
        onChange={newValue => setModelName(newValue)}
      />
      <Header>
        <Microphone recognizer={recognizer} loading={loading} />
      </Header>
      <ResultContainer>
        {utterances.map((utt, uindex) =>
          utt?.result?.map((word, windex) => (
            <Word
              key={`${uindex}-${windex}`}
              confidence={word.conf}
              title={`Confidence: ${(word.conf * 100).toFixed(2)}%`}
            >
              {word.word}{' '}
            </Word>
          )),
        )}
        <br />
        <br />
        <span key="partial">{partial}</span>
      </ResultContainer>
    </Wrapper>
  );
};

export default InputSpeech;
