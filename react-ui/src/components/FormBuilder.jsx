import useConfigsContext from '../hooks/useConfigsContext';
import useFormContext from '../hooks/useFormContext';
import Accordion from './Accordion';

import Missing from './form-fields/Missing';

import Select from './form-fields/Select';
import SelectCkpt from './form-fields/SelectCkpt';
import Range from './form-fields/Range';
import Textarea from './form-fields/Textarea';
import Num from './form-fields/Num';
import Checkbox from './form-fields/Checkbox';
import FileUpload from './form-fields/FileUpload';

const components = {
  select: Select,
  selectckpt: SelectCkpt,
  range: Range,
  textarea: Textarea,
  number: Num,
  checkbox: Checkbox,
  fileupload: FileUpload,
};

const FormBuilder = () => {
  const { config } = useConfigsContext();
  const { formConfig } = config.configData || {};
  const { formState, updateFormState } = useFormContext();
  const items = formConfig?.map(
    ({
      group,
      type,
      adapter,
      name,
      initialState,
      initialOptionIndex,
      colSpan,
      ...props
    }) => {
      const Component = components[type] || Missing;
      const value = formState[name];
      const handleChange = data => {
        const newFormState = { ...formState, ...data };
        const adapted = adapter?.(newFormState);
        if (adapted) updateFormState(adapted);
        else updateFormState(data);
      };

      console.log({ type, props, formState, value });
      if (!value === undefined) return '';

      return {
        group,
        component: (
          <div key={name} className={`uk-width-1-${colSpan === 2 ? 1 : 2}@s`}>
            <Component
              {...props} // eslint-disable-line react/jsx-props-no-spreading
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
            />
          </div>
        ),
      };
    },
  );

  console.log(items);

  return <Accordion items={items} />;
};

export default FormBuilder;
