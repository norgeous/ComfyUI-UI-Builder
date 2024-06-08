import { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaArrowRotateLeft } from 'react-icons/fa6';

import FormContext from '@/contexts/FormContext';
import InputRefContext from '@/contexts/InputRefContext';

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
import HeaderButton from '../header-components/Button';

const ResetButton = styled(HeaderButton)`
  margin-left: auto;
`;

const ResetIcon = styled(FaArrowRotateLeft)`
  display: block;
  font-size: 12px;
`;

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
  label = undefined,
  info = undefined,
  defaultValue = undefined,
  value = undefined,
  onChange = () => {},
  onChangeData = {},
  ...props
}) => {
  const ref = useRef();
  const { formState, updateFormState } = useContext(FormContext);
  const Component = components[type] || Missing;
  const stateValue = value ?? formState[id];

  const handleChange = data => {
    const newState = { [id]: data, ...onChangeData };
    updateFormState(newState);
    onChange(data);
  };

  const handleReset = () => {
    handleChange(defaultValue);
    ref.current?.focus();
  };

  const showReset = stateValue !== defaultValue;

  return (
    <InputRefContext.Provider value={ref}>
      <Component
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        id={id}
        type={type}
        label={label}
        info={info}
        value={stateValue}
        onChange={handleChange}
      >
        {showReset && (
          <ResetButton label="Reset" onClick={handleReset}>
            <ResetIcon />
          </ResetButton>
        )}
      </Component>
    </InputRefContext.Provider>
  );
};

FormItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  onChangeData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default FormItem;
