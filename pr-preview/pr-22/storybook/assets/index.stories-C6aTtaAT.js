import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-DP5dxdl-.js";import{c as s}from"./index-Bx23p0Io.js";import{c as a}from"./index-B1tkWp6P.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-C1cv18gP.js";import"./index-D3ylJrlI.js";import"./index-D91RuvaC.js";import"./index-C9ruudFA.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-DH3We1Tn.js";import"./index-KviudHZg.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-D44TCmpd.js";import"./index-CQptWrfr.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-DImVuIXt.js";import"./index-DsbT827r.js";import"./index-BCSe58gi.js";import"./FormContext-BvePLfBF.js";import"./index-BKwH_xR2.js";import"./index-BwJUGV3a.js";import"./index-DO6smgbx.js";import"./index-DNspH1K_.js";import"./index-DLVc9Q_U.js";import"./index-BCAMp6EU.js";import"./index-CJOrgpvm.js";import"./index-CX280XV8.js";import"./index-CDaa0FS4.js";import"./index-CHtukh7F.js";import"./index-GCO7xmMO.js";import"./SpeechContext-CGWUamV5.js";import"./index-3rL15Oci.js";import"./index-Cx9io6iu.js";import"./index-DfPj8l4S.js";import"./index-yWnaZOWj.js";import"./index-C-hOpGLc.js";import"./index-DCdg15hX.js";import"./index-DOxmqhEU.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const d=e.div`
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
`,m=()=>t.jsxs(d,{children:[t.jsxs(h,{children:[t.jsx(n,{}),t.jsx(s,{})]}),t.jsx(a,{})]}),c=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const st={title:"App",component:c},o={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var r,i,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const at=["App"];export{o as App,at as __namedExportsOrder,st as default};
