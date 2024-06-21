import{j as d}from"./jsx-runtime-X2b_N9AH.js";import{P as t}from"./index-D3ylJrlI.js";import{p as s,c as n}from"./styled-components.browser.esm-Drpn4GzW.js";const p=s.button.attrs({type:"button"})`
  background: var(--accent);
  color: var(--accent-fg);
  font-weight: bold;
  margin: 0;
  border: none;
  ${({$wide:e})=>e&&n`
      width: 100%;
    `}
  border-radius: var(--radius);
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 4px;
  ${({$variant:e})=>{if(e==="secondary")return n`
        background: transparent;
        border: 1px solid var(--bg4);
        color: var(--fg0);
      `}}
  font-size: 14px;
  line-height: 14px;
`,r=({wide:e=!1,variant:o=void 0,children:a=null,...i})=>d.jsx(p,{...i,$wide:e,$variant:o,children:a});r.propTypes={wide:t.bool,variant:t.string,children:t.node};const f=r;r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{wide:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},variant:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{f as c};
