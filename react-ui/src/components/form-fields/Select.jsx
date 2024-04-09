import PropTypes from 'prop-types';
import Label from '../Label';

const Select = ({
  name,
  label,
  info,
  options,
  value,
  onChange,
  ...props
}) => {
  const handleChange = (event) => {
    const { label, ...state } = options[Number(event.target.value)];
    onChange(state);
  };

  return (
    <Label label={label} info={info}>
      <select
        {...props}
        className="uk-select"
        value={String(options.map((option) => option[name]).indexOf(value))}
        onChange={handleChange}
      >
        {options.map(({ label }, index) => (
          <option key={index} value={index}>{label}</option>
        ))}
      </select>
    </Label>
  );
};
Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
