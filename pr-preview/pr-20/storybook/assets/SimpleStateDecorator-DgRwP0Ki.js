import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{f as S}from"./index-Ct7ZYFme.js";import{r as c}from"./index-uCp2LrAq.js";import{I as h}from"./InputRefContext-CmPhBSwH.js";import{c as j}from"./index-BMNAc7p0.js";const i=(l,{args:r})=>{const{defaultValue:m,defaultValueIndex:p,options:u}=r,o=m??u[p].value,s=c.useRef(),[n,d]=c.useState(o),a=e=>{S()(e),d(e)},f=()=>{var e;a(o),(e=s.current)==null||e.focus()},x=n!==o;return t.jsx("div",{style:{background:"var(--bg2)"},children:t.jsx(h.Provider,{value:s,children:t.jsx(l,{args:{...r,value:n,onChange:a,children:x&&t.jsx(j,{onClick:f})}})})})},D=i;i.__docgenInfo={description:"",methods:[],displayName:"SimpleStateDecorator"};export{D as S};
