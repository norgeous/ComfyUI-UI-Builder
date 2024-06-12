import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const InputHeaderButton = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  color: inherit;
  background: transparent;
  font-size: 0.75rem; // 12px
  padding: 0;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
    border-radius: var(--radius);
  }
  > * {
    opacity: 0.5;
  }
  &:hover > * {
    opacity: 1;
  }
  ${({ value }) =>
    value &&
    css`
      > * {
        opacity: 1;
      }
    `}
`;
