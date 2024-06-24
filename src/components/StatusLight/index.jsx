import PropTypes from 'prop-types';
import { Light } from './styled';

const emojis = {
  DEFAULT: '⚫',
  CONNECTING: '🔵',
  CONNECTED: '🟢',
  DISCONNECTED: '🔴',
};

const StatusLight = ({ status = 'DEFAULT' }) => <Light>{emojis[status]}</Light>;

StatusLight.propTypes = {
  status: PropTypes.string,
};

export default StatusLight;
