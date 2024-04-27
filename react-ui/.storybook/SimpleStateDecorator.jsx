import { useState } from 'react';
import { fn } from '@storybook/test';

const SimpleStateDecorator = (Story, context) => {
  const [value, setValue] = useState(context.args.defaultValue);
  const handleChange = newValue => {
    fn(() => newValue);
    setValue(newValue);
  };

  return <Story args={{ ...context.args, value, onChange: handleChange }} />;
};

export default SimpleStateDecorator;
