import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{c as u}from"./index-BYzLV2uZ.js";import{c as d}from"./index-Dh1-t-m-.js";import{c as x}from"./index-B-FZVBt0.js";import{c as e}from"./index-DcinbNRX.js";import{r as s}from"./index-BwDkhjyp.js";import{W as f,A as g}from"./AppContext-S2bZAPPB.js";import{c as l}from"./index-Dn4_yKhT.js";const n=()=>{const{progress:r,lastWsMessage:m,isGenerating:t}=s.useContext(f),{executeInterrupt:i,interruptLoading:p,interruptError:c}=s.useContext(g);return t?o.jsx(l,{isLoading:t,status:`${m} ${t&&`${Math.round(r*100)}%`}`,progress:r,onInterrupt:i,interruptLoading:p,interruptError:c}):null};n.__docgenInfo={description:"",methods:[],displayName:"Queue"};const a=()=>o.jsxs(e,{as:"aside",column:!0,fullHeight:!0,bgfg:1,children:[o.jsx(e,{as:"header",column:!0,bgfg:2,children:o.jsx(u,{})}),o.jsx(d,{}),o.jsx(n,{}),o.jsx(e,{as:"footer",pad:!0,column:!0,gap:"md",bgfg:2,children:o.jsx(x,{})})]}),W=a;a.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{W as c};
