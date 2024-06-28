import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{W as j,A as k}from"./AppContext-S2bZAPPB.js";import{F as y}from"./FormContext-BvePLfBF.js";import{C as w}from"./index-CB5wHgmQ.js";import{O as I}from"./ObjectInfoContext-DqWsA12q.js";import{G as v,d as S,B as D}from"./index-VWZqVgFq.js";import{c as W}from"./index-BEU925uA.js";import{c as B}from"./index-z1xMQG4V.js";import{c as U}from"./index-BK5_XIt8.js";import{p as a}from"./styled-components.browser.esm-Cm6OPFyG.js";const $=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,r=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:n})=>n?1:0};
`,O=a.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,i=a.a`
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
`,l=()=>{const{wsStatus:n,comfyUrl:c}=e.useContext(j),{formState:f}=e.useContext(y),{config:{baseWorkflow:p}}=e.useContext(w),{objectInfoLoading:d,objectInfoError:m,objectInfo:b}=e.useContext(I),{adapted:x,adaptedComfyWorkflow:u,bodyData:g}=e.useContext(k),[s,t]=e.useState(),C=[{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],h={formState:f,adapted:x,baseWorkflow:p,objectInfo:{objectInfoLoading:d,objectInfoError:m,objectInfo:b},adaptedComfyWorkflow:u,bodyData:g}[s];return o.jsxs($,{children:[o.jsxs(r,{$shrinkable:!0,children:[o.jsx(W,{status:n}),o.jsx(O,{children:c})]}),o.jsxs(r,{children:[o.jsx(i,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(v,{"aria-label":"Github"})}),o.jsx(i,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(S,{"aria-label":"Storybook"})}),o.jsx(B,{"aria-label":"Debug Data Options",options:C,children:o.jsx(D,{})}),s&&o.jsx(U,{onClick:()=>t(),data:h})]})]})},H=l;l.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{H as c};
