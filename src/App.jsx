import { Page } from '@/components/Layout';
import { Theme } from '@/components/globalStyles';
import MainContent from '@/components/MainContent/MainContent';
import Sidebar from '@/components/Sidebar/Sidebar';

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
