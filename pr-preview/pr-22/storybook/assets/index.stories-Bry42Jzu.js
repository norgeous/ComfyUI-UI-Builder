import{w as i,u as s}from"./index-PX7pnrjg.js";import{c as p}from"./index-xzKNM7iM.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./FormContext-BvePLfBF.js";import"./index-wo4bmeOh.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-CRfdTz-P.js";import"./index-DL7FrFuT.js";import"./index-D3ylJrlI.js";import"./index-Dj0aUtmp.js";import"./index-B8XB3FuZ.js";import"./index-BK5_XIt8.js";const R={title:"DebugMenu",component:p},t={parameters:{screenshot:{viewport:{width:412,height:250}}},args:{},play:async({canvasElement:o})=>{const a=i(o);await s.click(a.getByRole("button"))}};var r,e,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      viewport: {
        width: 412,
        height: 250
      }
    }
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const O=["DebugMenu"];export{t as DebugMenu,O as __namedExportsOrder,R as default};
