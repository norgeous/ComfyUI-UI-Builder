import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { SpinnerIcon, InterruptIcon, WarningIcon } from '@/components/Icons';
import Tooltip from '@/components/Tooltip';
import { QueueTitle } from './styled';

const getInterruptIcon = ({ interruptLoading, interruptError }) => {
  if (interruptError) return <WarningIcon />;
  if (interruptLoading) return <SpinnerIcon />;
  return <InterruptIcon />;
};

const QueueItem = ({
  jobName = '',
  isLoading = false,
  status = 'unknown',
  onInterrupt = () => {},
  interruptLoading = false,
  interruptError = '',
}) => (
  <Layout center>
    {isLoading && <SpinnerIcon />}
    <QueueTitle>
      {jobName} ({status})
    </QueueTitle>
    <Tooltip text={interruptError || `Interrupt ${jobName}`}>
      <Button disabled={interruptLoading} onClick={onInterrupt}>
        {getInterruptIcon({ interruptLoading, interruptError })}
      </Button>
    </Tooltip>
  </Layout>
);

QueueItem.propTypes = {
  jobName: PropTypes.string,
  isLoading: PropTypes.bool,
  status: PropTypes.string,
  onInterrupt: PropTypes.func,
  interruptLoading: PropTypes.bool,
  interruptError: PropTypes.string,
};

export default QueueItem;
