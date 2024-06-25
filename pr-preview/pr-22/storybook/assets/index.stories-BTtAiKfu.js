import{f as t,w as I,u as v}from"./index-Ct7ZYFme.js";import{c as E}from"./index-DrEB4L0y.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./jsx-runtime-X2b_N9AH.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-E63py7s0.js";import"./styled-components.browser.esm-Drpn4GzW.js";import"./index-BUFFlF7z.js";import"./index-BESrCSE-.js";import"./index-BiKVFdKX.js";import"./index-C_MwD-aL.js";import"./floating-ui.react-ByhEbrkY.js";import"./index-BOkhicXD.js";import"./styled-BfGQqJDw.js";const H={title:"QueueItem",component:E},r={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!1,error:"469",data:{error:{message:"There was a problem"}}}},e={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.25,onInterrupt:t()},play:async({canvasElement:h})=>{const w=I(h);await v.hover(w.getByRole("button"))}},a={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.5,onInterrupt:t(),interruptLoading:!0}},n={args:{id:"baadb00b-babe-462f-cafe-d34dd00dcafe",loading:!0,status:"Running…",progress:.75,onInterrupt:t(),interruptError:"There was a problem with the interrupt"}};var o,s,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: false,
    error: '469',
    data: {
      error: {
        message: 'There was a problem'
      }
    }
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,p,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: true,
    status: 'Running…',
    progress: 0.5,
    onInterrupt: fn(),
    interruptLoading: true
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,f,l;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'baadb00b-babe-462f-cafe-d34dd00dcafe',
    loading: true,
    status: 'Running…',
    progress: 0.75,
    onInterrupt: fn(),
    interruptError: 'There was a problem with the interrupt'
  }
}`,...(l=(f=n.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};const J=["Failed","Loading","InterruptLoading","InterruptError"];export{r as Failed,n as InterruptError,a as InterruptLoading,e as Loading,J as __namedExportsOrder,H as default};
