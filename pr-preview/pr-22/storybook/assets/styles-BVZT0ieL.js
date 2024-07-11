import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";const o=r.progress`
  appearance: none;
  display: block;
  min-width: 40px;
  width: 100%;
  height: 4px;
  border: 0;

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
