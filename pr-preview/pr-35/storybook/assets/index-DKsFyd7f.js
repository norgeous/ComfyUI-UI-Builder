import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as t}from"./index-D3ylJrlI.js";import{r as I}from"./index-BwDkhjyp.js";import{C as q}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as x}from"./index-BLrka4M9.js";import{c as a}from"./index-DTXrJjgA.js";import{Q as w,a as S,D as f,e as Q}from"./index-CjMGYxTR.js";import{c as u}from"./index-BfpgPM-d.js";import{P as k}from"./styles-YBY9AB4R.js";import{d as o}from"./styled-components.browser.esm-CgTwxB-0.js";const V=o.button`
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: 4px;
  padding: 0;
`,P=o.div`
  font-size: 10px;
  overflow: hidden;
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
`,R=o.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 37px;
  height: 37px;
  object-fit: contain;
`,h=o.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--accent);
`,c=({promptId:r=void 0,type:p=void 0,node:m=void 0,value:v=void 0,max:j=void 0,images:n=void 0})=>{const{bridge:i}=I.useContext(q),s=p===void 0,d=p==="executing"&&m===null,l=!d&&!s,g=()=>{i.qDelete({promptId:r}),i.updateState("queue",{[r]:void 0})},y=()=>{i.interrupt()},b=()=>{i.updateState("queue",{[r]:void 0})},C=()=>i.updateState("queueSelected",{promptId:r});return e.jsxs(x,{pad:!0,rounded:!0,bgfg:3,style:{display:"inline-flex"},children:[e.jsxs(V,{"aria-label":"Select",onClick:C,style:{width:100,height:40},children:[s&&e.jsx(h,{children:e.jsx(w,{})}),l&&!n&&e.jsx(h,{children:e.jsx(S,{})}),n&&e.jsx(R,{alt:"result",src:`${n[0]}`}),e.jsxs(P,{children:[e.jsx("div",{className:"muted",children:r}),s&&e.jsx("div",{children:"Queued"}),d&&e.jsxs("div",{children:["×",(n==null?void 0:n.length)||0," images"]}),l&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:m}),e.jsx(k,{value:v,max:j})]})]})]}),e.jsxs(x,{column:!0,children:[s&&e.jsx(u,{lm:!0,text:"Cancel",children:e.jsx(a,{small:!0,"aria-label":"Cancel",onClick:g,children:e.jsx(f,{})})}),l&&e.jsx(u,{lm:!0,text:"Interrupt",children:e.jsx(a,{small:!0,"aria-label":"Interrupt",onClick:y,children:e.jsx(Q,{})})}),d&&e.jsx(u,{lm:!0,text:"Remove",children:e.jsx(a,{small:!0,"aria-label":"Remove",onClick:b,children:e.jsx(f,{})})})]})]})};c.propTypes={promptId:t.string,type:t.string,node:t.string,value:t.number,max:t.number,images:t.arrayOf(t.string)};const F=c;c.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},node:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},images:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{F as c};
