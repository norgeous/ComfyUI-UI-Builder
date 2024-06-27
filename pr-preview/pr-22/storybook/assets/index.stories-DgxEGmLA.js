import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-DMsAkDhA.js";import{c as n}from"./index-iNiw5jo1.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./WsContext-9iT9ZgtG.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-C6VSFEU9.js";import"./ComfyBridgeContext-Dy9XN-KW.js";import"./FormContext-7paO4gYw.js";import"./index-BUFFlF7z.js";import"./AppContext-DX1Wlwzv.js";import"./index-BiKVFdKX.js";import"./index-0KXYed6g.js";import"./index-C_MwD-aL.js";import"./floating-ui.react-ByhEbrkY.js";import"./index-BOkhicXD.js";import"./index-BC5bIBz4.js";import"./index-Bs-Be9SB.js";import"./index-BhEJR1Kq.js";import"./index-DCRq_xwb.js";import"./index-DOho6P4j.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index--vyq1y6r.js";import"./index-BwISzhqP.js";import"./index-kIqjdmhH.js";import"./index-D1ZOvgUU.js";import"./index-BqJ66KCm.js";import"./index-PH288ROH.js";import"./index-C2-napFU.js";import"./index-b8nlcaK-.js";import"./index-D775n7gp.js";import"./index-yQY7nYF2.js";import"./index-B1m8FqQT.js";import"./index-B_rarfpD.js";import"./index-BZDIBKFQ.js";import"./index-BESrCSE-.js";import"./index-CHY2Oex0.js";import"./SpeechContext-cKuR6Onv.js";import"./index-B6Y9RsXF.js";import"./index-VKE47QHs.js";import"./index-BaIE5ydw.js";import"./index-B4cvI_Q2.js";import"./index-D57vJsCU.js";import"./index-CMRktTDF.js";import"./styled-x9pxi_1C.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
