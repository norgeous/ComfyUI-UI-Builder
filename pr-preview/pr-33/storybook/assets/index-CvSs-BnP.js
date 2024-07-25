import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as c}from"./ComfyBridgeContext-CTMRF_Mz.js";import{G as l,d}from"./index-CjMGYxTR.js";import{c as p}from"./index-Cylc3f0E.js";import{c as r}from"./index-zBpH53_J.js";import{c as x}from"./index-BSTYY8Bb.js";import{c as m}from"./index-CEDhNWOv.js";import{d as e}from"./styled-components.browser.esm-CgTwxB-0.js";const f=e.div`
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
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
  overflow: ${({$shrinkable:t})=>t?"hidden":"visible"};
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
  border-radius: var(--radius);
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`,n=()=>{const t=a.useContext(c);return o.jsxs(f,{children:[o.jsxs(s,{$shrinkable:!0,children:[o.jsx(p,{status:t.data.ws.status}),o.jsx(u,{children:t.data.ws.statusText})]}),o.jsxs(s,{children:[o.jsx(r,{text:"Github",children:o.jsx(i,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(l,{"aria-label":"Github"})})}),o.jsx(r,{text:"Storybook",children:o.jsx(i,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(d,{"aria-label":"Storybook"})})}),o.jsx(m,{}),o.jsx(x,{})]})]})},I=n;n.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{I as c};
