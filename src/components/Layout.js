import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  grid-template-rows: minmax(50%, auto) minmax(auto, 400px);
  height: 100svh;
  @media (min-aspect-ratio: 1/1) {
    grid-template-columns: minmax(auto, 400px) minmax(50%, auto);
    // swap maincontent to be second item
    & > :first-child {
      order: 2; // change the order on desktop, so that controls are first */
      height: 100svh;
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
