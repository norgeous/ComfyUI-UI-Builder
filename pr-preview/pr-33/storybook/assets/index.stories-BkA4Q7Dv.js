import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as n}from"./index-B3O9qb1V.js";import{c as s}from"./index-BZ4Ik8s3.js";import{c as a}from"./index-DZPieOvD.js";import{c as d}from"./index-Dfw3-Lmp.js";import{d as e}from"./styled-components.browser.esm-CgTwxB-0.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-D8UHRkLO.js";import"./index-D3ylJrlI.js";import"./SettingsContext-CrmNDnzl.js";import"./index-DgDe_2fu.js";import"./index-BLrka4M9.js";import"./bgfg-BUc8g66r.js";import"./index-CAVxvsDx.js";import"./index-DTXrJjgA.js";import"./index-BxQgkj0Z.js";import"./index-DCGSrkkW.js";import"./index-BxibOwXx.js";import"./styles-YBY9AB4R.js";import"./ConfigsContext-Cp8R_4Vo.js";import"./index-DGkZC6gN.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-cTOITcm4.js";import"./index-CHRJdthn.js";import"./index-C7q81hY3.js";import"./index-Brh1w6mr.js";import"./index-C8eNJNed.js";import"./FormContext-BvePLfBF.js";import"./index-DO6smgbx.js";import"./index-Q5GhfczV.js";import"./index-DeFG3xxF.js";import"./index-WXGcCyLQ.js";import"./index-CKSDzP-v.js";import"./index-BIsR30yS.js";import"./index-BuzhZTzd.js";import"./index-Ci9WLNgJ.js";import"./index-BDgWYSJD.js";import"./SpeechContext-CGWUamV5.js";import"./index-MN1ah8Nd.js";import"./index-D59UKBIg.js";import"./index-B8tr_V8c.js";import"./styles-DJZsKyOI.js";import"./index-P65S6r50.js";import"./index-D_V4dT1G.js";import"./index-DLA2Jwkt.js";import"./index-D5Qx4AZB.js";import"./index-DJKJlMvz.js";import"./index-CwXlTWFf.js";import"./index-BavMAv7k.js";import"./index-DPG5UaBk.js";import"./index-BAMY2Nnw.js";const h=e.div`
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
