import{w as r,u as s}from"./index-PX7pnrjg.js";import{c as f}from"./index-Bq-vV3zX.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-D0Aq9VeK.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-wo4bmeOh.js";import"./index-KviudHZg.js";import"./index-CRfdTz-P.js";import"./index-Dl0_K7pp.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";const A={title:"QueueItem",component:f},n={args:{promptId:"baadb00b-babe-462f-cafe-d34dd00dcafe"},play:async({canvasElement:a})=>{const e=r(a);await s.hover(e.getByRole("button"))}},t={args:{promptId:"baadb00b-babe-462f-cafe-d34dd00dcafe",type:"progress",node:"7",value:4,max:28},play:async({canvasElement:a})=>{const e=r(a);await s.hover(e.getByRole("button"))}},o={args:{promptId:"baadb00b-babe-462f-cafe-d34dd00dcafe",type:"executing",node:null,value:28,max:28,images:["/view?filename=01"]},play:async({canvasElement:a})=>{const e=r(a);await s.hover(e.getByRole("button"))}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    promptId: 'baadb00b-babe-462f-cafe-d34dd00dcafe'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,i,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    promptId: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    type: 'progress',
    node: '7',
    value: 4,
    max: 28
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(b=(i=t.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var l,u,v;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    promptId: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    type: 'executing',
    node: null,
    value: 28,
    max: 28,
    images: ['/view?filename=01']
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const D=["Queued","Loading","Complete"];export{o as Complete,t as Loading,n as Queued,D as __namedExportsOrder,A as default};
