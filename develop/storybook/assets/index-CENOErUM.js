import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as m}from"./index-uCp2LrAq.js";import{C as l}from"./ConfigsContext-JqLhkqbA.js";import{c as g}from"./index-OajLkLB1.js";import{p as i}from"./styled-components.browser.esm-Drpn4GzW.js";const x=i.header`
  background: var(--bg2);
  color: var(--fg2);
`,u=i.div`
  padding: 0 8px 8px;
  font-size: 12px;
`,c=()=>{const{config:a,configs:s,setConfig:r}=m.useContext(l),p=n=>{const o=s.find(({configData:{name:t}})=>t===n);r(o)},d=s.map(({configData:{emoji:n,name:o,version:t}})=>({label:`${n} ${o} ${t}`,value:o})),f=a.configData.name;return e.jsxs(x,{children:[e.jsx(g,{id:"ui",label:"UI Builder",options:d,defaultValueIndex:0,value:f,onChange:p}),e.jsx(u,{className:"muted",children:a.configData.description})]})},b=c;c.__docgenInfo={description:"",methods:[],displayName:"UiSelector"};export{b as c};
