import { useState } from 'react';
import styled from 'styled-components';
import { createModel } from 'vosk-browser';
import Microphone from './microphone';
import ModelLoader from './model-loader';

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

const Recognizer = () => {
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

  return (
    <Wrapper>
      <ModelLoader
        onModelChange={path => setReady(loadedModel?.path === path)}
        onModelSelect={path => {
          if (loadedModel?.path !== path) {
            loadModel(path);
          }
        }}
        loading={loading}
      />
      <Header>
        <Microphone recognizer={recognizer} loading={loading} ready={ready} />
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

export default Recognizer;
