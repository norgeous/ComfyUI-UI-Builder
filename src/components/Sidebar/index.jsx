import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import Layout from '@/components/Layout';
import Queue from '@/components/Queue';

const Sidebar = () => (
  <Layout as="aside" column fullHeight bgfg={1}>
    <Layout as="header" column bgfg={2}>
      <FormHeader />
    </Layout>

    <FormBuilder />

    <Queue />

    <Layout as="footer" pad column gap="md" bgfg={2}>
      <FormControls />
    </Layout>
  </Layout>
);

export default Sidebar;
