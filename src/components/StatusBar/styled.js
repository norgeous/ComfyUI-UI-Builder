import styled from 'styled-components';

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  background: var(--page-bg);
  padding: 4px;
`;

export const Tray = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
`;

export const Link = styled.a`
  color: inherit;
`;
