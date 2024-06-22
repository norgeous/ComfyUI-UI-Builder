import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as v}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{u as y,a as h,b as k,c as j,f as q,s as P}from"./floating-ui.react-CDqbCaSC.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";const O=s.button`
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
`,w=s.span`
  position: absolute;
  font-size: 0.75rem; // 12px
  background: var(--bg1);
  color: var(--fg1);
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  z-index: 1;
  top: 100%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,C=s.button`
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
`,a=({className:l=void 0,children:p=null,options:d=[],...c})=>{const[n,t]=v.useState(!1),{refs:i,floatingStyles:u,context:f}=y({placement:"auto",middleware:[j(),q(),P({padding:14})],open:n,onOpenChange:r=>{t(r)}}),m=h(f),{getReferenceProps:g,getFloatingProps:x}=k([m]);return o.jsxs(o.Fragment,{children:[o.jsx(O,{...c,className:l,ref:i.setReference,onClick:()=>t(!n),...g(),children:p}),n&&o.jsx(w,{ref:i.setFloating,style:u,...x(),children:d.map(({label:r,onClick:b})=>o.jsx("div",{children:o.jsx(C,{onClick:b,children:r})},r))})]})};a.propTypes={className:e.string,lm:e.bool,wide:e.bool,children:e.node,options:e.arrayOf(e.shape({label:e.string,onClick:e.func}))};const V=a;a.__docgenInfo={description:"",methods:[],displayName:"PopMenu",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},lm:{description:"",type:{name:"bool"},required:!1},wide:{description:"",type:{name:"bool"},required:!1}}};export{V as c};
