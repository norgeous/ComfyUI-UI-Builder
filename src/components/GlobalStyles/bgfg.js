import { css } from 'styled-components';

// a bit like a mixin
const bgfg = level => css`
  background: var(${`--bg${level}`});
  color: var(${`--fg${level}`});
`;

export default bgfg;
