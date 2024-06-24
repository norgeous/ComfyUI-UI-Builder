import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{r as f}from"./index-uCp2LrAq.js";import{C as d}from"./index-BUFFlF7z.js";import{c as l}from"./index-QlWr60ko.js";import{p as g}from"./styled-components.browser.esm-Drpn4GzW.js";const x=g.div`
  padding: 0 8px 8px;
  font-size: 12px;
`,a=()=>{const{config:i,configs:s,setConfig:c}=f.useContext(d),r=t=>{const o=s.find(({configData:{name:e}})=>e===t);c(o)},p=s.map(({configData:{emoji:t,name:o,version:e}})=>({label:`${t} ${o} ${e}`,value:o})),m=i.configData.name;return n.jsxs(n.Fragment,{children:[n.jsx(l,{id:"ui",label:"UI Builder",options:p,defaultValueIndex:0,value:m,onChange:r}),n.jsx(x,{className:"muted",children:i.configData.description})]})},$=a;a.__docgenInfo={description:"",methods:[],displayName:"UiSelector"};export{$ as c};
