import { useState } from 'react';

const SimpleStateDecorator = (Story, context) => {
  const { defaultValue, defaultValueIndex, options } = context.args;
  const initialValue = defaultValue || options[defaultValueIndex].value;
  const [value, setValue] = useState(initialValue);
  const handleChange = newValue => {
    console.log(
      `SimpleStateDecorator > handleChange: ${JSON.stringify(newValue)}`,
    );
    setValue(newValue);
  };

  return <Story args={{ ...context.args, value, onChange: handleChange }} />;
};

export default SimpleStateDecorator;
