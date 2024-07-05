import Layout from '@/components/Layout';
import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';

const Sidebar = () => (
  <Layout as="aside" column fullHeight bgfg={1}>
    <Layout as="header" column bgfg={2}>
      <FormHeader />
    </Layout>

    <FormBuilder />

    <Layout as="footer" pad column gap="md" bgfg={2}>
      <FormControls />
    </Layout>
  </Layout>
);
export default Sidebar;
