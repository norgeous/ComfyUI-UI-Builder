import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaDiceSix, FaShuffle } from 'react-icons/fa6';
import InputRefContext from '@/contexts/InputRefContext';
import HeaderToggle from '@/components/header-components/HeaderToggle';
import HeaderButton from '@/components/header-components/HeaderButton';
import InputNumber from '../InputNumber/InputNumber';

const RandomiseIcon = styled(FaDiceSix)`
  display: block;
  font-size: 12px;
`;

const ShuffleIcon = styled(FaShuffle)`
  display: block;
  font-size: 12px;
`;

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
