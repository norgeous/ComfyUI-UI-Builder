import{f as c,w as O,u as P}from"./index-Ct7ZYFme.js";import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{r as w}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{u as M,b as j,c as q,d as E,f as R,s as _}from"./floating-ui.react-DhE8Y95z.js";import{p as g}from"./styled-components.browser.esm-Drpn4GzW.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-CvHBa1Gc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";const d=g.button`
  display: block;
  background: transparent;
  border: none;
  color: var(--fg-mute);
  border-radius: var(--radius);
  &:hover {
    color: var(--fg);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`,F=g.span`
  position: absolute;
  font-size: 0.75rem; // 12px
  background: var(--bg0);
  color: var(--fg0);
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  z-index: 1;
  top: 100%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,i=({className:t=void 0,children:a=null,options:b=[]})=>{const[r,l]=w.useState(!1),{refs:p,floatingStyles:v,context:x}=M({placement:"auto",middleware:[E(),R(),_({padding:14})],open:r,onOpenChange:o=>{l(o)}}),y=j(x),{getReferenceProps:h,getFloatingProps:k}=q([y]);return n.jsxs(n.Fragment,{children:[n.jsx(d,{style:{},className:t,ref:p.setReference,onClick:()=>l(!r),...h(),children:a}),r&&n.jsx(F,{ref:p.setFloating,style:v,...k(),children:b.map(({label:o,onClick:C})=>n.jsx("div",{children:n.jsx(d,{onClick:C,children:o})},o))})]})};i.propTypes={className:e.string,lm:e.bool,wide:e.bool,children:e.node,options:e.arrayOf(e.shape({label:e.string,onClick:e.func}))};const B=i;i.__docgenInfo={description:"",methods:[],displayName:"PopMenu",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},lm:{description:"",type:{name:"bool"},required:!1},wide:{description:"",type:{name:"bool"},required:!1}}};const K={title:"PopMenu",component:B},s={args:{children:"Click Me",options:[{label:"Option 1",onClick:c()},{label:"Option 2",onClick:c()}]},play:async({canvasElement:t})=>{const a=O(t);await P.click(a.getByRole("button"))}};var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    options: [{
      label: 'Option 1',
      onClick: fn()
    }, {
      label: 'Option 2',
      onClick: fn()
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const L=["PopMenu"];export{s as PopMenu,L as __namedExportsOrder,K as default};
