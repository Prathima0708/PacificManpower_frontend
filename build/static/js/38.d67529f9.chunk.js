(this.webpackJsonpPacificManpower=this.webpackJsonpPacificManpower||[]).push([[38],{147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=n(148);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=r(a);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?a.useLayoutEffect:a.useEffect;function h(e){var t=a.useRef(e);return f((function(){t.current=e})),a.useCallback((function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.current.apply(void 0,n)}),[])}var p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},b=function(e){var t=a.useMemo((function(){return l(l({},m),e)}),[e]),n=t.ref,r=t.startOnMount,s=t.enableReinitialize,o=t.delay,u=t.onEnd,c=t.onStart,f=t.onPauseResume,b=t.onReset,j=t.onUpdate,g=d(t,p),O=a.useRef(),x=a.useRef(),v=a.useRef(!1),V=h((function(){return function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,s=t.easingFn,o=t.end,l=t.formattingFn,u=t.numerals,c=t.prefix,d=t.separator,f=t.start,h=t.suffix,p=t.useEasing;return new i.CountUp(e,o,{startVal:f,duration:r,decimal:n,decimalPlaces:a,easingFn:s,formattingFn:l,numerals:u,separator:d,prefix:c,suffix:h,useEasing:p,useGrouping:!!d})}("string"===typeof n?n:n.current,g)})),y=h((function(e){var t=O.current;if(t&&!e)return t;var n=V();return O.current=n,n})),w=h((function(){var e=function(){return y(!0).start((function(){null===u||void 0===u||u({pauseResume:E,reset:N,start:P,update:F})}))};o&&o>0?x.current=setTimeout(e,1e3*o):e(),null===c||void 0===c||c({pauseResume:E,reset:N,update:F})})),E=h((function(){y().pauseResume(),null===f||void 0===f||f({reset:N,start:P,update:F})})),N=h((function(){x.current&&clearTimeout(x.current),y().reset(),null===b||void 0===b||b({pauseResume:E,start:P,update:F})})),F=h((function(e){y().update(e),null===j||void 0===j||j({pauseResume:E,reset:N,start:P})})),P=h((function(){N(),w()})),R=h((function(e){r&&(e&&N(),w())}));return a.useEffect((function(){v.current?s&&R(!0):(v.current=!0,R())}),[s,v,R,o,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),a.useEffect((function(){return function(){N()}}),[N]),{start:P,pauseResume:E,reset:N,update:F,getCountUp:y}},j=["className","redraw","containerProps","children","style"];t.default=function(e){var t=e.className,n=e.redraw,i=e.containerProps,r=e.children,o=e.style,u=d(e,j),f=s.default.useRef(null),p=s.default.useRef(!1),m=b(l(l({},u),{},{ref:f,startOnMount:"function"!==typeof r||0===e.delay,enableReinitialize:!1})),g=m.start,O=m.reset,x=m.update,v=m.pauseResume,V=m.getCountUp,y=h((function(){g()})),w=h((function(t){e.preserveValue||O(),x(t)})),E=h((function(){"function"!==typeof e.children||f.current instanceof Element?V():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));a.useEffect((function(){E()}),[E]),a.useEffect((function(){p.current&&w(e.end)}),[e.end,w]);var N=n&&e;return a.useEffect((function(){n&&p.current&&y()}),[y,n,N]),a.useEffect((function(){!n&&p.current&&y()}),[y,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),a.useEffect((function(){p.current=!0}),[]),"function"===typeof r?r({countUpRef:f,start:g,reset:O,update:x,pauseResume:v,getCountUp:V}):s.default.createElement("span",c({className:t,ref:f,style:o},i),e.start?V().formattingFn(e.start):"")},t.useCountUp=b},148:function(e,t,n){"use strict";n.r(t),n.d(t,"CountUp",(function(){return i}));var a=function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.target=e,this.endVal=t,this.options=n,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(t/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var t,n,a,r,s=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],a=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){r="";for(var l=0,u=n.length;l<u;++l)0!==l&&l%3==0&&(r=i.options.separator+r),r=n[u-l-1]+r;n=r}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),s+i.options.prefix+n+a+i.options.suffix},this.easeOutExpo=function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},this.options=a(a({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: "+e,null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},557:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(4),s=n.p+"static/media/img-01.5fe01149.jpg",o=n(2),l=function(){return Object(o.jsx)(i.a.Fragment,{children:Object(o.jsx)("section",{className:"section overflow-hidden",children:Object(o.jsx)(r.h,{children:Object(o.jsxs)(r.z,{className:"align-items-center g-0",children:[Object(o.jsx)(r.f,{lg:6,children:Object(o.jsxs)("div",{className:"section-title me-lg-5",children:[Object(o.jsx)("p",{className:"text-muted",children:"Pacific Manpower was formed in 2008 out of the growth in resource projects and the economic conditions with in Papua New Guinea, wishing to build a nationwide HR company offering the best skills from PNG Nationals, Other Country Nationals (OCNs) and Expatriates. We are proud to be 100% PNG Owned."}),Object(o.jsx)("p",{className:"text-muted",children:"Our sister company, TawapKamen Investments was formed in 1989 and some 22 years later continues to be a major supplier of Skills to OTML and operates a large scale Security, construction and Engineering Business at Ok Tedi and also operates TKI Manpower which is one of the largest suppliers of skilled manpower to the mine."}),Object(o.jsxs)(r.z,{mt:4,pt:2,children:[Object(o.jsxs)(r.f,{md:12,children:[Object(o.jsx)("p",{className:"title mb-4 text-decoration-underline fs-3",children:"OUR COMPANY MISSION IS:"}),Object(o.jsxs)("ul",{className:"list-unstyled about-list text-muted mb-0 mb-md-3",children:[Object(o.jsxs)("li",{children:[" ","To provide Quality and Efficient Labour Hire Services to meet the needs and demands of the Mining, the Petroleum and other industries in Papua New Guinea."]}),Object(o.jsxs)("li",{children:[" ","To foster relationships with resource area landowners under formal partnership arrangements for long term harmonious business relations."]}),Object(o.jsxs)("li",{children:[" ","To provide efficient recruitment, work permit, visa and immigration services to all the industries."]}),Object(o.jsxs)("li",{children:[" ","We operate a state of art specialist HR database program to manage over 15000 plus applicants from our centrally located Head office in Port Moresby. We have branches in Lae, Lihir and Tabubil."]})]})]}),Object(o.jsx)(r.f,{md:12,children:Object(o.jsxs)("ul",{className:"list-unstyled about-list text-muted",children:[Object(o.jsxs)("li",{children:[" ","Our database includes highly skilled Tradesman, professionals and Managers from Papua New Guinea, Australia, New Zealand, Fiji, Philippines, India and other nations."]}),Object(o.jsxs)("li",{children:[" ","We offer a total HR solution to our clients offering Manpower, Recruitment, Immigration and Payroll services."]}),Object(o.jsxs)("li",{children:[" ","We operate successful Joint venture arrangements at various resource locations throughout PNG."]}),Object(o.jsxs)("li",{children:[" ","Our Teamare client focused and we tailor our services to suit you."]}),Object(o.jsx)("li",{children:"For our applicants we endeavour to act professionally in all our dealings"})]})})]})]})}),Object(o.jsx)(r.f,{lg:6,children:Object(o.jsx)("div",{className:"about-img  mt-lg-0",children:Object(o.jsx)("img",{src:s,alt:"",className:"img-fluid rounded"})})})]})})})})},u=n(5),c=function(){return Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("section",{className:"page-title-box",children:Object(o.jsx)(r.h,{children:Object(o.jsx)(r.z,{className:"justify-content-center",children:Object(o.jsx)(r.f,{md:6,children:Object(o.jsxs)("div",{className:"text-center text-white",children:[Object(o.jsx)("h3",{className:"mb-4",children:"About Us"}),Object(o.jsx)("div",{className:"page-next",children:Object(o.jsx)("nav",{className:"d-inline-block","aria-label":"breadcrumb text-center",children:Object(o.jsxs)("ol",{className:"breadcrumb justify-content-center",children:[Object(o.jsx)("li",{className:"breadcrumb-item",children:Object(o.jsx)(u.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"breadcrumb-item",children:Object(o.jsx)(u.b,{to:"#",children:"Company"})}),Object(o.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:" About Us "})]})})})]})})})})}),Object(o.jsx)("div",{className:"position-relative",children:Object(o.jsx)("div",{className:"shape",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 250",children:Object(o.jsx)("path",{fill:"#FFFFFF",fillOpacity:"1",d:"M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"})})})})]})},d=(n(147),n(142),n(8),n(3),n.p,n.p,n.p,n.p,n(54)),f=n.n(d);t.default=function(){return Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)(f.a,{children:Object(o.jsx)("title",{children:"About Us"})}),Object(o.jsx)(c,{}),Object(o.jsx)(l,{})]})}}}]);
//# sourceMappingURL=38.d67529f9.chunk.js.map