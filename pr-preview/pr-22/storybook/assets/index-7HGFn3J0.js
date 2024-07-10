import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as r}from"./index-D3ylJrlI.js";import{r as h}from"./index-BwDkhjyp.js";import{C as j}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as y}from"./index-DhfeuN3W.js";import{c as i}from"./index-KviudHZg.js";import{a as b,D as f,e as C}from"./index-CvT9l5cF.js";import{c as a}from"./index-Dq9VOxrg.js";import{P as I}from"./styled-BVZT0ieL.js";import{p as x}from"./styled-components.browser.esm-Cm6OPFyG.js";const q=x.div`
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
`,l=({promptId:o=void 0,type:n=void 0,node:d=void 0,value:v=void 0,max:g=void 0,images:t=void 0})=>{const{bridge:u}=h.useContext(j),p=n===void 0,c=n==="executing"&&d===null||!1,m=n==="progress",s=()=>{u.updateState("queue",{[o]:void 0})};return e.jsxs(y,{center:!0,pad:!0,rounded:!0,gap:"md",bgfg:3,style:{display:"inline-flex"},children:[!c&&!p&&e.jsx(b,{}),!!(t!=null&&t.length)&&e.jsx(i,{small:!0,"aria-label":"Select",onClick:()=>u.updateState("queueSelected",{promptId:o}),children:t&&e.jsx(w,{alt:"result",src:`${t[0]}`})}),m&&e.jsxs(q,{children:[e.jsxs("div",{children:[d," ",n," ",e.jsx("span",{className:"muted",style:{fontSize:10},children:o})]}),e.jsx(I,{value:v,max:g})]}),p&&e.jsx(a,{lm:!0,text:"Cancel",children:e.jsx(i,{"aria-label":"Cencel",onClick:s,children:e.jsx(f,{})})}),m&&e.jsx(a,{lm:!0,text:"Interrupt",children:e.jsx(i,{"aria-label":"Interrupt",onClick:s,children:e.jsx(C,{})})}),c&&e.jsx(a,{lm:!0,text:"Remove",children:e.jsx(i,{"aria-label":"Remove",onClick:s,children:e.jsx(f,{})})})]})};l.propTypes={promptId:r.string,type:r.string,node:r.string,value:r.number,max:r.number,images:r.arrayOf(r.string)};const D=l;l.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},node:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},images:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{D as c};
