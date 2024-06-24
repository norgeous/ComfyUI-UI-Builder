import styled, { css } from 'styled-components';
import { FloatingArrow } from '@floating-ui/react';
import { bgfg } from '@/components/GlobalStyles';

export const TooltipWrap = styled.span`
  display: inline-flex;
  ${({ $lm }) =>
    $lm &&
    css`
      margin-left: auto;
    `}
  ${({ $wide }) =>
    $wide &&
    css`
      width: 100%;
    `}
`;

export const TooltipText = styled.span`
  ${bgfg(1)}
  position: absolute;
  font-size: 0.75rem; // 12px
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  white-space: preserve-breaks;
`;

export const Arrow = styled(FloatingArrow)`
  fill: var(--bg1);
`;
