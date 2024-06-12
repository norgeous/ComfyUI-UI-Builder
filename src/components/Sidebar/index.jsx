import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import { Side, Scrollable } from './styled';

const Sidebar = () => (
  <Side>
    <FormHeader />
    <Scrollable>
      <FormBuilder />
    </Scrollable>
    <FormControls />
  </Side>
);

export default Sidebar;
