import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{C as h}from"./ComfyBridgeContext-Dy9XN-KW.js";import{W as I,A as w}from"./AppContext-ZaKAIv11.js";import{F as v}from"./FormContext-7paO4gYw.js";import{C as B}from"./ConfigsContext-JqLhkqbA.js";import{O as S}from"./ObjectInfoContext-CYsF4dpo.js";import{G as D,d as W,B as U}from"./index-BiKVFdKX.js";import{c as O}from"./index-DdK_udeX.js";import{c as _}from"./index-DBnD2Hxc.js";import{c as E}from"./index-Bs-Be9SB.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const G=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
  font-size: 18px;
`,c=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
`,$=a.div`
  font-size: 12px;
`,l=a.a`
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
`,f=()=>{var r,i;const s=e.useContext(h),{comfyUrl:d}=e.useContext(I),{formState:p}=e.useContext(v),{config:{baseWorkflow:m}}=e.useContext(B),{objectInfoLoading:x,objectInfoError:b,objectInfo:u}=e.useContext(S),{adapted:g,adaptedComfyWorkflow:C,bodyData:j}=e.useContext(w),[n,t]=e.useState(),y=[{label:"comfyBridge",onClick:()=>t("comfyBridge")},{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],k={comfyBridge:s,formState:p,adapted:g,baseWorkflow:m,objectInfo:{objectInfoLoading:x,objectInfoError:b,objectInfo:u},adaptedComfyWorkflow:C,bodyData:j}[n];return o.jsxs(G,{children:[o.jsxs(c,{children:[o.jsx(O,{status:(r=s.ws)==null?void 0:r.status}),o.jsxs($,{children:[(i=s.ws)==null?void 0:i.wsStatus," ",d]})]}),o.jsxs(c,{children:[o.jsx(l,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(D,{"aria-label":"Github"})}),o.jsx(l,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(W,{"aria-label":"Storybook"})}),o.jsx(_,{"aria-label":"Debug Data Options",options:y,children:o.jsx(U,{})}),n&&o.jsx(E,{onClick:()=>t(),data:k})]})]})},P=f;f.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{P as c};
