import { useContext } from 'react';
import styled from 'styled-components';
import WsContext from '@/contexts/WsContext';
import Progress from '@/components/Progress/Progress';
import StatusBar from '@/components/StatusBar/StatusBar';
import ImageGrid from '@/components/ImageGrid/ImageGrid';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background: var(--back-bg);
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(
    circle,
    var(--surface-bg) 1px,
    transparent 1px
  );
`;

const MainContent = () => {
  const { comfyUrl, progress, output } = useContext(WsContext);
  const images = (output?.images || []).map(
    ({ filename }) => `${comfyUrl}/view?type=output&filename=${filename}`,
  );

  return (
    <Main>
      <Progress value={progress} />
      <Content>
        <ImageGrid images={images} />
      </Content>
      <StatusBar />
    </Main>
  );
};

export default MainContent;
