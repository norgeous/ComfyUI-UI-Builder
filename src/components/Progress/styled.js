import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Progress = styled.progress.attrs({ max: 1 })`
  appearance: none;
  display: block;
  width: 100%;
  height: 8px;
  border: 0;
  min-width: 40px;
  flex: 1 1;

  // webkit (chrome)
  &::-webkit-progress-bar {
    background: var(--bg3);
    border-radius: var(--radius);
  }
  &::-webkit-progress-value {
    background: var(--accent);
    border-radius: var(--radius);
  }

  // firefox
  background: var(--bg3); // firefox only
  border-radius: var(--radius); // firefox only
  &::-moz-progress-bar {
    background: var(--accent);
    border-radius: var(--radius);
  }
`;
