import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import {
  SpinnerIcon,
  InterruptIcon,
  WarningIcon,
  DismissIcon,
} from '@/components/Icons';
import Tooltip from '@/components/Tooltip';
import Progress from '@/components/Progress';
import { QueueTitle } from './styled';

const getInterruptIcon = ({ interruptLoading, interruptError }) => {
  if (interruptError) return <WarningIcon />;
  if (interruptLoading) return <SpinnerIcon />;
  return <InterruptIcon />;
};

const QueueItem = ({
  id = undefined,
  loading = false,
  error = undefined,
  data = undefined,
  status = undefined,
  progress = 0,
  onInterrupt = () => {},
  interruptLoading = false,
  interruptError = '',
  onRemove = () => {},

  promptId = undefined,
  type = undefined, // execution_start | execution_cached | executing | progress | executed
  node = undefined,
  value = undefined,
  max = undefined,
}) => {
  const isError = false;
  const isComplete = (type === 'executing' && node === null) || isError;
  const isProgressing = type === 'progress';

  return (
    <Layout center pad rounded gap="md" bgfg={3}>
      {!isComplete && <SpinnerIcon />}
      {isError && <WarningIcon />}
      <QueueTitle>
        {isError && (
          <div>
            ERROR: [{error}] {data?.error?.message}
          </div>
        )}
        <div>
          {node} {!isComplete && type}{' '}
          <span className="muted" style={{ fontSize: 10 }}>
            {promptId}
          </span>
        </div>
        {isProgressing && <Progress value={value} max={max} />}
      </QueueTitle>

      <Tooltip lm text="Remove">
        <Button aria-label="Remove" onClick={onRemove}>
          <DismissIcon />
        </Button>
      </Tooltip>
    </Layout>
  );
  if (error) {
    return (
      <Layout center pad rounded gap="md" bgfg={3}>
        <WarningIcon />
        <QueueTitle>
          <div>
            ERROR: [{error}] {data?.error?.message}
          </div>
          <div className="muted" style={{ fontSize: 10 }}>
            {id}
          </div>
        </QueueTitle>

        <Tooltip lm text="Remove">
          <Button aria-label="Remove" onClick={onRemove}>
            <DismissIcon />
          </Button>
        </Tooltip>
      </Layout>
    );
  }

  return (
    <Layout center pad rounded gap="md" bgfg={3}>
      {loading && <SpinnerIcon />}
      <QueueTitle>
        <div>{status}</div>
        <div className="muted">{id}</div>
        {!!progress && <Progress value={progress} />}
      </QueueTitle>

      {loading && (
        <Tooltip lm text={interruptError || 'Interrupt'}>
          <Button
            aria-label={interruptError || 'Interrupt'}
            disabled={interruptLoading}
            onClick={onInterrupt}
          >
            {getInterruptIcon({ interruptLoading, interruptError })}
          </Button>
        </Tooltip>
      )}
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
