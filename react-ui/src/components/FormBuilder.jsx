import PropTypes from 'prop-types';
import Accordion from './Accordion';
import Select from './Select';

const components = {
  select: Select,
  // range: Range,
};

const FormBuilder = ({ formConfig }) => {
  const sections = formConfig.map(({ title, children }) => {
    return {
      title,
      children: children.map(({ type, ...props }, index) => {
        const Component = components[type];
        if (!Component) return <div key={index}>component type <strong>{type}</strong> not found</div>;
        return <Component key={index} {...props} />;
      }),
    };
  });
  return <Accordion sections={sections} />;
};

FormBuilder.propTypes = {
  formConfig: PropTypes.array,
};

export default FormBuilder;
