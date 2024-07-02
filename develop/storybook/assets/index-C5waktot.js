import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{P as r}from"./index-D3ylJrlI.js";import{C as u}from"./index-BGHfn8iy.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as i}from"./index-CXGN0Eu6.js";const f=s.div`
  border-radius: var(--radius);
  overflow: hidden;
  flex-shrink: 0;
`,m=s.button`
  ${i(4)}
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
`,x=s.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=s.div`
  ${i(3)}
  display: grid;
  transition: grid-template-rows 350ms;
  grid-template-rows: ${({$isOpen:t})=>t?"1fr":"0fr"};
`,h=s.div`
  overflow: hidden;
`,b=s.div`
  padding: 8px;
`,n=({title:t="",defaultIsOpen:l=!0,children:a=null})=>{const[o,p]=c.useState(l),d=()=>p(!o);return e.jsxs(f,{children:[e.jsxs(m,{onClick:d,children:[e.jsx(x,{children:t}),e.jsx(u,{$isOpen:o})]}),e.jsx(v,{$isOpen:o,children:e.jsx(h,{$isOpen:o,children:e.jsx(b,{children:a})})})]})};n.propTypes={title:r.string,defaultIsOpen:r.bool,children:r.node};const I=n;n.__docgenInfo={description:"",methods:[],displayName:"Collapsable",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},defaultIsOpen:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{I as c};
