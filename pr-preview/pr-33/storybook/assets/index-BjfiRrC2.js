import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{P as o}from"./index-D3ylJrlI.js";import{c as p}from"./index-DCGSrkkW.js";import{d as c,l as f}from"./styled-components.browser.esm-CgTwxB-0.js";const m=c.button`
  cursor: pointer;
  display: block;
  border: none;
  color: inherit;
  background: transparent;
  font-size: 0.75rem; // 12px
  padding: 0;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    border-radius: var(--radius);
  }
  > * {
    opacity: 0.5;
  }
  &:hover > * {
    opacity: 1;
  }
  ${({value:e})=>e&&f`
      > * {
        opacity: 1;
      }
    `}
`,b=e=>e===!0?" (On)":e===!1?" (Off)":"",r=({className:e=void 0,label:l=void 0,value:t=void 0,onClick:i=()=>{},lm:s=!1,children:u=null,...d})=>{const a=`${l}${b(t)}`;return n.jsx(p,{className:e,text:a,lm:s,children:n.jsx(m,{"aria-label":a,onClick:()=>i(!t),value:t,...d,children:u})})};r.propTypes={className:o.string,label:o.string,lm:o.bool,value:o.bool,onClick:o.func,children:o.node};const h=r;r.__docgenInfo={description:"",methods:[],displayName:"HeaderButton",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},lm:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{h as c};
