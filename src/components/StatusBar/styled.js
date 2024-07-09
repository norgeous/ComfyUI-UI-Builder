import styled from 'styled-components';

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`;

export const Tray = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  flex-shrink: ${({ $shrinkable }) => ($shrinkable ? 1 : 0)};
  overflow: ${({ $shrinkable }) => ($shrinkable ? 'hidden' : 'visible')};
`;

export const StatusText = styled.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  border-radius: var(--radius);
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
  }
`;
