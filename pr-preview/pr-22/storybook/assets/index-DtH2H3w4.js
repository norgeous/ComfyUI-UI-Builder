import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as t}from"./index-D3ylJrlI.js";import{r as b}from"./index-BwDkhjyp.js";import{C}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as w}from"./index-DhfeuN3W.js";import{c as a}from"./index-KviudHZg.js";import{Q as q,a as I,D as x,e as Q}from"./index-w6ZYeT_F.js";import{c as d}from"./index-Dq9VOxrg.js";import{P as S}from"./styles-BVZT0ieL.js";import{p as u}from"./styled-components.browser.esm-Cm6OPFyG.js";const k=u.button`
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: 4px;
`,V=u.div`
  font-size: 10px;
  overflow: hidden;
  /* flex-grow: 1; */
  text-align: left;

  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 50px;
`,P=u.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 37px;
  height: 37px;
  object-fit: contain;
`,c=({promptId:r=void 0,type:p=void 0,node:m=void 0,value:f=void 0,max:h=void 0,images:n=void 0})=>{const{bridge:i}=b.useContext(C),s=p===void 0,o=p==="executing"&&m===null,l=!o&&!s,v=()=>{i.qDelete({promptId:r}),i.updateState("queue",{[r]:void 0})},g=()=>{i.interrupt()},j=()=>{i.updateState("queue",{[r]:void 0})},y=()=>i.updateState("queueSelected",{promptId:r});return e.jsxs(w,{pad:!0,rounded:!0,bgfg:3,style:{display:"inline-flex"},children:[e.jsxs(k,{"aria-label":"Select",onClick:y,style:{width:100,height:40},children:[s&&e.jsx("div",{style:{width:37,height:37},children:e.jsx(q,{})}),l&&!n&&e.jsx("div",{style:{width:37,height:37},children:e.jsx(I,{})}),n&&e.jsx(P,{alt:"result",src:`${n[0]}`}),e.jsxs(V,{children:[e.jsx("div",{className:"muted",children:r}),s&&e.jsx("div",{children:"Queued"}),o&&e.jsxs("div",{children:["×",n.length," images"]}),l&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:m}),e.jsx(S,{value:f,max:h})]})]})]}),s&&e.jsx(d,{lm:!0,text:"Cancel",children:e.jsx(a,{small:!0,"aria-label":"Cancel",onClick:v,children:e.jsx(x,{})})}),l&&e.jsx(d,{lm:!0,text:"Interrupt",children:e.jsx(a,{small:!0,"aria-label":"Interrupt",onClick:g,children:e.jsx(Q,{})})}),o&&e.jsx(d,{lm:!0,text:"Remove",children:e.jsx(a,{small:!0,"aria-label":"Remove",onClick:j,children:e.jsx(x,{})})})]})};c.propTypes={promptId:t.string,type:t.string,node:t.string,value:t.number,max:t.number,images:t.arrayOf(t.string)};const B=c;c.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},node:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},images:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{B as c};
