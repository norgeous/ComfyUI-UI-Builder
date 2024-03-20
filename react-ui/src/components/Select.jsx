const Select = ({ options, loading, label, ...props }) => (
  <label>
    {label}
    <select className="uk-select" id="style-input" aria-label="Select">
      {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
    </select>
  </label>
);

export default Select;
