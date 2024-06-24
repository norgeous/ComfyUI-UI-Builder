import styled from 'styled-components';
import { bgfg } from '@/components/GlobalStyles';

export const Side = styled.aside`
  ${bgfg(1)}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;

export const Scrollable = styled.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`;
