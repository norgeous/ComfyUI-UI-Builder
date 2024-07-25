import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{P as n}from"./index-D3ylJrlI.js";import{c as s}from"./index-zBpH53_J.js";import{d as a}from"./styled-components.browser.esm-CgTwxB-0.js";const r=a.span`
  width: 12px;
  height: 12px;
  border: 1px solid var(--fg0);
  border-radius: 50%; // circle
  transition: background-position 250ms ease-in-out;
  background: linear-gradient(
    in oklch -180deg,
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
`,i={DEFAULT:"Status unknown",CONNECTING:"Connecting…",CONNECTED:"Connected!",DISCONNECTED:"Disconnected"},o=({status:e="DEFAULT"})=>t.jsx(s,{text:i[e],children:t.jsx(r,{status:e})});o.propTypes={status:n.oneOf(["DEFAULT","CONNECTING","CONNECTED","DISCONNECTED"])};const N=o;o.__docgenInfo={description:"",methods:[],displayName:"StatusLight",props:{status:{defaultValue:{value:"'DEFAULT'",computed:!1},description:"",type:{name:"enum",value:[{value:"'DEFAULT'",computed:!1},{value:"'CONNECTING'",computed:!1},{value:"'CONNECTED'",computed:!1},{value:"'DISCONNECTED'",computed:!1}]},required:!1}}};export{N as c};
