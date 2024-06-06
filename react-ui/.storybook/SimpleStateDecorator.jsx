import { action } from '@storybook/addon-actions';
import { useRef, useState } from 'react';
import InputRefContext from '@/contexts/InputRefContext';
import Reset from '@/components/header-components/Reset';

const SimpleStateDecorator = (Story, { args }) => {
  const ref = useRef();

  const { id, defaultValue, defaultValueIndex, options } = args;

  const initialValue = defaultValue ?? options[defaultValueIndex].value;

  const [value, setValue] = useState(initialValue);

  const onChange = newValue => {
    action('onChange')(newValue);
    setValue(newValue);
  };

  const handleReset = () => {
    onChange(initialValue);
    ref.current?.focus();
  };

  const showReset = value !== initialValue;

  const children = <>{showReset && <Reset onClick={handleReset} />}</>;

  return (
    <InputRefContext.Provider value={ref}>
      <Story
        args={{
          ...args,
          value,
          onChange,
          children,
        }}
      />
    </InputRefContext.Provider>
  );
};

export default SimpleStateDecorator;
