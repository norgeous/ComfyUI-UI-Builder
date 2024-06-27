import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as p}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{F as b,u as h,o as y,f as w,s as T,d as j,e as q}from"./floating-ui.react-ByhEbrkY.js";import{p as s,c as d}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as V}from"./index-BUFFlF7z.js";const F=s.span`
  display: inline-flex;
  ${({$lm:t})=>t&&d`
      margin-left: auto;
    `}
  ${({$wide:t})=>t&&d`
      width: 100%;
    `}
`,$=s.span`
  ${V(1)}
  position: absolute;
  font-size: 0.75rem; // 12px
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  white-space: preserve-breaks;
`,E=s(b)`
  fill: var(--bg1);
`,l=({className:t=void 0,text:u=void 0,placement:f="top",wide:m=!1,lm:c=!1,children:g=null})=>{const[r,a]=p.useState(!1),n=p.useRef(null),{refs:i,floatingStyles:x,context:v}=h({placement:f,middleware:[y(10),w(),T({padding:6}),j({element:n})],open:r,onOpenChange:a,whileElementsMounted:q});return o.jsxs(o.Fragment,{children:[o.jsx(F,{className:t,$wide:m,$lm:c,ref:i.setReference,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:g}),r&&o.jsxs($,{ref:i.setFloating,style:x,children:[o.jsx(E,{ref:n,context:v}),u]})]})};l.propTypes={className:e.string,placement:e.oneOf(["top","right","bottom","left"]),text:e.string,lm:e.bool,wide:e.bool,children:e.node};const I=l;l.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},text:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},placement:{defaultValue:{value:"'top'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},wide:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},lm:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{I as c};
