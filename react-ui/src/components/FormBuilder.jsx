/* eslint-disable react/prop-types */
import useAppContext from '../hooks/useAppContext';
import Accordion from './Accordion';

import Select from './form-fields/Select';
import SelectCkpt from './form-fields/SelectCkpt';
import Range from './form-fields/Range';
import Textarea from './form-fields/Textarea';
import Num from './form-fields/Num';
import Checkbox from './form-fields/Checkbox';

const Missing = ({ type }) => (
  <div className="uk-width-1-1@s">
    component type
    <strong>{type}</strong>
    {' '}
    not found
  </div>
);

const components = {
  select: Select,
  selectckpt: SelectCkpt,
  range: Range,
  textarea: Textarea,
  number: Num,
  checkbox: Checkbox,
};

const FormBuilder = () => {
  const { config, formState, updateFormState } = useAppContext();
  const { formConfig } = config.configData;
  const sections = formConfig?.map(({ title, children }) => ({
    title,

    children: children.map(({
      type, adapter, name, initialState, colSpan, ...props
    }, index) => {
      const Component = components[type];
      if (!Component) return <Missing key={index} type={type} />;
      return (
        <div key={index} className={`uk-width-1-${colSpan == 2 ? 1 : 2}@s`}>
          <Component
            {...props}
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
