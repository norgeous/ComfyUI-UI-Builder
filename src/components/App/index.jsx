import MainContent from '@/components/MainContent';
import Layout from '@/components/Layout';
import FormHeader from '@/components/FormHeader';
import Sidebar from '@/components/Sidebar';
import StatusBar from '@/components/StatusBar';
import { Content, Page } from './styled';

const App = () => (
  <Page>
    <Layout as="header" column bgfg={2}>
      <FormHeader />
    </Layout>

    <Content>
      <MainContent />
      <Sidebar />
    </Content>
    <StatusBar />
  </Page>
);

export default App;
