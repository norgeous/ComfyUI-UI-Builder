import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as f}from"./index-BwDkhjyp.js";import{P as e}from"./index-D3ylJrlI.js";import{I as m}from"./InputRefContext-5kgal7hN.js";import{c}from"./index-CjquOcKe.js";import{c as g}from"./index-BLP17RCg.js";import{p as v}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as x}from"./index-CXGN0Eu6.js";const y=v.input.attrs({type:"text"})`
  ${x(4)}
  border: 1px solid var(--bg5);
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
`,i=({id:a=void 0,label:o=void 0,info:s=void 0,options:n=[],value:u=void 0,onChange:l=()=>{},children:d=null})=>{const p=f.useContext(m);return r.jsxs(c,{pad:!0,column:!0,gap:"sm",children:[r.jsx(g,{id:a,label:o,info:s,children:d}),r.jsx(y,{ref:p,id:a,value:u,onChange:t=>l(t.target.value),list:n.length?`${a}-list`:void 0}),!!n.length&&r.jsx("datalist",{id:`${a}-list`,children:n.map(t=>r.jsx("option",{"aria-label":t,value:t},t))})]})};i.propTypes={id:e.string,label:e.string,info:e.string,options:e.arrayOf(e.string),value:e.string,onChange:e.func,children:e.node};const T=i;i.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"auto completions array of strings",type:{name:"arrayOf",value:{name:"string"}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{T as c};