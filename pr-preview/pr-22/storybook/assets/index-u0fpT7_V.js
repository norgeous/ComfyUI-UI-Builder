import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as y}from"./index-BwDkhjyp.js";import{P as e}from"./index-D3ylJrlI.js";import{u as h,c as q,d as j,e as k,f as P,s as C}from"./floating-ui.react-Dnqmk7Qj.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as O}from"./index-wo4bmeOh.js";const w=s.button`
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
`,F=s.span`
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
`,I=s.button`
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
`,t=({className:l=void 0,children:p=null,menuContents:d=null,options:u=[],...c})=>{const[r,a]=y.useState(!1),{refs:i,floatingStyles:f,context:m}=h({placement:"auto",middleware:[k(),P(),C({padding:4})],open:r,onOpenChange:n=>{a(n)}}),g=q(m),{getReferenceProps:x,getFloatingProps:b}=j([g]);return o.jsxs(o.Fragment,{children:[o.jsx(w,{...c,className:l,ref:i.setReference,onClick:()=>a(!r),...x(),children:p}),r&&o.jsxs(F,{ref:i.setFloating,style:f,...b(),children:[u.map(({label:n,onClick:v})=>o.jsx("div",{children:o.jsx(I,{onClick:v,children:n})},n)),d]})]})};t.propTypes={className:e.string,lm:e.bool,wide:e.bool,children:e.node,menuContents:e.node,options:e.arrayOf(e.shape({label:e.string,onClick:e.func}))};const S=t;t.__docgenInfo={description:"",methods:[],displayName:"PopMenu",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},menuContents:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},lm:{description:"",type:{name:"bool"},required:!1},wide:{description:"",type:{name:"bool"},required:!1}}};export{S as c};
