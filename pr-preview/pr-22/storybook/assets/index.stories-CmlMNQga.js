import{w as o,u as i,f as c}from"./index-Ct7ZYFme.js";import{c as E}from"./index-CcD6RIZj.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./jsx-runtime-X2b_N9AH.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-E63py7s0.js";import"./styled-components.browser.esm-Drpn4GzW.js";import"./index-BUFFlF7z.js";import"./index-BESrCSE-.js";import"./index-BiKVFdKX.js";import"./index-C_MwD-aL.js";import"./floating-ui.react-ByhEbrkY.js";import"./index-BOkhicXD.js";import"./styled-x9pxi_1C.js";const H={title:"QueueItem",component:E},e={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!1,error:"469",data:{error:{message:"There was a problem"}}},play:async({canvasElement:a})=>{const n=o(a);await i.hover(n.getByRole("button"))}},r={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.25,onInterrupt:c()},play:async({canvasElement:a})=>{const n=o(a);await i.hover(n.getByRole("button"))}},t={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.5,onInterrupt:c(),interruptLoading:!0},play:async({canvasElement:a})=>{const n=o(a);await i.hover(n.getByRole("button"))}},s={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.75,onInterrupt:c(),interruptError:"There was a problem with the interrupt"},play:async({canvasElement:a})=>{const n=o(a);await i.hover(n.getByRole("button"))}};var d,p,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
