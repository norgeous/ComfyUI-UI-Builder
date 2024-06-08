import { action } from '@storybook/addon-actions';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import InputRefContext from '@/contexts/InputRefContext';
import HeaderButton from '@/components/header-components/HeaderButton';

const ResetButton = styled(HeaderButton)`
  margin-left: auto;
`;

const ResetIcon = styled(FaArrowRotateLeft)`
  display: block;
  font-size: 12px;
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

  const children = (
    <>
      {showReset && (
        <ResetButton label="Reset" onClick={handleReset}>
          <ResetIcon />
        </ResetButton>
      )}
    </>
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
