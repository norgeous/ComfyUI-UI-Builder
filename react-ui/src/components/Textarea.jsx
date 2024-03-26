/* eslint-disable react/prop-types */
import Label from './Label';

const Textarea = ({ name, label, info, onChange, ...props }) => {
  const handleChange = (event) => onChange({ [name]: String(event.target.value) });

  return (
    <Label label={label} info={info}>
      <textarea
        {...props}
        className="uk-input"
        style={{ width: '100%' }}
        rows={4}
        onChange={handleChange}
      />
    </Label>
  );
};

export default Textarea;
