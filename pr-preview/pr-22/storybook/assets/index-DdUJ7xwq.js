import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as t}from"./index-D3ylJrlI.js";import{r as v}from"./index-BwDkhjyp.js";import{C as g}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as h}from"./index-DhfeuN3W.js";import{c as u}from"./index-KviudHZg.js";import{a as y,D as j}from"./index-CRfdTz-P.js";import{c as b}from"./index-Dq9VOxrg.js";import{P as q}from"./styled-BVZT0ieL.js";import{p as l}from"./styled-components.browser.esm-Cm6OPFyG.js";const w=l.div`
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
`,C=l.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
`,n=({promptId:i=void 0,type:o=void 0,node:s=void 0,value:p=void 0,max:m=void 0,images:r=void 0})=>{const{bridge:a}=v.useContext(g),c=o===void 0,d=o==="executing"&&s===null||!1,f=o==="progress",x=()=>{a.updateState("queue",{[i]:void 0})};return e.jsxs(h,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,style:{display:"inline-flex"},children:[!d&&!c&&e.jsx(y,{}),!!(r!=null&&r.length)&&e.jsx(u,{small:!0,"aria-label":"Select",onClick:()=>a.updateState("queueSelected",{promptId:i}),children:r&&e.jsx(C,{alt:"result",src:`${r[0]}`})}),!d&&e.jsxs(w,{children:[e.jsxs("div",{children:[s," ",o," ",e.jsx("span",{className:"muted",style:{fontSize:10},children:i})]}),f&&e.jsx(q,{value:p,max:m})]}),e.jsx(b,{lm:!0,text:"Remove",children:e.jsx(u,{"aria-label":"Remove",onClick:x,children:e.jsx(j,{})})})]})};n.propTypes={promptId:t.string,type:t.string,node:t.string,value:t.number,max:t.number,images:t.arrayOf(t.string)};const z=n;n.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},node:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},images:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{z as c};
