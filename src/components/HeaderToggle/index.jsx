import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import { InputHeaderButton } from './styled';

const HeaderToggle = ({
  label = undefined,
  value = false,
  onChange = () => {},
  children = null,
}) => (
  <Tooltip text={`${label} (${value ? 'On' : 'Off'})`}>
    <InputHeaderButton
      aria-label={`${label} (${value ? 'On' : 'Off'})`}
      onClick={() => onChange(!value)}
      value={value}
    >
      {children}
    </InputHeaderButton>
  </Tooltip>
);

HeaderToggle.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default HeaderToggle;
