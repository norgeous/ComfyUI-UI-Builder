import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as m}from"./index-PGBzLrG3.js";import{c as n}from"./index-CJKtdz8E.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-CKiSEJ_X.js";import"./index-D3ylJrlI.js";import"./index-CrqPYF-W.js";import"./index-DUCVnDsu.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-DgrRAqzU.js";import"./index-KviudHZg.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-6Wdl5W-1.js";import"./FormContext-BvePLfBF.js";import"./index-DCdg15hX.js";import"./index-DOxmqhEU.js";import"./index-BK5_XIt8.js";import"./index-ENcA_t3y.js";import"./index-DR5XvYCU.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-CWOaoGeb.js";import"./index-DAeR070I.js";import"./index-xqhxN9BK.js";import"./index-cDxTADxk.js";import"./index-BwJUGV3a.js";import"./index-DO6smgbx.js";import"./index-B7x-VDT7.js";import"./index-xkWOUWsV.js";import"./index-CTYjAF7x.js";import"./index-DohsDmGq.js";import"./index-BTPnNvjF.js";import"./index-D0vYhE_2.js";import"./index-DTEvBq80.js";import"./index-CzHlZZz-.js";import"./SpeechContext-CGWUamV5.js";import"./index-DKZpsVba.js";import"./index-Cx9io6iu.js";import"./index-DaYdeqPJ.js";import"./index-BDeGgbMT.js";import"./index-OaNeYTGV.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
