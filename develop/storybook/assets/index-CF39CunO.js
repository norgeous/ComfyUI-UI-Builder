import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{W as p}from"./AppContext-S2bZAPPB.js";import{c as m}from"./index-Bm7KGtcn.js";import{c}from"./index-4qpBP-bj.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as d}from"./index-CB5wHgmQ.js";const x=e.main`
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
