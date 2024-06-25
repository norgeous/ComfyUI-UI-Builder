import{f as o,w as s,u as c}from"./index-Ct7ZYFme.js";import{c as p}from"./index-BC5bIBz4.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./jsx-runtime-X2b_N9AH.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./floating-ui.react-ByhEbrkY.js";import"./index-BOkhicXD.js";import"./styled-components.browser.esm-Drpn4GzW.js";import"./index-BUFFlF7z.js";const O={title:"PopMenu",component:p},n={args:{children:"Click Me",options:[{label:"Option 1",onClick:o()},{label:"Option 2",onClick:o()}]},play:async({canvasElement:a})=>{const r=s(a);await c.click(r.getByRole("button"))}};var t,e,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    options: [{
      label: 'Option 1',
      onClick: fn()
    }, {
      label: 'Option 2',
      onClick: fn()
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(i=(e=n.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const h=["PopMenu"];export{n as PopMenu,h as __namedExportsOrder,O as default};
