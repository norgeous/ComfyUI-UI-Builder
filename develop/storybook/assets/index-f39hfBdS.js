import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{r as c}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{I as v}from"./InputRefContext-CmPhBSwH.js";import{d as g}from"./deepEqual-_sTZaZ0q.js";import{c as x}from"./index-BbXZFMxk.js";import{c as y}from"./index--vyq1y6r.js";import{p as b}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as h}from"./index-BUFFlF7z.js";const q=b.select`
  ${h(4)}
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
`,t=({id:i=void 0,label:l=void 0,info:u=void 0,options:n=[],value:o=void 0,onChange:d=()=>{},children:s=null})=>{const p=c.useContext(v),f=n.findIndex(a=>a.value===o||g(a.value,o));return r.jsxs(x,{pad:!0,column:!0,gap:"sm",children:[r.jsx(y,{id:i,label:l,info:u,children:s}),r.jsx(q,{ref:p,id:i,value:f,onChange:a=>d(n[a.target.value].value),children:n.map(({label:a},m)=>r.jsx("option",{value:String(m),children:a},a))})]})};t.propTypes={id:e.string,label:e.string,info:e.string,options:e.arrayOf(e.shape({label:e.string,value:e.any})),value:e.any,onChange:e.func,children:e.node};const P=t;t.__docgenInfo={description:"",methods:[],displayName:"InputSelect",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"any",required:!1}}}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{P as c};