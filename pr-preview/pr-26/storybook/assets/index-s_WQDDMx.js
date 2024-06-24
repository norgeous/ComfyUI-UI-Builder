import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as c}from"./index-uCp2LrAq.js";import{P as r}from"./index-D3ylJrlI.js";import{C as u}from"./index-BiKVFdKX.js";import{p as o}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as i}from"./index-BUFFlF7z.js";const f=o.div`
  border-radius: var(--radius);
  overflow: hidden;
`,m=o.button`
  ${i(5)}
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 12px;
  cursor: pointer;
  border: none;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`,x=o.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=o.div`
  ${i(4)}
  display: grid;
  transition: grid-template-rows 350ms;
  grid-template-rows: ${({$isOpen:t})=>t?"1fr":"0fr"};
`,h=o.div`
  overflow: hidden;
`,b=o.div`
  padding: 8px;
`,n=({title:t="",defaultIsOpen:l=!0,children:a=null})=>{const[s,p]=c.useState(l),d=()=>p(!s);return e.jsxs(f,{children:[e.jsxs(m,{onClick:d,children:[e.jsx(x,{children:t}),e.jsx(u,{$isOpen:s})]}),e.jsx(v,{$isOpen:s,children:e.jsx(h,{$isOpen:s,children:e.jsx(b,{children:a})})})]})};n.propTypes={title:r.string,defaultIsOpen:r.bool,children:r.node};const I=n;n.__docgenInfo={description:"",methods:[],displayName:"Collapsable",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},defaultIsOpen:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{I as c};
