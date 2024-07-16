import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-BidPyQed.js";import{c as s}from"./index-dceEWJbq.js";import{c as a}from"./index-BOIq0z8A.js";import{c as d}from"./index-B6pVszsW.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-By7clcRM.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-C340DZun.js";import"./index-DhfeuN3W.js";import"./bgfg-iYkfKEl_.js";import"./index-DjUCVaVK.js";import"./index-C0o4J-yX.js";import"./index-C09525oq.js";import"./index-Dq9VOxrg.js";import"./index-BxibOwXx.js";import"./styles-BVZT0ieL.js";import"./ConfigsContext-Cp8R_4Vo.js";import"./index-CdTRSUvc.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-RUgb44jm.js";import"./index-BuOzmVPB.js";import"./index-Dyhh7U8x.js";import"./index-Besx1a6C.js";import"./index-BXg6qINR.js";import"./FormContext-BvePLfBF.js";import"./index-DO6smgbx.js";import"./index-CnDZ2ynX.js";import"./index-Dpu8oo1x.js";import"./index-CgbIzAGR.js";import"./index-IjPHOdTd.js";import"./index-BXmMdGOS.js";import"./index-DtT0JmOt.js";import"./index-DOuuySF_.js";import"./index-Dd0IcG1q.js";import"./SpeechContext-CGWUamV5.js";import"./index-FeKCi83X.js";import"./index-C62FBs2F.js";import"./index-D7UM76lU.js";import"./styles-QFJ-LRfT.js";import"./index-DGz8569P.js";import"./index-CMyMaSVD.js";import"./index-DWW9CiAL.js";import"./index-TdiOhlNq.js";import"./index-CxrxHe9R.js";import"./index-DKH5pcKf.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const h=e.div`
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
`,m=()=>t.jsxs(h,{children:[t.jsx(s,{}),t.jsxs(c,{children:[t.jsx(n,{}),t.jsx(a,{})]}),t.jsx(d,{})]}),l=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const lt={title:"App",component:l},o={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var r,i,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
