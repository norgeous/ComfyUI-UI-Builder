import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{P as e}from"./index-D3ylJrlI.js";import{c as u}from"./index-DheTTISF.js";import{p as d}from"./styled-components.browser.esm-Drpn4GzW.js";const p=d.button`
  cursor: pointer;
  display: block;
  border: none;
  color: inherit;
  background: transparent;
  font-size: 0.75rem; // 12px
  padding: 0;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
    border-radius: var(--radius);
  }
  > * {
    opacity: 0.5;
  }
  &:hover > * {
    opacity: 1;
  }
`,o=({className:a=void 0,label:t=void 0,onClick:n=()=>{},lm:i=!1,children:l=null,...s})=>r.jsx(u,{className:a,text:t,lm:i,children:r.jsx(p,{"aria-label":t,onClick:n,...s,children:l})});o.propTypes={className:e.string,label:e.string,lm:e.bool,onClick:e.func,children:e.node};const y=o;o.__docgenInfo={description:"",methods:[],displayName:"HeaderButton",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},lm:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{y as c};
