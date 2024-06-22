import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  background: transparent;
  border: none;
  color: var(--fg-mute);
  border-radius: var(--radius);
  &:hover {
    color: var(--fg);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`;

export const Menu = styled.span`
  position: absolute;
  font-size: 0.75rem; // 12px
  background: var(--bg0);
  color: var(--fg0);
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  z-index: 1;
  top: 100%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
