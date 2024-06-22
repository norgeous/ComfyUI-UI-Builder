import{p as r}from"./styled-components.browser.esm-Drpn4GzW.js";const o=r.progress.attrs({max:1})`
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
`;export{o as P};
