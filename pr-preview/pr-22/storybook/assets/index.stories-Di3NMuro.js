import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-B4fhL6ch.js";import{c as s}from"./index-C5-QGfY4.js";import{c as a}from"./index-BYX6HrP1.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-Bgkv0UqT.js";import"./index-D3ylJrlI.js";import"./index-FfAfuwOy.js";import"./index-D7piXqeM.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-DNbF4DxT.js";import"./index-KviudHZg.js";import"./index-Ckeq2DK0.js";import"./floating-ui.react-Dnqmk7Qj.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-CSasav0f.js";import"./index-Be5dLceS.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index--pSqozm7.js";import"./index-C5PSXt2L.js";import"./index-Bwk0Bq7z.js";import"./FormContext-BvePLfBF.js";import"./index-C5s-KkJk.js";import"./index-Drqau_A0.js";import"./index-DO6smgbx.js";import"./index-CtrTv1w1.js";import"./index-C7RgAKIB.js";import"./index-ZBz62AnU.js";import"./index-7uWRelzC.js";import"./index-Tc-m39Jb.js";import"./index-CiH6vrvP.js";import"./index-CrAgCx-z.js";import"./index-DkP8uD3_.js";import"./SpeechContext-CGWUamV5.js";import"./index-CLr4A1ej.js";import"./index-CdGmMi-p.js";import"./index-WSOe8i_x.js";import"./styled-BAeofX6r.js";import"./index-CxZrcxJX.js";import"./index-Cu1VjWhu.js";import"./index-CXO97U_O.js";import"./SettingsContext-CrmNDnzl.js";import"./index-u0fpT7_V.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const d=e.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,h=e.div`
  overflow: hidden;
  flex-grow: 1;
  display: grid;

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
`,m=()=>t.jsxs(d,{children:[t.jsxs(h,{children:[t.jsx(n,{}),t.jsx(s,{})]}),t.jsx(a,{})]}),c=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const dt={title:"App",component:c},o={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var r,i,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const ht=["App"];export{o as App,ht as __namedExportsOrder,dt as default};
