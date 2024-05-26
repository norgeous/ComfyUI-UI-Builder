import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const models = [
  {
    name: 'Catalan',
    path: 'vosk-model-small-ca-0.4.tar.gz',
  },
  {
    name: 'Chinese',
    path: 'vosk-model-small-cn-0.3.tar.gz',
  },
  {
    name: 'Deutsch',
    path: 'vosk-model-small-de-0.15.tar.gz',
  },
  {
    name: 'Indian English',
    path: 'vosk-model-small-en-in-0.4.tar.gz',
  },
  {
    name: 'English',
    path: 'vosk-model-small-en-us-0.15.tar.gz',
  },
  {
    name: 'Español',
    path: 'vosk-model-small-es-0.3.tar.gz',
  },
  {
    name: 'Farsi',
    path: 'vosk-model-small-fa-0.4.tar.gz',
  },
  {
    name: 'French',
    path: 'vosk-model-small-fr-pguyot-0.3.tar.gz',
  },
  {
    name: 'Italiano',
    path: 'vosk-model-small-it-0.4.tar.gz',
  },
  {
    name: 'Malayalam',
    path: 'vosk-model-malayalam-bigram.tar.gz',
  },
  {
    name: 'Portuguese',
    path: 'vosk-model-small-pt-0.3.tar.gz',
  },
  {
    name: 'Russian',
    path: 'vosk-model-small-ru-0.4.tar.gz',
  },
  {
    name: 'Turkish',
    path: 'vosk-model-small-tr-0.3.tar.gz',
  },
  {
    name: 'Vietnamese',
    path: 'vosk-model-small-vn-0.3.tar.gz',
  },
];

const ModelLoader = ({ value, onChange, loading }) => (
  // const [model, setModel] = useState(models[4].path);

  <Wrapper>
    <select
      style={{
        height: '2rem',
        margin: 'auto 0',
        width: '10rem',
      }}
      // defaultValue={models[4].path}
      onChange={newValue => {
        onChange(newValue);
        // setModel(value);
      }}
      value={value}
    >
      {models.map(model => (
        <option value={model.path} key={model.path}>
          {model.name}
        </option>
      ))}
    </select>
    {loading && 'Loading...'}
  </Wrapper>
);
export default ModelLoader;
