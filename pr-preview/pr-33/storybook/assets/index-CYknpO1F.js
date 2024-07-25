import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as f}from"./index-BwDkhjyp.js";import{P as e}from"./index-D3ylJrlI.js";import{I as c}from"./InputRefContext-5kgal7hN.js";import{c as b}from"./index-BLrka4M9.js";import{c as v}from"./index-CIPRddg1.js";import{d as x}from"./styled-components.browser.esm-CgTwxB-0.js";import{b as g}from"./bgfg-BUc8g66r.js";const y=x.input.attrs({type:"number"})`
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
`,t=({id:n=void 0,label:u=void 0,info:o=void 0,value:i=void 0,onChange:a=()=>{},children:d=null,min:p=void 0,max:s=void 0})=>{const l=f.useContext(c);return r.jsxs(b,{pad:!0,column:!0,gap:"sm",children:[r.jsx(v,{id:n,label:u,info:o,children:d}),r.jsx(y,{ref:l,id:n,value:i,onChange:m=>a(Number(m.target.value)),min:p,max:s})]})};t.propTypes={id:e.string,label:e.string,info:e.string,value:e.number,onChange:e.func,children:e.node,min:e.number,max:e.number};const w=t;t.__docgenInfo={description:"",methods:[],displayName:"InputNumber",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},min:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1}}};export{w as c};
