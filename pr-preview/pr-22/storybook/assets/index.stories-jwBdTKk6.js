import{w as d,u as c,f as i}from"./index-PX7pnrjg.js";import{c as L}from"./index-CiGC6gzY.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-D0Aq9VeK.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-wo4bmeOh.js";import"./index-Dmvdrk1-.js";import"./index-DZgcxs9s.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";const N={title:"QueueItem",component:L},n={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!1,error:"469",data:{error:{message:"There was a problem"}}},play:async({canvasElement:a})=>{const e=d(a);await c.hover(e.getByRole("button"))}},r={args:{promptId:"baadb00b-babe-462f-cafe-d34dd00dcafe",type:"progress",node:"7",value:4,max:28},play:async({canvasElement:a})=>{const e=d(a);await c.hover(e.getByRole("button"))}},t={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.5,onInterrupt:i(),interruptLoading:!0},play:async({canvasElement:a})=>{const e=d(a);await c.hover(e.getByRole("button"))}},s={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.75,onInterrupt:i(),interruptError:"There was a problem with the interrupt"},play:async({canvasElement:a})=>{const e=d(a);await c.hover(e.getByRole("button"))}},o={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!1,status:"Done!",progress:1,onInterrupt:i()}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,g,l;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    promptId: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    type: 'progress',
    node: '7',
    value: 4,
    max: 28
    // loading: true,
    // status: 'Running…',
    // progress: 0.25,
    // onInterrupt: fn(),
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var f,v,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,w,E;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,R,B;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: false,
    status: 'Done!',
    progress: 1,
    onInterrupt: fn()
  }
}`,...(B=(R=o.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const P=["Failed","Loading","InterruptLoading","InterruptError","Complete"];export{o as Complete,n as Failed,s as InterruptError,t as InterruptLoading,r as Loading,P as __namedExportsOrder,N as default};
