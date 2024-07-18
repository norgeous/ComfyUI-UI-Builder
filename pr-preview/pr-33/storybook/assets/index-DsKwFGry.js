import{j as l}from"./jsx-runtime-Nms4Y4qS.js";import{r as V}from"./index-BwDkhjyp.js";import{P as r}from"./index-D3ylJrlI.js";import{I as q}from"./InputRefContext-5kgal7hN.js";import{c as A}from"./index-BLrka4M9.js";import{c as D}from"./index-BgG56ZXN.js";import"./index-usF4-fxs.js";import{d as T}from"./styled-components.browser.esm-CgTwxB-0.js";import{b as $}from"./bgfg-BUc8g66r.js";const j=T.textarea`
  ${$(4)}
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
`,C=e=>{e.ctrlKey&&["ArrowUp","ArrowDown"].includes(e.key)&&e.preventDefault()},d=({id:e=void 0,label:g=void 0,info:y=void 0,value:o=void 0,onChange:c=()=>{},children:h=null})=>{const n=V.useContext(q),w=t=>{if(t.ctrlKey&&["ArrowUp","ArrowDown"].includes(t.key)){t.preventDefault();const{selectionStart:i,selectionEnd:p}=n.current,b=o.slice(0,i),s=o.slice(i,p),v=o.slice(p),a=s.lastIndexOf(":"),u=s.slice(0,a>0?a:void 0).replace("(",""),f=Number(s.slice(a+1).trim().replace(")",""))||1,m={ArrowUp:(f+.1).toFixed(1),ArrowDown:(f-.1).toFixed(1)}[t.key],x=m!=="1.0"?`(${u}:${m})`:u,I=`${b+x+v}`;c(I),setTimeout(()=>{n.current.selectionStart=i,n.current.selectionEnd=i+x.length},0)}};return l.jsxs(A,{pad:!0,column:!0,gap:"sm",children:[l.jsx(D,{id:e,label:g,info:y,children:h}),l.jsx(j,{ref:n,id:e,value:o,onChange:t=>c(t.target.value),onKeyDown:C,onKeyUp:w})]})};d.propTypes={id:r.string,label:r.string,info:r.string,onChange:r.func,value:r.any,children:r.node};const R=d;d.__docgenInfo={description:"",methods:[],displayName:"InputTextarea",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{R as c};
