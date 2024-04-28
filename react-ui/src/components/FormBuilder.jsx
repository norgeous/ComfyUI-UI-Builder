import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

import Accordion from './Accordion/Accordion';

import Missing from './OLD/form-fields/Missing';

import InputSelect from './InputSelect/InputSelect';
import InputRange from './InputRange/InputRange';
import InputTextarea from './InputTextarea/InputTextarea';
import InputNumber from './InputNumber/InputNumber';
import InputCheckbox from './InputCheckbox/InputCheckbox';

const components = {
  select: InputSelect,
  range: InputRange,
  textarea: InputTextarea,
  number: InputNumber,
  checkbox: InputCheckbox,
  // selectckpt: SelectCkpt,
  // fileupload: FileUpload,
};

const FormBuilder = () => {
  const { formConfig, formState, updateFormState } = useContext(FormContext);

  const items = formConfig?.map(
    ({
      group,
      type,
      // adapter,
      id,
      // initialState,
      // initialOptionIndex,
      defaultValue,
      defaultValueIndex,
      colSpan,
      ...props
    }) => {
      const Component = components[type] || Missing;
      const value = formState[id];
      const handleChange = data => {
        const newState = { [id]: data };
        // const newFormState = { ...formState, ...newState };
        // const adapted = adapter?.(newFormState);
        // if (adapted) updateFormState(adapted);
        // else
        updateFormState(newState);
      };

      return {
        group,
        component: (
          <div key={id} className={`uk-width-1-${colSpan === 2 ? 1 : 2}@s`}>
            <Component
              {...props} // eslint-disable-line react/jsx-props-no-spreading
              type={type}
              id={id}
              defaultValue={defaultValue}
              defaultValueIndex={defaultValueIndex}
              value={value}
              onChange={handleChange}
            />
          </div>
        ),
      };
    },
  );

  return <Accordion items={items} />;
};

export default FormBuilder;
