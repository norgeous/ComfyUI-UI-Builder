import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{P as t}from"./index-D3ylJrlI.js";import{W as p,D as a}from"./index-BGHfn8iy.js";import{r as d}from"./index-BwDkhjyp.js";import{p as o}from"./styled-components.browser.esm-Cm6OPFyG.js";const c=o.div`
  background: #ff000077;
  font-size: 0.75rem; // 12px
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
`,m=o.button`
  cursor: pointer;
  color: inherit;
  background: transparent;
  border: none;
  padding: 6px;
  margin: -6px -8px -6px auto;
`,e=({children:s})=>{const[n,i]=d.useState(!1);return n?null:r.jsxs(c,{children:[r.jsx(p,{})," ",s,r.jsx(m,{onClick:()=>i(!0),"aria-label":"Dismiss error message",children:r.jsx(a,{})})]})};e.propTypes={children:t.node.isRequired};const h=e;e.__docgenInfo={description:"",methods:[],displayName:"ErrorText",props:{children:{description:"",type:{name:"node"},required:!0}}};export{h as c};
