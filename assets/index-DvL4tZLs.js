var Se=Object.defineProperty;var Ie=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Z=(e,t,n)=>(Ie(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();function v(){}function _e(e,t){for(const n in t)e[n]=t[n];return e}function pe(e){return e()}function ce(){return Object.create(null)}function V(e){e.forEach(pe)}function ve(e){return typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let F;function ae(e,t){return e===t?!0:(F||(F=document.createElement("a")),F.href=t,e===F.href)}function Oe(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function E(){return _(" ")}function we(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Le(e){return Array.from(e.childNodes)}function S(e,t){t=""+t,e.data!==t&&(e.data=t)}function se(e,t){e.value=t??""}let ie;function G(e){ie=e}const P=[],ue=[];let $=[];const fe=[],Pe=Promise.resolve();let te=!1;function $e(){te||(te=!0,Pe.then(ye))}function ne(e){$.push(e)}const ee=new Set;let L=0;function ye(){if(L!==0)return;const e=ie;do{try{for(;L<P.length;){const t=P[L];L++,G(t),Ae(t.$$)}}catch(t){throw P.length=0,L=0,t}for(G(null),P.length=0,L=0;ue.length;)ue.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];ee.has(n)||(ee.add(n),n())}$.length=0}while(P.length);for(;fe.length;)fe.pop()();te=!1,ee.clear(),G(e)}function Ae(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function xe(e){const t=[],n=[];$.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),$=t}const D=new Set;let I;function Ne(){I={r:0,c:[],p:I}}function ke(){I.r||V(I.c),I=I.p}function b(e,t){e&&e.i&&(D.delete(e),e.i(t))}function M(e,t,n,l){if(e&&e.o){if(D.has(e))return;D.add(e),I.c.push(()=>{D.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function H(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ee(e,t){const n={},l={},i={$$scope:1};let c=e.length;for(;c--;){const r=e[c],a=t[c];if(a){for(const o in r)o in a||(l[o]=1);for(const o in a)i[o]||(n[o]=a[o],i[o]=1);e[c]=a}else for(const o in r)i[o]=1}for(const r in l)r in n||(n[r]=void 0);return n}function Me(e){return typeof e=="object"&&e!==null?e:{}}function K(e){e&&e.c()}function q(e,t,n){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),ne(()=>{const c=e.$$.on_mount.map(pe).filter(ve);e.$$.on_destroy?e.$$.on_destroy.push(...c):V(c),e.$$.on_mount=[]}),i.forEach(ne)}function R(e,t){const n=e.$$;n.fragment!==null&&(xe(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(e,t){e.$$.dirty[0]===-1&&(P.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function x(e,t,n,l,i,c,r=null,a=[-1]){const o=ie;G(e);const u=e.$$={fragment:null,ctx:[],props:c,update:v,not_equal:i,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:ce(),dirty:a,skip_bound:!1,root:t.target||o.$$.root};r&&r(u.root);let s=!1;if(u.ctx=n?n(e,t.props||{},(m,f,...k)=>{const U=k.length?k[0]:f;return u.ctx&&i(u.ctx[m],u.ctx[m]=U)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](U),s&&Be(e,m)),f}):[],u.update(),s=!0,V(u.before_update),u.fragment=l?l(u.ctx):!1,t.target){if(t.hydrate){const m=Le(t.target);u.fragment&&u.fragment.l(m),m.forEach(j)}else u.fragment&&u.fragment.c();t.intro&&b(e.$$.fragment),q(e,t.target,t.anchor),ye()}G(o)}class B{constructor(){Z(this,"$$");Z(this,"$$set")}$destroy(){R(this,1),this.$destroy=v}$on(t,n){if(!ve(n))return v;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!Oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ue);function Ge(e){let t;return{c(){t=g("div"),t.innerHTML=`<h1>Welcome to BCMS Playground</h1> <p>We hope to be your one-stop shop for practicing Bosnian, Croatian,
    Montenegrin, and Serbian.
    <br/>...
    <br/>But we&#39;re working on it. Give us a little time.
    <br/>2024-07-06</p>`},m(n,l){O(n,t,l)},p:v,i:v,o:v,d(n){n&&j(t)}}}class je extends B{constructor(t){super(),x(this,t,null,Ge,A,{})}}const qe=()=>("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)),y="singular",W="plural",T="masculine",N="feminine";function Re(e){let t,n,l,i,c,r,a,o,u,s,m,f,k,U,J,Q,re,C,oe,z=e[5]===e[1]?"✅":"❌",X,Y,le;return{c(){t=g("div"),n=g("p"),l=_("Use the "),i=g("em"),c=_(e[2]),r=_(" genitive"),a=_(" for "),o=_(e[3]),u=_(", which is a "),s=_(e[4]),m=_(`
    noun in `),f=_(e[2]),k=_(`
    nominative.`),U=E(),J=g("h3"),Q=_(e[0]),re=E(),C=g("input"),oe=E(),X=_(z),h(C,"placeholder",""),h(t,"class","container svelte-1gmc75z")},m(p,w){O(p,t,w),d(t,n),d(n,l),d(n,i),d(i,c),d(i,r),d(n,a),d(n,o),d(n,u),d(n,s),d(n,m),d(n,f),d(n,k),d(t,U),d(t,J),d(J,Q),d(t,re),d(t,C),se(C,e[5]),d(t,oe),d(t,X),Y||(le=we(C,"input",e[6]),Y=!0)},p(p,[w]){w&4&&S(c,p[2]),w&8&&S(o,p[3]),w&16&&S(s,p[4]),w&4&&S(f,p[2]),w&1&&S(Q,p[0]),w&32&&C.value!==p[5]&&se(C,p[5]),w&34&&z!==(z=p[5]===p[1]?"✅":"❌")&&S(X,z)},i:v,o:v,d(p){p&&j(t),Y=!1,le()}}}function Ve(e,t,n){let{sentence:l}=t,{answer:i}=t,{grammaticalNumber:c}=t,{nominative:r}=t,{gender:a}=t,o="";function u(){o=this.value,n(5,o)}return e.$$set=s=>{"sentence"in s&&n(0,l=s.sentence),"answer"in s&&n(1,i=s.answer),"grammaticalNumber"in s&&n(2,c=s.grammaticalNumber),"nominative"in s&&n(3,r=s.nominative),"gender"in s&&n(4,a=s.gender)},[l,i,c,r,a,o,u]}class ze extends B{constructor(t){super(),x(this,t,Ve,Re,A,{sentence:0,answer:1,grammaticalNumber:2,nominative:3,gender:4})}}function me(e,t,n){const l=e.slice();return l[1]=t[n],l}function de(e){let t,n,l;const i=[e[1]];let c={};for(let r=0;r<i.length;r+=1)c=_e(c,i[r]);return t=new ze({props:c}),{c(){K(t.$$.fragment),n=g("br")},m(r,a){q(t,r,a),O(r,n,a),l=!0},p(r,a){const o=a&1?Ee(i,[Me(r[1])]):{};t.$set(o)},i(r){l||(b(t.$$.fragment,r),l=!0)},o(r){M(t.$$.fragment,r),l=!1},d(r){r&&j(n),R(t,r)}}}function Fe(e){let t,n,l,i,c,r,a=H(e[0]),o=[];for(let s=0;s<a.length;s+=1)o[s]=de(me(e,a,s));const u=s=>M(o[s],1,1,()=>{o[s]=null});return{c(){t=g("div"),n=g("h2"),n.textContent="It's time to practice genitive.",l=E(),i=g("p"),i.textContent="Fill in the input boxes with the missing letters from the example sentences.",c=E();for(let s=0;s<o.length;s+=1)o[s].c()},m(s,m){O(s,t,m),d(t,n),d(t,l),d(t,i),d(t,c);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(t,null);r=!0},p(s,[m]){if(m&1){a=H(s[0]);let f;for(f=0;f<a.length;f+=1){const k=me(s,a,f);o[f]?(o[f].p(k,m),b(o[f],1)):(o[f]=de(k),o[f].c(),b(o[f],1),o[f].m(t,null))}for(Ne(),f=a.length;f<o.length;f+=1)u(f);ke()}},i(s){if(!r){for(let m=0;m<a.length;m+=1)b(o[m]);r=!0}},o(s){o=o.filter(Boolean);for(let m=0;m<o.length;m+=1)M(o[m]);r=!1},d(s){s&&j(t),be(o,s)}}}function We(e){return[[{sentence:"Molim vas, pitu od sir_.",nominative:"sir",answer:"a",grammaticalNumber:y,gender:T},{sentence:"Oprostite, može li sok od jabuk_.",answer:"e",nominative:"jabuka",grammaticalNumber:y,gender:N},{sentence:"Oprostite, može li još i boca mineralne vod_?",answer:"e",nominative:"voda",grammaticalNumber:y,gender:N},{sentence:"Može li pita od jabuk_?",answer:"a",nominative:"jabuke",grammaticalNumber:W,gender:N},{sentence:"Može li pita od malin_?",answer:"e",nominative:"malina",grammaticalNumber:y,gender:N},{sentence:"Može li pita od špinat_?",answer:"a",nominative:"špinat",grammaticalNumber:y,gender:T},{sentence:"Može li sok od malin_?",answer:"a",grammaticalNumber:W,nominative:"maline",gender:N},{sentence:"Može li juha od mrkv_?",answer:"e",grammaticalNumber:y,nominative:"mrkva",gender:N},{sentence:"Može li juha od šparog_?",answer:"a",grammaticalNumber:W,nominative:"šparoge",gender:N},{sentence:"Imate li kolač od čokolad_?",answer:"e",grammaticalNumber:y,nominative:"čokolada",gender:N},{sentence:"Može li sok od rajčic_? (množina)",answer:"a",grammaticalNumber:W,nominative:"rajčice",gender:N},{sentence:"Imate li pivo bez alkohol_.",answer:"a",grammaticalNumber:y,nominative:"alkohol",gender:T},{sentence:"Molim Vas, kavu bez šećer_.",answer:"a",grammaticalNumber:y,nominative:"šećer",gender:T}]]}class Te extends B{constructor(t){super(),x(this,t,We,Fe,A,{})}}const De="stage",Ce=()=>document.getElementById(De),He=()=>{const e=Ce();for(;e.firstChild;)e.removeChild(e.lastChild)},Ke=e=>{He(),e&&new e({target:Ce()})};function Je(e){let t,n,l,i,c,r,a,o,u,s;return{c(){t=g("div"),n=g("input"),i=E(),c=g("br"),r=E(),a=g("label"),o=_(e[0]),h(n,"class","mighty-morphin svelte-1q8htu1"),h(n,"type","image"),h(n,"id",e[3]),ae(n.src,l=e[1])||h(n,"src",l),h(n,"alt",e[2]),h(n,"width","75px"),h(n,"height","75px"),h(a,"for",e[3])},m(m,f){O(m,t,f),d(t,n),d(t,i),d(t,c),d(t,r),d(t,a),d(a,o),u||(s=we(n,"click",e[5]),u=!0)},p(m,[f]){f&8&&h(n,"id",m[3]),f&2&&!ae(n.src,l=m[1])&&h(n,"src",l),f&4&&h(n,"alt",m[2]),f&1&&S(o,m[0]),f&8&&h(a,"for",m[3])},i:v,o:v,d(m){m&&j(t),u=!1,s()}}}function Qe(e,t,n){let{title:l}=t,{imgsrc:i}=t,{imgalt:c}=t,{optionid:r}=t,{component:a}=t;const o=()=>{Ke(a)};return e.$$set=u=>{"title"in u&&n(0,l=u.title),"imgsrc"in u&&n(1,i=u.imgsrc),"imgalt"in u&&n(2,c=u.imgalt),"optionid"in u&&n(3,r=u.optionid),"component"in u&&n(4,a=u.component)},[l,i,c,r,a,o]}class Xe extends B{constructor(t){super(),x(this,t,Qe,Je,A,{title:0,imgsrc:1,imgalt:2,optionid:3,component:4})}}function ge(e,t,n){const l=e.slice();return l[1]=t[n],l}function he(e){let t,n;const l=[{optionid:qe()},e[1]];let i={};for(let c=0;c<l.length;c+=1)i=_e(i,l[c]);return t=new Xe({props:i}),{c(){K(t.$$.fragment)},m(c,r){q(t,c,r),n=!0},p(c,r){const a=r&1?Ee(l,[l[0],Me(c[1])]):{};t.$set(a)},i(c){n||(b(t.$$.fragment,c),n=!0)},o(c){M(t.$$.fragment,c),n=!1},d(c){R(t,c)}}}function Ye(e){let t,n,l=H(e[0]),i=[];for(let r=0;r<l.length;r+=1)i[r]=he(ge(e,l,r));const c=r=>M(i[r],1,1,()=>{i[r]=null});return{c(){t=g("div");for(let r=0;r<i.length;r+=1)i[r].c();h(t,"class","mainmenu svelte-1syc0mj")},m(r,a){O(r,t,a);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(t,null);n=!0},p(r,[a]){if(a&1){l=H(r[0]);let o;for(o=0;o<l.length;o+=1){const u=ge(r,l,o);i[o]?(i[o].p(u,a),b(i[o],1)):(i[o]=he(u),i[o].c(),b(i[o],1),i[o].m(t,null))}for(Ne(),o=l.length;o<i.length;o+=1)c(o);ke()}},i(r){if(!n){for(let a=0;a<l.length;a+=1)b(i[a]);n=!0}},o(r){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)M(i[a]);n=!1},d(r){r&&j(t),be(i,r)}}}function Ze(e){return[[{title:"Genitive Practice",imgsrc:"/src/assets/crystal-ball.png",imgalt:"Genitive Practice",component:Te},{title:"Clear Stage",imgsrc:"/src/assets/black-x.png",imgalt:"Clear Stage",component:je}]]}class et extends B{constructor(t){super(),x(this,t,Ze,Ye,A,{})}}function tt(e){let t,n,l,i,c,r;return n=new et({}),c=new je({}),{c(){t=g("main"),K(n.$$.fragment),l=E(),i=g("div"),K(c.$$.fragment),h(i,"id","stage")},m(a,o){O(a,t,o),q(n,t,null),d(t,l),d(t,i),q(c,i,null),r=!0},p:v,i(a){r||(b(n.$$.fragment,a),b(c.$$.fragment,a),r=!0)},o(a){M(n.$$.fragment,a),M(c.$$.fragment,a),r=!1},d(a){a&&j(t),R(n),R(c)}}}class nt extends B{constructor(t){super(),x(this,t,null,tt,A,{})}}new nt({target:document.getElementById("app")});
