import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-BUU4CozB.js";import{c as n}from"./index-DemfsOdI.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-ZaKAIv11.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-cMGkCpO0.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./index-BiKVFdKX.js";import"./index-Cq8fP4UK.js";import"./index-ENyULWse.js";import"./floating-ui.react-CDqbCaSC.js";import"./index-BOkhicXD.js";import"./index-Bv36dAXe.js";import"./index-Bs-Be9SB.js";import"./index-DeRpOU0q.js";import"./index-B8u6EWb0.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-qDzr2xAS.js";import"./index-0_AIZsam.js";import"./index-DRJiN5Gl.js";import"./index-Ct5oQ8Bt.js";import"./index-DSr3VS5a.js";import"./index-An1K6Ni1.js";import"./index-PH288ROH.js";import"./index-u00W_jWV.js";import"./index-DH8FRbb8.js";import"./index-CXtBLWWd.js";import"./index-ZYQTt_2y.js";import"./index-vrh8hTu2.js";import"./index-DU5z6NZs.js";import"./index-BZDIBKFQ.js";import"./index-DWpgm1JM.js";import"./index-B9CCMDeu.js";import"./SpeechContext-cKuR6Onv.js";import"./index-DDWq3Cz8.js";import"./index-CXpK8kqB.js";import"./index-DexFmIST.js";import"./index-Cs7zreYD.js";import"./index-BozuiDBs.js";import"./index-B699-3XA.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
