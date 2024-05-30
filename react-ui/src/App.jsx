import { useContext } from 'react';
import WsContext from './contexts/WsContext';
import { Page, Main, Controls, Content, Scrollable } from './components/Layout';
import UiSelector from './components/UiSelector';
import FormBuilder from './components/FormBuilder/FormBuilder';
import FormControls from './components/FormControls';
import Progress from './components/Progress/Progress';
import StatusBar from './components/StatusBar';
import ImageGrid from './components/ImageGrid/ImageGrid';

const App = () => {
  const { comfyUrl, progress, output } = useContext(WsContext);
  const images = (output?.images || []).map(
    ({ filename }) => `${comfyUrl}/view?type=output&filename=${filename}`,
  );

  return (
    <Page>
      <Main>
        <Progress value={progress} />
        <Content>
          <ImageGrid images={images} />
        </Content>
        <StatusBar />
      </Main>

      <Controls>
        <UiSelector />
        <Scrollable>
          <FormBuilder />
        </Scrollable>
        <FormControls />
      </Controls>
    </Page>
  );
};

export default App;
