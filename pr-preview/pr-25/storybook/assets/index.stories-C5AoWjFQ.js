import{j as s}from"./jsx-runtime-X2b_N9AH.js";import{u as n}from"./index-Ct7ZYFme.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";import{c as p}from"./index-ENyULWse.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./index-D3ylJrlI.js";import"./floating-ui.react-CDqbCaSC.js";import"./index-BOkhicXD.js";const m=a.div`
  border: 1px solid red;
  margin: 0 auto;
  width: 100px;
  text-align: center;
  padding: 5px;
`,T={title:"Tooltip",component:p},t={args:{text:"This is the tooltip text!",children:s.jsx(m,{children:"Hover Me"})},play:async({canvasElement:i})=>{await n.hover(i.querySelector("span"))}};var e,r,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    text: 'This is the tooltip text!',
    children: <HoverMe>Hover Me</HoverMe>
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  }
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const j=["Tooltip"];export{t as Tooltip,j as __namedExportsOrder,T as default};
