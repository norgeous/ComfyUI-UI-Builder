import{w as r,u as s}from"./index-DFHy4GFg.js";import{c as f}from"./index-4tuzoS99.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-BV3z3PqH.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-D0Aq9VeK.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-wo4bmeOh.js";import"./index-KviudHZg.js";import"./index-CRfdTz-P.js";import"./index-BVAvrPnC.js";import"./index-BxibOwXx.js";import"./styled-BVZT0ieL.js";const z={title:"QueueItem",component:f},n={args:{promptId:"baadb00b-babe-462f-cafe-d34dd00dcafe"},play:async({canvasElement:a})=>{const e=r(a);await s.hover(e.getByRole("button"))}},t={args:{promptId:"baadb00b-babe-462f-cafe-d34dd00dcafe",type:"progress",node:"7",value:4,max:28},play:async({canvasElement:a})=>{const e=r(a);await s.hover(e.getByRole("button"))}},o={args:{promptId:"baadb00b-babe-462f-cafe-d34dd00dcafe",type:"executing",node:null,value:28,max:28,images:["/view?filename=01"]},play:async({canvasElement:a})=>{const e=r(a);await s.hover(e.getAllByRole("button")[1])}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    promptId: 'baadb00b-babe-462f-cafe-d34dd00dcafe'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,i,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var b,u,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    await userEvent.hover(canvas.getAllByRole('button')[1]);
  }
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const D=["Queued","Loading","Complete"];export{o as Complete,t as Loading,n as Queued,D as __namedExportsOrder,z as default};
