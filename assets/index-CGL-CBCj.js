(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ao(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const rt={},dn=[],Lt=()=>{},sc=()=>!1,ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),io=t=>t.startsWith("onUpdate:"),ht=Object.assign,oo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lc=Object.prototype.hasOwnProperty,B=(t,e)=>lc.call(t,e),W=Array.isArray,mn=t=>ca(t)==="[object Map]",Hl=t=>ca(t)==="[object Set]",H=t=>typeof t=="function",ct=t=>typeof t=="string",Ze=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",$l=t=>(at(t)||H(t))&&H(t.then)&&H(t.catch),Bl=Object.prototype.toString,ca=t=>Bl.call(t),fc=t=>ca(t).slice(8,-1),Vl=t=>ca(t)==="[object Object]",so=t=>ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,In=ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uc=/-(\w)/g,bn=da(t=>t.replace(uc,(e,n)=>n?n.toUpperCase():"")),cc=/\B([A-Z])/g,kn=da(t=>t.replace(cc,"-$1").toLowerCase()),ql=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),Aa=da(t=>t?`on${ql(t)}`:""),Pe=(t,e)=>!Object.is(t,e),Ma=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Gl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let is;const Kl=()=>is||(is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ma(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=ct(r)?gc(r):ma(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(ct(t)||at(t))return t}const mc=/;(?![^(]*\))/g,pc=/:([^]+)/,hc=/\/\*[^]*?\*\//g;function gc(t){const e={};return t.replace(hc,"").split(mc).forEach(n=>{if(n){const r=n.split(pc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ae(t){let e="";if(ct(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=ae(t[n]);r&&(e+=r+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function vc(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ct(e)&&(t.class=ae(e)),n&&(t.style=ma(n)),t}const bc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yc=ao(bc);function Xl(t){return!!t||t===""}const on=t=>ct(t)?t:t==null?"":W(t)||at(t)&&(t.toString===Bl||!H(t.toString))?JSON.stringify(t,Ql,2):String(t),Ql=(t,e)=>e&&e.__v_isRef?Ql(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[Ea(r,i)+" =>"]=a,n),{})}:Hl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ea(n))}:Ze(e)?Ea(e):at(e)&&!W(e)&&!Vl(e)?String(e):e,Ea=(t,e="")=>{var n;return Ze(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class Jl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function wc(t){return new Jl(t)}function xc(t,e=Tt){e&&e.active&&e.effects.push(t)}function Zl(){return Tt}function kc(t){Tt&&Tt.cleanups.push(t)}let qe;class lo{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,xc(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Re();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(_c(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Le()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Se,n=qe;try{return Se=!0,qe=this,this._runnings++,os(this),this.fn()}finally{ss(this),this._runnings--,qe=n,Se=e}}stop(){this.active&&(os(this),ss(this),this.onStop&&this.onStop(),this.active=!1)}}function _c(t){return t.value}function os(t){t._trackId++,t._depsLength=0}function ss(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)tf(t.deps[e],t);t.deps.length=t._depsLength}}function tf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Se=!0,Ga=0;const ef=[];function Re(){ef.push(Se),Se=!1}function Le(){const t=ef.pop();Se=t===void 0?!0:t}function fo(){Ga++}function uo(){for(Ga--;!Ga&&Ka.length;)Ka.shift()()}function nf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&tf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ka=[];function rf(t,e,n){fo();for(const r of t.keys()){let a;r._dirtyLevel<e&&(a??(a=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(a??(a=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ka.push(r.scheduler)))}uo()}const af=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Xr=new WeakMap,Ge=Symbol(""),Xa=Symbol("");function Mt(t,e,n){if(Se&&qe){let r=Xr.get(t);r||Xr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=af(()=>r.delete(n))),nf(qe,a)}}function ie(t,e,n,r,a,i){const o=Xr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&W(t)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||!Ze(u)&&u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":W(t)?so(n)&&s.push(o.get("length")):(s.push(o.get(Ge)),mn(t)&&s.push(o.get(Xa)));break;case"delete":W(t)||(s.push(o.get(Ge)),mn(t)&&s.push(o.get(Xa)));break;case"set":mn(t)&&s.push(o.get(Ge));break}fo();for(const l of s)l&&rf(l,4);uo()}function Oc(t,e){const n=Xr.get(t);return n&&n.get(e)}const Sc=ao("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ze)),ls=Cc();function Cc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Mt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Re(),fo();const r=V(this)[e].apply(this,n);return uo(),Le(),r}}),t}function Pc(t){Ze(t)||(t=String(t));const e=V(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class sf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Uc:cf:i?uf:ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=W(e);if(!a){if(o&&B(ls,n))return Reflect.get(ls,n,r);if(n==="hasOwnProperty")return Pc}const s=Reflect.get(e,n,r);return(Ze(n)?of.has(n):Sc(n))||(a||Mt(e,"get",n),i)?s:xt(s)?o&&so(n)?s:s.value:at(s)?a?ho(s):po(s):s}}class lf extends sf{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._isShallow){const l=Bn(i);if(!Qr(r)&&!Bn(r)&&(i=V(i),r=V(r)),!W(e)&&xt(i)&&!xt(r))return l?!1:(i.value=r,!0)}const o=W(e)&&so(n)?Number(n)<e.length:B(e,n),s=Reflect.set(e,n,r,a);return e===V(a)&&(o?Pe(r,i)&&ie(e,"set",n,r):ie(e,"add",n,r)),s}deleteProperty(e,n){const r=B(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&ie(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Ze(n)||!of.has(n))&&Mt(e,"has",n),r}ownKeys(e){return Mt(e,"iterate",W(e)?"length":Ge),Reflect.ownKeys(e)}}class Ac extends sf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Mc=new lf,Ec=new Ac,Tc=new lf(!0);const co=t=>t,pa=t=>Reflect.getPrototypeOf(t);function gr(t,e,n=!1,r=!1){t=t.__v_raw;const a=V(t),i=V(e);n||(Pe(e,i)&&Mt(a,"get",e),Mt(a,"get",i));const{has:o}=pa(a),s=r?co:n?vo:Vn;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function vr(t,e=!1){const n=this.__v_raw,r=V(n),a=V(t);return e||(Pe(t,a)&&Mt(r,"has",t),Mt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function br(t,e=!1){return t=t.__v_raw,!e&&Mt(V(t),"iterate",Ge),Reflect.get(t,"size",t)}function fs(t){t=V(t);const e=V(this);return pa(e).has.call(e,t)||(e.add(t),ie(e,"add",t,t)),this}function us(t,e){e=V(e);const n=V(this),{has:r,get:a}=pa(n);let i=r.call(n,t);i||(t=V(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Pe(e,o)&&ie(n,"set",t,e):ie(n,"add",t,e),this}function cs(t){const e=V(this),{has:n,get:r}=pa(e);let a=n.call(e,t);a||(t=V(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&ie(e,"delete",t,void 0),i}function ds(){const t=V(this),e=t.size!==0,n=t.clear();return e&&ie(t,"clear",void 0,void 0),n}function yr(t,e){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=e?co:t?vo:Vn;return!t&&Mt(s,"iterate",Ge),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function wr(t,e,n){return function(...r){const a=this.__v_raw,i=V(a),o=mn(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,f=a[t](...r),u=n?co:e?vo:Vn;return!e&&Mt(i,"iterate",l?Xa:Ge),{next(){const{value:c,done:h}=f.next();return h?{value:c,done:h}:{value:s?[u(c[0]),u(c[1])]:u(c),done:h}},[Symbol.iterator](){return this}}}}function ye(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Nc(){const t={get(i){return gr(this,i)},get size(){return br(this)},has:vr,add:fs,set:us,delete:cs,clear:ds,forEach:yr(!1,!1)},e={get(i){return gr(this,i,!1,!0)},get size(){return br(this)},has:vr,add:fs,set:us,delete:cs,clear:ds,forEach:yr(!1,!0)},n={get(i){return gr(this,i,!0)},get size(){return br(this,!0)},has(i){return vr.call(this,i,!0)},add:ye("add"),set:ye("set"),delete:ye("delete"),clear:ye("clear"),forEach:yr(!0,!1)},r={get(i){return gr(this,i,!0,!0)},get size(){return br(this,!0)},has(i){return vr.call(this,i,!0)},add:ye("add"),set:ye("set"),delete:ye("delete"),clear:ye("clear"),forEach:yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wr(i,!1,!1),n[i]=wr(i,!0,!1),e[i]=wr(i,!1,!0),r[i]=wr(i,!0,!0)}),[t,n,e,r]}const[Ic,jc,Rc,Lc]=Nc();function mo(t,e){const n=e?t?Lc:Rc:t?jc:Ic;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const Dc={get:mo(!1,!1)},zc={get:mo(!1,!0)},Fc={get:mo(!0,!1)};const ff=new WeakMap,uf=new WeakMap,cf=new WeakMap,Uc=new WeakMap;function Yc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wc(t){return t.__v_skip||!Object.isExtensible(t)?0:Yc(fc(t))}function po(t){return Bn(t)?t:go(t,!1,Mc,Dc,ff)}function Hc(t){return go(t,!1,Tc,zc,uf)}function ho(t){return go(t,!0,Ec,Fc,cf)}function go(t,e,n,r,a){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Wc(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function jn(t){return Bn(t)?jn(t.__v_raw):!!(t&&t.__v_isReactive)}function Bn(t){return!!(t&&t.__v_isReadonly)}function Qr(t){return!!(t&&t.__v_isShallow)}function df(t){return t?!!t.__v_raw:!1}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function mf(t){return Object.isExtensible(t)&&Gl(t,"__v_skip",!0),t}const Vn=t=>at(t)?po(t):t,vo=t=>at(t)?ho(t):t;class pf{constructor(e,n,r,a){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new lo(()=>e(this._value),()=>Rn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=V(this);return(!e._cacheable||e.effect.dirty)&&Pe(e._value,e._value=e.effect.run())&&Rn(e,4),bo(e),e.effect._dirtyLevel>=2&&Rn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function $c(t,e,n=!1){let r,a;const i=H(t);return i?(r=t,a=Lt):(r=t.get,a=t.set),new pf(r,a,i||!a,n)}function bo(t){var e;Se&&qe&&(t=V(t),nf(qe,(e=t.dep)!=null?e:t.dep=af(()=>t.dep=void 0,t instanceof pf?t:void 0)))}function Rn(t,e=4,n){t=V(t);const r=t.dep;r&&rf(r,e)}function xt(t){return!!(t&&t.__v_isRef===!0)}function oe(t){return Bc(t,!1)}function Bc(t,e){return xt(t)?t:new Vc(t,e)}class Vc{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:Vn(e)}get value(){return bo(this),this._value}set value(e){const n=this.__v_isShallow||Qr(e)||Bn(e);e=n?e:V(e),Pe(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vn(e),Rn(this,4))}}function Rt(t){return xt(t)?t.value:t}const qc={get:(t,e,n)=>Rt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return xt(a)&&!xt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function hf(t){return jn(t)?t:new Proxy(t,qc)}class Gc{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>bo(this),()=>Rn(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function Kc(t){return new Gc(t)}class Xc{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Oc(V(this._object),this._key)}}class Qc{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Jc(t,e,n){return xt(t)?t:H(t)?new Qc(t):at(t)&&arguments.length>1?Zc(t,e,n):oe(t)}function Zc(t,e,n){const r=t[e];return xt(r)?r:new Xc(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ce(t,e,n,r){try{return r?t(...r):t()}catch(a){ha(a,e,n)}}function Bt(t,e,n,r){if(H(t)){const a=Ce(t,e,n,r);return a&&$l(a)&&a.catch(i=>{ha(i,e,n)}),a}if(W(t)){const a=[];for(let i=0;i<t.length;i++)a.push(Bt(t[i],e,n,r));return a}}function ha(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Re(),Ce(l,null,10,[t,o,s]),Le();return}}td(t,n,a,r)}function td(t,e,n,r=!0){console.error(t)}let qn=!1,Qa=!1;const yt=[];let Xt=0;const pn=[];let ke=null,Ye=0;const gf=Promise.resolve();let yo=null;function ed(t){const e=yo||gf;return t?e.then(this?t.bind(this):t):e}function nd(t){let e=Xt+1,n=yt.length;for(;e<n;){const r=e+n>>>1,a=yt[r],i=Gn(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function wo(t){(!yt.length||!yt.includes(t,qn&&t.allowRecurse?Xt+1:Xt))&&(t.id==null?yt.push(t):yt.splice(nd(t.id),0,t),vf())}function vf(){!qn&&!Qa&&(Qa=!0,yo=gf.then(yf))}function rd(t){const e=yt.indexOf(t);e>Xt&&yt.splice(e,1)}function ad(t){W(t)?pn.push(...t):(!ke||!ke.includes(t,t.allowRecurse?Ye+1:Ye))&&pn.push(t),vf()}function ms(t,e,n=qn?Xt+1:0){for(;n<yt.length;n++){const r=yt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r()}}}function bf(t){if(pn.length){const e=[...new Set(pn)].sort((n,r)=>Gn(n)-Gn(r));if(pn.length=0,ke){ke.push(...e);return}for(ke=e,Ye=0;Ye<ke.length;Ye++)ke[Ye]();ke=null,Ye=0}}const Gn=t=>t.id==null?1/0:t.id,id=(t,e)=>{const n=Gn(t)-Gn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yf(t){Qa=!1,qn=!0,yt.sort(id);try{for(Xt=0;Xt<yt.length;Xt++){const e=yt[Xt];e&&e.active!==!1&&Ce(e,null,14)}}finally{Xt=0,yt.length=0,bf(),qn=!1,yo=null,(yt.length||pn.length)&&yf()}}function od(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||rt;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:c,trim:h}=r[u]||rt;h&&(a=n.map(y=>ct(y)?y.trim():y)),c&&(a=n.map(dc))}let s,l=r[s=Aa(e)]||r[s=Aa(bn(e))];!l&&i&&(l=r[s=Aa(kn(e))]),l&&Bt(l,t,6,a);const f=r[s+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Bt(f,t,6,a)}}function wf(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!H(t)){const l=f=>{const u=wf(f,e,!0);u&&(s=!0,ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(at(t)&&r.set(t,null),null):(W(i)?i.forEach(l=>o[l]=null):ht(o,i),at(t)&&r.set(t,o),o)}function ga(t,e){return!t||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,kn(e))||B(t,e))}let Ot=null,xf=null;function Jr(t){const e=Ot;return Ot=t,xf=t&&t.type.__scopeId||null,e}function Yr(t,e=Ot,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&_s(-1);const i=Jr(e);let o;try{o=t(...a)}finally{Jr(i),r._d&&_s(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ta(t){const{type:e,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:o,attrs:s,emit:l,render:f,renderCache:u,props:c,data:h,setupState:y,ctx:S,inheritAttrs:O}=t,b=Jr(t);let m,p;try{if(n.shapeFlag&4){const w=a||r,C=w;m=Kt(f.call(C,w,u,c,y,h,S)),p=s}else{const w=e;m=Kt(w.length>1?w(c,{attrs:s,slots:o,emit:l}):w(c,null)),p=e.props?s:sd(s)}}catch(w){Fn.length=0,ha(w,t,1),m=lt(Ae)}let g=m;if(p&&O!==!1){const w=Object.keys(p),{shapeFlag:C}=g;w.length&&C&7&&(i&&w.some(io)&&(p=ld(p,i)),g=yn(g,p,!1,!0))}return n.dirs&&(g=yn(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),m=g,Jr(b),m}const sd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ua(n))&&((e||(e={}))[n]=t[n]);return e},ld=(t,e)=>{const n={};for(const r in t)(!io(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fd(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ps(r,o,f):!!o;if(l&8){const u=e.dynamicProps;for(let c=0;c<u.length;c++){const h=u[c];if(o[h]!==r[h]&&!ga(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ps(r,o,f):!0:!!o;return!1}function ps(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!ga(n,i))return!0}return!1}function ud({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cd=Symbol.for("v-ndc"),dd=t=>t.__isSuspense;function md(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):ad(t)}const pd=Symbol.for("v-scx"),hd=()=>Hr(pd),xr={};function hn(t,e,n){return kf(t,e,n)}function kf(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=rt){if(e&&i){const T=e;e=(...U)=>{T(...U),C()}}const l=wt,f=T=>r===!0?T:sn(T,r===!1?1:void 0);let u,c=!1,h=!1;if(xt(t)?(u=()=>t.value,c=Qr(t)):jn(t)?(u=()=>f(t),c=!0):W(t)?(h=!0,c=t.some(T=>jn(T)||Qr(T)),u=()=>t.map(T=>{if(xt(T))return T.value;if(jn(T))return f(T);if(H(T))return Ce(T,l,2)})):H(t)?e?u=()=>Ce(t,l,2):u=()=>(y&&y(),Bt(t,l,3,[S])):u=Lt,e&&r){const T=u;u=()=>sn(T())}let y,S=T=>{y=g.onStop=()=>{Ce(T,l,4),y=g.onStop=void 0}},O;if(ya)if(S=Lt,e?n&&Bt(e,l,3,[u(),h?[]:void 0,S]):u(),a==="sync"){const T=hd();O=T.__watcherHandles||(T.__watcherHandles=[])}else return Lt;let b=h?new Array(t.length).fill(xr):xr;const m=()=>{if(!(!g.active||!g.dirty))if(e){const T=g.run();(r||c||(h?T.some((U,et)=>Pe(U,b[et])):Pe(T,b)))&&(y&&y(),Bt(e,l,3,[T,b===xr?void 0:h&&b[0]===xr?[]:b,S]),b=T)}else g.run()};m.allowRecurse=!!e;let p;a==="sync"?p=m:a==="post"?p=()=>At(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>wo(m));const g=new lo(u,Lt,p),w=Zl(),C=()=>{g.stop(),w&&oo(w.effects,g)};return e?n?m():b=g.run():a==="post"?At(g.run.bind(g),l&&l.suspense):g.run(),O&&O.push(C),C}function gd(t,e,n){const r=this.proxy,a=ct(t)?t.includes(".")?_f(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=sr(this),s=kf(a,i.bind(r),n);return o(),s}function _f(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function sn(t,e=1/0,n){if(e<=0||!at(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xt(t))sn(t.value,e,n);else if(W(t))for(let r=0;r<t.length;r++)sn(t[r],e,n);else if(Hl(t)||mn(t))t.forEach(r=>{sn(r,e,n)});else if(Vl(t))for(const r in t)sn(t[r],e,n);return t}function Fe(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Re(),Bt(l,n,8,[t.el,s,t,e]),Le())}}/*! #__NO_SIDE_EFFECTS__ */function or(t,e){return H(t)?ht({name:t.name},e,{setup:t}):t}const Ln=t=>!!t.type.__asyncLoader,Of=t=>t.type.__isKeepAlive;function vd(t,e){Sf(t,"a",e)}function bd(t,e){Sf(t,"da",e)}function Sf(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(va(e,r,n),n){let a=n.parent;for(;a&&a.parent;)Of(a.parent.vnode)&&yd(r,e,n,a),a=a.parent}}function yd(t,e,n,r){const a=va(e,t,r,!0);Pf(()=>{oo(r[e],a)},n)}function va(t,e,n=wt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Re();const s=sr(n),l=Bt(e,n,t,o);return s(),Le(),l});return r?a.unshift(i):a.push(i),i}}const me=t=>(e,n=wt)=>(!ya||t==="sp")&&va(t,(...r)=>e(...r),n),wd=me("bm"),xo=me("m"),xd=me("bu"),kd=me("u"),Cf=me("bum"),Pf=me("um"),_d=me("sp"),Od=me("rtg"),Sd=me("rtc");function Cd(t,e=wt){va("ec",t,e)}function Wr(t,e,n={},r,a){if(Ot.isCE||Ot.parent&&Ln(Ot.parent)&&Ot.parent.isCE)return e!=="default"&&(n.name=e),lt("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),bt();const o=i&&Af(i(n)),s=ta(Yt,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function Af(t){return t.some(e=>ea(e)?!(e.type===Ae||e.type===Yt&&!Af(e.children)):!0)?t:null}const Ja=t=>t?Bf(t)?Co(t)||t.proxy:Ja(t.parent):null,Dn=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ja(t.parent),$root:t=>Ja(t.root),$emit:t=>t.emit,$options:t=>ko(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,wo(t.update)}),$nextTick:t=>t.n||(t.n=ed.bind(t.proxy)),$watch:t=>gd.bind(t)}),Na=(t,e)=>t!==rt&&!t.__isScriptSetup&&B(t,e),Pd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let f;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(Na(r,e))return o[e]=1,r[e];if(a!==rt&&B(a,e))return o[e]=2,a[e];if((f=t.propsOptions[0])&&B(f,e))return o[e]=3,i[e];if(n!==rt&&B(n,e))return o[e]=4,n[e];Za&&(o[e]=0)}}const u=Dn[e];let c,h;if(u)return e==="$attrs"&&Mt(t.attrs,"get",""),u(t);if((c=s.__cssModules)&&(c=c[e]))return c;if(n!==rt&&B(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,B(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return Na(a,e)?(a[e]=n,!0):r!==rt&&B(r,e)?(r[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==rt&&B(t,o)||Na(e,o)||(s=i[0])&&B(s,o)||B(r,o)||B(Dn,o)||B(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ad(){return Md().attrs}function Md(){const t=So();return t.setupContext||(t.setupContext=qf(t))}function hs(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Za=!0;function Ed(t){const e=ko(t),n=t.proxy,r=t.ctx;Za=!1,e.beforeCreate&&gs(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:c,mounted:h,beforeUpdate:y,updated:S,activated:O,deactivated:b,beforeDestroy:m,beforeUnmount:p,destroyed:g,unmounted:w,render:C,renderTracked:T,renderTriggered:U,errorCaptured:et,serverPrefetch:G,expose:gt,inheritAttrs:te,components:ge,directives:ve,filters:De}=e;if(f&&Td(f,r,null),o)for(const X in o){const q=o[X];H(q)&&(r[X]=q.bind(n))}if(a){const X=a.call(n,n);at(X)&&(t.data=po(X))}if(Za=!0,i)for(const X in i){const q=i[X],Dt=H(q)?q.bind(n,n):H(q.get)?q.get.bind(n,n):Lt,be=!H(q)&&H(q.set)?q.set.bind(n):Lt,zt=ut({get:Dt,set:be});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>zt.value,set:Ct=>zt.value=Ct})}if(s)for(const X in s)Mf(s[X],r,n,X);if(l){const X=H(l)?l.call(n):l;Reflect.ownKeys(X).forEach(q=>{Dd(q,X[q])})}u&&gs(u,t,"c");function ft(X,q){W(q)?q.forEach(Dt=>X(Dt.bind(n))):q&&X(q.bind(n))}if(ft(wd,c),ft(xo,h),ft(xd,y),ft(kd,S),ft(vd,O),ft(bd,b),ft(Cd,et),ft(Sd,T),ft(Od,U),ft(Cf,p),ft(Pf,w),ft(_d,G),W(gt))if(gt.length){const X=t.exposed||(t.exposed={});gt.forEach(q=>{Object.defineProperty(X,q,{get:()=>n[q],set:Dt=>n[q]=Dt})})}else t.exposed||(t.exposed={});C&&t.render===Lt&&(t.render=C),te!=null&&(t.inheritAttrs=te),ge&&(t.components=ge),ve&&(t.directives=ve)}function Td(t,e,n=Lt){W(t)&&(t=ti(t));for(const r in t){const a=t[r];let i;at(a)?"default"in a?i=Hr(a.from||r,a.default,!0):i=Hr(a.from||r):i=Hr(a),xt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function gs(t,e,n){Bt(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mf(t,e,n,r){const a=r.includes(".")?_f(n,r):()=>n[r];if(ct(t)){const i=e[t];H(i)&&hn(a,i)}else if(H(t))hn(a,t.bind(n));else if(at(t))if(W(t))t.forEach(i=>Mf(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&hn(a,i,t)}}function ko(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(f=>Zr(l,f,o,!0)),Zr(l,e,o)),at(e)&&i.set(e,l),l}function Zr(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Zr(t,i,n,!0),a&&a.forEach(o=>Zr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Nd[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Nd={data:vs,props:bs,emits:bs,methods:En,computed:En,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:En,directives:En,watch:jd,provide:vs,inject:Id};function vs(t,e){return e?t?function(){return ht(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Id(t,e){return En(ti(t),ti(e))}function ti(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?ht(Object.create(null),t,e):e}function bs(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:ht(Object.create(null),hs(t),hs(e??{})):e}function jd(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function Ef(){return{app:null,config:{isNativeTag:sc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rd=0;function Ld(t,e){return function(r,a=null){H(r)||(r=ht({},r)),a!=null&&!at(a)&&(a=null);const i=Ef(),o=new WeakSet;let s=!1;const l=i.app={_uid:Rd++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:am,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...u)):H(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,c){if(!s){const h=lt(r,a);return h.appContext=i,c===!0?c="svg":c===!1&&(c=void 0),u&&e?e(h,f):t(h,f,c),s=!0,l._container=f,f.__vue_app__=l,Co(h.component)||h.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l},runWithContext(f){const u=zn;zn=l;try{return f()}finally{zn=u}}};return l}}let zn=null;function Dd(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function Hr(t,e,n=!1){const r=wt||Ot;if(r||zn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}const Tf={},Nf=()=>Object.create(Tf),If=t=>Object.getPrototypeOf(t)===Tf;function zd(t,e,n,r=!1){const a={},i=Nf();t.propsDefaults=Object.create(null),jf(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Hc(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Fd(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=V(a),[l]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let c=0;c<u.length;c++){let h=u[c];if(ga(t.emitsOptions,h))continue;const y=e[h];if(l)if(B(i,h))y!==i[h]&&(i[h]=y,f=!0);else{const S=bn(h);a[S]=ei(l,s,S,y,t,!1)}else y!==i[h]&&(i[h]=y,f=!0)}}}else{jf(t,e,a,i)&&(f=!0);let u;for(const c in s)(!e||!B(e,c)&&((u=kn(c))===c||!B(e,u)))&&(l?n&&(n[c]!==void 0||n[u]!==void 0)&&(a[c]=ei(l,s,c,void 0,t,!0)):delete a[c]);if(i!==s)for(const c in i)(!e||!B(e,c))&&(delete i[c],f=!0)}f&&ie(t.attrs,"set","")}function jf(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(In(l))continue;const f=e[l];let u;a&&B(a,u=bn(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:ga(t.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=V(n),f=s||rt;for(let u=0;u<i.length;u++){const c=i[u];n[c]=ei(a,l,c,f[c],t,!B(f,c))}}return o}function ei(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&H(l)){const{propsDefaults:f}=a;if(n in f)r=f[n];else{const u=sr(a);r=f[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===kn(n))&&(r=!0))}return r}function Rf(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!H(t)){const u=c=>{l=!0;const[h,y]=Rf(c,e,!0);ht(o,h),y&&s.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return at(t)&&r.set(t,dn),dn;if(W(i))for(let u=0;u<i.length;u++){const c=bn(i[u]);ys(c)&&(o[c]=rt)}else if(i)for(const u in i){const c=bn(u);if(ys(c)){const h=i[u],y=o[c]=W(h)||H(h)?{type:h}:ht({},h);if(y){const S=ks(Boolean,y.type),O=ks(String,y.type);y[0]=S>-1,y[1]=O<0||S<O,(S>-1||B(y,"default"))&&s.push(c)}}}const f=[o,s];return at(t)&&r.set(t,f),f}function ys(t){return t[0]!=="$"&&!In(t)}function ws(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function xs(t,e){return ws(t)===ws(e)}function ks(t,e){return W(e)?e.findIndex(n=>xs(n,t)):H(e)&&xs(e,t)?0:-1}const Lf=t=>t[0]==="_"||t==="$stable",_o=t=>W(t)?t.map(Kt):[Kt(t)],Ud=(t,e,n)=>{if(e._n)return e;const r=Yr((...a)=>_o(e(...a)),n);return r._c=!1,r},Df=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Lf(a))continue;const i=t[a];if(H(i))e[a]=Ud(a,i,r);else if(i!=null){const o=_o(i);e[a]=()=>o}}},zf=(t,e)=>{const n=_o(e);t.slots.default=()=>n},Yd=(t,e)=>{const n=t.slots=Nf();if(t.vnode.shapeFlag&32){const r=e._;r?(ht(n,e),Gl(n,"_",r,!0)):Df(e,n)}else e&&zf(t,e)},Wd=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=rt;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(ht(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Df(e,a)),o=e}else e&&(zf(t,e),o={default:1});if(i)for(const s in a)!Lf(s)&&o[s]==null&&delete a[s]};function ni(t,e,n,r,a=!1){if(W(t)){t.forEach((h,y)=>ni(h,e&&(W(e)?e[y]:e),n,r,a));return}if(Ln(r)&&!a)return;const i=r.shapeFlag&4?Co(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,f=e&&e.r,u=s.refs===rt?s.refs={}:s.refs,c=s.setupState;if(f!=null&&f!==l&&(ct(f)?(u[f]=null,B(c,f)&&(c[f]=null)):xt(f)&&(f.value=null)),H(l))Ce(l,s,12,[o,u]);else{const h=ct(l),y=xt(l);if(h||y){const S=()=>{if(t.f){const O=h?B(c,l)?c[l]:u[l]:l.value;a?W(O)&&oo(O,i):W(O)?O.includes(i)||O.push(i):h?(u[l]=[i],B(c,l)&&(c[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,B(c,l)&&(c[l]=o)):y&&(l.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,At(S,n)):S()}}}const At=md;function Hd(t){return $d(t)}function $d(t,e){const n=Kl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:c,nextSibling:h,setScopeId:y=Lt,insertStaticContent:S}=t,O=(d,v,x,k=null,_=null,A=null,N=void 0,M=null,E=!!v.dynamicChildren)=>{if(d===v)return;d&&!Mn(d,v)&&(k=Vt(d),Ct(d,_,A,!0),d=null),v.patchFlag===-2&&(E=!1,v.dynamicChildren=null);const{type:P,ref:R,shapeFlag:F}=v;switch(P){case ba:b(d,v,x,k);break;case Ae:m(d,v,x,k);break;case ja:d==null&&p(v,x,k,N);break;case Yt:ge(d,v,x,k,_,A,N,M,E);break;default:F&1?C(d,v,x,k,_,A,N,M,E):F&6?ve(d,v,x,k,_,A,N,M,E):(F&64||F&128)&&P.process(d,v,x,k,_,A,N,M,E,ne)}R!=null&&_&&ni(R,d&&d.ref,A,v||d,!v)},b=(d,v,x,k)=>{if(d==null)r(v.el=s(v.children),x,k);else{const _=v.el=d.el;v.children!==d.children&&f(_,v.children)}},m=(d,v,x,k)=>{d==null?r(v.el=l(v.children||""),x,k):v.el=d.el},p=(d,v,x,k)=>{[d.el,d.anchor]=S(d.children,v,x,k,d.el,d.anchor)},g=({el:d,anchor:v},x,k)=>{let _;for(;d&&d!==v;)_=h(d),r(d,x,k),d=_;r(v,x,k)},w=({el:d,anchor:v})=>{let x;for(;d&&d!==v;)x=h(d),a(d),d=x;a(v)},C=(d,v,x,k,_,A,N,M,E)=>{v.type==="svg"?N="svg":v.type==="math"&&(N="mathml"),d==null?T(v,x,k,_,A,N,M,E):G(d,v,_,A,N,M,E)},T=(d,v,x,k,_,A,N,M)=>{let E,P;const{props:R,shapeFlag:F,transition:z,dirs:Y}=d;if(E=d.el=o(d.type,A,R&&R.is,R),F&8?u(E,d.children):F&16&&et(d.children,E,null,k,_,Ia(d,A),N,M),Y&&Fe(d,null,k,"created"),U(E,d,d.scopeId,N,k),R){for(const K in R)K!=="value"&&!In(K)&&i(E,K,null,R[K],A,d.children,k,_,Ft);"value"in R&&i(E,"value",null,R.value,A),(P=R.onVnodeBeforeMount)&&Gt(P,k,d)}Y&&Fe(d,null,k,"beforeMount");const $=Bd(_,z);$&&z.beforeEnter(E),r(E,v,x),((P=R&&R.onVnodeMounted)||$||Y)&&At(()=>{P&&Gt(P,k,d),$&&z.enter(E),Y&&Fe(d,null,k,"mounted")},_)},U=(d,v,x,k,_)=>{if(x&&y(d,x),k)for(let A=0;A<k.length;A++)y(d,k[A]);if(_){let A=_.subTree;if(v===A){const N=_.vnode;U(d,N,N.scopeId,N.slotScopeIds,_.parent)}}},et=(d,v,x,k,_,A,N,M,E=0)=>{for(let P=E;P<d.length;P++){const R=d[P]=M?_e(d[P]):Kt(d[P]);O(null,R,v,x,k,_,A,N,M)}},G=(d,v,x,k,_,A,N)=>{const M=v.el=d.el;let{patchFlag:E,dynamicChildren:P,dirs:R}=v;E|=d.patchFlag&16;const F=d.props||rt,z=v.props||rt;let Y;if(x&&Ue(x,!1),(Y=z.onVnodeBeforeUpdate)&&Gt(Y,x,v,d),R&&Fe(v,d,x,"beforeUpdate"),x&&Ue(x,!0),P?gt(d.dynamicChildren,P,M,x,k,Ia(v,_),A):N||q(d,v,M,null,x,k,Ia(v,_),A,!1),E>0){if(E&16)te(M,v,F,z,x,k,_);else if(E&2&&F.class!==z.class&&i(M,"class",null,z.class,_),E&4&&i(M,"style",F.style,z.style,_),E&8){const $=v.dynamicProps;for(let K=0;K<$.length;K++){const nt=$[K],pt=F[nt],Ut=z[nt];(Ut!==pt||nt==="value")&&i(M,nt,pt,Ut,_,d.children,x,k,Ft)}}E&1&&d.children!==v.children&&u(M,v.children)}else!N&&P==null&&te(M,v,F,z,x,k,_);((Y=z.onVnodeUpdated)||R)&&At(()=>{Y&&Gt(Y,x,v,d),R&&Fe(v,d,x,"updated")},k)},gt=(d,v,x,k,_,A,N)=>{for(let M=0;M<v.length;M++){const E=d[M],P=v[M],R=E.el&&(E.type===Yt||!Mn(E,P)||E.shapeFlag&70)?c(E.el):x;O(E,P,R,null,k,_,A,N,!0)}},te=(d,v,x,k,_,A,N)=>{if(x!==k){if(x!==rt)for(const M in x)!In(M)&&!(M in k)&&i(d,M,x[M],null,N,v.children,_,A,Ft);for(const M in k){if(In(M))continue;const E=k[M],P=x[M];E!==P&&M!=="value"&&i(d,M,P,E,N,v.children,_,A,Ft)}"value"in k&&i(d,"value",x.value,k.value,N)}},ge=(d,v,x,k,_,A,N,M,E)=>{const P=v.el=d?d.el:s(""),R=v.anchor=d?d.anchor:s("");let{patchFlag:F,dynamicChildren:z,slotScopeIds:Y}=v;Y&&(M=M?M.concat(Y):Y),d==null?(r(P,x,k),r(R,x,k),et(v.children||[],x,R,_,A,N,M,E)):F>0&&F&64&&z&&d.dynamicChildren?(gt(d.dynamicChildren,z,x,_,A,N,M),(v.key!=null||_&&v===_.subTree)&&Ff(d,v,!0)):q(d,v,x,R,_,A,N,M,E)},ve=(d,v,x,k,_,A,N,M,E)=>{v.slotScopeIds=M,d==null?v.shapeFlag&512?_.ctx.activate(v,x,k,N,E):De(v,x,k,_,A,N,E):en(d,v,E)},De=(d,v,x,k,_,A,N)=>{const M=d.component=Jd(d,k,_);if(Of(d)&&(M.ctx.renderer=ne),Zd(M),M.asyncDep){if(_&&_.registerDep(M,ft),!d.el){const E=M.subTree=lt(Ae);m(null,E,v,x)}}else ft(M,d,v,x,_,A,N)},en=(d,v,x)=>{const k=v.component=d.component;if(fd(d,v,x))if(k.asyncDep&&!k.asyncResolved){X(k,v,x);return}else k.next=v,rd(k.update),k.effect.dirty=!0,k.update();else v.el=d.el,k.vnode=v},ft=(d,v,x,k,_,A,N)=>{const M=()=>{if(d.isMounted){let{next:R,bu:F,u:z,parent:Y,vnode:$}=d;{const an=Uf(d);if(an){R&&(R.el=$.el,X(d,R,N)),an.asyncDep.then(()=>{d.isUnmounted||M()});return}}let K=R,nt;Ue(d,!1),R?(R.el=$.el,X(d,R,N)):R=$,F&&Ma(F),(nt=R.props&&R.props.onVnodeBeforeUpdate)&&Gt(nt,Y,R,$),Ue(d,!0);const pt=Ta(d),Ut=d.subTree;d.subTree=pt,O(Ut,pt,c(Ut.el),Vt(Ut),d,_,A),R.el=pt.el,K===null&&ud(d,pt.el),z&&At(z,_),(nt=R.props&&R.props.onVnodeUpdated)&&At(()=>Gt(nt,Y,R,$),_)}else{let R;const{el:F,props:z}=v,{bm:Y,m:$,parent:K}=d,nt=Ln(v);if(Ue(d,!1),Y&&Ma(Y),!nt&&(R=z&&z.onVnodeBeforeMount)&&Gt(R,K,v),Ue(d,!0),F&&hr){const pt=()=>{d.subTree=Ta(d),hr(F,d.subTree,d,_,null)};nt?v.type.__asyncLoader().then(()=>!d.isUnmounted&&pt()):pt()}else{const pt=d.subTree=Ta(d);O(null,pt,x,k,d,_,A),v.el=pt.el}if($&&At($,_),!nt&&(R=z&&z.onVnodeMounted)){const pt=v;At(()=>Gt(R,K,pt),_)}(v.shapeFlag&256||K&&Ln(K.vnode)&&K.vnode.shapeFlag&256)&&d.a&&At(d.a,_),d.isMounted=!0,v=x=k=null}},E=d.effect=new lo(M,Lt,()=>wo(P),d.scope),P=d.update=()=>{E.dirty&&E.run()};P.id=d.uid,Ue(d,!0),P()},X=(d,v,x)=>{v.component=d;const k=d.vnode.props;d.vnode=v,d.next=null,Fd(d,v.props,k,x),Wd(d,v.children,x),Re(),ms(d),Le()},q=(d,v,x,k,_,A,N,M,E=!1)=>{const P=d&&d.children,R=d?d.shapeFlag:0,F=v.children,{patchFlag:z,shapeFlag:Y}=v;if(z>0){if(z&128){be(P,F,x,k,_,A,N,M,E);return}else if(z&256){Dt(P,F,x,k,_,A,N,M,E);return}}Y&8?(R&16&&Ft(P,_,A),F!==P&&u(x,F)):R&16?Y&16?be(P,F,x,k,_,A,N,M,E):Ft(P,_,A,!0):(R&8&&u(x,""),Y&16&&et(F,x,k,_,A,N,M,E))},Dt=(d,v,x,k,_,A,N,M,E)=>{d=d||dn,v=v||dn;const P=d.length,R=v.length,F=Math.min(P,R);let z;for(z=0;z<F;z++){const Y=v[z]=E?_e(v[z]):Kt(v[z]);O(d[z],Y,x,null,_,A,N,M,E)}P>R?Ft(d,_,A,!0,!1,F):et(v,x,k,_,A,N,M,E,F)},be=(d,v,x,k,_,A,N,M,E)=>{let P=0;const R=v.length;let F=d.length-1,z=R-1;for(;P<=F&&P<=z;){const Y=d[P],$=v[P]=E?_e(v[P]):Kt(v[P]);if(Mn(Y,$))O(Y,$,x,null,_,A,N,M,E);else break;P++}for(;P<=F&&P<=z;){const Y=d[F],$=v[z]=E?_e(v[z]):Kt(v[z]);if(Mn(Y,$))O(Y,$,x,null,_,A,N,M,E);else break;F--,z--}if(P>F){if(P<=z){const Y=z+1,$=Y<R?v[Y].el:k;for(;P<=z;)O(null,v[P]=E?_e(v[P]):Kt(v[P]),x,$,_,A,N,M,E),P++}}else if(P>z)for(;P<=F;)Ct(d[P],_,A,!0),P++;else{const Y=P,$=P,K=new Map;for(P=$;P<=z;P++){const Et=v[P]=E?_e(v[P]):Kt(v[P]);Et.key!=null&&K.set(Et.key,P)}let nt,pt=0;const Ut=z-$+1;let an=!1,ns=0;const An=new Array(Ut);for(P=0;P<Ut;P++)An[P]=0;for(P=Y;P<=F;P++){const Et=d[P];if(pt>=Ut){Ct(Et,_,A,!0);continue}let qt;if(Et.key!=null)qt=K.get(Et.key);else for(nt=$;nt<=z;nt++)if(An[nt-$]===0&&Mn(Et,v[nt])){qt=nt;break}qt===void 0?Ct(Et,_,A,!0):(An[qt-$]=P+1,qt>=ns?ns=qt:an=!0,O(Et,v[qt],x,null,_,A,N,M,E),pt++)}const rs=an?Vd(An):dn;for(nt=rs.length-1,P=Ut-1;P>=0;P--){const Et=$+P,qt=v[Et],as=Et+1<R?v[Et+1].el:k;An[P]===0?O(null,qt,x,as,_,A,N,M,E):an&&(nt<0||P!==rs[nt]?zt(qt,x,as,2):nt--)}}},zt=(d,v,x,k,_=null)=>{const{el:A,type:N,transition:M,children:E,shapeFlag:P}=d;if(P&6){zt(d.component.subTree,v,x,k);return}if(P&128){d.suspense.move(v,x,k);return}if(P&64){N.move(d,v,x,ne);return}if(N===Yt){r(A,v,x);for(let F=0;F<E.length;F++)zt(E[F],v,x,k);r(d.anchor,v,x);return}if(N===ja){g(d,v,x);return}if(k!==2&&P&1&&M)if(k===0)M.beforeEnter(A),r(A,v,x),At(()=>M.enter(A),_);else{const{leave:F,delayLeave:z,afterLeave:Y}=M,$=()=>r(A,v,x),K=()=>{F(A,()=>{$(),Y&&Y()})};z?z(A,$,K):K()}else r(A,v,x)},Ct=(d,v,x,k=!1,_=!1)=>{const{type:A,props:N,ref:M,children:E,dynamicChildren:P,shapeFlag:R,patchFlag:F,dirs:z}=d;if(M!=null&&ni(M,null,x,d,!0),R&256){v.ctx.deactivate(d);return}const Y=R&1&&z,$=!Ln(d);let K;if($&&(K=N&&N.onVnodeBeforeUnmount)&&Gt(K,v,d),R&6)Pn(d.component,x,k);else{if(R&128){d.suspense.unmount(x,k);return}Y&&Fe(d,null,v,"beforeUnmount"),R&64?d.type.remove(d,v,x,_,ne,k):P&&(A!==Yt||F>0&&F&64)?Ft(P,v,x,!1,!0):(A===Yt&&F&384||!_&&R&16)&&Ft(E,v,x),k&&nn(d)}($&&(K=N&&N.onVnodeUnmounted)||Y)&&At(()=>{K&&Gt(K,v,d),Y&&Fe(d,null,v,"unmounted")},x)},nn=d=>{const{type:v,el:x,anchor:k,transition:_}=d;if(v===Yt){Cn(x,k);return}if(v===ja){w(d);return}const A=()=>{a(x),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:N,delayLeave:M}=_,E=()=>N(x,A);M?M(d.el,A,E):E()}else A()},Cn=(d,v)=>{let x;for(;d!==v;)x=h(d),a(d),d=x;a(v)},Pn=(d,v,x)=>{const{bum:k,scope:_,update:A,subTree:N,um:M}=d;k&&Ma(k),_.stop(),A&&(A.active=!1,Ct(N,d,v,x)),M&&At(M,v),At(()=>{d.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Ft=(d,v,x,k=!1,_=!1,A=0)=>{for(let N=A;N<d.length;N++)Ct(d[N],v,x,k,_)},Vt=d=>d.shapeFlag&6?Vt(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let ee=!1;const rn=(d,v,x)=>{d==null?v._vnode&&Ct(v._vnode,null,null,!0):O(v._vnode||null,d,v,null,null,null,x),ee||(ee=!0,ms(),bf(),ee=!1),v._vnode=d},ne={p:O,um:Ct,m:zt,r:nn,mt:De,mc:et,pc:q,pbc:gt,n:Vt,o:t};let ze,hr;return{render:rn,hydrate:ze,createApp:Ld(rn,ze)}}function Ia({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ue({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ff(t,e,n=!1){const r=t.children,a=e.children;if(W(r)&&W(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=_e(a[i]),s.el=o.el),n||Ff(o,s)),s.type===ba&&(s.el=o.el)}}function Vd(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const f=t[r];if(f!==0){if(a=n[n.length-1],t[a]<f){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<f?i=s+1:o=s;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Uf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Uf(e)}const qd=t=>t.__isTeleport,Yt=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),Ae=Symbol.for("v-cmt"),ja=Symbol.for("v-stc"),Fn=[];let Wt=null;function bt(t=!1){Fn.push(Wt=t?null:[])}function Gd(){Fn.pop(),Wt=Fn[Fn.length-1]||null}let Kn=1;function _s(t){Kn+=t}function Yf(t){return t.dynamicChildren=Kn>0?Wt||dn:null,Gd(),Kn>0&&Wt&&Wt.push(t),t}function Nt(t,e,n,r,a,i){return Yf(_t(t,e,n,r,a,i,!0))}function ta(t,e,n,r,a){return Yf(lt(t,e,n,r,a,!0))}function ea(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const Wf=({key:t})=>t??null,$r=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ct(t)||xt(t)||H(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function _t(t,e=null,n=null,r=0,a=null,i=t===Yt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wf(e),ref:e&&$r(e),scopeId:xf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ot};return s?(Oo(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ct(n)?8:16),Kn>0&&!o&&Wt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Wt.push(l),l}const lt=Kd;function Kd(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===cd)&&(t=Ae),ea(t)){const s=yn(t,e,!0);return n&&Oo(s,n),Kn>0&&!i&&Wt&&(s.shapeFlag&6?Wt[Wt.indexOf(t)]=s:Wt.push(s)),s.patchFlag|=-2,s}if(nm(t)&&(t=t.__vccOpts),e){e=Hf(e);let{class:s,style:l}=e;s&&!ct(s)&&(e.class=ae(s)),at(l)&&(df(l)&&!W(l)&&(l=ht({},l)),e.style=ma(l))}const o=ct(t)?1:dd(t)?128:qd(t)?64:at(t)?4:H(t)?2:0;return _t(t,e,n,r,a,o,i,!0)}function Hf(t){return t?df(t)||If(t)?ht({},t):t:null}function yn(t,e,n=!1,r=!1){const{props:a,ref:i,patchFlag:o,children:s,transition:l}=t,f=e?$f(a||{},e):a,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Wf(f),ref:e&&e.ref?n&&i?W(i)?i.concat($r(e)):[i,$r(e)]:$r(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&(u.transition=l.clone(u)),u}function Un(t=" ",e=0){return lt(ba,null,t,e)}function We(t="",e=!1){return e?(bt(),ta(Ae,null,t)):lt(Ae,null,t)}function Kt(t){return t==null||typeof t=="boolean"?lt(Ae):W(t)?lt(Yt,null,t.slice()):typeof t=="object"?_e(t):lt(ba,null,String(t))}function _e(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function Oo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),Oo(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!If(e)?e._ctx=Ot:a===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[Un(e)]):n=8);t.children=e,t.shapeFlag|=n}function $f(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=ae([e.class,r.class]));else if(a==="style")e.style=ma([e.style,r.style]);else if(ua(a)){const i=e[a],o=r[a];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Gt(t,e,n,r=null){Bt(t,e,7,[n,r])}const Xd=Ef();let Qd=0;function Jd(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Xd,i={uid:Qd++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rf(r,a),emitsOptions:wf(r,a),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:r.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=od.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const So=()=>wt||Ot;let na,ri;{const t=Kl(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};na=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),ri=e("__VUE_SSR_SETTERS__",n=>ya=n)}const sr=t=>{const e=wt;return na(t),t.scope.on(),()=>{t.scope.off(),na(e)}},Os=()=>{wt&&wt.scope.off(),na(null)};function Bf(t){return t.vnode.shapeFlag&4}let ya=!1;function Zd(t,e=!1){e&&ri(e);const{props:n,children:r}=t.vnode,a=Bf(t);zd(t,n,a,e),Yd(t,r);const i=a?tm(t,e):void 0;return e&&ri(!1),i}function tm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Pd);const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?qf(t):null,i=sr(t);Re();const o=Ce(r,t,0,[t.props,a]);if(Le(),i(),$l(o)){if(o.then(Os,Os),e)return o.then(s=>{Ss(t,s,e)}).catch(s=>{ha(s,t,0)});t.asyncDep=o}else Ss(t,o,e)}else Vf(t,e)}function Ss(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=hf(e)),Vf(t,n)}let Cs;function Vf(t,e,n){const r=t.type;if(!t.render){if(!e&&Cs&&!r.render){const a=r.template||ko(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ht(ht({isCustomElement:i,delimiters:s},o),l);r.render=Cs(a,f)}}t.render=r.render||Lt}{const a=sr(t);Re();try{Ed(t)}finally{Le(),a()}}}const em={get(t,e){return Mt(t,"get",""),t[e]}};function qf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,em),slots:t.slots,emit:t.emit,expose:e}}function Co(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hf(mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Dn)return Dn[n](t)},has(e,n){return n in e||n in Dn}}))}function nm(t){return H(t)&&"__vccOpts"in t}const ut=(t,e)=>$c(t,e,ya);function rm(t,e,n){const r=arguments.length;return r===2?at(e)&&!W(e)?ea(e)?lt(t,null,[e]):lt(t,e):lt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ea(n)&&(n=[n]),lt(t,e,n))}const am="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const im="http://www.w3.org/2000/svg",om="http://www.w3.org/1998/Math/MathML",Oe=typeof document<"u"?document:null,Ps=Oe&&Oe.createElement("template"),sm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Oe.createElementNS(im,t):e==="mathml"?Oe.createElementNS(om,t):Oe.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Oe.createTextNode(t),createComment:t=>Oe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ps.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=Ps.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lm=Symbol("_vtc");function fm(t,e,n){const r=t[lm];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const As=Symbol("_vod"),um=Symbol("_vsh"),cm=Symbol(""),dm=/(^|;)\s*display\s*:/;function mm(t,e,n){const r=t.style,a=ct(n);let i=!1;if(n&&!a){if(e)if(ct(e))for(const o of e.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&Br(r,s,"")}else for(const o in e)n[o]==null&&Br(r,o,"");for(const o in n)o==="display"&&(i=!0),Br(r,o,n[o])}else if(a){if(e!==n){const o=r[cm];o&&(n+=";"+o),r.cssText=n,i=dm.test(n)}}else e&&t.removeAttribute("style");As in t&&(t[As]=i?r.display:"",t[um]&&(r.display="none"))}const Ms=/\s*!important$/;function Br(t,e,n){if(W(n))n.forEach(r=>Br(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pm(t,e);Ms.test(n)?t.setProperty(kn(r),n.replace(Ms,""),"important"):t[r]=n}}const Es=["Webkit","Moz","ms"],Ra={};function pm(t,e){const n=Ra[e];if(n)return n;let r=bn(e);if(r!=="filter"&&r in t)return Ra[e]=r;r=ql(r);for(let a=0;a<Es.length;a++){const i=Es[a]+r;if(i in t)return Ra[e]=i}return e}const Ts="http://www.w3.org/1999/xlink";function hm(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ts,e.slice(6,e.length)):t.setAttributeNS(Ts,e,n);else{const i=yc(e);n==null||i&&!Xl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gm(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const f=s==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(f!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=Xl(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function vm(t,e,n,r){t.addEventListener(e,n,r)}function bm(t,e,n,r){t.removeEventListener(e,n,r)}const Ns=Symbol("_vei");function ym(t,e,n,r,a=null){const i=t[Ns]||(t[Ns]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=wm(e);if(r){const f=i[e]=_m(r,a);vm(t,s,f,l)}else o&&(bm(t,s,o,l),i[e]=void 0)}}const Is=/(?:Once|Passive|Capture)$/;function wm(t){let e;if(Is.test(t)){e={};let r;for(;r=t.match(Is);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kn(t.slice(2)),e]}let La=0;const xm=Promise.resolve(),km=()=>La||(xm.then(()=>La=0),La=Date.now());function _m(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(Om(r,n.value),e,5,[r])};return n.value=t,n.attached=km(),n}function Om(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const js=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sm=(t,e,n,r,a,i,o,s,l)=>{const f=a==="svg";e==="class"?fm(t,r,f):e==="style"?mm(t,n,r):ua(e)?io(e)||ym(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cm(t,e,r,f))?gm(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hm(t,e,r,f))};function Cm(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&js(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return js(e)&&ct(n)?!1:e in t}const Pm=["ctrl","shift","alt","meta"],Am={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pm.some(n=>t[`${n}Key`]&&!e.includes(n))},Rs=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(a,...i)=>{for(let o=0;o<e.length;o++){const s=Am[e[o]];if(s&&s(a,e))return}return t(a,...i)})},Mm=ht({patchProp:Sm},sm);let Ls;function Em(){return Ls||(Ls=Hd(Mm))}const Tm=(...t)=>{const e=Em().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Im(r);if(!a)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Nm(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Nm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Im(t){return ct(t)?document.querySelector(t):t}var jm=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Rm=Symbol();var Ds;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ds||(Ds={}));function Lm(){const t=wc(!0),e=t.run(()=>oe({}));let n=[],r=[];const a=mf({install(i){a._a=i,i.provide(Rm,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!jm?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return a}function Dm(t){return Zl()?(kc(t),!0):!1}function Po(t){return typeof t=="function"?t():Rt(t)}const Gf=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const zm=t=>t!=null,Fm=()=>{};function Um(t){return So()}function Ym(...t){if(t.length!==1)return Jc(...t);const e=t[0];return typeof e=="function"?ho(Kc(()=>({get:e,set:Fm}))):oe(e)}function Wm(t,e){Um()&&Cf(t,e)}function Hm(t){var e;const n=Po(t);return(e=n==null?void 0:n.$el)!=null?e:n}const $m=Gf?window:void 0,Bm=Gf?window.document:void 0;function Vm(){const t=oe(!1),e=So();return e&&xo(()=>{t.value=!0},e),t}function qm(t){const e=Vm();return ut(()=>(e.value,!!t()))}function Gm(t,e,n={}){const{window:r=$m,...a}=n;let i;const o=qm(()=>r&&"MutationObserver"in r),s=()=>{i&&(i.disconnect(),i=void 0)},l=ut(()=>{const h=Po(t),y=(Array.isArray(h)?h:[h]).map(Hm).filter(zm);return new Set(y)}),f=hn(()=>l.value,h=>{s(),o.value&&r&&h.size&&(i=new MutationObserver(e),h.forEach(y=>i.observe(y,a)))},{immediate:!0,flush:"post"}),u=()=>i==null?void 0:i.takeRecords(),c=()=>{s(),f()};return Dm(c),{isSupported:o,stop:c,takeRecords:u}}function Km(t=null,e={}){var n,r,a;const{document:i=Bm,restoreOnUnmount:o=c=>c}=e,s=(n=i==null?void 0:i.title)!=null?n:"",l=Ym((r=t??(i==null?void 0:i.title))!=null?r:null),f=t&&typeof t=="function";function u(c){if(!("titleTemplate"in e))return c;const h=e.titleTemplate||"%s";return typeof h=="function"?h(c):Po(h).replace(/%s/g,c)}return hn(l,(c,h)=>{c!==h&&i&&(i.title=u(typeof c=="string"?c:""))},{immediate:!0}),e.observe&&!e.titleTemplate&&i&&!f&&Gm((a=i.head)==null?void 0:a.querySelector("title"),()=>{i&&i.title!==l.value&&(l.value=u(i.title))},{childList:!0}),Wm(()=>{if(o){const c=o(s,l.value||"");c!=null&&i&&(i.title=c)}}),l}function zs(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zs(Object(n),!0).forEach(function(r){dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zs(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ra(t){"@babel/helpers - typeof";return ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ra(t)}function Xm(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Jm(t,e,n){return e&&Qm(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ao(t,e){return tp(t)||np(t,e)||Kf(t,e)||ap()}function lr(t){return Zm(t)||ep(t)||Kf(t)||rp()}function Zm(t){if(Array.isArray(t))return ai(t)}function tp(t){if(Array.isArray(t))return t}function ep(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function np(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Kf(t,e){if(t){if(typeof t=="string")return ai(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ai(t,e)}}function ai(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ap(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fs=function(){},Mo={},Xf={},Qf=null,Jf={mark:Fs,measure:Fs};try{typeof window<"u"&&(Mo=window),typeof document<"u"&&(Xf=document),typeof MutationObserver<"u"&&(Qf=MutationObserver),typeof performance<"u"&&(Jf=performance)}catch{}var ip=Mo.navigator||{},Us=ip.userAgent,Ys=Us===void 0?"":Us,Me=Mo,Z=Xf,Ws=Qf,kr=Jf;Me.document;var pe=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",Zf=~Ys.indexOf("MSIE")||~Ys.indexOf("Trident/"),_r,Or,Sr,Cr,Pr,se="___FONT_AWESOME___",ii=16,tu="fa",eu="svg-inline--fa",Ke="data-fa-i2svg",oi="data-fa-pseudo-element",op="data-fa-pseudo-element-pending",Eo="data-prefix",To="data-icon",Hs="fontawesome-i2svg",sp="async",lp=["HTML","HEAD","STYLE","SCRIPT"],nu=function(){try{return!0}catch{return!1}}(),Q="classic",it="sharp",No=[Q,it];function fr(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Q]}})}var Xn=fr((_r={},dt(_r,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),dt(_r,it,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),_r)),Qn=fr((Or={},dt(Or,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),dt(Or,it,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Or)),Jn=fr((Sr={},dt(Sr,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),dt(Sr,it,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Sr)),fp=fr((Cr={},dt(Cr,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),dt(Cr,it,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Cr)),up=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ru="fa-layers-text",cp=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,dp=fr((Pr={},dt(Pr,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),dt(Pr,it,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pr)),au=[1,2,3,4,5,6,7,8,9,10],mp=au.concat([11,12,13,14,15,16,17,18,19,20]),pp=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],He={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zn=new Set;Object.keys(Qn[Q]).map(Zn.add.bind(Zn));Object.keys(Qn[it]).map(Zn.add.bind(Zn));var hp=[].concat(No,lr(Zn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",He.GROUP,He.SWAP_OPACITY,He.PRIMARY,He.SECONDARY]).concat(au.map(function(t){return"".concat(t,"x")})).concat(mp.map(function(t){return"w-".concat(t)})),Yn=Me.FontAwesomeConfig||{};function gp(t){var e=Z.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function vp(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Z&&typeof Z.querySelector=="function"){var bp=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bp.forEach(function(t){var e=Ao(t,2),n=e[0],r=e[1],a=vp(gp(n));a!=null&&(Yn[r]=a)})}var iu={styleDefault:"solid",familyDefault:"classic",cssPrefix:tu,replacementClass:eu,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yn.familyPrefix&&(Yn.cssPrefix=Yn.familyPrefix);var wn=I(I({},iu),Yn);wn.autoReplaceSvg||(wn.observeMutations=!1);var L={};Object.keys(iu).forEach(function(t){Object.defineProperty(L,t,{enumerable:!0,set:function(n){wn[t]=n,Wn.forEach(function(r){return r(L)})},get:function(){return wn[t]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){wn.cssPrefix=e,Wn.forEach(function(n){return n(L)})},get:function(){return wn.cssPrefix}});Me.FontAwesomeConfig=L;var Wn=[];function yp(t){return Wn.push(t),function(){Wn.splice(Wn.indexOf(t),1)}}var we=ii,Qt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wp(t){if(!(!t||!pe)){var e=Z.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Z.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Z.head.insertBefore(e,r),t}}var xp="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tr(){for(var t=12,e="";t-- >0;)e+=xp[Math.random()*62|0];return e}function _n(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Io(t){return t.classList?_n(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ou(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kp(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ou(t[n]),'" ')},"").trim()}function wa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function jo(t){return t.size!==Qt.size||t.x!==Qt.x||t.y!==Qt.y||t.rotate!==Qt.rotate||t.flipX||t.flipY}function _p(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Op(t){var e=t.transform,n=t.width,r=n===void 0?ii:n,a=t.height,i=a===void 0?ii:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Zf?l+="translate(".concat(e.x/we-r/2,"em, ").concat(e.y/we-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/we,"em), calc(-50% + ").concat(e.y/we,"em)) "):l+="translate(".concat(e.x/we,"em, ").concat(e.y/we,"em) "),l+="scale(".concat(e.size/we*(e.flipX?-1:1),", ").concat(e.size/we*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Sp=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function su(){var t=tu,e=eu,n=L.cssPrefix,r=L.replacementClass,a=Sp;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var $s=!1;function Da(){L.autoAddCss&&!$s&&(wp(su()),$s=!0)}var Cp={mixout:function(){return{dom:{css:su,insertCss:Da}}},hooks:function(){return{beforeDOMElementCreation:function(){Da()},beforeI2svg:function(){Da()}}}},le=Me||{};le[se]||(le[se]={});le[se].styles||(le[se].styles={});le[se].hooks||(le[se].hooks={});le[se].shims||(le[se].shims=[]);var Ht=le[se],lu=[],Pp=function t(){Z.removeEventListener("DOMContentLoaded",t),aa=1,lu.map(function(e){return e()})},aa=!1;pe&&(aa=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),aa||Z.addEventListener("DOMContentLoaded",Pp));function Ap(t){pe&&(aa?setTimeout(t,0):lu.push(t))}function ur(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?ou(t):"<".concat(e," ").concat(kp(r),">").concat(i.map(ur).join(""),"</").concat(e,">")}function Bs(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var za=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=n,l,f,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,e[f],f,e);return u};function Mp(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function si(t){var e=Mp(t);return e.length===1?e[0].toString(16):null}function Ep(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Vs(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function li(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Vs(e);typeof Ht.hooks.addPack=="function"&&!a?Ht.hooks.addPack(t,Vs(e)):Ht.styles[t]=I(I({},Ht.styles[t]||{}),i),t==="fas"&&li("fa",e)}var Ar,Mr,Er,ln=Ht.styles,Tp=Ht.shims,Np=(Ar={},dt(Ar,Q,Object.values(Jn[Q])),dt(Ar,it,Object.values(Jn[it])),Ar),Ro=null,fu={},uu={},cu={},du={},mu={},Ip=(Mr={},dt(Mr,Q,Object.keys(Xn[Q])),dt(Mr,it,Object.keys(Xn[it])),Mr);function jp(t){return~hp.indexOf(t)}function Rp(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!jp(a)?a:null}var pu=function(){var e=function(i){return za(ln,function(o,s,l){return o[l]=za(s,i,{}),o},{})};fu=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),uu=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),mu=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ln||L.autoFetchSvg,r=za(Tp,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});cu=r.names,du=r.unicodes,Ro=xa(L.styleDefault,{family:L.familyDefault})};yp(function(t){Ro=xa(t.styleDefault,{family:L.familyDefault})});pu();function Lo(t,e){return(fu[t]||{})[e]}function Lp(t,e){return(uu[t]||{})[e]}function $e(t,e){return(mu[t]||{})[e]}function hu(t){return cu[t]||{prefix:null,iconName:null}}function Dp(t){var e=du[t],n=Lo("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ee(){return Ro}var Do=function(){return{prefix:null,iconName:null,rest:[]}};function xa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Q:n,a=Xn[r][t],i=Qn[r][t]||Qn[r][a],o=t in Ht.styles?t:null;return i||o||null}var qs=(Er={},dt(Er,Q,Object.keys(Jn[Q])),dt(Er,it,Object.keys(Jn[it])),Er);function ka(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},dt(e,Q,"".concat(L.cssPrefix,"-").concat(Q)),dt(e,it,"".concat(L.cssPrefix,"-").concat(it)),e),o=null,s=Q;(t.includes(i[Q])||t.some(function(f){return qs[Q].includes(f)}))&&(s=Q),(t.includes(i[it])||t.some(function(f){return qs[it].includes(f)}))&&(s=it);var l=t.reduce(function(f,u){var c=Rp(L.cssPrefix,u);if(ln[u]?(u=Np[s].includes(u)?fp[s][u]:u,o=u,f.prefix=u):Ip[s].indexOf(u)>-1?(o=u,f.prefix=xa(u,{family:s})):c?f.iconName=c:u!==L.replacementClass&&u!==i[Q]&&u!==i[it]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var h=o==="fa"?hu(f.iconName):{},y=$e(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||y||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!ln.far&&ln.fas&&!L.autoFetchSvg&&(f.prefix="fas")}return f},Do());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===it&&(ln.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=$e(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ee()||"fas"),l}var zp=function(){function t(){Xm(this,t),this.definitions={}}return Jm(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),li(s,o[s]);var l=Jn[Q][s];l&&li(l,o[s]),pu()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(n[s][c]=f)}),n[s][l]=f}),n}}]),t}(),Gs=[],fn={},gn={},Fp=Object.keys(gn);function Up(t,e){var n=e.mixoutsTo;return Gs=t,fn={},Object.keys(gn).forEach(function(r){Fp.indexOf(r)===-1&&delete gn[r]}),Gs.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ra(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){fn[o]||(fn[o]=[]),fn[o].push(i[o])})}r.provides&&r.provides(gn)}),n}function fi(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=fn[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Xe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=fn[t]||[];a.forEach(function(i){i.apply(null,n)})}function fe(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gn[t]?gn[t].apply(null,e):void 0}function ui(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ee();if(e)return e=$e(n,e)||e,Bs(gu.definitions,n,e)||Bs(Ht.styles,n,e)}var gu=new zp,Yp=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,Xe("noAuto")},Wp={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pe?(Xe("beforeI2svg",e),fe("pseudoElements2svg",e),fe("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Ap(function(){$p({autoReplaceSvgRoot:n}),Xe("watch",e)})}},Hp={icon:function(e){if(e===null)return null;if(ra(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$e(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=xa(e[0]);return{prefix:r,iconName:$e(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(up))){var a=ka(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ee(),iconName:$e(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Ee();return{prefix:i,iconName:$e(i,e)||e}}}},It={noAuto:Yp,config:L,dom:Wp,parse:Hp,library:gu,findIconDefinition:ui,toHtml:ur},$p=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(Ht.styles).length>0||L.autoFetchSvg)&&pe&&L.autoReplaceSvg&&It.dom.i2svg({node:r})};function _a(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ur(r)})}}),Object.defineProperty(t,"node",{get:function(){if(pe){var r=Z.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Bp(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(jo(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=wa(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Vp(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(L.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function zo(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,f=t.maskId,u=t.titleId,c=t.extra,h=t.watchable,y=h===void 0?!1:h,S=r.found?r:n,O=S.width,b=S.height,m=a==="fak",p=[L.replacementClass,i?"".concat(L.cssPrefix,"-").concat(i):""].filter(function(G){return c.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(c.classes).join(" "),g={children:[],attributes:I(I({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:p,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(b)})},w=m&&!~c.classes.indexOf("fa-fw")?{width:"".concat(O/b*16*.0625,"em")}:{};y&&(g.attributes[Ke]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||tr())},children:[l]}),delete g.attributes.title);var C=I(I({},g),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},w),c.styles)}),T=r.found&&n.found?fe("generateAbstractMask",C)||{children:[],attributes:{}}:fe("generateAbstractIcon",C)||{children:[],attributes:{}},U=T.children,et=T.attributes;return C.children=U,C.attributes=et,s?Vp(C):Bp(C)}function Ks(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ke]="");var u=I({},o.styles);jo(a)&&(u.transform=Op({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var c=wa(u);c.length>0&&(f.style=c);var h=[];return h.push({tag:"span",attributes:f,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function qp(t){var e=t.content,n=t.title,r=t.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=wa(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fa=Ht.styles;function ci(t){var e=t[0],n=t[1],r=t.slice(4),a=Ao(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(He.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(He.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(He.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Gp={found:!1,width:512,height:512};function Kp(t,e){!nu&&!L.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function di(t,e){var n=e;return e==="fa"&&L.styleDefault!==null&&(e=Ee()),new Promise(function(r,a){if(fe("missingIconAbstract"),n==="fa"){var i=hu(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Fa[e]&&Fa[e][t]){var o=Fa[e][t];return r(ci(o))}Kp(t,e),r(I(I({},Gp),{},{icon:L.showMissingIcons&&t?fe("missingIconAbstract")||{}:{}}))})}var Xs=function(){},mi=L.measurePerformance&&kr&&kr.mark&&kr.measure?kr:{mark:Xs,measure:Xs},Tn='FA "6.5.2"',Xp=function(e){return mi.mark("".concat(Tn," ").concat(e," begins")),function(){return vu(e)}},vu=function(e){mi.mark("".concat(Tn," ").concat(e," ends")),mi.measure("".concat(Tn," ").concat(e),"".concat(Tn," ").concat(e," begins"),"".concat(Tn," ").concat(e," ends"))},Fo={begin:Xp,end:vu},Vr=function(){};function Qs(t){var e=t.getAttribute?t.getAttribute(Ke):null;return typeof e=="string"}function Qp(t){var e=t.getAttribute?t.getAttribute(Eo):null,n=t.getAttribute?t.getAttribute(To):null;return e&&n}function Jp(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(L.replacementClass)}function Zp(){if(L.autoReplaceSvg===!0)return qr.replace;var t=qr[L.autoReplaceSvg];return t||qr.replace}function th(t){return Z.createElementNS("http://www.w3.org/2000/svg",t)}function eh(t){return Z.createElement(t)}function bu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?th:eh:n;if(typeof t=="string")return Z.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(bu(o,{ceFn:r}))}),a}function nh(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var qr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(bu(a),n)}),n.getAttribute(Ke)===null&&L.keepOriginalSource){var r=Z.createComment(nh(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Io(n).indexOf(L.replacementClass))return qr.replace(e);var a=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===L.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ur(s)}).join(`
`);n.setAttribute(Ke,""),n.innerHTML=o}};function Js(t){t()}function yu(t,e){var n=typeof e=="function"?e:Vr;if(t.length===0)n();else{var r=Js;L.mutateApproach===sp&&(r=Me.requestAnimationFrame||Js),r(function(){var a=Zp(),i=Fo.begin("mutate");t.map(a),i(),n()})}}var Uo=!1;function wu(){Uo=!0}function pi(){Uo=!1}var ia=null;function Zs(t){if(Ws&&L.observeMutations){var e=t.treeCallback,n=e===void 0?Vr:e,r=t.nodeCallback,a=r===void 0?Vr:r,i=t.pseudoElementsCallback,o=i===void 0?Vr:i,s=t.observeMutationsRoot,l=s===void 0?Z:s;ia=new Ws(function(f){if(!Uo){var u=Ee();_n(f).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Qs(c.addedNodes[0])&&(L.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&L.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&Qs(c.target)&&~pp.indexOf(c.attributeName))if(c.attributeName==="class"&&Qp(c.target)){var h=ka(Io(c.target)),y=h.prefix,S=h.iconName;c.target.setAttribute(Eo,y||u),S&&c.target.setAttribute(To,S)}else Jp(c.target)&&a(c.target)})}}),pe&&ia.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rh(){ia&&ia.disconnect()}function ah(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ih(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=ka(Io(t));return a.prefix||(a.prefix=Ee()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Lp(a.prefix,t.innerText)||Lo(a.prefix,si(t.innerText))),!a.iconName&&L.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function oh(t){var e=_n(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return L.autoA11y&&(n?e["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||tr()):(e["aria-hidden"]="true",e.focusable="false")),e}function sh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Qt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function tl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ih(t),r=n.iconName,a=n.prefix,i=n.rest,o=oh(t),s=fi("parseNodeAttributes",{},t),l=e.styleParser?ah(t):[];return I({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Qt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var lh=Ht.styles;function xu(t){var e=L.autoReplaceSvg==="nest"?tl(t,{styleParser:!1}):tl(t);return~e.extra.classes.indexOf(ru)?fe("generateLayersText",t,e):fe("generateSvgReplacementMutation",t,e)}var Te=new Set;No.map(function(t){Te.add("fa-".concat(t))});Object.keys(Xn[Q]).map(Te.add.bind(Te));Object.keys(Xn[it]).map(Te.add.bind(Te));Te=lr(Te);function el(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pe)return Promise.resolve();var n=Z.documentElement.classList,r=function(c){return n.add("".concat(Hs,"-").concat(c))},a=function(c){return n.remove("".concat(Hs,"-").concat(c))},i=L.autoFetchSvg?Te:No.map(function(u){return"fa-".concat(u)}).concat(Object.keys(lh));i.includes("fa")||i.push("fa");var o=[".".concat(ru,":not([").concat(Ke,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ke,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=_n(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Fo.begin("onTree"),f=s.reduce(function(u,c){try{var h=xu(c);h&&u.push(h)}catch(y){nu||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,c){Promise.all(f).then(function(h){yu(h,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),c(h)})})}function fh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xu(t).then(function(n){n&&yu([n],e)})}function uh(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ui(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ui(a||{})),t(r,I(I({},n),{},{mask:a}))}}var ch=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Qt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,c=n.title,h=c===void 0?null:c,y=n.titleId,S=y===void 0?null:y,O=n.classes,b=O===void 0?[]:O,m=n.attributes,p=m===void 0?{}:m,g=n.styles,w=g===void 0?{}:g;if(e){var C=e.prefix,T=e.iconName,U=e.icon;return _a(I({type:"icon"},e),function(){return Xe("beforeDOMElementCreation",{iconDefinition:e,params:n}),L.autoA11y&&(h?p["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(S||tr()):(p["aria-hidden"]="true",p.focusable="false")),zo({icons:{main:ci(U),mask:l?ci(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:T,transform:I(I({},Qt),a),symbol:o,title:h,maskId:u,titleId:S,extra:{attributes:p,styles:w,classes:b}})})}},dh={mixout:function(){return{icon:uh(ch)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=el,n.nodeCallback=fh,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?Z:r,i=n.callback,o=i===void 0?function(){}:i;return el(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,c=r.maskId,h=r.extra;return new Promise(function(y,S){Promise.all([di(a,s),u.iconName?di(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var b=Ao(O,2),m=b[0],p=b[1];y([n,zo({icons:{main:m,mask:p},prefix:s,iconName:a,transform:l,symbol:f,maskId:c,title:i,titleId:o,extra:h,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=wa(s);l.length>0&&(a.style=l);var f;return jo(o)&&(f=fe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},mh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return _a({type:"layer"},function(){Xe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(lr(i)).join(" ")},children:o}]})}}}},ph={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,c=u===void 0?{}:u;return _a({type:"counter",content:n},function(){return Xe("beforeDOMElementCreation",{content:n,params:r}),qp({content:n.toString(),title:i,extra:{attributes:f,styles:c,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(lr(s))}})})}}}},hh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Qt:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,c=u===void 0?{}:u,h=r.styles,y=h===void 0?{}:h;return _a({type:"text",content:n},function(){return Xe("beforeDOMElementCreation",{content:n,params:r}),Ks({content:n,transform:I(I({},Qt),i),title:s,extra:{attributes:c,styles:y,classes:["".concat(L.cssPrefix,"-layers-text")].concat(lr(f))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Zf){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return L.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ks({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},gh=new RegExp('"',"ug"),nl=[1105920,1112319];function vh(t){var e=t.replace(gh,""),n=Ep(e,0),r=n>=nl[0]&&n<=nl[1],a=e.length===2?e[0]===e[1]:!1;return{value:si(a?e[0]:e),isSecondary:r||a}}function rl(t,e){var n="".concat(op).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=_n(t.children),o=i.filter(function(U){return U.getAttribute(oi)===e})[0],s=Me.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(cp),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var c=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?it:Q,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qn[h][l[2].toLowerCase()]:dp[h][f],S=vh(c),O=S.value,b=S.isSecondary,m=l[0].startsWith("FontAwesome"),p=Lo(y,O),g=p;if(m){var w=Dp(O);w.iconName&&w.prefix&&(p=w.iconName,y=w.prefix)}if(p&&!b&&(!o||o.getAttribute(Eo)!==y||o.getAttribute(To)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var C=sh(),T=C.extra;T.attributes[oi]=e,di(p,y).then(function(U){var et=zo(I(I({},C),{},{icons:{main:U,mask:Do()},prefix:y,iconName:g,extra:T,watchable:!0})),G=Z.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=et.map(function(gt){return ur(gt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function bh(t){return Promise.all([rl(t,"::before"),rl(t,"::after")])}function yh(t){return t.parentNode!==document.head&&!~lp.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(oi)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function al(t){if(pe)return new Promise(function(e,n){var r=_n(t.querySelectorAll("*")).filter(yh).map(bh),a=Fo.begin("searchPseudoElements");wu(),Promise.all(r).then(function(){a(),pi(),e()}).catch(function(){a(),pi(),n()})})}var wh={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=al,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Z:r;L.searchPseudoElements&&al(a)}}},il=!1,xh={mixout:function(){return{dom:{unwatch:function(){wu(),il=!0}}}},hooks:function(){return{bootstrap:function(){Zs(fi("mutationObserverCallbacks",{}))},noAuto:function(){rh()},watch:function(n){var r=n.observeMutationsRoot;il?pi():Zs(fi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ol=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},kh={mixout:function(){return{parse:{transform:function(n){return ol(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ol(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),c={transform:"".concat(l," ").concat(f," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:c,path:h};return{tag:"g",attributes:I({},y.outer),children:[{tag:"g",attributes:I({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),y.path)}]}]}}}},Ua={x:0,y:0,width:"100%",height:"100%"};function sl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function _h(t){return t.tag==="g"?t.children:[t]}var Oh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ka(a.split(" ").map(function(o){return o.trim()})):Do();return i.prefix||(i.prefix=Ee()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,c=o.width,h=o.icon,y=_p({transform:l,containerWidth:c,iconWidth:f}),S={tag:"rect",attributes:I(I({},Ua),{},{fill:"white"})},O=u.children?{children:u.children.map(sl)}:{},b={tag:"g",attributes:I({},y.inner),children:[sl(I({tag:u.tag,attributes:I(I({},u.attributes),y.path)},O))]},m={tag:"g",attributes:I({},y.outer),children:[b]},p="mask-".concat(s||tr()),g="clip-".concat(s||tr()),w={tag:"mask",attributes:I(I({},Ua),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:_h(h)},w]};return r.push(C,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},Ua)}),{children:r,attributes:a}}}},Sh={provides:function(e){var n=!1;Me.matchMedia&&(n=Me.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ch={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ph=[Cp,dh,mh,ph,hh,wh,xh,kh,Oh,Sh,Ch];Up(Ph,{mixoutsTo:It});It.noAuto;It.config;It.library;It.dom;var hi=It.parse;It.findIconDefinition;It.toHtml;var Ah=It.icon;It.layer;It.text;It.counter;function ll(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function re(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ll(Object(n),!0).forEach(function(r){Pt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ll(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oa(t){"@babel/helpers - typeof";return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oa(t)}function Pt(t,e,n){return e=Nh(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Mh(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Eh(t,e){if(t==null)return{};var n=Mh(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Th(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Nh(t){var e=Th(t,"string");return typeof e=="symbol"?e:String(e)}var Ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ku={exports:{}};(function(t){(function(e){var n=function(m,p,g){if(!f(p)||c(p)||h(p)||y(p)||l(p))return p;var w,C=0,T=0;if(u(p))for(w=[],T=p.length;C<T;C++)w.push(n(m,p[C],g));else{w={};for(var U in p)Object.prototype.hasOwnProperty.call(p,U)&&(w[m(U,g)]=n(m,p[U],g))}return w},r=function(m,p){p=p||{};var g=p.separator||"_",w=p.split||/(?=[A-Z])/;return m.split(w).join(g)},a=function(m){return S(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,g){return g?g.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var p=a(m);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(m,p){return r(m,p).toLowerCase()},s=Object.prototype.toString,l=function(m){return typeof m=="function"},f=function(m){return m===Object(m)},u=function(m){return s.call(m)=="[object Array]"},c=function(m){return s.call(m)=="[object Date]"},h=function(m){return s.call(m)=="[object RegExp]"},y=function(m){return s.call(m)=="[object Boolean]"},S=function(m){return m=m-0,m===m},O=function(m,p){var g=p&&"process"in p?p.process:p;return typeof g!="function"?m:function(w,C){return g(w,m,C)}},b={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(m,p){return n(O(a,p),m)},decamelizeKeys:function(m,p){return n(O(o,p),m,p)},pascalizeKeys:function(m,p){return n(O(i,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(Ih)})(ku);var jh=ku.exports,Rh=["class","style"];function Lh(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=jh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Dh(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function _u(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return _u(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var u=t.attributes[f];switch(f){case"class":l.class=Dh(u);break;case"style":l.style=Lh(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Eh(n,Rh);return rm(t.tag,re(re(re({},e),{},{class:a.class,style:re(re({},a.style),o)},a.attrs),s),r)}var Ou=!1;try{Ou=!0}catch{}function zh(){if(!Ou&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ya(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Pt({},t,e):{}}function Fh(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Pt(e,"fa-".concat(t.size),t.size!==null),Pt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Pt(e,"fa-pull-".concat(t.pull),t.pull!==null),Pt(e,"fa-swap-opacity",t.swapOpacity),Pt(e,"fa-bounce",t.bounce),Pt(e,"fa-shake",t.shake),Pt(e,"fa-beat",t.beat),Pt(e,"fa-fade",t.fade),Pt(e,"fa-beat-fade",t.beatFade),Pt(e,"fa-flash",t.flash),Pt(e,"fa-spin-pulse",t.spinPulse),Pt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function fl(t){if(t&&oa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(hi.icon)return hi.icon(t);if(t===null)return null;if(oa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ul=or({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=ut(function(){return fl(e.icon)}),i=ut(function(){return Ya("classes",Fh(e))}),o=ut(function(){return Ya("transform",typeof e.transform=="string"?hi.transform(e.transform):e.transform)}),s=ut(function(){return Ya("mask",fl(e.mask))}),l=ut(function(){return Ah(a.value,re(re(re(re({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});hn(l,function(u){if(!u)return zh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ut(function(){return l.value?_u(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Uh={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Yh={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},Wh={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};let Tr;const Hh=new Uint8Array(16);function $h(){if(!Tr&&(Tr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Tr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Tr(Hh)}const vt=[];for(let t=0;t<256;++t)vt.push((t+256).toString(16).slice(1));function Bh(t,e=0){return vt[t[e+0]]+vt[t[e+1]]+vt[t[e+2]]+vt[t[e+3]]+"-"+vt[t[e+4]]+vt[t[e+5]]+"-"+vt[t[e+6]]+vt[t[e+7]]+"-"+vt[t[e+8]]+vt[t[e+9]]+"-"+vt[t[e+10]]+vt[t[e+11]]+vt[t[e+12]]+vt[t[e+13]]+vt[t[e+14]]+vt[t[e+15]]}const Vh=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),cl={randomUUID:Vh};function qh(t,e,n){if(cl.randomUUID&&!e&&!t)return cl.randomUUID();t=t||{};const r=t.random||(t.rng||$h)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Bh(r)}const Gh=_t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),Kh=_t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),Xh=[Gh,Kh],dl=or({__name:"NeSpinner",props:{size:{type:String,default:"4"},color:{type:String,default:"primary"}},setup(t){const e=t,n={0:"w-0 h-0","0.5":"w-0.5 h-0.5",1:"w-1 h-1","1.5":"w-1.5 h-1.5",10:"w-10 h-10",11:"w-11 h-11",12:"w-12 h-12",2:"w-2 h-2","2.5":"w-2.5 h-2.5",3:"w-3 h-3",4:"w-4 h-4",5:"w-5 h-5",6:"w-6 h-6",7:"w-7 h-7",8:"w-8 h-8",9:"w-9 h-9",px:"w-px h-px"},r={primary:"fill-primary-700 dark:fill-primary-500",blue:"fill-blue-600",gray:"fill-gray-600 dark:fill-gray-300",green:"fill-green-500",pink:"fill-pink-600",purple:"fill-purple-600",red:"fill-red-600",yellow:"fill-yellow-400",white:"fill-white"},a=ut(()=>n[e.size]),i=ut(()=>r[e.color]);return(o,s)=>(bt(),Nt("svg",{class:ae(["animate-spin-fast text-gray-300 dark:text-gray-500",[a.value,i.value]]),fill:"none",role:"status",viewBox:"0 0 100 101",xmlns:"http://www.w3.org/2000/svg"},Xh,2))}}),Qh=["disabled"],Jh={class:"flex items-center justify-center"},Zh={key:0,class:"mr-2"},tg={key:1,class:"ml-2"},Wa=or({__name:"NeButton",props:{kind:{type:String,default:"secondary"},size:{type:String,default:"md"},loading:{type:Boolean,default:!1},loadingPosition:{type:String,default:"prefix"},disabled:{type:Boolean,default:!1}},setup(t){const e=t,n={xs:"rounded px-2 py-1 text-xs",sm:"rounded px-2 py-1 text-sm",md:"rounded-md px-2.5 py-1.5 text-sm",lg:"rounded-md px-3 py-2 text-sm",xl:"rounded-md px-3.5 py-2.5 text-sm"},r={primary:"shadow-sm bg-primary-700 text-white hover:bg-primary-800 focus:ring-offset-white dark:bg-primary-500 dark:text-gray-950 dark:hover:bg-primary-300 dark:focus:ring-offset-primary-950",secondary:"shadow-sm ring-1 text-primary-700 ring-gray-300 hover:bg-gray-200/70 hover:text-primary-800 focus:ring-offset-white dark:text-primary-500 dark:ring-gray-500 dark:hover:bg-gray-600/30 dark:hover:text-primary-500 dark:focus:ring-offset-primary-950",tertiary:"text-primary-700 hover:text-primary-800 hover:bg-gray-200/70 focus:ring-offset-white dark:text-primary-500 dark:hover:text-primary-500 dark:hover:bg-gray-600/30 dark:focus:ring-offset-primary-950",danger:"shadow-sm bg-rose-700 text-white hover:bg-rose-800 focus:ring-offset-white dark:bg-rose-600 dark:text-white dark:hover:bg-rose-500 dark:focus:ring-offset-primary-950"},a={primary:"white",secondary:"primary",tertiary:"primary",danger:"white"},i={xs:"2.5",sm:"3",md:"4",lg:"4",xl:"5"},o=ut(()=>e.loading&&e.loadingPosition==="prefix"),s=ut(()=>e.loading&&e.loadingPosition==="suffix");return(l,f)=>(bt(),Nt("button",{class:ae(["font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary-300",[r[e.kind],n[e.size]]]),disabled:t.disabled,type:"button"},[_t("div",Jh,[l.$slots.prefix||o.value?(bt(),Nt("div",Zh,[o.value?(bt(),ta(dl,{key:0,color:a[t.kind],size:i[t.size]},null,8,["color","size"])):Wr(l.$slots,"prefix",{key:1})])):We("",!0),Wr(l.$slots,"default"),l.$slots.suffix||s.value?(bt(),Nt("div",tg,[s.value?(bt(),ta(dl,{key:0,color:a[t.kind],size:i[t.size]},null,8,["color","size"])):Wr(l.$slots,"suffix",{key:1})])):We("",!0)])],10,Qh))}});function ml(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ml(Object(n),!0).forEach(function(r){mt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ml(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sa(t){"@babel/helpers - typeof";return sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sa(t)}function eg(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ng(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rg(t,e,n){return e&&ng(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yo(t,e){return ig(t)||sg(t,e)||Su(t,e)||fg()}function cr(t){return ag(t)||og(t)||Su(t)||lg()}function ag(t){if(Array.isArray(t))return gi(t)}function ig(t){if(Array.isArray(t))return t}function og(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sg(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Su(t,e){if(t){if(typeof t=="string")return gi(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gi(t,e)}}function gi(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function lg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pl=function(){},Wo={},Cu={},Pu=null,Au={mark:pl,measure:pl};try{typeof window<"u"&&(Wo=window),typeof document<"u"&&(Cu=document),typeof MutationObserver<"u"&&(Pu=MutationObserver),typeof performance<"u"&&(Au=performance)}catch{}var ug=Wo.navigator||{},hl=ug.userAgent,gl=hl===void 0?"":hl,Ne=Wo,tt=Cu,vl=Pu,Nr=Au;Ne.document;var he=!!tt.documentElement&&!!tt.head&&typeof tt.addEventListener=="function"&&typeof tt.createElement=="function",Mu=~gl.indexOf("MSIE")||~gl.indexOf("Trident/"),Ir,jr,Rr,Lr,Dr,ue="___FONT_AWESOME___",vi=16,Eu="fa",Tu="svg-inline--fa",Qe="data-fa-i2svg",bi="data-fa-pseudo-element",cg="data-fa-pseudo-element-pending",Ho="data-prefix",$o="data-icon",bl="fontawesome-i2svg",dg="async",mg=["HTML","HEAD","STYLE","SCRIPT"],Nu=function(){try{return!0}catch{return!1}}(),J="classic",ot="sharp",Bo=[J,ot];function dr(t){return new Proxy(t,{get:function(e,n){return n in e?e[n]:e[J]}})}var er=dr((Ir={},mt(Ir,J,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),mt(Ir,ot,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ir)),nr=dr((jr={},mt(jr,J,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),mt(jr,ot,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),jr)),rr=dr((Rr={},mt(Rr,J,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),mt(Rr,ot,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Rr)),pg=dr((Lr={},mt(Lr,J,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),mt(Lr,ot,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Lr)),hg=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Iu="fa-layers-text",gg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vg=dr((Dr={},mt(Dr,J,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),mt(Dr,ot,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Dr)),ju=[1,2,3,4,5,6,7,8,9,10],bg=ju.concat([11,12,13,14,15,16,17,18,19,20]),yg=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Be={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ar=new Set;Object.keys(nr[J]).map(ar.add.bind(ar));Object.keys(nr[ot]).map(ar.add.bind(ar));var wg=[].concat(Bo,cr(ar),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Be.GROUP,Be.SWAP_OPACITY,Be.PRIMARY,Be.SECONDARY]).concat(ju.map(function(t){return"".concat(t,"x")})).concat(bg.map(function(t){return"w-".concat(t)})),Hn=Ne.FontAwesomeConfig||{};function xg(t){var e=tt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function kg(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(tt&&typeof tt.querySelector=="function"){var _g=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_g.forEach(function(t){var e=Yo(t,2),n=e[0],r=e[1],a=kg(xg(n));a!=null&&(Hn[r]=a)})}var Ru={styleDefault:"solid",familyDefault:"classic",cssPrefix:Eu,replacementClass:Tu,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Hn.familyPrefix&&(Hn.cssPrefix=Hn.familyPrefix);var xn=j(j({},Ru),Hn);xn.autoReplaceSvg||(xn.observeMutations=!1);var D={};Object.keys(Ru).forEach(function(t){Object.defineProperty(D,t,{enumerable:!0,set:function(e){xn[t]=e,$n.forEach(function(n){return n(D)})},get:function(){return xn[t]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){xn.cssPrefix=t,$n.forEach(function(e){return e(D)})},get:function(){return xn.cssPrefix}});Ne.FontAwesomeConfig=D;var $n=[];function Og(t){return $n.push(t),function(){$n.splice($n.indexOf(t),1)}}var xe=vi,Jt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sg(t){if(!(!t||!he)){var e=tt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=tt.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return tt.head.insertBefore(e,r),t}}var Cg="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ir(){for(var t=12,e="";t-- >0;)e+=Cg[Math.random()*62|0];return e}function On(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vo(t){return t.classList?On(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Lu(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pg(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Lu(t[n]),'" ')},"").trim()}function Oa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function qo(t){return t.size!==Jt.size||t.x!==Jt.x||t.y!==Jt.y||t.rotate!==Jt.rotate||t.flipX||t.flipY}function Ag(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Mg(t){var e=t.transform,n=t.width,r=n===void 0?vi:n,a=t.height,i=a===void 0?vi:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Mu?l+="translate(".concat(e.x/xe-r/2,"em, ").concat(e.y/xe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/xe,"em), calc(-50% + ").concat(e.y/xe,"em)) "):l+="translate(".concat(e.x/xe,"em, ").concat(e.y/xe,"em) "),l+="scale(".concat(e.size/xe*(e.flipX?-1:1),", ").concat(e.size/xe*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Eg=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Du(){var t=Eu,e=Tu,n=D.cssPrefix,r=D.replacementClass,a=Eg;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var yl=!1;function Ha(){D.autoAddCss&&!yl&&(Sg(Du()),yl=!0)}var Tg={mixout:function(){return{dom:{css:Du,insertCss:Ha}}},hooks:function(){return{beforeDOMElementCreation:function(){Ha()},beforeI2svg:function(){Ha()}}}},ce=Ne||{};ce[ue]||(ce[ue]={});ce[ue].styles||(ce[ue].styles={});ce[ue].hooks||(ce[ue].hooks={});ce[ue].shims||(ce[ue].shims=[]);var $t=ce[ue],zu=[],Ng=function t(){tt.removeEventListener("DOMContentLoaded",t),la=1,zu.map(function(e){return e()})},la=!1;he&&(la=(tt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tt.readyState),la||tt.addEventListener("DOMContentLoaded",Ng));function Ig(t){he&&(la?setTimeout(t,0):zu.push(t))}function mr(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Lu(t):"<".concat(e," ").concat(Pg(r),">").concat(i.map(mr).join(""),"</").concat(e,">")}function wl(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var $a=function(t,e,n,r){var a=Object.keys(t),i=a.length,o=e,s,l,f;for(n===void 0?(s=1,f=t[a[0]]):(s=0,f=n);s<i;s++)l=a[s],f=o(f,t[l],l,t);return f};function jg(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Fu(t){var e=jg(t);return e.length===1?e[0].toString(16):null}function Rg(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function xl(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function yi(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=xl(e);typeof $t.hooks.addPack=="function"&&!a?$t.hooks.addPack(t,xl(e)):$t.styles[t]=j(j({},$t.styles[t]||{}),i),t==="fas"&&yi("fa",e)}var zr,Fr,Ur,un=$t.styles,Lg=$t.shims,Dg=(zr={},mt(zr,J,Object.values(rr[J])),mt(zr,ot,Object.values(rr[ot])),zr),Go=null,Uu={},Yu={},Wu={},Hu={},$u={},zg=(Fr={},mt(Fr,J,Object.keys(er[J])),mt(Fr,ot,Object.keys(er[ot])),Fr);function Fg(t){return~wg.indexOf(t)}function Ug(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Fg(a)?a:null}var Bu=function(){var t=function(r){return $a(un,function(a,i,o){return a[o]=$a(i,r,{}),a},{})};Uu=t(function(r,a,i){if(a[3]&&(r[a[3]]=i),a[2]){var o=a[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){r[s.toString(16)]=i})}return r}),Yu=t(function(r,a,i){if(r[i]=i,a[2]){var o=a[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){r[s]=i})}return r}),$u=t(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(s){r[s]=i}),r});var e="far"in un||D.autoFetchSvg,n=$a(Lg,function(r,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});Wu=n.names,Hu=n.unicodes,Go=Sa(D.styleDefault,{family:D.familyDefault})};Og(function(t){Go=Sa(t.styleDefault,{family:D.familyDefault})});Bu();function Ko(t,e){return(Uu[t]||{})[e]}function Yg(t,e){return(Yu[t]||{})[e]}function Ve(t,e){return($u[t]||{})[e]}function Vu(t){return Wu[t]||{prefix:null,iconName:null}}function Wg(t){var e=Hu[t],n=Ko("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ie(){return Go}var Xo=function(){return{prefix:null,iconName:null,rest:[]}};function Sa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?J:n,a=er[r][t],i=nr[r][t]||nr[r][a],o=t in $t.styles?t:null;return i||o||null}var kl=(Ur={},mt(Ur,J,Object.keys(rr[J])),mt(Ur,ot,Object.keys(rr[ot])),Ur);function Ca(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},mt(e,J,"".concat(D.cssPrefix,"-").concat(J)),mt(e,ot,"".concat(D.cssPrefix,"-").concat(ot)),e),o=null,s=J;(t.includes(i[J])||t.some(function(f){return kl[J].includes(f)}))&&(s=J),(t.includes(i[ot])||t.some(function(f){return kl[ot].includes(f)}))&&(s=ot);var l=t.reduce(function(f,u){var c=Ug(D.cssPrefix,u);if(un[u]?(u=Dg[s].includes(u)?pg[s][u]:u,o=u,f.prefix=u):zg[s].indexOf(u)>-1?(o=u,f.prefix=Sa(u,{family:s})):c?f.iconName=c:u!==D.replacementClass&&u!==i[J]&&u!==i[ot]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var h=o==="fa"?Vu(f.iconName):{},y=Ve(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||y||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!un.far&&un.fas&&!D.autoFetchSvg&&(f.prefix="fas")}return f},Xo());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ot&&(un.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ve(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ie()||"fas"),l}var Hg=function(){function t(){eg(this,t),this.definitions={}}return rg(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=j(j({},e.definitions[o]||{}),i[o]),yi(o,i[o]);var s=rr[J][o];s&&yi(s,i[o]),Bu()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(a){var i=r[a],o=i.prefix,s=i.iconName,l=i.icon,f=l[2];e[o]||(e[o]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(e[o][u]=l)}),e[o][s]=l}),e}}]),t}(),_l=[],cn={},vn={},$g=Object.keys(vn);function Bg(t,e){var n=e.mixoutsTo;return _l=t,cn={},Object.keys(vn).forEach(function(r){$g.indexOf(r)===-1&&delete vn[r]}),_l.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),sa(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){cn[o]||(cn[o]=[]),cn[o].push(i[o])})}r.provides&&r.provides(vn)}),n}function wi(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=cn[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Je(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=cn[t]||[];a.forEach(function(i){i.apply(null,n)})}function de(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return vn[t]?vn[t].apply(null,e):void 0}function xi(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ie();if(e)return e=Ve(n,e)||e,wl(qu.definitions,n,e)||wl($t.styles,n,e)}var qu=new Hg,Vg=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,Je("noAuto")},qg={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return he?(Je("beforeI2svg",t),de("pseudoElements2svg",t),de("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,Ig(function(){Kg({autoReplaceSvgRoot:e}),Je("watch",t)})}},Gg={icon:function(t){if(t===null)return null;if(sa(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ve(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Sa(t[0]);return{prefix:n,iconName:Ve(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(hg))){var r=Ca(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ie(),iconName:Ve(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var a=Ie();return{prefix:a,iconName:Ve(a,t)||t}}}},jt={noAuto:Vg,config:D,dom:qg,parse:Gg,library:qu,findIconDefinition:xi,toHtml:mr},Kg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,n=e===void 0?tt:e;(Object.keys($t.styles).length>0||D.autoFetchSvg)&&he&&D.autoReplaceSvg&&jt.dom.i2svg({node:n})};function Pa(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return mr(n)})}}),Object.defineProperty(t,"node",{get:function(){if(he){var n=tt.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function Xg(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(qo(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Oa(j(j({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Qg(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(D.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},a),{},{id:o}),children:r}]}]}function Qo(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,f=t.maskId,u=t.titleId,c=t.extra,h=t.watchable,y=h===void 0?!1:h,S=r.found?r:n,O=S.width,b=S.height,m=a==="fak",p=[D.replacementClass,i?"".concat(D.cssPrefix,"-").concat(i):""].filter(function(G){return c.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(c.classes).join(" "),g={children:[],attributes:j(j({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:p,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(b)})},w=m&&!~c.classes.indexOf("fa-fw")?{width:"".concat(O/b*16*.0625,"em")}:{};y&&(g.attributes[Qe]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||ir())},children:[l]}),delete g.attributes.title);var C=j(j({},g),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:j(j({},w),c.styles)}),T=r.found&&n.found?de("generateAbstractMask",C)||{children:[],attributes:{}}:de("generateAbstractIcon",C)||{children:[],attributes:{}},U=T.children,et=T.attributes;return C.children=U,C.attributes=et,s?Qg(C):Xg(C)}function Ol(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,f=j(j(j({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Qe]="");var u=j({},o.styles);qo(a)&&(u.transform=Mg({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var c=Oa(u);c.length>0&&(f.style=c);var h=[];return h.push({tag:"span",attributes:f,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Jg(t){var e=t.content,n=t.title,r=t.extra,a=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Oa(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ba=$t.styles;function ki(t){var e=t[0],n=t[1],r=t.slice(4),a=Yo(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(Be.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Be.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Be.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Zg={found:!1,width:512,height:512};function tv(t,e){!Nu&&!D.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _i(t,e){var n=e;return e==="fa"&&D.styleDefault!==null&&(e=Ie()),new Promise(function(r,a){if(de("missingIconAbstract"),n==="fa"){var i=Vu(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ba[e]&&Ba[e][t]){var o=Ba[e][t];return r(ki(o))}tv(t,e),r(j(j({},Zg),{},{icon:D.showMissingIcons&&t?de("missingIconAbstract")||{}:{}}))})}var Sl=function(){},Oi=D.measurePerformance&&Nr&&Nr.mark&&Nr.measure?Nr:{mark:Sl,measure:Sl},Nn='FA "6.5.1"',ev=function(t){return Oi.mark("".concat(Nn," ").concat(t," begins")),function(){return Gu(t)}},Gu=function(t){Oi.mark("".concat(Nn," ").concat(t," ends")),Oi.measure("".concat(Nn," ").concat(t),"".concat(Nn," ").concat(t," begins"),"".concat(Nn," ").concat(t," ends"))},Jo={begin:ev,end:Gu},Gr=function(){};function Cl(t){var e=t.getAttribute?t.getAttribute(Qe):null;return typeof e=="string"}function nv(t){var e=t.getAttribute?t.getAttribute(Ho):null,n=t.getAttribute?t.getAttribute($o):null;return e&&n}function rv(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(D.replacementClass)}function av(){if(D.autoReplaceSvg===!0)return Kr.replace;var t=Kr[D.autoReplaceSvg];return t||Kr.replace}function iv(t){return tt.createElementNS("http://www.w3.org/2000/svg",t)}function ov(t){return tt.createElement(t)}function Ku(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?iv:ov:n;if(typeof t=="string")return tt.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Ku(o,{ceFn:r}))}),a}function sv(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Kr={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(Ku(r),e)}),e.getAttribute(Qe)===null&&D.keepOriginalSource){var n=tt.createComment(sv(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~Vo(e).indexOf(D.replacementClass))return Kr.replace(t);var r=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,s){return s===D.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}var i=n.map(function(o){return mr(o)}).join(`
`);e.setAttribute(Qe,""),e.innerHTML=i}};function Pl(t){t()}function Xu(t,e){var n=typeof e=="function"?e:Gr;if(t.length===0)n();else{var r=Pl;D.mutateApproach===dg&&(r=Ne.requestAnimationFrame||Pl),r(function(){var a=av(),i=Jo.begin("mutate");t.map(a),i(),n()})}}var Zo=!1;function Qu(){Zo=!0}function Si(){Zo=!1}var fa=null;function Al(t){if(vl&&D.observeMutations){var e=t.treeCallback,n=e===void 0?Gr:e,r=t.nodeCallback,a=r===void 0?Gr:r,i=t.pseudoElementsCallback,o=i===void 0?Gr:i,s=t.observeMutationsRoot,l=s===void 0?tt:s;fa=new vl(function(f){if(!Zo){var u=Ie();On(f).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Cl(c.addedNodes[0])&&(D.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&D.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&Cl(c.target)&&~yg.indexOf(c.attributeName))if(c.attributeName==="class"&&nv(c.target)){var h=Ca(Vo(c.target)),y=h.prefix,S=h.iconName;c.target.setAttribute(Ho,y||u),S&&c.target.setAttribute($o,S)}else rv(c.target)&&a(c.target)})}}),he&&fa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lv(){fa&&fa.disconnect()}function fv(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function uv(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Ca(Vo(t));return a.prefix||(a.prefix=Ie()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Yg(a.prefix,t.innerText)||Ko(a.prefix,Fu(t.innerText))),!a.iconName&&D.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function cv(t){var e=On(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return D.autoA11y&&(n?e["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||ir()):(e["aria-hidden"]="true",e.focusable="false")),e}function dv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Jt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ml(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uv(t),r=n.iconName,a=n.prefix,i=n.rest,o=cv(t),s=wi("parseNodeAttributes",{},t),l=e.styleParser?fv(t):[];return j({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Jt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var mv=$t.styles;function Ju(t){var e=D.autoReplaceSvg==="nest"?Ml(t,{styleParser:!1}):Ml(t);return~e.extra.classes.indexOf(Iu)?de("generateLayersText",t,e):de("generateSvgReplacementMutation",t,e)}var je=new Set;Bo.map(function(t){je.add("fa-".concat(t))});Object.keys(er[J]).map(je.add.bind(je));Object.keys(er[ot]).map(je.add.bind(je));je=cr(je);function El(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!he)return Promise.resolve();var n=tt.documentElement.classList,r=function(u){return n.add("".concat(bl,"-").concat(u))},a=function(u){return n.remove("".concat(bl,"-").concat(u))},i=D.autoFetchSvg?je:Bo.map(function(u){return"fa-".concat(u)}).concat(Object.keys(mv));i.includes("fa")||i.push("fa");var o=[".".concat(Iu,":not([").concat(Qe,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Qe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=On(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Jo.begin("onTree"),f=s.reduce(function(u,c){try{var h=Ju(c);h&&u.push(h)}catch(y){Nu||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,c){Promise.all(f).then(function(h){Xu(h,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),c(h)})})}function pv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ju(t).then(function(n){n&&Xu([n],e)})}function hv(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:xi(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:xi(a||{})),t(r,j(j({},n),{},{mask:a}))}}var gv=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?Jt:n,a=e.symbol,i=a===void 0?!1:a,o=e.mask,s=o===void 0?null:o,l=e.maskId,f=l===void 0?null:l,u=e.title,c=u===void 0?null:u,h=e.titleId,y=h===void 0?null:h,S=e.classes,O=S===void 0?[]:S,b=e.attributes,m=b===void 0?{}:b,p=e.styles,g=p===void 0?{}:p;if(t){var w=t.prefix,C=t.iconName,T=t.icon;return Pa(j({type:"icon"},t),function(){return Je("beforeDOMElementCreation",{iconDefinition:t,params:e}),D.autoA11y&&(c?m["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(y||ir()):(m["aria-hidden"]="true",m.focusable="false")),Qo({icons:{main:ki(T),mask:s?ki(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:C,transform:j(j({},Jt),r),symbol:i,title:c,maskId:f,titleId:y,extra:{attributes:m,styles:g,classes:O}})})}},vv={mixout:function(){return{icon:hv(gv)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=El,t.nodeCallback=pv,t}}},provides:function(t){t.i2svg=function(e){var n=e.node,r=n===void 0?tt:n,a=e.callback,i=a===void 0?function(){}:a;return El(r,i)},t.generateSvgReplacementMutation=function(e,n){var r=n.iconName,a=n.title,i=n.titleId,o=n.prefix,s=n.transform,l=n.symbol,f=n.mask,u=n.maskId,c=n.extra;return new Promise(function(h,y){Promise.all([_i(r,o),f.iconName?_i(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var O=Yo(S,2),b=O[0],m=O[1];h([e,Qo({icons:{main:b,mask:m},prefix:o,iconName:r,transform:s,symbol:l,maskId:u,title:a,titleId:i,extra:c,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.transform,o=e.styles,s=Oa(o);s.length>0&&(r.style=s);var l;return qo(i)&&(l=de("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},bv={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n;return Pa({type:"layer"},function(){Je("beforeDOMElementCreation",{assembler:t,params:e});var a=[];return t(function(i){Array.isArray(i)?i.map(function(o){a=a.concat(o.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(cr(r)).join(" ")},children:a}]})}}}},yv={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.title,r=n===void 0?null:n,a=e.classes,i=a===void 0?[]:a,o=e.attributes,s=o===void 0?{}:o,l=e.styles,f=l===void 0?{}:l;return Pa({type:"counter",content:t},function(){return Je("beforeDOMElementCreation",{content:t,params:e}),Jg({content:t.toString(),title:r,extra:{attributes:s,styles:f,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(cr(i))}})})}}}},wv={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?Jt:n,a=e.title,i=a===void 0?null:a,o=e.classes,s=o===void 0?[]:o,l=e.attributes,f=l===void 0?{}:l,u=e.styles,c=u===void 0?{}:u;return Pa({type:"text",content:t},function(){return Je("beforeDOMElementCreation",{content:t,params:e}),Ol({content:t,transform:j(j({},Jt),r),title:i,extra:{attributes:f,styles:c,classes:["".concat(D.cssPrefix,"-layers-text")].concat(cr(s))}})})}}},provides:function(t){t.generateLayersText=function(e,n){var r=n.title,a=n.transform,i=n.extra,o=null,s=null;if(Mu){var l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/l,s=f.height/l}return D.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Ol({content:e.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}},xv=new RegExp('"',"ug"),Tl=[1105920,1112319];function kv(t){var e=t.replace(xv,""),n=Rg(e,0),r=n>=Tl[0]&&n<=Tl[1],a=e.length===2?e[0]===e[1]:!1;return{value:Fu(a?e[0]:e),isSecondary:r||a}}function Nl(t,e){var n="".concat(cg).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=On(t.children),o=i.filter(function(U){return U.getAttribute(bi)===e})[0],s=Ne.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(gg),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var c=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ot:J,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?nr[h][l[2].toLowerCase()]:vg[h][f],S=kv(c),O=S.value,b=S.isSecondary,m=l[0].startsWith("FontAwesome"),p=Ko(y,O),g=p;if(m){var w=Wg(O);w.iconName&&w.prefix&&(p=w.iconName,y=w.prefix)}if(p&&!b&&(!o||o.getAttribute(Ho)!==y||o.getAttribute($o)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var C=dv(),T=C.extra;T.attributes[bi]=e,_i(p,y).then(function(U){var et=Qo(j(j({},C),{},{icons:{main:U,mask:Xo()},prefix:y,iconName:g,extra:T,watchable:!0})),G=tt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=et.map(function(gt){return mr(gt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function _v(t){return Promise.all([Nl(t,"::before"),Nl(t,"::after")])}function Ov(t){return t.parentNode!==document.head&&!~mg.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(bi)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Il(t){if(he)return new Promise(function(e,n){var r=On(t.querySelectorAll("*")).filter(Ov).map(_v),a=Jo.begin("searchPseudoElements");Qu(),Promise.all(r).then(function(){a(),Si(),e()}).catch(function(){a(),Si(),n()})})}var Sv={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Il,t}}},provides:function(t){t.pseudoElements2svg=function(e){var n=e.node,r=n===void 0?tt:n;D.searchPseudoElements&&Il(r)}}},jl=!1,Cv={mixout:function(){return{dom:{unwatch:function(){Qu(),jl=!0}}}},hooks:function(){return{bootstrap:function(){Al(wi("mutationObserverCallbacks",{}))},noAuto:function(){lv()},watch:function(t){var e=t.observeMutationsRoot;jl?Si():Al(wi("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Rl=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var a=r.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},Pv={mixout:function(){return{parse:{transform:function(t){return Rl(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=Rl(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var n=e.main,r=e.transform,a=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(f)},c={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:u,path:c};return{tag:"g",attributes:j({},h.outer),children:[{tag:"g",attributes:j({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:j(j({},n.icon.attributes),h.path)}]}]}}}},Va={x:0,y:0,width:"100%",height:"100%"};function Ll(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Av(t){return t.tag==="g"?t.children:[t]}var Mv={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?Ca(n.split(" ").map(function(a){return a.trim()})):Xo();return r.prefix||(r.prefix=Ie()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.mask,o=e.maskId,s=e.transform,l=a.width,f=a.icon,u=i.width,c=i.icon,h=Ag({transform:s,containerWidth:u,iconWidth:l}),y={tag:"rect",attributes:j(j({},Va),{},{fill:"white"})},S=f.children?{children:f.children.map(Ll)}:{},O={tag:"g",attributes:j({},h.inner),children:[Ll(j({tag:f.tag,attributes:j(j({},f.attributes),h.path)},S))]},b={tag:"g",attributes:j({},h.outer),children:[O]},m="mask-".concat(o||ir()),p="clip-".concat(o||ir()),g={tag:"mask",attributes:j(j({},Va),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,b]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:Av(c)},g]};return n.push(w,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(m,")")},Va)}),{children:n,attributes:r}}}},Ev={provides:function(t){var e=!1;Ne.matchMedia&&(e=Ne.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:j(j({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=j(j({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:j(j({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:j(j({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:j(j({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:j(j({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:j(j({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Tv={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Nv=[Tg,vv,bv,yv,wv,Sv,Cv,Pv,Mv,Ev,Tv];Bg(Nv,{mixoutsTo:jt});jt.noAuto;jt.config;var qa=jt.library;jt.dom;jt.parse;jt.findIconDefinition;jt.toHtml;jt.icon;jt.layer;jt.text;jt.counter;const Iv=["for"],jv={key:0,class:"ml-1"},Rv={key:0,class:"ml-2 font-normal"},Lv={class:"relative rounded-md shadow-sm"},Dv=["id","type","value","placeholder","aria-describedby","disabled"],zv={key:0,class:"absolute inset-y-0 right-0 flex items-center"},Fv=["disabled"],Uv={class:"sr-only"},Yv={key:1,class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},Wv=["id"],Hv=["id"],$v="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 mt-0 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 bg-white placeholder:text-gray-400 transition-colors duration-200 dark:text-gray-50 dark:bg-gray-950 dark:placeholder:text-gray-500",Bv="ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-300",Vv="pr-10 ring-rose-700 focus:ring-rose-500 dark:ring-rose-500 dark:focus:ring-rose-500",Dl="mt-2 text-sm",zl=or({inheritAttrs:!1,__name:"NeTextInput",props:{label:{type:String,default:""},modelValue:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""},helperText:{type:String,default:""},invalidMessage:{type:String,default:""},optional:{type:Boolean},isPassword:{type:Boolean,default:!1},showPasswordLabel:{type:String,default:"Show password"},hidePasswordLabel:{type:String,default:"Hide password"},optionalLabel:{type:String,default:"Optional"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{expose:e,emit:n}){const r=t,a=n;e({focus:S}),qa.add(Uh),qa.add(Wh),qa.add(Yh);let i=oe(!1);const o=ut(()=>r.id?r.id:qh()),s=ut(()=>[$v,r.invalidMessage?Vv:Bv].join(" ")),l=oe(),f=Ad(),u=ut(()=>{const O=["class"];return Object.keys(f).filter(b=>O.includes(b)).reduce((b,m)=>(b[m]=f[m],b),{})}),c=ut(()=>{const O=["class"];return Object.keys(f).filter(b=>!O.includes(b)).reduce((b,m)=>(b[m]=f[m],b),{})});function h(O){a("update:modelValue",O.target.value)}function y(){i.value=!i.value}function S(){l.value.focus()}return(O,b)=>(bt(),Nt("div",vc(Hf(u.value)),[t.label?(bt(),Nt("label",{key:0,for:o.value,class:"mb-2 flex items-end justify-between text-sm font-medium leading-6 text-gray-700 dark:text-gray-200"},[_t("span",null,[Un(on(t.label)+" ",1),O.$slots.tooltip?(bt(),Nt("span",jv,[Wr(O.$slots,"tooltip")])):We("",!0)]),t.optional?(bt(),Nt("span",Rv,on(t.optionalLabel),1)):We("",!0)],8,Iv)):We("",!0),_t("div",Lv,[_t("input",$f({id:o.value,ref_key:"inputRef",ref:l,type:t.isPassword&&!Rt(i)?"password":"text",value:t.modelValue,class:s.value,placeholder:t.placeholder,"aria-describedby":o.value+"-description"},c.value,{disabled:t.disabled,onInput:b[0]||(b[0]=m=>h(m))}),null,16,Dv),t.isPassword?(bt(),Nt("div",zv,[_t("button",{type:"button",disabled:t.disabled,class:ae(["px-3",t.disabled?"cursor-not-allowed opacity-50":"cursor-pointer"]),onClick:y},[_t("span",Uv,on(Rt(i)?t.hidePasswordLabel:t.showPasswordLabel),1),lt(Rt(ul),{icon:["fas",Rt(i)?"eye-slash":"eye"],class:"h-4 w-4 text-gray-500 dark:text-gray-400","aria-hidden":"true"},null,8,["icon"])],10,Fv)])):t.invalidMessage?(bt(),Nt("div",Yv,[lt(Rt(ul),{icon:["fas","circle-exclamation"],class:"h-4 w-4 text-rose-700 dark:text-rose-400","aria-hidden":"true"})])):We("",!0)]),t.invalidMessage?(bt(),Nt("p",{key:1,id:o.value+"-description",class:ae([Dl,"text-rose-700 dark:text-rose-400"])},on(t.invalidMessage),11,Wv)):t.helperText?(bt(),Nt("p",{key:2,id:o.value+"-description",class:ae([Dl,"text-gray-500 dark:text-gray-400"])},on(t.helperText),11,Hv)):We("",!0)],16))}});var Fl={exports:{}},Zu={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(Zu);var st=Zu.exports,Ci={exports:{}},Pi={exports:{}},tc={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(tc);var ec=tc.exports,Ai={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,a){if(a.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+a.length+" present")}t.exports=e.default})(Ai,Ai.exports);var St=Ai.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(ec),a=n(St);function i(o){return(0,a.default)(1,arguments),o instanceof Date||(0,r.default)(o)==="object"&&Object.prototype.toString.call(o)==="[object Date]"}t.exports=e.default})(Pi,Pi.exports);var qv=Pi.exports,Mi={exports:{}};(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(ec),a=n(St);function i(o){(0,a.default)(1,arguments);var s=Object.prototype.toString.call(o);return o instanceof Date||(0,r.default)(o)==="object"&&s==="[object Date]"?new Date(o.getTime()):typeof o=="number"||s==="[object Number]"?new Date(o):((typeof o=="string"||s==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(Mi,Mi.exports);var Zt=Mi.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(qv),a=n(Zt),i=n(St);function o(s){if((0,i.default)(1,arguments),!(0,r.default)(s)&&typeof s!="number")return!1;var l=(0,a.default)(s);return!isNaN(Number(l))}t.exports=e.default})(Ci,Ci.exports);var Gv=Ci.exports,Ei={exports:{}},Ti={exports:{}},Ni={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var a=Number(r);return isNaN(a)?a:a<0?Math.ceil(a):Math.floor(a)}t.exports=e.default})(Ni,Ni.exports);var Sn=Ni.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(Sn),a=n(Zt),i=n(St);function o(s,l){(0,i.default)(2,arguments);var f=(0,a.default)(s).getTime(),u=(0,r.default)(l);return new Date(f+u)}t.exports=e.default})(Ti,Ti.exports);var Kv=Ti.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(Kv),a=n(St),i=n(Sn);function o(s,l){(0,a.default)(2,arguments);var f=(0,i.default)(l);return(0,r.default)(s,-f)}t.exports=e.default})(Ei,Ei.exports);var Xv=Ei.exports,Ii={exports:{}},ji={exports:{}};(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(Zt),a=n(St),i=864e5;function o(s){(0,a.default)(1,arguments);var l=(0,r.default)(s),f=l.getTime();l.setUTCMonth(0,1),l.setUTCHours(0,0,0,0);var u=l.getTime(),c=f-u;return Math.floor(c/i)+1}t.exports=e.default})(ji,ji.exports);var Qv=ji.exports,Ri={exports:{}},Li={exports:{}};(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(Zt),a=n(St);function i(o){(0,a.default)(1,arguments);var s=1,l=(0,r.default)(o),f=l.getUTCDay(),u=(f<s?7:0)+f-s;return l.setUTCDate(l.getUTCDate()-u),l.setUTCHours(0,0,0,0),l}t.exports=e.default})(Li,Li.exports);var ts=Li.exports,Di={exports:{}},zi={exports:{}};(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(Zt),a=n(St),i=n(ts);function o(s){(0,a.default)(1,arguments);var l=(0,r.default)(s),f=l.getUTCFullYear(),u=new Date(0);u.setUTCFullYear(f+1,0,4),u.setUTCHours(0,0,0,0);var c=(0,i.default)(u),h=new Date(0);h.setUTCFullYear(f,0,4),h.setUTCHours(0,0,0,0);var y=(0,i.default)(h);return l.getTime()>=c.getTime()?f+1:l.getTime()>=y.getTime()?f:f-1}t.exports=e.default})(zi,zi.exports);var nc=zi.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(nc),a=n(ts),i=n(St);function o(s){(0,i.default)(1,arguments);var l=(0,r.default)(s),f=new Date(0);f.setUTCFullYear(l,0,4),f.setUTCHours(0,0,0,0);var u=(0,a.default)(f);return u}t.exports=e.default})(Di,Di.exports);var Jv=Di.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(Zt),a=n(ts),i=n(Jv),o=n(St),s=6048e5;function l(f){(0,o.default)(1,arguments);var u=(0,r.default)(f),c=(0,a.default)(u).getTime()-(0,i.default)(u).getTime();return Math.round(c/s)+1}t.exports=e.default})(Ri,Ri.exports);var Zv=Ri.exports,Fi={exports:{}},Ui={exports:{}},tn={};Object.defineProperty(tn,"__esModule",{value:!0});tn.getDefaultOptions=t0;tn.setDefaultOptions=e0;var rc={};function t0(){return rc}function e0(t){rc=t}(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(Zt),a=n(St),i=n(Sn),o=tn;function s(l,f){var u,c,h,y,S,O,b,m;(0,a.default)(1,arguments);var p=(0,o.getDefaultOptions)(),g=(0,i.default)((u=(c=(h=(y=f==null?void 0:f.weekStartsOn)!==null&&y!==void 0?y:f==null||(S=f.locale)===null||S===void 0||(O=S.options)===null||O===void 0?void 0:O.weekStartsOn)!==null&&h!==void 0?h:p.weekStartsOn)!==null&&c!==void 0?c:(b=p.locale)===null||b===void 0||(m=b.options)===null||m===void 0?void 0:m.weekStartsOn)!==null&&u!==void 0?u:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=(0,r.default)(l),C=w.getUTCDay(),T=(C<g?7:0)+C-g;return w.setUTCDate(w.getUTCDate()-T),w.setUTCHours(0,0,0,0),w}t.exports=e.default})(Ui,Ui.exports);var es=Ui.exports,Yi={exports:{}},Wi={exports:{}};(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(Zt),a=n(St),i=n(es),o=n(Sn),s=tn;function l(f,u){var c,h,y,S,O,b,m,p;(0,a.default)(1,arguments);var g=(0,r.default)(f),w=g.getUTCFullYear(),C=(0,s.getDefaultOptions)(),T=(0,o.default)((c=(h=(y=(S=u==null?void 0:u.firstWeekContainsDate)!==null&&S!==void 0?S:u==null||(O=u.locale)===null||O===void 0||(b=O.options)===null||b===void 0?void 0:b.firstWeekContainsDate)!==null&&y!==void 0?y:C.firstWeekContainsDate)!==null&&h!==void 0?h:(m=C.locale)===null||m===void 0||(p=m.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&c!==void 0?c:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=new Date(0);U.setUTCFullYear(w+1,0,T),U.setUTCHours(0,0,0,0);var et=(0,i.default)(U,u),G=new Date(0);G.setUTCFullYear(w,0,T),G.setUTCHours(0,0,0,0);var gt=(0,i.default)(G,u);return g.getTime()>=et.getTime()?w+1:g.getTime()>=gt.getTime()?w:w-1}t.exports=e.default})(Wi,Wi.exports);var ac=Wi.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(ac),a=n(St),i=n(es),o=n(Sn),s=tn;function l(f,u){var c,h,y,S,O,b,m,p;(0,a.default)(1,arguments);var g=(0,s.getDefaultOptions)(),w=(0,o.default)((c=(h=(y=(S=u==null?void 0:u.firstWeekContainsDate)!==null&&S!==void 0?S:u==null||(O=u.locale)===null||O===void 0||(b=O.options)===null||b===void 0?void 0:b.firstWeekContainsDate)!==null&&y!==void 0?y:g.firstWeekContainsDate)!==null&&h!==void 0?h:(m=g.locale)===null||m===void 0||(p=m.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&c!==void 0?c:1),C=(0,r.default)(f,u),T=new Date(0);T.setUTCFullYear(C,0,w),T.setUTCHours(0,0,0,0);var U=(0,i.default)(T,u);return U}t.exports=e.default})(Yi,Yi.exports);var n0=Yi.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(Zt),a=n(es),i=n(n0),o=n(St),s=6048e5;function l(f,u){(0,o.default)(1,arguments);var c=(0,r.default)(f),h=(0,a.default)(c,u).getTime()-(0,i.default)(c,u).getTime();return Math.round(h/s)+1}t.exports=e.default})(Fi,Fi.exports);var r0=Fi.exports,Hi={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,a){for(var i=r<0?"-":"",o=Math.abs(r).toString();o.length<a;)o="0"+o;return i+o}t.exports=e.default})(Hi,Hi.exports);var ic=Hi.exports,$i={exports:{}};(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(ic),a={y:function(o,s){var l=o.getUTCFullYear(),f=l>0?l:1-l;return(0,r.default)(s==="yy"?f%100:f,s.length)},M:function(o,s){var l=o.getUTCMonth();return s==="M"?String(l+1):(0,r.default)(l+1,2)},d:function(o,s){return(0,r.default)(o.getUTCDate(),s.length)},a:function(o,s){var l=o.getUTCHours()/12>=1?"pm":"am";switch(s){case"a":case"aa":return l.toUpperCase();case"aaa":return l;case"aaaaa":return l[0];case"aaaa":default:return l==="am"?"a.m.":"p.m."}},h:function(o,s){return(0,r.default)(o.getUTCHours()%12||12,s.length)},H:function(o,s){return(0,r.default)(o.getUTCHours(),s.length)},m:function(o,s){return(0,r.default)(o.getUTCMinutes(),s.length)},s:function(o,s){return(0,r.default)(o.getUTCSeconds(),s.length)},S:function(o,s){var l=s.length,f=o.getUTCMilliseconds(),u=Math.floor(f*Math.pow(10,l-3));return(0,r.default)(u,s.length)}},i=a;e.default=i,t.exports=e.default})($i,$i.exports);var a0=$i.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(Qv),a=n(Zv),i=n(nc),o=n(r0),s=n(ac),l=n(ic),f=n(a0),u={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},c={G:function(b,m,p){var g=b.getUTCFullYear()>0?1:0;switch(m){case"G":case"GG":case"GGG":return p.era(g,{width:"abbreviated"});case"GGGGG":return p.era(g,{width:"narrow"});case"GGGG":default:return p.era(g,{width:"wide"})}},y:function(b,m,p){if(m==="yo"){var g=b.getUTCFullYear(),w=g>0?g:1-g;return p.ordinalNumber(w,{unit:"year"})}return f.default.y(b,m)},Y:function(b,m,p,g){var w=(0,s.default)(b,g),C=w>0?w:1-w;if(m==="YY"){var T=C%100;return(0,l.default)(T,2)}return m==="Yo"?p.ordinalNumber(C,{unit:"year"}):(0,l.default)(C,m.length)},R:function(b,m){var p=(0,i.default)(b);return(0,l.default)(p,m.length)},u:function(b,m){var p=b.getUTCFullYear();return(0,l.default)(p,m.length)},Q:function(b,m,p){var g=Math.ceil((b.getUTCMonth()+1)/3);switch(m){case"Q":return String(g);case"QQ":return(0,l.default)(g,2);case"Qo":return p.ordinalNumber(g,{unit:"quarter"});case"QQQ":return p.quarter(g,{width:"abbreviated",context:"formatting"});case"QQQQQ":return p.quarter(g,{width:"narrow",context:"formatting"});case"QQQQ":default:return p.quarter(g,{width:"wide",context:"formatting"})}},q:function(b,m,p){var g=Math.ceil((b.getUTCMonth()+1)/3);switch(m){case"q":return String(g);case"qq":return(0,l.default)(g,2);case"qo":return p.ordinalNumber(g,{unit:"quarter"});case"qqq":return p.quarter(g,{width:"abbreviated",context:"standalone"});case"qqqqq":return p.quarter(g,{width:"narrow",context:"standalone"});case"qqqq":default:return p.quarter(g,{width:"wide",context:"standalone"})}},M:function(b,m,p){var g=b.getUTCMonth();switch(m){case"M":case"MM":return f.default.M(b,m);case"Mo":return p.ordinalNumber(g+1,{unit:"month"});case"MMM":return p.month(g,{width:"abbreviated",context:"formatting"});case"MMMMM":return p.month(g,{width:"narrow",context:"formatting"});case"MMMM":default:return p.month(g,{width:"wide",context:"formatting"})}},L:function(b,m,p){var g=b.getUTCMonth();switch(m){case"L":return String(g+1);case"LL":return(0,l.default)(g+1,2);case"Lo":return p.ordinalNumber(g+1,{unit:"month"});case"LLL":return p.month(g,{width:"abbreviated",context:"standalone"});case"LLLLL":return p.month(g,{width:"narrow",context:"standalone"});case"LLLL":default:return p.month(g,{width:"wide",context:"standalone"})}},w:function(b,m,p,g){var w=(0,o.default)(b,g);return m==="wo"?p.ordinalNumber(w,{unit:"week"}):(0,l.default)(w,m.length)},I:function(b,m,p){var g=(0,a.default)(b);return m==="Io"?p.ordinalNumber(g,{unit:"week"}):(0,l.default)(g,m.length)},d:function(b,m,p){return m==="do"?p.ordinalNumber(b.getUTCDate(),{unit:"date"}):f.default.d(b,m)},D:function(b,m,p){var g=(0,r.default)(b);return m==="Do"?p.ordinalNumber(g,{unit:"dayOfYear"}):(0,l.default)(g,m.length)},E:function(b,m,p){var g=b.getUTCDay();switch(m){case"E":case"EE":case"EEE":return p.day(g,{width:"abbreviated",context:"formatting"});case"EEEEE":return p.day(g,{width:"narrow",context:"formatting"});case"EEEEEE":return p.day(g,{width:"short",context:"formatting"});case"EEEE":default:return p.day(g,{width:"wide",context:"formatting"})}},e:function(b,m,p,g){var w=b.getUTCDay(),C=(w-g.weekStartsOn+8)%7||7;switch(m){case"e":return String(C);case"ee":return(0,l.default)(C,2);case"eo":return p.ordinalNumber(C,{unit:"day"});case"eee":return p.day(w,{width:"abbreviated",context:"formatting"});case"eeeee":return p.day(w,{width:"narrow",context:"formatting"});case"eeeeee":return p.day(w,{width:"short",context:"formatting"});case"eeee":default:return p.day(w,{width:"wide",context:"formatting"})}},c:function(b,m,p,g){var w=b.getUTCDay(),C=(w-g.weekStartsOn+8)%7||7;switch(m){case"c":return String(C);case"cc":return(0,l.default)(C,m.length);case"co":return p.ordinalNumber(C,{unit:"day"});case"ccc":return p.day(w,{width:"abbreviated",context:"standalone"});case"ccccc":return p.day(w,{width:"narrow",context:"standalone"});case"cccccc":return p.day(w,{width:"short",context:"standalone"});case"cccc":default:return p.day(w,{width:"wide",context:"standalone"})}},i:function(b,m,p){var g=b.getUTCDay(),w=g===0?7:g;switch(m){case"i":return String(w);case"ii":return(0,l.default)(w,m.length);case"io":return p.ordinalNumber(w,{unit:"day"});case"iii":return p.day(g,{width:"abbreviated",context:"formatting"});case"iiiii":return p.day(g,{width:"narrow",context:"formatting"});case"iiiiii":return p.day(g,{width:"short",context:"formatting"});case"iiii":default:return p.day(g,{width:"wide",context:"formatting"})}},a:function(b,m,p){var g=b.getUTCHours(),w=g/12>=1?"pm":"am";switch(m){case"a":case"aa":return p.dayPeriod(w,{width:"abbreviated",context:"formatting"});case"aaa":return p.dayPeriod(w,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return p.dayPeriod(w,{width:"narrow",context:"formatting"});case"aaaa":default:return p.dayPeriod(w,{width:"wide",context:"formatting"})}},b:function(b,m,p){var g=b.getUTCHours(),w;switch(g===12?w=u.noon:g===0?w=u.midnight:w=g/12>=1?"pm":"am",m){case"b":case"bb":return p.dayPeriod(w,{width:"abbreviated",context:"formatting"});case"bbb":return p.dayPeriod(w,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return p.dayPeriod(w,{width:"narrow",context:"formatting"});case"bbbb":default:return p.dayPeriod(w,{width:"wide",context:"formatting"})}},B:function(b,m,p){var g=b.getUTCHours(),w;switch(g>=17?w=u.evening:g>=12?w=u.afternoon:g>=4?w=u.morning:w=u.night,m){case"B":case"BB":case"BBB":return p.dayPeriod(w,{width:"abbreviated",context:"formatting"});case"BBBBB":return p.dayPeriod(w,{width:"narrow",context:"formatting"});case"BBBB":default:return p.dayPeriod(w,{width:"wide",context:"formatting"})}},h:function(b,m,p){if(m==="ho"){var g=b.getUTCHours()%12;return g===0&&(g=12),p.ordinalNumber(g,{unit:"hour"})}return f.default.h(b,m)},H:function(b,m,p){return m==="Ho"?p.ordinalNumber(b.getUTCHours(),{unit:"hour"}):f.default.H(b,m)},K:function(b,m,p){var g=b.getUTCHours()%12;return m==="Ko"?p.ordinalNumber(g,{unit:"hour"}):(0,l.default)(g,m.length)},k:function(b,m,p){var g=b.getUTCHours();return g===0&&(g=24),m==="ko"?p.ordinalNumber(g,{unit:"hour"}):(0,l.default)(g,m.length)},m:function(b,m,p){return m==="mo"?p.ordinalNumber(b.getUTCMinutes(),{unit:"minute"}):f.default.m(b,m)},s:function(b,m,p){return m==="so"?p.ordinalNumber(b.getUTCSeconds(),{unit:"second"}):f.default.s(b,m)},S:function(b,m){return f.default.S(b,m)},X:function(b,m,p,g){var w=g._originalDate||b,C=w.getTimezoneOffset();if(C===0)return"Z";switch(m){case"X":return y(C);case"XXXX":case"XX":return S(C);case"XXXXX":case"XXX":default:return S(C,":")}},x:function(b,m,p,g){var w=g._originalDate||b,C=w.getTimezoneOffset();switch(m){case"x":return y(C);case"xxxx":case"xx":return S(C);case"xxxxx":case"xxx":default:return S(C,":")}},O:function(b,m,p,g){var w=g._originalDate||b,C=w.getTimezoneOffset();switch(m){case"O":case"OO":case"OOO":return"GMT"+h(C,":");case"OOOO":default:return"GMT"+S(C,":")}},z:function(b,m,p,g){var w=g._originalDate||b,C=w.getTimezoneOffset();switch(m){case"z":case"zz":case"zzz":return"GMT"+h(C,":");case"zzzz":default:return"GMT"+S(C,":")}},t:function(b,m,p,g){var w=g._originalDate||b,C=Math.floor(w.getTime()/1e3);return(0,l.default)(C,m.length)},T:function(b,m,p,g){var w=g._originalDate||b,C=w.getTime();return(0,l.default)(C,m.length)}};function h(b,m){var p=b>0?"-":"+",g=Math.abs(b),w=Math.floor(g/60),C=g%60;if(C===0)return p+String(w);var T=m;return p+String(w)+T+(0,l.default)(C,2)}function y(b,m){if(b%60===0){var p=b>0?"-":"+";return p+(0,l.default)(Math.abs(b)/60,2)}return S(b,m)}function S(b,m){var p=m||"",g=b>0?"-":"+",w=Math.abs(b),C=(0,l.default)(Math.floor(w/60),2),T=(0,l.default)(w%60,2);return g+C+p+T}var O=c;e.default=O,t.exports=e.default})(Ii,Ii.exports);var i0=Ii.exports,Bi={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(s,l){switch(s){case"P":return l.date({width:"short"});case"PP":return l.date({width:"medium"});case"PPP":return l.date({width:"long"});case"PPPP":default:return l.date({width:"full"})}},r=function(s,l){switch(s){case"p":return l.time({width:"short"});case"pp":return l.time({width:"medium"});case"ppp":return l.time({width:"long"});case"pppp":default:return l.time({width:"full"})}},a=function(s,l){var f=s.match(/(P+)(p+)?/)||[],u=f[1],c=f[2];if(!c)return n(s,l);var h;switch(u){case"P":h=l.dateTime({width:"short"});break;case"PP":h=l.dateTime({width:"medium"});break;case"PPP":h=l.dateTime({width:"long"});break;case"PPPP":default:h=l.dateTime({width:"full"});break}return h.replace("{{date}}",n(u,l)).replace("{{time}}",r(c,l))},i={p:r,P:a},o=i;e.default=o,t.exports=e.default})(Bi,Bi.exports);var o0=Bi.exports,Vi={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var a=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return a.setUTCFullYear(r.getFullYear()),r.getTime()-a.getTime()}t.exports=e.default})(Vi,Vi.exports);var s0=Vi.exports,pr={};Object.defineProperty(pr,"__esModule",{value:!0});pr.isProtectedDayOfYearToken=u0;pr.isProtectedWeekYearToken=c0;pr.throwProtectedError=d0;var l0=["D","DD"],f0=["YY","YYYY"];function u0(t){return l0.indexOf(t)!==-1}function c0(t){return f0.indexOf(t)!==-1}function d0(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var qi={exports:{}},Gi={exports:{}},Ki={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(i,o,s){var l,f=n[i];return typeof f=="string"?l=f:o===1?l=f.one:l=f.other.replace("{{count}}",o.toString()),s!=null&&s.addSuffix?s.comparison&&s.comparison>0?"in "+l:l+" ago":l},a=r;e.default=a,t.exports=e.default})(Ki,Ki.exports);var m0=Ki.exports,Xi={exports:{}},Qi={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.width?String(a.width):r.defaultWidth,o=r.formats[i]||r.formats[r.defaultWidth];return o}}t.exports=e.default})(Qi,Qi.exports);var p0=Qi.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(p0),a={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},i={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},o={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},s={date:(0,r.default)({formats:a,defaultWidth:"full"}),time:(0,r.default)({formats:i,defaultWidth:"full"}),dateTime:(0,r.default)({formats:o,defaultWidth:"full"})},l=s;e.default=l,t.exports=e.default})(Xi,Xi.exports);var h0=Xi.exports,Ji={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(i,o,s,l){return n[i]},a=r;e.default=a,t.exports=e.default})(Ji,Ji.exports);var g0=Ji.exports,Zi={exports:{}},to={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(a,i){var o=i!=null&&i.context?String(i.context):"standalone",s;if(o==="formatting"&&r.formattingValues){var l=r.defaultFormattingWidth||r.defaultWidth,f=i!=null&&i.width?String(i.width):l;s=r.formattingValues[f]||r.formattingValues[l]}else{var u=r.defaultWidth,c=i!=null&&i.width?String(i.width):r.defaultWidth;s=r.values[c]||r.values[u]}var h=r.argumentCallback?r.argumentCallback(a):a;return s[h]}}t.exports=e.default})(to,to.exports);var v0=to.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(v0),a={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},i={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},s={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},f={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},u=function(y,S){var O=Number(y),b=O%100;if(b>20||b<10)switch(b%10){case 1:return O+"st";case 2:return O+"nd";case 3:return O+"rd"}return O+"th"},c={ordinalNumber:u,era:(0,r.default)({values:a,defaultWidth:"wide"}),quarter:(0,r.default)({values:i,defaultWidth:"wide",argumentCallback:function(y){return y-1}}),month:(0,r.default)({values:o,defaultWidth:"wide"}),day:(0,r.default)({values:s,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},h=c;e.default=h,t.exports=e.default})(Zi,Zi.exports);var b0=Zi.exports,eo={exports:{}},no={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(i){return function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=s.width,f=l&&i.matchPatterns[l]||i.matchPatterns[i.defaultMatchWidth],u=o.match(f);if(!u)return null;var c=u[0],h=l&&i.parsePatterns[l]||i.parsePatterns[i.defaultParseWidth],y=Array.isArray(h)?a(h,function(b){return b.test(c)}):r(h,function(b){return b.test(c)}),S;S=i.valueCallback?i.valueCallback(y):y,S=s.valueCallback?s.valueCallback(S):S;var O=o.slice(c.length);return{value:S,rest:O}}}function r(i,o){for(var s in i)if(i.hasOwnProperty(s)&&o(i[s]))return s}function a(i,o){for(var s=0;s<i.length;s++)if(o(i[s]))return s}t.exports=e.default})(no,no.exports);var y0=no.exports,ro={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.match(r.matchPattern);if(!o)return null;var s=o[0],l=a.match(r.parsePattern);if(!l)return null;var f=r.valueCallback?r.valueCallback(l[0]):l[0];f=i.valueCallback?i.valueCallback(f):f;var u=a.slice(s.length);return{value:f,rest:u}}}t.exports=e.default})(ro,ro.exports);var w0=ro.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(y0),a=n(w0),i=/^(\d+)(th|st|nd|rd)?/i,o=/\d+/i,s={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l={any:[/^b/i,/^(a|c)/i]},f={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},u={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},h={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},y={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},S={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},O={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},m={ordinalNumber:(0,a.default)({matchPattern:i,parsePattern:o,valueCallback:function(g){return parseInt(g,10)}}),era:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any",valueCallback:function(g){return g+1}}),month:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:O,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},p=m;e.default=p,t.exports=e.default})(eo,eo.exports);var x0=eo.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(m0),a=n(h0),i=n(g0),o=n(b0),s=n(x0),l={code:"en-US",formatDistance:r.default,formatLong:a.default,formatRelative:i.default,localize:o.default,match:s.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},f=l;e.default=f,t.exports=e.default})(Gi,Gi.exports);var k0=Gi.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(k0),a=r.default;e.default=a,t.exports=e.default})(qi,qi.exports);var _0=qi.exports;(function(t,e){var n=st.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;var r=n(Gv),a=n(Xv),i=n(Zt),o=n(i0),s=n(o0),l=n(s0),f=pr,u=n(Sn),c=n(St),h=tn,y=n(_0),S=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,O=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,b=/^'([^]*?)'?$/,m=/''/g,p=/[a-zA-Z]/;function g(C,T,U){var et,G,gt,te,ge,ve,De,en,ft,X,q,Dt,be,zt,Ct,nn,Cn,Pn;(0,c.default)(2,arguments);var Ft=String(T),Vt=(0,h.getDefaultOptions)(),ee=(et=(G=U==null?void 0:U.locale)!==null&&G!==void 0?G:Vt.locale)!==null&&et!==void 0?et:y.default,rn=(0,u.default)((gt=(te=(ge=(ve=U==null?void 0:U.firstWeekContainsDate)!==null&&ve!==void 0?ve:U==null||(De=U.locale)===null||De===void 0||(en=De.options)===null||en===void 0?void 0:en.firstWeekContainsDate)!==null&&ge!==void 0?ge:Vt.firstWeekContainsDate)!==null&&te!==void 0?te:(ft=Vt.locale)===null||ft===void 0||(X=ft.options)===null||X===void 0?void 0:X.firstWeekContainsDate)!==null&&gt!==void 0?gt:1);if(!(rn>=1&&rn<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var ne=(0,u.default)((q=(Dt=(be=(zt=U==null?void 0:U.weekStartsOn)!==null&&zt!==void 0?zt:U==null||(Ct=U.locale)===null||Ct===void 0||(nn=Ct.options)===null||nn===void 0?void 0:nn.weekStartsOn)!==null&&be!==void 0?be:Vt.weekStartsOn)!==null&&Dt!==void 0?Dt:(Cn=Vt.locale)===null||Cn===void 0||(Pn=Cn.options)===null||Pn===void 0?void 0:Pn.weekStartsOn)!==null&&q!==void 0?q:0);if(!(ne>=0&&ne<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!ee.localize)throw new RangeError("locale must contain localize property");if(!ee.formatLong)throw new RangeError("locale must contain formatLong property");var ze=(0,i.default)(C);if(!(0,r.default)(ze))throw new RangeError("Invalid time value");var hr=(0,l.default)(ze),d=(0,a.default)(ze,hr),v={firstWeekContainsDate:rn,weekStartsOn:ne,locale:ee,_originalDate:ze},x=Ft.match(O).map(function(k){var _=k[0];if(_==="p"||_==="P"){var A=s.default[_];return A(k,ee.formatLong)}return k}).join("").match(S).map(function(k){if(k==="''")return"'";var _=k[0];if(_==="'")return w(k);var A=o.default[_];if(A)return!(U!=null&&U.useAdditionalWeekYearTokens)&&(0,f.isProtectedWeekYearToken)(k)&&(0,f.throwProtectedError)(k,T,String(C)),!(U!=null&&U.useAdditionalDayOfYearTokens)&&(0,f.isProtectedDayOfYearToken)(k)&&(0,f.throwProtectedError)(k,T,String(C)),A(d,k,ee.localize,v);if(_.match(p))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return k}).join("");return x}function w(C){var T=C.match(b);return T?T[1].replace(m,"'"):C}t.exports=e.default})(Fl,Fl.exports);const O0={class:"p-10 max-w-2xl m-auto flex items-center flex-col gap-12"},S0={class:"flex items-center flex-col gap-6"},C0={class:"text-primary-700 dark:text-primary-300 text-9xl text-center"},P0={class:"space-y-6"},Ul="vue-timer",Yl="30",Wl="5",A0=or({__name:"App",setup(t){const e=Km(),n=oe(Yl),r=oe(Wl),a=oe(0),i=new Worker(new URL("/vue-timer/assets/timerWorker-CGWXUoaE.js",import.meta.url),{type:"module"});e.value=Ul;const o=ut(()=>{const S=a.value,O=Math.floor(S/60),b=S%60;return`${O.toString().padStart(2,"0")}:${b.toString().padStart(2,"0")}`}),s=ut(()=>Math.floor(a.value/60));xo(()=>{n.value=localStorage.getItem("workMinutes")||Yl,r.value=localStorage.getItem("relaxMinutes")||Wl});const l=()=>{a.value=Number(n.value)*60,u()},f=()=>{a.value=Number(r.value)*60,u()},u=()=>{Notification.requestPermission(),i.postMessage({type:"start",countdown:a.value}),e.value=`${s.value} mins`,i.onmessage=S=>{S.data.type==="expired"?(new Audio("alarm-long.ogg").play(),new Notification("vue-timer",{body:"Timer has expired"})):S.data.type==="tick"&&(a.value=S.data.countdown,a.value%60===0&&(s.value>0?e.value=`${s.value} mins`:e.value=Ul))}},c=()=>{i.postMessage({type:"stop"}),a.value=0};function h(S){const O=S.target,b=Number(O.value);b>0&&localStorage.setItem("workMinutes",b.toString())}function y(S){const O=S.target,b=Number(O.value);b>0&&localStorage.setItem("relaxMinutes",b.toString())}return(S,O)=>(bt(),Nt("div",O0,[_t("div",S0,[_t("div",C0,on(o.value),1),lt(Rt(Wa),{size:"lg",class:"w-24",onClick:c},{default:Yr(()=>[Un("Stop")]),_:1})]),_t("div",P0,[_t("form",{onSubmit:Rs(l,["prevent"]),class:"flex justify-center gap-4 items-start"},[lt(Rt(zl),{type:"number",modelValue:n.value,"onUpdate:modelValue":O[0]||(O[0]=b=>n.value=b),class:"w-40",helperText:"Minutes",onInput:h},null,8,["modelValue"]),lt(Rt(Wa),{type:"submit",kind:"primary",size:"lg"},{default:Yr(()=>[Un("Start work")]),_:1})],32),_t("form",{onSubmit:Rs(f,["prevent"]),class:"flex justify-center gap-4 items-start"},[lt(Rt(zl),{type:"number",modelValue:r.value,"onUpdate:modelValue":O[1]||(O[1]=b=>r.value=b),class:"w-40",helperText:"Minutes",onInput:y},null,8,["modelValue"]),lt(Rt(Wa),{type:"submit",kind:"primary",size:"lg"},{default:Yr(()=>[Un("Start relax")]),_:1})],32)])]))}}),oc=Tm(A0);oc.use(Lm());oc.mount("#app");
