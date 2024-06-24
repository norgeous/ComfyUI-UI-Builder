import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{W as j,A as k}from"./AppContext-ZaKAIv11.js";import{F as y}from"./FormContext-7paO4gYw.js";import{C as h}from"./ConfigsContext-JqLhkqbA.js";import{O as I}from"./ObjectInfoContext-CYsF4dpo.js";import{G as w,d as v,B as D}from"./index-BiKVFdKX.js";import{c as S}from"./index-Bk61SAI2.js";import{c as W}from"./index-DBnD2Hxc.js";import{c as B}from"./index-Bs-Be9SB.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const U=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg0);
  padding: 4px;
`,O=a.div`
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
`,s=()=>{const{wsStatus:i,comfyUrl:c}=e.useContext(j),{formState:l}=e.useContext(y),{config:{baseWorkflow:f}}=e.useContext(h),{objectInfoLoading:p,objectInfoError:d,objectInfo:m}=e.useContext(I),{adapted:b,adaptedComfyWorkflow:u,bodyData:x}=e.useContext(k),[n,t]=e.useState(),g=[{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],C={formState:l,adapted:b,baseWorkflow:f,objectInfo:{objectInfoLoading:p,objectInfoError:d,objectInfo:m},adaptedComfyWorkflow:u,bodyData:x}[n];return o.jsxs(U,{children:[o.jsx(S,{status:i})," ",c,o.jsxs(O,{children:[o.jsx(r,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(w,{"aria-label":"Github"})}),o.jsx(r,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(v,{"aria-label":"Storybook"})}),o.jsx(W,{"aria-label":"Debug Data Options",options:g,children:o.jsx(D,{})}),n&&o.jsx(B,{onClick:()=>t(),data:C})]})]})},z=s;s.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{z as c};
