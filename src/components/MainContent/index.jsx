import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import ImageGrid from '@/components/ImageGrid';
import Timeline from '@/components//Timeline';
import StatusBar from '@/components/StatusBar';
import { ContentArea, Main } from './styled';

const MainContent = () => {
  const { data } = useContext(ComfyBridgeContext);

  const queue = Object.entries(data.queue)
    .map(([promptId, item]) => ({
      promptId,
      images: item.output?.images.map(
        ({ filename }) =>
          `${data.ws.comfyUrl}/view?type=output&filename=${filename}`,
      ),
      ...item,
    }))
    .toReversed();

  const { images } = queue[0];

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
