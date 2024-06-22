import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: transparent;
  border: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
  color: inherit;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`;

export const Pre = styled.pre`
  position: absolute;
  inset: 0;
  white-space: pre-wrap;
  background: #000e;
  color: #0f0;
  padding: 20px;
  margin: 0;
  border: 0;
  z-index: 10;
  overflow: scroll;
`;
