const Select = ({ options, loading, label, info, ...props }) => (
  <label className="uk-form-label" title={info}>
    {label}
    <select className="uk-select" id="style-input" aria-label="Select">
      {options.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)}
    </select>
  </label>
);

export default Select;
