import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as a}from"./index-uCp2LrAq.js";import{W as j}from"./WsContext-9iT9ZgtG.js";import{F as u}from"./FormContext-7paO4gYw.js";import{C as g}from"./ConfigsContext-JqLhkqbA.js";import{O as C}from"./ObjectInfoContext-CYsF4dpo.js";import{A as h}from"./AppContext-DX1Wlwzv.js";import{c as t}from"./index-DOdUZUoh.js";import{G as y,d as I}from"./index-DizZy_GM.js";import{c as k}from"./index-WIqSUmum.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";const w=e.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  background: var(--page-bg);
  padding: 4px;
`,W=e.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
`,r=()=>{const{lastWsMessage:s,isGenerating:n,progress:i}=a.useContext(j),{formState:d}=a.useContext(u),{config:{baseWorkflow:p}}=a.useContext(g),{objectInfoLoading:l,objectInfoError:c,objectInfo:f}=a.useContext(C),{adapted:m,adaptedComfyWorkflow:x,bodyData:b}=a.useContext(h);return o.jsxs(w,{children:[o.jsxs("div",{children:[o.jsx(k,{})," ",s," ",n&&`${Math.round(i*100)}%`]}),o.jsxs(W,{children:[o.jsx(t,{label:"formState",data:d}),o.jsx(t,{label:"adapted",data:m}),o.jsx(t,{label:"baseWorkflow",data:p}),o.jsx(t,{label:"objectInfo",data:{objectInfoLoading:l,objectInfoError:c,objectInfo:f}}),o.jsx(t,{label:"adaptedComfyWorkflow",data:x}),o.jsx(t,{label:"bodyData",data:b}),o.jsx("a",{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(y,{"aria-label":"Github"})}),o.jsx("a",{href:"https://norgeous.github.io/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(I,{"aria-label":"Storybook"})})]})]})},M=r;r.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{M as c};
