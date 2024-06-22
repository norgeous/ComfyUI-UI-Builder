import { useContext } from 'react';
import AppContext from '@/contexts/AppContext';
import WsContext from '@/contexts/WsContext';
import QueueItem from '@/components/QueueItem';

const Queue = () => {
  const { progress, isGenerating } = useContext(WsContext);

  const { executeInterrupt, interruptLoading, interruptError } =
    useContext(AppContext);

  if (!isGenerating) return null;

  return (
    <QueueItem
      jobName="Job 1"
      isLoading={isGenerating}
      status="Running..."
      progress={progress}
      onInterrupt={executeInterrupt}
      interruptLoading={interruptLoading}
      interruptError={interruptError}
    />
  );
};

export default Queue;
