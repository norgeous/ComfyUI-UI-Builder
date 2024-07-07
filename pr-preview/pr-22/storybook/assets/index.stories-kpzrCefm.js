import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-BrucEtY1.js";import{c as s}from"./index-DjpIZONJ.js";import{c as a}from"./index-CWyEQe0x.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-DmPTbrnN.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-CkmVH8h4.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-DGZZIKTH.js";import"./index-KviudHZg.js";import"./index-uIzakoab.js";import"./index-Ckeq2DK0.js";import"./floating-ui.react-Dnqmk7Qj.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-dHGaPU72.js";import"./index-DkOkptKI.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-DSSvUeEN.js";import"./index-Dul5t1_L.js";import"./index-ThrsfEIw.js";import"./FormContext-BvePLfBF.js";import"./index-BAs1Uaq-.js";import"./index-Drqau_A0.js";import"./index-DO6smgbx.js";import"./index-BLcIA5e6.js";import"./index-DaB1NRcB.js";import"./index-D6TAio_k.js";import"./index-D-iMkCee.js";import"./index-BLrJbezy.js";import"./index-CdEmoYaS.js";import"./index-CsZy_wK1.js";import"./index-DHxs-5M9.js";import"./SpeechContext-CGWUamV5.js";import"./index-4KqKx7EM.js";import"./index-CdGmMi-p.js";import"./index-AC3OeeP5.js";import"./styled-BAeofX6r.js";import"./index-D22ECEzf.js";import"./index-C-rCtLry.js";import"./index-CXO97U_O.js";import"./index-u0fpT7_V.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const d=e.div`
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
