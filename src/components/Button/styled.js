import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Btn = styled.button.attrs({ type: 'button' })`
  background: var(--accent);
  color: var(--accent-fg);
  font-weight: bold;
  margin: 0;
  border: none;
  ${({ $wide }) =>
    $wide &&
    css`
      width: 100%;
    `}
  border-radius: var(--radius);
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 4px;
  ${({ $variant }) => {
    if ($variant === 'secondary')
      return css`
        background: transparent;
        color: var(--fg0);
        border: 1px solid var(--bg5);
      `;
    return undefined;
  }}
  font-size: 14px;
  line-height: 14px;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;
