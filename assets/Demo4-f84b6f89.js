import{r,b as t,c as p,f as g,i as l,F as $,g as j,k as K,z as Q,t as k,e,A as P,w as a,d as O,h as T,B,C as X,s as Y,m as Z,p as M,q as ee}from"./index-113bc24d.js";import{u as le}from"./pagesStore-388d9500.js";const te={class:"mb-15"},ae=["id","onUpdate:modelValue"],oe=["for"],ne={__name:"D1",setup(A){const n=r(["陳小明","林美玲","張家豪","李雅婷","王大翔","吳佳怡","黃明志","許小琪","吳宗翰","吳思婷","楊宏達","周美玲","劉建宏","吳佩玲","蕭明潔","鄭宗翰","洪美玲","曾家豪","彭雅婷","王大翔","王思婷","林宏達","王美玲","林家豪","余雅婷","顏大翔","王佳怡","王明志","李小琪","楊宗翰","楊思婷","林宏達","楊美玲","李家豪","馮雅婷","孫大翔","萬佳怡","雷明志","賴小琪","李宗翰","魏思婷","李宏達","李美玲","李家豪","江雅婷","林大翔","林佳怡","小明志","小小琪"]),o=r({clearable:{enName:"clearable",cnName:"顯示清除按鈕",value:!1},chips:{enName:"chips",cnName:"讓選項加上 tag 樣式",value:!1},multiple:{enName:"multiple",cnName:"可多選",value:!1}});return(V,s)=>{const i=t("v-autocomplete");return p(),g($,null,[l("div",te,[(p(!0),g($,null,j(o.value,(m,b)=>(p(),g("div",{key:m.enName,class:"form-check d-flex align-items-center"},[K(l("input",{class:"form-check-input",type:"checkbox",id:m.enName,"onUpdate:modelValue":h=>o.value[b].value=h},null,8,ae),[[Q,o.value[b].value]]),l("label",{class:"form-check-label ms-3",for:m.enName},k(m.cnName),9,oe)]))),128))]),e(i,{label:"Autocomplete",items:n.value,variant:"outlined",clearable:o.value.clearable.value,chips:o.value.chips.value,multiple:o.value.multiple.value},null,8,["items","clearable","chips","multiple"])],64)}}};const se={class:"d-flex"},ue={class:"d-flex align-items-center"},ie={class:"row row-cols-2"},ce={style:{width:"525px"}},de={class:"row row-cols-2"},re={style:{width:"525px"}},ve={class:"d-flex align-items-center"},pe={style:{width:"500px"}},me={class:"row row-cols-2"},_e={style:{width:"525px"}},be={class:"d-flex align-items-center"},fe={class:"d-flex align-items-center"},ge={class:"me-10",style:{width:"500px"}},he={class:"d-flex align-items-center pb-5"},xe={__name:"D2",setup(A){const n=r(""),o=r({clearable:"",chips:"",multiple:""}),V=r(""),s=r("inline"),i=r({disabled:!1,multiple:!1}),m=r({clearable:!1}),b=r(""),h=r(!1);P(()=>b.value,v=>{console.log("otpInputValue",b.value),v.length>=6&&C()});function C(){h.value=!0,setTimeout(()=>{h.value=!1,b.value=""},1500)}return(v,_)=>{const x=t("v-checkbox"),G=t("v-tooltip"),w=t("v-radio"),D=t("v-radio-group"),y=t("v-text-field"),N=t("v-textarea"),F=t("v-select"),S=t("v-combobox"),I=t("v-otp-input");return p(),g("section",null,[l("div",se,[l("div",null,[e(x,{modelValue:n.value,"onUpdate:modelValue":_[0]||(_[0]=c=>n.value=c),label:"red",color:"red",value:"red","hide-details":""},null,8,["modelValue"])]),l("div",ue,[e(x,{modelValue:n.value,"onUpdate:modelValue":_[2]||(_[2]=c=>n.value=c)},{label:a(()=>[l("div",null,[T(" 我同意 "),e(G,{location:"top"},{activator:a(({props:c})=>[l("a",B({target:"_blank",href:"https://vuetifyjs.com"},c,{onClick:_[1]||(_[1]=X(()=>{},["stop"]))})," Vuetify ",16)]),default:a(()=>[T(" 在新視窗中開啟 ")]),_:1}),T(" 太棒了 ")])]),_:1},8,["modelValue"])])]),l("div",ie,[l("div",ce,[e(D,{modelValue:V.value,"onUpdate:modelValue":_[3]||(_[3]=c=>V.value=c),inline:s.value==="inline",column:s.value==="column"},{default:a(()=>[e(w,{label:"選項一",value:"1"}),e(w,{label:"選項二",value:"2"}),e(w,{label:"選項三",value:"3"})]),_:1},8,["modelValue","inline","column"])]),l("div",null,[e(D,{modelValue:s.value,"onUpdate:modelValue":_[4]||(_[4]=c=>s.value=c),inline:""},{default:a(()=>[e(w,{label:"inline",value:"inline"}),e(w,{label:"column",value:"column"})]),_:1},8,["modelValue"])])]),l("div",de,[l("div",re,[e(y,{label:"input-text",hint:"請輸入文字(hint:聚焦時在輸入下方顯示提示文字)",prefix:"$",suffix:"元",clearable:m.value.clearable},null,8,["clearable"])]),l("div",ve,[(p(!0),g($,null,j(m.value,(c,d)=>(p(),g("div",{key:d},[e(x,{label:d,value:!0,modelValue:m.value[d],"onUpdate:modelValue":U=>m.value[d]=U},null,8,["label","modelValue","onUpdate:modelValue"])]))),128))])]),l("div",null,[l("div",pe,[e(N,{clearable:"",counter:"",label:"textarea"})])]),l("div",me,[l("div",_e,[e(F,{items:["米知","小明","周杰倫"],disabled:i.value.disabled===!0,multiple:i.value.multiple===!0,label:"select"},null,8,["disabled","multiple"])]),l("div",be,[(p(!0),g($,null,j(i.value,(c,d)=>(p(),g("div",{key:d},[e(x,{label:d,value:!0,modelValue:i.value[d],"onUpdate:modelValue":U=>i.value[d]=U},null,8,["label","modelValue","onUpdate:modelValue"])]))),128))])]),l("div",fe,[l("div",ge,[e(S,{label:"Combobox",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"],clearable:o.value.clearable===!0,chips:o.value.chips===!0,multiple:o.value.multiple===!0},null,8,["clearable","chips","multiple"])]),l("div",he,[(p(!0),g($,null,j(o.value,(c,d)=>(p(),O(x,{key:d,modelValue:o.value[d],"onUpdate:modelValue":U=>o.value[d]=U,label:d,"hide-details":""},null,8,["modelValue","onUpdate:modelValue","label"]))),128))])]),l("div",null,[e(I,{modelValue:b.value,"onUpdate:modelValue":_[5]||(_[5]=c=>b.value=c),loading:h.value,placeholder:"0"},null,8,["modelValue","loading"])])])}}},Ve={class:"text-h5"},we={class:"text-grey-lighten-1"},ye={__name:"D3",setup(A){const n={1:"https://cdn.vuetifyjs.com/images/lists/1.jpg",2:"https://cdn.vuetifyjs.com/images/lists/2.jpg",3:"https://cdn.vuetifyjs.com/images/lists/3.jpg",4:"https://cdn.vuetifyjs.com/images/lists/4.jpg",5:"https://cdn.vuetifyjs.com/images/lists/5.jpg"},o=r(!0),V=r(["Sandra Adams","Britta Holt"]),s=r(!1),i=r("午夜船員"),m=r([{name:"Sandra Adams",group:"Group 1",avatar:n[1]},{name:"Ali Connors",group:"Group 1",avatar:n[2]},{name:"Trevor Hansen",group:"Group 1",avatar:n[3]},{name:"Tucker Smith",group:"Group 1",avatar:n[2]},{name:"Britta Holt",group:"Group 2",avatar:n[4]},{name:"Jane Smith ",group:"Group 2",avatar:n[5]},{name:"John Smith",group:"Group 2",avatar:n[1]},{name:"Sandra Williams",group:"Group 2",avatar:n[3]}]),b=r("夏日的微風");let h=null;return P(s,C=>{clearTimeout(h),C&&(h=setTimeout(()=>s.value=!1,3e3))}),(C,v)=>{const _=t("v-progress-linear"),x=t("v-btn"),G=t("v-list-item"),w=t("v-list"),D=t("v-menu"),y=t("v-col"),N=t("v-row"),F=t("v-img"),S=t("v-text-field"),I=t("v-chip"),c=t("v-autocomplete"),d=t("v-container"),U=t("v-form"),W=t("v-divider"),q=t("v-switch"),z=t("v-spacer"),E=t("v-card-actions"),R=t("v-card");return p(),O(R,{loading:s.value,color:"blue-grey-darken-1",class:"mx-auto","max-width":"420"},{loader:a(({isActive:u})=>[e(_,{active:u,color:"green-lighten-3",height:"4",indeterminate:""},null,8,["active"])]),default:a(()=>[e(F,{cover:"",height:"200",src:"https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"},{default:a(()=>[e(N,{class:"pa-3"},{default:a(()=>[e(y,{cols:"12"},{default:a(()=>[e(D,{location:"bottom start",origin:"overlap",transition:"slide-y-transition"},{activator:a(({props:u})=>[e(x,B(u,{icon:"mdi-dots-vertical",density:"comfortable",variant:"tonal"}),null,16)]),default:a(()=>[e(w,{lines:!1},{default:a(()=>[e(G,{title:"更新",onClick:v[0]||(v[0]=u=>s.value=!0)})]),_:1})]),_:1})]),_:1}),e(N,null,{default:a(()=>[e(y,{class:"text-center"},{default:a(()=>[l("h3",Ve,k(i.value),1),l("span",we,k(b.value),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(U,null,{default:a(()=>[e(d,null,{default:a(()=>[e(N,{dense:""},{default:a(()=>[e(y,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:i.value,"onUpdate:modelValue":v[1]||(v[1]=u=>i.value=u),disabled:s.value,color:"blue-grey-lighten-2",label:"姓名"},null,8,["modelValue","disabled"])]),_:1}),e(y,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:b.value,"onUpdate:modelValue":v[2]||(v[2]=u=>b.value=u),disabled:s.value,color:"blue-grey-lighten-2",label:"標題"},null,8,["modelValue","disabled"])]),_:1}),e(y,{cols:"12"},{default:a(()=>[e(c,{modelValue:V.value,"onUpdate:modelValue":v[3]||(v[3]=u=>V.value=u),disabled:s.value,items:m.value,chips:"","closable-chips":"",color:"blue-grey-lighten-2","item-title":"name","item-value":"name",label:"選擇",multiple:""},{chip:a(({props:u,item:f})=>[e(I,B(u,{"prepend-avatar":f.raw.avatar,text:f.raw.name}),null,16,["prepend-avatar","text"])]),item:a(({props:u,item:f})=>{var H,J,L;return[e(G,B(u,{"prepend-avatar":(H=f==null?void 0:f.raw)==null?void 0:H.avatar,title:(J=f==null?void 0:f.raw)==null?void 0:J.name,subtitle:(L=f==null?void 0:f.raw)==null?void 0:L.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue","disabled","items"])]),_:1})]),_:1})]),_:1})]),_:1}),e(W),e(E,null,{default:a(()=>[e(q,{modelValue:o.value,"onUpdate:modelValue":v[4]||(v[4]=u=>o.value=u),disabled:s.value,class:"mt-0 ms-2",color:"green-lighten-2",density:"compact","hide-details":"",label:"自動更新"},null,8,["modelValue","disabled"]),e(z),e(x,{disabled:o.value,loading:s.value,variant:s.value?"tonal":void 0,color:"blue-grey-lighten-3","prepend-icon":"mdi-update",onClick:v[5]||(v[5]=u=>s.value=!0)},{default:a(()=>[T(" 立即更新 ")]),_:1},8,["disabled","loading","variant"])]),_:1})]),_:1},8,["loading"])}}},Ue={class:"text-20 fw-bold-7"},ke={class:"text-18 mb-5"},je={__name:"Demo4",setup(A){const{pageInfo:n}=Y(le()),o=Z([{description:"自動補全",component:ne},{description:"常見表單元素",component:xe},{description:"表單自動儲存案例",component:ye}]);return(V,s)=>(p(),g($,null,[l("h1",Ue,k(M(n).tabName),1),l("p",null,k(M(n).description),1),(p(!0),g($,null,j(o,(i,m)=>(p(),g("div",{key:`${i.tabName}-${m}`,class:"bg-gainsboro my-2 p-5"},[l("h3",ke,k(m+1)+". "+k(i.description),1),(p(),O(ee(i.component),{item:i},null,8,["item"]))]))),128))],64))}};export{je as default};
