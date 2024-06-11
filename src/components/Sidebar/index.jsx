import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import { Controls, Scrollable } from './styled';

const Sidebar = () => (
  <Controls>
    <FormHeader />
    <Scrollable>
      <FormBuilder />
    </Scrollable>
    <FormControls />
  </Controls>
);

export default Sidebar;
