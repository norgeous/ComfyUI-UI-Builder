import { useState } from 'react';
import { LimitIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';

const LimitControls = () => {
  const [enabled, setEnabled] = useState(false);

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
