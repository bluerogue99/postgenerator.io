import{r as P,p as Ae,g as Be,c as Ke,d as Ve,j as r,Y as Ye}from"./app-DVjSjCXE.js";import{A as Xe}from"./AuthenticatedLayout-BCTVf8rY.js";import{Q as ze,B as Ce}from"./ReactToastify-BgGP3dPt.js";import"./ApplicationLogo-B_-S-Tus.js";import"./transition-CY9_aEky.js";var ve={exports:{}},K={},ye={exports:{}},D={},be={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function h(f,p){return p.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function O(f){var p=f.offsetWidth<=0&&f.offsetHeight<=0;if(p&&!f.innerHTML)return!0;try{var y=window.getComputedStyle(f),E=y.getPropertyValue("display");return p?E!==a&&h(f,y):E===o}catch{return console.warn("Failed to inspect element style"),!1}}function s(f){for(var p=f,y=f.getRootNode&&f.getRootNode();p&&p!==document.body;){if(y&&p===y&&(p=y.host.parentNode),O(p))return!1;p=p.parentNode}return!0}function g(f,p){var y=f.nodeName.toLowerCase(),E=l.test(y)&&!f.disabled||y==="a"&&f.href||p;return E&&s(f)}function v(f){var p=f.getAttribute("tabindex");p===null&&(p=void 0);var y=isNaN(p);return(y||p>=0)&&g(f,!y)}function b(f){var p=[].slice.call(f.querySelectorAll("*"),0).reduce(function(y,E){return y.concat(E.shadowRoot?b(E.shadowRoot):[E])},[]);return p.filter(v)}t.exports=e.default})(be,be.exports);var Re=be.exports;Object.defineProperty(D,"__esModule",{value:!0});D.resetState=Ze;D.log=et;D.handleBlur=te;D.handleFocus=ne;D.markForFocusLater=tt;D.returnFocus=nt;D.popWithoutFocus=ot;D.setupScopedFocus=rt;D.teardownScopedFocus=at;var Je=Re,Qe=Ge(Je);function Ge(t){return t&&t.__esModule?t:{default:t}}var X=[],Y=null,ge=!1;function Ze(){X=[]}function et(){}function te(){ge=!0}function ne(){if(ge){if(ge=!1,!Y)return;setTimeout(function(){if(!Y.contains(document.activeElement)){var t=(0,Qe.default)(Y)[0]||Y;t.focus()}},0)}}function tt(){X.push(document.activeElement)}function nt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{X.length!==0&&(e=X.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function ot(){X.length>0&&X.pop()}function rt(t){Y=t,window.addEventListener?(window.addEventListener("blur",te,!1),document.addEventListener("focus",ne,!0)):(window.attachEvent("onBlur",te),document.attachEvent("onFocus",ne))}function at(){Y=null,window.addEventListener?(window.removeEventListener("blur",te),document.removeEventListener("focus",ne)):(window.detachEvent("onBlur",te),document.detachEvent("onFocus",ne))}var xe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=O;var o=Re,a=l(o);function l(s){return s&&s.__esModule?s:{default:s}}function h(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?h(s.activeElement.shadowRoot):s.activeElement}function O(s,g){var v=(0,a.default)(s);if(!v.length){g.preventDefault();return}var b=void 0,f=g.shiftKey,p=v[0],y=v[v.length-1],E=h();if(s===E){if(!f)return;b=y}if(y===E&&!f&&(b=p),p===E&&f&&(b=y),b){g.preventDefault(),b.focus();return}var T=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),_=T!=null&&T[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(_){var U=v.indexOf(E);if(U>-1&&(U+=f?-1:1),b=v[U],typeof b>"u"){g.preventDefault(),b=f?y:p,b.focus();return}g.preventDefault(),b.focus()}}t.exports=e.default})(xe,xe.exports);var st=xe.exports,k={},lt=function(){},it=lt,R={},De={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(De);var ut=De.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var ct=ut,dt=ft(ct);function ft(t){return t&&t.__esModule?t:{default:t}}var de=dt.default,pt=de.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=de.canUseDOM?window.NodeList:{};R.canUseDOM=de.canUseDOM;R.default=pt;Object.defineProperty(k,"__esModule",{value:!0});k.resetState=bt;k.log=gt;k.assertNodeList=ke;k.setElement=xt;k.validateElement=Oe;k.hide=Ot;k.show=_t;k.documentNotReadyOrSSRTesting=Ct;var mt=it,ht=yt(mt),vt=R;function yt(t){return t&&t.__esModule?t:{default:t}}var j=null;function bt(){j&&(j.removeAttribute?j.removeAttribute("aria-hidden"):j.length!=null?j.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(j).forEach(function(t){return t.removeAttribute("aria-hidden")})),j=null}function gt(){}function ke(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function xt(t){var e=t;if(typeof e=="string"&&vt.canUseDOM){var o=document.querySelectorAll(e);ke(o,e),e=o}return j=e||j,j}function Oe(t){var e=t||j;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,ht.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ot(t){var e=!0,o=!1,a=void 0;try{for(var l=Oe(t)[Symbol.iterator](),h;!(e=(h=l.next()).done);e=!0){var O=h.value;O.setAttribute("aria-hidden","true")}}catch(s){o=!0,a=s}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function _t(t){var e=!0,o=!1,a=void 0;try{for(var l=Oe(t)[Symbol.iterator](),h;!(e=(h=l.next()).done);e=!0){var O=h.value;O.removeAttribute("aria-hidden")}}catch(s){o=!0,a=s}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function Ct(){j=null}var z={};Object.defineProperty(z,"__esModule",{value:!0});z.resetState=wt;z.log=Et;var Z={},ee={};function we(t,e){t.classList.remove(e)}function wt(){var t=document.getElementsByTagName("html")[0];for(var e in Z)we(t,Z[e]);var o=document.body;for(var a in ee)we(o,ee[a]);Z={},ee={}}function Et(){}var Nt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},St=function(e,o){return e[o]&&(e[o]-=1),o},Mt=function(e,o,a){a.forEach(function(l){Nt(o,l),e.add(l)})},Pt=function(e,o,a){a.forEach(function(l){St(o,l),o[l]===0&&e.remove(l)})};z.add=function(e,o){return Mt(e.classList,e.nodeName.toLowerCase()=="html"?Z:ee,o.split(" "))};z.remove=function(e,o){return Pt(e.classList,e.nodeName.toLowerCase()=="html"?Z:ee,o.split(" "))};var J={};Object.defineProperty(J,"__esModule",{value:!0});J.log=jt;J.resetState=At;function Tt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Fe=function t(){var e=this;Tt(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ie=new Fe;function jt(){console.log("portalOpenInstances ----------"),console.log(ie.openInstances.length),ie.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function At(){ie=new Fe}J.default=ie;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.resetState=Ft;_e.log=Lt;var Rt=J,Dt=kt(Rt);function kt(t){return t&&t.__esModule?t:{default:t}}var S=void 0,A=void 0,B=[];function Ft(){for(var t=[S,A],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}S=A=null,B=[]}function Lt(){console.log("bodyTrap ----------"),console.log(B.length);for(var t=[S,A],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Ee(){B.length!==0&&B[B.length-1].focusContent()}function Ut(t,e){!S&&!A&&(S=document.createElement("div"),S.setAttribute("data-react-modal-body-trap",""),S.style.position="absolute",S.style.opacity="0",S.setAttribute("tabindex","0"),S.addEventListener("focus",Ee),A=S.cloneNode(),A.addEventListener("focus",Ee)),B=e,B.length>0?(document.body.firstChild!==S&&document.body.insertBefore(S,document.body.firstChild),document.body.lastChild!==A&&document.body.appendChild(A)):(S.parentElement&&S.parentElement.removeChild(S),A.parentElement&&A.parentElement.removeChild(A))}Dt.default.subscribe(Ut);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(d){for(var c=1;c<arguments.length;c++){var x=arguments[c];for(var n in x)Object.prototype.hasOwnProperty.call(x,n)&&(d[n]=x[n])}return d},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},l=function(){function d(c,x){for(var n=0;n<x.length;n++){var i=x[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}return function(c,x,n){return x&&d(c.prototype,x),n&&d(c,n),c}}(),h=P,O=Ae,s=F(O),g=D,v=V(g),b=st,f=F(b),p=k,y=V(p),E=z,T=V(E),_=R,U=F(_),fe=J,Q=F(fe);function V(d){if(d&&d.__esModule)return d;var c={};if(d!=null)for(var x in d)Object.prototype.hasOwnProperty.call(d,x)&&(c[x]=d[x]);return c.default=d,c}function F(d){return d&&d.__esModule?d:{default:d}}function ae(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")}function pe(d,c){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:d}function me(d,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(d,c):d.__proto__=c)}var m={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},C=function(c){return c.code==="Tab"||c.keyCode===9},L=function(c){return c.code==="Escape"||c.keyCode===27},I=0,he=function(d){me(c,d);function c(x){ae(this,c);var n=pe(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,x));return n.setOverlayRef=function(i){n.overlay=i,n.props.overlayRef&&n.props.overlayRef(i)},n.setContentRef=function(i){n.content=i,n.props.contentRef&&n.props.contentRef(i)},n.afterClose=function(){var i=n.props,N=i.appElement,M=i.ariaHideApp,w=i.htmlOpenClassName,H=i.bodyOpenClassName,q=i.parentSelector,se=q&&q().ownerDocument||document;H&&T.remove(se.body,H),w&&T.remove(se.getElementsByTagName("html")[0],w),M&&I>0&&(I-=1,I===0&&y.show(N)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(v.returnFocus(n.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),Q.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(v.setupScopedFocus(n.node),v.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var i=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:i},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(i){C(i)&&(0,f.default)(n.content,i),n.props.shouldCloseOnEsc&&L(i)&&(i.stopPropagation(),n.requestClose(i))},n.handleOverlayOnClick=function(i){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(i):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(i){!n.props.shouldCloseOnOverlayClick&&i.target==n.overlay&&i.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(i){return n.ownerHandlesClose()&&n.props.onRequestClose(i)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(i,N){var M=(typeof N>"u"?"undefined":a(N))==="object"?N:{base:m[i],afterOpen:m[i]+"--after-open",beforeClose:m[i]+"--before-close"},w=M.base;return n.state.afterOpen&&(w=w+" "+M.afterOpen),n.state.beforeClose&&(w=w+" "+M.beforeClose),typeof N=="string"&&N?w+" "+N:w},n.attributesFromObject=function(i,N){return Object.keys(N).reduce(function(M,w){return M[i+"-"+w]=N[w],M},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return l(c,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,i){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!i.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,i=n.appElement,N=n.ariaHideApp,M=n.htmlOpenClassName,w=n.bodyOpenClassName,H=n.parentSelector,q=H&&H().ownerDocument||document;w&&T.add(q.body,w),M&&T.add(q.getElementsByTagName("html")[0],M),N&&(I+=1,y.hide(i)),Q.default.register(this)}},{key:"render",value:function(){var n=this.props,i=n.id,N=n.className,M=n.overlayClassName,w=n.defaultStyles,H=n.children,q=N?{}:w.content,se=M?{}:w.overlay;if(this.shouldBeClosed())return null;var He={ref:this.setOverlayRef,className:this.buildClassName("overlay",M),style:o({},se,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},qe=o({id:i,ref:this.setContentRef,style:o({},q,this.props.style.content),className:this.buildClassName("content",N),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),$e=this.props.contentElement(qe,H);return this.props.overlayElement(He,$e)}}]),c}(h.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(U.default),s.default.instanceOf(_.SafeHTMLCollection),s.default.instanceOf(_.SafeNodeList),s.default.arrayOf(s.default.instanceOf(U.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},e.default=he,t.exports=e.default})(ye,ye.exports);var Wt=ye.exports;function Le(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Ue(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function We(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}Le.__suppressDeprecationWarning=!0;Ue.__suppressDeprecationWarning=!0;We.__suppressDeprecationWarning=!0;function It(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||a!==null||l!==null){var h=t.displayName||t.name,O=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+h+" uses "+O+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Le,e.componentWillReceiveProps=Ue),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=We;var s=e.componentDidUpdate;e.componentDidUpdate=function(v,b,f){var p=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;s.call(this,v,b,p)}}return t}const Ht=Object.freeze(Object.defineProperty({__proto__:null,polyfill:It},Symbol.toStringTag,{value:"Module"})),qt=Be(Ht);Object.defineProperty(K,"__esModule",{value:!0});K.bodyOpenClassName=K.portalClassName=void 0;var Ne=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},$t=function(){function t(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),Ie=P,ue=oe(Ie),Bt=Ke,ce=oe(Bt),Kt=Ae,u=oe(Kt),Vt=Wt,Se=oe(Vt),Yt=k,Xt=Jt(Yt),W=R,Me=oe(W),zt=qt;function Jt(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function oe(t){return t&&t.__esModule?t:{default:t}}function Qt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pe(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Gt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Zt=K.portalClassName="ReactModalPortal",en=K.bodyOpenClassName="ReactModal__Body--open",$=W.canUseDOM&&ce.default.createPortal!==void 0,Te=function(e){return document.createElement(e)},je=function(){return $?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function le(t){return t()}var re=function(t){Gt(e,t);function e(){var o,a,l,h;Qt(this,e);for(var O=arguments.length,s=Array(O),g=0;g<O;g++)s[g]=arguments[g];return h=(a=(l=Pe(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(s))),l),l.removePortal=function(){!$&&ce.default.unmountComponentAtNode(l.node);var v=le(l.props.parentSelector);v&&v.contains(l.node)?v.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(v){l.portal=v},l.renderPortal=function(v){var b=je(),f=b(l,ue.default.createElement(Se.default,Ne({defaultStyles:e.defaultStyles},v)),l.node);l.portalRef(f)},a),Pe(l,h)}return $t(e,[{key:"componentDidMount",value:function(){if(W.canUseDOM){$||(this.node=Te("div")),this.node.className=this.props.portalClassName;var a=le(this.props.parentSelector);a.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=le(a.parentSelector),h=le(this.props.parentSelector);return{prevParent:l,nextParent:h}}},{key:"componentDidUpdate",value:function(a,l,h){if(W.canUseDOM){var O=this.props,s=O.isOpen,g=O.portalClassName;a.portalClassName!==g&&(this.node.className=g);var v=h.prevParent,b=h.nextParent;b!==v&&(v.removeChild(this.node),b.appendChild(this.node)),!(!a.isOpen&&!s)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!W.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),h=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);h?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,h-l)):this.removePortal()}}},{key:"render",value:function(){if(!W.canUseDOM||!$)return null;!this.node&&$&&(this.node=Te("div"));var a=je();return a(ue.default.createElement(Se.default,Ne({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Xt.setElement(a)}}]),e}(Ie.Component);re.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Me.default),u.default.instanceOf(W.SafeHTMLCollection),u.default.instanceOf(W.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Me.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};re.defaultProps={isOpen:!1,portalClassName:Zt,bodyOpenClassName:en,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return ue.default.createElement("div",e,o)},contentElement:function(e,o){return ue.default.createElement("div",e,o)}};re.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,zt.polyfill)(re);K.default=re;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=K,a=l(o);function l(h){return h&&h.__esModule?h:{default:h}}e.default=a.default,t.exports=e.default})(ve,ve.exports);var tn=ve.exports;const G=Ve(tn);G.setAppElement("#app");function ln(t){const e=t.auth.user,[o,a]=P.useState([]),[l,h]=P.useState(!0),[O,s]=P.useState(!1),[g,v]=P.useState(null),[b,f]=P.useState(!1),[p,y]=P.useState(null),[E,T]=P.useState(!1),[_,U]=P.useState(null),[fe,Q]=P.useState(!1),[V,F]=P.useState("");P.useEffect(()=>{(async()=>{try{const C=await fetch(`/api/posts?user_id=${e.id}`);if(!C.ok)throw new Error("Failed to fetch posts");const L=await C.json();a(L)}catch(C){console.error("Error fetching posts:",C),F("Failed to load posts. Please try again later.")}finally{h(!1)}})()},[e.id]);const ae=(m,C)=>{if(!m)return"";const L=m.split(" ");return L.length>C?L.slice(0,C).join(" ")+"...":m},pe=async()=>{if(g)try{const m=await fetch(`/api/posts/${g}`,{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")}});if(m.ok)a(o.filter(C=>C.id!==g)),Ce.success("Post deleted successfully!");else{const C=await m.json();F("Failed to delete post: "+(C.message||"Unknown error"))}}catch(m){console.error("Error deleting post:",m),F("An error occurred while deleting the post.")}finally{s(!1),v(null)}},me=async m=>{try{const C=await fetch(`/api/posts/${m.id}`,{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(m)});if(C.ok){const L=o.map(I=>I.id===m.id?m:I);a(L),Ce.success("Post updated successfully!")}else{const L=await C.json();F("Failed to update post: "+(L.message||"Unknown error"))}}catch(C){console.error("Error updating post:",C),F("An error occurred while updating the post.")}finally{f(!1),y(null)}};return r.jsxs(Xe,{children:[r.jsx(Ye,{title:"Dashboard"}),r.jsx("div",{className:"py-12",children:r.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:r.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800",children:r.jsxs("div",{className:"text-gray-900 dark:text-gray-100",children:[l&&r.jsx("p",{children:"Loading..."}),V&&r.jsx("p",{className:"text-red-500",children:V}),o.length===0&&!l&&r.jsx("p",{className:"text-center text-gray-500",children:"Your generated posts will show up here."}),o.length>0&&r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full divide-y divide-gray-700",children:[r.jsx("thead",{className:"bg-gray-800 text-white",children:r.jsxs("tr",{children:[r.jsx("th",{className:"px-2 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Post Headline"}),r.jsx("th",{className:"px-2 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Post Content"}),r.jsx("th",{className:"px-2 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Image"}),r.jsx("th",{className:"px-2 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Topic"}),r.jsx("th",{className:"px-2 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Platform"}),r.jsx("th",{className:"px-2 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Actions"})]})}),r.jsx("tbody",{className:"bg-gray-700 text-white",children:o.map(m=>r.jsxs("tr",{className:"hover:bg-gray-600",children:[r.jsx("td",{className:"px-2 py-4 whitespace-nowrap text-sm",children:ae(m.post_headline,4)}),r.jsx("td",{className:"px-2 py-4 whitespace-nowrap text-sm",children:ae(m.post_content,4)}),r.jsx("td",{className:"px-2 py-4 whitespace-nowrap text-sm",children:m.post_image_url?r.jsx("img",{src:m.post_image_url,alt:"Post thumbnail",className:"h-16 w-16 object-cover"}):"N/A"}),r.jsx("td",{className:"px-2 py-4 whitespace-nowrap text-sm",children:m.post_topic_entered||"N/A"}),r.jsx("td",{className:"px-2 py-4 whitespace-nowrap text-sm",children:m.platform_selected||"N/A"}),r.jsxs("td",{className:"button-wrapper",children:[r.jsx("button",{className:"button view-button",onClick:()=>{U(m),T(!0)},children:"View"}),r.jsx("button",{className:"button edit-button",onClick:()=>{y(m),f(!0)},children:"Edit"}),r.jsx("button",{className:"button delete-button",onClick:()=>{v(m.id),s(!0)},children:"Delete"})]})]},m.id))})]})})]})})})}),r.jsx(ze,{}),r.jsxs(G,{isOpen:O,onRequestClose:()=>s(!1),contentLabel:"Confirm Deletion",className:"modal",overlayClassName:"overlay",children:[r.jsx("h2",{className:"text-lg font-bold",children:"Confirm Deletion"}),r.jsx("p",{children:"Are you sure you want to delete this post?"}),r.jsxs("div",{className:"flex justify-end mt-4",children:[r.jsx("button",{onClick:()=>s(!1),className:"mr-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded",children:"Cancel"}),r.jsx("button",{onClick:pe,className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Delete"})]})]}),r.jsx(G,{isOpen:b,onRequestClose:()=>f(!1),contentLabel:"Edit Post",className:"modal",overlayClassName:"overlay",children:p&&r.jsxs("form",{className:"editform",onSubmit:m=>{m.preventDefault(),me({...p,post_headline:m.target.elements.postHeadline.value,post_content:m.target.elements.postContent.value})},children:[r.jsx("label",{children:"Post Headline"}),r.jsx("input",{type:"text",name:"postHeadline",className:"edit-postheadline",defaultValue:p.post_headline}),r.jsx("label",{children:"Post Content"}),r.jsx("textarea",{name:"postContent",className:"edit-postarea",defaultValue:p.post_content}),r.jsxs("div",{className:"submit-buttoncontainer",children:[r.jsx("button",{className:"editsubmit",type:"submit",children:"Save"}),r.jsx("button",{className:"editcancel",onClick:()=>f(!1),children:"Cancel"})]})]})}),r.jsx(G,{isOpen:E,onRequestClose:()=>T(!1),contentLabel:"View Post",className:"modal",overlayClassName:"overlay",children:_&&r.jsxs("div",{className:"view-post",children:[r.jsx("h2",{className:"text-lg font-bold",children:_.post_headline}),r.jsx("p",{className:"mt-2 mb-4",children:_.post_content}),_.post_image_url&&r.jsx("img",{src:_.post_image_url,alt:"Post Image",className:"h-32 w-32 object-cover mb-4"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Status:"})," ",_.post_status]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Topic:"})," ",_.post_topic_entered||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Image Prompt:"})," ",_.image_prompt_entered||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Platform:"})," ",_.platform_selected||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Tone:"})," ",_.tone_selected||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Created By:"})," ",_.user?_.user.name:"Unknown"]}),r.jsx("div",{className:"flex justify-end mt-4",children:r.jsx("button",{onClick:()=>T(!1),className:"close-button",children:"Close"})})]})}),r.jsxs(G,{isOpen:fe,onRequestClose:()=>Q(!1),contentLabel:"Publish Options",className:"modal",overlayClassName:"overlay",children:[r.jsx("h2",{className:"text-lg text-center font-bold",children:"Publish to Platform"}),r.jsxs("div",{className:"flex flex-col mt-4",children:[r.jsx("button",{onClick:()=>handlePublish("Facebook"),className:"publish-button publish-button-facebook",children:"Publish on Facebook"}),r.jsx("button",{onClick:()=>handlePublish("Instagram"),className:"publish-button publish-button-instagram",children:"Publish on Instagram"}),r.jsx("button",{onClick:()=>handlePublish("TikTok"),className:"publish-button publish-button-tiktok",children:"Publish on TikTok"}),r.jsx("button",{onClick:()=>handlePublish("X"),className:"publish-button publish-button-x",children:"Publish on X"}),r.jsx("button",{onClick:()=>handlePublish("LinkedIn"),className:"publish-button publish-button-linkedin",children:"Publish on LinkedIn"})]}),r.jsx("div",{className:"flex justify-end mt-4",children:r.jsx("button",{onClick:()=>Q(!1),className:"close-button",children:"Close"})})]})]})}export{ln as default};
