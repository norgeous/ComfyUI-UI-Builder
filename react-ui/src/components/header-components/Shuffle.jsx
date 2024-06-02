import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaShuffle } from 'react-icons/fa6';
import InputRefContext from '@/contexts/InputRefContext';
import Tooltip from '@/components/Tooltip';
import InputHeaderButton from '../form-fields/InputHeaderButton/InputHeaderButton';

const Shuffle = ({
  label = undefined,
  targetId = undefined,
  updateFormState = () => {},
  onChange = {},
}) => {
  const ref = useContext(InputRefContext);

  return (
    <Tooltip text={label}>
      <InputHeaderButton
        onClick={() => {
          const newSeed = Math.floor(Math.random() * 10 ** 10);
          updateFormState({ [targetId]: newSeed, ...onChange });
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
  targetId: PropTypes.string,
  updateFormState: PropTypes.func,
  onChange: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default Shuffle;
