import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import ImageGrid from '@/components/ImageGrid';
import Timeline from '@/components//Timeline';
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

  const selected = data.queueSelected.promptId;
  const { images } = queue.find(({ promptId }) => promptId === selected) || {};

  return (
    <Main>
      <ContentArea>
        <ImageGrid images={images} />
      </ContentArea>
      <Timeline items={queue} />
    </Main>
  );
};

export default MainContent;
