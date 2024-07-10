import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-DC9ZxisR.js";import{c as s}from"./index-D15XYvKp.js";import{c as a}from"./index-Ci18IZ3m.js";import{c as d}from"./index-DVomX72o.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-DmPTbrnN.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-BhNSVMpH.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-4tuzoS99.js";import"./index-KviudHZg.js";import"./index-CRfdTz-P.js";import"./index-BVAvrPnC.js";import"./index-BxibOwXx.js";import"./styled-BVZT0ieL.js";import"./index-Dy4YMrvv.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-BeGqWVFg.js";import"./index-CtMrU31E.js";import"./index-DwFY-VPD.js";import"./index-CAix00NT.js";import"./index-DpN_LCir.js";import"./FormContext-BvePLfBF.js";import"./index-DO6smgbx.js";import"./index-CVbDd03K.js";import"./index-Czh-eORu.js";import"./index-GBaqZrJi.js";import"./index-t0yF_dLq.js";import"./index-CZ5DJm2b.js";import"./index-DFvR2OWy.js";import"./index-BFYRQwOv.js";import"./index-FqTM9ZP4.js";import"./SpeechContext-CGWUamV5.js";import"./index-Dz0oCWDZ.js";import"./index-Dgq2ZuoH.js";import"./index-Bhwd9ZsG.js";import"./styled-QFJ-LRfT.js";import"./index-g7eq_-Rx.js";import"./index-D-2AEKVY.js";import"./index-ByRgPrv-.js";import"./index-CYjUa0M7.js";import"./index-BsGcfiuJ.js";import"./index-CEePtdL-.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const h=e.div`
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
