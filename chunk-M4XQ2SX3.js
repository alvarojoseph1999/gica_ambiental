import{I as z,K as j,M as E}from"./chunk-H7RAXT6S.js";import{p as k}from"./chunk-5KGRGV6M.js";import{Ab as x,Bb as w,Kb as r,M as c,N as p,Qb as S,S as v,Ya as a,Za as g,aa as s,ab as u,jb as f,lb as y,mb as h,ob as b,qb as n,rb as i,sb as d}from"./chunk-Y3SKJ3V2.js";import"./chunk-7CGTOI24.js";var F=["*"],$=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,B={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},L={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},C=(()=>{class e extends j{name="divider";theme=$;classes=L;inlineStyles=B;static \u0275fac=(()=>{let l;return function(t){return(l||(l=s(e)))(t||e)}})();static \u0275prov=c({token:e,factory:e.\u0275fac})}return e})();var P=(()=>{class e extends E{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=v(C);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let l;return function(t){return(l||(l=s(e)))(t||e)}})();static \u0275cmp=a({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(o,t){o&2&&(f("aria-orientation",t.layout)("data-pc-name","divider")("role","separator"),b(t.hostClass),y("justify-content",t.layout==="horizontal"?t.align==="center"||t.align===void 0?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null)("align-items",t.layout==="vertical"?t.align==="center"||t.align===void 0?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null),h("p-divider",!0)("p-component",!0)("p-divider-horizontal",t.layout==="horizontal")("p-divider-vertical",t.layout==="vertical")("p-divider-solid",t.type==="solid")("p-divider-dashed",t.type==="dashed")("p-divider-dotted",t.type==="dotted")("p-divider-left",t.layout==="horizontal"&&(!t.align||t.align==="left"))("p-divider-center",t.layout==="horizontal"&&t.align==="center"||t.layout==="vertical"&&(!t.align||t.align==="center"))("p-divider-right",t.layout==="horizontal"&&t.align==="right")("p-divider-top",t.layout==="vertical"&&t.align==="top")("p-divider-bottom",t.layout==="vertical"&&t.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[S([C]),u],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(o,t){o&1&&(x(),n(0,"div",0),w(1),i())},dependencies:[k,z],encapsulation:2,changeDetection:0})}return e})(),D=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=g({type:e});static \u0275inj=p({imports:[P]})}return e})();var m=class e{static \u0275fac=function(l){return new(l||e)};static \u0275cmp=a({type:e,selectors:[["app-team"]],decls:52,vars:0,consts:[[1,"bg-white","py-6","sm:py-8","lg:py-12","flex","justify-center"],[1,"mx-auto","max-w-screen-xl","px-4","md:px-8","text-center"],[1,"grid","gap-8","md:grid-cols-2","lg:gap-12","items-center"],[1,"md:pt-8","lg:flex","lg:flex-col","lg:justify-center"],[1,"tracking-wide","uppercase","flex","flex-col","text-3xl","font-bold","text-start","p-3","w-full","md:w-72"],[1,"w-16","h-[2px]","bg-black","mb-2"],[1,""],[1,"mb-6","text-gray-500","sm:text-lg","text-justify","ml-3"],[1,"mt-4","flex","justify-center","space-x-4"],["href","#",1,"text-black","text-2xl"],[1,"pi","pi-facebook"],[1,"pi","pi-twitter"],[1,"pi","pi-linkedin"],[1,"flex","justify-center","mt-4","md:mt-0"],[1,"h-[350px]","w-[100%]","overflow-hidden","rounded-lg","bg-gray-100","shadow-lg","md:h-[450px]","md:w-[420px]"],["src","assets/Investigador.jpg","loading","lazy","alt","Investigador",1,"h-full","w-full","object-cover","object-center"],[1,"text-3xl","ml-4","md:ml-40","-mb-10","font-medium","flex","items-center"],[1,"w-[320px]","sm:w-[480px]","md:w-[680px]","h-[2px]","bg-black","ml-2","mt-3","opacity-40"],[1,"px-4","py-8","flex","justify-center"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-10","md:gap-20","max-w-7xl"],[1,"flex","flex-col","p-4","md:flex-row","md:items-center","min-h-[200px]"],[1,"shrink-0","my-1","md:mr-4","md:w-[100px]","md:h-[100px]"],["src","assets/gicaunam.png","alt","",1,"rounded-lg","w-full","h-full","object-cover"],[1,"py-1","sm:py-2"],[1,"mb-2","block","text-sm","font-medium","text-gray-700"],[1,"mb-2","text-xs","text-gray-500"],["href","#",1,"mb-2","block","text-sm","font-medium","text-gray-700"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),d(5,"span",5),r(6," Nombre del Investigador "),i(),n(7,"div",6)(8,"p",7),r(9," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus "),i(),n(10,"p",7),r(11," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus Lorem, ipsum dolor sit amet consectetur adipisicing elit. "),i()(),n(12,"div",8)(13,"a",9),d(14,"i",10),i(),n(15,"a",9),d(16,"i",11),i(),n(17,"a",9),d(18,"i",12),i()()(),n(19,"div",13)(20,"div",14),d(21,"img",15),i()()()()(),n(22,"div",16)(23,"h2"),r(24,"Articulos y contenido del Investigador"),i(),d(25,"span",17),i(),n(26,"div",18)(27,"div",19)(28,"article",20)(29,"div",21),d(30,"img",22),i(),n(31,"div",23)(32,"p",24),r(33," Short walks help reduce stress "),i(),n(34,"p",25),r(35," Lorem ipsum dolor sit amet consectetur. "),i()()(),n(36,"article",20)(37,"div",21),d(38,"img",22),i(),n(39,"div",23)(40,"a",26),r(41,"Short walks help reduce stress"),i(),n(42,"p",25),r(43," Lorem ipsum dolor sit amet consectetur. "),i()()(),n(44,"article",20)(45,"div",21),d(46,"img",22),i(),n(47,"div",23)(48,"a",26),r(49,"Short walks help reduce stress"),i(),n(50,"p",25),r(51," Lorem ipsum dolor sit amet consectetur. "),i()()()()())},dependencies:[D],encapsulation:2})};export{m as default};
