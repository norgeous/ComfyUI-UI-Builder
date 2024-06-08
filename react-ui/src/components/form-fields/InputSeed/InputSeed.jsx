import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaShuffle } from 'react-icons/fa6';
import InputRefContext from '@/contexts/InputRefContext';
import HeaderCheckbox from '@/components/header-components/Checkbox';
import HeaderButton from '@/components/header-components/Button';
import InputNumber from '../InputNumber/InputNumber';

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
      <HeaderCheckbox
        label="Randomise"
        value={random}
        onChange={handleChangeRandom}
      />
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
