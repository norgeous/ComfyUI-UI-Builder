const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-DXYJFR6R.js","./iframe-DNwFGuPK.js","./index-uCp2LrAq.js","./_commonjsHelpers-BosuxZz1.js","./react-18-DAjhTQGP.js","./index-BOkhicXD.js","./index-BbP3371Q.js","./index-DYADbu9O.js","./_getPrototype-Cxqdo8zk.js","./index-BAMY2Nnw.js","./util-BQ0cylCP.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-DNwFGuPK.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-DXYJFR6R.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
