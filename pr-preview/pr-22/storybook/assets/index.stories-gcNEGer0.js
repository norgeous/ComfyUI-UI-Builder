import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-BMDk-sUC.js";import{c as n}from"./index-7c2CcWeG.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-D_loUYX5.js";import"./index-D3ylJrlI.js";import"./index-Dfx0ISz3.js";import"./FormContext-BvePLfBF.js";import"./index-wo4bmeOh.js";import"./index-BGHfn8iy.js";import"./index-ecRm7xt-.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./index-DOxmqhEU.js";import"./index-BK5_XIt8.js";import"./index-DfmgbMUe.js";import"./index-PfyLCoin.js";import"./index-DULOMEQK.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-CGTMu59Y.js";import"./index-CrJCQ4Hu.js";import"./index-JmhysE8-.js";import"./index-dRpoUwXm.js";import"./index-BwJUGV3a.js";import"./index-DO6smgbx.js";import"./index-BHwi9ado.js";import"./index-Cck9BGz0.js";import"./index-CjOOqJaJ.js";import"./index-DZQH6i9L.js";import"./index-CKuh8OFu.js";import"./index-CjaWm5D7.js";import"./index-DTDTLdmj.js";import"./index-Dmvdrk1-.js";import"./index-BvwXAv-m.js";import"./SpeechContext-CGWUamV5.js";import"./index-Cn1anDvx.js";import"./index-Cx9io6iu.js";import"./index-C_CIHnMj.js";import"./index-BfDE1HTw.js";import"./index-qqNcmzG3.js";import"./index-DkRdm9fz.js";import"./styled-BU-Jpcej.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
