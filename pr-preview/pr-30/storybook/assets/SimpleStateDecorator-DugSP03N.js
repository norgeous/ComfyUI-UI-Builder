import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{f as S}from"./index-PX7pnrjg.js";import{r as c}from"./index-BwDkhjyp.js";import{I as h}from"./InputRefContext-5kgal7hN.js";import{c as j}from"./index-DnojUL7n.js";const i=(l,{args:r})=>{const{defaultValue:m,defaultValueIndex:p,options:u}=r,o=m??u[p].value,s=c.useRef(),[n,d]=c.useState(o),a=e=>{S()(e),d(e)},f=()=>{var e;a(o),(e=s.current)==null||e.focus()},x=n!==o;return t.jsx("div",{style:{background:"var(--bg2)"},children:t.jsx(h.Provider,{value:s,children:t.jsx(l,{args:{...r,value:n,onChange:a,children:x&&t.jsx(j,{onClick:f})}})})})},D=i;i.__docgenInfo={description:"",methods:[],displayName:"SimpleStateDecorator"};export{D as S};
