import { useContext } from 'react';
import WsContext from '@/contexts/WsContext';
import ImageGrid from '@/components/ImageGrid';
import StatusBar from '@/components/StatusBar';
import { ContentArea, Main } from './styled';

const MainContent = () => {
  const { comfyUrl, output } = useContext(WsContext);
  const images = (output?.images || []).map(
    ({ filename }) => `${comfyUrl}/view?type=output&filename=${filename}`,
  );

  return (
    <Main>
      <ContentArea>
        <ImageGrid images={images} />
      </ContentArea>
      <StatusBar />
    </Main>
  );
};

export default MainContent;
