import{c as n,f as r,r as f,o as v,F as o,g as p,n as m,t as l,s as y,m as k,i as d,p as h,d as $,q as x}from"./index-8e0f981f.js";import{u as w}from"./pagesStore-7323b9db.js";const B=(c,t)=>{const a=c.__vccOpts||c;for(const[u,e]of t)a[u]=e;return a},D={},V={class:"bg-purple-darken-2 text-center"};function E(c,t){return n(),r("div",V," bg-purple-darken-2 ")}const F=B(D,[["render",E]]),S={class:"row row-cols-3"},q={__name:"B2",setup(c){const t=f({}),a=f(["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey"]);v(()=>{u(),console.log(t.value)});function u(){a.value.forEach(e=>{t.value[e]={},t.value[e]={lighten:[],darken:[],accent:[]};for(let s=1;s<5;s++)t.value[e].lighten.push(`bg-${e}-lighten-${s}`),e!=="brown"&&e!=="grey"&&(t.value[e].darken.push(`bg-${e}-darken-${s}`),t.value[e].accent.push(`bg-${e}-accent-${s}`))})}return(e,s)=>(n(),r("div",S,[(n(!0),r(o,null,p(t.value,(i,b)=>(n(),r("div",{key:b,class:"col"},[(n(!0),r(o,null,p(i,g=>(n(),r(o,{key:g},[(n(!0),r(o,null,p(g,_=>(n(),r("p",{key:_,class:m(["text-center py-2",_])},l(_),3))),128))],64))),128))]))),128))]))}},z={class:"text-20 fw-bold-7"},C={class:"text-18 mb-5"},M={__name:"Demo2",setup(c){const{pageInfo:t}=y(w()),a=k([{description:"簡單使用 Vuetify 顏色",component:F},{description:"渲染 Vuetify 顏色",component:q}]);return(u,e)=>(n(),r(o,null,[d("h1",z,l(h(t).tabName),1),d("p",null,l(h(t).description),1),(n(!0),r(o,null,p(a,(s,i)=>(n(),r("div",{key:`${s.tabName}-${i}`,class:"bg-gainsboro my-2 p-5"},[d("h3",C,l(i+1)+". "+l(s.description),1),(n(),$(x(s.component),{item:s},null,8,["item"]))]))),128))],64))}};export{M as default};