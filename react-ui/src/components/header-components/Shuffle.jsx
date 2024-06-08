import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaShuffle } from 'react-icons/fa6';
import InputRefContext from '@/contexts/InputRefContext';
import Tooltip from '@/components/Tooltip';
import InputHeaderButton from '../form-fields/InputHeaderButton/InputHeaderButton';

const Shuffle = ({ label = undefined, onClick = () => {} }) => {
  const ref = useContext(InputRefContext);

  return (
    <Tooltip text={label}>
      <InputHeaderButton
        aria-label={label}
        onClick={() => {
          const newSeed = Math.floor(Math.random() * 10 ** 10);
          onClick(newSeed);
          ref.current?.focus();
        }}
      >
        <FaShuffle style={{ display: 'block', fontSize: 12 }} />
      </InputHeaderButton>
    </Tooltip>
  );
};

Shuffle.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Shuffle;
