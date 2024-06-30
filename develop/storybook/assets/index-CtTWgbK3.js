import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{P as s}from"./index-D3ylJrlI.js";import{c as a}from"./index-Bg_XXJfu.js";import{p as n}from"./styled-components.browser.esm-Cm6OPFyG.js";const r=n.span`
  width: 12px;
  height: 12px;
  border: 1px solid var(--fg0);
  border-radius: 50%; // circle
  transition: background-position 250ms ease-in-out;
  background: linear-gradient(
    -180deg,
    grey,
    black,
    deepskyblue,
    blue,
    chartreuse,
    green,
    crimson,
    darkred
  );
  background-size: 100% 700%;
  background-repeat: no-repeat;
  background-position: ${({status:e})=>({DEFAULT:"0% 0%",CONNECTING:"0% 33.33%",CONNECTED:"0% 66.66%",DISCONNECTED:"0% 100%"})[e]};
`,p={DEFAULT:"Status unknown",CONNECTING:"Connecting…",CONNECTED:"Connected!",DISCONNECTED:"Disconnected"},o=({status:e="DEFAULT"})=>t.jsx(a,{text:p[e],children:t.jsx(r,{status:e})});o.propTypes={status:s.oneOf(["DEFAULT","CONNECTING","CONNECTED","DISCONNECTED"])};const N=o;o.__docgenInfo={description:"",methods:[],displayName:"StatusLight",props:{status:{defaultValue:{value:"'DEFAULT'",computed:!1},description:"",type:{name:"enum",value:[{value:"'DEFAULT'",computed:!1},{value:"'CONNECTING'",computed:!1},{value:"'CONNECTED'",computed:!1},{value:"'DISCONNECTED'",computed:!1}]},required:!1}}};export{N as c};
