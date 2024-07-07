import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as c}from"./ComfyBridgeContext-CTMRF_Mz.js";import{h as k,B,G as S,j as w}from"./index-FfAfuwOy.js";import{c as I}from"./index-CXO97U_O.js";import{S as v}from"./SettingsContext-CrmNDnzl.js";import{c as u}from"./index-u0fpT7_V.js";import{L as l,C as m}from"./styled-BAeofX6r.js";import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";import{F as D}from"./FormContext-BvePLfBF.js";import{C as q}from"./index-wo4bmeOh.js";import{c as _}from"./index-BK5_XIt8.js";const g=()=>{const{settings:{scaleUp:t,pixelSmooth:i},updateSettings:n}=a.useContext(v);return e.jsx(u,{"aria-label":"View Debug Data",menuContents:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(m,{checked:t,onChange:s=>n({scaleUp:s.target.checked})})," ","Scale images beyond their natural size"]}),e.jsxs(l,{children:[e.jsx(m,{checked:i,onChange:s=>n({pixelSmooth:s.target.checked})})," ","Enabled pixel smoothing optimisation"]})]}),children:e.jsx(k,{"aria-label":"Settings"})})};g.__docgenInfo={description:"",methods:[],displayName:"SettingsMenu"};const U=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,f=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,W=r.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,p=r.a`
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
`,x=()=>{const t=a.useContext(c),{formState:i}=a.useContext(D),{config:{baseWorkflow:n}}=a.useContext(q),{adapted:s,adaptedComfyWorkflow:h,bodyData:y}=a.useContext(c),[d,o]=a.useState(),C=[{label:"comfyBridge.data.ws",onClick:()=>o("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>o("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.prompt",onClick:()=>o("comfyBridge.data.prompt")},{label:"comfyBridge.data.queue",onClick:()=>o("comfyBridge.data.queue")},{label:"comfyBridge.data.queueSelected",onClick:()=>o("comfyBridge.data.queueSelected")},{label:"formState",onClick:()=>o("formState")},{label:"adapted",onClick:()=>o("adapted")},{label:"baseWorkflow",onClick:()=>o("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>o("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>o("bodyData")}],j={"comfyBridge.data.ws":t.data.ws,"comfyBridge.data.objectInfo":t.data.objectInfo,"comfyBridge.data.prompt":t.data.prompt,"comfyBridge.data.queue":t.data.queue,"comfyBridge.data.queueSelected":t.data.queueSelected,formState:i,adapted:s,baseWorkflow:n,adaptedComfyWorkflow:h,bodyData:y}[d];return e.jsxs(e.Fragment,{children:[e.jsx(u,{"aria-label":"View Debug Data",options:C,children:e.jsx(B,{})}),d&&e.jsx(_,{onClick:()=>o(),data:j})]})};x.__docgenInfo={description:"",methods:[],displayName:"DebugMenu"};const b=()=>{const t=a.useContext(c);return e.jsxs(U,{children:[e.jsxs(f,{$shrinkable:!0,children:[e.jsx(I,{status:t.data.ws.status}),e.jsx(W,{children:t.data.ws.statusText})]}),e.jsxs(f,{children:[e.jsx(p,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank","aria-label":"Github",children:e.jsx(S,{})}),e.jsx(p,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank","aria-label":"Storybook",children:e.jsx(w,{})}),e.jsx(x,{}),e.jsx(g,{})]})]})},A=b;b.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{A as c};
