import{f as t,w as m,u}from"./index-PX7pnrjg.js";import{c as v}from"./index-DL7FrFuT.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./index-Dj0aUtmp.js";import"./index-B8XB3FuZ.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-wo4bmeOh.js";const R={title:"PopMenu",component:v},n={args:{children:"Click Me",tooltip:"tooltip",options:[{label:"Option 1",onClick:t()},{label:"Option 2",onClick:t()}]},play:async({canvasElement:e})=>{const a=m(e);await u.hover(a.getByRole("button"))}},o={args:{children:"Click Me",tooltip:"tooltip",options:[{label:"Option 1",onClick:t()},{label:"Option 2",onClick:t()}]},play:async({canvasElement:e})=>{const a=m(e);await u.click(a.getByRole("button"))}};var i,l,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    tooltip: 'tooltip',
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
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var p,r,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    tooltip: 'tooltip',
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
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const x=["PopMenuTooltip","PopMenuOpen"];export{o as PopMenuOpen,n as PopMenuTooltip,x as __namedExportsOrder,R as default};
