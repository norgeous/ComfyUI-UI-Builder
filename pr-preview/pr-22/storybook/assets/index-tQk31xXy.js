import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r}from"./index-uCp2LrAq.js";import{A as u}from"./AppContext-DX1Wlwzv.js";import{F as j}from"./FormContext-7paO4gYw.js";import{C}from"./ComfyBridgeContext-Dy9XN-KW.js";import{c as a}from"./index-E63py7s0.js";import{c as m}from"./index-BESrCSE-.js";import{c as h}from"./index-BZDIBKFQ.js";import{c as S}from"./index-C_MwD-aL.js";import{S as g,P as y,a as F}from"./index-BiKVFdKX.js";import{c as w}from"./index-qObUJ4il.js";const c=()=>{const{bridge:i,data:n}=r.useContext(C),[t,p]=r.useState(!1),{formState:{enableSeedRandomisation:d},updateFormState:l}=r.useContext(j),{promptLoading:x,promptError:s}=r.useContext(u),f=()=>{if(d){const e=Math.floor(Math.random()*1e10);l({seed:e})}i.prompt({comfyUrl:n.ws.comfyUrl,promptData:{}})};return o.jsxs(o.Fragment,{children:[o.jsx(a,{column:!0,vscroll:!0,children:n.queue.map(e=>o.jsx(w,{...e},e.id))}),s&&o.jsx(h,{children:s}),o.jsxs(a,{gap:"md",children:[!t&&o.jsx(m,{wide:!0,onClick:f,children:x?o.jsx(g,{}):"Generate"}),o.jsx(S,{text:"Automatic Generation",wide:t,children:o.jsx(m,{variant:"secondary","aria-label":"Automatic Generation",onClick:()=>p(!t),wide:t,children:t?o.jsx(y,{}):o.jsx(F,{})})})]})]})},U=c;c.__docgenInfo={description:"",methods:[],displayName:"FormControls"};export{U as c};