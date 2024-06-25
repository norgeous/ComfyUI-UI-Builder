import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-Boe4amDt.js";import{c as n}from"./index-CZtiWykt.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-ZaKAIv11.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-DviwCEkE.js";import"./ComfyBridgeContext-Dy9XN-KW.js";import"./FormContext-7paO4gYw.js";import"./index-BUFFlF7z.js";import"./index-BiKVFdKX.js";import"./index-0KXYed6g.js";import"./index-C_MwD-aL.js";import"./floating-ui.react-ByhEbrkY.js";import"./index-BOkhicXD.js";import"./index-BC5bIBz4.js";import"./index-Bs-Be9SB.js";import"./index-4Yl9QJ30.js";import"./index-f39hfBdS.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-BbXZFMxk.js";import"./index--vyq1y6r.js";import"./index-BwISzhqP.js";import"./index-GE4Qa-ta.js";import"./index-D1ZOvgUU.js";import"./index-BqJ66KCm.js";import"./index-PH288ROH.js";import"./index-DdU9SJA8.js";import"./index-5vYgx5gL.js";import"./index-CyiYuzJp.js";import"./index-BpB0dyP-.js";import"./index-B8bivTJN.js";import"./index-Co5XyXRM.js";import"./index-BZDIBKFQ.js";import"./index-BESrCSE-.js";import"./index-ComhRRS7.js";import"./SpeechContext-cKuR6Onv.js";import"./index-B2VxR5HA.js";import"./index-VKE47QHs.js";import"./index-CK1RCoPf.js";import"./index-DHOpqfxG.js";import"./index-z18cK919.js";import"./index-Dn-ifV6V.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
