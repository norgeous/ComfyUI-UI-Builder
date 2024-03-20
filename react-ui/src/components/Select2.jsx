/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const Select = ({
  name,
  options,
  // loading,
  label,
  info,
  value,
  onChange,
  ...props
}) => {
  const handleChange = (event) => {
    // eslint-disable-next-line no-unused-vars
    const { label, ...state } = options[Number(event.target.value)];
    onChange(state);
  };

  return (
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
        value={String(options.map(option => option[name]).indexOf(value))}
        onChange={handleChange}
      >
        {options.map(({ label }, index) => (
          <option key={index} value={index}>{label}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
