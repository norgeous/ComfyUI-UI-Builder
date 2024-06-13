import styled from 'styled-components';

export const CollapsableContainer = styled.div`
  border-radius: var(--radius);
  overflow: hidden;
`;

export const CollapsableHeader = styled.button`
  background: var(--bg3);
  color: var(--fg3);

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 12px;
  cursor: pointer;
  border: none;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: -2px;
  }
`;

export const HeaderText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Collapse = styled.div`
  background: var(--bg2);
  color: var(--fg2);

  display: grid;
  transition: grid-template-rows 350ms;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
`;

export const Inner = styled.div`
  overflow: hidden;
`;

export const Padding = styled.div`
  padding: 8px;
`;
