import{d as Lt,p as wt}from"./chunk-ZN5UALDG.js";import{Ab as lt,M as x,N as Tt,Na as Ct,Qa as Rt,S as it,Xa as at,Ya as At,Za as vt,f as Ot,zb as ct}from"./chunk-PRUAM7MN.js";import{a as bt}from"./chunk-7CGTOI24.js";function de(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function fe(t,e){if(t&&e){let i=n=>{de(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[e].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i))}}function he(){return window.innerWidth-document.documentElement.offsetWidth}function M(t){for(let e of document?.styleSheets)try{for(let i of e?.cssRules)for(let n of i?.style)if(t.test(n))return{name:n,value:i.style.getPropertyValue(n).trim()}}catch{}return null}function Pe(t="p-overflow-hidden"){let e=M(/-scrollbar-width$/);e?.name&&document.body.style.setProperty(e.name,he()+"px"),fe(document.body,t)}function De(t,e){if(t&&e){let i=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i))}}function It(t){let e={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),e}function Nt(){let t=window,e=document,i=e.documentElement,n=e.getElementsByTagName("body")[0],r=t.innerWidth||i.clientWidth||n.clientWidth,o=t.innerHeight||i.clientHeight||n.clientHeight;return{width:r,height:o}}function ge(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function me(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function ke(t,e,i=!0){var n,r,o,s;if(t){let c=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:It(t),l=c.height,a=c.width,p=e.offsetHeight,f=e.offsetWidth,u=e.getBoundingClientRect(),d=me(),g=ge(),m=Nt(),S,E,b="top";u.top+p+l>m.height?(S=u.top+d-l,b="bottom",S<0&&(S=d)):S=p+u.top+d,u.left+a>m.width?E=Math.max(0,u.left+g+f-a):E=u.left+g,t.style.top=S+"px",t.style.left=E+"px",t.style.transformOrigin=b,i&&(t.style.marginTop=b==="bottom"?`calc(${(r=(n=M(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=M(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function Fe(t,e){if(t instanceof HTMLElement){let i=t.offsetWidth;if(e){let n=getComputedStyle(t);i+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return i}return 0}function $e(t,e,i=!0){var n,r,o,s;if(t){let c=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:It(t),l=e.offsetHeight,a=e.getBoundingClientRect(),p=Nt(),f,u,d="top";a.top+l+c.height>p.height?(f=-1*c.height,d="bottom",a.top+f<0&&(f=-1*a.top)):f=l,c.width>p.width?u=a.left*-1:a.left+c.width>p.width?u=(a.left+c.width-p.width)*-1:u=0,t.style.top=f+"px",t.style.left=u+"px",t.style.transformOrigin=d,i&&(t.style.marginTop=d==="bottom"?`calc(${(r=(n=M(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=M(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function P(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function xt(t){let e=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?e=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?e=t.el.nativeElement:e=t.el)),P(e)?e:void 0}function He(t,e){let i=xt(t);if(i)i.appendChild(e);else throw new Error("Cannot append "+e+" to "+t)}function pt(t,e={}){if(P(t)){let i=(n,r)=>{var o,s;let c=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((l,a)=>{if(a!=null){let p=typeof a;if(p==="string"||p==="number")l.push(a);else if(p==="object"){let f=Array.isArray(a)?i(n,a):Object.entries(a).map(([u,d])=>n==="style"&&(d||d===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?u:void 0);l=f.length?l.concat(f.filter(u=>!!u)):l}}return l},c)};Object.entries(e).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?pt(t,r):(r=n==="class"?[...new Set(i("class",r))].join(" ").trim():n==="style"?i("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function Me(t,e){if(t){t.style.opacity="0";let i=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-i)/e}`,t.style.opacity=n,i=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function We(t,e){return P(t)?Array.from(t.querySelectorAll(e)):[]}function Ue(t,e){return P(t)?t.matches(e)?t:t.querySelector(e):null}function Be(t,e){t&&document.activeElement!==t&&t.focus(e)}function Ve(t,e){if(P(t)){let i=t.getAttribute(e);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}function Ke(t){if(t){let e=t.offsetHeight,i=getComputedStyle(t);return e-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),e}return 0}function Ge(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function je(t,e){if(t){let i=t.offsetHeight;if(e){let n=getComputedStyle(t);i+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return i}return 0}function Ye(t){if(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),e}return 0}function qe(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ze(t){var e;t&&("remove"in Element.prototype?t.remove():(e=t.parentNode)==null||e.removeChild(t))}function Ze(t,e){let i=xt(t);if(i)i.removeChild(e);else throw new Error("Cannot remove "+e+" from "+t)}function Pt(t,e="",i){P(t)&&i!==null&&i!==void 0&&t.setAttribute(e,i)}function W(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function ut(t,e,i=new WeakSet){if(t===e)return!0;if(!t||!e||typeof t!="object"||typeof e!="object"||i.has(t)||i.has(e))return!1;i.add(t).add(e);let n=Array.isArray(t),r=Array.isArray(e),o,s,c;if(n&&r){if(s=t.length,s!=e.length)return!1;for(o=s;o--!==0;)if(!ut(t[o],e[o],i))return!1;return!0}if(n!=r)return!1;let l=t instanceof Date,a=e instanceof Date;if(l!=a)return!1;if(l&&a)return t.getTime()==e.getTime();let p=t instanceof RegExp,f=e instanceof RegExp;if(p!=f)return!1;if(p&&f)return t.toString()==e.toString();let u=Object.keys(t);if(s=u.length,s!==Object.keys(e).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,u[o]))return!1;for(o=s;o--!==0;)if(c=u[o],!ut(t[c],e[c],i))return!1;return!0}function ye(t,e){return ut(t,e)}function kt(t){return!!(t&&t.constructor&&t.call&&t.apply)}function h(t){return!W(t)}function dt(t,e){if(!t||!e)return null;try{let i=t[e];if(h(i))return i}catch{}if(Object.keys(t).length){if(kt(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let i=e.split("."),n=t;for(let r=0,o=i.length;r<o;++r){if(n==null)return null;n=n[i[r]]}return n}}return null}function Se(t,e,i){return i?dt(t,i)===dt(e,i):ye(t,e)}function Qe(t,e){let i=-1;if(h(t))try{i=t.findLastIndex(e)}catch{i=t.lastIndexOf([...t].reverse().find(e))}return i}function A(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function O(t,...e){return kt(t)?t(...e):t}function L(t,e=!0){return typeof t=="string"&&(e||t!=="")}function Dt(t){return L(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Ft(t,e="",i={}){let n=Dt(e).split("."),r=n.shift();return r?A(t)?Ft(O(t[Object.keys(t).find(o=>Dt(o)===r)||""],i),n.join("."),i):void 0:O(t,i)}function nt(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function $t(t){return h(t)&&!isNaN(t)}function Je(t=""){return h(t)&&t.length===1&&!!t.match(/\S| /)}function _(t,e){if(e){let i=e.test(t);return e.lastIndex=0,i}return!1}function I(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function rt(t){return L(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,i)=>i===0?e:"-"+e.toLowerCase()).toLowerCase():t}function ft(t){return L(t)?t.replace(/[A-Z]/g,(e,i)=>i===0?e:"."+e.toLowerCase()).toLowerCase():t}var st={};function ei(t="pui_id_"){return st.hasOwnProperty(t)||(st[t]=0),st[t]++,`${t}${st[t]}`}function Ht(){let t=new Map;return{on(e,i){let n=t.get(e);return n?n.push(i):n=[i],t.set(e,n),this},off(e,i){let n=t.get(e);return n&&n.splice(n.indexOf(i)>>>0,1),this},emit(e,i){let n=t.get(e);n&&n.slice().map(r=>{r(i)})},clear(){t.clear()}}}function _e(){let t=[],e=(s,c,l=999)=>{let a=r(s,c,l),p=a.value+(a.key===s?0:l)+1;return t.push({key:s,value:p}),p},i=s=>{t=t.filter(c=>c.value!==s)},n=(s,c)=>r(s,c).value,r=(s,c,l=0)=>[...t].reverse().find(a=>c?!0:a.key===s)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,c,l)=>{c&&(c.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(i(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var oi=_e();var Wt=["*"];var Ei=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var bi=(()=>{class t{clickSource=new Ot;clickObservable=this.clickSource.asObservable();add(i){i&&this.clickSource.next(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Oi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=at({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Wt,decls:1,vars:0,template:function(n,r){n&1&&(ct(),lt(0))},encapsulation:2})}return t})(),Ti=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=at({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Wt,decls:1,vars:0,template:function(n,r){n&1&&(ct(),lt(0))},encapsulation:2})}return t})(),Ci=(()=>{class t{template;type;name;constructor(i){this.template=i}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(Rt(Ct))};static \u0275dir=vt({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Ri=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=At({type:t});static \u0275inj=Tt({imports:[wt]})}return t})(),Ai=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Ee=Object.defineProperty,be=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,ot=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Ut=(t,e,i)=>e in t?Ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,R=(t,e)=>{for(var i in e||(e={}))Vt.call(e,i)&&Ut(t,i,e[i]);if(ot)for(var i of ot(e))Kt.call(e,i)&&Ut(t,i,e[i]);return t},ht=(t,e)=>be(t,Oe(e)),v=(t,e)=>{var i={};for(var n in t)Vt.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&ot)for(var n of ot(t))e.indexOf(n)<0&&Kt.call(t,n)&&(i[n]=t[n]);return i};var Te=Ht(),N=Te;function Bt(t,e){nt(t)?t.push(...e||[]):A(t)&&Object.assign(t,e)}function Ce(t){return A(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Re(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function gt(t="",e=""){return Re(`${L(t,!1)&&L(e,!1)?`${t}-`:t}${e}`)}function Gt(t="",e=""){return`--${gt(t,e)}`}function Ae(t=""){let e=(t.match(/{/g)||[]).length,i=(t.match(/}/g)||[]).length;return(e+i)%2!==0}function jt(t,e="",i="",n=[],r){if(L(t)){let o=/{([^}]*)}/g,s=t.trim();if(Ae(s))return;if(_(s,o)){let c=s.replaceAll(o,p=>{let u=p.replace(/{|}/g,"").split(".").filter(d=>!n.some(g=>_(d,g)));return`var(${Gt(i,rt(u.join("-")))}${h(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,a=/var\([^)]+\)/g;return _(c.replace(a,"0"),l)?`calc(${c})`:c}return s}else if($t(t))return t}function ve(t,e,i){L(e,!1)&&t.push(`${e}:${i};`)}function D(t,e){return t?`${t}{${e}}`:""}var k=(...t)=>Le(y.getTheme(),...t),Le=(t={},e,i,n)=>{if(e){let{variable:r,options:o}=y.defaults||{},{prefix:s,transform:c}=t?.options||o||{},a=_(e,/{([^}]*)}/g)?e:`{${e}}`;return n==="value"||W(n)&&c==="strict"?y.getTokenValue(e):jt(a,void 0,s,[r.excludedKeyRegex],i)}return""};function we(t,e={}){let i=y.defaults.variable,{prefix:n=i.prefix,selector:r=i.selector,excludedKeyRegex:o=i.excludedKeyRegex}=e,s=(a,p="")=>Object.entries(a).reduce((f,[u,d])=>{let g=_(u,o)?gt(p):gt(p,rt(u)),m=Ce(d);if(A(m)){let{variables:S,tokens:E}=s(m,g);Bt(f.tokens,E),Bt(f.variables,S)}else f.tokens.push((n?g.replace(`${n}-`,""):g).replaceAll("-",".")),ve(f.variables,Gt(g),jt(m,g,n,[o]));return f},{variables:[],tokens:[]}),{variables:c,tokens:l}=s(t,n);return{value:c,tokens:l,declarations:c.join(""),css:D(r,c.join(""))}}var C={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let e=Object.keys(this.rules).filter(i=>i!=="custom").map(i=>this.rules[i]);return[t].flat().map(i=>{var n;return(n=e.map(r=>r.resolve(i)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(i)})}},_toVariables(t,e){return we(t,{prefix:e?.prefix})},getCommon({name:t="",theme:e={},params:i,set:n,defaults:r}){var o,s,c,l,a,p,f;let{preset:u,options:d}=e,g,m,S,E,b,w,T;if(h(u)&&d.transform!=="strict"){let{primitive:U,semantic:B,extend:V}=u,F=B||{},{colorScheme:K}=F,G=v(F,["colorScheme"]),j=V||{},{colorScheme:Y}=j,$=v(j,["colorScheme"]),H=K||{},{dark:q}=H,z=v(H,["dark"]),Z=Y||{},{dark:X}=Z,Q=v(Z,["dark"]),J=h(U)?this._toVariables({primitive:U},d):{},tt=h(G)?this._toVariables({semantic:G},d):{},et=h(z)?this._toVariables({light:z},d):{},yt=h(q)?this._toVariables({dark:q},d):{},St=h($)?this._toVariables({semantic:$},d):{},_t=h(Q)?this._toVariables({light:Q},d):{},Et=h(X)?this._toVariables({dark:X},d):{},[qt,zt]=[(o=J.declarations)!=null?o:"",J.tokens],[Zt,Xt]=[(s=tt.declarations)!=null?s:"",tt.tokens||[]],[Qt,Jt]=[(c=et.declarations)!=null?c:"",et.tokens||[]],[te,ee]=[(l=yt.declarations)!=null?l:"",yt.tokens||[]],[ie,ne]=[(a=St.declarations)!=null?a:"",St.tokens||[]],[re,se]=[(p=_t.declarations)!=null?p:"",_t.tokens||[]],[oe,ae]=[(f=Et.declarations)!=null?f:"",Et.tokens||[]];g=this.transformCSS(t,qt,"light","variable",d,n,r),m=zt;let ce=this.transformCSS(t,`${Zt}${Qt}`,"light","variable",d,n,r),le=this.transformCSS(t,`${te}`,"dark","variable",d,n,r);S=`${ce}${le}`,E=[...new Set([...Xt,...Jt,...ee])];let pe=this.transformCSS(t,`${ie}${re}color-scheme:light`,"light","variable",d,n,r),ue=this.transformCSS(t,`${oe}color-scheme:dark`,"dark","variable",d,n,r);b=`${pe}${ue}`,w=[...new Set([...ne,...se,...ae])],T=O(u.css,{dt:k})}return{primitive:{css:g,tokens:m},semantic:{css:S,tokens:E},global:{css:b,tokens:w},style:T}},getPreset({name:t="",preset:e={},options:i,params:n,set:r,defaults:o,selector:s}){var c,l,a;let p,f,u;if(h(e)&&i.transform!=="strict"){let d=t.replace("-directive",""),g=e,{colorScheme:m,extend:S,css:E}=g,b=v(g,["colorScheme","extend","css"]),w=S||{},{colorScheme:T}=w,U=v(w,["colorScheme"]),B=m||{},{dark:V}=B,F=v(B,["dark"]),K=T||{},{dark:G}=K,j=v(K,["dark"]),Y=h(b)?this._toVariables({[d]:R(R({},b),U)},i):{},$=h(F)?this._toVariables({[d]:R(R({},F),j)},i):{},H=h(V)?this._toVariables({[d]:R(R({},V),G)},i):{},[q,z]=[(c=Y.declarations)!=null?c:"",Y.tokens||[]],[Z,X]=[(l=$.declarations)!=null?l:"",$.tokens||[]],[Q,J]=[(a=H.declarations)!=null?a:"",H.tokens||[]],tt=this.transformCSS(d,`${q}${Z}`,"light","variable",i,r,o,s),et=this.transformCSS(d,Q,"dark","variable",i,r,o,s);p=`${tt}${et}`,f=[...new Set([...z,...X,...J])],u=O(E,{dt:k})}return{css:p,tokens:f,style:u}},getPresetC({name:t="",theme:e={},params:i,set:n,defaults:r}){var o;let{preset:s,options:c}=e,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:c,params:i,set:n,defaults:r})},getPresetD({name:t="",theme:e={},params:i,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:c,options:l}=e,a=(o=c?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:a,options:l,params:i,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,e){var i;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?e.options.darkModeSelector:(i=t.darkModeSelector)!=null?i:e.options.darkModeSelector):[]},getLayerOrder(t,e={},i,n){let{cssLayer:r}=e;return r?`@layer ${O(r.order||"primeui",i)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:i,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:e,params:i,set:r,defaults:o}),c=Object.entries(n).reduce((l,[a,p])=>l.push(`${a}="${p}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[a,p])=>{if(p?.css){let f=I(p?.css),u=`${a}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${u}" ${c}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:e={},params:i,props:n={},set:r,defaults:o}){var s;let c={name:t,theme:e,params:i,set:r,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(c):this.getPresetC(c))==null?void 0:s.css,a=Object.entries(n).reduce((p,[f,u])=>p.push(`${f}="${u}"`)&&p,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${a}>${I(l)}</style>`:""},createTokens(t={},e,i="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let c=_(o,e.variable.excludedKeyRegex)?i:i?`${i}.${ft(o)}`:ft(o),l=n?`${n}.${o}`:o;A(s)?this.createTokens(s,e,c,l,r):(r[c]||(r[c]={paths:[],computed(a,p={}){var f,u;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,p.binding):a&&a!=="none"?(u=this.paths.find(d=>d.scheme===a))==null?void 0:u.computed(a,p.binding):this.paths.map(d=>d.computed(d.scheme,p[d.scheme]))}}),r[c].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(a,p={}){let f=/{([^}]*)}/g,u=s;if(p.name=this.path,p.binding||(p.binding={}),_(s,f)){let g=s.trim().replaceAll(f,E=>{var b;let w=E.replace(/{|}/g,""),T=(b=r[w])==null?void 0:b.computed(a,p);return nt(T)&&T.length===2?`light-dark(${T[0].value},${T[1].value})`:T?.value}),m=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,S=/var\([^)]+\)/g;u=_(g.replace(S,"0"),m)?`calc(${g})`:g}return W(p.binding)&&delete p.binding,{colorScheme:a,path:this.path,paths:p,value:u.includes("undefined")?void 0:u}}}))}),r},getTokenValue(t,e,i){var n;let o=(l=>l.split(".").filter(p=>!_(p.toLowerCase(),i.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,c=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(l=>l);return c.length===1?c[0].value:c.reduce((l={},a)=>{let p=a,{colorScheme:f}=p,u=v(p,["colorScheme"]);return l[f]=u,l},void 0)},getSelectorRule(t,e,i,n){return i==="class"||i==="attr"?D(h(e)?`${t}${e},${t} ${e}`:t,n):D(t,h(e)?D(e,n):n)},transformCSS(t,e,i,n,r={},o,s,c){if(h(e)){let{cssLayer:l}=r;if(n!=="style"){let a=this.getColorSchemeOption(r,s);e=i==="dark"?a.reduce((p,{type:f,selector:u})=>(h(u)&&(p+=u.includes("[CSS]")?u.replace("[CSS]",e):this.getSelectorRule(u,c,f,e)),p),""):D(c??":root",e)}if(l){let a={name:"primeui",order:"primeui"};A(l)&&(a.name=O(l.name,{name:t,type:n})),h(a.name)&&(e=D(`@layer ${a.name}`,e),o?.layerNames(a.name))}return e}return""}},y={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:e}=t;e&&(this._theme=ht(R({},e),{options:R(R({},this.defaults.options),e.options)}),this._tokens=C.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),N.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ht(R({},this.theme),{preset:t}),this._tokens=C.createTokens(t,this.defaults),this.clearLoadedStyleNames(),N.emit("preset:change",t),N.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ht(R({},this.theme),{options:t}),this.clearLoadedStyleNames(),N.emit("options:change",t),N.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return C.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return C.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){let i={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return C.getPresetC(i)},getDirective(t="",e){let i={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return C.getPresetD(i)},getCustomPreset(t="",e,i,n){let r={name:t,preset:e,options:this.options,selector:i,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return C.getPreset(r)},getLayerOrderCSS(t=""){return C.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,i="style",n){return C.transformCSS(t,e,n,i,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,i={}){return C.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,i={}){return C.getStyleSheet({name:t,theme:this.theme,params:e,props:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),N.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&N.emit("theme:load"))}};var Ie=0,Yt=(()=>{class t{document=it(Lt);use(i,n={}){let r=!1,o=i,s=null,{immediate:c=!0,manual:l=!1,name:a=`style_${++Ie}`,id:p=void 0,media:f=void 0,nonce:u=void 0,first:d=!1,props:g={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${a}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),!s.isConnected){o=i,pt(s,{type:"text/css",media:f,nonce:u});let m=this.document.head;d&&m.firstChild?m.insertBefore(s,m.firstChild):m.appendChild(s),Pt(s,"data-primeng-style-id",a)}return s.textContent!==o&&(s.textContent=o),{id:p,name:a,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zi={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ne=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,xe=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Zi=(()=>{class t{name="base";useStyle=it(Yt);theme=void 0;css=void 0;classes={};inlineStyles={};load=(i,n={},r=o=>o)=>{let o=r(O(i,{dt:k}));return o?this.useStyle.use(I(o),bt({name:this.name},n)):{}};loadCSS=(i={})=>this.load(this.css,i);loadTheme=(i={},n="")=>this.load(this.theme,i,(r="")=>y.transformCSS(i.name||this.name,`${r}${n}`));loadGlobalCSS=(i={})=>this.load(xe,i);loadGlobalTheme=(i={},n="")=>this.load(Ne,i,(r="")=>y.transformCSS(i.name||this.name,`${r}${n}`));getCommonTheme=i=>y.getCommon(this.name,i);getComponentTheme=i=>y.getComponent(this.name,i);getDirectiveTheme=i=>y.getDirective(this.name,i);getPresetTheme=(i,n,r)=>y.getCustomPreset(this.name,i,n,r);getLayerOrderThemeCSS=()=>y.getLayerOrderCSS(this.name);getStyleSheet=(i="",n={})=>{if(this.css){let r=O(this.css,{dt:k}),o=I(`${r}${i}`),s=Object.entries(n).reduce((c,[l,a])=>c.push(`${l}="${a}"`)&&c,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(i,n={})=>y.getCommonStyleSheet(this.name,i,n);getThemeStyleSheet=(i,n={})=>{let r=[y.getStyleSheet(this.name,i,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=O(this.theme,{dt:k}),c=I(y.transformCSS(o,s)),l=Object.entries(n).reduce((a,[p,f])=>a.push(`${p}="${f}"`)&&a,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${c}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();export{de as a,fe as b,Pe as c,De as d,Nt as e,ge as f,me as g,ke as h,Fe as i,$e as j,He as k,Me as l,We as m,Ue as n,Be as o,Ve as p,Ke as q,Ge as r,je as s,Ye as t,qe as u,ze as v,Ze as w,W as x,h as y,Se as z,Qe as A,O as B,Ft as C,Je as D,ei as E,Ei as F,bi as G,Oi as H,Ti as I,Ci as J,Ri as K,Ai as L,N as M,y as N,zi as O,Zi as P};
