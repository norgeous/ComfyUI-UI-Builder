import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import Layout from '@/components/Layout';
import Queue from '@/components/Queue';
import { Side, Scrollable } from './styled';

const Sidebar = () => (
  <Side>
    <FormHeader />
    <Scrollable>
      <FormBuilder />
    </Scrollable>
    <Layout pad column>
      <Queue />
      <FormControls />
    </Layout>
  </Side>
);

export default Sidebar;
