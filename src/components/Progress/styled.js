import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Progress = styled.progress.attrs({ max: 1 })`
  display: block;
  width: 100%;
  border-radius: 0;
  height: 8px;
  border: 0;
  background-color: var(--primary); // firefox only
  &::-webkit-progress-bar {
    background-color: var(--primary); // webkit only
  }
`;
