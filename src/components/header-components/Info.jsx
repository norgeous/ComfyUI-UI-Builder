import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import { InfoIcon } from '../Icons/Icons';

const Info = ({ text = undefined }) => (
  <Tooltip text={text}>
    <InfoIcon className="muted" />
  </Tooltip>
);

Info.propTypes = {
  text: PropTypes.string,
};

export default Info;
