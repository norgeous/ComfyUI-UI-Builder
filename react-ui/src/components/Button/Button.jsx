import PropTypes from 'prop-types';

const Button = ({ children = null, ...props }) => (
  <button
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
