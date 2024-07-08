import MainContent from '@/components/MainContent';
import FormHeader from '@/components/FormHeader';
import Sidebar from '@/components/Sidebar';
import StatusBar from '@/components/StatusBar';
import { Page, Content } from './styled';

const App = () => (
  <Page>
    <FormHeader />

    <Content>
      <MainContent />
      <Sidebar />
    </Content>

    <StatusBar />
  </Page>
);

export default App;
