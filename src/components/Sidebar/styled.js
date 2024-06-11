import styled from 'styled-components';

export const Controls = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--page-bg);
  overflow-x: hidden;
  height: 100%;
`;

export const Scrollable = styled.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`;
