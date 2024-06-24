import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{r as l}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{I as m}from"./InputRefContext-CmPhBSwH.js";import{c}from"./index-CaMEndn5.js";import{c as f}from"./index-BZF6B-3v.js";import{p as v}from"./styled-components.browser.esm-Drpn4GzW.js";const b=v.input.attrs({type:"number"})`
  background: var(--bg3);
  color: var(--fg3);
  border: 1px solid var(--bg4);

  display: block;
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  border-radius: var(--radius);
  padding: 8px 4px;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`,t=({id:n=void 0,label:o=void 0,info:i=void 0,value:u=void 0,onChange:a=()=>{},children:d=null})=>{const s=l.useContext(m);return r.jsxs(c,{children:[r.jsx(f,{id:n,label:o,info:i,children:d}),r.jsx(b,{ref:s,id:n,value:u,onChange:p=>a(Number(p.target.value))})]})};t.propTypes={id:e.string,label:e.string,info:e.string,value:e.number,onChange:e.func,children:e.node};const j=t;t.__docgenInfo={description:"",methods:[],displayName:"InputNumber",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{j as c};
