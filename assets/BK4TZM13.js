import{C,N as f,P as v,S as g,_ as y}from"./CXOX6hCY.js";import{m as k,o as n,q as r,w as e,a as s,t as c,b as l,u as o,s as B,v as N,c as w,F as P,x as S,R as h}from"./Dkb8gU8a.js";const x={class:"modalContainer"},I={class:"modalHeader"},R={class:"modalTitle"},V={class:"modalItem"},T=k({__name:"GalleryModal",props:{images:{},title:{},position:{}},emits:["close"],setup(d,{emit:m}){const u=m,p={itemsToShow:1,wrapAround:!0,autoplay:0,transition:750,modelValue:d.position};return(i,a)=>{const _=y;return n(),r(o(h),{class:"overlay","content-class":"overlayContent"},{default:e(()=>[s("div",x,[s("div",I,[s("span",R,c(i.title),1),s("button",{class:"modalCloseButton",onClick:a[0]||(a[0]=t=>u("close")),title:"Close modal"},a[1]||(a[1]=[s("span",{class:"closeIcon"},null,-1)]))]),l(o(C),B(N(p)),{addons:e(()=>[l(o(f)),l(o(v))]),default:e(()=>[(n(!0),w(P,null,S(i.images,t=>(n(),r(o(g),{key:t.url},{default:e(()=>[s("div",V,[l(_,{src:t.url},null,8,["src"]),s("span",null,c(t.description),1)])]),_:2},1024))),128))]),_:1},16)])]),_:1})}}});export{T as _};
