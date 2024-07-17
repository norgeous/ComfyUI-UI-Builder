import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{f as o,w as m,u as b}from"./index-BW_Q0FrA.js";import{c as y}from"./index-CwXlTWFf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BbP3371Q.js";import"./index-4V56_mca.js";import"./index-BAMY2Nnw.js";import"./index-BV3z3PqH.js";import"./index-D3ylJrlI.js";import"./index-DCGSrkkW.js";import"./index-BxibOwXx.js";import"./styled-components.browser.esm-CgTwxB-0.js";import"./bgfg-BUc8g66r.js";const R={title:"PopMenu",component:y},n={args:{children:"Click Me",tooltip:"tooltip",menuContents:t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",onClick:o(),children:"Option 1"}),t.jsx("button",{type:"button",onClick:o(),children:"Option 2"}),t.jsx("button",{type:"button",onClick:o(),children:"Option 3"})]})},play:async({canvasElement:i})=>{const s=m(i);await b.hover(s.getByRole("button"))}},e={args:{children:"Click Me",tooltip:"tooltip",menuContents:t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",onClick:o(),children:"Option 1"}),t.jsx("button",{type:"button",onClick:o(),children:"Option 2"}),t.jsx("button",{type:"button",onClick:o(),children:"Option 3"})]})},play:async({canvasElement:i})=>{const s=m(i);await b.click(s.getByRole("button"))}};var p,r,a;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const B=["PopMenuTooltip","PopMenuOpen"];export{e as PopMenuOpen,n as PopMenuTooltip,B as __namedExportsOrder,R as default};
