import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import ImageGrid from '@/components/ImageGrid';
import Timeline from '@/components/Timeline';
import { ContentArea, Main } from './styled';

const MainContent = () => {
  const { data } = useContext(ComfyBridgeContext);

  const queue = Object.entries(data.queue)
    .filter(([, item]) => item)
    .map(([promptId, item]) => ({
      promptId,
      images: item.output?.images.map(image => {
        const params = new URLSearchParams();
        Object.entries(image).forEach(([key, value]) =>
          params.append(key, value),
        );

        return `${data.ws.comfyUrl}/view?${params.toString()}`;
      }),
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
