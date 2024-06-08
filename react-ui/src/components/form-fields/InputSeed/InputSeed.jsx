import HeaderCheckbox from '@/components/header-components/Checkbox';
import Shuffle from '@/components/header-components/Shuffle';
import InputNumber from '../InputNumber/InputNumber';

const InputSeed = ({ value, onChange, ...props }) => {
  const { seed, random } = value;

  const handleChangeSeed = newValue => {
    onChange({ seed: newValue, random: false });
  };

  const handleChangeRandom = newValue => {
    onChange({ seed, random: newValue });
  };

  const handleShuffle = newValue => {
    onChange({ seed: newValue, random: false });
  };

  return (
    <InputNumber {...props} value={seed} onChange={handleChangeSeed}>
      <HeaderCheckbox
        label="Randomise"
        value={random}
        onChange={handleChangeRandom}
      />
      <Shuffle label="Shuffle" value={random} onClick={handleShuffle} />
    </InputNumber>
  );
};

export default InputSeed;
