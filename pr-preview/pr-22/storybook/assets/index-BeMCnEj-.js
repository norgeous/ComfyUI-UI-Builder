import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as r}from"./index-D3ylJrlI.js";import{c as p}from"./index-D0Aq9VeK.js";import{c}from"./index-Dmvdrk1-.js";import{W as x,D as h,S as v,e as I}from"./index-n3Wug2HJ.js";import{c as m}from"./index-CHiMFBbc.js";import{P as b}from"./styled-U__tprb7.js";import{p as q}from"./styled-components.browser.esm-Cm6OPFyG.js";const f=q.div`
  font-size: 10px;
  overflow: hidden;
  flex-grow: 1;

  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  display: flex;
  flex-direction: column;
  gap: 4px;
`,V=({interruptLoading:t,interruptError:n})=>n?e.jsx(x,{}):t?e.jsx(v,{}):e.jsx(I,{}),i=({id:t=void 0,loading:n=!1,error:u=void 0,data:s=void 0,status:g=void 0,progress:a=0,onInterrupt:j=()=>{},interruptLoading:d=!1,interruptError:o="",onRemove:y=()=>{}})=>{var l;return u?e.jsxs(p,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,children:[e.jsx(x,{}),e.jsxs(f,{children:[e.jsxs("div",{children:["ERROR: [",u,"] ",(l=s==null?void 0:s.error)==null?void 0:l.message]}),e.jsx("div",{className:"muted",style:{fontSize:10},children:t})]}),e.jsx(m,{lm:!0,text:"Remove",children:e.jsx(c,{"aria-label":"Remove",onClick:y,children:e.jsx(h,{})})})]}):e.jsxs(p,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,children:[n&&e.jsx(v,{}),e.jsxs(f,{children:[e.jsx("div",{children:g}),e.jsx("div",{className:"muted",children:t}),!!a&&e.jsx(b,{value:a})]}),n&&e.jsx(m,{lm:!0,text:o||"Interrupt",children:e.jsx(c,{"aria-label":o||"Interrupt",disabled:d,onClick:j,children:V({interruptLoading:d,interruptError:o})})})]})};i.propTypes={id:r.string,loading:r.bool,error:r.string,data:r.any,status:r.string,progress:r.number,onInterrupt:r.func,interruptLoading:r.bool,interruptError:r.string,onRemove:r.func};const k=i;i.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},error:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},data:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},status:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},progress:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},onInterrupt:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},interruptLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},interruptError:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onRemove:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};export{k as c};
