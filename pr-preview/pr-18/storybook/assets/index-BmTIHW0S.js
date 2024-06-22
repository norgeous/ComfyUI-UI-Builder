import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as a}from"./index-uCp2LrAq.js";import{W as g}from"./WsContext-9iT9ZgtG.js";import{F as h}from"./FormContext-7paO4gYw.js";import{C}from"./ConfigsContext-JqLhkqbA.js";import{O as y}from"./ObjectInfoContext-CYsF4dpo.js";import{A as I}from"./AppContext-DX1Wlwzv.js";import{c as t}from"./index-BijqQtLk.js";import{G as k,d as w}from"./index-DizZy_GM.js";import{c as W}from"./index-WIqSUmum.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";const v=e.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  background: var(--page-bg);
  padding: 4px;
`,S=e.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
`,r=e.a`
  color: inherit;
`,s=()=>{const{comfyUrl:n,lastWsMessage:i,isGenerating:d,progress:l}=a.useContext(g),{formState:p}=a.useContext(h),{config:{baseWorkflow:c}}=a.useContext(C),{objectInfoLoading:f,objectInfoError:m,objectInfo:x}=a.useContext(y),{adapted:b,adaptedComfyWorkflow:j,bodyData:u}=a.useContext(I);return o.jsxs(v,{children:[o.jsxs("div",{children:[o.jsx(W,{})," ",n," ",i," ",d&&`${Math.round(l*100)}%`]}),o.jsxs(S,{children:[o.jsx(t,{label:"formState",data:p}),o.jsx(t,{label:"adapted",data:b}),o.jsx(t,{label:"baseWorkflow",data:c}),o.jsx(t,{label:"objectInfo",data:{objectInfoLoading:f,objectInfoError:m,objectInfo:x}}),o.jsx(t,{label:"adaptedComfyWorkflow",data:j}),o.jsx(t,{label:"bodyData",data:u}),o.jsx(r,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(k,{"aria-label":"Github"})}),o.jsx(r,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(w,{"aria-label":"Storybook"})})]})]})},O=s;s.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{O as c};
