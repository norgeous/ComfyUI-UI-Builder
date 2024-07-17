import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-DCENyJit.js";import{c as s}from"./index-D8dovq6-.js";import{c as a}from"./index-DjcbKN4D.js";import{c as d}from"./index-K7dQumAb.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-By7clcRM.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-Cf8jyaUb.js";import"./index-DhfeuN3W.js";import"./bgfg-iYkfKEl_.js";import"./index-CeESh0zi.js";import"./index-C0o4J-yX.js";import"./index-gCaVy8do.js";import"./index-Dq9VOxrg.js";import"./index-BxibOwXx.js";import"./styles-BVZT0ieL.js";import"./ConfigsContext-Cp8R_4Vo.js";import"./index-DO6_Ugb9.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-D_rXWjlG.js";import"./index-CVhaxQEE.js";import"./index-DzjzJpX2.js";import"./index-Besx1a6C.js";import"./index-Dqtyu3Q8.js";import"./FormContext-BvePLfBF.js";import"./index-DO6smgbx.js";import"./index-DM6iIjfn.js";import"./index-Bru0-YX8.js";import"./index-DW2VUrl8.js";import"./index-DudLxAbW.js";import"./index-9_x8URWB.js";import"./index-DHaRVikO.js";import"./index-Bt8ti1aa.js";import"./index-RXi9LPlF.js";import"./SpeechContext-CGWUamV5.js";import"./index-Cx8Yl4qX.js";import"./index-C62FBs2F.js";import"./index-Dj_UfeOI.js";import"./styles-QFJ-LRfT.js";import"./index-DxZbpanS.js";import"./index-BtLFctOC.js";import"./index-BOOR5bT7.js";import"./index-DWW9CiAL.js";import"./index-BRmA0OOH.js";import"./index-CxrxHe9R.js";import"./index-CaiDbwqV.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const h=e.div`
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
`,m=()=>t.jsxs(h,{children:[t.jsx(s,{}),t.jsxs(c,{children:[t.jsx(n,{}),t.jsx(a,{})]}),t.jsx(d,{})]}),l=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const ft={title:"App",component:l},o={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var r,i,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const gt=["App"];export{o as App,gt as __namedExportsOrder,ft as default};
