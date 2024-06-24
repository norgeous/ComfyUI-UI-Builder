import{p as r}from"./styled-components.browser.esm-Drpn4GzW.js";const o=r.progress.attrs({max:1})`
  appearance: none;
  display: block;
  width: 100%;
  height: 8px;
  border: 0;
  min-width: 20px;

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
