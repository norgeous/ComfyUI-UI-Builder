import PropTypes from 'prop-types';

const Checkbox = ({
  name,
  value,
  onChange,
  options,
  ...props
}) => {
  const { label } = options.find((option) => option[name] === value);

  const handleChange = (event) => {
    const {
      label,
      ...newState
    } = options.find((option) => option[name] === Boolean(event.currentTarget.checked));
    onChange(newState);
  };

  return (
    <label className="uk-form-label" style={{ display: 'block', marginTop: 32 }}>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        className="uk-checkbox"
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      {' '}
      {label}
    </label>
  );
};

Checkbox.defaultProps = {
  options: [],
};

Checkbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

export default Checkbox;
