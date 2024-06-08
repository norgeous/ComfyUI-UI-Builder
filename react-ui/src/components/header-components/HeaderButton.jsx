import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import InputHeaderButton from '../form-fields/InputHeaderButton/InputHeaderButton';

const HeaderButton = ({
  className = undefined,
  label = undefined,
  onClick = () => {},
  children = null,
  ...props
}) => (
  <Tooltip className={className} text={label}>
    <InputHeaderButton
      aria-label={label}
      onClick={onClick}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
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