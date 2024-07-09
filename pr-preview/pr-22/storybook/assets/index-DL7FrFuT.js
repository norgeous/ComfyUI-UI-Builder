import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as v}from"./index-BwDkhjyp.js";import{P as e}from"./index-D3ylJrlI.js";import{u as y,a as h,b as q,c as k,d as P,f as C,s as j}from"./index-Dj0aUtmp.js";import{p as t}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as M}from"./index-wo4bmeOh.js";const O=t.button`
  cursor: pointer;
  display: block;
  background: transparent;
  font-size: inherit;
  border: none;
  color: var(--fg-mute);
  border-radius: var(--radius);
  margin: 0;
  padding: 0;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`,w=t.span`
  ${M(1)}
  position: absolute;
  font-size: 0.75rem; // 12px
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  z-index: 1;
  top: 100%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,E=t.button`
  cursor: pointer;
  display: block;
  background: transparent;
  border: none;
  color: var(--fg-mute);
  border-radius: var(--radius);
  margin: 0;
  padding: 0;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
  width: 100%;
  text-align: left;
`,r=({className:i=void 0,tooltip:l=void 0,children:p=null,menuContents:d=null,...u})=>{const[o,s]=v.useState(!1),{refs:a,floatingStyles:c,context:f}=y({placement:"auto",middleware:[P(),C(),j({padding:4})],open:o,onOpenChange:x=>{s(x)}}),m=h(f),{getReferenceProps:g,getFloatingProps:b}=q([m]);return n.jsxs(k,{text:l,hidden:o,children:[n.jsx(O,{...u,className:i,ref:a.setReference,onClick:()=>s(!o),...g(),children:p}),o&&n.jsx(w,{ref:a.setFloating,style:c,...b(),children:d})]})};r.propTypes={className:e.string,tooltip:e.string,lm:e.bool,wide:e.bool,children:e.node,menuContents:e.node,options:e.arrayOf(e.shape({label:e.string,onClick:e.func}))};const S=r;r.__docgenInfo={description:"",methods:[],displayName:"PopMenu",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},tooltip:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},menuContents:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},lm:{description:"",type:{name:"bool"},required:!1},wide:{description:"",type:{name:"bool"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1}}};export{E as M,S as c};
