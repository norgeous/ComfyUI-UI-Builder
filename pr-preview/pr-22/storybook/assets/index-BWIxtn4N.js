import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as r}from"./index-D3ylJrlI.js";import{r as x}from"./index-BwDkhjyp.js";import{C as g}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as v}from"./index-D0Aq9VeK.js";import{c as u}from"./index-KviudHZg.js";import{S as h,D as y}from"./index-DH7zSrPd.js";import{c as j}from"./index-CHiMFBbc.js";import{P as b}from"./styled-BVZT0ieL.js";import{p as l}from"./styled-components.browser.esm-Cm6OPFyG.js";const q=l.div`
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
`,w=l.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
`,i=({promptId:t=void 0,type:o=void 0,node:s=void 0,value:m=void 0,max:p=void 0,images:n=void 0})=>{const{bridge:a}=x.useContext(g),d=o==="executing"&&s===null||!1,c=o==="progress",f=()=>{a.updateState("queue",{[t]:void 0})};return e.jsxs(v,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,children:[e.jsx(u,{small:!0,"aria-label":"Select",onClick:()=>a.updateState("queueSelected",{promptId:t}),children:n&&e.jsx(w,{src:`${n[0]}`})}),!d&&e.jsx(h,{}),e.jsxs(q,{children:[e.jsxs("div",{children:[s," ",!d&&o," ",e.jsx("span",{className:"muted",style:{fontSize:10},children:t})]}),c&&e.jsx(b,{value:m,max:p})]}),e.jsx(j,{lm:!0,text:"Remove",children:e.jsx(u,{"aria-label":"Remove",onClick:f,children:e.jsx(y,{})})})]})};i.propTypes={promptId:r.string,type:r.string,node:r.string,value:r.number,max:r.number,images:r.arrayOf(r.string)};const T=i;i.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},node:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},images:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{T as c};
