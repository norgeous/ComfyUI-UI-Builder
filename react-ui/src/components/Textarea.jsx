import Label from './Label';

const Textarea = ({ label, info, ...props }) => (
  <Label label={label} info={info}>
    <textarea className="uk-input" style={{ width: '100%' }} {...props}/>
  </Label>
);

export default Textarea;
