import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as c}from"./ComfyBridgeContext-CTMRF_Mz.js";import{G as p,d as l}from"./index-CRfdTz-P.js";import{c as d}from"./index-DvY2dSHE.js";import{c as r}from"./index-Dj0aUtmp.js";import{c as x}from"./index-LL5imdeP.js";import{c as m}from"./index-CmDfEyTu.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";const f=e.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,s=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:o})=>o?1:0};
`,u=e.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,i=e.a`
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
`,n=()=>{const o=a.useContext(c);return t.jsxs(f,{children:[t.jsxs(s,{$shrinkable:!0,children:[t.jsx(d,{status:o.data.ws.status}),t.jsx(u,{children:o.data.ws.statusText})]}),t.jsxs(s,{children:[t.jsx(r,{text:"Github",children:t.jsx(i,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:t.jsx(p,{})})}),t.jsx(r,{text:"Storybook",children:t.jsx(i,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:t.jsx(l,{})})}),t.jsx(m,{}),t.jsx(x,{})]})]})},I=n;n.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{I as c};
