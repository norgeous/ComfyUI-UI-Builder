import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-JnBPsVzU.js";import{c as n}from"./index-dPW-zGOP.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./WsContext-9iT9ZgtG.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-C4SMMB8v.js";import"./ComfyBridgeContext-Dy9XN-KW.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./AppContext-DX1Wlwzv.js";import"./index-BiKVFdKX.js";import"./index-BBRnhhpC.js";import"./index-CZeGbJ5T.js";import"./floating-ui.react-CDqbCaSC.js";import"./index-BOkhicXD.js";import"./index-Bs-Be9SB.js";import"./index-arn3qWY0.js";import"./index-CPXDHPf0.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-BZF6B-3v.js";import"./index-DaNusNhd.js";import"./index-8yc3hoqd.js";import"./index-CaMEndn5.js";import"./index-DjeD-lj-.js";import"./index-CHdWR4mw.js";import"./index-gNuICqym.js";import"./index-D_SX36Yj.js";import"./index-PH288ROH.js";import"./index-CySY1AEZ.js";import"./index-B8h7WkE-.js";import"./index-CXNmq0S4.js";import"./index-Dc_vx2fQ.js";import"./index-B5sH5m6f.js";import"./index-DYn1Ipwu.js";import"./index-Ci1KXc8B.js";import"./index-DWpgm1JM.js";import"./index-BaABmpAL.js";import"./SpeechContext-cKuR6Onv.js";import"./index-Dn_ulK6H.js";import"./index-BIxumPF1.js";import"./index-C5j8Lf-n.js";import"./index-Cs7zreYD.js";import"./index-DZH_fJPg.js";import"./index-C0VZPtYh.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
`,m=()=>r.jsxs(a,{children:[r.jsx(e,{}),r.jsx(n,{})]}),d=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const at={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const dt=["App"];export{t as App,dt as __namedExportsOrder,at as default};
