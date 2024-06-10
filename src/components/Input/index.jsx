import { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormContext from '@/contexts/FormContext';
import InputRefContext from '@/contexts/InputRefContext';

import HeaderButton from '@/components/HeaderButton';
import { ResetIcon } from '@/components/Icons';
import InputMissing from '@/components/InputMissing';

import InputSelect from '@/components/InputSelect';
import InputRange from '@/components/InputRange';
import InputTextarea from '@/components/InputTextarea';
import InputText from '@/components/InputText';
import InputNumber from '@/components/InputNumber';
import InputSelectCkpt from '@/components/InputSelectCkpt';
import InputFile from '@/components/InputFile';
import InputSpeech from '@/components/InputSpeech';
import InputSeed from '@/components/InputSeed';
import InputCheckbox from '@/components/InputCheckbox';

const ResetButton = styled(HeaderButton)`
  margin-left: auto;
`;

const components = {
  select: InputSelect,
  range: InputRange,
  textarea: InputTextarea,
  text: InputText,
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
  const Component = components[type] || InputMissing;
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
