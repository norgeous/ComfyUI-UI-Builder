import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{P as r}from"./index-D3ylJrlI.js";import{c as l}from"./index-qDzr2xAS.js";import{c}from"./index-DWpgm1JM.js";import{S as u,W as m,e as d}from"./index-BiKVFdKX.js";import{c as f}from"./index-8yc3hoqd.js";import{P as x}from"./styled-pLz9Mkps.js";import{p as g}from"./styled-components.browser.esm-Drpn4GzW.js";const I=g.div`
  flex-grow: 1;
  font-size: 12px;
  white-space: nowrap;
`,j=({interruptLoading:t,interruptError:o})=>o?e.jsx(m,{}):t?e.jsx(u,{}):e.jsx(d,{}),n=({isLoading:t=!1,status:o="unknown",progress:p=0,onInterrupt:i=()=>{},interruptLoading:a=!1,interruptError:s=""})=>e.jsxs(l,{center:!0,children:[t&&e.jsx(u,{}),e.jsx(I,{children:o}),e.jsx(x,{value:p}),e.jsx(f,{text:s||"Interrupt",children:e.jsx(c,{"aria-label":s||"Interrupt",disabled:a,onClick:i,children:j({interruptLoading:a,interruptError:s})})})]});n.propTypes={isLoading:r.bool,status:r.string,progress:r.number,onInterrupt:r.func,interruptLoading:r.bool,interruptError:r.string};const k=n;n.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},status:{defaultValue:{value:"'unknown'",computed:!1},description:"",type:{name:"string"},required:!1},progress:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},onInterrupt:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},interruptLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},interruptError:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};export{k as c};
