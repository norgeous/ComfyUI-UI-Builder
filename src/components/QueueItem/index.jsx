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
}) => {
  if (error) {
    return (
      <Layout center gap="md">
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
    <Layout center gap="md">
      {loading && <SpinnerIcon />}
      <QueueTitle>
        <div>{status}</div>
        <div className="muted" style={{ fontSize: 10 }}>
          {id}
        </div>
      </QueueTitle>

      {!!progress && <Progress value={progress} />}

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
