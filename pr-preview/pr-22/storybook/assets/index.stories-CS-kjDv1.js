import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-DGrXjN0i.js";import{c as n}from"./index-Cahrx41K.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./WsContext-BKMtNRGf.js";import"./index-Bm7KGtcn.js";import"./index-D3ylJrlI.js";import"./index-DmF8GyhT.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./FormContext-BvePLfBF.js";import"./index-CB5wHgmQ.js";import"./AppContext-kKnWjy1_.js";import"./index-VWZqVgFq.js";import"./index-BEU925uA.js";import"./index-Bg_XXJfu.js";import"./floating-ui.react-MIpcmGi6.js";import"./index-B8XB3FuZ.js";import"./index-z1xMQG4V.js";import"./index-BK5_XIt8.js";import"./index-DcinbNRX.js";import"./index-BYzLV2uZ.js";import"./index-C5SA_JDK.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-DTCxsLqt.js";import"./index-Bpik0EbD.js";import"./index-D-AQN5mk.js";import"./index-DZz8Wie9.js";import"./index-C8fvDs92.js";import"./index-DO6smgbx.js";import"./index-DFLdmi_l.js";import"./index-Thx6jCf_.js";import"./index-B92dyGit.js";import"./index-Dhk5hU5Q.js";import"./index-BbC-N4y_.js";import"./index-BuxHonki.js";import"./index-CBgsHpUN.js";import"./index-Dmvdrk1-.js";import"./index-Lr0IKWY3.js";import"./SpeechContext-CGWUamV5.js";import"./index-DS0nfb-k.js";import"./index-CvIw-cS4.js";import"./index-Ceb-uybp.js";import"./index-DH3HFbLX.js";import"./index-DLaf0KUp.js";import"./index-CPNPzRlV.js";import"./styled-BU-Jpcej.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
`,m=()=>r.jsxs(a,{children:[r.jsx(e,{}),r.jsx(n,{})]}),d=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const nt={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const st=["App"];export{t as App,st as __namedExportsOrder,nt as default};
