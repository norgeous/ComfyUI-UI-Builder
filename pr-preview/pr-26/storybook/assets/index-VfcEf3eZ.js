import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as a}from"./index-uCp2LrAq.js";import{W as p}from"./AppContext-ZaKAIv11.js";import{c as m}from"./index-AVQuQ6uG.js";import{c}from"./index-BGLWyQn3.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as d}from"./index-CZ727q7L.js";const x=e.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,f=e.div`
  ${d(0)}
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,t=()=>{const{comfyUrl:r,output:n}=a.useContext(p),i=((n==null?void 0:n.images)||[]).map(({filename:s})=>`${r}/view?type=output&filename=${s}`);return o.jsxs(x,{children:[o.jsx(f,{children:o.jsx(m,{images:i})}),o.jsx(c,{})]})},C=t;t.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{C as c};
