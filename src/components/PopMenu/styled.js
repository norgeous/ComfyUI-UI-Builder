import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: block;
  background: transparent;
  font-size: inherit;
  border: none;
  color: var(--fg-mute);
  border-radius: var(--radius);
  margin: 0;
  padding: 0;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`;

export const Menu = styled.span`
  position: absolute;
  font-size: 0.75rem; // 12px
  background: var(--bg1);
  color: var(--fg1);
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

export const MenuItem = styled.button`
  cursor: pointer;
  display: block;
  background: transparent;
  border: none;
  color: var(--fg-mute);
  border-radius: var(--radius);
  margin: 0;
  padding: 0;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
  width: 100%;
  text-align: left;
`;
