import styled from 'styled-components';
import { bgfg } from '@/components/GlobalStyles';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const ContentArea = styled.div`
  ${bgfg(0)}
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`;
