import{j as a}from"./jsx-runtime-X2b_N9AH.js";import{r as q}from"./index-uCp2LrAq.js";import{P as n}from"./index-D3ylJrlI.js";import{I}from"./InputRefContext-CmPhBSwH.js";import{d as $}from"./deepEqual-_sTZaZ0q.js";import{A as C,f as V}from"./index-DizZy_GM.js";import{c as z}from"./index-CaMEndn5.js";import{c as N}from"./index-DCccdXUQ.js";import{p as t,c as d}from"./styled-components.browser.esm-Drpn4GzW.js";const R=t.div`
  display: flex;
  flex-direction: column;
  gap: 3.33333333px; /* to make it the same height as a text input */
`,x=d`
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: var(--input-bg);
  border: 1px solid var(--bg4);
  border-radius: 100px;
`,g=d`
  border: none;
  border: 2px solid #fff;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: var(--accent);
  cursor: pointer;
`,P=d`
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
    ${x}
  }
  &::-moz-range-progress {
    ${P}
  }
  &::-moz-range-thumb {
    ${g}
  }

  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    ${x}
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -6px;
    ${g}
  }
`,E=t.div`
  padding: ${({$isPips:i})=>i?"0 10px":0};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`,h=t.div`
  cursor: pointer;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  overflow: hidden;
`,b=t.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,S=t.div`
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 0;
`,o=({id:i=void 0,label:v=void 0,info:y=void 0,options:e=[],value:u=void 0,onChange:c=()=>{},children:w=null})=>{const p=q.useContext(I),j=e.findIndex(r=>r.value===u||$(r.value,u)),l=e.every(({label:r})=>r),m=e[0].label,f=e[e.length-1].label,s=r=>{p.current.focus(),c(r)};return a.jsxs(z,{children:[a.jsx(N,{id:i,label:v,info:y,children:w}),a.jsxs(R,{children:[a.jsx(A,{ref:p,id:i,min:"0",step:"1",max:e.length-1,value:j,onChange:r=>c(e[r.target.value].value)}),a.jsxs(E,{$isPips:l,children:[!l&&m&&a.jsxs(h,{className:"muted",onClick:()=>s(e[0].value),children:[a.jsx(C,{}),a.jsx(b,{className:"muted",children:m})]}),l&&(e==null?void 0:e.map(({label:r,value:k})=>a.jsx(S,{className:"muted",onClick:()=>s(k),children:r},r))),!l&&f&&a.jsxs(h,{className:"muted",onClick:()=>s(e[e.length-1].value),children:[a.jsx(b,{className:"muted",children:f}),a.jsx(V,{})]})]})]})]})};o.propTypes={id:n.string,label:n.string,info:n.string,options:n.arrayOf(n.shape({label:n.string,value:n.any})),value:n.any,onChange:n.func,children:n.node};const H=o;o.__docgenInfo={description:"",methods:[],displayName:"InputRange",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"any",required:!1}}}},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{H as c};
