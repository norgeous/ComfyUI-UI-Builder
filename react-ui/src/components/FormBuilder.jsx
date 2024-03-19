import Accordion from './Accordion';
import Select from './Select';

const components = {
  Select,
};

const FormBuilder = ({ formConfig }) => {
  return (
    <Accordion 
      sections={[
        {
          title: 'Generation parms',
          children: <div className="uk-width-1-2@s">content 1</div>,
        },
        {
          title: 'Setting',
          children: 'content 2',
        },
        {
          title: 'Character',
          children: 'content 3',
        },
        {
          title: 'Custom',
          children: 'content 4',
        },
      ]}
    />
  );
};

export default FormBuilder;
