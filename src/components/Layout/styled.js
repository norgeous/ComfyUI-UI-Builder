import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Flex = styled.div`
  display: flex;
  gap: 8px;
  ${({ $column }) =>
    $column &&
    css`
      flex-direction: column;
    `}
  ${({ $center }) =>
    $center &&
    css`
      align-items: center;
    `}
  ${({ $pad }) =>
    $pad &&
    css`
      padding: 8px;
    `}
`;
