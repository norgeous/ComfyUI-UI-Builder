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

const components = {
  select: Select,
  selectckpt: SelectCkpt,
  range: Range,
  textarea: Textarea,
  number: Num,
  checkbox: Checkbox,
};

const FormBuilder = () => {
  const { config: { configData: { formConfig } } } = useConfigsContext();
  const { formState, updateFormState } = useFormContext();
  const sections = formConfig?.map(({ title, children }) => ({
    title,
    children: children.map(({
      type, adapter, name, initialState, initialOptionIndex, colSpan, ...props
    }) => {
      const Component = components[type] || Missing;
      return (
        <div key={name} className={`uk-width-1-${colSpan === 2 ? 1 : 2}@s`}>
          <Component
            {...props} // eslint-disable-line react/jsx-props-no-spreading
            type={type}
            name={name}
            value={formState[name]}
            onChange={(data) => {
              const newFormState = { ...formState, ...data };
              const adapted = adapter?.(newFormState);
              if (adapted) updateFormState(adapted);
              else updateFormState(data);
            }}
          />
        </div>
      );
    }),
  }));
  return <Accordion sections={sections} />;
};

export default FormBuilder;
