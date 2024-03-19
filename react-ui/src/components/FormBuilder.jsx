import Accordion from './Accordion';
import Select from './Select';

const components = {
  Select,
};

const FormBuilder = ({ formConfig }) => {
  return <Accordion />;
  // return <components.Select options={[{label:'option 1', value: 1}]} />;
};

export default FormBuilder;
