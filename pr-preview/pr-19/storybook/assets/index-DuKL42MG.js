import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as p}from"./index-uCp2LrAq.js";import{W as c}from"./WsContext-9iT9ZgtG.js";import{P as m}from"./styled-C5WjnewW.js";import{c as d}from"./index-AVQuQ6uG.js";import{c as x}from"./index-BXSJwxcF.js";import{p as n}from"./styled-components.browser.esm-Drpn4GzW.js";const l=n.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,f=n.div`
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background: var(--back-bg);
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg1) 1px, transparent 1px);
`,r=()=>{const{comfyUrl:t,progress:i,output:e}=p.useContext(c),s=((e==null?void 0:e.images)||[]).map(({filename:a})=>`${t}/view?type=output&filename=${a}`);return o.jsxs(l,{children:[o.jsx(m,{value:i}),o.jsx(f,{children:o.jsx(d,{images:s})}),o.jsx(x,{})]})},C=r;r.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{C as c};
