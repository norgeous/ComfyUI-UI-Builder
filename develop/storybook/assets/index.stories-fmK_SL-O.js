import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-Dc3Y0EXy.js";import{c as n}from"./index-BlOb1eXX.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-S2bZAPPB.js";import"./index-Bm7KGtcn.js";import"./index-D3ylJrlI.js";import"./index-coSyIuUl.js";import"./FormContext-BvePLfBF.js";import"./ConfigsContext-Cp8R_4Vo.js";import"./ObjectInfoContext-DqWsA12q.js";import"./index-zXYQOjb1.js";import"./index-CWzuTuIr.js";import"./index-2ZZ_S3jo.js";import"./floating-ui.react-CPLfUUbp.js";import"./index-BxibOwXx.js";import"./bgfg-iYkfKEl_.js";import"./index-BL4IGFXY.js";import"./index-BK5_XIt8.js";import"./index-DcO_mBMy.js";import"./index-_u0NAU-c.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-B3-Iaed7.js";import"./index-DV02L8s6.js";import"./index-_BNh20Fg.js";import"./index-DyrKjd_b.js";import"./index-DJTv0orh.js";import"./index-B980p5b5.js";import"./index-DO6smgbx.js";import"./index-4UHBxgcI.js";import"./index-COqoQUSX.js";import"./index-Le7RcZN7.js";import"./index-Byf6luD5.js";import"./index-W_S1LRoL.js";import"./index-D0L_54K4.js";import"./index-TLSSBFeC.js";import"./index-Dmvdrk1-.js";import"./index-DjaUmkhP.js";import"./SpeechContext-CGWUamV5.js";import"./index-FJnqO7TL.js";import"./index-BET2BQZl.js";import"./index-34bnaR97.js";import"./index-DkJofDa_.js";import"./index-C69sY8iI.js";import"./index-C3oGF6Wd.js";import"./styled-BU-Jpcej.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
