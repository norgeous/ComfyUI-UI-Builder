import{j as m}from"./jsx-runtime-Nms4Y4qS.js";import{P as l}from"./index-D3ylJrlI.js";import{d as c,l as a}from"./styled-components.browser.esm-CgTwxB-0.js";import{b}from"./bgfg-BUc8g66r.js";const g={sm:"4px",md:"8px"},v=c.div`
  display: flex;
  ${({$pad:e})=>e&&a`
      padding: 8px;
    `}
  ${({$center:e})=>e&&a`
      align-items: center;
    `}
  ${({$gap:e})=>e&&a`
      gap: ${g[e]};
    `}
  ${({$column:e})=>e&&a`
      flex-direction: column;
    `}
  ${({$scrollable:e})=>e&&a`
      overflow: auto;
      flex-grow: 1;
    `}
  ${({$bgfg:e})=>e&&b(e)}
  ${({$rounded:e})=>e&&a`
      border-radius: var(--radius);
    `}
  ${({$fullHeight:e})=>e&&a`
      height: 100%;
      overflow: hidden;
    `}
`,o=({pad:e=!1,column:d=!1,gap:u=void 0,center:s=!1,scrollable:t=!1,bgfg:r=void 0,rounded:f=!1,fullHeight:n=!1,children:p=null,...i})=>m.jsx(v,{...i,$pad:e,$column:d,$gap:u,$center:s,$scrollable:t,$bgfg:r,$rounded:f,$fullHeight:n,children:p});o.propTypes={pad:l.bool,column:l.bool,gap:l.oneOf(["sm","md"]),center:l.bool,scrollable:l.bool,bgfg:l.number,rounded:l.bool,fullHeight:l.bool,children:l.node};const q=o;o.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{pad:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},column:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},gap:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1}]},required:!1},center:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},scrollable:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},bgfg:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},rounded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},fullHeight:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{q as c};
