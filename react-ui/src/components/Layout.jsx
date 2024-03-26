import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Sidebar = styled.aside`
  flex: 0 0 460px;
  display: flex;
  flex-direction: column;
  height: 100svh;
  background-color: #222A30;
  overflow-y: auto;
`;

export const Main = styled.main`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  height: 100svh;
  background-color: #181b1d;
  background-size: 32px 32px;
  background-image: radial-gradient(circle,#3d454b 1px,#0000 1px);
`;
