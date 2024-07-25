import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{P as u}from"./index-D3ylJrlI.js";import{I}from"./InputRefContext-5kgal7hN.js";import{c as E}from"./index-BLrka4M9.js";import{c as D}from"./index-CIPRddg1.js";import{d as k}from"./styled-components.browser.esm-CgTwxB-0.js";import{b as V}from"./bgfg-BUc8g66r.js";import{h as _,j as L,M as w,a as O,k as M,L as N}from"./index-CjMGYxTR.js";import{c as g}from"./index-BjfiRrC2.js";import{S as W}from"./SpeechContext-CGWUamV5.js";import{c as F}from"./index-D1HvzO9f.js";const C=s.createContext(null),K=k.input.attrs({type:"text"})`
  ${V(4)}
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
`,R=k.textarea`
  ${V(4)}
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
`,z=t=>{t.ctrlKey&&["ArrowUp","ArrowDown"].includes(t.key)&&t.preventDefault()},A=()=>{const t=s.useContext(I),{value:i,onChange:m,setExtraInputProps:n}=s.useContext(C),f=l=>{if(l.ctrlKey&&["ArrowUp","ArrowDown"].includes(l.key)){l.preventDefault();const{selectionStart:p,selectionEnd:c}=t.current,x=i.slice(0,p),o=i.slice(p,c),h=i.slice(c),a=o.lastIndexOf(":"),d=o.slice(0,a>0?a:void 0).replace("(",""),r=Number(o.slice(a+1).trim().replace(")",""))||1,j={ArrowUp:(r+.1).toFixed(1),ArrowDown:(r-.1).toFixed(1)}[l.key],b=j!=="1.0"?`(${d}:${j})`:d,v=`${x+b+h}`;m(v),setTimeout(()=>{t.current.selectionStart=p,t.current.selectionEnd=p+b.length},0)}};return s.useEffect(()=>{n({onKeyDown:z,onKeyUp:f})},[]),e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"Prompt weight up (CTRL + UP)",onClick:()=>{},children:e.jsx(_,{})}),e.jsx(g,{label:"Prompt weight down (CTRL + DOWN)",onClick:()=>{},children:e.jsx(L,{})})]})};A.__docgenInfo={description:"",methods:[],displayName:"WeightControls"};const B=(t,i,m,n)=>`${m.slice(0,t)}${n}${m.slice(i)}`,P=()=>{const{id:t,value:i,onChange:m}=s.useContext(C),n=s.useContext(I),{targetId:f,unmutedId:l,setUnmutedId:p,loading:c,error:x,vosk:o,lastSpeechEvent:h}=s.useContext(W),a=f===t,d=l===t;return s.useEffect(()=>{if(a){const{correctionCount:r,recentWords:j}=h,b=n.current.selectionStart,v=n.current.selectionEnd,y=` ${j}`,S=i.split(" "),U=S.slice(0,-r||S.length).join(" "),q=B(b,v,U,y).trim();m(q),setTimeout(()=>{n.current.selectionStart=v+y.length,n.current.selectionEnd=v+y.length},0)}},[h]),e.jsxs(e.Fragment,{children:[!o&&!c&&e.jsx(g,{label:"Enable Speech Capture",onClick:()=>p(t),children:e.jsx(w,{})}),!o&&c&&a&&e.jsx(O,{}),!o&&c&&!a&&e.jsx(g,{label:"loading elsewhere",children:e.jsx(w,{})}),o&&e.jsx(g,{label:d?"Capturing...":"Muted",value:d,onClick:()=>p(d?void 0:t),children:d?e.jsx(w,{}):e.jsx(M,{})}),x&&a&&e.jsx(F,{children:x})]})};P.__docgenInfo={description:"",methods:[],displayName:"SpeechControls"};const T=()=>{const[t,i]=s.useState(!1);return e.jsx(g,{label:"Word Limit",onClick:()=>i(!t),value:t,children:e.jsx(N,{})})};T.__docgenInfo={description:"",methods:[],displayName:"LimitControls"};const $=({id:t=void 0,label:i=void 0,info:m=void 0,options:n=[],value:f=void 0,onChange:l=()=>{},children:p=null,controlOptions:c=[]})=>{const x=s.useContext(I),[o,h]=s.useState({}),a=s.useMemo(()=>({id:t,value:f,onChange:l,extraInputProps:o,setExtraInputProps:h}),[t,l,f,o,h]),d=e.jsxs(D,{id:t,label:i,info:m,children:[c.includes("weight")&&e.jsx(A,{}),c.includes("speech")&&e.jsx(P,{}),c.includes("limit")&&e.jsx(T,{}),p]});return n.length?e.jsx(C.Provider,{value:a,children:e.jsxs(E,{pad:!0,column:!0,gap:"sm",children:[d,e.jsx(K,{ref:x,id:t,value:f,onChange:r=>l(r.target.value),list:n.length?`${t}-list`:void 0}),!!n.length&&e.jsx("datalist",{id:`${t}-list`,children:n.map(r=>e.jsx("option",{"aria-label":r,value:r},r))})]})}):e.jsx(C.Provider,{value:a,children:e.jsxs(E,{pad:!0,column:!0,gap:"sm",children:[d,e.jsx(R,{ref:x,id:t,value:f,onChange:r=>l(r.target.value),...o})]})})};$.propTypes={id:u.string,label:u.string,info:u.string,options:u.arrayOf(u.string),onChange:u.func,value:u.string,children:u.node,controlOptions:u.arrayOf(u.oneOf(["weight","speech","limit"]))};const se=$;$.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},controlOptions:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"enum",value:[{value:"'weight'",computed:!1},{value:"'speech'",computed:!1},{value:"'limit'",computed:!1}]}},required:!1}}};export{se as c};
