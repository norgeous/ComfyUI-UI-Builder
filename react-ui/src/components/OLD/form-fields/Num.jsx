import PropTypes from 'prop-types';
import Label from '../Label';

const Num = ({ name, label, info, onChange, ...props }) => {
  const handleChange = event =>
    onChange({ [name]: Number(event.target.value) });

  return (
    <Label label={label} info={info}>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        className="uk-input"
        type="number"
        onChange={handleChange}
      />
    </Label>
  );
};

Num.defaultProps = {
  name: undefined,
  label: undefined,
  info: undefined,
  onChange: () => {},
};

Num.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func,
};

export default Num;
