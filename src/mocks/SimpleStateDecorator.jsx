import { fn } from '@storybook/test';
import { useRef, useState } from 'react';
import InputRefContext from '@/contexts/InputRefContext';
import ResetButton from '@/components/ResetButton';

const SimpleStateDecorator = (Story, { args }) => {
  const { defaultValue, defaultValueIndex, options } = args;

  const initialValue = defaultValue ?? options[defaultValueIndex].value;

  const ref = useRef();

  const [value, setValue] = useState(initialValue);

  const onChange = newValue => {
    fn()(newValue);
    setValue(newValue);
  };

  const handleReset = () => {
    onChange(initialValue);
    ref.current?.focus();
  };

  const showReset = value !== initialValue;

  return (
    <InputRefContext.Provider value={ref}>
      <Story
        args={{
          ...args,
          value,
          onChange,
          children: showReset && <ResetButton onClick={handleReset} />,
        }}
      />
    </InputRefContext.Provider>
  );
};

export default SimpleStateDecorator;
