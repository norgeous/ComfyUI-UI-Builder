import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-B3BLLKSq.js";import{c as n}from"./index-BUuqRUkw.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./WsContext-9iT9ZgtG.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-CK9IB4gH.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./AppContext-DX1Wlwzv.js";import"./index-DizZy_GM.js";import"./index-BBRnhhpC.js";import"./index-CZeGbJ5T.js";import"./floating-ui.react-CDqbCaSC.js";import"./index-BOkhicXD.js";import"./index-Bs-Be9SB.js";import"./index-CENOErUM.js";import"./index-OajLkLB1.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-BXXglQ6L.js";import"./index-DAZpHX12.js";import"./index-8yc3hoqd.js";import"./index-CaMEndn5.js";import"./index-CjEf00yb.js";import"./index-CHdWR4mw.js";import"./index-BMNAc7p0.js";import"./index-D_SX36Yj.js";import"./index-PH288ROH.js";import"./index-BO8KUR_h.js";import"./index-uDi_ZsTL.js";import"./index-p7gvV1Lk.js";import"./index-uaNDrpYd.js";import"./index-sm6MTlYm.js";import"./index-nl7g6Bxx.js";import"./index-5LVo37mO.js";import"./index-DWpgm1JM.js";import"./index-zuSBQWVm.js";import"./SpeechContext-cKuR6Onv.js";import"./index-2DocnCbI.js";import"./index-BIxumPF1.js";import"./index-uIdbrzKl.js";import"./index-uGRSV6Yv.js";import"./index-2bcFRwjC.js";import"./index-DHZWb8VS.js";import"./styled-pLz9Mkps.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
`,m=()=>r.jsxs(a,{children:[r.jsx(e,{}),r.jsx(n,{})]}),d=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const st={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const at=["App"];export{t as App,at as __namedExportsOrder,st as default};
