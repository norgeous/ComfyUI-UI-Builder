import { useContext } from 'react';
import styled, { css } from 'styled-components';

import FormContext from '@/contexts/FormContext';

import Accordion from './Accordion/Accordion';
import Missing from './OLD/form-fields/Missing';
import InputSelect from './InputSelect/InputSelect';
import InputRange from './InputRange/InputRange';
import InputTextarea from './InputTextarea/InputTextarea';
import InputNumber from './InputNumber/InputNumber';
import InputCheckbox from './InputCheckbox/InputCheckbox';
import InputSelectCkpt from './InputSelectCkpt/InputSelectCkpt';

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
      ...props
    }) => {
      const Component = components[type] || Missing;
      const value = formState[id];
      const handleChange = data => {
        const newState = { [id]: data };
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
