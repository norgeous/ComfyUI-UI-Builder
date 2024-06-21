import{w as m,u}from"./index-Ct7ZYFme.js";import{c as l}from"./index-BijqQtLk.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./jsx-runtime-X2b_N9AH.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-DheTTISF.js";import"./index-BOkhicXD.js";import"./styled-components.browser.esm-Drpn4GzW.js";import"./index-DizZy_GM.js";const k={title:"Debug",component:l},a={args:{label:"This is a Debug!",data:{foo:"bar"}}},e={args:{label:"This is a Debug!",data:{foo:"bar"}},play:async({canvasElement:c})=>{const p=m(c);await u.click(p.getByRole("button"))}};var r,o,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'This is a Debug!',
    data: {
      foo: 'bar'
    }
  }
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'This is a Debug!',
    data: {
      foo: 'bar'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const B=["Debug","DebugOpen"];export{a as Debug,e as DebugOpen,B as __namedExportsOrder,k as default};
