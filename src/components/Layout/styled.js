import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Flex = styled.div`
  ${({ $pad }) =>
    $pad &&
    css`
      padding: 8px;
    `}
  display: flex;
  ${({ $center }) =>
    $center &&
    css`
      align-items: center;
    `}
  gap: ${({ $gap }) => ({ sm: '4px' })[$gap] || '8px'};
  ${({ $column }) =>
    $column &&
    css`
      flex-direction: column;
    `}
`;
