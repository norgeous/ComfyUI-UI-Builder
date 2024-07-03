import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-CPuCwCv5.js";import{c as n}from"./index-CEvTgKHx.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ComfyBridgeContext-CTMRF_Mz.js";import"./index-_yNpx1b8.js";import"./index-D3ylJrlI.js";import"./index-n3Wug2HJ.js";import"./index-Cp_FmV3O.js";import"./FormContext-BvePLfBF.js";import"./index-wo4bmeOh.js";import"./index-ecRm7xt-.js";import"./index-CHiMFBbc.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./index-DOxmqhEU.js";import"./index-BK5_XIt8.js";import"./index-D0Aq9VeK.js";import"./index-CANsewyu.js";import"./index-Dx3lFgnb.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-DYpCCn-Y.js";import"./index-CWuWN1S5.js";import"./index-DgWk1GLm.js";import"./index-BiFCI9CN.js";import"./index-BwJUGV3a.js";import"./index-DO6smgbx.js";import"./index-Df3xmBOb.js";import"./index-D5PyAGW5.js";import"./index-DeQ7Pnc0.js";import"./index-BsbPnwv5.js";import"./index-DkHY3O1h.js";import"./index-DUdeT2Xp.js";import"./index-BOxNEIrd.js";import"./index-Dmvdrk1-.js";import"./index-DFuST6zh.js";import"./SpeechContext-CGWUamV5.js";import"./index-CH330vm-.js";import"./index-Cx9io6iu.js";import"./index-CbLndHzF.js";import"./index-Di5kzmQl.js";import"./index-CpxLLnF3.js";import"./index-BeMCnEj-.js";import"./styled-U__tprb7.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
`,m=()=>r.jsxs(a,{children:[r.jsx(e,{}),r.jsx(n,{})]}),d=m;m.__docgenInfo={description:"",methods:[],displayName:"App"};const mt={title:"App",component:d},t={parameters:{layout:"fullscreen",screenshot:{viewport:{width:830,height:600},variants:{small:{viewport:{width:412,height:700}},small_dark:{viewport:{width:412,height:700},forceDark:!0}}}},args:{}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const et=["App"];export{t as App,et as __namedExportsOrder,mt as default};
