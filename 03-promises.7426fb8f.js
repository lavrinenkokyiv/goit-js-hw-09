function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function s(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}u.addEventListener("submit",(function(o){o.preventDefault();let t=l.valueAsNumber;const n=d.valueAsNumber,r=a.valueAsNumber;for(let o=1;o<=r;o+=1)s(o,t).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.7426fb8f.js.map
