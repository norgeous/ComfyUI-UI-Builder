import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{A as h}from"./AppContext-DX1Wlwzv.js";import{F as j}from"./FormContext-7paO4gYw.js";import{W as C}from"./WsContext-9iT9ZgtG.js";import{c as a}from"./index-CHdWR4mw.js";import{c as i}from"./index-Bs5HTjuc.js";import{c as P}from"./index-5LVo37mO.js";import{S,P as w,a as A}from"./index-DizZy_GM.js";import{c as F}from"./index-DheTTISF.js";const m=()=>{const{isGenerating:c}=e.useContext(C),[t,p]=e.useState(!1),{formState:{positivePrompt:n,enableSeedRandomisation:d},updateFormState:x}=e.useContext(j),{executePrompt:r,promptLoading:l,promptError:s}=e.useContext(h),u=()=>{if(d){const f=Math.floor(Math.random()*1e10);x({seed:f})}r()};return e.useEffect(()=>{t&&n&&!c&&r()},[t,n]),o.jsxs(a,{column:!0,children:[s&&o.jsx(P,{children:s}),o.jsxs(a,{children:[!t&&o.jsx(i,{wide:!0,onClick:u,children:l?o.jsx(S,{}):"Generate"}),o.jsx(F,{text:"Automatic Generation (on change to Positive Prompt when the queue is empty)",wide:t,children:o.jsx(i,{variant:"secondary","aria-label":"Automatic Generation",onClick:()=>p(!t),wide:t,children:t?o.jsx(w,{}):o.jsx(A,{})})})]})]})},R=m;m.__docgenInfo={description:"",methods:[],displayName:"FormControls"};export{R as c};
