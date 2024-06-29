import { useContext } from 'react';
import AppContext from '@/contexts/AppContext';
import QueueItem from '@/components/QueueItem';
import WsContext from '@/contexts/WsContext';

const Queue = () => {
  const { progress, lastWsMessage, isGenerating } = useContext(WsContext);

  const { executeInterrupt, interruptLoading, interruptError } =
    useContext(AppContext);

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
