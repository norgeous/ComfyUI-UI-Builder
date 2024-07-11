import styled from 'styled-components';

export const HitArea = styled.button`
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: 4px;
`;

export const QueueTitle = styled.div`
  font-size: 10px;
  overflow: hidden;
  /* flex-grow: 1; */
  text-align: left;

  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 50px;
`;

export const Img = styled.img.attrs({ crossOrigin: 'anonymous' })`
  display: block;
  width: 37px;
  height: 37px;
  object-fit: contain;
`;
