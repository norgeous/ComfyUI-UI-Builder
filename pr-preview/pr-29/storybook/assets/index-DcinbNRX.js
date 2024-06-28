import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{P as l}from"./index-D3ylJrlI.js";import{p as m,c as a}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as c}from"./index-CB5wHgmQ.js";const b={sm:"4px",md:"8px"},g=m.div`
  display: flex;
  ${({$pad:e})=>e&&a`
      padding: 8px;
    `}
  ${({$center:e})=>e&&a`
      align-items: center;
    `}
  ${({$gap:e})=>e&&a`
      gap: ${b[e]};
    `}
  ${({$column:e})=>e&&a`
      flex-direction: column;
    `}
  ${({$scrollable:e})=>e&&a`
      overflow: auto;
      flex-grow: 1;
    `}
  ${({$bgfg:e})=>e&&c(e)}
  ${({$fullHeight:e})=>e&&a`
      height: 100%;
      overflow: hidden;
    `}
`,o=({pad:e=!1,column:t=!1,gap:u=void 0,center:s=!1,scrollable:d=!1,bgfg:p=void 0,fullHeight:r=!1,children:f=null,...n})=>i.jsx(g,{...n,$pad:e,$column:t,$gap:u,$center:s,$scrollable:d,$bgfg:p,$fullHeight:r,children:f});o.propTypes={pad:l.bool,column:l.bool,gap:l.oneOf(["sm","md"]),center:l.bool,scrollable:l.bool,bgfg:l.number,fullHeight:l.bool,children:l.node};const h=o;o.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{pad:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},column:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},gap:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1}]},required:!1},center:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},scrollable:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},bgfg:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},fullHeight:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{h as c};
