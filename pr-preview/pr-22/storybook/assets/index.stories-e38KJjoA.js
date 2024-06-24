import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-DhdK8iIw.js";import{c as n}from"./index-CqXU22N6.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-ZaKAIv11.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-Ba_bgtU3.js";import"./ComfyBridgeContext-Dy9XN-KW.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./index-BiKVFdKX.js";import"./index-DoSRvTdm.js";import"./index-CZeGbJ5T.js";import"./floating-ui.react-CDqbCaSC.js";import"./index-BOkhicXD.js";import"./index-Bs-Be9SB.js";import"./index-BhlI5ESh.js";import"./index-BjKMtti2.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-qDzr2xAS.js";import"./index-BZF6B-3v.js";import"./index-DaNusNhd.js";import"./index-8yc3hoqd.js";import"./index-CsfMv-i3.js";import"./index-gNuICqym.js";import"./index-D_SX36Yj.js";import"./index-PH288ROH.js";import"./index-BVgt5QZm.js";import"./index-3tkqoabQ.js";import"./index-JzUIFCbj.js";import"./index-CBzvASds.js";import"./index-BUg0OLFU.js";import"./index-DtowiI1c.js";import"./index-BZDIBKFQ.js";import"./index-DWpgm1JM.js";import"./index-SrKTpDCs.js";import"./SpeechContext-cKuR6Onv.js";import"./index-DQTDoKyj.js";import"./index-BIxumPF1.js";import"./index-DKIrFzNR.js";import"./index-Cs7zreYD.js";import"./index-CD5ME80i.js";import"./index-BVWtDH-0.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
