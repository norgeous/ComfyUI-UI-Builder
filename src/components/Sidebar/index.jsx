import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import Layout from '@/components/Layout';
import Queue from '@/components/Queue';
import { Side, Scrollable, Header, Footer } from './styled';

const Sidebar = () => (
  <Side>
    <Header>
      <FormHeader />
    </Header>
    <Scrollable>
      <FormBuilder />
    </Scrollable>
    <Footer>
      <Layout pad column>
        <Queue />
        <FormControls />
      </Layout>
    </Footer>
  </Side>
);

export default Sidebar;
