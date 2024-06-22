import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{W as y}from"./WsContext-9iT9ZgtG.js";import{F as h}from"./FormContext-7paO4gYw.js";import{C as I}from"./ConfigsContext-JqLhkqbA.js";import{O as v}from"./ObjectInfoContext-CYsF4dpo.js";import{A as w}from"./AppContext-DX1Wlwzv.js";import{B as W,G as S,d as B}from"./index-DizZy_GM.js";import{c as D}from"./index-BBRnhhpC.js";import{c as U}from"./index-B0dHkhZ2.js";import{c as G}from"./index-Bs-Be9SB.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const _=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg0);
  padding: 4px;
`,$=a.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
`,n=a.a`
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
`,s=()=>{const{comfyUrl:i,lastWsMessage:c,isGenerating:l,progress:f}=e.useContext(y),{formState:p}=e.useContext(h),{config:{baseWorkflow:d}}=e.useContext(I),{objectInfoLoading:m,objectInfoError:b,objectInfo:x}=e.useContext(v),{adapted:u,adaptedComfyWorkflow:g,bodyData:C}=e.useContext(w),[r,t]=e.useState(),j=[{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],k={formState:p,adapted:u,baseWorkflow:d,objectInfo:{objectInfoLoading:m,objectInfoError:b,objectInfo:x},adaptedComfyWorkflow:g,bodyData:C}[r];return o.jsxs(_,{children:[o.jsxs("div",{children:[o.jsx(D,{})," ",i," ",c," ",l&&`${Math.round(f*100)}%`]}),o.jsxs($,{children:[o.jsx(U,{options:j,children:o.jsx(W,{})}),r&&o.jsx(G,{onClick:()=>t(),data:k}),o.jsx(n,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(S,{"aria-label":"Github"})}),o.jsx(n,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(B,{"aria-label":"Storybook"})})]})]})},J=s;s.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{J as c};
