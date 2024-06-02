import { useContext } from 'react';
import PropTypes from 'prop-types';
import FormContext from '@/contexts/FormContext';

import Missing from './Missing';

import Info from './Info';
import Checkbox from './Checkbox';
import Shuffle from './Shuffle';
import Microphone from './Microphone';
import Reset from './Reset';

const components = {
  info: Info,
  checkbox: Checkbox,
  shuffle: Shuffle,
  microphone: Microphone,
  reset: Reset,
};

const HeaderItem = ({
  id = undefined,
  type = undefined,
  label = undefined,
  ...props
}) => {
  const { formState, updateFormState } = useContext(FormContext);
  const SubComponent = components[type] || Missing;
  const value = formState[id];

  return (
    <SubComponent
      value={value}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      id={id}
      type={type}
      label={label}
      updateFormState={updateFormState}
    />
  );
};

HeaderItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default HeaderItem;
