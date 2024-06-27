import{w as o,u as i,f as c}from"./index-PX7pnrjg.js";import{c as E}from"./index-CKtAbG7B.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-DcinbNRX.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-CB5wHgmQ.js";import"./index-Dmvdrk1-.js";import"./index-VWZqVgFq.js";import"./index-Bg_XXJfu.js";import"./floating-ui.react-MIpcmGi6.js";import"./index-B8XB3FuZ.js";import"./styled-BU-Jpcej.js";const H={title:"QueueItem",component:E},e={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!1,error:"469",data:{error:{message:"There was a problem"}}},play:async({canvasElement:a})=>{const n=o(a);await i.hover(n.getByRole("button"))}},r={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.25,onInterrupt:c()},play:async({canvasElement:a})=>{const n=o(a);await i.hover(n.getByRole("button"))}},t={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.5,onInterrupt:c(),interruptLoading:!0},play:async({canvasElement:a})=>{const n=o(a);await i.hover(n.getByRole("button"))}},s={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.75,onInterrupt:c(),interruptError:"There was a problem with the interrupt"},play:async({canvasElement:a})=>{const n=o(a);await i.hover(n.getByRole("button"))}};var d,p,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: false,
    error: '469',
    data: {
      error: {
        message: 'There was a problem'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: true,
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
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var l,f,v;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: true,
    status: 'Running…',
    progress: 0.5,
    onInterrupt: fn(),
    interruptLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,h,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: true,
    status: 'Running…',
    progress: 0.75,
    onInterrupt: fn(),
    interruptError: 'There was a problem with the interrupt'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const J=["Failed","Loading","InterruptLoading","InterruptError"];export{e as Failed,s as InterruptError,t as InterruptLoading,r as Loading,J as __namedExportsOrder,H as default};
