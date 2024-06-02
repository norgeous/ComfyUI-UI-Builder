import { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import FormContext from '@/contexts/FormContext';

import Missing from './Missing';
import InputSelect from './InputSelect/InputSelect';
import InputRange from './InputRange/InputRange';
import InputTextarea from './InputTextarea/InputTextarea';
import InputNumber from './InputNumber/InputNumber';
import InputCheckbox from './InputCheckbox/InputCheckbox';
import InputSelectCkpt from './InputSelectCkpt/InputSelectCkpt';
import InputFile from './InputFile/InputFile';
import InputSpeech from './InputSpeech/InputSpeech';
import InputSeed from './InputSeed/InputSeed';

const components = {
  select: InputSelect,
  range: InputRange,
  textarea: InputTextarea,
  number: InputNumber,
  checkbox: InputCheckbox,
  selectckpt: InputSelectCkpt,
  fileupload: InputFile,
  speech: InputSpeech,
  seed: InputSeed,
};

const FormItem = ({
  type = undefined,
  id = undefined,
  info = undefined,
  subComponents = [],
  onChange = {},
  ...props
}) => {
  const { formState, updateFormState } = useContext(FormContext);
  const ref = useRef();
  const Component = components[type] || Missing;
  const value = formState[id];

  const handleChange = data => {
    const newState = { [id]: data, ...onChange };
    updateFormState(newState);
  };

  return (
    <Component
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      ref={ref}
      id={id}
      type={type}
      value={value}
      onChange={handleChange}
      subComponents={[
        ...(info ? [{ type: 'info', label: info }] : []),
        ...subComponents,
      ]}
    />
  );
};

FormItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  info: PropTypes.string,
  subComponents: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default FormItem;
