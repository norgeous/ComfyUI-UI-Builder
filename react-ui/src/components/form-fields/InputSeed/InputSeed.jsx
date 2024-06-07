import InputNumber from '../InputNumber/InputNumber';

const InputSeed = ({ value, ...props }) => {
  console.log(props);
  const { seed, random } = value;
  return (
    <InputNumber {...props} value={seed}>
      i am seed
      {/* "subComponents": [
        {
          "id": "enableSeedRandomisation",
          "label": "Randomise",
          "type": "checkbox",
          "defaultValue": false
        },
        {
          "id": "shuffle",
          "label": "Shuffle",
          "type": "shuffle",
          "targetId": "seed",
          "onChangeData": { "enableSeedRandomisation": false }
        }
      ],
      "onChangeData": { "enableSeedRandomisation": false } */}
    </InputNumber>
  );
};

export default InputSeed;
