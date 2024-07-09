import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{f as t,w as m,u as b}from"./index-PX7pnrjg.js";import{c as y}from"./index-DSTr6H6M.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-D_h4Ovhh.js";import"./index-D3ylJrlI.js";import"./index-CqtEMep3.js";import"./index-B8XB3FuZ.js";import"./styled-components.browser.esm-Cm6OPFyG.js";import"./index-wo4bmeOh.js";const R={title:"PopMenu",component:y},o={args:{children:"Click Me",tooltip:"tooltip",menuContents:n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:t(),children:"Option 1"}),n.jsx("button",{type:"button",onClick:t(),children:"Option 2"}),n.jsx("button",{type:"button",onClick:t(),children:"Option 3"})]})},play:async({canvasElement:i})=>{const s=m(i);await b.hover(s.getByRole("button"))}},e={args:{children:"Click Me",tooltip:"tooltip",menuContents:n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:t(),children:"Option 1"}),n.jsx("button",{type:"button",onClick:t(),children:"Option 2"}),n.jsx("button",{type:"button",onClick:t(),children:"Option 3"})]})},play:async({canvasElement:i})=>{const s=m(i);await b.click(s.getByRole("button"))}};var p,r,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    tooltip: 'tooltip',
    menuContents: <>
        <button type="button" onClick={fn()}>
          Option 1
        </button>
        <button type="button" onClick={fn()}>
          Option 2
        </button>
        <button type="button" onClick={fn()}>
          Option 3
        </button>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  }
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    tooltip: 'tooltip',
    menuContents: <>
        <button type="button" onClick={fn()}>
          Option 1
        </button>
        <button type="button" onClick={fn()}>
          Option 2
        </button>
        <button type="button" onClick={fn()}>
          Option 3
        </button>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const B=["PopMenuTooltip","PopMenuOpen"];export{e as PopMenuOpen,o as PopMenuTooltip,B as __namedExportsOrder,R as default};
