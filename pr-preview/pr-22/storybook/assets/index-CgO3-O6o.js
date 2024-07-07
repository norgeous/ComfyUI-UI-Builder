import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{C as a}from"./ComfyBridgeContext-CTMRF_Mz.js";import{G as c,d as l}from"./index-CRfdTz-P.js";import{c as p}from"./index-CXO97U_O.js";import{c as d}from"./index-D2bdsCyh.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import{c as f}from"./index-Ccyxtgs3.js";const x=e.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,r=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,m=e.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,s=e.a`
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
`,i=()=>{const t=n.useContext(a);return o.jsxs(x,{children:[o.jsxs(r,{$shrinkable:!0,children:[o.jsx(p,{status:t.data.ws.status}),o.jsx(m,{children:t.data.ws.statusText})]}),o.jsxs(r,{children:[o.jsx(s,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank","aria-label":"Github",children:o.jsx(c,{})}),o.jsx(s,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank","aria-label":"Storybook",children:o.jsx(l,{})}),o.jsx(f,{}),o.jsx(d,{})]})]})},k=i;i.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{k as c};
