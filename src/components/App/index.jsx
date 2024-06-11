import { Theme } from '@/components/globalStyles';
import MainContent from '@/components/MainContent';
import Sidebar from '@/components/Sidebar';
import { Page } from './styled';

const App = () => (
  <>
    <Theme />
    <Page>
      <MainContent />
      <Sidebar />
    </Page>
  </>
);

export default App;
