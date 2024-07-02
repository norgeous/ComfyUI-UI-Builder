import{u as n}from"./index-PX7pnrjg.js";import{c as S}from"./index-CnRcvEku.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-OjkkbzBL.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-CB5wHgmQ.js";const x={title:"StatusLight",component:S},e={args:{status:"DEFAULT"},play:async({canvasElement:a})=>{await n.hover(a.querySelector("span"))}},r={args:{status:"CONNECTING"},play:async({canvasElement:a})=>{await n.hover(a.querySelector("span"))}},s={args:{status:"CONNECTED"},play:async({canvasElement:a})=>{await n.hover(a.querySelector("span"))}},t={args:{status:"DISCONNECTED"},play:async({canvasElement:a})=>{await n.hover(a.querySelector("span"))}};var o,c,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    status: 'DEFAULT'
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,E,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'CONNECTING'
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(u=(E=r.parameters)==null?void 0:E.docs)==null?void 0:u.source}}};var i,l,N;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    status: 'CONNECTED'
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(N=(l=s.parameters)==null?void 0:l.docs)==null?void 0:N.source}}};var y,C,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'DISCONNECTED'
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const _=["DEFAULT","CONNECTING","CONNECTED","DISCONNECTED"];export{s as CONNECTED,r as CONNECTING,e as DEFAULT,t as DISCONNECTED,_ as __namedExportsOrder,x as default};
