const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="uk-button uk-button-danger"
    type="button"
  >
    {children}
  </button>
);

export default Button;
