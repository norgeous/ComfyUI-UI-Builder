import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as t}from"./index-D3ylJrlI.js";import{r as j}from"./index-BwDkhjyp.js";import{C as y}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as b}from"./index-DhfeuN3W.js";import{c as a}from"./index-KviudHZg.js";import{Q as w,a as C,D as f,e as I}from"./index-w6ZYeT_F.js";import{c as d}from"./index-Dq9VOxrg.js";import{P as q}from"./styles-BVZT0ieL.js";import{p as u}from"./styled-components.browser.esm-Cm6OPFyG.js";const Q=u.button`
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: 4px;
`,k=u.div`
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
`,S=u.img.attrs({crossOrigin:"anonymous"})`
  display: block;
  width: 37px;
  height: 37px;
  object-fit: contain;
`,c=({promptId:n=void 0,type:p=void 0,node:m=void 0,value:h=void 0,max:g=void 0,images:r=void 0})=>{const{bridge:x}=j.useContext(y),i=p===void 0,s=p==="executing"&&m===null,o=!s&&!i,l=()=>{x.updateState("queue",{[n]:void 0})},v=()=>x.updateState("queueSelected",{promptId:n});return e.jsxs(b,{pad:!0,rounded:!0,bgfg:3,style:{display:"inline-flex"},children:[e.jsxs(Q,{small:!0,"aria-label":"Select",onClick:v,style:{width:100,height:40},children:[i&&e.jsx("div",{style:{width:37,height:37},children:e.jsx(w,{})}),o&&!r&&e.jsx("div",{style:{width:37,height:37},children:e.jsx(C,{})}),r&&e.jsx(S,{alt:"result",src:`${r[0]}`}),e.jsxs(k,{children:[e.jsx("div",{className:"muted",children:n}),i&&e.jsx("div",{children:"Queued"}),s&&e.jsxs("div",{children:["×",r.length," images"]}),o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:m}),e.jsx(q,{value:h,max:g})]})]})]}),i&&e.jsx(d,{lm:!0,text:"Cancel",children:e.jsx(a,{small:!0,"aria-label":"Cancel",onClick:l,children:e.jsx(f,{})})}),o&&e.jsx(d,{lm:!0,text:"Interrupt",children:e.jsx(a,{small:!0,"aria-label":"Interrupt",onClick:l,children:e.jsx(I,{})})}),s&&e.jsx(d,{lm:!0,text:"Remove",children:e.jsx(a,{small:!0,"aria-label":"Remove",onClick:l,children:e.jsx(f,{})})})]})};c.propTypes={promptId:t.string,type:t.string,node:t.string,value:t.number,max:t.number,images:t.arrayOf(t.string)};const z=c;c.__docgenInfo={description:"",methods:[],displayName:"QueueItem",props:{promptId:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},node:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},images:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{z as c};
