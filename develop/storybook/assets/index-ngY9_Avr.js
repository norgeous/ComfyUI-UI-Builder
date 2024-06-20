import{j as d}from"./jsx-runtime-X2b_N9AH.js";import{P as r}from"./index-D3ylJrlI.js";import{p as s,c as o}from"./styled-components.browser.esm-Drpn4GzW.js";const p=s.button.attrs({type:"button"})`
  background: var(--accent);
  color: var(--accent-fg);
  font-weight: bold;
  margin: 0;
  border: none;
  ${({$wide:e})=>e&&o`
      width: 100%;
    `}
  border-radius: var(--radius);
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 4px;
  ${({$variant:e})=>{if(e==="secondary")return o`
        background: transparent;
        border: 1px solid var(--bg4);
        color: var(--fg0);
      `}}
  font-size: 14px;
  line-height: 14px;
  &:disabled {
    color: inherit;
  }
`,t=({wide:e=!1,variant:n=void 0,children:a=null,...i})=>d.jsx(p,{...i,$wide:e,$variant:n,children:a});t.propTypes={wide:r.bool,variant:r.string,children:r.node};const f=t;t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{wide:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},variant:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{f as c};
