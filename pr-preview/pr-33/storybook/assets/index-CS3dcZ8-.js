import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{P as m}from"./index-D3ylJrlI.js";import{I as w}from"./InputRefContext-5kgal7hN.js";import{c as S}from"./index-BLrka4M9.js";import{c as _}from"./index-BzafusQ9.js";import{d as E}from"./styled-components.browser.esm-CgTwxB-0.js";import{b as k}from"./bgfg-BUc8g66r.js";import{h as L,j as O,M as C,a as W,k as M,L as N}from"./index-CjMGYxTR.js";import{c as g}from"./index-C7f4sYud.js";import{S as F}from"./SpeechContext-CGWUamV5.js";import{c as K}from"./index-D1HvzO9f.js";const j=c.createContext(null),R=E.input.attrs({type:"text"})`
  ${k(4)}
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
`,z=E.textarea`
  ${k(4)}
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
`,y=({ref:e,value:n,direction:s,onChange:o})=>{const{selectionStart:i,selectionEnd:r}=e.current,f=n.slice(0,i),d=n.slice(i,r),h=n.slice(r),l=d.lastIndexOf(":"),x=d.slice(0,l>0?l:void 0).replace("(",""),u=Number(d.slice(l+1).trim().replace(")",""))||1,p={up:(u+.1).toFixed(1),dn:(u-.1).toFixed(1)}[s],a=p!=="1.0"?`(${x}:${p})`:x,v=`${f+a+h}`;o(v),setTimeout(()=>{e.current.focus(),e.current.selectionStart=i,e.current.selectionEnd=i+a.length},0)},B=e=>{e.ctrlKey&&["ArrowUp","ArrowDown"].includes(e.key)&&e.preventDefault()},V=()=>{const e=c.useContext(w),{value:n,onChange:s,setExtraInputProps:o}=c.useContext(j);return c.useEffect(()=>{o({onKeyDown:B,onKeyUp:r=>{if(r.ctrlKey&&["ArrowUp","ArrowDown"].includes(r.key)){r.preventDefault();const f={ArrowUp:"up",ArrowDown:"dn"}[r.key];y({ref:e,value:n,onChange:s,direction:f})}}})},[s,e,o,n]),t.jsxs(t.Fragment,{children:[t.jsx(g,{label:"Prompt weight up (CTRL + UP)",onClick:()=>y({ref:e,value:n,onChange:s,direction:"up"}),children:t.jsx(L,{})}),t.jsx(g,{label:"Prompt weight down (CTRL + DOWN)",onClick:()=>y({ref:e,value:n,onChange:s,direction:"dn"}),children:t.jsx(O,{})})]})};V.__docgenInfo={description:"",methods:[],displayName:"WeightControls"};const G=(e,n,s,o)=>`${s.slice(0,e)}${o}${s.slice(n)}`,A=()=>{const{id:e,value:n,onChange:s}=c.useContext(j),o=c.useContext(w),{targetId:i,unmutedId:r,setUnmutedId:f,loading:d,error:h,vosk:l,lastSpeechEvent:x}=c.useContext(F),u=i===e,p=r===e;return c.useEffect(()=>{if(u){const{selectionStart:a,selectionEnd:v}=o.current,{correctionCount:T,recentWords:U}=x,b=` ${U}`,$=n.split(" "),q=$.slice(0,-T||$.length).join(" "),D=G(a,v,q,b).trim();s(D),setTimeout(()=>{o.current.selectionStart=v+b.length,o.current.selectionEnd=v+b.length},0)}},[x]),t.jsxs(t.Fragment,{children:[!l&&!d&&t.jsx(g,{label:"Enable Speech Capture",onClick:()=>f(e),children:t.jsx(C,{})}),!l&&d&&u&&t.jsx(W,{}),!l&&d&&!u&&t.jsx(g,{label:"loading elsewhere",children:t.jsx(C,{})}),l&&t.jsx(g,{label:p?"Capturing...":"Muted",value:p,onClick:()=>f(p?void 0:e),children:p?t.jsx(C,{}):t.jsx(M,{})}),h&&u&&t.jsx(K,{children:h})]})};A.__docgenInfo={description:"",methods:[],displayName:"SpeechControls"};const P=()=>{const[e,n]=c.useState(!1);return t.jsx(g,{label:"Word Limit",onClick:()=>n(!e),value:e,children:t.jsx(N,{})})};P.__docgenInfo={description:"",methods:[],displayName:"LimitControls"};const I=({id:e=void 0,label:n=void 0,info:s=void 0,options:o=[],value:i=void 0,onChange:r=()=>{},children:f=null,controlOptions:d=[]})=>{const h=c.useContext(w),[l,x]=c.useState({}),u=c.useMemo(()=>({id:e,value:i,onChange:r,extraInputProps:l,setExtraInputProps:x}),[e,r,i,l,x]),p=t.jsxs(_,{id:e,label:n,info:s,children:[d.includes("weight")&&t.jsx(V,{}),d.includes("speech")&&t.jsx(A,{}),d.includes("limit")&&t.jsx(P,{}),f]});return o.length?t.jsx(j.Provider,{value:u,children:t.jsxs(S,{pad:!0,column:!0,gap:"sm",children:[p,t.jsx(R,{ref:h,id:e,value:i,onChange:a=>r(a.target.value),list:o.length?`${e}-list`:void 0}),!!o.length&&t.jsx("datalist",{id:`${e}-list`,children:o.map(a=>t.jsx("option",{"aria-label":a,value:a},a))})]})}):t.jsx(j.Provider,{value:u,children:t.jsxs(S,{pad:!0,column:!0,gap:"sm",children:[p,t.jsx(z,{ref:h,id:e,value:i,onChange:a=>r(a.target.value),...l})]})})};I.propTypes={id:m.string,label:m.string,info:m.string,options:m.arrayOf(m.string),onChange:m.func,value:m.string,children:m.node,controlOptions:m.arrayOf(m.oneOf(["weight","speech","limit"]))};const ie=I;I.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},controlOptions:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"enum",value:[{value:"'weight'",computed:!1},{value:"'speech'",computed:!1},{value:"'limit'",computed:!1}]}},required:!1}}};export{ie as c};
