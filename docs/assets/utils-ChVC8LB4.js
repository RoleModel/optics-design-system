const n=(e,t)=>{Array.from(Array(t)).forEach((a,r)=>{const s=document.createElement("div");s.style.width="var(--op-space-x-large)",s.style.minHeight="var(--op-space-x-large)",s.style.backgroundColor="var(--op-color-primary-original)",e.appendChild(s)})},o=e=>e.charAt(0).toUpperCase()+e.slice(1),l=e=>e.replace(" ","-"),i=["plus-max","plus-eight","plus-seven","plus-six","plus-five","plus-four","plus-three","plus-two","plus-one","base","minus-one","minus-two","minus-three","minus-four","minus-five","minus-six","minus-seven","minus-eight","minus-max"],u=["primary","neutral","alerts-warning","alerts-danger","alerts-info","alerts-notice"],p=e=>window.getComputedStyle(document.documentElement).getPropertyValue(e).trim();export{i as a,n as b,o as c,p as g,l as p,u as s};
