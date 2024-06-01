import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import { FaShuffle } from 'react-icons/fa6';
import { Button } from '../InputHeader';

const Shuffle = ({
  inputRef = undefined,
  label = undefined,
  targetId = undefined,
  updateFormState = () => {},
  onChange = {},
}) => (
  <Tooltip text={label}>
    <Button
      onClick={() => {
        const newSeed = Math.floor(Math.random() * 10 ** 10);
        updateFormState({ [targetId]: newSeed, ...onChange });
        inputRef.current.focus();
      }}
    >
      <FaShuffle style={{ display: 'block', fontSize: 12 }} />
    </Button>
  </Tooltip>
);

Shuffle.propTypes = {
  inputRef: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string,
  targetId: PropTypes.string,
  updateFormState: PropTypes.func,
  onChange: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default Shuffle;
