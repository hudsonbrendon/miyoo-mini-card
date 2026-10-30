function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:m}=Object,p=globalThis,u=p.trustedTypes,f=u?u.emptyScript:"",g=p.reactiveElementPolyfillSupport,y=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const r=n.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const r=this.constructor;if(!1===s&&(n=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??v)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[y("elementProperties")]=new Map,b[y("finalized")]=new Map,g?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=t=>t,A=x.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,P=`<${C}>`,M=document,O=()=>M.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,z=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,j=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=j(1),q=j(2),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),G=new WeakMap,Y=M.createTreeWalker(M,129);function J(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=N;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===N?"!--"===c[1]?o=R:void 0!==c[1]?o=z:void 0!==c[2]?(I.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=L):void 0!==c[3]&&(o=L):o===L?">"===c[0]?(o=n??N,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?L:'"'===c[3]?B:D):o===B||o===D?o=L:o===R||o===z?o=N:(o=L,n=void 0);const d=o===L&&t[e+1].startsWith("/>")?" ":"";r+=o===N?i+P:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+k+d):i+k+(-2===l?e:d)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,l]=Q(t,e);if(this.el=Z.createElement(c,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Y.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[r++],i=s.getAttribute(t).split(k),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?it:"?"===o[1]?st:"@"===o[1]?nt:et}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),Y.nextNode(),a.push({type:2,index:++n});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===W)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=U(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);Y.currentNode=s;let n=Y.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new rt(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=Y.nextNode(),r++)}return Y.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),U(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Z(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new tt(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=K(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=K(this,s[i+o],e,o),a===W&&(a=this._$AH[o]),r||=!U(a)||a!==this._$AH[o],a===F?t=F:t!==F&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class nt extends et{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??F)===W)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(Z,tt),(x.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new tt(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},dt=(t=ht,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt="miyoo-mini-card",ut=["battery","charging","volume","brightness","temperature","wifi_rssi","ram","cpu","playtime_today_min","playtime_total_hours","uptime","mode","game","core","last_played","most_played","charging_source","vbat","ibat"],ft=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)})`
  :host {
    --mmc-bg: var(--ha-card-background, var(--card-background-color, #1c1f25));
    --mmc-fg: var(--primary-text-color, #fff);
    --mmc-muted: var(--secondary-text-color, #94a3b8);
    --mmc-accent: var(--accent-color, #38bdf8);
    --mmc-divider: rgba(255, 255, 255, 0.06);
    display: block;
  }
  ha-card {
    padding: 14px 14px 6px;
    background: var(--mmc-bg);
    color: var(--mmc-fg);
  }

  /* ── Header: 3 status badges + kebab ──────────────────────────────── */
  .mmc-header {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 4px 4px 8px;
  }
  .mmc-header .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--mmc-muted);
    font-size: 0.95rem;
    font-variant-numeric: tabular-nums;
  }
  .mmc-header ha-icon {
    --mdc-icon-size: 18px;
    color: var(--mmc-muted);
  }
  .mmc-header .spacer { flex: 1; }
  .mmc-header .menu-dot {
    color: var(--mmc-muted);
    font-size: 1.1rem;
    cursor: default;
    padding: 0 4px;
  }

  /* ── Device illustration (photo + screen overlay + charging LED) ─── */
  .mmc-device {
    display: flex;
    justify-content: center;
    margin: 4px 0 6px;
  }
  .mmc-photo {
    position: relative;
    width: 100%;
    max-width: 240px;
    line-height: 0;
  }
  .mmc-photo-img {
    width: 100%;
    height: auto;
    display: block;
    color: #666; /* fallback for currentColor in SVG, if needed */
  }
  /* Overlay maps to the SVG screen rect: viewBox (42,56) → (198,192),
     viewBox is 240×400. Percentages computed from those bounds. */
  .mmc-screen-overlay {
    position: absolute;
    top: 14%;     /* 56/400  */
    bottom: 52%;  /* (400-192)/400 */
    left: 17.5%;  /* 42/240  */
    right: 17.5%; /* (240-198)/240 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    pointer-events: none;
    line-height: 1.2;
  }
  .mmc-screen-line1 {
    color: var(--mmc-fg);
    font: 700 13px sans-serif;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mmc-screen-line2 {
    color: var(--mmc-muted);
    font: 500 10px sans-serif;
    letter-spacing: 1px;
    margin-top: 4px;
  }
  /* Animated charging LED — sits over the static power-LED dot
     drawn in the SVG at viewBox (206,26) → ~86% / 6.5%. */
  .mmc-led-charging {
    position: absolute;
    top: 5%;
    left: 86%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 6px #22c55e, 0 0 10px #22c55e;
    animation: mmc-pulse 1.6s ease-in-out infinite;
  }
  @keyframes mmc-pulse {
    0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
    50%      { opacity: 1.0; transform: translate(-50%, -50%) scale(1.3); }
  }
  @media (prefers-reduced-motion: reduce) {
    .mmc-led-charging { animation: none; }
  }

  /* ── Device name + status line ────────────────────────────────────── */
  .mmc-name {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 6px 0 2px;
  }
  .mmc-status {
    text-align: center;
    color: var(--mmc-muted);
    font-size: 0.95rem;
    margin: 0 0 14px;
    min-height: 1.2em;
  }
  .mmc-status .play-icon {
    font-size: 0.85em;
    margin-right: 6px;
  }
  .mmc-status .charging-icon {
    color: var(--mmc-accent);
    margin-left: 6px;
  }

  /* ── Stats grid: 4 columns with vertical dividers ─────────────────── */
  .mmc-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--mmc-divider);
    border-bottom: 1px solid var(--mmc-divider);
    padding: 14px 0;
  }
  .mmc-stat {
    text-align: center;
    border-right: 1px solid var(--mmc-divider);
    padding: 0 4px;
  }
  .mmc-stat:last-child {
    border-right: none;
  }
  .mmc-stat-val {
    font-size: 1.25rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .mmc-stat-sub {
    font-size: 0.78rem;
    color: var(--mmc-muted);
    margin-top: 2px;
  }

`;const gt=q`
  <!-- Outer shell -->
  <rect x="6" y="6" width="228" height="388" rx="24" ry="24"
        fill="#ffffff" stroke="#aaaaaa" stroke-width="2"/>
  <!-- Inner inset line (subtle bezel) -->
  <rect x="14" y="14" width="212" height="372" rx="18" ry="18"
        fill="none" stroke="#ececec" stroke-width="1"/>

  <!-- Shoulder buttons silhouette (top edge) -->
  <path d="M 32 8 Q 24 16 36 22" fill="none" stroke="#aaaaaa" stroke-width="1.5"/>
  <path d="M 208 8 Q 216 16 204 22" fill="none" stroke="#aaaaaa" stroke-width="1.5"/>

  <!-- Function button (top center, small circle) -->
  <circle cx="120" cy="26" r="3.5" fill="none" stroke="#aaaaaa" stroke-width="1.5"/>

  <!-- Power LED indicator (top right) -->
  <circle cx="206" cy="26" r="2.5" fill="#aaaaaa"/>

  <!-- Screen bezel -->
  <rect x="36" y="50" width="168" height="148" rx="8" ry="8"
        fill="none" stroke="#666666" stroke-width="2"/>
  <!-- Screen surface (left intentionally near-white so the HA overlay text reads) -->
  <rect x="42" y="56" width="156" height="136" rx="4" ry="4"
        fill="#ffffff" stroke="#cccccc" stroke-width="1"/>

  <!-- MIYOO brand text -->
  <text x="120" y="218" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700"
        letter-spacing="3" fill="#aaaaaa">MIYOO</text>

  <!-- D-pad (plus path, centered at 60,276) -->
  <path d="M 49 243 H 71 V 265 H 93 V 287 H 71 V 309 H 49 V 287 H 27 V 265 H 49 Z"
        fill="none" stroke="#666666" stroke-width="2"
        stroke-linejoin="round"/>

  <!-- ABXY cluster, centered at 180,275, diamond layout -->
  <circle cx="180" cy="247" r="11" fill="none" stroke="#666666" stroke-width="2"/>
  <text x="180" y="251" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700" fill="#666666">X</text>

  <circle cx="208" cy="275" r="11" fill="none" stroke="#666666" stroke-width="2"/>
  <text x="208" y="279" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700" fill="#666666">A</text>

  <circle cx="180" cy="303" r="11" fill="none" stroke="#666666" stroke-width="2"/>
  <text x="180" y="307" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700" fill="#666666">B</text>

  <circle cx="152" cy="275" r="11" fill="none" stroke="#666666" stroke-width="2"/>
  <text x="152" y="279" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="11" font-weight="700" fill="#666666">Y</text>

  <!-- SELECT pill -->
  <rect x="68" y="333" width="48" height="14" rx="7" ry="7"
        fill="none" stroke="#aaaaaa" stroke-width="1.5"/>
  <text x="92" y="343" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="8" font-weight="700" fill="#aaaaaa" letter-spacing="1.5">SEL</text>

  <!-- START pill -->
  <rect x="124" y="333" width="48" height="14" rx="7" ry="7"
        fill="none" stroke="#aaaaaa" stroke-width="1.5"/>
  <text x="148" y="343" text-anchor="middle"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="8" font-weight="700" fill="#aaaaaa" letter-spacing="1.5">START</text>

  <!-- Speaker grille (left, 2x3 dots) -->
  <g fill="#cccccc">
    <circle cx="36" cy="365" r="2"/><circle cx="46" cy="365" r="2"/><circle cx="56" cy="365" r="2"/>
    <circle cx="36" cy="375" r="2"/><circle cx="46" cy="375" r="2"/><circle cx="56" cy="375" r="2"/>
  </g>
  <!-- Speaker grille (right, 2x3 dots) -->
  <g fill="#cccccc">
    <circle cx="184" cy="365" r="2"/><circle cx="194" cy="365" r="2"/><circle cx="204" cy="365" r="2"/>
    <circle cx="184" cy="375" r="2"/><circle cx="194" cy="375" r="2"/><circle cx="204" cy="375" r="2"/>
  </g>

  <!-- USB-C / TF-card slot hint (bottom edge centerline) -->
  <rect x="106" y="378" width="28" height="4" rx="2" ry="2"
        fill="#eeeeee" stroke="#cccccc" stroke-width="0.8"/>
`,yt=new Set(["charging"]);const $t={"state.playing":"Playing","state.standby":"Standby","mode.mainui":"In menu","mode.switcher":"Game switcher","mode.apps":"In an app","mode.advmenu":"Advanced menu","mode.drastic":"DraStic running","mode.launching":"Launching","stat.battery":"Battery","stat.volume":"Volume","stat.brightness":"Brightness","stat.temperature":"Temperature","stat.wifi":"Wi-Fi","stat.playtime_today":"Today","stat.ram":"RAM","editor.entity":"Entity prefix (device slug)","editor.name":"Name","editor.language":"Language"},vt={"state.playing":"Jogando","state.standby":"Em standby","mode.mainui":"No menu","mode.switcher":"Game switcher","mode.apps":"Em um app","mode.advmenu":"Menu avançado","mode.drastic":"Rodando DraStic","mode.launching":"Carregando","stat.battery":"Bateria","stat.volume":"Volume","stat.brightness":"Brilho","stat.temperature":"Temperatura","stat.wifi":"Wi-Fi","stat.playtime_today":"Hoje","stat.ram":"RAM","editor.entity":"Prefixo das entidades (slug do dispositivo)","editor.name":"Nome","editor.language":"Idioma"},_t={en:$t,"en-US":$t,"en-GB":$t,"pt-BR":vt,pt:vt};function bt(t,e){return(e&&_t[e]||$t)[t]??t}const xt=["mainui","switcher","apps","advmenu","drastic","launching"];function wt(t,e,i){const s=e.mode?t.states[e.mode]?.state:void 0,n=e.game?t.states[e.game]?.state:void 0,r=e.core?t.states[e.core]?.state:void 0;if("game"===s&&n&&"unknown"!==n&&"unavailable"!==n){const t=r&&"unknown"!==r&&"unavailable"!==r?` (${r})`:"";return`${bt("state.playing",i)} ${n}${t}`}return s&&xt.includes(s)?bt(`mode.${s}`,i):bt("state.standby",i)}console.info("%c MIYOO-MINI-CARD %c v0.4.1 ","color: white; background: #1f2937; font-weight: 700;","color: white; background: #38bdf8; font-weight: 700;");const At=window;At.customCards=At.customCards||[],At.customCards.push({type:pt,name:"Miyoo Mini Card",description:"Card for Miyoo Mini Plus via miyoo-mqtt-reporter MQTT integration",preview:!1,documentationURL:"https://github.com/hudsonbrendon/miyoo-mini-card",getEntitySuggestion:(t,e)=>{const i=function(t,e){const i=t.entities?.[e];if(i&&"mqtt"!==i.platform)return;const s=/^sensor\.(.+)_miyoo_battery$/.exec(e);if(!s)return;const n=s[1];return t.states[`binary_sensor.${n}_miyoo_charging`]?n:void 0}(t,e);return i?{config:{type:`custom:${pt}`,entity:i}}:null}});const St=[{entity:"battery",unit:"%",subtitle:"stat.battery"},{entity:"volume",unit:"%",subtitle:"stat.volume"},{entity:"temperature",unit:"°C",subtitle:"stat.temperature"},{entity:"playtime_today_min",unit:" min",subtitle:"stat.playtime_today"}];let Et=class extends ct{static{this.styles=ft}setConfig(t){if(!t)throw new Error("invalid_config: empty");const e="string"==typeof t.entity&&t.entity.length>0,i=t.entities??{},s=!!i.battery&&!!i.charging;if(!e&&!s)throw new Error("missing required entity: provide `entity:` prefix or `entities.battery` + `entities.charging`");if(t.stats&&t.stats.length>4)throw new Error("invalid_config: stats can have at most 4 items");this._config=t}getCardSize(){return 5}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{text:{}}},{name:"name",selector:{text:{}}},{name:"language",selector:{select:{options:["en","pt-BR"],mode:"dropdown"}}}],computeLabel:t=>bt(`editor.${t.name}`)}}getGridOptions(){return{columns:6,rows:5,min_columns:4,min_rows:4}}willUpdate(t){t.has("hass")&&this.toggleAttribute("dark-mode",Boolean(this.hass?.themes?.darkMode))}_displayStat(t,e){if(!e.unit&&!e.multiply&&void 0===e.precision&&!e.suffix&&t&&this.hass?.formatEntityState&&!["unknown","unavailable",""].includes(t.state))try{return this.hass.formatEntityState(t)}catch{}return function(t,e){if(!t||"unknown"===t.state||"unavailable"===t.state||""===t.state)return"—";const i=t.state,s=Number(i);if(Number.isFinite(s)){const t=s*(e.multiply??1);return`${null!=e.precision?t.toFixed(e.precision):String(t)}${e.unit??""}${e.suffix??""}`}return`${i}${e.suffix??""}`}(t,e)}static getStubConfig(){return{type:`custom:${pt}`,entity:"miyoo_mini_plus_miyoominiplus"}}_lang(){return this._config?.language??this.hass?.language??"en"}_resolveStatEntity(t,e){return t in e?e[t]:t}_intState(t){if(!t||!this.hass)return;const e=this.hass.states[t]?.state;if(!e||"unknown"===e||"unavailable"===e)return;const i=Number(e);return Number.isFinite(i)?i:void 0}_batteryIcon(t,e){return void 0===t?"mdi:battery-unknown":e?t>=90?"mdi:battery-charging-100":t>=70?"mdi:battery-charging-80":t>=50?"mdi:battery-charging-60":t>=30?"mdi:battery-charging-40":t>=10?"mdi:battery-charging-20":"mdi:battery-charging-outline":t>=95?"mdi:battery":t>=80?"mdi:battery-80":t>=60?"mdi:battery-60":t>=40?"mdi:battery-40":t>=20?"mdi:battery-20":"mdi:battery-alert"}_volumeIcon(t){return void 0===t?"mdi:volume-off":t<=0?"mdi:volume-mute":t<33?"mdi:volume-low":t<66?"mdi:volume-medium":"mdi:volume-high"}render(){if(!this._config||!this.hass)return F;const t=function(t){const e={},i=t.entities??{},s=t.entity?.trim()??"";for(const t of ut)if(i[t])e[t]=i[t];else if(s){const i=yt.has(t)?"binary_sensor":"sensor";e[t]=`${i}.${s}_miyoo_${t}`}else e[t]="";return e}(this._config),e=this._lang(),i=t.mode?this.hass.states[t.mode]?.state:void 0,s=t.charging?this.hass.states[t.charging]?.state:void 0,n="on"===s||"ON"===s,r=this._intState(t.battery),o=this._intState(t.volume),a=this._intState(t.playtime_today_min),c=wt(this.hass,t,e),l="game"===i,h=new Set(["mainui","switcher","apps","advmenu","drastic","launching"]);let d,m="";if(l&&t.game){const i=this.hass.states[t.game]?.state;d=i&&"unknown"!==i&&"unavailable"!==i?i:bt("state.standby",e);const s=t.core?this.hass.states[t.core]?.state:void 0;s&&"unknown"!==s&&"unavailable"!==s&&(m=String(s).toUpperCase())}else d=i&&h.has(i)?bt(`mode.${i}`,e):bt("state.standby",e);const p=(this._config.stats??St).slice(0,4);return V`
      <ha-card>
        <!-- Header: 3 status badges + kebab -->
        <div class="mmc-header">
          <span class="badge">
            <ha-icon icon="${this._volumeIcon(o)}"></ha-icon>
            ${o??"—"}%
          </span>
          <span class="badge">
            <ha-icon icon="${this._batteryIcon(r,n)}"></ha-icon>
            ${r??"—"}%
          </span>
          <span class="badge">
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            ${a??0}m
          </span>
          <span class="spacer"></span>
          <span class="menu-dot">⋮</span>
        </div>

        <!-- Device illustration -->
        <div class="mmc-device">
          ${u={screenLine1:d,screenLine2:m,charging:n},V`
    <div class="mmc-photo">
      <svg
        class="mmc-photo-img"
        viewBox="0 0 240 400"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Miyoo Mini Plus"
      >
        ${gt}
      </svg>
      <div class="mmc-screen-overlay">
        <div class="mmc-screen-line1">${u.screenLine1}</div>
        ${u.screenLine2?V`<div class="mmc-screen-line2">${u.screenLine2}</div>`:F}
      </div>
      ${u.charging?V`<span class="mmc-led-charging" aria-hidden="true"></span>`:F}
    </div>
  `}
        </div>

        <!-- Name + status -->
        ${this._config.name?V`<div class="mmc-name">${this._config.name}</div>`:F}
        <div class="mmc-status">
          ${l?V`<span class="play-icon">▶</span>`:F}
          ${c}
          ${n?V`<span class="charging-icon">⚡</span>`:F}
        </div>

        <!-- Stats grid -->
        <div class="mmc-stats">
          ${p.map(i=>{const s=this._resolveStatEntity(i.entity,t),n=s?this.hass.states[s]:void 0;return V`
              <div class="mmc-stat">
                <div class="mmc-stat-val">${this._displayStat(n,i)}</div>
                <div class="mmc-stat-sub">${bt(i.subtitle,e)}</div>
              </div>
            `})}
        </div>
      </ha-card>
    `;var u}};t([mt({attribute:!1})],Et.prototype,"hass",void 0),t([function(t){return mt({...t,state:!0,attribute:!1})}()],Et.prototype,"_config",void 0),Et=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(pt)],Et);export{Et as MiyooMiniCard};
