import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{r as m}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{I as v}from"./InputRefContext-CmPhBSwH.js";import{d as g}from"./deepEqual-_sTZaZ0q.js";import{c as x}from"./index-BZF6B-3v.js";import{c as y}from"./index-CaMEndn5.js";import{p as b}from"./styled-components.browser.esm-Drpn4GzW.js";const h=b.select`
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
`,t=({id:o=void 0,label:l=void 0,info:u=void 0,options:n=[],value:i=void 0,onChange:d=()=>{},children:s=null})=>{const p=m.useContext(v),c=n.findIndex(a=>a.value===i||g(a.value,i));return r.jsxs(y,{children:[r.jsx(x,{id:o,label:l,info:u,children:s}),r.jsx(h,{ref:p,id:o,value:c,onChange:a=>d(n[a.target.value].value),children:n.map(({label:a},f)=>r.jsx("option",{value:String(f),children:a},a))})]})};t.propTypes={id:e.string,label:e.string,info:e.string,options:e.arrayOf(e.shape({label:e.string,value:e.any})),value:e.any,onChange:e.func,children:e.node};const w=t;t.__docgenInfo={description:"",methods:[],displayName:"InputSelect",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"any",required:!1}}}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{w as c};
