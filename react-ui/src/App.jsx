import useAppContext from './hooks/useAppContext';
import { Page, Main, Controls, Content } from './components/Layout';
import UiSelector from './components/UiSelector';
import FormBuilder from './components/FormBuilder';
import Form from './components/Form';
import Progress from './components/Progress';
import Carousel from './components/Carousel';
import StatusBar from './components/StatusBar';

import './App.css';

const App = () => {
  const {
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
        <UiSelector />
        <FormBuilder />
        <Form />
      </Controls>
    </Page>
  );
};

export default App;
