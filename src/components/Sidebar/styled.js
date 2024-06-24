import styled from 'styled-components';

export const Side = styled.aside`
  display: flex;
  flex-direction: column;

  background: var(--bg1);
  color: var(--fg1);

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
