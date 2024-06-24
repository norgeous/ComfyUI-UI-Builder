import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{u as s}from"./index-Ct7ZYFme.js";import{p as f}from"./styled-components.browser.esm-Drpn4GzW.js";import{c as H}from"./index-DzcYuhaG.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./index-D3ylJrlI.js";import"./floating-ui.react-J0QxEdvZ.js";import"./index-BOkhicXD.js";import"./index-CZ727q7L.js";const E=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`,c=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0ff;
  color: black;
  font-weight: bold;
  width: 60px;
  text-align: center;
  padding: 4px;
  font-size: 12px;
`,A={title:"Tooltip",component:H,decorators:[e=>r.jsx(E,{children:r.jsx(e,{})})]},t={args:{text:"My Tooltip",placement:"top",children:r.jsx(c,{children:"Hover Me"})},play:async({canvasElement:e})=>{await s.hover(e.querySelector("span"))}},n={args:{text:"My Tooltip",placement:"right",children:r.jsx(c,{children:"Hover Me"})},play:async({canvasElement:e})=>{await s.hover(e.querySelector("span"))}},o={args:{text:"My Tooltip",placement:"bottom",children:r.jsx(c,{children:"Hover Me"})},play:async({canvasElement:e})=>{await s.hover(e.querySelector("span"))}},a={args:{text:"My Tooltip",placement:"left",children:r.jsx(c,{children:"Hover Me"})},play:async({canvasElement:e})=>{await s.hover(e.querySelector("span"))}};var p,i,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'My Tooltip',
    placement: 'top',
    children: <HoverMe>Hover Me</HoverMe>
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,v,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'My Tooltip',
    placement: 'right',
    children: <HoverMe>Hover Me</HoverMe>
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(d=(v=n.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};var y,u,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'My Tooltip',
    placement: 'bottom',
    children: <HoverMe>Hover Me</HoverMe>
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,M,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'My Tooltip',
    placement: 'left',
    children: <HoverMe>Hover Me</HoverMe>
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(g=(M=a.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};const D=["Top","Right","Bottom","Left"];export{o as Bottom,a as Left,n as Right,t as Top,D as __namedExportsOrder,A as default};
