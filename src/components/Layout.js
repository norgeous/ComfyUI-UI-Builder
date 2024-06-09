import styled from 'styled-components';

export const Page = styled.div`
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Controls = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--page-bg);
  overflow-x: hidden;
`;

export const Scrollable = styled.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`;

export const Content = styled.div`
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-color: #181b1d;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, #3d454b 1px, #0000 1px);
`;
