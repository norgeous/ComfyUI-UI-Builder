import styled from 'styled-components';
import FormHeader from '@/components/FormHeader/FormHeader';
import FormBuilder from '@/components/FormBuilder/FormBuilder';
import FormControls from '@/components/FormControls/FormControls';

const Controls = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--page-bg);
  overflow-x: hidden;
`;

const Scrollable = styled.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`;

const Sidebar = () => (
  <Controls>
    <FormHeader />
    <Scrollable>
      <FormBuilder />
    </Scrollable>
    <FormControls />
  </Controls>
);

export default Sidebar;
