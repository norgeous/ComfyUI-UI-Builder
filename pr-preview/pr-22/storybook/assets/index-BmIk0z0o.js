import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as r}from"./index-D3ylJrlI.js";import{r as g}from"./index-BwDkhjyp.js";import{C as x}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as v}from"./index-D0Aq9VeK.js";import{c as d}from"./index-KviudHZg.js";import{S as y,D as q}from"./index-CrqPYF-W.js";import{c as h}from"./index-CHiMFBbc.js";import{P as j}from"./styled-BVZT0ieL.js";import{p as u}from"./styled-components.browser.esm-Cm6OPFyG.js";const b=u.div`
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
  max-width: 90px;
`,w=u.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
`,o=({promptId:i=void 0,type:t=void 0,node:s=void 0,value:l=void 0,max:p=void 0,images:n=void 0,onRemove:m=()=>{}})=>{const{bridge:c}=g.useContext(x),a=t==="executing"&&s===null||!1,f=t==="progress";return e.jsxs(v,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,children:[e.jsx(d,{small:!0,"aria-label":"Select",onClick:()=>c.updateState("queueSelected",{promptId:i}),children:n&&e.jsx(w,{src:`${n[0]}`})}),!a&&e.jsx(y,{}),e.jsxs(b,{children:[e.jsxs("div",{children:[s," ",!a&&t," ",e.jsx("span",{className:"muted",style:{fontSize:10},children:i})]}),f&&e.jsx(j,{value:l,max:p})]}),e.jsx(h,{lm:!0,text:"Remove",children:e.jsx(d,{small:!0,"aria-label":"Remove",onClick:m,children:e.jsx(q,{})})})]})};o.propTypes={id:r.string,loading:r.bool,error:r.string,data:r.any,status:r.string,progress:r.number,onInterrupt:r.func,interruptLoading:r.bool,interruptError:r.string,onRemove:r.func};const z=o;o.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},required:!1},type:{defaultValue:{value:"undefined",computed:!0},required:!1},node:{defaultValue:{value:"undefined",computed:!0},required:!1},value:{defaultValue:{value:"undefined",computed:!0},required:!1},max:{defaultValue:{value:"undefined",computed:!0},required:!1},images:{defaultValue:{value:"undefined",computed:!0},required:!1},onRemove:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},id:{description:"",type:{name:"string"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},error:{description:"",type:{name:"string"},required:!1},data:{description:"",type:{name:"any"},required:!1},status:{description:"",type:{name:"string"},required:!1},progress:{description:"",type:{name:"number"},required:!1},onInterrupt:{description:"",type:{name:"func"},required:!1},interruptLoading:{description:"",type:{name:"bool"},required:!1},interruptError:{description:"",type:{name:"string"},required:!1}}};export{z as c};
