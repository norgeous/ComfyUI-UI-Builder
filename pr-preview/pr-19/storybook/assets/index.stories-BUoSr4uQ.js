import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as e}from"./index-DuKL42MG.js";import{c as n}from"./index-CSB7QHMB.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./WsContext-9iT9ZgtG.js";import"./styled-C5WjnewW.js";import"./index-AVQuQ6uG.js";import"./index-D3ylJrlI.js";import"./index-BXSJwxcF.js";import"./FormContext-7paO4gYw.js";import"./ConfigsContext-JqLhkqbA.js";import"./ObjectInfoContext-CYsF4dpo.js";import"./AppContext-DX1Wlwzv.js";import"./index-XfmXgXxw.js";import"./index-DheTTISF.js";import"./index-BOkhicXD.js";import"./index-DizZy_GM.js";import"./index-WIqSUmum.js";import"./index-Dqddl5iM.js";import"./index-Di2YnjY3.js";import"./InputRefContext-CmPhBSwH.js";import"./deepEqual-_sTZaZ0q.js";import"./index-DCccdXUQ.js";import"./index-x7YGS4Zy.js";import"./index-CaMEndn5.js";import"./index-BLeBzpdT.js";import"./index-CHdWR4mw.js";import"./index-B0h-5jsM.js";import"./index-K3mJEBu3.js";import"./index-PH288ROH.js";import"./index-CN7TU30O.js";import"./index-Dot6eoa7.js";import"./index-DbKKfPKb.js";import"./index-BEmfCZ8p.js";import"./index-PV18ugWw.js";import"./index-B3dkWJkr.js";import"./index-5LVo37mO.js";import"./index-DWpgm1JM.js";import"./index-DhL75Owb.js";import"./SpeechContext-cKuR6Onv.js";import"./index-B8ix7A7-.js";import"./index-CON4ZzaT.js";import"./index-C0bW9qgl.js";import"./index-uGRSV6Yv.js";import"./index-ChFIRkSq.js";import"./index-Ci9qEG5Q.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
