var m={},G={};G.byteLength=Nr;G.toByteArray=Dr;G.fromByteArray=Or;var _=[],C=[],Lr=typeof Uint8Array<"u"?Uint8Array:Array,z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var $=0,Mr=z.length;$<Mr;++$)_[$]=z[$],C[z.charCodeAt($)]=$;C[45]=62;C[95]=63;function fr(p){var f=p.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=p.indexOf("=");a===-1&&(a=f);var x=a===f?0:4-a%4;return[a,x]}function Nr(p){var f=fr(p),a=f[0],x=f[1];return(a+x)*3/4-x}function kr(p,f,a){return(f+a)*3/4-a}function Dr(p){var f,a=fr(p),x=a[0],w=a[1],c=new Lr(kr(p,x,w)),s=0,I=w>0?x-4:x,B;for(B=0;B<I;B+=4)f=C[p.charCodeAt(B)]<<18|C[p.charCodeAt(B+1)]<<12|C[p.charCodeAt(B+2)]<<6|C[p.charCodeAt(B+3)],c[s++]=f>>16&255,c[s++]=f>>8&255,c[s++]=f&255;return w===2&&(f=C[p.charCodeAt(B)]<<2|C[p.charCodeAt(B+1)]>>4,c[s++]=f&255),w===1&&(f=C[p.charCodeAt(B)]<<10|C[p.charCodeAt(B+1)]<<4|C[p.charCodeAt(B+2)]>>2,c[s++]=f>>8&255,c[s++]=f&255),c}function $r(p){return _[p>>18&63]+_[p>>12&63]+_[p>>6&63]+_[p&63]}function Pr(p,f,a){for(var x,w=[],c=f;c<a;c+=3)x=(p[c]<<16&16711680)+(p[c+1]<<8&65280)+(p[c+2]&255),w.push($r(x));return w.join("")}function Or(p){for(var f,a=p.length,x=a%3,w=[],c=16383,s=0,I=a-x;s<I;s+=c)w.push(Pr(p,s,s+c>I?I:s+c));return x===1?(f=p[a-1],w.push(_[f>>2]+_[f<<4&63]+"==")):x===2&&(f=(p[a-2]<<8)+p[a-1],w.push(_[f>>10]+_[f>>4&63]+_[f<<2&63]+"=")),w.join("")}var J={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */J.read=function(p,f,a,x,w){var c,s,I=w*8-x-1,B=(1<<I)-1,A=B>>1,o=-7,U=a?w-1:0,b=a?-1:1,R=p[f+U];for(U+=b,c=R&(1<<-o)-1,R>>=-o,o+=I;o>0;c=c*256+p[f+U],U+=b,o-=8);for(s=c&(1<<-o)-1,c>>=-o,o+=x;o>0;s=s*256+p[f+U],U+=b,o-=8);if(c===0)c=1-A;else{if(c===B)return s?NaN:(R?-1:1)*(1/0);s=s+Math.pow(2,x),c=c-A}return(R?-1:1)*s*Math.pow(2,c-x)};J.write=function(p,f,a,x,w,c){var s,I,B,A=c*8-w-1,o=(1<<A)-1,U=o>>1,b=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,R=x?0:c-1,M=x?1:-1,Y=f<0||f===0&&1/f<0?1:0;for(f=Math.abs(f),isNaN(f)||f===1/0?(I=isNaN(f)?1:0,s=o):(s=Math.floor(Math.log(f)/Math.LN2),f*(B=Math.pow(2,-s))<1&&(s--,B*=2),s+U>=1?f+=b/B:f+=b*Math.pow(2,1-U),f*B>=2&&(s++,B/=2),s+U>=o?(I=0,s=o):s+U>=1?(I=(f*B-1)*Math.pow(2,w),s=s+U):(I=f*Math.pow(2,U-1)*Math.pow(2,w),s=0));w>=8;p[a+R]=I&255,R+=M,I/=256,w-=8);for(s=s<<w|I,A+=w;A>0;p[a+R]=s&255,R+=M,s/=256,A-=8);p[a+R-M]|=Y*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(p){const f=G,a=J,x=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=o,p.SlowBuffer=lr,p.INSPECT_MAX_BYTES=50;const w=2147483647;p.kMaxLength=w;const{Uint8Array:c,ArrayBuffer:s,SharedArrayBuffer:I}=globalThis;o.TYPED_ARRAY_SUPPORT=B(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function B(){try{const i=new c(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,c.prototype),Object.setPrototypeOf(i,r),i.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function A(i){if(i>w)throw new RangeError('The value "'+i+'" is invalid for option "size"');const r=new c(i);return Object.setPrototypeOf(r,o.prototype),r}function o(i,r,t){if(typeof i=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return M(i)}return U(i,r,t)}o.poolSize=8192;function U(i,r,t){if(typeof i=="string")return Y(i,r);if(s.isView(i))return pr(i);if(i==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof i);if(S(i,s)||i&&S(i.buffer,s)||typeof I<"u"&&(S(i,I)||i&&S(i.buffer,I)))return W(i,r,t);if(typeof i=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=i.valueOf&&i.valueOf();if(n!=null&&n!==i)return o.from(n,r,t);const e=sr(i);if(e)return e;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof i[Symbol.toPrimitive]=="function")return o.from(i[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof i)}o.from=function(i,r,t){return U(i,r,t)},Object.setPrototypeOf(o.prototype,c.prototype),Object.setPrototypeOf(o,c);function b(i){if(typeof i!="number")throw new TypeError('"size" argument must be of type number');if(i<0)throw new RangeError('The value "'+i+'" is invalid for option "size"')}function R(i,r,t){return b(i),i<=0?A(i):r!==void 0?typeof t=="string"?A(i).fill(r,t):A(i).fill(r):A(i)}o.alloc=function(i,r,t){return R(i,r,t)};function M(i){return b(i),A(i<0?0:X(i)|0)}o.allocUnsafe=function(i){return M(i)},o.allocUnsafeSlow=function(i){return M(i)};function Y(i,r){if((typeof r!="string"||r==="")&&(r="utf8"),!o.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const t=K(i,r)|0;let n=A(t);const e=n.write(i,r);return e!==t&&(n=n.slice(0,e)),n}function j(i){const r=i.length<0?0:X(i.length)|0,t=A(r);for(let n=0;n<r;n+=1)t[n]=i[n]&255;return t}function pr(i){if(S(i,c)){const r=new c(i);return W(r.buffer,r.byteOffset,r.byteLength)}return j(i)}function W(i,r,t){if(r<0||i.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(i.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return r===void 0&&t===void 0?n=new c(i):t===void 0?n=new c(i,r):n=new c(i,r,t),Object.setPrototypeOf(n,o.prototype),n}function sr(i){if(o.isBuffer(i)){const r=X(i.length)|0,t=A(r);return t.length===0||i.copy(t,0,0,r),t}if(i.length!==void 0)return typeof i.length!="number"||V(i.length)?A(0):j(i);if(i.type==="Buffer"&&Array.isArray(i.data))return j(i.data)}function X(i){if(i>=w)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w.toString(16)+" bytes");return i|0}function lr(i){return+i!=i&&(i=0),o.alloc(+i)}o.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==o.prototype},o.compare=function(r,t){if(S(r,c)&&(r=o.from(r,r.offset,r.byteLength)),S(t,c)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(r)||!o.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;let n=r.length,e=t.length;for(let u=0,h=Math.min(n,e);u<h;++u)if(r[u]!==t[u]){n=r[u],e=t[u];break}return n<e?-1:e<n?1:0},o.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return o.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<r.length;++n)t+=r[n].length;const e=o.allocUnsafe(t);let u=0;for(n=0;n<r.length;++n){let h=r[n];if(S(h,c))u+h.length>e.length?(o.isBuffer(h)||(h=o.from(h)),h.copy(e,u)):c.prototype.set.call(e,h,u);else if(o.isBuffer(h))h.copy(e,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=h.length}return e};function K(i,r){if(o.isBuffer(i))return i.length;if(s.isView(i)||S(i,s))return i.byteLength;if(typeof i!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof i);const t=i.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let e=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return H(i).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return cr(i).length;default:if(e)return n?-1:H(i).length;r=(""+r).toLowerCase(),e=!0}}o.byteLength=K;function ar(i,r,t){let n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(i||(i="utf8");;)switch(i){case"hex":return Fr(this,r,t);case"utf8":case"utf-8":return v(this,r,t);case"ascii":return Ir(this,r,t);case"latin1":case"binary":return mr(this,r,t);case"base64":return dr(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ar(this,r,t);default:if(n)throw new TypeError("Unknown encoding: "+i);i=(i+"").toLowerCase(),n=!0}}o.prototype._isBuffer=!0;function N(i,r,t){const n=i[r];i[r]=i[t],i[t]=n}o.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<r;t+=2)N(this,t,t+1);return this},o.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<r;t+=4)N(this,t,t+3),N(this,t+1,t+2);return this},o.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<r;t+=8)N(this,t,t+7),N(this,t+1,t+6),N(this,t+2,t+5),N(this,t+3,t+4);return this},o.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?v(this,0,r):ar.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(r){if(!o.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:o.compare(this,r)===0},o.prototype.inspect=function(){let r="";const t=p.INSPECT_MAX_BYTES;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"},x&&(o.prototype[x]=o.prototype.inspect),o.prototype.compare=function(r,t,n,e,u){if(S(r,c)&&(r=o.from(r,r.offset,r.byteLength)),!o.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(t===void 0&&(t=0),n===void 0&&(n=r?r.length:0),e===void 0&&(e=0),u===void 0&&(u=this.length),t<0||n>r.length||e<0||u>this.length)throw new RangeError("out of range index");if(e>=u&&t>=n)return 0;if(e>=u)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,e>>>=0,u>>>=0,this===r)return 0;let h=u-e,l=n-t;const d=Math.min(h,l),E=this.slice(e,u),g=r.slice(t,n);for(let y=0;y<d;++y)if(E[y]!==g[y]){h=E[y],l=g[y];break}return h<l?-1:l<h?1:0};function Z(i,r,t,n,e){if(i.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,V(t)&&(t=e?0:i.length-1),t<0&&(t=i.length+t),t>=i.length){if(e)return-1;t=i.length-1}else if(t<0)if(e)t=0;else return-1;if(typeof r=="string"&&(r=o.from(r,n)),o.isBuffer(r))return r.length===0?-1:Q(i,r,t,n,e);if(typeof r=="number")return r=r&255,typeof c.prototype.indexOf=="function"?e?c.prototype.indexOf.call(i,r,t):c.prototype.lastIndexOf.call(i,r,t):Q(i,[r],t,n,e);throw new TypeError("val must be string, number or Buffer")}function Q(i,r,t,n,e){let u=1,h=i.length,l=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(i.length<2||r.length<2)return-1;u=2,h/=2,l/=2,t/=2}function d(g,y){return u===1?g[y]:g.readUInt16BE(y*u)}let E;if(e){let g=-1;for(E=t;E<h;E++)if(d(i,E)===d(r,g===-1?0:E-g)){if(g===-1&&(g=E),E-g+1===l)return g*u}else g!==-1&&(E-=E-g),g=-1}else for(t+l>h&&(t=h-l),E=t;E>=0;E--){let g=!0;for(let y=0;y<l;y++)if(d(i,E+y)!==d(r,y)){g=!1;break}if(g)return E}return-1}o.prototype.includes=function(r,t,n){return this.indexOf(r,t,n)!==-1},o.prototype.indexOf=function(r,t,n){return Z(this,r,t,n,!0)},o.prototype.lastIndexOf=function(r,t,n){return Z(this,r,t,n,!1)};function wr(i,r,t,n){t=Number(t)||0;const e=i.length-t;n?(n=Number(n),n>e&&(n=e)):n=e;const u=r.length;n>u/2&&(n=u/2);let h;for(h=0;h<n;++h){const l=parseInt(r.substr(h*2,2),16);if(V(l))return h;i[t+h]=l}return h}function yr(i,r,t,n){return O(H(r,i.length-t),i,t,n)}function xr(i,r,t,n){return O(Cr(r),i,t,n)}function Br(i,r,t,n){return O(cr(r),i,t,n)}function Er(i,r,t,n){return O(Sr(r,i.length-t),i,t,n)}o.prototype.write=function(r,t,n,e){if(t===void 0)e="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")e=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,e===void 0&&(e="utf8")):(e=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-t;if((n===void 0||n>u)&&(n=u),r.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");let h=!1;for(;;)switch(e){case"hex":return wr(this,r,t,n);case"utf8":case"utf-8":return yr(this,r,t,n);case"ascii":case"latin1":case"binary":return xr(this,r,t,n);case"base64":return Br(this,r,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Er(this,r,t,n);default:if(h)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),h=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function dr(i,r,t){return r===0&&t===i.length?f.fromByteArray(i):f.fromByteArray(i.slice(r,t))}function v(i,r,t){t=Math.min(i.length,t);const n=[];let e=r;for(;e<t;){const u=i[e];let h=null,l=u>239?4:u>223?3:u>191?2:1;if(e+l<=t){let d,E,g,y;switch(l){case 1:u<128&&(h=u);break;case 2:d=i[e+1],(d&192)===128&&(y=(u&31)<<6|d&63,y>127&&(h=y));break;case 3:d=i[e+1],E=i[e+2],(d&192)===128&&(E&192)===128&&(y=(u&15)<<12|(d&63)<<6|E&63,y>2047&&(y<55296||y>57343)&&(h=y));break;case 4:d=i[e+1],E=i[e+2],g=i[e+3],(d&192)===128&&(E&192)===128&&(g&192)===128&&(y=(u&15)<<18|(d&63)<<12|(E&63)<<6|g&63,y>65535&&y<1114112&&(h=y))}}h===null?(h=65533,l=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),e+=l}return gr(n)}const rr=4096;function gr(i){const r=i.length;if(r<=rr)return String.fromCharCode.apply(String,i);let t="",n=0;for(;n<r;)t+=String.fromCharCode.apply(String,i.slice(n,n+=rr));return t}function Ir(i,r,t){let n="";t=Math.min(i.length,t);for(let e=r;e<t;++e)n+=String.fromCharCode(i[e]&127);return n}function mr(i,r,t){let n="";t=Math.min(i.length,t);for(let e=r;e<t;++e)n+=String.fromCharCode(i[e]);return n}function Fr(i,r,t){const n=i.length;(!r||r<0)&&(r=0),(!t||t<0||t>n)&&(t=n);let e="";for(let u=r;u<t;++u)e+=_r[i[u]];return e}function Ar(i,r,t){const n=i.slice(r,t);let e="";for(let u=0;u<n.length-1;u+=2)e+=String.fromCharCode(n[u]+n[u+1]*256);return e}o.prototype.slice=function(r,t){const n=this.length;r=~~r,t=t===void 0?n:~~t,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<r&&(t=r);const e=this.subarray(r,t);return Object.setPrototypeOf(e,o.prototype),e};function F(i,r,t){if(i%1!==0||i<0)throw new RangeError("offset is not uint");if(i+r>t)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(r,t,n){r=r>>>0,t=t>>>0,n||F(r,t,this.length);let e=this[r],u=1,h=0;for(;++h<t&&(u*=256);)e+=this[r+h]*u;return e},o.prototype.readUintBE=o.prototype.readUIntBE=function(r,t,n){r=r>>>0,t=t>>>0,n||F(r,t,this.length);let e=this[r+--t],u=1;for(;t>0&&(u*=256);)e+=this[r+--t]*u;return e},o.prototype.readUint8=o.prototype.readUInt8=function(r,t){return r=r>>>0,t||F(r,1,this.length),this[r]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(r,t){return r=r>>>0,t||F(r,2,this.length),this[r]|this[r+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(r,t){return r=r>>>0,t||F(r,2,this.length),this[r]<<8|this[r+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(r,t){return r=r>>>0,t||F(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(r,t){return r=r>>>0,t||F(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},o.prototype.readBigUInt64LE=L(function(r){r=r>>>0,D(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&P(r,this.length-8);const e=t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,u=this[++r]+this[++r]*2**8+this[++r]*2**16+n*2**24;return BigInt(e)+(BigInt(u)<<BigInt(32))}),o.prototype.readBigUInt64BE=L(function(r){r=r>>>0,D(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&P(r,this.length-8);const e=t*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],u=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n;return(BigInt(e)<<BigInt(32))+BigInt(u)}),o.prototype.readIntLE=function(r,t,n){r=r>>>0,t=t>>>0,n||F(r,t,this.length);let e=this[r],u=1,h=0;for(;++h<t&&(u*=256);)e+=this[r+h]*u;return u*=128,e>=u&&(e-=Math.pow(2,8*t)),e},o.prototype.readIntBE=function(r,t,n){r=r>>>0,t=t>>>0,n||F(r,t,this.length);let e=t,u=1,h=this[r+--e];for(;e>0&&(u*=256);)h+=this[r+--e]*u;return u*=128,h>=u&&(h-=Math.pow(2,8*t)),h},o.prototype.readInt8=function(r,t){return r=r>>>0,t||F(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},o.prototype.readInt16LE=function(r,t){r=r>>>0,t||F(r,2,this.length);const n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n},o.prototype.readInt16BE=function(r,t){r=r>>>0,t||F(r,2,this.length);const n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n},o.prototype.readInt32LE=function(r,t){return r=r>>>0,t||F(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},o.prototype.readInt32BE=function(r,t){return r=r>>>0,t||F(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},o.prototype.readBigInt64LE=L(function(r){r=r>>>0,D(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&P(r,this.length-8);const e=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(n<<24);return(BigInt(e)<<BigInt(32))+BigInt(t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),o.prototype.readBigInt64BE=L(function(r){r=r>>>0,D(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&P(r,this.length-8);const e=(t<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(e)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n)}),o.prototype.readFloatLE=function(r,t){return r=r>>>0,t||F(r,4,this.length),a.read(this,r,!0,23,4)},o.prototype.readFloatBE=function(r,t){return r=r>>>0,t||F(r,4,this.length),a.read(this,r,!1,23,4)},o.prototype.readDoubleLE=function(r,t){return r=r>>>0,t||F(r,8,this.length),a.read(this,r,!0,52,8)},o.prototype.readDoubleBE=function(r,t){return r=r>>>0,t||F(r,8,this.length),a.read(this,r,!1,52,8)};function T(i,r,t,n,e,u){if(!o.isBuffer(i))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<u)throw new RangeError('"value" argument is out of bounds');if(t+n>i.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(r,t,n,e){if(r=+r,t=t>>>0,n=n>>>0,!e){const l=Math.pow(2,8*n)-1;T(this,r,t,n,l,0)}let u=1,h=0;for(this[t]=r&255;++h<n&&(u*=256);)this[t+h]=r/u&255;return t+n},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(r,t,n,e){if(r=+r,t=t>>>0,n=n>>>0,!e){const l=Math.pow(2,8*n)-1;T(this,r,t,n,l,0)}let u=n-1,h=1;for(this[t+u]=r&255;--u>=0&&(h*=256);)this[t+u]=r/h&255;return t+n},o.prototype.writeUint8=o.prototype.writeUInt8=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,1,255,0),this[t]=r&255,t+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,2,65535,0),this[t]=r&255,this[t+1]=r>>>8,t+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=r&255,t+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=r&255,t+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4};function tr(i,r,t,n,e){hr(r,n,e,i,t,7);let u=Number(r&BigInt(4294967295));i[t++]=u,u=u>>8,i[t++]=u,u=u>>8,i[t++]=u,u=u>>8,i[t++]=u;let h=Number(r>>BigInt(32)&BigInt(4294967295));return i[t++]=h,h=h>>8,i[t++]=h,h=h>>8,i[t++]=h,h=h>>8,i[t++]=h,t}function ir(i,r,t,n,e){hr(r,n,e,i,t,7);let u=Number(r&BigInt(4294967295));i[t+7]=u,u=u>>8,i[t+6]=u,u=u>>8,i[t+5]=u,u=u>>8,i[t+4]=u;let h=Number(r>>BigInt(32)&BigInt(4294967295));return i[t+3]=h,h=h>>8,i[t+2]=h,h=h>>8,i[t+1]=h,h=h>>8,i[t]=h,t+8}o.prototype.writeBigUInt64LE=L(function(r,t=0){return tr(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeBigUInt64BE=L(function(r,t=0){return ir(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeIntLE=function(r,t,n,e){if(r=+r,t=t>>>0,!e){const d=Math.pow(2,8*n-1);T(this,r,t,n,d-1,-d)}let u=0,h=1,l=0;for(this[t]=r&255;++u<n&&(h*=256);)r<0&&l===0&&this[t+u-1]!==0&&(l=1),this[t+u]=(r/h>>0)-l&255;return t+n},o.prototype.writeIntBE=function(r,t,n,e){if(r=+r,t=t>>>0,!e){const d=Math.pow(2,8*n-1);T(this,r,t,n,d-1,-d)}let u=n-1,h=1,l=0;for(this[t+u]=r&255;--u>=0&&(h*=256);)r<0&&l===0&&this[t+u+1]!==0&&(l=1),this[t+u]=(r/h>>0)-l&255;return t+n},o.prototype.writeInt8=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=r&255,t+1},o.prototype.writeInt16LE=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,2,32767,-32768),this[t]=r&255,this[t+1]=r>>>8,t+2},o.prototype.writeInt16BE=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=r&255,t+2},o.prototype.writeInt32LE=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,4,2147483647,-2147483648),this[t]=r&255,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4},o.prototype.writeInt32BE=function(r,t,n){return r=+r,t=t>>>0,n||T(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4},o.prototype.writeBigInt64LE=L(function(r,t=0){return tr(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),o.prototype.writeBigInt64BE=L(function(r,t=0){return ir(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function nr(i,r,t,n,e,u){if(t+n>i.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function er(i,r,t,n,e){return r=+r,t=t>>>0,e||nr(i,r,t,4),a.write(i,r,t,n,23,4),t+4}o.prototype.writeFloatLE=function(r,t,n){return er(this,r,t,!0,n)},o.prototype.writeFloatBE=function(r,t,n){return er(this,r,t,!1,n)};function or(i,r,t,n,e){return r=+r,t=t>>>0,e||nr(i,r,t,8),a.write(i,r,t,n,52,8),t+8}o.prototype.writeDoubleLE=function(r,t,n){return or(this,r,t,!0,n)},o.prototype.writeDoubleBE=function(r,t,n){return or(this,r,t,!1,n)},o.prototype.copy=function(r,t,n,e){if(!o.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!e&&e!==0&&(e=this.length),t>=r.length&&(t=r.length),t||(t=0),e>0&&e<n&&(e=n),e===n||r.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-t<e-n&&(e=r.length-t+n);const u=e-n;return this===r&&typeof c.prototype.copyWithin=="function"?this.copyWithin(t,n,e):c.prototype.set.call(r,this.subarray(n,e),t),u},o.prototype.fill=function(r,t,n,e){if(typeof r=="string"){if(typeof t=="string"?(e=t,t=0,n=this.length):typeof n=="string"&&(e=n,n=this.length),e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!o.isEncoding(e))throw new TypeError("Unknown encoding: "+e);if(r.length===1){const h=r.charCodeAt(0);(e==="utf8"&&h<128||e==="latin1")&&(r=h)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);let u;if(typeof r=="number")for(u=t;u<n;++u)this[u]=r;else{const h=o.isBuffer(r)?r:o.from(r,e),l=h.length;if(l===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(u=0;u<n-t;++u)this[u+t]=h[u%l]}return this};const k={};function q(i,r,t){k[i]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${i}]`,this.stack,delete this.name}get code(){return i}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${i}]: ${this.message}`}}}q("ERR_BUFFER_OUT_OF_BOUNDS",function(i){return i?`${i} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),q("ERR_INVALID_ARG_TYPE",function(i,r){return`The "${i}" argument must be of type number. Received type ${typeof r}`},TypeError),q("ERR_OUT_OF_RANGE",function(i,r,t){let n=`The value of "${i}" is out of range.`,e=t;return Number.isInteger(t)&&Math.abs(t)>2**32?e=ur(String(t)):typeof t=="bigint"&&(e=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(e=ur(e)),e+="n"),n+=` It must be ${r}. Received ${e}`,n},RangeError);function ur(i){let r="",t=i.length;const n=i[0]==="-"?1:0;for(;t>=n+4;t-=3)r=`_${i.slice(t-3,t)}${r}`;return`${i.slice(0,t)}${r}`}function Ur(i,r,t){D(r,"offset"),(i[r]===void 0||i[r+t]===void 0)&&P(r,i.length-(t+1))}function hr(i,r,t,n,e,u){if(i>t||i<r){const h=typeof r=="bigint"?"n":"";let l;throw u>3?r===0||r===BigInt(0)?l=`>= 0${h} and < 2${h} ** ${(u+1)*8}${h}`:l=`>= -(2${h} ** ${(u+1)*8-1}${h}) and < 2 ** ${(u+1)*8-1}${h}`:l=`>= ${r}${h} and <= ${t}${h}`,new k.ERR_OUT_OF_RANGE("value",l,i)}Ur(n,e,u)}function D(i,r){if(typeof i!="number")throw new k.ERR_INVALID_ARG_TYPE(r,"number",i)}function P(i,r,t){throw Math.floor(i)!==i?(D(i,t),new k.ERR_OUT_OF_RANGE(t||"offset","an integer",i)):r<0?new k.ERR_BUFFER_OUT_OF_BOUNDS:new k.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${r}`,i)}const Tr=/[^+/0-9A-Za-z-_]/g;function Rr(i){if(i=i.split("=")[0],i=i.trim().replace(Tr,""),i.length<2)return"";for(;i.length%4!==0;)i=i+"=";return i}function H(i,r){r=r||1/0;let t;const n=i.length;let e=null;const u=[];for(let h=0;h<n;++h){if(t=i.charCodeAt(h),t>55295&&t<57344){if(!e){if(t>56319){(r-=3)>-1&&u.push(239,191,189);continue}else if(h+1===n){(r-=3)>-1&&u.push(239,191,189);continue}e=t;continue}if(t<56320){(r-=3)>-1&&u.push(239,191,189),e=t;continue}t=(e-55296<<10|t-56320)+65536}else e&&(r-=3)>-1&&u.push(239,191,189);if(e=null,t<128){if((r-=1)<0)break;u.push(t)}else if(t<2048){if((r-=2)<0)break;u.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;u.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;u.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return u}function Cr(i){const r=[];for(let t=0;t<i.length;++t)r.push(i.charCodeAt(t)&255);return r}function Sr(i,r){let t,n,e;const u=[];for(let h=0;h<i.length&&!((r-=2)<0);++h)t=i.charCodeAt(h),n=t>>8,e=t%256,u.push(e),u.push(n);return u}function cr(i){return f.toByteArray(Rr(i))}function O(i,r,t,n){let e;for(e=0;e<n&&!(e+t>=r.length||e>=i.length);++e)r[e+t]=i[e];return e}function S(i,r){return i instanceof r||i!=null&&i.constructor!=null&&i.constructor.name!=null&&i.constructor.name===r.name}function V(i){return i!==i}const _r=function(){const i="0123456789abcdef",r=new Array(256);for(let t=0;t<16;++t){const n=t*16;for(let e=0;e<16;++e)r[n+e]=i[t]+i[e]}return r}();function L(i){return typeof BigInt>"u"?br:i}function br(){throw new Error("BigInt not supported")}})(m);const Gr=m.Buffer,Yr=m.Blob,jr=m.BlobOptions,Wr=m.Buffer,Xr=m.File,qr=m.FileOptions,Hr=m.INSPECT_MAX_BYTES,Vr=m.SlowBuffer,zr=m.TranscodeEncoding,Jr=m.atob,Kr=m.btoa,Zr=m.constants,Qr=m.isAscii,vr=m.isUtf8,rt=m.kMaxLength,tt=m.kStringMaxLength,it=m.resolveObjectURL,nt=m.transcode,ot=Object.freeze(Object.defineProperty({__proto__:null,Blob:Yr,BlobOptions:jr,Buffer:Wr,File:Xr,FileOptions:qr,INSPECT_MAX_BYTES:Hr,SlowBuffer:Vr,TranscodeEncoding:zr,atob:Jr,btoa:Kr,constants:Zr,default:Gr,isAscii:Qr,isUtf8:vr,kMaxLength:rt,kStringMaxLength:tt,resolveObjectURL:it,transcode:nt},Symbol.toStringTag,{value:"Module"}));export{Gr as B,ot as d};
