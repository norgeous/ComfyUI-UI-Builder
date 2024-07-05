import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as m}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as p}from"./index-Dr5Czate.js";import{c}from"./index-Bmy_aXQt.js";import{c as d}from"./index-BUlfs2x2.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as x}from"./index-wo4bmeOh.js";const f=e.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,l=e.div`
  ${x(0)}
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,t=()=>{const{comfyUrl:r,output:n}=a.useContext(m),i=((n==null?void 0:n.images)||[]).map(({filename:s})=>`${r}/view?type=output&filename=${s}`);return o.jsxs(f,{children:[o.jsx(l,{children:o.jsx(p,{images:i})}),o.jsx(c,{}),o.jsx(d,{})]})},y=t;t.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{y as c};
