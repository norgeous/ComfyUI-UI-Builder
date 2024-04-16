import PropTypes from 'prop-types';

const Checkbox = ({ name, value, onChange, options, ...props }) => {
  const { label } = options.find(option => option[name] === value) || {};

  const handleChange = event => {
    const { label: _, ...newState } = options.find(
      option => option[name] === Boolean(event.currentTarget.checked),
    );
    onChange(newState);
  };

  return (
    <label
      className="uk-form-label"
      style={{ display: 'block', marginTop: 32 }}
    >
      <input
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        className="uk-checkbox"
        type="checkbox"
        checked={value || false}
        onChange={handleChange}
      />{' '}
      {label}
    </label>
  );
};

Checkbox.defaultProps = {
  name: undefined,
  options: [],
  value: undefined,
  onChange: () => {},
};

Checkbox.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
