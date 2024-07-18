import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-CnII0Iod.js";import{c as s}from"./index-9s8nd51S.js";import{c as a}from"./index-DnCO55RQ.js";import{c as d}from"./index-D2v-5CU6.js";import{d as e}from"./styled-components.browser.esm-CgTwxB-0.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-D8UHRkLO.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-CewD7fmW.js";import"./index-BLrka4M9.js";import"./bgfg-BUc8g66r.js";import"./index-D915y0Gl.js";import"./index-DTXrJjgA.js";import"./index-CgtIIt52.js";import"./index-DCGSrkkW.js";import"./index-BxibOwXx.js";import"./styles-YBY9AB4R.js";import"./ConfigsContext-Cp8R_4Vo.js";import"./index-t4-8mmn7.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-CihILjeG.js";import"./index-C6ZSdaCS.js";import"./index-CdaHVHIZ.js";import"./index-Brh1w6mr.js";import"./index-CvPtae5g.js";import"./FormContext-BvePLfBF.js";import"./index-DO6smgbx.js";import"./index-XLX0GRY_.js";import"./index-Cf-aGV8o.js";import"./index-MgEtv_w0.js";import"./index-BxctT8MS.js";import"./index-CD0QQmLf.js";import"./index-RsVZnubi.js";import"./index-Yc6nE65Y.js";import"./index-CNSr6nBS.js";import"./SpeechContext-CGWUamV5.js";import"./index-BHOm2Ygl.js";import"./index-D59UKBIg.js";import"./index-BDA2N_AS.js";import"./styles-DJZsKyOI.js";import"./index-a9gWSA-u.js";import"./index-Vdc-7Nx1.js";import"./index-Di71VppT.js";import"./index-D5Qx4AZB.js";import"./index-DpJLpaFK.js";import"./index-CwXlTWFf.js";import"./index-BO5SNw3U.js";import"./index-DPG5UaBk.js";import"./index-BAMY2Nnw.js";const h=e.div`
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
