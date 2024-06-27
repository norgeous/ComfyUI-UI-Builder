import styled, { css } from 'styled-components';
import { bgfg } from '@/components/GlobalStyles';

const gapSizes = { sm: '4px', md: '8px' };

// eslint-disable-next-line import/prefer-default-export
export const Flex = styled.div`
  display: flex;
  ${({ $pad }) =>
    $pad &&
    css`
      padding: 8px;
    `}
  ${({ $center }) =>
    $center &&
    css`
      align-items: center;
    `}
  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${gapSizes[$gap]};
    `}
  ${({ $column }) =>
    $column &&
    css`
      flex-direction: column;
    `}
  ${({ $scrollable }) =>
    $scrollable &&
    css`
      overflow: auto;
      flex-grow: 1;
    `}
  ${({ $bgfg }) => $bgfg && bgfg($bgfg)}
  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      height: 100%;
      overflow: hidden;
    `}
`;
