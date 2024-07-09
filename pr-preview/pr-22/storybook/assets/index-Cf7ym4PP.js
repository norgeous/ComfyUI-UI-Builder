import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as h}from"./index-BwDkhjyp.js";import{P as e}from"./index-D3ylJrlI.js";import{u as q,a as j,b as k,c as P,d as C,f as O,s as V}from"./index-Dj0aUtmp.js";import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as w}from"./index-wo4bmeOh.js";const I=r.button`
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
`,M=r.span`
  ${w(1)}
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
`,z=r.button`
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
`,s=({className:l=void 0,tooltip:d=void 0,children:p=null,menuContents:u=null,options:c=[],...f})=>{const[n,a]=h.useState(!1),{refs:i,floatingStyles:m,context:g}=q({placement:"auto",middleware:[C(),O(),V({padding:4})],open:n,onOpenChange:t=>{a(t)}}),x=j(g),{getReferenceProps:b,getFloatingProps:v}=k([x]);return o.jsxs(P,{text:d,hidden:n,children:[o.jsx(I,{...f,className:l,ref:i.setReference,onClick:()=>a(!n),...b(),children:p}),n&&o.jsxs(M,{ref:i.setFloating,style:m,...v(),children:[c.map(({label:t,onClick:y})=>o.jsx("div",{children:o.jsx(z,{onClick:y,children:t})},t)),u]})]})};s.propTypes={className:e.string,tooltip:e.string,lm:e.bool,wide:e.bool,children:e.node,menuContents:e.node,options:e.arrayOf(e.shape({label:e.string,onClick:e.func}))};const _=s;s.__docgenInfo={description:"",methods:[],displayName:"PopMenu",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},tooltip:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},menuContents:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},lm:{description:"",type:{name:"bool"},required:!1},wide:{description:"",type:{name:"bool"},required:!1}}};export{_ as c};
