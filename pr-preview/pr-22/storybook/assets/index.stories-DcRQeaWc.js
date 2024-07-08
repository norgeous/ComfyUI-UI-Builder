import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-CxmtWjTv.js";import{c as s}from"./index-DtqXyTM4.js";import{c as a}from"./index-BlbYTXES.js";import{c as d}from"./index-CgO3-O6o.js";import{p as m}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-DmPTbrnN.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-CxqqH-nY.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-D-LQ-aeR.js";import"./index-KviudHZg.js";import"./index-CRfdTz-P.js";import"./index-Ckeq2DK0.js";import"./floating-ui.react-Dnqmk7Qj.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-sSW-04aA.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-BQ1uf3uC.js";import"./index-B5VMmXvS.js";import"./index-PNfHRmpP.js";import"./FormContext-BvePLfBF.js";import"./index-BJht4iMF.js";import"./index-Drqau_A0.js";import"./index-DO6smgbx.js";import"./index-DtrQI2xG.js";import"./index-Cn8bdcsH.js";import"./index-CCQbKop9.js";import"./index-B_0KnK0B.js";import"./index-DHvLdZ8A.js";import"./index-TFdrJtFz.js";import"./index-BFYRQwOv.js";import"./index-B96IRPPP.js";import"./SpeechContext-CGWUamV5.js";import"./index-DnegYAD_.js";import"./index-CdGmMi-p.js";import"./index-WfL3FixB.js";import"./styled-BAeofX6r.js";import"./index-g7eq_-Rx.js";import"./index-CMz1Tukx.js";import"./index-CXO97U_O.js";import"./index-D2bdsCyh.js";import"./index-u0fpT7_V.js";import"./index-Ccyxtgs3.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const h=m.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,c=m.div`
  overflow: hidden;
  flex-grow: 1;
  display: grid;

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
`,e=()=>t.jsxs(h,{children:[t.jsx(s,{}),t.jsxs(c,{children:[t.jsx(n,{}),t.jsx(a,{})]}),t.jsx(d,{})]}),l=e;e.__docgenInfo={description:"",methods:[],displayName:"App"};const lt={title:"App",component:l},o={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var r,i,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const ft=["App"];export{o as App,ft as __namedExportsOrder,lt as default};
