import{w as l,u,e as b}from"./index-CqhhQUir.js";import{c as g}from"./index-DOdUZUoh.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./jsx-runtime-X2b_N9AH.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-DheTTISF.js";import"./index-BOkhicXD.js";import"./styled-components.browser.esm-Drpn4GzW.js";import"./index-DizZy_GM.js";const _={title:"Debug",component:g},a={args:{label:"This is a Debug!",data:{a:1,b:2,c:3}}},e={args:{label:"This is a Debug!",data:{a:1,b:2,c:3}},play:async({args:c,canvasElement:p})=>{const m=l(p);await u.click(m.getByRole("button")),await b(c.onClick).toHaveBeenCalled()}};var n,t,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'This is a Debug!',
    data: {
      a: 1,
      b: 2,
      c: 3
    }
  }
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'This is a Debug!',
    data: {
      a: 1,
      b: 2,
      c: 3
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const H=["Debug","DebugOpen"];export{a as Debug,e as DebugOpen,H as __namedExportsOrder,_ as default};
