import { action } from '@storybook/addon-actions';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import InputRefContext from '@/contexts/InputRefContext';
import HeaderButton from '@/components/HeaderButton';
import { ResetIcon } from '@/components/Icons';

const ResetButton = styled(HeaderButton)`
  margin-left: auto;
`;

const SimpleStateDecorator = (Story, { args }) => {
  const ref = useRef();

  const { defaultValue, defaultValueIndex, options } = args;

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

  const children = showReset && (
    <ResetButton label="Reset" onClick={handleReset}>
      <ResetIcon />
    </ResetButton>
  );

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
