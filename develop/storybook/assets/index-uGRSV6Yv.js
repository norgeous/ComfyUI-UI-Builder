import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as p}from"./index-uCp2LrAq.js";import{P as t}from"./index-D3ylJrlI.js";import{C as c}from"./index-DizZy_GM.js";import{p as o}from"./styled-components.browser.esm-Drpn4GzW.js";const u=o.div`
  border-radius: var(--radius);
  overflow: hidden;
`,f=o.button`
  background: var(--bg3);
  color: var(--fg3);

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
`,m=o.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=o.div`
  background: var(--bg2);
  color: var(--fg2);

  display: grid;
  transition: grid-template-rows 350ms;
  grid-template-rows: ${({$isOpen:s})=>s?"1fr":"0fr"};
`,x=o.div`
  overflow: hidden;
`,g=o.div`
  padding: 8px;
`,n=({title:s="",defaultIsOpen:i=!0,children:a=null})=>{const[r,l]=p.useState(i),d=()=>l(!r);return e.jsxs(u,{children:[e.jsxs(f,{onClick:d,children:[e.jsx(m,{children:s}),e.jsx(c,{$isOpen:r})]}),e.jsx(v,{$isOpen:r,children:e.jsx(x,{$isOpen:r,children:e.jsx(g,{children:a})})})]})};n.propTypes={title:t.string,defaultIsOpen:t.bool,children:t.node};const C=n;n.__docgenInfo={description:"",methods:[],displayName:"Collapsable",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},defaultIsOpen:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{C as c};
