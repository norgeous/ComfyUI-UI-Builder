import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{C as y}from"./ComfyBridgeContext-Dy9XN-KW.js";import{W as w,A as I}from"./AppContext-ZaKAIv11.js";import{F as v}from"./FormContext-7paO4gYw.js";import{C as B}from"./index-BUFFlF7z.js";import{O as D}from"./ObjectInfoContext-CYsF4dpo.js";import{G as S,d as W,B as U}from"./index-BiKVFdKX.js";import{c as $}from"./index-0KXYed6g.js";import{c as O}from"./index-BC5bIBz4.js";import{c as _}from"./index-Bs-Be9SB.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";const E=s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,c=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:a})=>a?1:0};
`,G=s.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,l=s.a`
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
`,f=()=>{var r,i;const a=e.useContext(y),{comfyUrl:d}=e.useContext(w),{formState:p}=e.useContext(v),{config:{baseWorkflow:m}}=e.useContext(B),{objectInfoLoading:x,objectInfoError:b,objectInfo:u}=e.useContext(D),{adapted:g,adaptedComfyWorkflow:C,bodyData:h}=e.useContext(I),[n,t]=e.useState(),j=[{label:"comfyBridge",onClick:()=>t("comfyBridge")},{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],k={comfyBridge:a,formState:p,adapted:g,baseWorkflow:m,objectInfo:{objectInfoLoading:x,objectInfoError:b,objectInfo:u},adaptedComfyWorkflow:C,bodyData:h}[n];return o.jsxs(E,{children:[o.jsxs(c,{$shrinkable:!0,children:[o.jsx($,{status:(r=a.ws)==null?void 0:r.status}),o.jsxs(G,{children:[(i=a.ws)==null?void 0:i.statusText," ",d]})]}),o.jsxs(c,{children:[o.jsx(l,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(S,{"aria-label":"Github"})}),o.jsx(l,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(W,{"aria-label":"Storybook"})}),o.jsx(O,{"aria-label":"Debug Data Options",options:j,children:o.jsx(U,{})}),n&&o.jsx(_,{onClick:()=>t(),data:k})]})]})},P=f;f.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{P as c};
