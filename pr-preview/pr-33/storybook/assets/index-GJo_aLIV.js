import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{P as x}from"./index-D3ylJrlI.js";import{I as E}from"./InputRefContext-5kgal7hN.js";import{c as T}from"./index-BLrka4M9.js";import{c as _}from"./index-BzafusQ9.js";import{d as A}from"./styled-components.browser.esm-CgTwxB-0.js";import{b as P}from"./bgfg-BUc8g66r.js";import{h as L,j as O,M as S,a as M,k as N,L as F}from"./index-CjMGYxTR.js";import{c as b}from"./index-C7f4sYud.js";import{S as K}from"./SpeechContext-CGWUamV5.js";import{c as R}from"./index-D1HvzO9f.js";const y=d.createContext(null),z=A.input.attrs({type:"text"})`
  ${P(4)}
  border: 1px solid var(--bg5);
  display: block;
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  border-radius: var(--radius);
  padding: 8px 4px;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`,B=A.textarea`
  ${P(4)}
  border: 1px solid var(--bg5);
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--radius);
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  min-height: 33.333px;
  height: 0;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
`,V=(e,o)=>{const{index:r}=o.reduce(({total:n,index:a},s,i)=>{const l=n+s.length+1,p=l>e&&a===-1?i:a;return{total:l,index:p}},{total:0,index:-1});return r},$=({ref:e,value:o,direction:r,onChange:n})=>{const{selectionStart:a,selectionEnd:s}=e.current,i=o.split(" "),l=V(a,i),p=V(s,i),m=i.slice(0,l),h=i.slice(l,p+1),f=i.slice(p+1),u=h.join(" "),c=u.lastIndexOf(":"),g=u.slice(0,c>0?c:void 0).replace("(",""),w=Number(u.slice(c+1).trim().replace(")",""))||1,C={up:(w+.1).toFixed(1),dn:(w-.1).toFixed(1)}[r],v=C!=="1.0"?`(${g}:${C})`:g,j=m.join(" "),I=f.join(" "),W=[j,v,I].join(" ");n(W),setTimeout(()=>{e.current.focus(),e.current.selectionStart=j.length+1,e.current.selectionEnd=j.length+1+v.length},0)},G=e=>{e.ctrlKey&&["ArrowUp","ArrowDown"].includes(e.key)&&e.preventDefault()},U=()=>{const e=d.useContext(E),{value:o,onChange:r,setExtraInputProps:n}=d.useContext(y);return d.useEffect(()=>{n({onKeyDown:G,onKeyUp:s=>{if(s.ctrlKey&&["ArrowUp","ArrowDown"].includes(s.key)){s.preventDefault();const i={ArrowUp:"up",ArrowDown:"dn"}[s.key];$({ref:e,value:o,onChange:r,direction:i})}}})},[r,e,n,o]),t.jsxs(t.Fragment,{children:[t.jsx(b,{label:"Prompt weight up (CTRL + UP)",onClick:()=>$({ref:e,value:o,onChange:r,direction:"up"}),children:t.jsx(L,{})}),t.jsx(b,{label:"Prompt weight down (CTRL + DOWN)",onClick:()=>$({ref:e,value:o,onChange:r,direction:"dn"}),children:t.jsx(O,{})})]})};U.__docgenInfo={description:"",methods:[],displayName:"WeightControls"};const H=(e,o,r,n)=>`${r.slice(0,e)}${n}${r.slice(o)}`,q=()=>{const{id:e,value:o,onChange:r}=d.useContext(y),n=d.useContext(E),{targetId:a,unmutedId:s,setUnmutedId:i,loading:l,error:p,vosk:m,lastSpeechEvent:h}=d.useContext(K),f=a===e,u=s===e;return d.useEffect(()=>{if(f){const{selectionStart:c,selectionEnd:g}=n.current,{correctionCount:w,recentWords:C}=h,v=` ${C}`,j=o.split(" "),I=j.slice(0,-w||j.length).join(" "),W=H(c,g,I,v).trim();r(W),setTimeout(()=>{n.current.selectionStart=g+v.length,n.current.selectionEnd=g+v.length},0)}},[h]),t.jsxs(t.Fragment,{children:[!m&&!l&&t.jsx(b,{label:"Enable Speech Capture",onClick:()=>i(e),children:t.jsx(S,{})}),!m&&l&&f&&t.jsx(M,{}),!m&&l&&!f&&t.jsx(b,{label:"loading elsewhere",children:t.jsx(S,{})}),m&&t.jsx(b,{label:u?"Capturing...":"Muted",value:u,onClick:()=>i(u?void 0:e),children:u?t.jsx(S,{}):t.jsx(N,{})}),p&&f&&t.jsx(R,{children:p})]})};q.__docgenInfo={description:"",methods:[],displayName:"SpeechControls"};const D=()=>{const[e,o]=d.useState(!1);return t.jsx(b,{label:"Word Limit",onClick:()=>o(!e),value:e,children:t.jsx(F,{})})};D.__docgenInfo={description:"",methods:[],displayName:"LimitControls"};const k=({id:e=void 0,label:o=void 0,info:r=void 0,options:n=[],value:a=void 0,onChange:s=()=>{},children:i=null,controlOptions:l=[]})=>{const p=d.useContext(E),[m,h]=d.useState({}),f=d.useMemo(()=>({id:e,value:a,onChange:s,extraInputProps:m,setExtraInputProps:h}),[e,s,a,m,h]),u=t.jsxs(_,{id:e,label:o,info:r,children:[l.includes("weight")&&t.jsx(U,{}),l.includes("speech")&&t.jsx(q,{}),l.includes("limit")&&t.jsx(D,{}),i]});return n.length?t.jsx(y.Provider,{value:f,children:t.jsxs(T,{pad:!0,column:!0,gap:"sm",children:[u,t.jsx(z,{ref:p,id:e,value:a,onChange:c=>s(c.target.value),list:n.length?`${e}-list`:void 0}),!!n.length&&t.jsx("datalist",{id:`${e}-list`,children:n.map(c=>t.jsx("option",{"aria-label":c,value:c},c))})]})}):t.jsx(y.Provider,{value:f,children:t.jsxs(T,{pad:!0,column:!0,gap:"sm",children:[u,t.jsx(B,{ref:p,id:e,value:a,onChange:c=>s(c.target.value),...m})]})})};k.propTypes={id:x.string,label:x.string,info:x.string,options:x.arrayOf(x.string),onChange:x.func,value:x.string,children:x.node,controlOptions:x.arrayOf(x.oneOf(["weight","speech","limit"]))};const le=k;k.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},controlOptions:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"enum",value:[{value:"'weight'",computed:!1},{value:"'speech'",computed:!1},{value:"'limit'",computed:!1}]}},required:!1}}};export{le as c};
