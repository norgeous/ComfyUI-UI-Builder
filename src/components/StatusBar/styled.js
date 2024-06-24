import styled from 'styled-components';

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
  font-size: 18px;
`;

export const Tray = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
`;

export const StatusText = styled.div`
  font-size: 12px;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`;
