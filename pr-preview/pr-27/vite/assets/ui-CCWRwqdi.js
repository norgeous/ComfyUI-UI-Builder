const e="SDXL Hyper 1 Step UNET",t="v0.0.0",a="🏃",i="Fast SDXL image generation using Hyper 1 Step UNET",o={scheme:"gold yellow"},n=["SDXL","S2I"],s=[{group:"Prompt",id:"positivePrompt",label:"Positive Prompt",type:"speech",defaultValue:"",colSpan:2},{group:"Prompt",id:"negativePrompt",label:"Negative Prompt",type:"speech",defaultValue:"",colSpan:2},{group:"Generation Params",id:"size",label:"Size",type:"select",defaultValueIndex:0,options:[{label:"1:1 Square",value:{width:1024,height:1024}},{label:"16:9 Landscape",value:{width:1344,height:768}},{label:"16:9 Portrait",value:{width:768,height:1344}}]},{group:"Generation Params",id:"seed",label:"Seed",type:"seed",defaultValue:{seed:1,random:!1},min:0}],p=[{destination:"Positive Prompt > text",actions:"get:positivePrompt"},{destination:"EmptyLatentImage > width",actions:"get:width"},{destination:"EmptyLatentImage > height",actions:"get:height"},{destination:"SamplerCustom > noise_seed",actions:"get:seed"}],l={name:e,version:t,emoji:a,description:i,theme:o,tags:n,formConfig:s,adapterConfig:p};export{p as adapterConfig,l as default,i as description,a as emoji,s as formConfig,e as name,n as tags,o as theme,t as version};
