import { useContext } from 'react';
import PropTypes from 'prop-types';
import FormContext from '@/contexts/FormContext';

import HeaderCheckbox from './Checkbox';
import Shuffle from './Shuffle';
import Info from './Info';
import Microphone from './Microphone';
import Reset from './Reset';

const components = {
  info: Info,
  checkbox: HeaderCheckbox,
  shuffle: Shuffle,
  microphone: Microphone,
  reset: Reset,
};

const HeaderItem = ({
  inputRef = undefined,
  id = undefined,
  type,
  label = undefined,
  ...props
}) => {
  const { formState, updateFormState } = useContext(FormContext);
  const SubComponent = components[type];
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

HeaderItem.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default HeaderItem;
