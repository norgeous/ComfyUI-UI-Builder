import{j as s}from"./jsx-runtime-X2b_N9AH.js";import{P as e}from"./index-D3ylJrlI.js";import{c as n}from"./index-B4PluBfx.js";import{p}from"./styled-components.browser.esm-Drpn4GzW.js";const i=p.span`
  color: white;
  user-select: none;
`,r={DEFAULT:"Status unknown",CONNECTING:"Connecting…",CONNECTED:"Connected!",DISCONNECTED:"Disconnected"},c={DEFAULT:"⚫",CONNECTING:"🔵",CONNECTED:"🟢",DISCONNECTED:"🔴"},t=({status:o="DEFAULT"})=>s.jsx(n,{text:r[o],children:s.jsx(i,{children:c[o]})});t.propTypes={status:e.string};const C=t;t.__docgenInfo={description:"",methods:[],displayName:"StatusLight",props:{status:{defaultValue:{value:"'DEFAULT'",computed:!1},description:"",type:{name:"string"},required:!1}}};export{C as c};
