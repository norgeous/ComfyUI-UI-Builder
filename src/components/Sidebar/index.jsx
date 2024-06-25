import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import Layout from '@/components/Layout';
import Queue from '@/components/Queue';

const Sidebar = () => (
  <Layout column bgfg={1} as="aside">
    <Layout column bgfg={2} as="header">
      <FormHeader />
    </Layout>
    <Layout pad column gap="md" vscroll bgfg={1}>
      <FormBuilder />
    </Layout>
    <Layout pad column bgfg={2} as="footer">
      <Queue />
      <FormControls />
    </Layout>
  </Layout>
);

export default Sidebar;
