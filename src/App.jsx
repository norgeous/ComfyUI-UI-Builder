import { useContext } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import WsContext from './contexts/WsContext';
import { Page, Main, Content } from './components/Layout';
import Progress from './components/Progress/Progress';
import StatusBar from './components/StatusBar/StatusBar';
import ImageGrid from './components/ImageGrid/ImageGrid';
import { Theme } from './components/globalStyles';

const App = () => {
  const { comfyUrl, progress, output } = useContext(WsContext);
  const images = (output?.images || []).map(
    ({ filename }) => `${comfyUrl}/view?type=output&filename=${filename}`,
  );

  return (
    <>
      <Theme />
      <Page>
        <Main>
          <Progress value={progress} />
          <Content>
            <ImageGrid images={images} />
          </Content>
          <StatusBar />
        </Main>

        <Sidebar />
      </Page>
    </>
  );
};

export default App;
