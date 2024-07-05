import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as m}from"./index-vy50ZwRd.js";import{c as n}from"./index-sIyCiCzP.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-Dr5Czate.js";import"./index-D3ylJrlI.js";import"./index-DZgcxs9s.js";import"./index-C9_Ga5HK.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-BYg7iRFc.js";import"./index-Dmvdrk1-.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-BUlfs2x2.js";import"./FormContext-BvePLfBF.js";import"./index-DCdg15hX.js";import"./index-DOxmqhEU.js";import"./index-BK5_XIt8.js";import"./index-CksqOTCG.js";import"./index-Bl4-TzVF.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-D236LOXw.js";import"./index-Cf1VpMaL.js";import"./index-CaWsYHCV.js";import"./index-BFg6y9M1.js";import"./index-BwJUGV3a.js";import"./index-DO6smgbx.js";import"./index-DEX62mZn.js";import"./index-CPN9oarN.js";import"./index-BYVmYPZx.js";import"./index-fvVWanAW.js";import"./index-DOtRewGl.js";import"./index-cPGbg2iV.js";import"./index-BHIZi79l.js";import"./index-fLDhQHTM.js";import"./SpeechContext-CGWUamV5.js";import"./index-BI47sv9T.js";import"./index-Cx9io6iu.js";import"./index-CjmDwqzy.js";import"./index-Dsk0WDk6.js";import"./index-C2wGkVOO.js";import"./index-BAMY2Nnw.js";const a=s.div`
  display: grid;
  height: 100svh;

  // portrait first
  grid-template-rows: auto 400px;

  // landscape overrides
  @media (min-aspect-ratio: 1/1) {
    grid-template-rows: none;
    grid-template-columns: 460px auto;
    & > :first-child {
      order: 2; // change the order on landscape, so that sidebar is first
    }
  }
`,e=()=>r.jsxs(a,{children:[r.jsx(m,{}),r.jsx(n,{})]}),d=e;e.__docgenInfo={description:"",methods:[],displayName:"App"};const mt={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const nt=["App"];export{t as App,nt as __namedExportsOrder,mt as default};
