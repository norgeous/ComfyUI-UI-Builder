import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{P as i}from"./index-D3ylJrlI.js";import{r as c}from"./index-uCp2LrAq.js";import{c as d}from"./index-DheTTISF.js";import{B as l}from"./index-DizZy_GM.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";const u=s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: transparent;
  border: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
  color: inherit;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`,m=s.pre`
  position: absolute;
  inset: 0;
  white-space: pre-wrap;
  background: #000e;
  color: #0f0;
  padding: 20px;
  margin: 0;
  border: 0;
  z-index: 10;
  overflow: scroll;
`,r=({label:o,data:p=void 0})=>{const[t,a]=c.useState(!1),n=()=>a(!t);return e.jsxs(e.Fragment,{children:[e.jsx(d,{text:o,children:e.jsx(u,{onClick:n,"aria-label":o,children:e.jsx(l,{})})}),t&&e.jsxs(m,{onClick:n,children:[o,`
`,JSON.stringify(p,null,2)]})]})};r.propTypes={label:i.string.isRequired,data:i.any};const j=r;r.__docgenInfo={description:"",methods:[],displayName:"Debug",props:{data:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};export{j as c};
