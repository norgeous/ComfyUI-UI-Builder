import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import { Light } from './styled';

const captions = {
  DEFAULT: 'Status unknown',
  CONNECTING: 'Connecting…',
  CONNECTED: 'Connected!',
  DISCONNECTED: 'Disconnected',
};

const emojis = {
  DEFAULT: '⚫',
  CONNECTING: '🔵',
  CONNECTED: '🟢',
  DISCONNECTED: '🔴',
};

const StatusLight = ({ status = 'DEFAULT' }) => (
  <Tooltip text={captions[status]}>
    <Light>{emojis[status]}</Light>
  </Tooltip>
);

StatusLight.propTypes = {
  status: PropTypes.string,
};

export default StatusLight;
