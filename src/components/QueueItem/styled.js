import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const QueueTitle = styled.div`
  font-size: 12px;
  overflow: hidden;
  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  flex: 0 1 fit-content;
`;
