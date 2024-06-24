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

export const Header = styled.header`
  background: var(--bg2);
  color: var(--fg2);
`;

export const Footer = styled.footer`
  background: var(--bg2);
  color: var(--fg2);
`;
