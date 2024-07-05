import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import ImageGrid from '@/components/ImageGrid';
import Timeline from '@/components//Timeline';
import StatusBar from '@/components/StatusBar';
import { ContentArea, Main } from './styled';

const MainContent = () => {
  const { data, comfyUrl, output } = useContext(ComfyBridgeContext);

  const images = (output?.images || []).map(
    ({ filename }) => `${comfyUrl}/view?type=output&filename=${filename}`,
  );

  const queue = Object.entries(data.queue).map(([promptId, item]) => ({
    promptId,
    ...item,
  }));

  return (
    <Main>
      <ContentArea>
        <ImageGrid images={images} />
      </ContentArea>
      <Timeline items={queue} />
      <StatusBar />
    </Main>
  );
};

export default MainContent;
