import { Controls, Scrollable } from '@/components/Layout';
import FormHeader from '@/components/FormHeader/FormHeader';
import FormBuilder from '@/components/FormBuilder/FormBuilder';
import FormControls from '@/components/FormControls/FormControls';

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
