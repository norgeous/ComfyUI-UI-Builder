import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-Bpbxp6jJ.js";import{c as n}from"./index-BWyqoibW.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-ZaKAIv11.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-BIN74fjC.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./index-BiKVFdKX.js";import"./index-DdK_udeX.js";import"./index-Coctz2Fv.js";import"./floating-ui.react-J0QxEdvZ.js";import"./index-BOkhicXD.js";import"./index-DBnD2Hxc.js";import"./index-Bs-Be9SB.js";import"./index-Q8m4o0Di.js";import"./index-BtlY4wsd.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-qDzr2xAS.js";import"./index-B-jMyJAp.js";import"./index-Dk6XdMKP.js";import"./index-BXd8L118.js";import"./index-CrDOJlpU.js";import"./index-DoI6-4dv.js";import"./index-BwXAjfjY.js";import"./index-PH288ROH.js";import"./index-CeTX0z_3.js";import"./index-D9ccz6_9.js";import"./index-DNSf6TFm.js";import"./index-BHW-L5GT.js";import"./index-CjZ5BubB.js";import"./index-C1o3XLf5.js";import"./index-BZDIBKFQ.js";import"./index-DWpgm1JM.js";import"./index-DIy-GNtL.js";import"./SpeechContext-cKuR6Onv.js";import"./index-Cox5P551.js";import"./index-BXz8muHB.js";import"./index-BoOoprWL.js";import"./index-CZuBdk55.js";import"./index-DguYmSp_.js";import"./index-Cd27fYzQ.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
