import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as s}from"./index-uCp2LrAq.js";import{W as c}from"./WsContext-9iT9ZgtG.js";import{c as p}from"./index-AVQuQ6uG.js";import{c as m}from"./index-CmGq9uYC.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";const d=e.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,x=e.div`
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background: var(--bg0);
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg1) 1px, transparent 1px);
`,t=()=>{const{comfyUrl:r,output:n}=s.useContext(c),i=((n==null?void 0:n.images)||[]).map(({filename:a})=>`${r}/view?type=output&filename=${a}`);return o.jsxs(d,{children:[o.jsx(x,{children:o.jsx(p,{images:i})}),o.jsx(m,{})]})},b=t;t.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{b as c};
