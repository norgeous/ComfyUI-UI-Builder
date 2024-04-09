import Label from '../Label';

const Num = ({
  name, label, info, onChange, ...props
}) => {
  const handleChange = (event) => onChange({ [name]: Number(event.target.value) });

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

export default Num;
