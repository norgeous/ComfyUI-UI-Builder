import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-k_eYLp9x.js";import{c as n}from"./index-IcuqLHk-.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-CFtLQebv.js";import"./index-D3ylJrlI.js";import"./index-DmVOzVZz.js";import"./index-kUFusxcn.js";import"./FormContext-BvePLfBF.js";import"./index-wo4bmeOh.js";import"./index-VWZqVgFq.js";import"./index-ecRm7xt-.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./index-DOxmqhEU.js";import"./index-BK5_XIt8.js";import"./index-DfmgbMUe.js";import"./index-rkhXgnz8.js";import"./index-Czd0K0uz.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-B-7O-R7q.js";import"./index-CaTBYKBi.js";import"./index-VEht7BRO.js";import"./index-DdNFp587.js";import"./index-BwJUGV3a.js";import"./index-DO6smgbx.js";import"./index-o04em6bA.js";import"./index-DRA67wvQ.js";import"./index-B-93UsSe.js";import"./index-BnEgxCVZ.js";import"./index-CqwQYN9n.js";import"./index-4th7T2vb.js";import"./index-CBgsHpUN.js";import"./index-Dmvdrk1-.js";import"./index-Bdg9T2sx.js";import"./SpeechContext-CGWUamV5.js";import"./index-B2pV4-Lf.js";import"./index-Cx9io6iu.js";import"./index-Del4H1NW.js";import"./index-ClrHycZf.js";import"./index-te26-nfo.js";import"./index-DPaniFEo.js";import"./styled-BU-Jpcej.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
