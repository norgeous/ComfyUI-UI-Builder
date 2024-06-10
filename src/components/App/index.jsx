import styled from 'styled-components';
import { Theme } from '@/components/globalStyles';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

const Page = styled.div`
  display: grid;
  height: 100svh;

  // portrait first
  grid-template-rows: minmax(50%, auto) minmax(auto, 400px);

  // landscape overrides
  @media (min-aspect-ratio: 1/1) {
    grid-template-rows: none;
    grid-template-columns: minmax(auto, 460px) minmax(50%, auto);
    & > :first-child {
      order: 2; // change the order on landscape, so that sidebar is first
    }
  }
`;

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
