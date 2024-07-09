import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-f4RXgNtb.js";import{c as s}from"./index-DZIFDecW.js";import{c as a}from"./index-IeyiwtXE.js";import{c as d}from"./index-C13VOg-9.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-DmPTbrnN.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-ChXJG7Cm.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-zzQUIEXj.js";import"./index-KviudHZg.js";import"./index-CRfdTz-P.js";import"./index-Dl0_K7pp.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-BhwOTz_n.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-BFerVN_g.js";import"./index-CkswU5Ul.js";import"./index-CL5Dv16E.js";import"./FormContext-BvePLfBF.js";import"./index-Dos3aAyI.js";import"./index-C637IMWY.js";import"./index-DO6smgbx.js";import"./index-UrAK1HzA.js";import"./index-DgGPZNTA.js";import"./index-BQNdsDD2.js";import"./index-Db58WbjX.js";import"./index-qux66GDI.js";import"./index-GmeV3-Qh.js";import"./index-BFYRQwOv.js";import"./index-BfrOzfUD.js";import"./SpeechContext-CGWUamV5.js";import"./index-DEzUWtOf.js";import"./index-Boe3HaRC.js";import"./index-BdAehnGy.js";import"./styled-QFJ-LRfT.js";import"./index-g7eq_-Rx.js";import"./index-PHlfO5aG.js";import"./index-C1aNK1Ai.js";import"./index-DaZsJ8UU.js";import"./index-CMFt0LyQ.js";import"./index-BAt2REtl.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const h=e.div`
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
