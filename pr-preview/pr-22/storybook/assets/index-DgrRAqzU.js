import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{P as e}from"./index-D3ylJrlI.js";import{c as p}from"./index-D0Aq9VeK.js";import{c as f}from"./index-KviudHZg.js";import{S as m,D as c}from"./index-CrqPYF-W.js";import{c as v}from"./index-CHiMFBbc.js";import{P as g}from"./styled-BVZT0ieL.js";import{p as x}from"./styled-components.browser.esm-Cm6OPFyG.js";const y=x.div`
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
`,o=({id:q=void 0,loading:V=!1,error:h=void 0,data:j=void 0,status:I=void 0,progress:b=0,onInterrupt:E=()=>{},interruptLoading:w=!1,interruptError:P="",onRemove:i=()=>{},promptId:d=void 0,type:t=void 0,node:u=void 0,value:s=void 0,max:n=void 0})=>{const a=t==="executing"&&u===null||!1,l=t==="progress";return r.jsxs(p,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,style:{maxWidth:90},children:[!a&&r.jsx(m,{}),!1,r.jsxs(y,{children:[!1,r.jsxs("div",{children:[u," ",!a&&t," ",r.jsx("span",{className:"muted",style:{fontSize:10},children:d})]}),l&&r.jsx(g,{value:s,max:n})]}),r.jsx(v,{lm:!0,text:"Remove",children:r.jsx(f,{small:!0,"aria-label":"Remove",onClick:i,children:r.jsx(c,{})})})]})};o.propTypes={id:e.string,loading:e.bool,error:e.string,data:e.any,status:e.string,progress:e.number,onInterrupt:e.func,interruptLoading:e.bool,interruptError:e.string,onRemove:e.func};const N=o;o.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},error:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},data:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},status:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},progress:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},onInterrupt:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},interruptLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},interruptError:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onRemove:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},promptId:{defaultValue:{value:"undefined",computed:!0},required:!1},type:{defaultValue:{value:"undefined",computed:!0},required:!1},node:{defaultValue:{value:"undefined",computed:!0},required:!1},value:{defaultValue:{value:"undefined",computed:!0},required:!1},max:{defaultValue:{value:"undefined",computed:!0},required:!1}}};export{N as c};
