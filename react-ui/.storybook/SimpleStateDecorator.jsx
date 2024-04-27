import { useState } from 'react';

const SimpleStateDecorator = (Story, context) => {
  const [value, setValue] = useState(context.args.defaultValue);
  const handleChange = newValue => {
    console.log(
      `SimpleStateDecorator > handleChange: ${JSON.stringify(newValue)}`,
    );
    setValue(newValue);
  };

  return <Story args={{ ...context.args, value, onChange: handleChange }} />;
};

export default SimpleStateDecorator;
