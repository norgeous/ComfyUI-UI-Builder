import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{r as p}from"./index-uCp2LrAq.js";import{P as o}from"./index-D3ylJrlI.js";import{F as v,u as b,o as w,f as y,s as h,d as T}from"./floating-ui.react-CDqbCaSC.js";import{p as a,c as d}from"./styled-components.browser.esm-Drpn4GzW.js";const j=a.span`
  ${({$lm:e})=>e&&d`
      margin-left: auto;
    `}
  ${({$wide:e})=>e&&d`
      width: 100%;
    `}
`,q=a.span`
  position: absolute;
  font-size: 0.75rem; // 12px
  background: var(--bg0);
  color: var(--fg0);
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-top: 5px;
  transform: translate(-50%);
  white-space: preserve-breaks;
`,F=a(v)`
  fill: var(--bg0);
`,r=({className:e=void 0,text:f=void 0,wide:u=!1,lm:c=!1,children:m=null})=>{const[n,s]=p.useState(!1),l=p.useRef(null),{refs:i,floatingStyles:g,context:x}=b({placement:"top",middleware:[w(14),y(),h({padding:14}),T({element:l})],open:n,onOpenChange:s});return t.jsxs(t.Fragment,{children:[t.jsx(j,{className:e,$wide:u,$lm:c,ref:i.setReference,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:m}),n&&t.jsxs(q,{ref:i.setFloating,style:g,children:[t.jsx(F,{ref:l,context:x}),f]})]})};r.propTypes={className:o.string,text:o.string,lm:o.bool,wide:o.bool,children:o.node};const O=r;r.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},text:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},wide:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},lm:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{O as c};
