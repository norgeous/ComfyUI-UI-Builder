import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";const o=r.progress.attrs({max:1})`
  appearance: none;
  display: block;
  width: 100%;
  max-height: 4px;
  border: 0;
  min-width: 40px;
  flex: 1 1;

  // webkit (chrome)
  &::-webkit-progress-bar {
    background: var(--bg2);
    border-radius: var(--radius);
  }
  &::-webkit-progress-value {
    background: var(--accent);
    border-radius: var(--radius);
  }

  // firefox
  background: var(--bg2); // firefox only
  border-radius: var(--radius); // firefox only
  &::-moz-progress-bar {
    background: var(--accent);
    border-radius: var(--radius);
  }
`;export{o as P};
