import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/ComfyBridgeContext';
import QueueItem from '@/components/QueueItem';

const Queue = () => {
  const { progress, lastWsMessage, isGenerating } =
    useContext(ComfyBridgeContext);

  const { executeInterrupt, interruptLoading, interruptError } =
    useContext(ComfyBridgeContext);

  if (!isGenerating) return null;

  return (
    <QueueItem
      isLoading={isGenerating}
      status={`${lastWsMessage} ${isGenerating && `${Math.round(progress * 100)}%`}`}
      progress={progress}
      onInterrupt={executeInterrupt}
      interruptLoading={interruptLoading}
      interruptError={interruptError}
    />
  );
};

export default Queue;
