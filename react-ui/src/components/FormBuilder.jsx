import PropTypes from 'prop-types';
import Accordion from './Accordion';
import Select from './Select';
import Range from './Range';

const components = {
  select: Select,
  range: Range,
};

const FormBuilder = ({ formConfig }) => {
  const sections = formConfig.map(({ title, children }) => {
    return {
      title,
      children: children.map(({ type, adapter, ...props }, index) => {
        const Component = components[type];
        if (!Component) return <div key={index}>{props.name}: component type <strong>{type}</strong> not found</div>;
        return (
          <div key={index} className="uk-width-1-2@s">
            <Component {...props} />
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
