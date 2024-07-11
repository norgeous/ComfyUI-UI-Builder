import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as t}from"./index-D3ylJrlI.js";import{r as h}from"./index-BwDkhjyp.js";import{C as j}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as y}from"./index-DhfeuN3W.js";import{c as n}from"./index-KviudHZg.js";import{a as b,D as f,e as C}from"./index-CvT9l5cF.js";import{c as s}from"./index-Dq9VOxrg.js";import{P as I}from"./styles-BVZT0ieL.js";import{p as x}from"./styled-components.browser.esm-Cm6OPFyG.js";const q=x.div`
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
`,w=x.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
`,a=({promptId:i=void 0,type:l=void 0,node:d=void 0,value:v=void 0,max:g=void 0,images:r=void 0})=>{const{bridge:u}=h.useContext(j),p=l===void 0,c=l==="executing"&&d===null||!1,m=!c&&!p,o=()=>{u.updateState("queue",{[i]:void 0})};return e.jsxs(y,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,style:{display:"inline-flex"},children:[!!(r!=null&&r.length)&&e.jsx(n,{small:!0,"aria-label":"Select",onClick:()=>u.updateState("queueSelected",{promptId:i}),children:r&&e.jsx(w,{alt:"result",src:`${r[0]}`})}),m&&e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsxs(q,{children:[e.jsxs("div",{children:[d," ",e.jsx("span",{className:"muted",style:{fontSize:10},children:i})]}),e.jsx(I,{value:v,max:g})]})]}),p&&e.jsx(s,{lm:!0,text:"Cancel",children:e.jsx(n,{small:!0,"aria-label":"Cancel",onClick:o,children:e.jsx(f,{})})}),m&&e.jsx(s,{lm:!0,text:"Interrupt",children:e.jsx(n,{small:!0,"aria-label":"Interrupt",onClick:o,children:e.jsx(C,{})})}),c&&e.jsx(s,{lm:!0,text:"Remove",children:e.jsx(n,{small:!0,"aria-label":"Remove",onClick:o,children:e.jsx(f,{})})})]})};a.propTypes={promptId:t.string,type:t.string,node:t.string,value:t.number,max:t.number,images:t.arrayOf(t.string)};const D=a;a.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},node:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},images:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{D as c};
