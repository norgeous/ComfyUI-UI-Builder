const __vite__fileDeps=["./axe-C3iONRUh.js","./index-BAMY2Nnw.js","./_commonjsHelpers-BosuxZz1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as S}from"./iframe-pzCeGv5D.js";import"../sb-preview/runtime.js";const{global:f}=__STORYBOOK_MODULE_GLOBAL__,{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__;var o="storybook/a11y",y=`${o}/result`,L=`${o}/request`,d=`${o}/running`,A=`${o}/error`,T=`${o}/manual`,r={RESULT:y,REQUEST:L,RUNNING:d,ERROR:A,MANUAL:T},{document:g}=f,a=U.getChannel(),l=!1,_,R={config:{},options:{}},v=async(n,e=R)=>{e!=null&&e.manual||await i(n,e)},i=async(n,e=R)=>{_=n;try{if(!l){l=!0,a.emit(r.RUNNING);let{default:t}=await S(()=>import("./axe-C3iONRUh.js").then(N=>N.a),__vite__mapDeps([0,1,2]),import.meta.url),{element:m="#storybook-root",config:s,options:O={}}=e,E=g.querySelector(m);if(!E)return;t.reset(),s&&t.configure(s);let c=await t.run(E,O),u=JSON.parse(JSON.stringify(c));_===n?a.emit(r.RESULT,u):(l=!1,i(_))}}catch(t){a.emit(r.ERROR,t)}finally{l=!1}};a.on(r.REQUEST,v);a.on(r.MANUAL,i);
