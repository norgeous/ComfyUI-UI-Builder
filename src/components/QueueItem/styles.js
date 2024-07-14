import styled from 'styled-components';

export const HitArea = styled.button`
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: 4px;
  padding: 0;
`;

export const QueueTitle = styled.div`
  font-size: 10px;
  overflow: hidden;
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

export const StatusIconContainer = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--accent);
`;
