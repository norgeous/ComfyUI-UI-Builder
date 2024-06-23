import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{P as i}from"./index-D3ylJrlI.js";import{W as p,D as a}from"./index-BiKVFdKX.js";import{r as d}from"./index-uCp2LrAq.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";const c=s.div`
  background: #ff000077;
  font-size: 0.75rem; // 12px
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
`,m=s.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 6px;
  margin: -6px -8px -6px auto;
`,e=({children:o})=>{const[n,t]=d.useState(!1);return n?null:r.jsxs(c,{children:[r.jsx(p,{})," ",o,r.jsx(m,{onClick:()=>t(!0),"aria-label":"Dismiss error message",children:r.jsx(a,{})})]})};e.propTypes={children:i.node.isRequired};const y=e;e.__docgenInfo={description:"",methods:[],displayName:"ErrorText",props:{children:{description:"",type:{name:"node"},required:!0}}};export{y as c};
