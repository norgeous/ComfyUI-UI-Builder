import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => (
  <button
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="uk-button uk-button-danger"
    type="button"
  >
    {children}
  </button>
);

Button.defaultProps = {
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
