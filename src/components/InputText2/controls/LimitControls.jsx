import { useState } from 'react';
import { LimitIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';

const LimitControls = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <HeaderButton
      label="Limit text length to 20 words"
      onClick={() => setEnabled(!enabled)}
      value={enabled}
    >
      <LimitIcon />
    </HeaderButton>
  );
};

export default LimitControls;
