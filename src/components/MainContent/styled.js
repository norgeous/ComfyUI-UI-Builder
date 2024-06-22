import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background: var(--bg0);
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`;
