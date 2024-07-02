import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as v}from"./index-BwDkhjyp.js";import{P as e}from"./index-D3ylJrlI.js";import{u as h,a as y,b as j,c as k,f as q,s as P}from"./floating-ui.react-BQk9wdfR.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as O}from"./index-CXGN0Eu6.js";const w=s.button`
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
`,C=s.span`
  ${O(1)}
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
`,F=s.button`
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
`,t=({className:l=void 0,children:p=null,options:d=[],...u})=>{const[n,a]=v.useState(!1),{refs:i,floatingStyles:c,context:f}=h({placement:"auto",middleware:[k(),q(),P({padding:14})],open:n,onOpenChange:r=>{a(r)}}),m=y(f),{getReferenceProps:g,getFloatingProps:x}=j([m]);return o.jsxs(o.Fragment,{children:[o.jsx(w,{...u,className:l,ref:i.setReference,onClick:()=>a(!n),...g(),children:p}),n&&o.jsx(C,{ref:i.setFloating,style:c,...x(),children:d.map(({label:r,onClick:b})=>o.jsx("div",{children:o.jsx(F,{onClick:b,children:r})},r))})]})};t.propTypes={className:e.string,lm:e.bool,wide:e.bool,children:e.node,options:e.arrayOf(e.shape({label:e.string,onClick:e.func}))};const E=t;t.__docgenInfo={description:"",methods:[],displayName:"PopMenu",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},lm:{description:"",type:{name:"bool"},required:!1},wide:{description:"",type:{name:"bool"},required:!1}}};export{E as c};
