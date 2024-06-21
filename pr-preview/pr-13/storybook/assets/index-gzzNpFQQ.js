import{j as a}from"./jsx-runtime-X2b_N9AH.js";import{r as q}from"./index-uCp2LrAq.js";import{P as n}from"./index-D3ylJrlI.js";import{I}from"./InputRefContext-CmPhBSwH.js";import{d as $}from"./deepEqual-_sTZaZ0q.js";import{A as C,f as V}from"./index-DizZy_GM.js";import{c as z}from"./index-CaMEndn5.js";import{c as N}from"./index-DCccdXUQ.js";import{p as t,c as o}from"./styled-components.browser.esm-Drpn4GzW.js";const R=t.div`
  display: flex;
  flex-direction: column;
  gap: 3.33333333px; /* to make it the same height as a text input */
`,g=o`
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: var(--input-bg);
  border: 1px solid var(--bg4);
  border-radius: 100px;
`,h=o`
  border: none;
  border: 2px solid #fff;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: var(--accent);
  cursor: pointer;
`,P=o`
  background: var(--accent);
  height: 8px;
`,A=t.input.attrs({type:"range"})`
  display: block;
  width: 100%;
  height: 20px;
  min-width: 100%;
  box-sizing: border-box;
  accent-color: var(--accent);
  margin: 0;
  background: transparent;
  &::-moz-range-track {
    ${g}
  }
  &::-moz-range-progress {
    ${P}
  }
  &::-moz-range-thumb {
    ${h}
  }

  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    ${g}
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -6px;
    ${h}
  }
`,E=t.div`
  padding: ${({$isPips:i})=>i?"0 10px":0};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`,b=t.div`
  cursor: pointer;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  overflow: hidden;
`,v=t.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,S=t.div`
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 0;
`,u=({id:i=void 0,label:y=void 0,info:w=void 0,options:e=[],value:c=void 0,onChange:p=()=>{},children:j=null})=>{const m=q.useContext(I),s=e.findIndex(r=>r.value===c||$(r.value,c)),l=e.every(({label:r})=>r),f=e[0].label,x=e[e.length-1].label,d=r=>{m.current.focus(),p(r)};return a.jsxs(z,{children:[a.jsx(N,{id:i,label:y,info:w,children:j}),a.jsxs(R,{children:[a.jsx(A,{ref:m,id:i,min:"0",step:"1",max:e.length-1,value:s,onChange:r=>p(e[r.target.value].value)}),a.jsxs(E,{$isPips:l,children:[!l&&f&&a.jsxs(b,{className:"muted",onClick:()=>d(e[Math.max(0,s-1)].value),children:[a.jsx(C,{}),a.jsx(v,{className:"muted",children:f})]}),l&&(e==null?void 0:e.map(({label:r,value:k})=>a.jsx(S,{className:"muted",onClick:()=>d(k),children:r},r))),!l&&x&&a.jsxs(b,{className:"muted",onClick:()=>d(e[Math.min(e.length-1,s+1)].value),children:[a.jsx(v,{className:"muted",children:x}),a.jsx(V,{})]})]})]})]})};u.propTypes={id:n.string,label:n.string,info:n.string,options:n.arrayOf(n.shape({label:n.string,value:n.any})),value:n.any,onChange:n.func,children:n.node};const G=u;u.__docgenInfo={description:"",methods:[],displayName:"InputRange",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"any",required:!1}}}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{G as c};
