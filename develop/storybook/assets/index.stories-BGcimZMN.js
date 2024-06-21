import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-D590eUAy.js";import{c as n}from"./index-BtbUOjBG.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./WsContext-9iT9ZgtG.js";import"./styled-714Mym1w.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-B00iz4t1.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./AppContext-DX1Wlwzv.js";import"./index-DOdUZUoh.js";import"./index-DheTTISF.js";import"./index-BOkhicXD.js";import"./index-DizZy_GM.js";import"./index-WIqSUmum.js";import"./index-B7DSsggh.js";import"./index-B2zqxvoZ.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-DCccdXUQ.js";import"./index-x7YGS4Zy.js";import"./index-CaMEndn5.js";import"./index-csaep1uB.js";import"./index-CHdWR4mw.js";import"./index-Csld0TKj.js";import"./index-CCoYZxa1.js";import"./index-PH288ROH.js";import"./index-DR00lrko.js";import"./index-DF7geQCv.js";import"./index-DgClLmqX.js";import"./index-BAMqcfxR.js";import"./index-C-iZoxKA.js";import"./index-yrdX_u0w.js";import"./index-5LVo37mO.js";import"./index-Bs5HTjuc.js";import"./index-DEPHc0er.js";import"./SpeechContext-cKuR6Onv.js";import"./index-Dd8G7tN4.js";import"./index-DjgDbn_u.js";import"./index-C0bW9qgl.js";import"./index-Baz8LbRz.js";import"./index-BKalGa3g.js";import"./index-RdiNVDrv.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
