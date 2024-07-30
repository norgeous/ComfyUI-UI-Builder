import { useContext, useEffect, useState } from 'react';
import { LimitIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';
import InputContext from '@/contexts/InputContext';

const LimitControls = () => {
  const [enabled, setEnabled] = useState(false);
  const { value, onChange } = useContext(InputContext);

  useEffect(() => {
    if (!enabled) return;
    const newValue = value.split(' ').slice(-30).join(' ');
    onChange(newValue);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HeaderButton
      label="Word Limit"
      onClick={() => setEnabled(!enabled)}
      value={enabled}
    >
      <LimitIcon />
    </HeaderButton>
  );
};

export default LimitControls;
