import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-CBiAzcNP.js";import{c as n}from"./index-Cir7NFMS.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-ZaKAIv11.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-rLLxyrRA.js";import"./FormContext-7paO4gYw.js";import"./index-BUFFlF7z.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./index-BiKVFdKX.js";import"./index-CSDDMi2P.js";import"./index-B4PluBfx.js";import"./floating-ui.react-J0QxEdvZ.js";import"./index-BOkhicXD.js";import"./index-DJHgwbdJ.js";import"./index-Bs-Be9SB.js";import"./index-D-Aee3AS.js";import"./index-QlWr60ko.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-qDzr2xAS.js";import"./index-CgIEztBN.js";import"./index-Dtmh_IdO.js";import"./index-Btef1ZP6.js";import"./index-oO8kVDhq.js";import"./index-BHyZ0you.js";import"./index-PH288ROH.js";import"./index-5mj3-A1A.js";import"./index-uZOKm1Ar.js";import"./index-9x29HHZb.js";import"./index-B6RQqVHW.js";import"./index-CB49B2Sb.js";import"./index-GBudZwZU.js";import"./index-BZDIBKFQ.js";import"./index-CkX8a1XV.js";import"./index-BsQZHCXH.js";import"./SpeechContext-cKuR6Onv.js";import"./index-DDUVpOF_.js";import"./index-CwZ8Kwc4.js";import"./index-EaxeQ_gb.js";import"./index-DHOpqfxG.js";import"./index-BNk7b99W.js";import"./index-BypKrYtX.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
