import{d as j,f as _}from"./chunk-5LPF46PW.js";import"./chunk-IKFVDKXJ.js";import"./chunk-CPGEDXAP.js";import{l as E,p as y}from"./chunk-YO5647O3.js";import{Ea as b,Fb as n,Gb as p,Ha as s,Ta as x,W as u,X as f,Za as c,fb as m,hb as v,lb as e,mb as t,nb as r,rb as h,tb as S,ub as d,xb as w}from"./chunk-74LHGVYO.js";import"./chunk-7CGTOI24.js";function T(a,o){if(a&1){let i=h();e(0,"button",21),S("click",function(){let C=u(i).$implicit,F=d();return f(F.cambiarCategoria(C))}),t()}if(a&2){let i=o.$implicit,l=d();v("p-button-secondary",i!==l.categoriaSeleccionada)("p-button-primary",i===l.categoriaSeleccionada),m("label",i)}}function P(a,o){if(a&1&&(e(0,"div",22),r(1,"img",23),e(2,"div",24)(3,"h3",25),n(4),t(),e(5,"p",18),n(6),t()()()),a&2){let i=o.$implicit;s(),w("alt",i.nombre),m("src",i.imagen,b),s(3),p(i.nombre),s(2),p(i.descripcion)}}var g=class a{categorias=["Todos","Direccion","Investigadores","Profesionales","Administrativos"];categoriaSeleccionada="Todos";profesionales=[{nombre:"Pepe Peres Pamela",categoria:"Direccion",imagen:"assets/img1.jpg",descripcion:"L\xEDder del equipo"},{nombre:"Ambienta Ambiental",categoria:"Investigadores",imagen:"assets/img2.jpg",descripcion:"Especialista en medio ambiente"},{nombre:"Carlos Mendoza",categoria:"Profesionales",imagen:"assets/img3.jpg",descripcion:"Ingeniero de software"},{nombre:"Mar\xEDa Torres",categoria:"Administrativos",imagen:"assets/img4.jpg",descripcion:"Coordinadora de proyectos"}];get profesionalesFiltrados(){return this.categoriaSeleccionada==="Todos"?this.profesionales:this.profesionales.filter(o=>o.categoria===this.categoriaSeleccionada)}cambiarCategoria(o){this.categoriaSeleccionada=o}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=x({type:a,selectors:[["app-teamjob"]],decls:46,vars:2,consts:[[1,"container","mx-auto","p-5","max-w-7xl","mt-16","mb-28"],[1,"text-3xl","font-bold","mb-4","text-start","flex","items-center"],[1,"w-8","h-[2px]","bg-black","mr-2"],[1,"flex","flex-wrap","justify-center","gap-3","mb-6","content-start","mr-64"],["pButton","","class","p-button-outlined",3,"label","p-button-secondary","p-button-primary","click",4,"ngFor","ngForOf"],[1,"grid","grid-cols-1","md:grid-cols-4","gap-14","items-start"],[1,"md:col-span-3","grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-4"],["class","shadow-lg rounded-lg overflow-hidden bg-white",4,"ngFor","ngForOf"],[1,"bg-gray-100","p-6","rounded-lg","shadow-lg","w-full","md:w-80","h-[500px]","overflow-y-auto","self-start","-mt-20"],[1,"text-lg","font-bold","text-center","text-blue-600"],[1,"text-gray-600","text-center","text-sm"],[1,"mt-4","space-y-4"],[1,"bg-white","p-4","rounded-lg","shadow","flex"],[1,"flex","flex-col","items-center","w-20"],["src","assets/gicaunam.png","alt","Evento",1,"w-16","h-16","rounded-lg","object-cover"],[1,"text-gray-500","text-xs","mt-1","text-center"],[1,"ml-4","flex-1"],[1,"font-bold","text-sm"],[1,"text-gray-600","text-xs"],["src","assets/gicaunam.png","alt","Actualizaci\xF3n",1,"w-16","h-16","rounded-lg","object-cover"],["src","assets/gicaunam.png","alt","Asociaci\xF3n",1,"w-16","h-16","rounded-lg","object-cover"],["pButton","",1,"p-button-outlined",3,"click","label"],[1,"shadow-lg","rounded-lg","overflow-hidden","bg-white"],[1,"w-full","h-32","object-cover",3,"src","alt"],[1,"p-3"],[1,"text-sm","font-bold"]],template:function(i,l){i&1&&(e(0,"div",0)(1,"h2",1),r(2,"span",2),n(3,"Equipo "),t(),e(4,"div",3),c(5,T,1,5,"button",4),t(),r(6,"br"),e(7,"div",5)(8,"div",6),c(9,P,7,4,"div",7),t(),e(10,"div",8)(11,"h2",9),n(12,"Noticias"),t(),e(13,"p",10),n(14,"\xDAltimas novedades"),t(),e(15,"div",11)(16,"div",12)(17,"div",13),r(18,"img",14),e(19,"p",15),n(20," 15 de Noviembre "),t()(),e(21,"div",16)(22,"h3",17),n(23,"Nuevo Evento Disponible"),t(),e(24,"p",18),n(25,"\xA1Inscr\xEDbete antes del 10!"),t()()(),e(26,"div",12)(27,"div",13),r(28,"img",19),e(29,"p",15),n(30,"Hace 3 d\xEDas"),t()(),e(31,"div",16)(32,"h3",17),n(33,"Actualizaci\xF3n del Proyecto"),t(),e(34,"p",18),n(35," Se han mejorado las funciones de la plataforma. "),t()()(),e(36,"div",12)(37,"div",13),r(38,"img",20),e(39,"p",15),n(40,"Publicado hoy"),t()(),e(41,"div",16)(42,"h3",17),n(43,"Nueva Asociaci\xF3n"),t(),e(44,"p",18),n(45," Ahora colaboramos con una nueva entidad. "),t()()()()()()()),i&2&&(s(5),m("ngForOf",l.categorias),s(4),m("ngForOf",l.profesionalesFiltrados))},dependencies:[_,j,y,E],encapsulation:2})};export{g as default};
