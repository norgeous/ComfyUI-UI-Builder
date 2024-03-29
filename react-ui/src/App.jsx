import useAppContext from './hooks/useAppContext';
import Form from './components/Form';
import Progress from './components/Progress';
import FormBuilder from './components/FormBuilder';
import { Page, Main, Controls, Content } from './components/Layout';
import Carousel from './components/Carousel';
import StatusBar from './components/StatusBar';

import './App.css';

const App = () => {
  const {
    config,
    progress,
    output,
  } = useAppContext();

  return (
    <Page>
      <Main>
        <Progress value={progress} />
        <Content>
          <Carousel images={output?.images || []} />
        </Content>
        <StatusBar />
      </Main>

      <Controls className="uk-light">
        <h4 className="uk-text-center uk-margin-remove-vertical text-light">
          {config.emoji}
          {' '}
          {config.name}
          {' '}
          <small><sup>{config.version}</sup></small>
        </h4>
        <FormBuilder formConfig={config.formConfig}/>
        <Form />
      </Controls>
    </Page>
  );
};

export default App;
