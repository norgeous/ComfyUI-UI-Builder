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
    const { label: _, ...state } = options[Number(event.target.value)];
    onChange(state);
  };

  return (
    <Label label={label} info={info}>
      <select
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        className="uk-select"
        value={String(options.map((option) => option[name]).indexOf(value))}
        onChange={handleChange}
      >
        {options.map(({ label: optionLabel }, index) => (
          <option key={optionLabel} value={index}>{optionLabel}</option>
        ))}
      </select>
    </Label>
  );
};

Select.defaultProps = {
  name: undefined,
  label: undefined,
  info: undefined,
  options: [],
  value: undefined,
  onChange: () => {},
};

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
