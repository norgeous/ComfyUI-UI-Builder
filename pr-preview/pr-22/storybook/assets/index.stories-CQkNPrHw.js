import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-D90s1ywL.js";import{c as s}from"./index-CkFgLmui.js";import{c as a}from"./index-BW8sr1eK.js";import{c as d}from"./index-CNlz9ovp.js";import{p as e}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-DmPTbrnN.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-Tb8k_G41.js";import"./index-D0Aq9VeK.js";import"./index-wo4bmeOh.js";import"./index-5geBH4fP.js";import"./index-KviudHZg.js";import"./index-CRfdTz-P.js";import"./index-Dj0aUtmp.js";import"./index-B8XB3FuZ.js";import"./styled-BVZT0ieL.js";import"./index-B_I7lMCg.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-Bw6lEDZS.js";import"./index-C8oX4KcF.js";import"./index-DhthbSCy.js";import"./FormContext-BvePLfBF.js";import"./index-C1cGY_aI.js";import"./index-9H329ELX.js";import"./index-DO6smgbx.js";import"./index-D4z3BVbE.js";import"./index-CkvPh_Fi.js";import"./index-C4F1uidL.js";import"./index-CfAt8ljR.js";import"./index-fblUqJnN.js";import"./index-COyht8J5.js";import"./index-BFYRQwOv.js";import"./index-zfAnWYeJ.js";import"./SpeechContext-CGWUamV5.js";import"./index-D4PcLg3E.js";import"./index-BdVlMtcc.js";import"./index-Crpxof6k.js";import"./styled-BAeofX6r.js";import"./index-g7eq_-Rx.js";import"./index-w2HgIKsd.js";import"./index-DvY2dSHE.js";import"./index-C5OKYzlq.js";import"./index-DL7FrFuT.js";import"./index-xzKNM7iM.js";import"./index-BK5_XIt8.js";import"./index-BAMY2Nnw.js";const h=e.div`
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
