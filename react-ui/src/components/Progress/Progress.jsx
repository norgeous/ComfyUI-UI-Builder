import styled from 'styled-components';

const Progress = styled.progress.attrs({ max: 1 })`
  display: block;
  width: 100%;
  border-radius: 0;
  height: 7px;
  background-color: #0c3047;
  border: 0;
`;

export default Progress;
