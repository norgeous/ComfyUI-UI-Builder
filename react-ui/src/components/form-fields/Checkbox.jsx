/* eslint-disable react/prop-types */

const Checkbox = ({
  name, value, onChange, options, ...props
}) => {
  const { label } = options.find((option) => option[name] === value);

  const handleChange = (event) => {
    const { label, ...newState } = options.find((option) => option[name] === Boolean(event.currentTarget.checked));
    onChange(newState);
  };

  return (
    <label className="uk-form-label" style={{ display: 'block', marginTop: 32 }}>
      <input
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
export default Checkbox;
