const Checkbox = ({ label, ...props }) => (
  <label>
    <input className="uk-checkbox" type="checkbox" {...props}/>
    {' '}
    {label}
  </label>
);

export default Checkbox;
