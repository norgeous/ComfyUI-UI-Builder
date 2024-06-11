import PropTypes from 'prop-types';
import { InfoIcon } from '@/components/Icons';
import Tooltip from '@/components/Tooltip';

const HeaderInfo = ({ text = undefined }) => (
  <Tooltip text={text}>
    <InfoIcon className="muted" />
  </Tooltip>
);

HeaderInfo.propTypes = {
  text: PropTypes.string,
};

export default HeaderInfo;
