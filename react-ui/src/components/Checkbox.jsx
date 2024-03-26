/* eslint-disable react/prop-types */

const Checkbox = ({ name, label, value, onChange, ...props }) => {
  const handleChange = (event) => onChange({ [name]: Boolean(event.currentTarget.checked) });

  return (
    <label className="uk-form-label" style={{ display: 'block', marginTop: 30 }}>
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
