import { useContext } from 'react';
import WsContext from '@/contexts/WsContext';
import { Main, Content } from '@/components/Layout';
import Progress from '@/components/Progress/Progress';
import StatusBar from '@/components/StatusBar/StatusBar';
import ImageGrid from '@/components/ImageGrid/ImageGrid';

const MainContent = () => {
  const { comfyUrl, progress, output } = useContext(WsContext);
  const images = (output?.images || []).map(
    ({ filename }) => `${comfyUrl}/view?type=output&filename=${filename}`,
  );

  return (
    <Main>
      <Progress value={progress} />
      <Content>
        <ImageGrid images={images} />
      </Content>
      <StatusBar />
    </Main>
  );
};

export default MainContent;
