import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{C as f}from"./ComfyBridgeContext-CTMRF_Mz.js";import{F as u}from"./FormContext-BvePLfBF.js";import{c as j}from"./index-CjquOcKe.js";import{c as n}from"./index-Dmvdrk1-.js";import{c as C}from"./index-CBgsHpUN.js";import{c as h}from"./index-DmipQToa.js";import{S,P as g,a as y}from"./index-VWZqVgFq.js";const a=()=>{const{bridge:s,data:m,promptLoading:i,promptError:r}=e.useContext(f),[t,c]=e.useState(!1),{formState:{enableSeedRandomisation:p},updateFormState:d}=e.useContext(u),l=()=>{if(p){const x=Math.floor(Math.random()*1e10);d({seed:x})}s.prompt({comfyUrl:m.ws.comfyUrl,promptData:{}})};return o.jsxs(o.Fragment,{children:[r&&o.jsx(C,{children:r}),o.jsxs(j,{gap:"md",children:[!t&&o.jsx(n,{wide:!0,onClick:l,children:i?o.jsx(S,{}):"Generate"}),o.jsx(h,{text:"Automatic Generation",wide:t,children:o.jsx(n,{variant:"secondary","aria-label":"Automatic Generation",onClick:()=>c(!t),wide:t,children:t?o.jsx(g,{}):o.jsx(y,{})})})]})]})},P=a;a.__docgenInfo={description:"",methods:[],displayName:"FormControls"};export{P as c};