import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-C_qSuEGH.js";import{c as n}from"./index-D-NiE_45.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-Bm7KGtcn.js";import"./index-D3ylJrlI.js";import"./index-qL_iQKLi.js";import"./FormContext-BvePLfBF.js";import"./index-CXGN0Eu6.js";import"./index-VWZqVgFq.js";import"./index-CaJSGHS2.js";import"./index-DVGzLI83.js";import"./floating-ui.react-MIpcmGi6.js";import"./index-B8XB3FuZ.js";import"./index-BlyO9wlY.js";import"./index-BK5_XIt8.js";import"./index-CjquOcKe.js";import"./index-K1cJZF2N.js";import"./index-BrpoDS46.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-o5O4yXWl.js";import"./index-MyjVtDZw.js";import"./index-CSJthM4p.js";import"./index-DmkE-dQC.js";import"./index-UkHbEDNg.js";import"./index-DO6smgbx.js";import"./index-BK7ikFss.js";import"./index-7vJk77eB.js";import"./index-Cw9pW0xb.js";import"./index-CqGR3y89.js";import"./index-Dh-TsELV.js";import"./index-CvaPGvop.js";import"./index-CBgsHpUN.js";import"./index-Dmvdrk1-.js";import"./index-BFLB4ODE.js";import"./SpeechContext-CGWUamV5.js";import"./index-OdOtCrNB.js";import"./index-BlV_BQks.js";import"./index-B58bKuaH.js";import"./index-2n0DV53N.js";import"./index-1VfoVuzN.js";import"./index-Byp_CY5m.js";import"./styled-BU-Jpcej.js";import"./index-BAMY2Nnw.js";const a=s.div`
  display: grid;
  height: 100svh;

  // portrait first
  grid-template-rows: minmax(50%, auto) minmax(auto, 400px);

  // landscape overrides
  @media (min-aspect-ratio: 1/1) {
    grid-template-rows: none;
    grid-template-columns: minmax(auto, 460px) minmax(50%, auto);
    & > :first-child {
      order: 2; // change the order on landscape, so that sidebar is first
    }
  }
`,m=()=>r.jsxs(a,{children:[r.jsx(e,{}),r.jsx(n,{})]}),d=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const mt={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      viewport: {
        width: 830,
        // the width of github README.md on desktop
        height: 600
      },
      variants: {
        small: {
          viewport: {
            width: 412,
            // half the width of github README.md on desktop
            height: 700
          }
        },
        small_dark: {
          viewport: {
            width: 412,
            // half the width of github README.md on desktop
            height: 700
          },
          forceDark: true
        }
      }
    }
  },
  args: {}
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const et=["App"];export{t as App,et as __namedExportsOrder,mt as default};
