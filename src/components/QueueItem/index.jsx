import PropTypes from 'prop-types';
import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { SpinnerIcon, DismissIcon } from '@/components/Icons';
import Tooltip from '@/components/Tooltip';
import Progress from '@/components/Progress';
import { Img, QueueTitle } from './styled';

const QueueItem = ({
  promptId = undefined,
  type = undefined, // execution_start | execution_cached | executing | progress | executed
  node = undefined,
  value = undefined,
  max = undefined,
  images = undefined,
  onRemove = () => {},
}) => {
  const { bridge } = useContext(ComfyBridgeContext);

  const isError = false;
  const isComplete = (type === 'executing' && node === null) || isError;
  const isProgressing = type === 'progress';

  return (
    <Layout center pad rounded gap="md" bgfg={3}>
      <Button
        small
        aria-label="Select"
        onClick={() => bridge.updateState('queueSelected', { promptId })}
      >
        {images && <Img src={`${images[0]}`} />}
      </Button>

      {!isComplete && <SpinnerIcon />}

      <QueueTitle>
        <div>
          {node} {!isComplete && type}{' '}
          <span className="muted" style={{ fontSize: 10 }}>
            {promptId}
          </span>
        </div>
        {isProgressing && <Progress value={value} max={max} />}
      </QueueTitle>

      <Tooltip lm text="Remove">
        <Button small aria-label="Remove" onClick={onRemove}>
          <DismissIcon />
        </Button>
      </Tooltip>
    </Layout>
  );
};

QueueItem.propTypes = {
  id: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  data: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  status: PropTypes.string,
  progress: PropTypes.number,
  onInterrupt: PropTypes.func,
  interruptLoading: PropTypes.bool,
  interruptError: PropTypes.string,
  onRemove: PropTypes.func,
};

export default QueueItem;
