import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-Dea8f2_C.js";import{c as s}from"./index-BCJ9lopF.js";import{c as a}from"./index-BUVJltX1.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-imQg_qY8.js";import"./index-D3ylJrlI.js";import"./index-DH7zSrPd.js";import"./index-CnLKI5Hl.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-7j8O27ls.js";import"./index-KviudHZg.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-DXjwdIzd.js";import"./index-rtR8KM4z.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-Ba-sy9wI.js";import"./index-CfVssc71.js";import"./index-WxMAhpJo.js";import"./FormContext-BvePLfBF.js";import"./index-Cpls2rmI.js";import"./index-BwJUGV3a.js";import"./index-DO6smgbx.js";import"./index-B8wGTDPh.js";import"./index-BhGq_fbp.js";import"./index-OBqta-BM.js";import"./index-C0X7m4Lz.js";import"./index-BMotI4A8.js";import"./index-7ANafKMD.js";import"./index-Z3lYvE6G.js";import"./index-Beag0fq2.js";import"./SpeechContext-CGWUamV5.js";import"./index-D916X3gL.js";import"./index-Cx9io6iu.js";import"./index-CiZV8oHK.js";import"./index-BoSPxbxV.js";import"./index-BiBEjk98.js";import"./index-DCdg15hX.js";import"./index-DOxmqhEU.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const d=e.div`
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
