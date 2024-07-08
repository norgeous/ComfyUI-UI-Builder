import Layout from '@/components/Layout';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';

const Sidebar = () => (
  <Layout as="aside" column fullHeight bgfg={1}>
    <FormBuilder />

    <FormControls />
  </Layout>
);
export default Sidebar;
