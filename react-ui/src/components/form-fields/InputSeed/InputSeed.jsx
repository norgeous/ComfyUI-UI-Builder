import InputNumber from '../InputNumber/InputNumber';

const InputSeed = ({ value, ...props }) => {
  console.log(props);
  const { seed, random } = value;
  return (
    <InputNumber {...props} value={seed}>
      i am seed
    </InputNumber>
  );
};

export default InputSeed;
