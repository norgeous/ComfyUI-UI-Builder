import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Progress = styled.progress.attrs({ max: 1 })`
  appearance: none;
  display: block;
  width: 100%;
  border-radius: 0;
  height: 8px;
  border: 0;
  // webkit (chrome)
  &::-webkit-progress-bar {
    background: var(--bg2);
  }
  &::-webkit-progress-value {
    background: var(--accent);
  }

  // firefox only
  background: var(--bg2);
  &::-moz-progress-bar {
    background: var(--accent);
  }
`;
