import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as h}from"./index-uCp2LrAq.js";import{P as n}from"./index-D3ylJrlI.js";import{I as x}from"./InputRefContext-CmPhBSwH.js";import{c as v}from"./index-BnJYCcsi.js";import{c as b}from"./index-BXz8muHB.js";import{b as j,c as C}from"./index-BiKVFdKX.js";import{c as I}from"./index-BwXAjfjY.js";const r=({value:d=void 0,onChange:a=()=>{},children:l=null,...m})=>{const u=h.useContext(x),{seed:s,random:c}=d,p=e=>{a({seed:e,random:!1})},f=e=>{a({seed:s,random:e})},i=()=>{var t;const e=Math.floor(Math.random()*1e10);a({seed:e,random:!1}),(t=u.current)==null||t.focus()};return o.jsxs(v,{...m,value:s,onChange:p,children:[o.jsx(b,{label:"Randomise",value:c,onChange:f,children:o.jsx(j,{})}),o.jsx(I,{label:"Shuffle",onClick:i,children:o.jsx(C,{})}),l]})};r.propTypes={value:n.shape({seed:n.number,random:n.bool}),onChange:n.func,children:n.node};const M=r;r.__docgenInfo={description:"",methods:[],displayName:"InputSeed",props:{value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"shape",value:{seed:{name:"number",required:!1},random:{name:"bool",required:!1}}},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{M as c};