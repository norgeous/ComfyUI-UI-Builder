import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{F as x}from"./FormContext-BvePLfBF.js";import{c as I}from"./index-DcinbNRX.js";import{P as e}from"./index-D3ylJrlI.js";import{I as F}from"./InputRefContext-5kgal7hN.js";import{c as R}from"./index-DnojUL7n.js";import{c as S}from"./index-DO6smgbx.js";import{c as _}from"./index-DFpVD7FA.js";import{c as k}from"./index-BY5mfqXO.js";import{c as w}from"./index-DIRLWujp.js";import{c as P}from"./index-PFzOomvv.js";import{c as B}from"./index-ZhHcGxn4.js";import{c as D}from"./index-DouP1uXf.js";import{c as E}from"./index-DKhXCuyq.js";import{c as G}from"./index-67fXrLCE.js";import{c as N}from"./index--JIU3qES.js";import{c as T}from"./index-DNk64Ug_.js";import{c as z}from"./index-Cf09JLRL.js";import{p as y,c as A}from"./styled-components.browser.esm-Cm6OPFyG.js";const H={select:_,range:k,textarea:w,text:P,number:B,checkbox:T,selectckpt:D,fileupload:E,speech:G,seed:N},f=({type:o=void 0,id:a=void 0,label:n=void 0,info:c=void 0,defaultValue:r=void 0,value:i=void 0,onChange:p=()=>{},onChangeData:u={},...m})=>{const d=H[o]||S,g=l.useRef(),{formState:C,updateFormState:j}=l.useContext(x),v=i??C[a],h=s=>{const q={[a]:s,...u};j(q),p(s)},V=()=>{var s;h(r),(s=g.current)==null||s.focus()},b=v!==r;return t.jsx(F.Provider,{value:g,children:t.jsx(d,{...m,id:a,type:o,label:n,info:c,value:v,onChange:h,children:b&&t.jsx(R,{onClick:V})})})};f.propTypes={type:e.string,id:e.string,label:e.string,info:e.string,defaultValue:e.any,value:e.any,onChange:e.func,onChangeData:e.object};f.__docgenInfo={description:"",methods:[],displayName:"FormItem",props:{type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},defaultValue:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onChangeData:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};const J=y.div`
  display: grid;
  grid-template-columns: 50% 50%;
`,K=y.div`
  ${({colSpan:o})=>o===2&&A`
      grid-column: 1 / span 2;
    `}
`,$=()=>{const{formConfig:o}=l.useContext(x),a=[...new Set(o.map(({group:n})=>n))];return t.jsx(I,{pad:!0,column:!0,gap:"md",scrollable:!0,children:a.map(n=>{const c=o.filter(({group:r})=>r===n);return t.jsx(z,{title:n,children:t.jsx(J,{children:c.map(({id:r,colSpan:i,defaultValue:p,defaultValueIndex:u,options:m,...d})=>t.jsx(K,{colSpan:i,children:t.jsx(f,{...d,id:r,defaultValue:p??m[u].value,options:m})},r))})},n)})})},ue=$;$.__docgenInfo={description:"",methods:[],displayName:"FormBuilder"};export{ue as c};
