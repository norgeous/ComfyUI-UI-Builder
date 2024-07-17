import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{P as t}from"./index-D3ylJrlI.js";import{d,l as a}from"./styled-components.browser.esm-CgTwxB-0.js";const p=d.button.attrs({type:"button"})`
  background: var(--accent);
  color: var(--accent-fg);
  font-weight: bold;
  margin: 0;
  border: none;
  ${({$wide:e})=>e&&a`
      width: 100%;
    `}
  border-radius: var(--radius);
  padding: ${({$small:e})=>e?"4px":"8px"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 4px;
  ${({$variant:e})=>{if(e==="secondary")return a`
        background: transparent;
        color: var(--fg0);
        border: 1px solid var(--bg5);
      `}}
  font-size: 14px;
  line-height: 14px;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`,o=({wide:e=!1,small:r=!1,variant:n=void 0,children:l=null,...i})=>s.jsx(p,{...i,$wide:e,$variant:n,$small:r,children:l});o.propTypes={wide:t.bool,variant:t.string,small:t.bool,children:t.node};const m=o;o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{wide:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},small:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},variant:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{m as c};
