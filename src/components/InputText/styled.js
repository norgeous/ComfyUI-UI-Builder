import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Input = styled.input.attrs({ type: 'text' })`
  background: var(--bg3);
  color: var(--fg3);
  border: 1px solid var(--bg4);

  display: block;
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  border-radius: var(--radius);
  padding: 8px 4px;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
`;
