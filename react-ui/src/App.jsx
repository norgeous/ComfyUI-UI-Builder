import useAppContext from './hooks/useAppContext';
import Form from './components/Form';
import Progress from './components/Progress';
import FormBuilder from './components/FormBuilder';
import { Container, Sidebar, Main, Content } from './components/Layout';
import Carousel from './components/Carousel';

import config from './dungeons/dungeon-character-portrait';

import './App.css';

const App = () => {
  const {
    progress,
    output,
    // formState,
    // bodyData,
  } = useAppContext();

  return (
    <Container>
      <Sidebar className="uk-light">
        <h4 className="uk-text-center uk-margin-remove-vertical text-light">
          {config.name}
          {' '}
          <small><sup>{config.version}</sup></small>
        </h4>

        <div className="left-content-box left-nav-wrap">
          <FormBuilder formConfig={config.formConfig}/>
          <Form />
        </div>

      </Sidebar>

      <Main>
        <Progress value={progress} />

        <Content>
          <Carousel images={output?.images || []} />
          {/* <pre style={{ marginLeft: 460 }}>{JSON.stringify({formState},null,2)}</pre>
          <pre style={{ marginLeft: 460, whiteSpace: 'pre-wrap' }}>{JSON.stringify({bodyData},null,2)}</pre> */}
        </Content>

      </Main>
    </Container>
  );
};

export default App;
