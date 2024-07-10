import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as t}from"./index-D3ylJrlI.js";import{r as g}from"./index-BwDkhjyp.js";import{C as h}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as j}from"./index-DhfeuN3W.js";import{c as s}from"./index-KviudHZg.js";import{a as y,D as b,e as I}from"./index-CvT9l5cF.js";import{c as m}from"./index-Dq9VOxrg.js";import{P as q}from"./styled-BVZT0ieL.js";import{p as f}from"./styled-components.browser.esm-Cm6OPFyG.js";const w=f.div`
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
`,C=f.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
`,a=({promptId:n=void 0,type:o=void 0,node:d=void 0,value:x=void 0,max:v=void 0,images:r=void 0})=>{const{bridge:u}=g.useContext(h),l=o===void 0,i=o==="executing"&&d===null||!1,p=o==="progress",c=()=>{u.updateState("queue",{[n]:void 0})};return e.jsxs(j,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,style:{display:"inline-flex"},children:[!i&&!l&&e.jsx(y,{}),!!(r!=null&&r.length)&&e.jsx(s,{small:!0,"aria-label":"Select",onClick:()=>u.updateState("queueSelected",{promptId:n}),children:r&&e.jsx(C,{alt:"result",src:`${r[0]}`})}),!i&&e.jsxs(w,{children:[e.jsxs("div",{children:[d," ",o," ",e.jsx("span",{className:"muted",style:{fontSize:10},children:n})]}),p&&e.jsx(q,{value:x,max:v})]}),(l||i)&&e.jsx(m,{lm:!0,text:"Remove",children:e.jsx(s,{"aria-label":"Remove",onClick:c,children:e.jsx(b,{})})}),p&&e.jsx(m,{lm:!0,text:"Interrupt",children:e.jsx(s,{"aria-label":"Interrupt",onClick:c,children:e.jsx(I,{})})})]})};a.propTypes={promptId:t.string,type:t.string,node:t.string,value:t.number,max:t.number,images:t.arrayOf(t.string)};const D=a;a.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},node:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},images:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{D as c};
