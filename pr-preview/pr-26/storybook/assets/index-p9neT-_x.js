import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{r as j}from"./index-uCp2LrAq.js";import{P as e}from"./index-D3ylJrlI.js";import{I as v}from"./InputRefContext-CmPhBSwH.js";import{c as x}from"./index-D8p00pM4.js";import{c as q}from"./index-qDzr2xAS.js";import{c as b}from"./index-BZDIBKFQ.js";import{c as C}from"./index-DWpgm1JM.js";import{p}from"./styled-components.browser.esm-Drpn4GzW.js";const V=p.input.attrs({type:"file"})`
  display: none;
`,F=p.img`
  width: 200px;
  max-width: 100%;
  margin: 0 auto;
  display: block;
`,I=[".jpg",".jpeg",".jfif",".pjpeg",".pjp",".png",".webp"],r=({id:d=void 0,defaultValue:u=void 0,value:a=void 0,options:c=[],onChange:i=()=>{},onFileUpload:f=()=>{},error:o=void 0,...m})=>{const s=j.useContext(v),g=n=>i(n),y=n=>{if(n.target.files){const l=n.target.files[0];f(l);const h=URL.createObjectURL(l);i(h)}};return t.jsxs(t.Fragment,{children:[t.jsx(x,{...m,id:d,options:c,defaultValue:u,value:a,onChange:g}),t.jsxs(q,{pad:!0,column:!0,gap:"sm",children:[t.jsx(C,{variant:"secondary",onClick:()=>s.current.click(),children:"Choose a new file to upload..."}),a&&t.jsx(F,{alt:"",src:a}),t.jsx(V,{ref:s,accept:I.join(","),onChange:y}),o&&t.jsx(b,{children:o})]})]})};r.propTypes={id:e.string,label:e.string,info:e.string,options:e.arrayOf(e.shape({label:e.string,value:e.string})),defaultValue:e.string,value:e.string,onChange:e.func,onFileUpload:e.func,error:e.string,isLoading:e.bool};const P=r;r.__docgenInfo={description:"",methods:[],displayName:"InputFile",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},defaultValue:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"string",required:!1}}}},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onFileUpload:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},error:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},info:{description:"",type:{name:"string"},required:!1},isLoading:{description:"",type:{name:"bool"},required:!1}}};export{P as c};
