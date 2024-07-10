import PropTypes from 'prop-types';
import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { SpinnerIcon, DismissIcon, InterruptIcon } from '@/components/Icons';
import Tooltip from '@/components/Tooltip';
import Progress from '@/components/Progress';
import { Img, QueueTitle } from './styled';

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
  const isError = false;
  const isComplete = (type === 'executing' && node === null) || isError;
  const isProgressing = type === 'progress';

  const handleRemove = () => {
    bridge.updateState('queue', { [promptId]: undefined });
  };

  return (
    <Layout
      center
      pad
      rounded
      gap="md"
      bgfg={3}
      style={{ display: 'inline-flex' }}
    >
      {!isComplete && !isQueued && <SpinnerIcon />}

      {!!images?.length && (
        <Button
          small
          aria-label="Select"
          onClick={() => bridge.updateState('queueSelected', { promptId })}
        >
          {images && <Img alt="result" src={`${images[0]}`} />}
        </Button>
      )}

      {!isComplete && (
        <QueueTitle>
          <div>
            {node} {type}{' '}
            <span className="muted" style={{ fontSize: 10 }}>
              {promptId}
            </span>
          </div>
          {isProgressing && <Progress value={value} max={max} />}
        </QueueTitle>
      )}

      {(isQueued || isComplete) && (
        <Tooltip lm text="Remove">
          <Button aria-label="Remove" onClick={handleRemove}>
            <DismissIcon />
          </Button>
        </Tooltip>
      )}

      {isProgressing && (
        <Tooltip lm text="Interrupt">
          <Button aria-label="Interrupt" onClick={handleRemove}>
            <InterruptIcon />
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
