(this.webpackJsonpPacificManpower=this.webpackJsonpPacificManpower||[]).push([[39],{147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(148);function s(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=s(i);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function p(e){var t=i.useRef(e);return m((function(){t.current=e})),i.useCallback((function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},g=function(e){var t=i.useMemo((function(){return o(o({},f),e)}),[e]),n=t.ref,s=t.startOnMount,a=t.enableReinitialize,c=t.delay,l=t.onEnd,u=t.onStart,m=t.onPauseResume,g=t.onReset,b=t.onUpdate,j=d(t,h),x=i.useRef(),O=i.useRef(),N=i.useRef(!1),v=p((function(){return function(e,t){var n=t.decimal,i=t.decimals,s=t.duration,a=t.easingFn,c=t.end,o=t.formattingFn,l=t.numerals,u=t.prefix,d=t.separator,m=t.start,p=t.suffix,h=t.useEasing;return new r.CountUp(e,c,{startVal:m,duration:s,decimal:n,decimalPlaces:i,easingFn:a,formattingFn:o,numerals:l,separator:d,prefix:u,suffix:p,useEasing:h,useGrouping:!!d})}("string"===typeof n?n:n.current,j)})),I=p((function(e){var t=x.current;if(t&&!e)return t;var n=v();return x.current=n,n})),y=p((function(){var e=function(){return I(!0).start((function(){null===l||void 0===l||l({pauseResume:V,reset:E,start:P,update:w})}))};c&&c>0?O.current=setTimeout(e,1e3*c):e(),null===u||void 0===u||u({pauseResume:V,reset:E,update:w})})),V=p((function(){I().pauseResume(),null===m||void 0===m||m({reset:E,start:P,update:w})})),E=p((function(){O.current&&clearTimeout(O.current),I().reset(),null===g||void 0===g||g({pauseResume:V,start:P,update:w})})),w=p((function(e){I().update(e),null===b||void 0===b||b({pauseResume:V,reset:E,start:P})})),P=p((function(){E(),y()})),F=p((function(e){s&&(e&&E(),y())}));return i.useEffect((function(){N.current?a&&F(!0):(N.current=!0,F())}),[a,N,F,c,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),i.useEffect((function(){return function(){E()}}),[E]),{start:P,pauseResume:V,reset:E,update:w,getCountUp:I}},b=["className","redraw","containerProps","children","style"];t.default=function(e){var t=e.className,n=e.redraw,r=e.containerProps,s=e.children,c=e.style,l=d(e,b),m=a.default.useRef(null),h=a.default.useRef(!1),f=g(o(o({},l),{},{ref:m,startOnMount:"function"!==typeof s||0===e.delay,enableReinitialize:!1})),j=f.start,x=f.reset,O=f.update,N=f.pauseResume,v=f.getCountUp,I=p((function(){j()})),y=p((function(t){e.preserveValue||x(),O(t)})),V=p((function(){"function"!==typeof e.children||m.current instanceof Element?v():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){V()}),[V]),i.useEffect((function(){h.current&&y(e.end)}),[e.end,y]);var E=n&&e;return i.useEffect((function(){n&&h.current&&I()}),[I,n,E]),i.useEffect((function(){!n&&h.current&&I()}),[I,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),i.useEffect((function(){h.current=!0}),[]),"function"===typeof s?s({countUpRef:m,start:j,reset:x,update:O,pauseResume:N,getCountUp:v}):a.default.createElement("span",u({className:t,ref:m,style:c},r),e.start?v().formattingFn(e.start):"")},t.useCountUp=g},148:function(e,t,n){"use strict";n.r(t),n.d(t,"CountUp",(function(){return r}));var i=function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=function(){function e(e,t,n){var r=this;this.target=e,this.endVal=t,this.options=n,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(e){r.startTime||(r.startTime=e);var t=e-r.startTime;r.remaining=r.duration-t,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(t,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(t,r.startVal,r.endVal-r.startVal,r.duration):r.countDown?r.frameVal=r.startVal-(r.startVal-r.endVal)*(t/r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(t/r.duration),r.countDown?r.frameVal=r.frameVal<r.endVal?r.endVal:r.frameVal:r.frameVal=r.frameVal>r.endVal?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),t<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(e){var t,n,i,s,a=e<0?"-":"";t=Math.abs(e).toFixed(r.options.decimalPlaces);var c=(t+="").split(".");if(n=c[0],i=c.length>1?r.options.decimal+c[1]:"",r.options.useGrouping){s="";for(var o=0,l=n.length;o<l;++o)0!==o&&o%3==0&&(s=r.options.separator+s),s=n[l-o-1]+s;n=s}return r.options.numerals&&r.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return r.options.numerals[+e]})),i=i.replace(/[0-9]/g,(function(e){return r.options.numerals[+e]}))),a+r.options.prefix+n+i+r.options.suffix},this.easeOutExpo=function(e,t,n,i){return n*(1-Math.pow(2,-10*e/i))*1024/1023+t},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: "+e,null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},566:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),s=n(4),a=n(5),c=n(2),o=function(){return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)("section",{className:"page-title-box",children:Object(c.jsx)(s.h,{children:Object(c.jsx)(s.z,{className:"justify-content-center",children:Object(c.jsx)(s.f,{md:6,children:Object(c.jsxs)("div",{className:"text-center text-white",children:[Object(c.jsx)("h3",{className:"mb-4",children:"Pricing"}),Object(c.jsx)("div",{className:"page-next",children:Object(c.jsx)(s.s,{className:"d-inline-block","aria-label":"breadcrumb text-center",children:Object(c.jsxs)("ol",{className:"breadcrumb justify-content-center",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)(a.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)(a.b,{to:"#",children:"Company"})}),Object(c.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:" Pricing "})]})})})]})})})})}),Object(c.jsx)("div",{className:"position-relative",style:{zIndex:1},children:Object(c.jsx)("div",{className:"shape",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 250",children:Object(c.jsx)("path",{fill:"#FFFFFF",fillOpacity:"1",d:"M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"})})})})]})},l=n(142),u=function(){return Object(c.jsx)(r.a.Fragment,{children:Object(c.jsx)("section",{className:"section",children:Object(c.jsxs)(s.h,{children:[Object(c.jsx)(s.z,{className:"justify-content-center",children:Object(c.jsx)(s.f,{lg:6,children:Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("span",{className:"badge bg-soft-warning  fs-15 mb-2",children:"Choose Your Plan"}),Object(c.jsx)("h3",{children:"Save up to 15%"}),Object(c.jsx)("p",{className:"text-muted",children:"The faster, most seamless CI & development you'll find anywhere."})]})})}),Object(c.jsx)(s.z,{children:[{id:1,pricingIcon:"uim-telegram-alt",pricingName:"Starter",pricingPrice:"$35.99",pricingsuccessclass:"btn-soft-primary",pricingDetails:[{id:1,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Unlimited file recovery"},{id:2,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Professional reports"},{id:3,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Sell on marketplaces"},{id:4,pricingInnerClassName:"pricing-item text-decoration-line-through",pricingInnerIcon:"mdi mdi-close-thick bg-soft-muted me-2",pricingInnerText:"Unlimited Builds"},{id:5,pricingInnerClassName:"pricing-item text-decoration-line-through",pricingInnerIcon:"mdi mdi-close-thick bg-soft-muted me-2",pricingInnerText:"Job displayed for 30 days"},{id:6,pricingInnerClassName:"pricing-item text-decoration-line-through",pricingInnerIcon:"mdi mdi-close-thick bg-soft-muted me-2",pricingInnerText:"Premium Support 24/7"}]},{id:2,pricingIcon:"uim-rocket",pricingName:"Professional",pricingPrice:"$49.99",pricingsuccessclass:"btn-primary",pricingDetails:[{id:1,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Unlimited file recovery"},{id:2,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Professional reports"},{id:3,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Sell on marketplaces"},{id:4,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Unlimited Builds"},{id:5,pricingInnerClassName:"pricing-item text-decoration-line-through",pricingInnerIcon:"mdi mdi-close-thick bg-soft-muted me-2",pricingInnerText:"Job displayed for 30 days"},{id:6,pricingInnerClassName:"pricing-item text-decoration-line-through",pricingInnerIcon:"mdi mdi-close-thick bg-soft-muted me-2",pricingInnerText:"Premium Support 24/7"}]},{id:3,pricingIcon:"uim-bag ",pricingName:"Enterprice",pricingPrice:"$59.99",pricingsuccessclass:"btn-soft-primary",pricingDetails:[{id:1,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Unlimited file recovery"},{id:2,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Professional reports"},{id:3,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Sell on marketplaces"},{id:4,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Unlimited Builds"},{id:5,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Job displayed for 30 days"},{id:6,pricingInnerClassName:"pricing-item",pricingInnerIcon:"mdi mdi-check-bold bg-soft-success me-2",pricingInnerText:"Premium Support 24/7"}]}].map((function(e,t){return Object(c.jsx)(s.f,{lg:4,md:6,className:"mt-5 pt-2",children:Object(c.jsx)(s.b,{className:"pricing-box bg-light",children:Object(c.jsxs)(s.c,{className:"p-4 px-lg-5",children:[Object(c.jsx)("div",{className:"pricing-icon bg-light rounded-circle icons-md",children:Object(c.jsx)(l.a,{icon:e.pricingIcon,className:"text-primary"})}),Object(c.jsx)("div",{className:"pricing-name text-center mt-4 pt-2",children:Object(c.jsx)("h4",{className:"fs-18",children:e.pricingName})}),Object(c.jsx)("div",{className:"pricing-price text-center mt-4",children:Object(c.jsxs)("h2",{className:"fw-semibold",children:[e.pricingPrice,Object(c.jsx)("small",{className:"fs-16",children:"/mo"})]})}),Object(c.jsx)("ul",{className:"list-unstyled pricing-details text-muted mt-4",children:(e.pricingDetails||[]).map((function(e,t){return Object(c.jsxs)("li",{className:e.pricingInnerClassName,children:[Object(c.jsx)("i",{className:e.pricingInnerIcon})," ",e.pricingInnerText]},t)}))}),Object(c.jsx)("div",{className:"text-center mt-4 mb-2",children:Object(c.jsxs)(a.b,{to:"#",className:"btn ".concat(e.pricingsuccessclass," rounded-pill"),children:["Purchase Now ",Object(c.jsx)("i",{className:"uil uil-arrow-right"})]})})]})})},t)}))})]})})})},d=n(147),m=n.n(d),p=function(){return Object(c.jsx)(r.a.Fragment,{children:Object(c.jsx)("section",{className:"section",children:Object(c.jsx)(s.h,{children:Object(c.jsx)("div",{className:"pricing-counter text-white",children:Object(c.jsxs)(s.z,{children:[Object(c.jsx)(s.f,{lg:3,md:6,children:Object(c.jsx)("div",{className:"counter-box mt-3",children:Object(c.jsxs)("div",{className:"counters counter_custom text-center",children:[Object(c.jsx)(m.a,{end:15e3,duration:1,className:"counter counter_custom mb-0"}),Object(c.jsx)("h6",{className:"fs-16 mt-3",children:"Available Jobs"})]})})}),Object(c.jsx)(s.f,{lg:3,md:6,children:Object(c.jsx)("div",{className:"counter-box mt-3",children:Object(c.jsxs)("div",{className:"counters counter_custom text-center",children:[Object(c.jsx)(m.a,{end:7500,duration:1,className:"counter mb-0"}),Object(c.jsx)("h6",{className:"fs-16 mt-3",children:"Applications"})]})})}),Object(c.jsx)(s.f,{lg:3,md:6,children:Object(c.jsx)("div",{className:"counter-box mt-3",children:Object(c.jsxs)("div",{className:"counters counter_custom text-center",children:[Object(c.jsx)(m.a,{end:8.85,duration:1,decimals:2,className:"counter mb-0"}),Object(c.jsx)("h6",{className:"fs-16 mt-3",children:"Positive Feedback"})]})})}),Object(c.jsx)(s.f,{lg:3,md:6,children:Object(c.jsx)("div",{className:"counter-box mt-3",children:Object(c.jsxs)("div",{className:"counters counter_custom text-center",children:[Object(c.jsx)(m.a,{end:9875,duration:1,className:"counter mb-0"}),Object(c.jsx)("h6",{className:"fs-16 mt-3",children:"Members"})]})})})]})})})})})},h=n(54),f=n.n(h);t.default=function(){return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(f.a,{children:Object(c.jsx)("title",{children:"Pricing | Jobcy - Job Listing Template | Themesdesign"})}),Object(c.jsx)(o,{}),Object(c.jsx)(u,{}),Object(c.jsx)(p,{})]})}}}]);
//# sourceMappingURL=39.ae43d148.chunk.js.map