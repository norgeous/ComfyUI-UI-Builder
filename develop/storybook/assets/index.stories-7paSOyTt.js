import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as e}from"./index-B6rg_Y8z.js";import{c as n}from"./index-HI52Cy3X.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AppContext-S2bZAPPB.js";import"./index-Bm7KGtcn.js";import"./index-D3ylJrlI.js";import"./index-pxmqH4Jl.js";import"./FormContext-BvePLfBF.js";import"./index-CXGN0Eu6.js";import"./ObjectInfoContext-DqWsA12q.js";import"./index-BGHfn8iy.js";import"./index-DcJkU15T.js";import"./index-DmipQToa.js";import"./floating-ui.react-BQk9wdfR.js";import"./index-B8XB3FuZ.js";import"./index-puLRY7LT.js";import"./index-BK5_XIt8.js";import"./index-CdaP9m-N.js";import"./index-CImr-lYQ.js";import"./InputRefContext-5kgal7hN.js";import"./deepEqual-_sTZaZ0q.js";import"./index-CjquOcKe.js";import"./index-Bz8IyDuP.js";import"./index-5fZpwwUY.js";import"./index-Ce_5uBnC.js";import"./index-CEcj3Prv.js";import"./index-Cr7ckBRp.js";import"./index-DO6smgbx.js";import"./index-Bmpn6NwE.js";import"./index-CPeXZspk.js";import"./index-DCbEgLiw.js";import"./index-BwXGKQ34.js";import"./index-CFeH6YXc.js";import"./index-DFj35L6X.js";import"./index-DTDTLdmj.js";import"./index-Dmvdrk1-.js";import"./index-SH6IHbpE.js";import"./SpeechContext-CGWUamV5.js";import"./index-tdXzjwjj.js";import"./index-BEtVJr3C.js";import"./index-CHYsz5B4.js";import"./index-C5waktot.js";import"./index-BBI_XuiR.js";import"./index-nEOIqwhl.js";import"./styled-BU-Jpcej.js";import"./index-BAMY2Nnw.js";const a=s.div`
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
