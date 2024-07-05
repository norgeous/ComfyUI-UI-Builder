import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import ImageGrid from '@/components/ImageGrid';
import Timeline from '@/components//Timeline';
import StatusBar from '@/components/StatusBar';
import { ContentArea, Main } from './styled';

const MainContent = () => {
  const { comfyUrl, output } = useContext(ComfyBridgeContext);
  const images = (output?.images || []).map(
    ({ filename }) => `${comfyUrl}/view?type=output&filename=${filename}`,
  );

  return (
    <Main>
      <ContentArea>
        <ImageGrid images={images} />
      </ContentArea>
      <Timeline />
      <StatusBar />
    </Main>
  );
};

export default MainContent;
