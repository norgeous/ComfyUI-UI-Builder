/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Accordion from './Accordion';
import Select from './Select';
import Range from './Range';
import { useAppContext } from '../contexts/AppContext';

const Spacer = () => null;
const Missing = ({ type }) => <div className="uk-width-1-2@s">component type <strong>{type}</strong> not found</div>;

const components = {
  select: Select,
  range: Range,
  spacer: Spacer,
};

const FormBuilder = ({ formConfig }) => {
  const { formState, updateFormState } = useAppContext();
  const sections = formConfig.map(({ title, children }) => {
    return {
      title,
      // eslint-disable-next-line no-unused-vars
      children: children.map(({ type, adapter, name, initialState, colSpan, ...props }, index) => {
        const Component = components[type];
        if (!Component) return <Missing key={index} type={type} />
        return (
          <div key={index} className={`uk-width-1-${colSpan == 2 ? 1 : 2}@s`}>
            <Component
              {...props}
              name={name}
              value={formState[name]}
              onChange={data => {
                const newFormState = { ...formState, ...data};
                const adapted = adapter?.(newFormState);
                if (adapted) updateFormState(adapted);
                else updateFormState(data);
              }}
            />
          </div>
        );
      }),
    };
  });
  return <Accordion sections={sections} />;
};

FormBuilder.propTypes = {
  formConfig: PropTypes.array,
};

export default FormBuilder;
