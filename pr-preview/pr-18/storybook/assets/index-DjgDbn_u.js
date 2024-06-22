import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{P as n}from"./index-D3ylJrlI.js";import{c as l}from"./index-DheTTISF.js";import{p as s,c as p}from"./styled-components.browser.esm-Drpn4GzW.js";const d=s.button`
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
  ${({value:e})=>e&&p`
      > * {
        opacity: 1;
      }
    `}
`,t=({label:e=void 0,value:o=!1,onChange:a=()=>{},children:i=null})=>r.jsx(l,{text:`${e} (${o?"On":"Off"})`,children:r.jsx(d,{"aria-label":`${e} (${o?"On":"Off"})`,onClick:()=>a(!o),value:o,children:i})});t.propTypes={label:n.string,value:n.bool,onChange:n.func,children:n.node};const g=t;t.__docgenInfo={description:"",methods:[],displayName:"HeaderToggle",props:{label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{g as c};
