import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  height: 100svh;
  @media (min-width: 920px) {
    grid-template-columns: 460px auto;
  }
`;

export const Main = styled.main`
  @media (min-width: 920px) {
    order: 2; // change the order on desktop, so that controls are first
    height: 100svh;
  }
  display: flex;
  flex-direction: column;
  background-color: #181b1d;
  background-size: 32px 32px;
  background-position: center;
  background-image: radial-gradient(circle, #3d454b 1px, #0000 1px);
`;

export const Controls = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--page-bg);
  height: 50svh;
  @media (min-width: 920px) {
    height: 100svh;
  }
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
`;
