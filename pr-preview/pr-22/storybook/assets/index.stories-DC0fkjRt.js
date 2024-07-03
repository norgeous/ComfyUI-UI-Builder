import{w as e,u as r,f as i}from"./index-PX7pnrjg.js";import{c as L}from"./index-CX80jRvq.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-D0Aq9VeK.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-wo4bmeOh.js";import"./index-Dmvdrk1-.js";import"./index-n3Wug2HJ.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./styled-DXX43EGL.js";const N={title:"QueueItem",component:L},t={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!1,error:"469",data:{error:{message:"There was a problem"}}},play:async({canvasElement:a})=>{const n=e(a);await r.hover(n.getByRole("button"))}},s={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.25,onInterrupt:i()},play:async({canvasElement:a})=>{const n=e(a);await r.hover(n.getByRole("button"))}},o={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.5,onInterrupt:i(),interruptLoading:!0},play:async({canvasElement:a})=>{const n=e(a);await r.hover(n.getByRole("button"))}},c={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.75,onInterrupt:i(),interruptError:"There was a problem with the interrupt"},play:async({canvasElement:a})=>{const n=e(a);await r.hover(n.getByRole("button"))}},d={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!1,status:"Done!",progress:1,onInterrupt:i()},play:async({canvasElement:a})=>{const n=e(a);await r.hover(n.getByRole("button"))}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,l,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var f,v,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,w,E;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var R,I,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: false,
    status: 'Done!',
    progress: 1,
    onInterrupt: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const P=["Failed","Loading","InterruptLoading","InterruptError","Complete"];export{d as Complete,t as Failed,c as InterruptError,o as InterruptLoading,s as Loading,P as __namedExportsOrder,N as default};
