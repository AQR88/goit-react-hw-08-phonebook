(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{176:t=>{"use strict";t.exports=function(t,e,r,n,o,s,i,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,s,i,a],u=0;(c=new Error(e.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},77:t=>{var e="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function s(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var a,c,l,u;if(Array.isArray(t)){if((a=t.length)!=i.length)return!1;for(c=a;0!==c--;)if(!s(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!s(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((a=t.length)!=i.length)return!1;for(c=a;0!==c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"===typeof t.valueOf&&"function"===typeof i.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString&&"function"===typeof t.toString&&"function"===typeof i.toString)return t.toString()===i.toString();if((a=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=a;0!==c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(e&&t instanceof Element)return!1;for(c=a;0!==c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!s(t[l[c]],i[l[c]]))return!1;return!0}return t!==t&&i!==i}t.exports=function(t,e){try{return s(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},50:(t,e,r)=>{"use strict";r.d(e,{B6:()=>J,ql:()=>ot});var n,o,s=r(942),i=r(791),a=r(77),c=r.n(a),l=r(176),u=r.n(l),p=r(613),f=r.n(p),d=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(d||{}),h={rel:["amphtml","canonical","alternate"]},m={type:["application/ld+json"]},y={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},g=Object.values(d),b={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},T=Object.entries(b).reduce(((t,e)=>{let[r,n]=e;return t[n]=r,t}),{}),A="data-rh",w="defaultTitle",v="defer",O="encodeSpecialCharacters",C="onChangeClientState",x="titleTemplate",k="prioritizeSeoTags",S=(t,e)=>{for(let r=t.length-1;r>=0;r-=1){const n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},E=t=>{let e=S(t,"title");const r=S(t,x);if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,(()=>e));const n=S(t,w);return e||n||void 0},j=t=>S(t,C)||(()=>{}),M=(t,e)=>e.filter((e=>"undefined"!==typeof e[t])).map((e=>e[t])).reduce(((t,e)=>({...t,...e})),{}),L=(t,e)=>e.filter((t=>"undefined"!==typeof t.base)).map((t=>t.base)).reverse().reduce(((e,r)=>{if(!e.length){const n=Object.keys(r);for(let o=0;o<n.length;o+=1){const s=n[o].toLowerCase();if(-1!==t.indexOf(s)&&r[s])return e.concat(r)}}return e}),[]),D=(t,e,r)=>{const n={};return r.filter((e=>{return!!Array.isArray(e[t])||("undefined"!==typeof e[t]&&(r="Helmet: ".concat(t,' should be of type "Array". Instead found type "').concat(typeof e[t],'"'),console&&"function"===typeof console.warn&&console.warn(r)),!1);var r})).map((e=>e[t])).reverse().reduce(((t,r)=>{const o={};r.filter((t=>{let r;const s=Object.keys(t);for(let n=0;n<s.length;n+=1){const o=s[n],i=o.toLowerCase();-1===e.indexOf(i)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===i&&"stylesheet"===t[i].toLowerCase()||(r=i),-1===e.indexOf(o)||"innerHTML"!==o&&"cssText"!==o&&"itemprop"!==o||(r=o)}if(!r||!t[r])return!1;const i=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][i]&&(o[r][i]=!0,!0)})).reverse().forEach((e=>t.push(e)));const s=Object.keys(o);for(let e=0;e<s.length;e+=1){const t=s[e],r={...n[t],...o[t]};n[t]=r}return t}),[]).reverse()},H=(t,e)=>{if(Array.isArray(t)&&t.length)for(let r=0;r<t.length;r+=1){if(t[r][e])return!0}return!1},P=t=>Array.isArray(t)?t.join(""):t,I=(t,e)=>Array.isArray(t)?t.reduce(((t,r)=>(((t,e)=>{const r=Object.keys(t);for(let n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1})(r,e)?t.priority.push(r):t.default.push(r),t)),{priority:[],default:[]}):{default:t,priority:[]},U=(t,e)=>({...t,[e]:void 0}),_=["noscript","script","style"],N=function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=t=>Object.keys(t).reduce(((e,r)=>{const n="undefined"!==typeof t[r]?"".concat(r,'="').concat(t[r],'"'):"".concat(r);return e?"".concat(e," ").concat(n):n}),""),z=(t,e,r,n)=>{const o=q(r),s=P(e);return o?"<".concat(t," ").concat(A,'="true" ').concat(o,">").concat(N(s,n),"</").concat(t,">"):"<".concat(t," ").concat(A,'="true">').concat(N(s,n),"</").concat(t,">")},B=function(t,e){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.reduce(((e,n)=>{const o=n,s=Object.keys(o).filter((t=>!("innerHTML"===t||"cssText"===t))).reduce(((t,e)=>{const n="undefined"===typeof o[e]?e:"".concat(e,'="').concat(N(o[e],r),'"');return t?"".concat(t," ").concat(n):n}),""),i=o.innerHTML||o.cssText||"",a=-1===_.indexOf(t);return"".concat(e,"<").concat(t," ").concat(A,'="true" ').concat(s).concat(a?"/>":">".concat(i,"</").concat(t,">"))}),"")},R=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(((e,r)=>(e[b[r]||r]=t[r],e)),e)},Z=(t,e,r)=>{const n=R(r,{key:e,[A]:!0});return[i.createElement("title",n,e)]},V=(t,e)=>e.map(((e,r)=>{const n={key:r,[A]:!0};return Object.keys(e).forEach((t=>{const r=b[t]||t;if("innerHTML"===r||"cssText"===r){const t=e.innerHTML||e.cssText;n.dangerouslySetInnerHTML={__html:t}}else n[r]=e[t]})),i.createElement(t,n)})),F=function(t,e){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(t){case"title":return{toComponent:()=>Z(0,e.title,e.titleAttributes),toString:()=>z(t,e.title,e.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>R(e),toString:()=>q(e)};default:return{toComponent:()=>V(t,e),toString:()=>B(t,e,r)}}},Y=t=>{const{baseTag:e,bodyAttributes:r,encode:n=!0,htmlAttributes:o,noscriptTags:s,styleTags:i,title:a="",titleAttributes:c,prioritizeSeoTags:l}=t;let{linkTags:u,metaTags:p,scriptTags:f}=t,d={toComponent:()=>{},toString:()=>""};return l&&({priorityMethods:d,linkTags:u,metaTags:p,scriptTags:f}=(t=>{let{metaTags:e,linkTags:r,scriptTags:n,encode:o}=t;const s=I(e,y),i=I(r,h),a=I(n,m);return{priorityMethods:{toComponent:()=>[...V("meta",s.priority),...V("link",i.priority),...V("script",a.priority)],toString:()=>"".concat(F("meta",s.priority,o)," ").concat(F("link",i.priority,o)," ").concat(F("script",a.priority,o))},metaTags:s.default,linkTags:i.default,scriptTags:a.default}})(t)),{priority:d,base:F("base",e,n),bodyAttributes:F("bodyAttributes",r,n),htmlAttributes:F("htmlAttributes",o,n),link:F("link",u,n),meta:F("meta",p,n),noscript:F("noscript",s,n),script:F("script",f,n),style:F("style",i,n),title:F("title",{title:a,titleAttributes:c},n)}},K=[],$=!("undefined"===typeof window||!window.document||!window.document.createElement),G=class{constructor(t,e){(0,s.Z)(this,"instances",[]),(0,s.Z)(this,"canUseDOM",$),(0,s.Z)(this,"context",void 0),(0,s.Z)(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?K:this.instances,add:t=>{(this.canUseDOM?K:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?K:this.instances).indexOf(t);(this.canUseDOM?K:this.instances).splice(e,1)}}}),this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Y({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},W=i.createContext({}),J=(n=class t extends i.Component{constructor(e){super(e),(0,s.Z)(this,"helmetData",void 0),this.helmetData=new G(this.props.context||{},t.canUseDOM)}render(){return i.createElement(W.Provider,{value:this.helmetData.value},this.props.children)}},(0,s.Z)(n,"canUseDOM",$),n),Q=(t,e)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll("".concat(t,"[").concat(A,"]")),o=[].slice.call(n),s=[];let i;return e&&e.length&&e.forEach((e=>{const r=document.createElement(t);for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))if("innerHTML"===t)r.innerHTML=e.innerHTML;else if("cssText"===t)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{const n=t,o="undefined"===typeof e[n]?"":e[n];r.setAttribute(t,o)}r.setAttribute(A,"true"),o.some(((t,e)=>(i=e,r.isEqualNode(t))))?o.splice(i,1):s.push(r)})),o.forEach((t=>{var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),s.forEach((t=>r.appendChild(t))),{oldTags:o,newTags:s}},X=(t,e)=>{const r=document.getElementsByTagName(t)[0];if(!r)return;const n=r.getAttribute(A),o=n?n.split(","):[],s=[...o],i=Object.keys(e);for(const a of i){const t=e[a]||"";r.getAttribute(a)!==t&&r.setAttribute(a,t),-1===o.indexOf(a)&&o.push(a);const n=s.indexOf(a);-1!==n&&s.splice(n,1)}for(let a=s.length-1;a>=0;a-=1)r.removeAttribute(s[a]);o.length===s.length?r.removeAttribute(A):r.getAttribute(A)!==i.join(",")&&r.setAttribute(A,i.join(","))},tt=(t,e)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:o,linkTags:s,metaTags:i,noscriptTags:a,onChangeClientState:c,scriptTags:l,styleTags:u,title:p,titleAttributes:f}=t;X("body",n),X("html",o),((t,e)=>{"undefined"!==typeof t&&document.title!==t&&(document.title=P(t)),X("title",e)})(p,f);const d={baseTag:Q("base",r),linkTags:Q("link",s),metaTags:Q("meta",i),noscriptTags:Q("noscript",a),scriptTags:Q("script",l),styleTags:Q("style",u)},h={},m={};Object.keys(d).forEach((t=>{const{newTags:e,oldTags:r}=d[t];e.length&&(h[t]=e),r.length&&(m[t]=d[t].oldTags)})),e&&e(),c(t,h,m)},et=null,rt=t=>{et&&cancelAnimationFrame(et),t.defer?et=requestAnimationFrame((()=>{tt(t,(()=>{et=null}))})):(tt(t),et=null)},nt=class extends i.Component{constructor(){super(...arguments),(0,s.Z)(this,"rendered",!1)}shouldComponentUpdate(t){return!f()(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:e}=this.props.context;let r=null;const n=(o=t.get().map((t=>{const e={...t.props};return delete e.context,e})),{baseTag:L(["href"],o),bodyAttributes:M("bodyAttributes",o),defer:S(o,v),encode:S(o,O),htmlAttributes:M("htmlAttributes",o),linkTags:D("link",["rel","href"],o),metaTags:D("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:D("noscript",["innerHTML"],o),onChangeClientState:j(o),scriptTags:D("script",["src","innerHTML"],o),styleTags:D("style",["cssText"],o),title:E(o),titleAttributes:M("titleAttributes",o),prioritizeSeoTags:H(o,k)});var o;J.canUseDOM?rt(n):Y&&(r=Y(n)),e(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},ot=(o=class extends i.Component{shouldComponentUpdate(t){return!c()(U(this.props,"helmetData"),U(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error("<".concat(t.type," /> elements are self-closing and can not contain children. Refer to our API for more information."))}}flattenArrayTypeChildren(t,e,r,n){return{...e,[t.type]:[...e[t.type]||[],{...r,...this.mapNestedChildrenToProps(t,n)}]}}mapObjectTypeChildren(t,e,r,n){switch(t.type){case"title":return{...e,[t.type]:n,titleAttributes:{...r}};case"body":return{...e,bodyAttributes:{...r}};case"html":return{...e,htmlAttributes:{...r}};default:return{...e,[t.type]:{...r}}}}mapArrayTypeChildrenToProps(t,e){let r={...e};return Object.keys(t).forEach((e=>{r={...r,[e]:t[e]}})),r}warnOnInvalidChildren(t,e){return u()(g.some((e=>t.type===e)),"function"===typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types ".concat(g.join(", ")," are allowed. Helmet does not support rendering <").concat(t.type,"> elements. Refer to our API for more information.")),u()(!e||"string"===typeof e||Array.isArray(e)&&!e.some((t=>"string"!==typeof t)),"Helmet expects a string as a child of <".concat(t.type,">. Did you forget to wrap your children in braces? ( <").concat(t.type,">{``}</").concat(t.type,"> ) Refer to our API for more information.")),!0}mapChildrenToProps(t,e){let r={};return i.Children.forEach(t,(t=>{if(!t||!t.props)return;const{children:n,...o}=t.props,s=Object.keys(o).reduce(((t,e)=>(t[T[e]||e]=o[e],t)),{});let{type:i}=t;switch("symbol"===typeof i?i=i.toString():this.warnOnInvalidChildren(t,n),i){case"Symbol(react.fragment)":e=this.mapChildrenToProps(n,e);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(t,r,s,n);break;default:e=this.mapObjectTypeChildren(t,e,s,n)}})),this.mapArrayTypeChildrenToProps(r,e)}render(){const{children:t,...e}=this.props;let r={...e},{helmetData:n}=e;if(t&&(r=this.mapChildrenToProps(t,r)),n&&!(n instanceof G)){n=new G(n.context,!0),delete r.helmetData}return n?i.createElement(nt,{...r,context:n.value}):i.createElement(W.Consumer,null,(t=>i.createElement(nt,{...r,context:t})))}},(0,s.Z)(o,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),o)}}]);
//# sourceMappingURL=50.0931401e.chunk.js.map