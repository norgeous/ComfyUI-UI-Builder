import { ArrowUpIcon, ArrowDownIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';

const WeightControls = () => (
  <>
    <HeaderButton label="Prompt weight up (CTRL + UP)" onClick={() => {}}>
      <ArrowUpIcon />
    </HeaderButton>
    <HeaderButton label="Prompt weight down (CTRL + DOWN)" onClick={() => {}}>
      <ArrowDownIcon />
    </HeaderButton>
  </>
);

export default WeightControls;
