import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import { InputHeaderButton } from './styled';

const HeaderButton = ({
  className = undefined,
  label = undefined,
  onClick = () => {},
  lm = false,
  children = null,
  ...props
}) => (
  <Tooltip className={className} text={label} lm={lm}>
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
  lm: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default HeaderButton;
