import { useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import FormContext from '@/contexts/FormContext';

import HeaderItem from './HeaderItem';

import Missing from '../form-fields/Missing';
import InputSelect from '../form-fields/InputSelect/InputSelect';
import InputRange from '../form-fields/InputRange/InputRange';
import InputTextarea from '../form-fields/InputTextarea/InputTextarea';
import InputNumber from '../form-fields/InputNumber/InputNumber';
import InputCheckbox from '../form-fields/InputCheckbox/InputCheckbox';
import InputSelectCkpt from '../form-fields/InputSelectCkpt/InputSelectCkpt';
import InputFile from '../form-fields/InputFile/InputFile';
import InputSpeech from '../form-fields/InputSpeech/InputSpeech';
import InputSeed from '../form-fields/InputSeed/InputSeed';

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
  type = '',
  id = '',
  defaultValue,
  defaultValueIndex = 0,
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

  const headerChildren = subComponents.map(subProps => (
    <HeaderItem
      {...subProps} // eslint-disable-line react/jsx-props-no-spreading
      key={subProps.id}
    />
  ));

  return (
    <Component
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      ref={ref}
      type={type}
      defaultValue={defaultValue}
      defaultValueIndex={defaultValueIndex}
      value={value}
      onChange={handleChange}
      headerChildren={headerChildren}
    />
  );
};

FormItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  defaultValueIndex: PropTypes.number,
  subComponents: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.string,
};

export default FormItem;
