import { useContext } from 'react';
import { WsContext } from './contexts/WsContext';
import {
  Page, Main, Controls, Content,
} from './components/Layout';
import UiSelector from './components/UiSelector';
import FormBuilder from './components/FormBuilder';
import FormControls from './components/FormControls';
import Progress from './components/Progress';
import Carousel from './components/Carousel';
import StatusBar from './components/StatusBar';

const App = () => {
  const { progress } = useContext(WsContext);

  return (
    <Page>
      <Main>
        <Progress value={progress} />
        <Content>
          <Carousel />
        </Content>
        <StatusBar />
      </Main>

      <Controls className="uk-light">
        <UiSelector />
        <FormBuilder />
        <FormControls />
      </Controls>
    </Page>
  );
};

export default App;
