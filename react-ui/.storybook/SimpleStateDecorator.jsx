import { useRef, useState } from 'react';
import InputRefContext from '@/contexts/InputRefContext';
import Reset from '@/components/header-components/Reset';

const SimpleStateDecorator = (Story, context) => {
  const ref = useRef();

  const { id, defaultValue, defaultValueIndex, options } = context.args;
  const initialValue = defaultValue ?? options[defaultValueIndex].value;

  const [value, setValue] = useState(initialValue);

  const onChange = newValue => {
    console.log(
      `SimpleStateDecorator: ${id} > onChange: ${JSON.stringify(newValue)}`,
      ref,
    );
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
      <Story args={{ ...context.args, value, onChange, children }} />
    </InputRefContext.Provider>
  );
};

export default SimpleStateDecorator;
