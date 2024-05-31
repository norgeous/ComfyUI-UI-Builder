import { FaArrowsRotate } from 'react-icons/fa6';
import Tooltip from '@/components/Tooltip';
import { Button } from '../InputHeader/InputHeader';
import { Checkbox } from '../InputCheckbox/InputCheckbox';
import InputNumber from '../InputNumber/InputNumber';

const InputSeed = ({ ...props }) => {
  const headerChildren = [
    <Tooltip text="Randomise">
      <Checkbox />
    </Tooltip>,
    <Tooltip text="Randomise NOW!">
      <Button>
        <FaArrowsRotate style={{ display: 'block', fontSize: 12 }} />
      </Button>
    </Tooltip>,
  ];
  return <InputNumber {...props} headerChildren={headerChildren} />;
};

export default InputSeed;
