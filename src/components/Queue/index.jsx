import { useContext } from 'react';
import AppContext from '@/contexts/AppContext';
import WsContext from '@/contexts/WsContext';
import Button from '@/components/Button';
import { SpinnerIcon, InterruptIcon } from '@/components/Icons';
import Tooltip from '@/components/Tooltip';
import { ButtonsArea, QueueTitle } from './styled';

const Queue = () => {
  const { isGenerating } = useContext(WsContext);

  const { executeInterrupt, interruptLoading } = useContext(AppContext);

  if (!isGenerating) return null;

  return (
    <ButtonsArea>
      <SpinnerIcon />
      <QueueTitle>Job 1 (running...)</QueueTitle>
      <Tooltip text="Interrupt Job 1">
        <Button onClick={executeInterrupt}>
          {interruptLoading ? <SpinnerIcon /> : <InterruptIcon />}
        </Button>
      </Tooltip>
    </ButtonsArea>
  );
};

export default Queue;
