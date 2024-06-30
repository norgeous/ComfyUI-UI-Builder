import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{P as e}from"./index-D3ylJrlI.js";import{I as m}from"./InputRefContext-5kgal7hN.js";import{c as f}from"./index-DcinbNRX.js";import{c}from"./index-CL4V5rF4.js";import{p as b}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as g}from"./index-CB5wHgmQ.js";const v=b.input.attrs({type:"number"})`
  ${g(4)}
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
`,t=({id:n=void 0,label:o=void 0,info:u=void 0,value:i=void 0,onChange:a=()=>{},children:d=null})=>{const p=l.useContext(m);return r.jsxs(f,{pad:!0,column:!0,gap:"sm",children:[r.jsx(c,{id:n,label:o,info:u,children:d}),r.jsx(v,{ref:p,id:n,value:i,onChange:s=>a(Number(s.target.value))})]})};t.propTypes={id:e.string,label:e.string,info:e.string,value:e.number,onChange:e.func,children:e.node};const N=t;t.__docgenInfo={description:"",methods:[],displayName:"InputNumber",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{N as c};
