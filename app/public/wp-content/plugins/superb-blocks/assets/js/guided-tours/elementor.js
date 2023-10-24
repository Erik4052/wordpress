(()=>{"use strict";let e={};function t(t={}){e={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...t}}function o(t){return t?e[t]:e}function n(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t}function i(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap((e=>{const o=e.matches(t),n=Array.from(e.querySelectorAll(t));return[...o?[e]:[],...n]})).filter((e=>"none"!==getComputedStyle(e).pointerEvents&&function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}(e)))}function r(e){if(!e||function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e))return;const t=o("smoothScroll");e.scrollIntoView({behavior:!t||s(e)?"auto":"smooth",inline:"center",block:"center"})}function s(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}let d={};function a(e,t){d[e]=t}function l(e){return e?d[e]:d}function p(){d={}}let c={};function u(e,t){c[e]=t}function v(e){var t;null==(t=c[e])||t.call(c)}function m(e){if(!e)return;const t=e.getBoundingClientRect(),o={x:t.x,y:t.y,width:t.width,height:t.height};a("__activeStagePosition",o),h(o)}function h(e){const t=l("__overlaySvg");if(!t)return void function(e){const t=function(e){const t=window.innerWidth,n=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";const r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",w(e)),r.style.fill=o("overlayColor")||"rgb(0,0,0)",r.style.opacity=`${o("overlayOpacity")}`,r.style.pointerEvents="auto",r.style.cursor="auto",i.appendChild(r),i}(e);document.body.appendChild(t),C(t,(e=>{"path"===e.target.tagName&&v("overlayClick")})),a("__overlaySvg",t)}(e);const n=t.firstElementChild;if("path"!==(null==n?void 0:n.tagName))throw new Error("no path element found in stage svg");n.setAttribute("d",w(e))}function w(e){const t=window.innerWidth,n=window.innerHeight,i=o("stagePadding")||0,r=o("stageRadius")||0,s=e.width+2*i,d=e.height+2*i,a=Math.min(r,s/2,d/2),l=Math.floor(Math.max(a,0)),p=s-2*l,c=d-2*l;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z\n    M${e.x-i+l},${e.y-i} h${p} a${l},${l} 0 0 1 ${l},${l} v${c} a${l},${l} 0 0 1 -${l},${l} h-${p} a${l},${l} 0 0 1 -${l},-${l} v-${c} a${l},${l} 0 0 1 ${l},-${l} z`}function f(e){const{element:t}=e;let i="string"==typeof t?document.querySelector(t):t;i||(i=function(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}()),function(e,t){const i=Date.now(),s=l("__activeStep"),d=l("__activeElement")||e,p=!d||d===e,c="driver-dummy-element"===e.id,u="driver-dummy-element"===d.id,v=o("animate"),w=t.onHighlightStarted||o("onHighlightStarted"),f=(null==t?void 0:t.onHighlighted)||o("onHighlighted"),g=(null==s?void 0:s.onDeselected)||o("onDeselected"),b=o(),y=l();!p&&g&&g(u?void 0:d,s,{config:b,state:y}),w&&w(c?void 0:e,t,{config:b,state:y});const x=!p&&v;let C=!1;(function(){const e=l("popover");e&&(e.wrapper.style.display="none")})(),a("previousStep",s),a("previousElement",d),a("activeStep",t),a("activeElement",e);const k=()=>{if(l("__transitionCallback")!==k)return;const r=Date.now()-i,p=400-r<=200;t.popover&&p&&!C&&x&&(_(e,t),C=!0),o("animate")&&r<400?function(e,t,o,i){let r=l("__activeStagePosition");const s=r||o.getBoundingClientRect(),d=i.getBoundingClientRect();r={x:n(e,s.x,d.x-s.x,t),y:n(e,s.y,d.y-s.y,t),width:n(e,s.width,d.width-s.width,t),height:n(e,s.height,d.height-s.height,t)},h(r),a("__activeStagePosition",r)}(r,400,d,e):(m(e),f&&f(c?void 0:e,t,{config:o(),state:l()}),a("__transitionCallback",void 0),a("__previousStep",s),a("__previousElement",d),a("__activeStep",t),a("__activeElement",e)),window.requestAnimationFrame(k)};a("__transitionCallback",k),window.requestAnimationFrame(k),r(e),!x&&t.popover&&_(e,t),d.classList.remove("driver-active-element","driver-no-interaction"),d.removeAttribute("aria-haspopup"),d.removeAttribute("aria-expanded"),d.removeAttribute("aria-controls"),o("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}(i,e)}function g(){const e=l("__activeElement"),t=l("__activeStep");e&&(m(e),function(){const e=l("__activeStagePosition"),t=l("__overlaySvg");if(!e)return;if(!t)return void console.warn("No stage svg found.");const o=window.innerWidth,n=window.innerHeight;t.setAttribute("viewBox",`0 0 ${o} ${n}`)}(),S(e,t))}function b(){const e=l("__resizeTimeout");e&&window.cancelAnimationFrame(e),a("__resizeTimeout",window.requestAnimationFrame(g))}function y(e){var t;if(!l("isInitialized")||"Tab"!==e.key&&9!==e.keyCode)return;const o=l("__activeElement"),n=null==(t=l("popover"))?void 0:t.wrapper,r=i([...n?[n]:[],...o?[o]:[]]),s=r[0],d=r[r.length-1];if(e.preventDefault(),e.shiftKey){const e=r[r.indexOf(document.activeElement)-1]||d;null==e||e.focus()}else{const e=r[r.indexOf(document.activeElement)+1]||s;null==e||e.focus()}}function x(e){(o("allowKeyboardControl")??1)&&("Escape"===e.key?v("escapePress"):"ArrowRight"===e.key?v("arrowRightPress"):"ArrowLeft"===e.key&&v("arrowLeftPress"))}function C(e,t,o){const n=(t,n)=>{const i=t.target;e.contains(i)&&((!o||o(i))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()),null==n||n(t))};document.addEventListener("pointerdown",n,!0),document.addEventListener("mousedown",n,!0),document.addEventListener("pointerup",n,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("click",(e=>{n(e,t)}),!0)}function _(e,t){var n,s;let d=l("popover");d&&document.body.removeChild(d.wrapper),d=function(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const o=document.createElement("header");o.id="driver-popover-title",o.classList.add("driver-popover-title"),o.style.display="none",o.innerText="Popover Title";const n=document.createElement("div");n.id="driver-popover-description",n.classList.add("driver-popover-description"),n.style.display="none",n.innerText="Popover description is here";const i=document.createElement("button");i.type="button",i.classList.add("driver-popover-close-btn"),i.setAttribute("aria-label","Close"),i.innerHTML="&times;";const r=document.createElement("footer");r.classList.add("driver-popover-footer");const s=document.createElement("span");s.classList.add("driver-popover-progress-text"),s.innerText="";const d=document.createElement("span");d.classList.add("driver-popover-navigation-btns");const a=document.createElement("button");a.type="button",a.classList.add("driver-popover-prev-btn"),a.innerHTML="&larr; Previous";const l=document.createElement("button");return l.type="button",l.classList.add("driver-popover-next-btn"),l.innerHTML="Next &rarr;",d.appendChild(a),d.appendChild(l),r.appendChild(s),r.appendChild(d),e.appendChild(i),e.appendChild(t),e.appendChild(o),e.appendChild(n),e.appendChild(r),{wrapper:e,arrow:t,title:o,description:n,footer:r,previousButton:a,nextButton:l,closeButton:i,footerButtons:d,progress:s}}(),document.body.appendChild(d.wrapper);const{title:p,description:c,showButtons:u,disableButtons:m,showProgress:h,nextBtnText:w=o("nextBtnText")||"Next &rarr;",prevBtnText:f=o("prevBtnText")||"&larr; Previous",progressText:g=o("progressText")||"{current} of {total}"}=t.popover||{};d.nextButton.innerHTML=w,d.previousButton.innerHTML=f,d.progress.innerHTML=g,p?(d.title.innerText=p,d.title.style.display="block"):d.title.style.display="none",c?(d.description.innerHTML=c,d.description.style.display="block"):d.description.style.display="none";const b=u||o("showButtons"),y=h||o("showProgress")||!1,x=(null==b?void 0:b.includes("next"))||(null==b?void 0:b.includes("previous"))||y;d.closeButton.style.display=b.includes("close")?"block":"none",x?(d.footer.style.display="flex",d.progress.style.display=y?"block":"none",d.nextButton.style.display=b.includes("next")?"block":"none",d.previousButton.style.display=b.includes("previous")?"block":"none"):d.footer.style.display="none";const _=m||o("disableButtons")||[];null!=_&&_.includes("next")&&(d.nextButton.disabled=!0,d.nextButton.classList.add("driver-popover-btn-disabled")),null!=_&&_.includes("previous")&&(d.previousButton.disabled=!0,d.previousButton.classList.add("driver-popover-btn-disabled")),null!=_&&_.includes("close")&&(d.closeButton.disabled=!0,d.closeButton.classList.add("driver-popover-btn-disabled"));const k=d.wrapper;k.style.display="block",k.style.left="",k.style.top="",k.style.bottom="",k.style.right="",k.id="driver-popover-content",k.setAttribute("role","dialog"),k.setAttribute("aria-labelledby","driver-popover-title"),k.setAttribute("aria-describedby","driver-popover-description"),d.arrow.className="driver-popover-arrow";const E=(null==(n=t.popover)?void 0:n.popoverClass)||o("popoverClass")||"";k.className=`driver-popover ${E}`.trim(),C(d.wrapper,(n=>{var i,r,s;const d=n.target,a=(null==(i=t.popover)?void 0:i.onNextClick)||o("onNextClick"),p=(null==(r=t.popover)?void 0:r.onPrevClick)||o("onPrevClick"),c=(null==(s=t.popover)?void 0:s.onCloseClick)||o("onCloseClick");return d.classList.contains("driver-popover-next-btn")?a?a(e,t,{config:o(),state:l()}):v("nextClick"):d.classList.contains("driver-popover-prev-btn")?p?p(e,t,{config:o(),state:l()}):v("prevClick"):d.classList.contains("driver-popover-close-btn")?c?c(e,t,{config:o(),state:l()}):v("closeClick"):void 0}),(e=>!(null!=d&&d.description.contains(e))&&!(null!=d&&d.title.contains(e))&&e.className.includes("driver-popover"))),a("popover",d);const L=(null==(s=t.popover)?void 0:s.onPopoverRender)||o("onPopoverRender");L&&L(d,{config:o(),state:l()}),S(e,t),r(k);const T=i([k,...e.classList.contains("driver-dummy-element")?[]:[e]]);T.length>0&&T[0].focus()}function k(){const e=l("popover");if(null==e||!e.wrapper)return;const t=e.wrapper.getBoundingClientRect(),n=o("stagePadding")||0,i=o("popoverOffset")||0;return{width:t.width+n+i,height:t.height+n+i,realWidth:t.width,realHeight:t.height}}function E(e,t){const{elementDimensions:o,popoverDimensions:n,popoverPadding:i,popoverArrowDimensions:r}=t;return"start"===e?Math.max(Math.min(o.top-i,window.innerHeight-n.realHeight-r.width),r.width):"end"===e?Math.max(Math.min(o.top-(null==n?void 0:n.realHeight)+o.height+i,window.innerHeight-(null==n?void 0:n.realHeight)-r.width),r.width):"center"===e?Math.max(Math.min(o.top+o.height/2-(null==n?void 0:n.realHeight)/2,window.innerHeight-(null==n?void 0:n.realHeight)-r.width),r.width):0}function L(e,t){const{elementDimensions:o,popoverDimensions:n,popoverPadding:i,popoverArrowDimensions:r}=t;return"start"===e?Math.max(Math.min(o.left-i,window.innerWidth-n.realWidth-r.width),r.width):"end"===e?Math.max(Math.min(o.left-(null==n?void 0:n.realWidth)+o.width+i,window.innerWidth-(null==n?void 0:n.realWidth)-r.width),r.width):"center"===e?Math.max(Math.min(o.left+o.width/2-(null==n?void 0:n.realWidth)/2,window.innerWidth-(null==n?void 0:n.realWidth)-r.width),r.width):0}function S(e,t){const n=l("popover");if(!n)return;const{align:i="start",side:r="left"}=(null==t?void 0:t.popover)||{},s=i,d="driver-dummy-element"===e.id?"over":r,a=o("stagePadding")||0,p=k(),c=n.arrow.getBoundingClientRect(),u=e.getBoundingClientRect(),v=u.top-p.height;let m=v>=0;const h=window.innerHeight-(u.bottom+p.height);let w=h>=0;const f=u.left-p.width;let g=f>=0;const b=window.innerWidth-(u.right+p.width);let y=b>=0;const x=!(m||w||g||y);let C=d;if("top"===d&&m?y=g=w=!1:"bottom"===d&&w?y=g=m=!1:"left"===d&&g?y=m=w=!1:"right"===d&&y&&(g=m=w=!1),"over"===d){const e=window.innerWidth/2-p.realWidth/2,t=window.innerHeight/2-p.realHeight/2;n.wrapper.style.left=`${e}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto"}else if(x){const e=window.innerWidth/2-(null==p?void 0:p.realWidth)/2,t=10;n.wrapper.style.left=`${e}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${t}px`,n.wrapper.style.top="auto"}else if(g){const e=Math.min(f,window.innerWidth-(null==p?void 0:p.realWidth)-c.width),t=E(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:a,popoverArrowDimensions:c});n.wrapper.style.left=`${e}px`,n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",C="left"}else if(y){const e=Math.min(b,window.innerWidth-(null==p?void 0:p.realWidth)-c.width),t=E(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:a,popoverArrowDimensions:c});n.wrapper.style.right=`${e}px`,n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",C="right"}else if(m){const e=Math.min(v,window.innerHeight-p.realHeight-c.width);let t=L(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:a,popoverArrowDimensions:c});n.wrapper.style.top=`${e}px`,n.wrapper.style.left=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",C="top"}else if(w){const e=Math.min(h,window.innerHeight-(null==p?void 0:p.realHeight)-c.width);let t=L(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:a,popoverArrowDimensions:c});n.wrapper.style.left=`${t}px`,n.wrapper.style.bottom=`${e}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",C="bottom"}x?n.arrow.classList.add("driver-popover-arrow-none"):function(e,t,o){const n=l("popover");if(!n)return;const i=o.getBoundingClientRect(),r=k(),s=n.arrow,d=r.width,a=window.innerWidth,p=i.width,c=i.left,u=r.height,v=window.innerHeight,m=i.top,h=i.height;s.className="driver-popover-arrow";let w=t,f=e;"top"===t?(c+p<=0?(w="right",f="end"):c+p-d<=0&&(w="top",f="start"),c>=a?(w="left",f="end"):c+d>=a&&(w="top",f="end")):"bottom"===t?(c+p<=0?(w="right",f="start"):c+p-d<=0&&(w="bottom",f="start"),c>=a?(w="left",f="start"):c+d>=a&&(w="bottom",f="end")):"left"===t?(m+h<=0?(w="bottom",f="end"):m+h-u<=0&&(w="left",f="start"),m>=v?(w="top",f="end"):m+u>=v&&(w="left",f="end")):"right"===t&&(m+h<=0?(w="bottom",f="start"):m+h-u<=0&&(w="right",f="start"),m>=v?(w="top",f="start"):m+u>=v&&(w="right",f="end")),w?(s.classList.add(`driver-popover-arrow-side-${w}`),s.classList.add(`driver-popover-arrow-align-${f}`)):s.classList.add("driver-popover-arrow-none")}(s,C,e)}const T=e=>{const t=jQuery(".superbaddons-admindashboard-modal-wrapper"),o=t.find(".superbaddons-admindashboard-modal-overlay"),n=t.find(".superbaddons-admindashboard-modal-close-button"),i=t.find(".superbaddons-admindashboard-modal-confirm-btn"),r=t.find(".superbaddons-admindashboard-modal-cancel-btn"),s=t.find(".superbaddons-admindashboard-modal-ok-btn"),d=t.find(".superbaddons-admindashboard-modal-title"),a=t.find(".superbaddons-admindashboard-modal-content"),l=t.find(".superbaddons-admindashboard-modal-header-spinner"),p=t.find(".superbaddons-admindashboard-modal-footer"),c=t.find(".superbaddons-element-separator"),u=e.title||!1,v=e.content||!1,m=e.confirmCallback||!1,h=e.cancelCallback||!1,w=e.awaitConfirmCallback||!1,f=e.stopCloseOnConfirm||!1,g=e.preventClosing||!1,b=e.isLoader||!1,y=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i.off(),r.off(),n.off(),o.off(),s.off(),jQuery(window).off("keydown.superbaddons-admin-modal"),e?t.hide():t.fadeOut("fast")};return((e,u,v,m,h,w,g)=>{if(w||(jQuery(window).on("keydown.superbaddons-admin-modal",(e=>{27==(e.keyCode||e.which)&&y()})),n.click((()=>{y()})),o.click((()=>{y()}))),g)return l.show(),d.hide(),p.hide(),n.hide(),c.hide(),a.text(u),void t.fadeIn("fast");l.hide(),p.show(),d.show(),n.show(),c.show(),e&&d.text(e),u&&(Array.isArray(u)?(a.text(""),u.map((e=>{const t=jQuery("<div class='superbaddons-admindashboard-modal-content-item'></div>"),o=jQuery("<div class='superbaddons-admindashboard-modal-content-item-title'></div>"),n=jQuery("<div class='superbaddons-admindashboard-modal-content-item-content'></div>"),i=jQuery("<img class='superbaddons-admindashboard-modal-content-item-icon' />");superbaddonssettings_g&&(i.attr("src",e.shared?superbaddonssettings_g.modal.view_logs.icon_shared:superbaddonssettings_g.modal.view_logs.icon_unshared),i.attr("title",e.shared?superbaddonssettings_g.modal.view_logs.shared_title:superbaddonssettings_g.modal.view_logs.unshared_title));const r=new Date(1e3*e.time),s=r.toLocaleDateString()+" "+r.toLocaleTimeString();o.text(s+" (v."+e.version+"): "+e.title),o.prepend(i),n.text(e.stack),t.append(o),t.append(n),a.append(t)}))):a.text(u)),v?(i.show(),r.show(),s.hide(),i.click((async()=>{h?await v():v(),f||y()}))):(i.hide(),r.hide(),s.show(),s.click((()=>{f||y()}))),m?r.click((()=>{m(),y()})):r.click((()=>{y()})),t.fadeIn("fast")})(u,v,m,h,w,g,b),y};function P(e,t,o){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,o)}function A(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,B(e,t,"get"))}function $(e,t,o){return function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}}(e,B(e,t,"set"),o),o}function B(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}const{__:H}=wp.i18n,I="superbaddons-guided-tour-popover-next-hidden",W="superbaddons-guided-tour-dummy-element";var M=new WeakMap,D=new WeakMap,N=new WeakMap;class j{constructor(){P(this,M,{writable:!0,value:void 0}),P(this,D,{writable:!0,value:void 0}),P(this,N,{writable:!0,value:void 0});const e=this;$(e,D,[]),$(e,M,function(e={}){function n(){o("allowClose")&&h()}function i(){const e=l("activeIndex"),t=o("steps")||[];if(typeof e>"u")return;const n=e+1;t[n]?m(n):h()}function r(){const e=l("activeIndex"),t=o("steps")||[];if(typeof e>"u")return;const n=e-1;t[n]?m(n):h()}function s(){var e;if(l("__transitionCallback"))return;const t=l("activeIndex"),n=l("__activeStep"),i=l("__activeElement");if(typeof t>"u"||typeof n>"u"||typeof l("activeIndex")>"u")return;const s=(null==(e=n.popover)?void 0:e.onPrevClick)||o("onPrevClick");if(s)return s(i,n,{config:o(),state:l()});r()}function d(){var e;if(l("__transitionCallback"))return;const t=l("activeIndex"),n=l("__activeStep"),r=l("__activeElement");if(typeof t>"u"||typeof n>"u")return;const s=(null==(e=n.popover)?void 0:e.onNextClick)||o("onNextClick");if(s)return s(r,n,{config:o(),state:l()});i()}function v(){l("isInitialized")||(a("isInitialized",!0),document.body.classList.add("driver-active",o("animate")?"driver-fade":"driver-simple"),window.addEventListener("keyup",x,!1),window.addEventListener("keydown",y,!1),window.addEventListener("resize",b),window.addEventListener("scroll",b),u("overlayClick",n),u("escapePress",n),u("arrowLeftPress",s),u("arrowRightPress",d))}function m(e=0){var t,n,i,r,s,d,l,p;const c=o("steps");if(!c)return console.error("No steps to drive through"),void h();if(!c[e])return void h();a("__activeOnDestroyed",document.activeElement),a("activeIndex",e);const u=c[e],v=c[e+1],w=c[e-1],g=(null==(t=u.popover)?void 0:t.doneBtnText)||o("doneBtnText")||"Done",b=o("allowClose"),y=typeof(null==(n=u.popover)?void 0:n.showProgress)<"u"?null==(i=u.popover)?void 0:i.showProgress:o("showProgress"),x=((null==(r=u.popover)?void 0:r.progressText)||o("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${e+1}`).replace("{{total}}",`${c.length}`),C=(null==(s=u.popover)?void 0:s.showButtons)||o("showButtons"),_=["next","previous",...b?["close"]:[]].filter((e=>!(null!=C&&C.length)||C.includes(e))),k=(null==(d=u.popover)?void 0:d.onNextClick)||o("onNextClick"),E=(null==(l=u.popover)?void 0:l.onPrevClick)||o("onPrevClick"),L=(null==(p=u.popover)?void 0:p.onCloseClick)||o("onCloseClick");f({...u,popover:{showButtons:_,nextBtnText:v?void 0:g,disableButtons:[...w?[]:["previous"]],showProgress:y,progressText:x,onNextClick:k||(()=>{v?m(e+1):h()}),onPrevClick:E||(()=>{m(e-1)}),onCloseClick:L||(()=>{h()}),...(null==u?void 0:u.popover)||{}}})}function h(e=!0){const t=l("__activeElement"),n=l("__activeStep"),i=l("__activeOnDestroyed"),r=o("onDestroyStarted");if(e&&r)return void r(t&&"driver-dummy-element"!==(null==t?void 0:t.id)?t:void 0,n,{config:o(),state:l()});const s=(null==n?void 0:n.onDeselected)||o("onDeselected"),d=o("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),window.removeEventListener("keyup",x),window.removeEventListener("resize",b),window.removeEventListener("scroll",b),function(){var e;const t=l("popover");t&&(null==(e=t.wrapper.parentElement)||e.removeChild(t.wrapper))}(),function(){var e;null==(e=document.getElementById("driver-dummy-element"))||e.remove(),document.querySelectorAll(".driver-active-element").forEach((e=>{e.classList.remove("driver-active-element","driver-no-interaction"),e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls")}))}(),function(){const e=l("__overlaySvg");e&&e.remove()}(),c={},p(),t&&n){const e="driver-dummy-element"===t.id;s&&s(e?void 0:t,n,{config:o(),state:l()}),d&&d(e?void 0:t,n,{config:o(),state:l()})}i&&i.focus()}return t(e),{isActive:()=>l("isInitialized")||!1,refresh:b,drive:(e=0)=>{v(),m(e)},setConfig:t,setSteps:e=>{p(),t({...o(),steps:e})},getConfig:o,getState:l,getActiveIndex:()=>l("activeIndex"),isFirstStep:()=>0===l("activeIndex"),isLastStep:()=>{const e=o("steps")||[],t=l("activeIndex");return void 0!==t&&t===e.length-1},getActiveStep:()=>l("activeStep"),getActiveElement:()=>l("activeElement"),getPreviousElement:()=>l("previousElement"),getPreviousStep:()=>l("previousStep"),moveNext:i,movePrevious:r,moveTo:function(e){(o("steps")||[])[e]?m(e):h()},hasNextStep:()=>{const e=o("steps")||[],t=l("activeIndex");return void 0!==t&&e[t+1]},hasPreviousStep:()=>{const e=o("steps")||[],t=l("activeIndex");return void 0!==t&&e[t-1]},highlight:e=>{v(),f({...e,popover:e.popover?{showButtons:[],showProgress:!1,progressText:"",...e.popover}:void 0})},destroy:()=>{h(!1)}}}({popoverClass:"superbaddons-guided-tour-popover",showProgress:!0,allowKeyboardControl:!1,onDestroyStarted:()=>{A(e,M).hasNextStep()?T({stopCloseOnConfirm:!0,title:H("Close Tutorial?","superbadons"),content:H("Closing the tutorial will close this window and end the tutorial.","superbadons"),confirmCallback:function(){e.EndTour()}}):e.EndTour()}}))}onEndTour(e){$(this,N,e)}EndTour(){if(A(this,N))return T({preventClosing:!0,isLoader:!0,content:H("Closing Tutorial...","superbaddons")}),void A(this,N).call(this);A(this,M).destroy()}StartTour(){A(this,M).setSteps(A(this,D)),A(this,M).drive()}AddStep(e){const t=A(this,D).push(e),o=t-1;return A(this,D)[t-1].stepIndex=o,o}AddSteps(e){for(const t in e)e[t].stepIndex=this.AddStep(e[t]);return e}NextStep(){A(this,M).moveNext()}PreviousStep(){A(this,M).movePrevious()}GoToStep(e){A(this,M).drive(e.stepIndex)}Highlight(e){A(this,M).highlight(e)}}const R={},O=(e,t,o)=>{document.addEventListener(t,o),R[t]||(R[t]=[]),z(e),R[t].push({id:e,callback:o})},z=e=>{Object.keys(R).forEach((t=>{R[t].forEach((o=>{o.id===e&&document.removeEventListener(t,o.callback)}))}))},{__:Q}=wp.i18n;jQuery(document).ready((function(e){const t=new j,o="click.superbaddonsguidedtour",n=".superb-addons-template-library-page-frame .superb-addons-template-library-template-item .superb-addons-template-library-template-item-insert-btn";t.onEndTour((async()=>{T({preventClosing:!0,isLoader:!0,content:Q("Closing Tutorial...","superbaddons")}),await async function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const i=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","X-WP-Nonce":t},body:"action="+o+n});return 200!==i.status?{success:!1,text:"Unknown error occured. Please contact support if the issue persists."}:i.json()}(superbaddonstroubleshooting_g.rest.base+superbaddonstroubleshooting_g.rest.namespace+superbaddonstroubleshooting_g.rest.routes.tutorial,superbaddonstroubleshooting_g.rest.nonce,"cleanup-elementor-tour-page","&tour-nonce="+superbaddonstroubleshooting_g.rest.tour_nonce),window.close()})),window.addEventListener("beforeunload",(function(e){t.EndTour()}));const i={element:!1},r={IgnoreCloseEvent:!1,LibraryLoaded:!1},s={Welcome:{popover:{title:Q("Welcome to Superb Addons","superbadons"),description:Q("Let's get you started with a Superb Addons for Elementor.","superbadons"),side:"left",align:"start",onPrevClick:()=>{l()},onNextClick:()=>{const e=jQuery("#elementor-preview-iframe").contents().find("#superb-elementor-library-btn");e[0].scrollIntoView(),a(jQuery("#elementor-preview-iframe"),e),t.NextStep()}}},LibraryButton:{element:`.${W}`,popover:{title:Q("Sections","superbadons"),description:Q("To start inserting sections, use the Superb Addons button. Let's go ahead and click it now.","superbadons"),side:"bottom",align:"start",popoverClass:I}},LibraryOpened:{popover:{title:Q("Section Library","superbadons"),description:Q("You've done it! You're now all set to browse and insert sections.","superbadons"),side:"top",align:"start",popoverClass:I,onPrevClick:()=>{e(".superb-addons-template-library-close-btn").click()}},onHighlightStarted:()=>{if(r.LibraryLoaded)return;const e="guided-tour-library-loaded";O(e,"superbaddons-library-loaded",(()=>{setTimeout((()=>{d()}),100),r.LibraryLoaded=!0,z(e)}))},onHighlighted:()=>{r.LibraryLoaded&&d()}},PatternExample:{element:".superb-addons-template-library-page-frame .superb-addons-template-library-template-item",popover:{title:Q("Pattern Library","superbadons"),description:Q("You'll find a variety of patterns to choose from, just like the one shown here.","superbadons"),side:"bottom",align:"start"},onHighlightStarted:()=>{e(n).off(o),e(n).on(o,(function(){setTimeout((()=>{t.Highlight({element:".superb-addons-template-library-page-frame .superb-addons-loading .superb-addons-loader-wrapper"})}),10),e(this).off(o)}));const i="guided-tour-section-inserted";O(i,"superbaddons-library-inserted",(()=>{r.IgnoreCloseEvent=!0,setTimeout((()=>{const e=window.elementor.elements.models[window.elementor.elements.models.length-1].id,o=jQuery("#elementor-preview-iframe").contents().find(".elementor-element-"+e);a(jQuery("#elementor-preview-iframe"),o),t.GoToStep(s.SectionAdded),z(i)}),100)}))}},InsertSection:{element:n,popover:{title:Q("Section Library","superbadons"),description:Q('Let\'s try inserting this section. Click the "Insert" button to add it.',"superbadons"),side:"bottom",align:"start",popoverClass:I}},SectionAdded:{element:`.${W}`,popover:{title:Q("Sections","superbadons"),description:Q("You've just inserted a section. Good job! Sections can be edited to match your preferences.","superbadons"),side:"top",align:"start",onPrevClick:()=>{l(),t.GoToStep(s.Welcome)}},onHighlightStarted:()=>{r.IgnoreCloseEvent=!1}},Complete:{popover:{title:Q("Superb Addons","superbadons"),description:Q("That concludes our tour. You can now explore the rest of the plugin. Enjoy!","superbadons"),side:"top",align:"start"}}},d=()=>{e(`.${I}`).removeClass(I),e(".superb-addons-template-library-template-item-preview-btn").off(),e(".superb-addons-template-library-template-item-preview-btn").css({opacity:"0.3",cursor:"not-allowed"})};O("guided-tour-library-opened","superbaddons-library-opened",(()=>{t.GoToStep(s.LibraryOpened)})),O("guided-tour-library-closed","superbaddons-library-closed",(()=>{r.IgnoreCloseEvent||(r.IgnoreCloseEvent=!1,t.GoToStep(s.Welcome))}));const a=(t,n)=>{l(),i.element=n;const r=jQuery("<div></div>").appendTo("#elementor-preview-responsive-wrapper").addClass(W).css({pointerEvents:"none",position:"absolute",top:i.element.offset().top-t[0].contentWindow.document.documentElement.scrollTop,left:i.element.offset().left,width:i.element.outerWidth(),height:i.element.outerHeight(),"z-index":999999});e(window).on("resize.superbaddonstour",(function(){r.css({top:i.element.position().top-t[0].contentWindow.document.documentElement.scrollTop,left:i.element.offset().left})})),i.element.on(o,(function(){l()})),e("#elementor-preview-iframe").css("pointer-events","auto")},l=()=>{i.element&&(i.element.off(o),i.element=!1),e(`.${W}`).remove(),e("#elementor-preview-iframe").css("pointer-events",""),e(window).off("resize.superbaddonstour")};window.elementor.on("document:loaded",(function(){t.AddSteps(s),t.StartTour()}))}))})();