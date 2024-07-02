import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const k={title:"_Experiments/OKLCH"},n={tags:["skip-test"],parameters:{screenshot:{skip:!0}},args:{saturationOrChroma:100,leftHalf:!1},render:({saturationOrChroma:l,leftHalf:a})=>{const m=a?50:100,o=a?1:2;return t.jsxs(t.Fragment,{children:[t.jsxs("h1",{children:["hsl",a&&" (showing left half only)"]}),Array.from({length:360/20+1},(r,e)=>e*20).map(r=>t.jsx("div",{children:Array.from({length:m/o+1},(e,s)=>s*o).map(e=>t.jsx("input",{type:"checkbox",checked:!0,style:{accentColor:`hsl(${r}, ${l}%, ${e}%)`},title:`L:${e} H:${r}`,"aria-label":"checkbox"},`${e}-${r}`))},r)),t.jsx("h1",{children:"oklch"}),Array.from({length:360/20+1},(r,e)=>e*20).map(r=>t.jsx("div",{children:Array.from({length:100/2+1},(e,s)=>s*2).map(e=>t.jsx("input",{type:"checkbox",checked:!0,style:{accentColor:`oklch(${e}% ${l}% ${r})`},title:`L:${e} H:${r}`,"aria-label":"checkbox"},`${e}-${r}`))},r))]})}};var c,h,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['skip-test'],
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    saturationOrChroma: 100,
    leftHalf: false
  },
  render: ({
    saturationOrChroma,
    leftHalf
  }) => {
    const maxL = leftHalf ? 50 : 100;
    const step = leftHalf ? 1 : 2;
    return <>
        <h1>hsl{leftHalf && \` (showing left half only)\`}</h1>
        {Array.from({
        length: 360 / 20 + 1
      }, (_, i) => i * 20).map(h => <div key={h}>
            {Array.from({
          length: maxL / step + 1
        }, (_, i) => i * step).map(l => <input key={\`\${l}-\${h}\`} type="checkbox" checked style={{
          accentColor: \`hsl(\${h}, \${saturationOrChroma}%, \${l}%)\`
        }} title={\`L:\${l} H:\${h}\`} aria-label="checkbox" />)}
          </div>)}
        <h1>oklch</h1>
        {Array.from({
        length: 360 / 20 + 1
      }, (_, i) => i * 20).map(h => <div key={h}>
            {Array.from({
          length: 100 / 2 + 1
        }, (_, i) => i * 2).map(l => <input key={\`\${l}-\${h}\`} type="checkbox" checked style={{
          accentColor: \`oklch(\${l}% \${saturationOrChroma}% \${h})\`
        }} title={\`L:\${l} H:\${h}\`} aria-label="checkbox" />)}
          </div>)}
      </>;
  }
}`,...(i=(h=n.parameters)==null?void 0:h.docs)==null?void 0:i.source}}};const x=["HSLVsLCH"];export{n as HSLVsLCH,x as __namedExportsOrder,k as default};
