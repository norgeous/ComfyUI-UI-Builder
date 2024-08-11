import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-BqMOJDfc.js";import{c as s}from"./index-5odAx3h5.js";import{c as a}from"./index-DMmXo8SC.js";import{c as d}from"./index-BtWr_zbf.js";import{d as e}from"./styled-components.browser.esm-CgTwxB-0.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-D8UHRkLO.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-CnCiNoQs.js";import"./index-BLrka4M9.js";import"./bgfg-BUc8g66r.js";import"./index-DKsFyd7f.js";import"./index-DTXrJjgA.js";import"./index-CjMGYxTR.js";import"./index-BfpgPM-d.js";import"./index-DxjWwZXO.js";import"./styles-YBY9AB4R.js";import"./ConfigsContext-Cp8R_4Vo.js";import"./index-BQvUQ413.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-t7wRVlRJ.js";import"./index-BA0FdTzk.js";import"./index-79BaiYNo.js";import"./index-_a3JP2zR.js";import"./index-CXTvAVDq.js";import"./FormContext-BvePLfBF.js";import"./index-DO6smgbx.js";import"./index-DPjZG4HV.js";import"./index-DIQLdyYk.js";import"./index-ButkP6eG.js";import"./index-C--OF_WR.js";import"./SpeechContext-CGWUamV5.js";import"./index-D1HvzO9f.js";import"./index-CfUGCC_c.js";import"./index-DCti1NPa.js";import"./index-yHnN2X2S.js";import"./styles-DJZsKyOI.js";import"./index-CVrxB1Z5.js";import"./index-COq2LqQp.js";import"./index-WpBOhxnB.js";import"./index-DHZnpJmh.js";import"./index-KmWHYi6a.js";import"./index-_8i4GodW.js";import"./index-DP-0-d8X.js";import"./index-DPG5UaBk.js";import"./index-BAMY2Nnw.js";const h=e.div`
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
`,m=()=>t.jsxs(h,{children:[t.jsx(s,{}),t.jsxs(c,{children:[t.jsx(n,{}),t.jsx(a,{})]}),t.jsx(d,{})]}),l=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const ht={title:"App",component:l},o={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var r,i,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const ct=["App"];export{o as App,ct as __namedExportsOrder,ht as default};
