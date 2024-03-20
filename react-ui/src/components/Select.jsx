/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const Select = ({
  options,
  // loading,
  label,
  info,
  // defaultValue,
  onChange,
  ...props
}) => (
  <label className="uk-form-label">
    {label}
    {info && (
      <>
        {' '}
        <button uk-icon="icon: question" type="button"></button>
        <div
          className="uk-card uk-card-small uk-card-body uk-card-default"
          uk-drop="pos: right-top; mode: click;"
        >
          {info}
        </div>
      </>
    )}
    <select
      {...props}
      className="uk-select"
      // defaultValue={defaultValue}
      onChange={event => onChange({[name]: event.target.value})}
    >
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>{label}</option>
      ))}
    </select>
  </label>
);

export default Select;
