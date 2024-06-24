import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-VfcEf3eZ.js";import{c as n}from"./index-C6wvEvZr.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-ZaKAIv11.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-BGLWyQn3.js";import"./FormContext-7paO4gYw.js";import"./index-CZ727q7L.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./index-BiKVFdKX.js";import"./index-Cj2vOVEw.js";import"./index-DzcYuhaG.js";import"./floating-ui.react-J0QxEdvZ.js";import"./index-BOkhicXD.js";import"./index-VNLvSd_8.js";import"./index-Bs-Be9SB.js";import"./index-geOztjWz.js";import"./index-OYDBwBh9.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-qDzr2xAS.js";import"./index-PlMGIOlZ.js";import"./index-OhTq4FGT.js";import"./index-Bb8jVZib.js";import"./index-CSoN9Ezd.js";import"./index-DnpxmPVc.js";import"./index-PH288ROH.js";import"./index-DfiB5e41.js";import"./index-B7Vsl6lu.js";import"./index-DsDA8KmB.js";import"./index-C4Mw2SUm.js";import"./index-BaxK46iy.js";import"./index-qJy2fFOj.js";import"./index-BZDIBKFQ.js";import"./index-CkX8a1XV.js";import"./index-hON1T20K.js";import"./SpeechContext-cKuR6Onv.js";import"./index-B-O6cxS9.js";import"./index-D95QeJMM.js";import"./index-CToxiZrG.js";import"./index-CC0fT5e7.js";import"./index-BP5Q_qd-.js";import"./index-DPtK5U9M.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
