import{C,N as f,P as v,S as g,_ as k}from"./BdaMxT_R.js";import{m as y,o as l,q as r,w as e,a as s,t as d,b as n,u as o,s as B,v as N,c as w,F as P,x as S,R as h}from"./CHxAhCJl.js";const x={class:"modalContainer"},I={class:"modalHeader"},R={class:"modalTitle"},V={class:"modalItem"},T=y({__name:"GalleryModal",props:{images:{},title:{},position:{}},emits:["close"],setup(c,{emit:m}){const u=m,p={itemsToShow:1,wrapAround:!0,autoplay:0,transition:750,modelValue:c.position};return(i,t)=>{const _=k;return l(),r(o(h),{"content-class":"overlayContent"},{default:e(()=>[s("div",x,[s("div",I,[s("span",R,d(i.title),1),s("button",{class:"modalCloseButton",onClick:t[0]||(t[0]=a=>u("close")),title:"Close modal"},t[1]||(t[1]=[s("span",{class:"closeIcon"},null,-1)]))]),n(o(C),B(N(p)),{addons:e(()=>[n(o(f)),n(o(v))]),default:e(()=>[(l(!0),w(P,null,S(i.images,a=>(l(),r(o(g),{key:a.url},{default:e(()=>[s("div",V,[n(_,{src:a.url},null,8,["src"]),s("span",null,d(a.description),1)])]),_:2},1024))),128))]),_:1},16)])]),_:1})}}});export{T as _};
