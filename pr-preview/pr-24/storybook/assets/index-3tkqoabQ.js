import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as A}from"./index-uCp2LrAq.js";import{P as r}from"./index-D3ylJrlI.js";import{I as j}from"./InputRefContext-CmPhBSwH.js";import{c as D}from"./index-qDzr2xAS.js";import{c as V}from"./index-BZF6B-3v.js";import{g as q,h as T}from"./index-BiKVFdKX.js";import{p as k}from"./styled-components.browser.esm-Drpn4GzW.js";const C=k.textarea`
  background: var(--bg3);
  color: var(--fg3);
  border: 1px solid var(--bg4);

  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--radius);
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  min-height: 80px;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
`,U=e=>{e.ctrlKey&&["ArrowUp","ArrowDown"].includes(e.key)&&e.preventDefault()},c=({id:e=void 0,label:g=void 0,info:y=void 0,value:n=void 0,onChange:d=()=>{},children:w=null})=>{const i=A.useContext(j),h=t=>{if(t.ctrlKey&&["ArrowUp","ArrowDown"].includes(t.key)){t.preventDefault();const{selectionStart:s,selectionEnd:p}=i.current,v=n.slice(0,s),a=n.slice(s,p),b=n.slice(p),l=a.lastIndexOf(":"),u=a.slice(0,l>0?l:void 0).replace("(",""),f=Number(a.slice(l+1).trim().replace(")",""))||1,m={ArrowUp:(f+.1).toFixed(1),ArrowDown:(f-.1).toFixed(1)}[t.key],x=m!=="1.0"?`(${u}:${m})`:u,I=`${v+x+b}`;d(I),setTimeout(()=>{i.current.selectionStart=s,i.current.selectionEnd=s+x.length},0)}};return o.jsxs(D,{pad:!0,column:!0,gap:"sm",children:[o.jsxs(V,{id:e,label:g,info:y,children:[o.jsx(q,{}),o.jsx(T,{}),w]}),o.jsx(C,{ref:i,id:e,value:n,onChange:t=>d(t.target.value),onKeyDown:U,onKeyUp:h})]})};c.propTypes={id:r.string,label:r.string,info:r.string,onChange:r.func,value:r.any,children:r.node};const R=c;c.__docgenInfo={description:"",methods:[],displayName:"InputTextarea",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{R as c};
