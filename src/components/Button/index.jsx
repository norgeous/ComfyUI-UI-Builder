import PropTypes from 'prop-types';
import { Btn } from './styled';

const Button = ({
  wide = false,
  variant = undefined,
  children = null,
  ...props
}) => (
  <Btn
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    $wide={wide}
    $variant={variant}
  >
    {children}
  </Btn>
);

Button.propTypes = {
  wide: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
