import { useContext } from 'react';
import FormContext from '@/contexts/FormContext';
import Tooltip from '@/components/Tooltip';
import { FaShuffle } from 'react-icons/fa6';
import { Button } from '../form-fields/InputHeader/InputHeader';
import { Checkbox } from '../form-fields/InputCheckbox/InputCheckbox';

const subC = {
  checkbox: ({ id, label, value, updateFormState }) => (
    <Tooltip text={label}>
      <Checkbox
        checked={value}
        onChange={event => updateFormState({ [id]: event.target.checked })}
      />
    </Tooltip>
  ),
  shuffle: ({ inputRef, label, targetId, updateFormState, onChange }) => (
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
  ),
};

const HeaderItem = ({ inputRef, id, type, label, ...props }) => {
  const { formState, updateFormState } = useContext(FormContext);
  const SubComponent = subC[type];
  const value = formState[id];

  return (
    <SubComponent
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      inputRef={inputRef}
      id={id}
      label={label}
      value={value}
      updateFormState={updateFormState}
    />
  );
};

export default HeaderItem;
