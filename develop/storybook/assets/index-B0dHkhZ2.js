import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as b}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{u as v,a as y,b as h,c as k,f as j,s as q}from"./floating-ui.react-CDqbCaSC.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";const P=s.button`
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
`,O=s.span`
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
`,w=s.button`
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
`,a=({className:l=void 0,children:p=null,options:d=[]})=>{const[n,t]=b.useState(!1),{refs:i,floatingStyles:c,context:u}=v({placement:"auto",middleware:[k(),j(),q({padding:14})],open:n,onOpenChange:r=>{t(r)}}),f=y(u),{getReferenceProps:m,getFloatingProps:g}=h([f]);return o.jsxs(o.Fragment,{children:[o.jsx(P,{className:l,ref:i.setReference,onClick:()=>t(!n),...m(),children:p}),n&&o.jsx(O,{ref:i.setFloating,style:c,...g(),children:d.map(({label:r,onClick:x})=>o.jsx("div",{children:o.jsx(w,{onClick:x,children:r})},r))})]})};a.propTypes={className:e.string,lm:e.bool,wide:e.bool,children:e.node,options:e.arrayOf(e.shape({label:e.string,onClick:e.func}))};const R=a;a.__docgenInfo={description:"",methods:[],displayName:"PopMenu",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},lm:{description:"",type:{name:"bool"},required:!1},wide:{description:"",type:{name:"bool"},required:!1}}};export{R as c};
