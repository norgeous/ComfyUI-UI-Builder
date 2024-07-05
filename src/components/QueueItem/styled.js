import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const QueueTitle = styled.div`
  font-size: 10px;
  overflow: hidden;
  flex-grow: 1;

  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Img = styled.img.attrs({ crossOrigin: 'anonymous' })`
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
`;
