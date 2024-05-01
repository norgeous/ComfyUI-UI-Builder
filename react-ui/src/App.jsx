import { useContext } from 'react';
import WsContext from './contexts/WsContext';
import { GlobalStyle, Theme1Style } from './components/globalStyles';
import { Page, Main, Controls, Content } from './components/Layout';
// import UiSelector from './components/UiSelector';
import FormBuilder from './components/FormBuilder';
import FormControls from './components/FormControls';
import Progress from './components/Progress/Progress';
import Carousel from './components/Carousel/Carousel';
import StatusBar from './components/StatusBar';

const App = () => {
  const { progress } = useContext(WsContext);

  return (
    <>
      <GlobalStyle />
      <Theme1Style />
      <Page>
        <Main>
          <Progress value={progress} />
          <Content>
            <Carousel />
          </Content>
          <StatusBar />
        </Main>

        <Controls>
          {/* <UiSelector /> */}
          <FormBuilder />
          <FormControls />
        </Controls>
      </Page>
    </>
  );
};

export default App;
