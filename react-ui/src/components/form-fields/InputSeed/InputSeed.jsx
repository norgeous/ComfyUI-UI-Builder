import PropTypes from 'prop-types';
import HeaderCheckbox from '@/components/header-components/Checkbox';
import Shuffle from '@/components/header-components/Shuffle';
import InputNumber from '../InputNumber/InputNumber';

const InputSeed = ({
  value = undefined,
  onChange = () => {},
  children = null,
  ...props
}) => {
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
    <InputNumber
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      value={seed}
      onChange={handleChangeSeed}
    >
      <HeaderCheckbox
        label="Randomise"
        value={random}
        onChange={handleChangeRandom}
      />
      <Shuffle label="Shuffle" value={random} onClick={handleShuffle} />
      {children}
    </InputNumber>
  );
};

InputSeed.propTypes = {
  value: PropTypes.shape({
    seed: PropTypes.number,
    random: PropTypes.bool,
  }),
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputSeed;
