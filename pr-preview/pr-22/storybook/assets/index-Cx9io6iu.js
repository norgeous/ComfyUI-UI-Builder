import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{P as a}from"./index-D3ylJrlI.js";import{c as l}from"./index-CHiMFBbc.js";import{p as s,c as p}from"./styled-components.browser.esm-Cm6OPFyG.js";const d=s.button`
  cursor: pointer;
  display: block;
  border: none;
  color: inherit;
  background: transparent;
  font-size: 0.75rem; // 12px
  padding: 0;
  &:focus-visible {
    outline: 2px solid var(--accent);
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
`,n=({label:e=void 0,value:o=!1,onChange:t=()=>{},children:i=null})=>r.jsx(l,{text:`${e} (${o?"On":"Off"})`,children:r.jsx(d,{"aria-label":`${e} (${o?"On":"Off"})`,onClick:()=>t(!o),value:o,children:i})});n.propTypes={label:a.string,value:a.bool,onChange:a.func,children:a.node};const g=n;n.__docgenInfo={description:"",methods:[],displayName:"HeaderToggle",props:{label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{g as c};
