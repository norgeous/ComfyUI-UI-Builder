import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import InputHeaderButton from '../form-fields/InputHeaderButton/InputHeaderButton';

const HeaderButton = ({
  className = undefined,
  label = undefined,
  onClick = () => {},
  children = null,
}) => (
  <Tooltip className={className} text={label}>
    <InputHeaderButton aria-label={label} onClick={onClick}>
      {children}
    </InputHeaderButton>
  </Tooltip>
);

HeaderButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default HeaderButton;
