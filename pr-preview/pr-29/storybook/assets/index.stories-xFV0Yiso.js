import{f as e,w as L,u as I}from"./index-PX7pnrjg.js";import{c as h}from"./index-Dn4_yKhT.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-DcinbNRX.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-CB5wHgmQ.js";import"./index-Dmvdrk1-.js";import"./index-VWZqVgFq.js";import"./index-Bg_XXJfu.js";import"./floating-ui.react-MIpcmGi6.js";import"./index-B8XB3FuZ.js";import"./styled-BU-Jpcej.js";const C={title:"QueueItem",component:h},r={args:{isLoading:!0,status:"Running…",progress:.25,onInterrupt:e()},play:async({canvasElement:d})=>{const l=L(d);await I.hover(l.getByRole("button"))}},t={args:{isLoading:!0,status:"Running…",progress:.5,onInterrupt:e(),interruptLoading:!0}},n={args:{isLoading:!0,status:"Running…",progress:.75,onInterrupt:e(),interruptError:"There was a problem with the interrupt"}};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    status: 'Running…',
    progress: 0.25,
    onInterrupt: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    status: 'Running…',
    progress: 0.5,
    onInterrupt: fn(),
    interruptLoading: true
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    status: 'Running…',
    progress: 0.75,
    onInterrupt: fn(),
    interruptError: 'There was a problem with the interrupt'
  }
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const D=["Loading","InterruptLoading","InterruptError"];export{n as InterruptError,t as InterruptLoading,r as Loading,D as __namedExportsOrder,C as default};
