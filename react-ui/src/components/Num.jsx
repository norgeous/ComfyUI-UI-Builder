import Label from './Label';

const Num = ({ label, info, ...props }) => (
  <Label label={label} info={info}>
    <input className="uk-input" type="number" {...props}/>
  </Label>
);

export default Num;
