import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import { Light } from './styles';

const captions = {
  DEFAULT: 'Status unknown',
  CONNECTING: 'Connecting…',
  CONNECTED: 'Connected!',
  DISCONNECTED: 'Disconnected',
};

const StatusLight = ({ status = 'DEFAULT' }) => (
  <Tooltip text={captions[status]}>
    <Light status={status} />
  </Tooltip>
);

StatusLight.propTypes = {
  status: PropTypes.oneOf([
    'DEFAULT',
    'CONNECTING',
    'CONNECTED',
    'DISCONNECTED',
  ]),
};

export default StatusLight;
