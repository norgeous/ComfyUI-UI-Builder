import styled from 'styled-components';

export const Box = styled.div`
  background: #ff000077;
  font-size: 0.75rem; // 12px
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
`;

export const DismissButton = styled.button`
  cursor: pointer;
  color: inherit;
  background: transparent;
  border: none;
  padding: 6px;
  margin: -6px -8px -6px auto;
`;
