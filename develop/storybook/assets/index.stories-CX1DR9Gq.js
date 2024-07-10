import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-BBTv9-mV.js";import{c as n}from"./index-aXK4_deF.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-S2bZAPPB.js";import"./index-Bm7KGtcn.js";import"./index-D3ylJrlI.js";import"./index-DidEcf8S.js";import"./FormContext-BvePLfBF.js";import"./index-CXGN0Eu6.js";import"./ObjectInfoContext-DqWsA12q.js";import"./index-zXYQOjb1.js";import"./index-4acWRQSH.js";import"./index-DkHr-PeX.js";import"./floating-ui.react-CPLfUUbp.js";import"./index-BxibOwXx.js";import"./index-WD6sc3nL.js";import"./index-BK5_XIt8.js";import"./index-1B_t7xKC.js";import"./index-Cvji3vUd.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-CjquOcKe.js";import"./index-DYauB3LG.js";import"./index-CC5Bygp5.js";import"./index-tsZ64psz.js";import"./index-AW1RxX53.js";import"./index-B8zn36-L.js";import"./index-DO6smgbx.js";import"./index-DFZHi0Ye.js";import"./index-BmAJjC0a.js";import"./index-emK7aj9s.js";import"./index-CMF2B8jU.js";import"./index-Cxft-gg7.js";import"./index-C5YiLXHJ.js";import"./index-TLSSBFeC.js";import"./index-Dmvdrk1-.js";import"./index-BYpFnmXp.js";import"./SpeechContext-CGWUamV5.js";import"./index-CQnpcwLJ.js";import"./index-CQEm8tDk.js";import"./index-BecNAwVq.js";import"./index-B6VJ0iqh.js";import"./index-CFO56BCh.js";import"./index-C3hXv92Y.js";import"./styled-BU-Jpcej.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
