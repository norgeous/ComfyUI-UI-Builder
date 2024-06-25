import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{P as a}from"./index-D3ylJrlI.js";import{p as u,c as l}from"./styled-components.browser.esm-Drpn4GzW.js";const r=u.div`
  ${({$pad:e})=>e&&l`
      padding: 8px;
    `}
  display: flex;
  ${({$center:e})=>e&&l`
      align-items: center;
    `}
  gap: ${({$gap:e})=>({sm:"4px"})[e]||"8px"};
  ${({$column:e})=>e&&l`
      flex-direction: column;
    `}
`,o=({pad:e=!1,column:p=!1,gap:t=void 0,center:s=!1,children:d=null})=>n.jsx(r,{$pad:e,$column:p,$gap:t,$center:s,children:d});o.propTypes={pad:a.bool,column:a.bool,gap:a.oneOf(["sm"]),center:a.bool,children:a.node};const f=o;o.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{pad:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},column:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},gap:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1}]},required:!1},center:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{f as c};
