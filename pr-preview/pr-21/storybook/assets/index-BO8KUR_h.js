import{j as a}from"./jsx-runtime-X2b_N9AH.js";import{r as $}from"./index-uCp2LrAq.js";import{P as n}from"./index-D3ylJrlI.js";import{I as q}from"./InputRefContext-CmPhBSwH.js";import{d as I}from"./deepEqual-_sTZaZ0q.js";import{A as C,f as z}from"./index-DizZy_GM.js";import{c as R}from"./index-CaMEndn5.js";import{c as V}from"./index-BXXglQ6L.js";import{p as t,c}from"./styled-components.browser.esm-Drpn4GzW.js";const N=t.div`
  display: flex;
  flex-direction: column;
  gap: 3.33333333px; /* to make it the same height as a text input */
`,P=t.div`
  height: 14px;
  padding-top: 6px;
`,h=c`
  width: 100%;
  height: 8px;
  cursor: pointer;
  border: 1px solid var(--bg4);
  border-radius: 100px;
`,b=c`
  border: none;
  border: 2px solid #fff;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
`,A=c`
  background: transparent;
  height: 8px;
`,E=t.input.attrs({type:"range"})`
  display: block;
  width: 100%;
  height: 8px;
  min-width: 100%;
  box-sizing: border-box;
  accent-color: var(--accent);
  margin: 0;
  border-radius: 6px;
  background: transparent;
  background-image: linear-gradient(90deg, var(--accent), var(--accent));
  background-repeat: no-repeat;
  background-size: ${({value:i,max:l})=>`${100*(i/l)}%`} 100%;

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  &::-moz-range-track {
    ${h}
  }
  &::-moz-range-progress {
    ${A}
  }
  &::-moz-range-thumb {
    ${b}
  }

  appearance: none;
  &::-webkit-slider-runnable-track {
    ${h}
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -6px;
    ${b}
  }
`,S=t.div`
  padding: ${({$isPips:i})=>i?"0 10px":0};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`,v=t.div`
  cursor: pointer;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  overflow: hidden;
`,y=t.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,T=t.div`
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 0;
`,u=({id:i=void 0,label:l=void 0,info:j=void 0,options:e=[],value:p=void 0,onChange:m=()=>{},children:k=null})=>{const f=$.useContext(q),d=e.findIndex(r=>r.value===p||I(r.value,p)),s=e.every(({label:r})=>r),x=e[0].label,g=e[e.length-1].label,o=r=>{f.current.focus(),m(r)};return a.jsxs(R,{children:[a.jsx(V,{id:i,label:l,info:j,children:k}),a.jsxs(N,{children:[a.jsx(P,{children:a.jsx(E,{ref:f,id:i,min:"0",step:"1",max:e.length-1,value:d,onChange:r=>m(e[r.target.value].value)})}),a.jsxs(S,{$isPips:s,children:[!s&&x&&a.jsxs(v,{className:"muted",onClick:()=>o(e[Math.max(0,d-1)].value),children:[a.jsx(C,{}),a.jsx(y,{className:"muted",children:x})]}),s&&(e==null?void 0:e.map(({label:r,value:w})=>a.jsx(T,{className:"muted",onClick:()=>o(w),children:r},r))),!s&&g&&a.jsxs(v,{className:"muted",onClick:()=>o(e[Math.min(e.length-1,d+1)].value),children:[a.jsx(y,{className:"muted",children:g}),a.jsx(z,{})]})]})]})]})};u.propTypes={id:n.string,label:n.string,info:n.string,options:n.arrayOf(n.shape({label:n.string,value:n.any})),value:n.any,onChange:n.func,children:n.node};const H=u;u.__docgenInfo={description:"",methods:[],displayName:"InputRange",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"any",required:!1}}}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{H as c};
