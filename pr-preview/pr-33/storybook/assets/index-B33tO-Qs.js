import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{P as p}from"./index-D3ylJrlI.js";import{I as w}from"./InputRefContext-5kgal7hN.js";import{c as k}from"./index-BLrka4M9.js";import{c as _}from"./index-BzafusQ9.js";import{d as S}from"./styled-components.browser.esm-CgTwxB-0.js";import{b as W}from"./bgfg-BUc8g66r.js";import{h as L,j as M,M as b,a as O,k as N,L as K}from"./index-CjMGYxTR.js";import{c as g}from"./index-C7f4sYud.js";import{S as R}from"./SpeechContext-CGWUamV5.js";import{c as z}from"./index-D1HvzO9f.js";const v=c.createContext(null),F=S.input.attrs({type:"text"})`
  ${W(4)}
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
`,B=S.textarea`
  ${W(4)}
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
`,E=(t,n)=>{const{index:s}=n.reduce(({total:o,index:a},r,i)=>{const l=o+r.length+1,d=l>t&&a===-1?i:a;return{total:l,index:d}},{total:0,index:-1});return s},y=({ref:t,value:n,direction:s,onChange:o})=>{const{selectionStart:a,selectionEnd:r}=t.current,i=n.split(" "),l=E(a,i),d=E(r,i),u=i.slice(0,l),x=i.slice(l,d+1),m=i.slice(d+1);console.log(`${u.join(" ")} |${x.join(" ")}| ${m.join(" ")}`.trim())},G=t=>{t.ctrlKey&&["ArrowUp","ArrowDown"].includes(t.key)&&t.preventDefault()},A=()=>{const t=c.useContext(w),{value:n,onChange:s,setExtraInputProps:o}=c.useContext(v);return c.useEffect(()=>{o({onKeyDown:G,onKeyUp:r=>{if(r.ctrlKey&&["ArrowUp","ArrowDown"].includes(r.key)){r.preventDefault();const i={ArrowUp:"up",ArrowDown:"dn"}[r.key];y({ref:t,value:n,onChange:s,direction:i})}}})},[s,t,o,n]),e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"Prompt weight up (CTRL + UP)",onClick:()=>y({ref:t,value:n,onChange:s,direction:"up"}),children:e.jsx(L,{})}),e.jsx(g,{label:"Prompt weight down (CTRL + DOWN)",onClick:()=>y({ref:t,value:n,onChange:s,direction:"dn"}),children:e.jsx(M,{})})]})};A.__docgenInfo={description:"",methods:[],displayName:"WeightControls"};const H=(t,n,s,o)=>`${s.slice(0,t)}${o}${s.slice(n)}`,P=()=>{const{id:t,value:n,onChange:s}=c.useContext(v),o=c.useContext(w),{targetId:a,unmutedId:r,setUnmutedId:i,loading:l,error:d,vosk:u,lastSpeechEvent:x}=c.useContext(R),m=a===t,h=r===t;return c.useEffect(()=>{if(m){const{selectionStart:f,selectionEnd:j}=o.current,{correctionCount:V,recentWords:U}=x,C=` ${U}`,$=n.split(" "),q=$.slice(0,-V||$.length).join(" "),D=H(f,j,q,C).trim();s(D),setTimeout(()=>{o.current.selectionStart=j+C.length,o.current.selectionEnd=j+C.length},0)}},[x]),e.jsxs(e.Fragment,{children:[!u&&!l&&e.jsx(g,{label:"Enable Speech Capture",onClick:()=>i(t),children:e.jsx(b,{})}),!u&&l&&m&&e.jsx(O,{}),!u&&l&&!m&&e.jsx(g,{label:"loading elsewhere",children:e.jsx(b,{})}),u&&e.jsx(g,{label:h?"Capturing...":"Muted",value:h,onClick:()=>i(h?void 0:t),children:h?e.jsx(b,{}):e.jsx(N,{})}),d&&m&&e.jsx(z,{children:d})]})};P.__docgenInfo={description:"",methods:[],displayName:"SpeechControls"};const T=()=>{const[t,n]=c.useState(!1);return e.jsx(g,{label:"Word Limit",onClick:()=>n(!t),value:t,children:e.jsx(K,{})})};T.__docgenInfo={description:"",methods:[],displayName:"LimitControls"};const I=({id:t=void 0,label:n=void 0,info:s=void 0,options:o=[],value:a=void 0,onChange:r=()=>{},children:i=null,controlOptions:l=[]})=>{const d=c.useContext(w),[u,x]=c.useState({}),m=c.useMemo(()=>({id:t,value:a,onChange:r,extraInputProps:u,setExtraInputProps:x}),[t,r,a,u,x]),h=e.jsxs(_,{id:t,label:n,info:s,children:[l.includes("weight")&&e.jsx(A,{}),l.includes("speech")&&e.jsx(P,{}),l.includes("limit")&&e.jsx(T,{}),i]});return o.length?e.jsx(v.Provider,{value:m,children:e.jsxs(k,{pad:!0,column:!0,gap:"sm",children:[h,e.jsx(F,{ref:d,id:t,value:a,onChange:f=>r(f.target.value),list:o.length?`${t}-list`:void 0}),!!o.length&&e.jsx("datalist",{id:`${t}-list`,children:o.map(f=>e.jsx("option",{"aria-label":f,value:f},f))})]})}):e.jsx(v.Provider,{value:m,children:e.jsxs(k,{pad:!0,column:!0,gap:"sm",children:[h,e.jsx(B,{ref:d,id:t,value:a,onChange:f=>r(f.target.value),...u})]})})};I.propTypes={id:p.string,label:p.string,info:p.string,options:p.arrayOf(p.string),onChange:p.func,value:p.string,children:p.node,controlOptions:p.arrayOf(p.oneOf(["weight","speech","limit"]))};const le=I;I.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},controlOptions:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"enum",value:[{value:"'weight'",computed:!1},{value:"'speech'",computed:!1},{value:"'limit'",computed:!1}]}},required:!1}}};export{le as c};
