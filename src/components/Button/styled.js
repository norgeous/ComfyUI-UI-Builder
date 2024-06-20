import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Btn = styled.button.attrs({ type: 'button' })`
  background: var(--accent);
  color: var(--accent-fg);

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
        border: 1px solid var(--bg4);
        color: var(--fg0);
      `;
    return undefined;
  }}
  font-size: 14px;
  line-height: 14px;
  &:disabled {
    color: inherit;
  }
`;