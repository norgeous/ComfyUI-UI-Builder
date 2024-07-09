import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-CXzDDuIa.js";import{c as s}from"./index-DXpqv1fe.js";import{c as a}from"./index-Cz9XhkpE.js";import{c as d}from"./index-YFtdt5YE.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-DmPTbrnN.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-ChMlG98T.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-DEjRoY4D.js";import"./index-KviudHZg.js";import"./index-CRfdTz-P.js";import"./index-CqtEMep3.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-BqF8IYia.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-CvTZE2zZ.js";import"./index-CQ83oR1U.js";import"./index-DHXoTn6s.js";import"./FormContext-BvePLfBF.js";import"./index-Cq499ScL.js";import"./index-BQO4nnhm.js";import"./index-DO6smgbx.js";import"./index-DJr1iFJ_.js";import"./index-xj8z8WdM.js";import"./index-Djxs7c5H.js";import"./index-D9qLiot6.js";import"./index-CDHsnDu9.js";import"./index-BHzST3yp.js";import"./index-BFYRQwOv.js";import"./index-D0rlS62R.js";import"./SpeechContext-CGWUamV5.js";import"./index-ByQh9JIw.js";import"./index-DsEacaRu.js";import"./index-D6Y_DA0M.js";import"./styled-BAeofX6r.js";import"./index-g7eq_-Rx.js";import"./index-nzaZCHiq.js";import"./index-Bt0P4OjS.js";import"./index-D3MZTsBD.js";import"./index-DSTr6H6M.js";import"./index-Dz-od6u_.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const h=e.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,c=e.div`
  overflow: hidden;
  flex-grow: 1;
  display: grid;

  // portrait first
  grid-template-rows: auto minmax(auto, 360px);

  // landscape overrides
  @media (min-aspect-ratio: 1/1) {
    grid-template-rows: none;
    grid-template-columns: minmax(auto, 460px) auto;
    & > :first-child {
      order: 2; // change the order on landscape, so that sidebar is first
    }
  }
`,m=()=>t.jsxs(h,{children:[t.jsx(s,{}),t.jsxs(c,{children:[t.jsx(n,{}),t.jsx(a,{})]}),t.jsx(d,{})]}),l=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const ct={title:"App",component:l},o={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var r,i,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const lt=["App"];export{o as App,lt as __namedExportsOrder,ct as default};
