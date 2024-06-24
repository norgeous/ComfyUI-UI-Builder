import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-DPRqMcGC.js";import{c as n}from"./index-Cib7P1XZ.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-ZaKAIv11.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-Ba64qWco.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./index-BiKVFdKX.js";import"./index-BoFI5do5.js";import"./index-DtWe4Bef.js";import"./floating-ui.react-J0QxEdvZ.js";import"./index-BOkhicXD.js";import"./index-DBnD2Hxc.js";import"./index-Bs-Be9SB.js";import"./index-CBnO8SDE.js";import"./index-DpUyn_T5.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-qDzr2xAS.js";import"./index-DASKFeJk.js";import"./index-8ID9tISY.js";import"./index-DV-QRyf6.js";import"./index-CLhq28W3.js";import"./index-D-wTJ6ct.js";import"./index-PH288ROH.js";import"./index-DkeS5e2F.js";import"./index-DRIOvqJr.js";import"./index-DFPpvCQB.js";import"./index-C0MK4SkH.js";import"./index-B-tZPjKB.js";import"./index-FiQjk2Hs.js";import"./index-BZDIBKFQ.js";import"./index-DWpgm1JM.js";import"./index-CUNVRVmA.js";import"./SpeechContext-cKuR6Onv.js";import"./index-BUHoJKEC.js";import"./index-BSVObX9u.js";import"./index-DW99FAd3.js";import"./index-Cs7zreYD.js";import"./index-CpyDj0Wo.js";import"./index-Cx-SnV1k.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
  display: grid;
  height: 100svh;

  // portrait first
  grid-template-rows: minmax(50%, auto) minmax(auto, 400px);

  // landscape overrides
  @media (min-aspect-ratio: 1/1) {
    grid-template-rows: none;
    grid-template-columns: minmax(auto, 460px) minmax(50%, auto);
    & > :first-child {
      order: 2; // change the order on landscape, so that sidebar is first
    }
  }
`,m=()=>r.jsxs(a,{children:[r.jsx(e,{}),r.jsx(n,{})]}),d=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const et={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const nt=["App"];export{t as App,nt as __namedExportsOrder,et as default};
