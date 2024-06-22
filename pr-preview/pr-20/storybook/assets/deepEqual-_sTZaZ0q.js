const s=(t,e)=>{const o=Object.keys,n=typeof t;return t&&e&&n==="object"&&n===typeof e?o(t).length===o(e).length&&o(t).every(c=>s(t[c],e[c])):t===e};export{s as d};
