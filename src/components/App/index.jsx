import MainContent from '@/components/MainContent';
import Sidebar from '@/components/Sidebar';
import StatusBar from '@/components/StatusBar';
import { Content, Page } from './styled';

const App = () => (
  <Page>
    <Content>
      <MainContent />
      <Sidebar />
    </Content>
    <StatusBar />
  </Page>
);

export default App;
