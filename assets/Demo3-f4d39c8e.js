import{r as N,x as $,b as o,c as e,f as n,i as t,e as i,w as a,y as l,s as B,m as D,t as r,p as v,F as h,g as I,d as S,q as V}from"./index-113bc24d.js";import{u as F}from"./pagesStore-388d9500.js";const T={class:"d-flex flex-wrap",style:{"min-height":"50vh"}},q={class:"me-15"},E=t("p",null,"v-expand-transition",-1),L={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},P={class:"me-15"},R=t("p",null,"v-fab-transition",-1),U={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},j={class:"me-15"},z=t("p",null,"v-fade-transition",-1),A={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},G={class:"me-15"},H=t("p",null,"v-scale-transition",-1),J={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},K={class:"me-15"},M=t("p",null,"v-scroll-x-transition",-1),O={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},Q={class:"me-15"},W=t("p",null,"v-scroll-y-transition",-1),X={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},Y={class:"me-15"},Z=t("p",null,"v-slide-x-reverse-transition",-1),tt={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},st={class:"me-15"},et=t("p",null,"v-slide-x-transition",-1),nt={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},ot={class:"me-15"},it=t("p",null,"v-slide-y-reverse-transition",-1),at={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},lt={class:"me-15"},_t=t("p",null,"v-slide-y-transition",-1),ct={key:0,class:"bg-dark",style:{width:"100px",height:"100px"}},dt={__name:"C1",setup(u){const s=N(!0),c=setInterval(()=>{s.value=!s.value},700);return $(()=>{c&&clearInterval(c)}),(p,m)=>{const _=o("v-expand-transition"),d=o("v-fab-transition"),x=o("v-fade-transition"),y=o("v-scale-transition"),f=o("v-scroll-x-transition"),g=o("v-scroll-y-transition"),k=o("v-slide-x-reverse-transition"),b=o("v-slide-x-transition"),w=o("v-slide-y-reverse-transition"),C=o("v-slide-y-transition");return e(),n("div",T,[t("div",q,[E,i(_,null,{default:a(()=>[s.value?(e(),n("div",L)):l("",!0)]),_:1})]),t("div",P,[R,i(d,null,{default:a(()=>[s.value?(e(),n("div",U)):l("",!0)]),_:1})]),t("div",j,[z,i(x,null,{default:a(()=>[s.value?(e(),n("div",A)):l("",!0)]),_:1})]),t("div",G,[H,i(y,null,{default:a(()=>[s.value?(e(),n("div",J)):l("",!0)]),_:1})]),t("div",K,[M,i(f,null,{default:a(()=>[s.value?(e(),n("div",O)):l("",!0)]),_:1})]),t("div",Q,[W,i(g,null,{default:a(()=>[s.value?(e(),n("div",X)):l("",!0)]),_:1})]),t("div",Y,[Z,i(k,null,{default:a(()=>[s.value?(e(),n("div",tt)):l("",!0)]),_:1})]),t("div",st,[et,i(b,null,{default:a(()=>[s.value?(e(),n("div",nt)):l("",!0)]),_:1})]),t("div",ot,[it,i(w,null,{default:a(()=>[s.value?(e(),n("div",at)):l("",!0)]),_:1})]),t("div",lt,[_t,i(C,null,{default:a(()=>[s.value?(e(),n("div",ct)):l("",!0)]),_:1})])])}}},rt={class:"text-20 fw-bold-7"},vt={class:"text-18 mb-5"},pt={__name:"Demo3",setup(u){const{pageInfo:s}=B(F()),c=D([{description:"Transitions 動畫效果",component:dt}]);return(p,m)=>(e(),n(h,null,[t("h1",rt,r(v(s).tabName),1),t("p",null,r(v(s).description),1),(e(!0),n(h,null,I(c,(_,d)=>(e(),n("div",{key:`${_.tabName}-${d}`,class:"bg-gainsboro my-2 p-5"},[t("h3",vt,r(d+1)+". "+r(_.description),1),(e(),S(V(_.component),{item:_},null,8,["item"]))]))),128))],64))}};export{pt as default};