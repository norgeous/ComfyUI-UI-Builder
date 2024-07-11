import PropTypes from 'prop-types';
import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import {
  SpinnerIcon,
  DismissIcon,
  InterruptIcon,
  QueuedIcon,
} from '@/components/Icons';
import Tooltip from '@/components/Tooltip';
import Progress from '@/components/Progress';
import { HitArea, Img, QueueTitle } from './styles';

const QueueItem = ({
  promptId = undefined,
  type = undefined, // execution_start | execution_cached | executing | progress | executed
  node = undefined, // node number string
  value = undefined, // progress value
  max = undefined, // progress max
  images = undefined,
}) => {
  const { bridge } = useContext(ComfyBridgeContext);

  const isQueued = type === undefined;
  const isComplete = type === 'executing' && node === null;
  const isProgressing = !isComplete && !isQueued;

  const handleCancel = () => {
    bridge.qDelete({ promptId });
  };

  const handleInterrupt = () => {
    bridge.interrupt();
  };

  const handleRemove = () => {
    bridge.updateState('queue', { [promptId]: undefined });
  };

  const handleSelect = () => bridge.updateState('queueSelected', { promptId });

  return (
    <Layout pad rounded bgfg={3} style={{ display: 'inline-flex' }}>
      <HitArea
        small
        aria-label="Select"
        onClick={handleSelect}
        style={{ width: 100, height: 40 }}
      >
        {isQueued && (
          <div style={{ width: 37, height: 37 }}>
            <QueuedIcon />
          </div>
        )}
        {isProgressing && !images && (
          <div style={{ width: 37, height: 37 }}>
            <SpinnerIcon />
          </div>
        )}
        {images && <Img alt="result" src={`${images[0]}`} />}

        <QueueTitle>
          <div className="muted">{promptId}</div>
          {isQueued && <div>Queued</div>}
          {isComplete && <div>×{images.length} images</div>}
          {isProgressing && (
            <>
              <div>{node}</div>
              <Progress value={value} max={max} />
            </>
          )}
        </QueueTitle>
      </HitArea>

      {isQueued && (
        <Tooltip lm text="Cancel">
          <Button small aria-label="Cancel" onClick={handleCancel}>
            <DismissIcon />
          </Button>
        </Tooltip>
      )}

      {isProgressing && (
        <Tooltip lm text="Interrupt">
          <Button small aria-label="Interrupt" onClick={handleInterrupt}>
            <InterruptIcon />
          </Button>
        </Tooltip>
      )}

      {isComplete && (
        <Tooltip lm text="Remove">
          <Button small aria-label="Remove" onClick={handleRemove}>
            <DismissIcon />
          </Button>
        </Tooltip>
      )}
    </Layout>
  );
};

QueueItem.propTypes = {
  promptId: PropTypes.string,
  type: PropTypes.string,
  node: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
};

export default QueueItem;
