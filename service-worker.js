if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const t=e=>c(e,o),d={module:{uri:o},exports:r,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"a574833771de453bd9e10dafdecb0cc8"},{url:"index.html",revision:"61300919cacdbac6a7d08198cae7a774"},{url:"main.css",revision:"5f8762bce5421f92aca22d44ddf381e7"},{url:"main.js",revision:"a51aa80c10cefff6f23bb9aa1dced7fe"}],{})}));
