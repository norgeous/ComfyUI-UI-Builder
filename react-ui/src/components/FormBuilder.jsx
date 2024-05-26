import { useContext } from 'react';
import styled, { css } from 'styled-components';

import FormContext from '@/contexts/FormContext';

import Accordion from './Accordion/Accordion';

import Missing from './form-fields/Missing';
import InputSelect from './form-fields/InputSelect/InputSelect';
import InputRange from './form-fields/InputRange/InputRange';
import InputTextarea from './form-fields/InputTextarea/InputTextarea';
import InputNumber from './form-fields/InputNumber/InputNumber';
import InputCheckbox from './form-fields/InputCheckbox/InputCheckbox';
import InputSelectCkpt from './form-fields/InputSelectCkpt/InputSelectCkpt';
import InputSpeech from './form-fields/InputSpeech/InputTextarea';

const Item = styled.div`
  ${({ colSpan }) =>
    colSpan === 2 &&
    css`
      grid-column: 1 / span 2;
    `}
`;

const components = {
  select: InputSelect,
  range: InputRange,
  textarea: InputTextarea,
  number: InputNumber,
  checkbox: InputCheckbox,
  selectckpt: InputSelectCkpt,
  // fileupload: FileUpload,
  speech: InputSpeech,
};

const FormBuilder = () => {
  const { formConfig, formState, updateFormState } = useContext(FormContext);

  const items = formConfig?.map(
    ({
      group,
      type,
      id,
      defaultValue,
      defaultValueIndex,
      colSpan,
      onChange,
      ...props
    }) => {
      const Component = components[type] || Missing;
      const value = formState[id];
      const handleChange = data => {
        const newState = { [id]: data, ...onChange };
        updateFormState(newState);
      };

      return {
        group,
        component: (
          <Item key={id} colSpan={colSpan}>
            <Component
              {...props} // eslint-disable-line react/jsx-props-no-spreading
              type={type}
              id={id}
              defaultValue={defaultValue}
              defaultValueIndex={defaultValueIndex}
              value={value}
              onChange={handleChange}
            />
          </Item>
        ),
      };
    },
  );

  return <Accordion items={items} />;
};

export default FormBuilder;
