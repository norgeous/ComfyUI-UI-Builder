import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as a}from"./index-uCp2LrAq.js";import{W as u}from"./WsContext-9iT9ZgtG.js";import{F as g}from"./FormContext-7paO4gYw.js";import{C}from"./ConfigsContext-JqLhkqbA.js";import{O as h}from"./ObjectInfoContext-CYsF4dpo.js";import{A as y}from"./AppContext-DX1Wlwzv.js";import{c as t}from"./index-DOdUZUoh.js";import{G as I,d as k}from"./index-DizZy_GM.js";import{c as w}from"./index-WIqSUmum.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";const W=e.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  background: var(--page-bg);
  padding: 4px;
`,v=e.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
`,r=()=>{const{comfyUrl:s,lastWsMessage:n,isGenerating:i,progress:d}=a.useContext(u),{formState:p}=a.useContext(g),{config:{baseWorkflow:l}}=a.useContext(C),{objectInfoLoading:c,objectInfoError:f,objectInfo:m}=a.useContext(h),{adapted:x,adaptedComfyWorkflow:b,bodyData:j}=a.useContext(y);return o.jsxs(W,{children:[o.jsxs("div",{children:[o.jsx(w,{})," ",s," ",n," ",i&&`${Math.round(d*100)}%`]}),o.jsxs(v,{children:[o.jsx(t,{label:"formState",data:p}),o.jsx(t,{label:"adapted",data:x}),o.jsx(t,{label:"baseWorkflow",data:l}),o.jsx(t,{label:"objectInfo",data:{objectInfoLoading:c,objectInfoError:f,objectInfo:m}}),o.jsx(t,{label:"adaptedComfyWorkflow",data:b}),o.jsx(t,{label:"bodyData",data:j}),o.jsx("a",{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(I,{"aria-label":"Github"})}),o.jsx("a",{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(k,{"aria-label":"Storybook"})})]})]})},O=r;r.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{O as c};
