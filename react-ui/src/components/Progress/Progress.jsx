import styled from 'styled-components';

const Progress = styled.progress.attrs({ max: 1 })`
  display: block;
  width: 100%;
  border-radius: 0;
  height: 7px;
  background-color: var(--primary); // firefox only
  border: 0;
  &::-webkit-progress-bar {
    background-color: var(--primary); // webkit only
  }
`;

export default Progress;
