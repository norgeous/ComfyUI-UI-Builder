import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as r}from"./index-D3ylJrlI.js";import{c as m}from"./index-D0Aq9VeK.js";import{c}from"./index-KviudHZg.js";import{S as v,D as g}from"./index-CrqPYF-W.js";import{c as x}from"./index-CHiMFBbc.js";import{P as y}from"./styled-BVZT0ieL.js";import{p as d}from"./styled-components.browser.esm-Cm6OPFyG.js";const q=d.div`
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
`,V=d.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
`,u=({id:h=void 0,loading:j=!1,error:b=void 0,data:I=void 0,status:w=void 0,progress:E=0,onInterrupt:P=()=>{},interruptLoading:R=!1,interruptError:$="",onRemove:n=()=>{},promptId:s=void 0,type:t=void 0,node:o=void 0,value:l=void 0,max:p=void 0,images:a=void 0})=>{const i=t==="executing"&&o===null||!1,f=t==="progress";return e.jsxs(m,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,style:{maxWidth:90},children:[!i&&e.jsx(v,{}),e.jsxs(q,{children:[e.jsxs("div",{children:[o," ",!i&&t," ",e.jsx("span",{className:"muted",style:{fontSize:10},children:s})]}),f&&e.jsx(y,{value:l,max:p})]}),a&&e.jsx(V,{src:`${a[0]}`}),e.jsx(x,{lm:!0,text:"Remove",children:e.jsx(c,{small:!0,"aria-label":"Remove",onClick:n,children:e.jsx(g,{})})})]})};u.propTypes={id:r.string,loading:r.bool,error:r.string,data:r.any,status:r.string,progress:r.number,onInterrupt:r.func,interruptLoading:r.bool,interruptError:r.string,onRemove:r.func};const _=u;u.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},error:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},data:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},status:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},progress:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},onInterrupt:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},interruptLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},interruptError:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onRemove:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},promptId:{defaultValue:{value:"undefined",computed:!0},required:!1},type:{defaultValue:{value:"undefined",computed:!0},required:!1},node:{defaultValue:{value:"undefined",computed:!0},required:!1},value:{defaultValue:{value:"undefined",computed:!0},required:!1},max:{defaultValue:{value:"undefined",computed:!0},required:!1},images:{defaultValue:{value:"undefined",computed:!0},required:!1}}};export{_ as c};
