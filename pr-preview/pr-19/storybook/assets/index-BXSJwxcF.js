import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{W as g}from"./WsContext-9iT9ZgtG.js";import{F as h}from"./FormContext-7paO4gYw.js";import{C as y}from"./ConfigsContext-JqLhkqbA.js";import{O as C}from"./ObjectInfoContext-CYsF4dpo.js";import{A as I}from"./AppContext-DX1Wlwzv.js";import{c as t}from"./index-XfmXgXxw.js";import{G as k,d as v}from"./index-DizZy_GM.js";import{c as w}from"./index-WIqSUmum.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const W=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--page-bg);
  padding: 4px;
`,S=a.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
`,r=a.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`,s=()=>{const{comfyUrl:n,lastWsMessage:i,isGenerating:l,progress:c}=e.useContext(g),{formState:f}=e.useContext(h),{config:{baseWorkflow:p}}=e.useContext(y),{objectInfoLoading:d,objectInfoError:m,objectInfo:x}=e.useContext(C),{adapted:b,adaptedComfyWorkflow:u,bodyData:j}=e.useContext(I);return o.jsxs(W,{children:[o.jsxs("div",{children:[o.jsx(w,{})," ",n," ",i," ",l&&`${Math.round(c*100)}%`]}),o.jsxs(S,{children:[o.jsx(t,{label:"formState",data:f}),o.jsx(t,{label:"adapted",data:b}),o.jsx(t,{label:"baseWorkflow",data:p}),o.jsx(t,{label:"objectInfo",data:{objectInfoLoading:d,objectInfoError:m,objectInfo:x}}),o.jsx(t,{label:"adaptedComfyWorkflow",data:u}),o.jsx(t,{label:"bodyData",data:j}),o.jsx(r,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(k,{"aria-label":"Github"})}),o.jsx(r,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(v,{"aria-label":"Storybook"})})]})]})},O=s;s.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{O as c};
