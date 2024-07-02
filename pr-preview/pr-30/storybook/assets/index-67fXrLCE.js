import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{P as n}from"./index-D3ylJrlI.js";import{I as C}from"./InputRefContext-5kgal7hN.js";import{S as q}from"./SpeechContext-CGWUamV5.js";import{c as T}from"./index-DcinbNRX.js";import{c as V}from"./index-Dhtc4aXy.js";import{c as M}from"./index-DTDTLdmj.js";import{M as d,S,j as $}from"./index-BGHfn8iy.js";import{c as u}from"./index-wXucM5a4.js";import{p as k}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as E}from"./index-CB5wHgmQ.js";const U=k.textarea`
  ${E(4)}
  border: 1px solid var(--bg5);
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--radius);
  min-height: 60px;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`,l=({id:t=void 0,label:x=void 0,info:g=void 0,value:v=void 0,onChange:p=()=>{},children:h=null})=>{const b=s.useContext(C),{targetId:j,unmutedId:y,setUnmutedId:c,loading:a,error:m,vosk:o,tail:f}=s.useContext(q),r=j===t,i=y===t;return s.useEffect(()=>{r&&p(f)},[f]),e.jsxs(T,{pad:!0,column:!0,gap:"sm",children:[e.jsxs(V,{id:t,label:x,info:g,children:[!o&&!a&&e.jsx(u,{label:"Enable Speech Capture",onClick:()=>c(t),children:e.jsx(d,{})}),!o&&a&&r&&e.jsx(S,{}),!o&&a&&!r&&e.jsx(u,{label:"loading elsewhere",children:e.jsx(d,{})}),o&&e.jsx(u,{label:i?"Unmuted":"Muted",onClick:()=>c(i?void 0:t),children:i?e.jsx(d,{}):e.jsx($,{})}),h]}),m&&r&&e.jsx(M,{children:m}),e.jsx(U,{ref:b,id:t,value:v,onChange:I=>p(I.target.value)})]})};l.propTypes={id:n.string,label:n.string,info:n.string,onChange:n.func,value:n.any,children:n.node};const J=l;l.__docgenInfo={description:"",methods:[],displayName:"InputTextarea",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{J as c};
