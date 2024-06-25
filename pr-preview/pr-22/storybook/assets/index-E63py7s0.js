import{j as f}from"./jsx-runtime-X2b_N9AH.js";import{P as l}from"./index-D3ylJrlI.js";import{p as i,c as a}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as m}from"./index-BUFFlF7z.js";const c={sm:"4px",md:"8px"},v=i.div`
  display: flex;
  ${({$pad:e})=>e&&a`
      padding: 8px;
    `}
  ${({$center:e})=>e&&a`
      align-items: center;
    `}
  ${({$gap:e})=>e&&a`
      gap: ${c[e]};
    `}
  ${({$column:e})=>e&&a`
      flex-direction: column;
    `}
  ${({$vscroll:e})=>e&&a`
      overflow-y: auto;
      flex-grow: 1;
    `}
  ${({$bgfg:e})=>e&&m(e)}
`,o=({pad:e=!1,column:s=!1,gap:t=void 0,center:u=!1,vscroll:d=!1,bgfg:p=void 0,children:r=null,...n})=>f.jsx(v,{...n,$pad:e,$column:s,$gap:t,$center:u,$vscroll:d,$bgfg:p,children:r});o.propTypes={pad:l.bool,column:l.bool,gap:l.oneOf(["sm","md"]),center:l.bool,vscroll:l.bool,bgfg:l.number,children:l.node};const $=o;o.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{pad:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},column:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},gap:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1}]},required:!1},center:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},vscroll:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},bgfg:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{$ as c};
