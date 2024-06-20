import { useContext } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import InputNumber from '@/components/InputNumber';
import HeaderToggle from '@/components/HeaderToggle';
import { RandomiseIcon, ShuffleIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';

const InputSeed = ({
  value = undefined,
  onChange = () => {},
  children = null,
  ...props
}) => {
  const ref = useContext(InputRefContext);
  const { seed, random } = value;

  const handleChangeSeed = newValue => {
    onChange({ seed: newValue, random: false });
  };

  const handleChangeRandom = newValue => {
    onChange({ seed, random: newValue });
  };

  const handleShuffle = () => {
    const newSeed = Math.floor(Math.random() * 10 ** 10);
    onChange({ seed: newSeed, random: false });
    ref.current?.focus();
  };

  return (
    <InputNumber
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      value={seed}
      onChange={handleChangeSeed}
    >
      <HeaderToggle
        label="Randomise"
        value={random}
        onChange={handleChangeRandom}
      >
        <RandomiseIcon />
      </HeaderToggle>
      <HeaderButton label="Shuffle" onClick={handleShuffle}>
        <ShuffleIcon />
      </HeaderButton>
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