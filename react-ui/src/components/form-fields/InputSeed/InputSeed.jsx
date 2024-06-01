import InputNumber from '../InputNumber/InputNumber';

const InputSeed = ({ ...props }) => (
  <InputNumber
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    min={0}
    max={2 ** 64 - 2048}
  />
);
export default InputSeed;
