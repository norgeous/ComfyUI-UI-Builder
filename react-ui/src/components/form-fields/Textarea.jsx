import Label from '../Label';

const Textarea = ({
  name, label, info, onChange, ...props
}) => {
  const handleChange = (event) => onChange({ [name]: String(event.target.value) });

  return (
    <Label label={label} info={info}>
      <textarea
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        className="uk-input"
        style={{
          width: '100%', minWidth: '100%', height: 80, minHeight: 80, lineHeight: '21px', padding: '5px 10px',
        }}
        onChange={handleChange}
      />
    </Label>
  );
};

export default Textarea;
