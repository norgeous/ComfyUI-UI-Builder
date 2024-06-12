import styled from 'styled-components';

export const Side = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--page-bg);
  overflow: hidden;
  height: 100%;
`;

export const Scrollable = styled.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`;
