import{f as i,w as u,u as d,e as g}from"./index-CqhhQUir.js";import{c as v}from"./index-Csld0TKj.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./jsx-runtime-X2b_N9AH.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-CCoYZxa1.js";import"./index-DheTTISF.js";import"./index-BOkhicXD.js";import"./styled-components.browser.esm-Drpn4GzW.js";import"./index-DizZy_GM.js";const O={title:"ResetButton",component:v},t={args:{onClick:i()}},e={args:{onClick:i()},play:async({args:p,canvasElement:m})=>{const l=u(m);await d.click(l.getByRole("button")),await g(p.onClick).toHaveBeenCalled()}};var a,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onClick: fn()
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var r,s,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const j=["ResetButton","ResetButtonPlay"];export{t as ResetButton,e as ResetButtonPlay,j as __namedExportsOrder,O as default};
