import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{r as v}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{I as x}from"./InputRefContext-CmPhBSwH.js";import{d as y}from"./deepEqual-_sTZaZ0q.js";import{c as g}from"./index-BbXZFMxk.js";import{c as h}from"./index--vyq1y6r.js";import{p as i}from"./styled-components.browser.esm-Drpn4GzW.js";const b=i.label`
  display: block;
  width: 100%;
  margin: 0;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  padding: 9px 0;
  cursor: pointer;
  font-size: 0.875rem;
`,q=i.input.attrs({type:"checkbox"})`
  display: block;
  accent-color: var(--accent);
  margin: 0;
`,t=({id:u=void 0,label:s=void 0,info:d=void 0,value:o=void 0,onChange:p=()=>{},options:r=[],children:c=null})=>{const m=v.useContext(x),l=r.findIndex(a=>a.value===o||y(a.value,o)),{label:f}=r[l];return n.jsxs(g,{pad:!0,column:!0,gap:"sm",children:[n.jsx(h,{id:u,label:s,info:d,children:c}),n.jsxs(b,{children:[n.jsx(q,{ref:m,checked:!!l,onChange:a=>p(r[Number(a.currentTarget.checked)].value)})," ",f]})]})};t.propTypes={id:e.string,label:e.string,info:e.string,options:e.arrayOf(e.shape({label:e.string,value:e.any})),value:e.any,onChange:e.func,children:e.node};const N=t;t.__docgenInfo={description:"",methods:[],displayName:"InputCheckbox",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"any",required:!1}}}},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{N as c};
