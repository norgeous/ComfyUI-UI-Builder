import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{r as f}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{I as c}from"./InputRefContext-CmPhBSwH.js";import{c as m}from"./index-qDzr2xAS.js";import{c as g}from"./index-DASKFeJk.js";import{p as v}from"./styled-components.browser.esm-Drpn4GzW.js";const x=v.input.attrs({type:"text"})`
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
`,o=({id:a=void 0,label:i=void 0,info:s=void 0,options:n=[],value:u=void 0,onChange:l=()=>{},children:d=null})=>{const p=f.useContext(c);return r.jsxs(m,{pad:!0,column:!0,gap:"sm",children:[r.jsx(g,{id:a,label:i,info:s,children:d}),r.jsx(x,{ref:p,id:a,value:u,onChange:t=>l(t.target.value),list:n.length?`${a}-list`:void 0}),!!n.length&&r.jsx("datalist",{id:`${a}-list`,children:n.map(t=>r.jsx("option",{"aria-label":t,value:t},t))})]})};o.propTypes={id:e.string,label:e.string,info:e.string,options:e.arrayOf(e.string),value:e.string,onChange:e.func,children:e.node};const C=o;o.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"auto completions array of strings",type:{name:"arrayOf",value:{name:"string"}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{C as c};
