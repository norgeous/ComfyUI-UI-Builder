import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-CF39CunO.js";import{c as n}from"./index-D1c_kFox.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-S2bZAPPB.js";import"./index-Bm7KGtcn.js";import"./index-D3ylJrlI.js";import"./index-4qpBP-bj.js";import"./FormContext-BvePLfBF.js";import"./index-CB5wHgmQ.js";import"./ObjectInfoContext-DqWsA12q.js";import"./index-VWZqVgFq.js";import"./index-CnRcvEku.js";import"./index-OjkkbzBL.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./index-CIX2aKt5.js";import"./index-BK5_XIt8.js";import"./index-D8IgqToG.js";import"./index-DdXThtKS.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-DcinbNRX.js";import"./index-CL4V5rF4.js";import"./index-D8wSsrBO.js";import"./index-Ds-OFEjb.js";import"./index-WsBIA0_k.js";import"./index-wXucM5a4.js";import"./index-DO6smgbx.js";import"./index-DkhedwfY.js";import"./index-BGmRaJ-9.js";import"./index-gwn0zkgb.js";import"./index-B6YwRvmh.js";import"./index-CFM5zTPh.js";import"./index-ID9cXkF8.js";import"./index-CBgsHpUN.js";import"./index-Dmvdrk1-.js";import"./index-jdoRoLO6.js";import"./SpeechContext-CGWUamV5.js";import"./index-DWy2sOqD.js";import"./index-BFhyJOHr.js";import"./index-C68KuHoY.js";import"./index-DH3HFbLX.js";import"./index-DIq2rndE.js";import"./index-BZjR1WjL.js";import"./styled-BU-Jpcej.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
`,m=()=>r.jsxs(a,{children:[r.jsx(e,{}),r.jsx(n,{})]}),d=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const et={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const nt=["App"];export{t as App,nt as __namedExportsOrder,et as default};
