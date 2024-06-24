import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-Ca4pH1-7.js";import{c as n}from"./index-0N9r4Ggm.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-ZaKAIv11.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-Bz8CKbFp.js";import"./ComfyBridgeContext-Dy9XN-KW.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./index-BiKVFdKX.js";import"./index-DdK_udeX.js";import"./index-Coctz2Fv.js";import"./floating-ui.react-J0QxEdvZ.js";import"./index-BOkhicXD.js";import"./index-DBnD2Hxc.js";import"./index-Bs-Be9SB.js";import"./index-BJIBxqCT.js";import"./index-D8p00pM4.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-qDzr2xAS.js";import"./index-B-jMyJAp.js";import"./index-Dk6XdMKP.js";import"./index-BUV13mBS.js";import"./index-DoI6-4dv.js";import"./index-BwXAjfjY.js";import"./index-PH288ROH.js";import"./index-CeTX0z_3.js";import"./index-Cs127XaY.js";import"./index-DNSf6TFm.js";import"./index-BnJYCcsi.js";import"./index-CjZ5BubB.js";import"./index-p9neT-_x.js";import"./index-BZDIBKFQ.js";import"./index-DWpgm1JM.js";import"./index-HcamxbAU.js";import"./SpeechContext-cKuR6Onv.js";import"./index-DPu-jeOH.js";import"./index-BXz8muHB.js";import"./index-BoOoprWL.js";import"./index-Cs7zreYD.js";import"./index-CL30iTeS.js";import"./index-Cd27fYzQ.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
`,m=()=>r.jsxs(a,{children:[r.jsx(e,{}),r.jsx(n,{})]}),d=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const nt={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const st=["App"];export{t as App,st as __namedExportsOrder,nt as default};
