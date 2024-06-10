import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip/Tooltip';
import { InfoIcon } from '@/components/Icons/Icons';

const HeaderInfo = ({ text = undefined }) => (
  <Tooltip text={text}>
    <InfoIcon className="muted" />
  </Tooltip>
);

HeaderInfo.propTypes = {
  text: PropTypes.string,
};

export default HeaderInfo;
