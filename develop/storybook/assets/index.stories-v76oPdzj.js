import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-Bm4jphE_.js";import{c as n}from"./index-DATsfe-I.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./WsContext-9iT9ZgtG.js";import"./styled-C5WjnewW.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-CNWWaiYE.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./AppContext-DX1Wlwzv.js";import"./index-DNTcdhIx.js";import"./index-D4wTrxMT.js";import"./floating-ui.react-DhE8Y95z.js";import"./index-BOkhicXD.js";import"./index-DizZy_GM.js";import"./index-BBRnhhpC.js";import"./index-BG17GzDr.js";import"./index-NOP0whko.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-CY--N6Bo.js";import"./index-9P4Z6GUd.js";import"./index-CaMEndn5.js";import"./index-NwZq_OtZ.js";import"./index-CHdWR4mw.js";import"./index-DDF0VzXh.js";import"./index-1IBWcPny.js";import"./index-PH288ROH.js";import"./index-5bQyduzE.js";import"./index-YHsSnWUy.js";import"./index-3LwI2Y5M.js";import"./index-CkV4kRj7.js";import"./index-EtY6Lc0l.js";import"./index-CmRES6Uv.js";import"./index-5LVo37mO.js";import"./index-DWpgm1JM.js";import"./index-5nfIP-XZ.js";import"./SpeechContext-cKuR6Onv.js";import"./index-COpFr_pq.js";import"./index-KrnbeIR2.js";import"./index-D5T16dLn.js";import"./index-uGRSV6Yv.js";import"./index-HDmmjt13.js";import"./index-CMeo2pQ1.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
