
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});







/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function(a,b,c){"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=c:(a[b]=c,"function"==typeof define&&define.amd&&define(b,[],function(){return c}))}(this,"jRespond",function(a,b,c){"use strict";return function(a){var b=[],d=[],e=a,f="",g="",i=0,j=100,k=500,l=k,m=function(){var a=0;return a="number"!=typeof window.innerWidth?0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth},n=function(a){if(a.length===c)o(a);else for(var b=0;b<a.length;b++)o(a[b])},o=function(a){var e=a.breakpoint,h=a.enter||c;b.push(a),d.push(!1),r(e)&&(h!==c&&h.call(null,{entering:f,exiting:g}),d[b.length-1]=!0)},p=function(){for(var a=[],e=[],h=0;h<b.length;h++){var i=b[h].breakpoint,j=b[h].enter||c,k=b[h].exit||c;"*"===i?(j!==c&&a.push(j),k!==c&&e.push(k)):r(i)?(j===c||d[h]||a.push(j),d[h]=!0):(k!==c&&d[h]&&e.push(k),d[h]=!1)}for(var l={entering:f,exiting:g},m=0;m<e.length;m++)e[m].call(null,l);for(var n=0;n<a.length;n++)a[n].call(null,l)},q=function(a){for(var b=!1,c=0;c<e.length;c++)if(a>=e[c].enter&&a<=e[c].exit){b=!0;break}b&&f!==e[c].label?(g=f,f=e[c].label,p()):b||""===f||(f="",p())},r=function(a){if("object"==typeof a){if(a.join().indexOf(f)>=0)return!0}else{if("*"===a)return!0;if("string"==typeof a&&f===a)return!0}},s=function(){var a=m();a!==i?(l=j,q(a)):l=k,i=a,setTimeout(s,l)};return s(),{addFunc:function(a){n(a)},getBreakpoint:function(){return f}}}}(this,this.document));





/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function(e){e.fn.appear=function(t,n){var r=e.extend({data:undefined,one:true,accX:0,accY:0},n);return this.each(function(){var n=e(this);n.appeared=false;if(!t){n.trigger("appear",r.data);return}var i=e(window);var s=function(){if(!n.is(":visible")){n.appeared=false;return}var e=i.scrollLeft();var t=i.scrollTop();var s=n.offset();var o=s.left;var u=s.top;var a=r.accX;var f=r.accY;var l=n.height();var c=i.height();var h=n.width();var p=i.width();if(u+l+f>=t&&u<=t+c+f&&o+h+a>=e&&o<=e+p+a){if(!n.appeared)n.trigger("appear",r.data)}else{n.appeared=false}};var o=function(){n.appeared=true;if(r.one){i.unbind("scroll",s);var o=e.inArray(s,e.fn.appear.checks);if(o>=0)e.fn.appear.checks.splice(o,1)}t.apply(this,arguments)};if(r.one)n.one("appear",r.data,o);else n.bind("appear",r.data,o);i.scroll(s);e.fn.appear.checks.push(s);s()})};e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=e.fn.appear.checks.length;if(t>0)while(t--)e.fn.appear.checks[t]()},run:function(){if(e.fn.appear.timeout)clearTimeout(e.fn.appear.timeout);e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}});e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,n){var r=e.fn[n];if(r){e.fn[n]=function(){var t=r.apply(this,arguments);e.fn.appear.run();return t}}})})(jQuery);








/*!
 * animsition v3.4.1
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
!function(n){"use strict";var a="animsition",i={init:function(t){t=n.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingHtml:'<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"},t);var o=i.supportCheck.call(this,t);if(!o)return"console"in window||(window.console={},window.console.log=function(n){return n}),console.log("Animsition does not support this browser."),i.destroy.call(this);var e=i.optionCheck.call(this,t);return e&&i.addOverlay.call(this,t),t.loading&&i.addLoading.call(this,t),this.each(function(){var o=this,e=n(this),s=n(window),l=e.data(a);l||(t=n.extend({},t),e.data(a,{options:t}),s.on("load."+a+" pageshow."+a,function(){i.pageIn.call(o)}),s.on("unload."+a,function(){}),n(t.linkElement).on("click."+a,function(a){a.preventDefault();var t=n(this);i.pageOut.call(o,t)}))})},addOverlay:function(a){n(a.overlayParentElement).prepend('<div class="'+a.overlayClass+'"></div>')},addLoading:function(a){n(a.loadingParentElement).append('<div class="'+a.loadingClass+'">'+a.loadingHtml+"</div>")},removeLoading:function(){var i=n(this),t=i.data(a).options,o=n(t.loadingParentElement).children("."+t.loadingClass);o.fadeOut().remove()},supportCheck:function(a){var i=n(this),t=a.unSupportCss,o=t.length,e=!1;0===o&&(e=!0);for(var s=0;o>s;s++)if("string"==typeof i.css(t[s])){e=!0;break}return e},optionCheck:function(a){var i,t=n(this);return i=a.overlay||t.data("animsition-overlay")?!0:!1},animationCheck:function(i,t,o){var e=n(this),s=e.data(a).options,l=typeof i,r=!t&&"number"===l,c=t&&"string"===l&&i.length>0;return r||c?i=i:t&&o?i=s.inClass:!t&&o?i=s.inDuration:t&&!o?i=s.outClass:t||o||(i=s.outDuration),i},pageIn:function(){var t=this,o=n(this),e=o.data(a).options,s=o.data("animsition-in-duration"),l=o.data("animsition-in"),r=i.animationCheck.call(t,s,!1,!0),c=i.animationCheck.call(t,l,!0,!0),d=i.optionCheck.call(t,e);e.loading&&i.removeLoading.call(t),d?i.pageInOverlay.call(t,c,r):i.pageInBasic.call(t,c,r)},pageInBasic:function(a,i){var t=n(this);t.css({"animation-duration":i/1e3+"s"}).addClass(a).animateCallback(function(){t.removeClass(a).css({opacity:1})})},pageInOverlay:function(i,t){var o=n(this),e=o.data(a).options;o.css({opacity:1}),n(e.overlayParentElement).children("."+e.overlayClass).css({"animation-duration":t/1e3+"s"}).addClass(i)},pageOut:function(t){var o=this,e=n(this),s=e.data(a).options,l=t.data("animsition-out"),r=e.data("animsition-out"),c=t.data("animsition-out-duration"),d=e.data("animsition-out-duration"),u=l?l:r,m=c?c:d,h=i.animationCheck.call(o,u,!0,!1),p=i.animationCheck.call(o,m,!1,!1),v=i.optionCheck.call(o,s),f=t.attr("href");v?i.pageOutOverlay.call(o,h,p,f):i.pageOutBasic.call(o,h,p,f)},pageOutBasic:function(a,i,t){var o=n(this);o.css({"animation-duration":i/1e3+"s"}).addClass(a).animateCallback(function(){location.href=t})},pageOutOverlay:function(t,o,e){var s=this,l=n(this),r=l.data(a).options,c=l.data("animsition-in"),d=i.animationCheck.call(s,c,!0,!0);n(r.overlayParentElement).children("."+r.overlayClass).css({"animation-duration":o/1e3+"s"}).removeClass(d).addClass(t).animateCallback(function(){l.css({opacity:0}),location.href=e})},destroy:function(){return this.each(function(){var i=n(this);n(window).unbind("."+a),i.css({opacity:1}).removeData(a)})}};n.fn.animateCallback=function(a){var i="animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";return this.each(function(){n(this).bind(i,function(){return n(this).unbind(i),a.call(this)})})},n.fn.animsition=function(t){return i[t]?i[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void n.error("Method "+t+" does not exist on jQuery."+a):i.init.apply(this,arguments)}}(jQuery);





/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);



/*! skrollr 0.6.29 (2014-11-17) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,Y(),lt=this,r=r||{},mt=r.constants||{},r.easing)for(var n in r.easing)X[n]=r.easing[n];Tt=r.edgeStrategy||"set",ft={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ut=r.forceHeight!==!1,ut&&(zt=r.scale||1),pt=r.mobileDeceleration||x,gt=r.smoothScrolling!==!1,vt=r.smoothScrollingDuration||A,ht={targetTop:lt.getScrollTop()},Kt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Kt?(ct=t.getElementById(r.skrollrBody||E),ct&&it(),j(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),lt.refresh(),kt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Bt||e!==$t)&&(Bt=t,$t=e,_t=!0)});var i=R();return function l(){J(),St=i(l)}(),lt}var o,a,i={get:function(){return lt},init:function(e){return lt||new n(e)},VERSION:"0.6.29"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E="skrollr-body",A=200,F="start",C="end",H="center",D="bottom",I="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,N=/^\s+|\s+$/g,O=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,V=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,z=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,L=function(e,t){return t.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,$=/\{\?\}/g,B=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,G="",K="",Y=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(G=n.match(e)||+n==n&&t[n].match(e))break;if(!G)return G=K="",r;G=G[0],"-"===G.slice(0,1)?(K=G,G={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[G]):K="-"+G.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[G.toLowerCase()+"RequestAnimationFrame"],r=Nt();return(Kt||!t)&&(t=function(t){var n=Nt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Nt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[G.toLowerCase()+"CancelAnimationFrame"];return(Kt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},X={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,st=[],Gt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=Tt,u=!1;if(a&&I in i&&delete i[I],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(O);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(q,L)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==F&&b!==C?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===C?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*zt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&I in i?(x=i[I],k=st[x].styleAttr,w=st[x].classAttr):(x=i[I]=Gt++,k=i.style.cssText,w=Ht(i)),st[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(At(),n=0,o=e.length;o>n;n++){var E=st[e[n][I]];E!==r&&(Q(E),tt(E))}return lt},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===H&&(i-=n/2),r===D?i+=l:r===H&&(i+=l/2),i+=lt.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Nt(),o=lt.getScrollTop();return dt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:X[t.easing||k],done:t.done},dt.topDiff||(dt.done&&dt.done.call(lt,!1),dt=r),lt},n.prototype.stopAnimateTo=function(){dt&&dt.done&&dt.done.call(lt,!0),dt=r},n.prototype.isAnimatingTo=function(){return!!dt},n.prototype.isMobile=function(){return Kt},n.prototype.setScrollTop=function(t,r){return yt=r===!0,Kt?Yt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),lt},n.prototype.getScrollTop=function(){return Kt?Yt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ft[e]=t,lt},n.prototype.off=function(e){return delete ft[e],lt},n.prototype.destroy=function(){var e=U();e(St),xt(),Dt(o,[T],[y,b,S]);for(var t=0,n=st.length;n>t;t++)at(st[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",ct&&i.setStyle(ct,"transform","none"),lt=r,ct=r,ft=r,ut=r,Vt=0,zt=1,mt=r,pt=r,qt="down",Lt=-1,$t=0,Bt=0,_t=!1,dt=r,gt=r,vt=r,ht=r,yt=r,Gt=0,Tt=r,Kt=!1,Yt=0,bt=r};var j=function(){var n,i,l,c,d,g,v,h,y,T,b,S;kt(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,P.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),lt.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:P.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,lt.setScrollTop(Yt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!P.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/pt),F=E*A+.5*pt*A*A,C=lt.getScrollTop()-F,H=0;C>Vt?(H=(Vt-C)/F,C=Vt):0>C&&(H=-C/F,C=0),A*=1-H,lt.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},W=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=Ft();for(c=0,f=st.length;f>c;c++)for(e=st[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(at(t),l.frame=lt.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,at(t,!0)),l.frame+=m,ut&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame);for(Vt=s.max(Vt,Ct()),c=0,f=st.length;f>c;c++){for(e=st[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Vt-l.offset+m);e.keyFrames.sort(Ot)}},Z=function(e,t){for(var r=0,n=st.length;n>r;r++){var o,a,s=st[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(Et(c,p.eventType,qt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(Et(c,y.eventType,qt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":at(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=ot(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=nt(A.props[o].value,F.props[o].value,C),a=ot(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===qt?Et(c,A.eventType,qt):Et(c,F.eventType,qt),s.lastFrameIndex=E);break}}},J=function(){_t&&(_t=!1,At());var e,t,n=lt.getScrollTop(),o=Nt();if(dt)o>=dt.endTime?(n=dt.targetTop,e=dt.done,dt=r):(t=dt.easing((o-dt.startTime)/dt.duration),n=0|dt.startTop+t*dt.topDiff),lt.setScrollTop(n,!0);else if(!yt){var a=ht.targetTop-n;a&&(ht={startTop:Lt,topDiff:n-Lt,targetTop:n,startTime:Mt,endTime:Mt+vt}),ht.endTime>=o&&(t=X.sqrt((o-ht.startTime)/vt),n=0|ht.startTop+t*ht.topDiff)}if(Kt&&ct&&i.setStyle(ct,"transform","translate(0, "+-Yt+"px) "+bt),yt||Lt!==n){qt=n>Lt?"down":Lt>n?"up":qt,yt=!1;var l={curTop:n,lastTop:Lt,maxTop:Vt,direction:qt},s=ft.beforerender&&ft.beforerender.call(lt,l);s!==!1&&(Z(n,lt.getScrollTop()),Lt=n,ft.render&&ft.render.call(lt,l)),e&&e.call(lt,!1)}Mt=o},Q=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=V.exec(l.props));)a=i[1],o=i[2],n=a.match(z),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?et(o):[o.slice(1)],s[a]={value:o,easing:X[n]};l.props=s}},et=function(e){var t=[];return B.lastIndex=0,e=e.replace(B,function(e){return e.replace(M,function(e){return 100*(e/255)+"%"})}),K&&(_.lastIndex=0,e=e.replace(_,function(e){return K+e})),e=e.replace(M,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},tt=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)rt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)rt(e.keyFrames[t],n)},rt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},nt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},ot=function(e){var t=1;return $.lastIndex=0,e[0].replace($,function(){return e[t++]})},at=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=st[n[I]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ht(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},it=function(){bt="translateZ(0)",i.setStyle(ct,"transform",bt);var e=c(ct),t=e.getPropertyValue("transform"),r=e.getPropertyValue(K+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(bt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,L).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{G&&(n[G+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St,kt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Rt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},xt=function(){for(var e,t=0,r=Rt.length;r>t;t++)e=Rt[t],wt(e.element,e.name,e.listener);Rt=[]},Et=function(e,t,r){ft.keyframe&&ft.keyframe.call(lt,e,t,r)},At=function(){var e=lt.getScrollTop();Vt=0,ut&&!Kt&&(a.style.height=""),W(),ut&&!Kt&&(a.style.height=Vt+o.clientHeight+"px"),Kt?lt.setScrollTop(s.min(lt.getScrollTop(),Vt)):lt.setScrollTop(e,!0),yt=!0},Ft=function(){var e,t,r=o.clientHeight,n={};for(e in mt)t=mt[e],"function"==typeof t?t=t.call(lt):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ct=function(){var e,t=0;return ct&&(t=s.max(ct.offsetHeight,ct.scrollHeight)),e=s.max(t,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight),e-o.clientHeight},Ht=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Pt(i).replace(Pt(o[l])," ");i=It(i);for(var c=0,f=n.length;f>c;c++)-1===Pt(i).indexOf(Pt(n[c]))&&(i+=" "+n[c]);t[a]=It(i)},It=function(e){return e.replace(N,"")},Pt=function(e){return" "+e+" "},Nt=Date.now||function(){return+new Date},Ot=function(e,t){return e.frame-t.frame},Vt=0,zt=1,qt="down",Lt=-1,Mt=Nt(),$t=0,Bt=0,_t=!1,Gt=0,Kt=!1,Yt=0,Rt=[];"function"==typeof define&&define.amd?define([],function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);


/**
 * @preserve jQuery DateTimePicker plugin v2.4.1
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * (c) 2014, Chupurnov Valeriy.
 */
/*global document,window,jQuery,setTimeout,clearTimeout*/
(function ($) {
  'use strict';
  var default_options  = {
    i18n: {
      ar: { // Arabic
        months: [
          "كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
        ],
        dayOfWeek: [
          "ن", "ث", "ع", "خ", "ج", "س", "ح"
        ]
      },
      ro: { // Romanian
        months: [
          "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"
        ],
        dayOfWeek: [
          "l", "ma", "mi", "j", "v", "s", "d"
        ]
      },
      id: { // Indonesian
        months: [
          "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ],
        dayOfWeek: [
          "Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"
        ]
      },
      bg: { // Bulgarian
        months: [
          "Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
        ],
        dayOfWeek: [
          "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ]
      },
      fa: { // Persian/Farsi
        months: [
          'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
        ],
        dayOfWeek: [
          'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
        ]
      },
      ru: { // Russian
        months: [
          'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        dayOfWeek: [
          "Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ]
      },
      uk: { // Ukrainian
        months: [
          'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
        ],
        dayOfWeek: [
          "Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"
        ]
      },
      en: { // English
        months: [
          "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        dayOfWeek: [
          "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ]
      },
      el: { // Ελληνικά
        months: [
          "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
        ],
        dayOfWeek: [
          "Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"
        ]
      },
      de: { // German
        months: [
          'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ],
        dayOfWeek: [
          "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
        ]
      },
      nl: { // Dutch
        months: [
          "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
        ],
        dayOfWeek: [
          "zo", "ma", "di", "wo", "do", "vr", "za"
        ]
      },
      tr: { // Turkish
        months: [
          "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
        ],
        dayOfWeek: [
          "Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
        ]
      },
      fr: { //French
        months: [
          "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ],
        dayOfWeek: [
          "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
        ]
      },
      es: { // Spanish
        months: [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ],
        dayOfWeek: [
          "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
        ]
      },
      th: { // Thai
        months: [
          'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ],
        dayOfWeek: [
          'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
        ]
      },
      pl: { // Polish
        months: [
          "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
        ],
        dayOfWeek: [
          "nd", "pn", "wt", "śr", "cz", "pt", "sb"
        ]
      },
      pt: { // Portuguese
        months: [
          "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ],
        dayOfWeek: [
          "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
        ]
      },
      ch: { // Simplified Chinese
        months: [
          "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        dayOfWeek: [
          "日", "一", "二", "三", "四", "五", "六"
        ]
      },
      se: { // Swedish
        months: [
          "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September",  "Oktober", "November", "December"
        ],
        dayOfWeek: [
          "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
        ]
      },
      kr: { // Korean
        months: [
          "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        dayOfWeek: [
          "일", "월", "화", "수", "목", "금", "토"
        ]
      },
      it: { // Italian
        months: [
          "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
        ],
        dayOfWeek: [
          "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
        ]
      },
      da: { // Dansk
        months: [
          "January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"
        ],
        dayOfWeek: [
          "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
        ]
      },
      no: { // Norwegian
        months: [
          "Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
        ],
        dayOfWeek: [
          "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
        ]
      },
      ja: { // Japanese
        months: [
          "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
        ],
        dayOfWeek: [
          "日", "月", "火", "水", "木", "金", "土"
        ]
      },
      vi: { // Vietnamese
        months: [
          "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ],
        dayOfWeek: [
          "CN", "T2", "T3", "T4", "T5", "T6", "T7"
        ]
      },
      sl: { // Slovenščina
        months: [
          "Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
        ],
        dayOfWeek: [
          "Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"
        ]
      },
      cs: { // Čeština
        months: [
          "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
        ],
        dayOfWeek: [
          "Ne", "Po", "Út", "St", "Čt", "Pá", "So"
        ]
      },
      hu: { // Hungarian
        months: [
          "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
        ],
        dayOfWeek: [
          "Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"
        ]
      },
      az: { //Azerbaijanian (Azeri)
        months: [
          "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
        ],
        dayOfWeek: [
          "B", "Be", "Ça", "Ç", "Ca", "C", "Ş"
        ]
      },
      bs: { //Bosanski
        months: [
          "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
        ],
        dayOfWeek: [
          "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
        ]
      },
      ca: { //Català
        months: [
          "Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
        ],
        dayOfWeek: [
          "Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"
        ]
      },
      'en-GB': { //English (British)
        months: [
          "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        dayOfWeek: [
          "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ]
      },
      et: { //"Eesti"
        months: [
          "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
        ],
        dayOfWeek: [
          "P", "E", "T", "K", "N", "R", "L"
        ]
      },
      eu: { //Euskara
        months: [
          "Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
        ],
        dayOfWeek: [
          "Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."
        ]
      },
      fi: { //Finnish (Suomi)
        months: [
          "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
        ],
        dayOfWeek: [
          "Su", "Ma", "Ti", "Ke", "To", "Pe", "La"
        ]
      },
      gl: { //Galego
        months: [
          "Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"
        ],
        dayOfWeek: [
          "Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"
        ]
      },
      hr: { //Hrvatski
        months: [
          "Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
        ],
        dayOfWeek: [
          "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
        ]
      },
      ko: { //Korean (한국어)
        months: [
          "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        dayOfWeek: [
          "일", "월", "화", "수", "목", "금", "토"
        ]
      },
      lt: { //Lithuanian (lietuvių)
        months: [
          "Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"
        ],
        dayOfWeek: [
          "Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"
        ]
      },
      lv: { //Latvian (Latviešu)
        months: [
          "Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
        ],
        dayOfWeek: [
          "Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"
        ]
      },
      mk: { //Macedonian (Македонски)
        months: [
          "јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"
        ],
        dayOfWeek: [
          "нед", "пон", "вто", "сре", "чет", "пет", "саб"
        ]
      },
      mn: { //Mongolian (Монгол)
        months: [
          "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
        ],
        dayOfWeek: [
          "Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"
        ]
      },
      'pt-BR': { //Português(Brasil)
        months: [
          "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ],
        dayOfWeek: [
          "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
        ]
      },
      sk: { //Slovenčina
        months: [
          "Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
        ],
        dayOfWeek: [
          "Ne", "Po", "Ut", "St", "Št", "Pi", "So"
        ]
      },
      sq: { //Albanian (Shqip)
        months: [
          "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        dayOfWeek: [
          "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ]
      },
      'sr-YU': { //Serbian (Srpski)
        months: [
          "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
        ],
        dayOfWeek: [
          "Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"
        ]
      },
      sr: { //Serbian Cyrillic (Српски)
        months: [
          "јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"
        ],
        dayOfWeek: [
          "нед", "пон", "уто", "сре", "чет", "пет", "суб"
        ]
      },
      sv: { //Svenska
        months: [
          "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
        ],
        dayOfWeek: [
          "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
        ]
      },
      'zh-TW': { //Traditional Chinese (繁體中文)
        months: [
          "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        dayOfWeek: [
          "日", "一", "二", "三", "四", "五", "六"
        ]
      },
      zh: { //Simplified Chinese (简体中文)
        months: [
          "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        dayOfWeek: [
          "日", "一", "二", "三", "四", "五", "六"
        ]
      },
      he: { //Hebrew (עברית)
        months: [
          'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
        ],
        dayOfWeek: [
          'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
        ]
      },
      hy: { // Armenian
        months: [
          "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
        ],
        dayOfWeek: [
          "Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"
        ]
      }
    },
    value: '',
    lang: 'en',

    format: 'Y/m/d H:i',
    formatTime: 'H:i',
    formatDate: 'Y/m/d',

    startDate:  false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
    step: 60,
    monthChangeSpinner: true,

    closeOnDateSelect: false,
    closeOnWithoutClick: true,
    closeOnInputClick: true,

    timepicker: true,
    datepicker: true,
    weeks: false,

    defaultTime: false, // use formatTime format (ex. '10:00' for formatTime: 'H:i')
    defaultDate: false, // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

    minDate: false,
    maxDate: false,
    minTime: false,
    maxTime: false,

    allowTimes: [],
    opened: false,
    initTime: true,
    inline: false,
    theme: '',

    onSelectDate: function () {},
    onSelectTime: function () {},
    onChangeMonth: function () {},
    onChangeYear: function () {},
    onChangeDateTime: function () {},
    onShow: function () {},
    onClose: function () {},
    onGenerate: function () {},

    withoutCopyright: true,
    inverseButton: false,
    hours12: false,
    next: 'xdsoft_next',
    prev : 'xdsoft_prev',
    dayOfWeekStart: 0,
    parentID: 'body',
    timeHeightInTimePicker: 25,
    timepickerScrollbar: true,
    todayButton: true,
    defaultSelect: true,

    scrollMonth: true,
    scrollTime: true,
    scrollInput: true,

    lazyInit: false,
    mask: false,
    validateOnBlur: true,
    allowBlank: true,
    yearStart: 1950,
    yearEnd: 2050,
    style: '',
    id: '',
    fixed: false,
    roundTime: 'round', // ceil, floor
    className: '',
    weekends: [],
    disabledDates : [],
    yearOffset: 0,
    beforeShowDay: null,

    enterLikeTab: true
  };
  // fix for ie8
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
      var i, j;
      for (i = (start || 0), j = this.length; i < j; i += 1) {
        if (this[i] === obj) { return i; }
      }
      return -1;
    };
  }
  Date.prototype.countDaysInMonth = function () {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
  };
  $.fn.xdsoftScroller = function (percent) {
    return this.each(function () {
      var timeboxparent = $(this),
        pointerEventToXY = function (e) {
          var out = {x: 0, y: 0},
            touch;
          if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
            touch  = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            out.x = touch.clientX;
            out.y = touch.clientY;
          } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
            out.x = e.clientX;
            out.y = e.clientY;
          }
          return out;
        },
        move = 0,
        timebox,
        parentHeight,
        height,
        scrollbar,
        scroller,
        maximumOffset = 100,
        start = false,
        startY = 0,
        startTop = 0,
        h1 = 0,
        touchStart = false,
        startTopScroll = 0,
        calcOffset = function () {};
      if (percent === 'hide') {
        timeboxparent.find('.xdsoft_scrollbar').hide();
        return;
      }
      if (!$(this).hasClass('xdsoft_scroller_box')) {
        timebox = timeboxparent.children().eq(0);
        parentHeight = timeboxparent[0].clientHeight;
        height = timebox[0].offsetHeight;
        scrollbar = $('<div class="xdsoft_scrollbar"></div>');
        scroller = $('<div class="xdsoft_scroller"></div>');
        scrollbar.append(scroller);

        timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
        calcOffset = function calcOffset(event) {
          var offset = pointerEventToXY(event).y - startY + startTopScroll;
          if (offset < 0) {
            offset = 0;
          }
          if (offset + scroller[0].offsetHeight > h1) {
            offset = h1 - scroller[0].offsetHeight;
          }
          timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
        };

        scroller
          .on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
            if (!parentHeight) {
              timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
            }

            startY = pointerEventToXY(event).y;
            startTopScroll = parseInt(scroller.css('margin-top'), 10);
            h1 = scrollbar[0].offsetHeight;

            if (event.type === 'mousedown') {
              if (document) {
                $(document.body).addClass('xdsoft_noselect');
              }
              $([document.body, window]).on('mouseup.xdsoft_scroller', function arguments_callee() {
                $([document.body, window]).off('mouseup.xdsoft_scroller', arguments_callee)
                  .off('mousemove.xdsoft_scroller', calcOffset)
                  .removeClass('xdsoft_noselect');
              });
              $(document.body).on('mousemove.xdsoft_scroller', calcOffset);
            } else {
              touchStart = true;
              event.stopPropagation();
              event.preventDefault();
            }
          })
          .on('touchmove', function (event) {
            if (touchStart) {
              event.preventDefault();
              calcOffset(event);
            }
          })
          .on('touchend touchcancel', function (event) {
            touchStart =  false;
            startTopScroll = 0;
          });

        timeboxparent
          .on('scroll_element.xdsoft_scroller', function (event, percentage) {
            if (!parentHeight) {
              timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
            }
            percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;

            scroller.css('margin-top', maximumOffset * percentage);

            setTimeout(function () {
              timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
            }, 10);
          })
          .on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
            var percent, sh;
            parentHeight = timeboxparent[0].clientHeight;
            height = timebox[0].offsetHeight;
            percent = parentHeight / height;
            sh = percent * scrollbar[0].offsetHeight;
            if (percent > 1) {
              scroller.hide();
            } else {
              scroller.show();
              scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
              maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
              if (noTriggerScroll !== true) {
                timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
              }
            }
          });

        timeboxparent.on('mousewheel', function (event) {
          var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

          top = top - (event.deltaY * 20);
          if (top < 0) {
            top = 0;
          }

          timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
          event.stopPropagation();
          return false;
        });

        timeboxparent.on('touchstart', function (event) {
          start = pointerEventToXY(event);
          startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
        });

        timeboxparent.on('touchmove', function (event) {
          if (start) {
            event.preventDefault();
            var coord = pointerEventToXY(event);
            timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
          }
        });

        timeboxparent.on('touchend touchcancel', function (event) {
          start = false;
          startTop = 0;
        });
      }
      timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
    });
  };

  $.fn.datetimepicker = function (opt) {
    var KEY0 = 48,
      KEY9 = 57,
      _KEY0 = 96,
      _KEY9 = 105,
      CTRLKEY = 17,
      DEL = 46,
      ENTER = 13,
      ESC = 27,
      BACKSPACE = 8,
      ARROWLEFT = 37,
      ARROWUP = 38,
      ARROWRIGHT = 39,
      ARROWDOWN = 40,
      TAB = 9,
      F5 = 116,
      AKEY = 65,
      CKEY = 67,
      VKEY = 86,
      ZKEY = 90,
      YKEY = 89,
      ctrlDown  = false,
      options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),

      lazyInitTimer = 0,
      createDateTimePicker,
      destroyDateTimePicker,

      lazyInit = function (input) {
        input
          .on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function initOnActionCallback(event) {
            if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
              return;
            }
            clearTimeout(lazyInitTimer);
            lazyInitTimer = setTimeout(function () {

              if (!input.data('xdsoft_datetimepicker')) {
                createDateTimePicker(input);
              }
              input
                .off('open.xdsoft focusin.xdsoft mousedown.xdsoft', initOnActionCallback)
                .trigger('open.xdsoft');
            }, 100);
          });
      };

    createDateTimePicker = function (input) {
      var datetimepicker = $('<div ' + (options.id ? 'id="' + options.id + '"' : '') + ' ' + (options.style ? 'style="' + options.style + '"' : '') + ' class="xdsoft_datetimepicker xdsoft_' + options.theme + ' xdsoft_noselect ' + (options.weeks ? ' xdsoft_showweeks' : '') + options.className + '"></div>'),
        xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
        datepicker = $('<div class="xdsoft_datepicker active"></div>'),
        mounth_picker = $('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' +
          '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' +
          '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' +
          '<button type="button" class="xdsoft_next"></button></div>'),
        calendar = $('<div class="xdsoft_calendar"></div>'),
        timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
        timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
        timebox = $('<div class="xdsoft_time_variant"></div>'),
        /*scrollbar = $('<div class="xdsoft_scrollbar"></div>'),
        scroller = $('<div class="xdsoft_scroller"></div>'),*/
        monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
        yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
        triggerAfterOpen = false,
        XDSoft_datetime,
        //scroll_element,
        xchangeTimer,
        timerclick,
        current_time_index,
        setPos,
        timer = 0,
        timer1 = 0,
        _xdsoft_datetime;

      mounth_picker
        .find('.xdsoft_month span')
          .after(monthselect);
      mounth_picker
        .find('.xdsoft_year span')
          .after(yearselect);

      mounth_picker
        .find('.xdsoft_month,.xdsoft_year')
          .on('mousedown.xdsoft', function (event) {
          var select = $(this).find('.xdsoft_select').eq(0),
            val = 0,
            top = 0,
            visible = select.is(':visible'),
            items,
            i;

          mounth_picker
            .find('.xdsoft_select')
              .hide();
          if (_xdsoft_datetime.currentTime) {
            val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
          }

          select[visible ? 'hide' : 'show']();
          for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
            if (items.eq(i).data('value') === val) {
              break;
            } else {
              top += items[0].offsetHeight;
            }
          }

          select.xdsoftScroller(top / (select.children()[0].offsetHeight - (select[0].clientHeight)));
          event.stopPropagation();
          return false;
        });

      mounth_picker
        .find('.xdsoft_select')
          .xdsoftScroller()
        .on('mousedown.xdsoft', function (event) {
          event.stopPropagation();
          event.preventDefault();
        })
        .on('mousedown.xdsoft', '.xdsoft_option', function (event) {

          if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
          }

          var year = _xdsoft_datetime.currentTime.getFullYear();
          if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
            _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
          }

          $(this).parent().parent().hide();

          datetimepicker.trigger('xchange.xdsoft');
          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }

          if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
            options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
        });

      datetimepicker.setOptions = function (_options) {
        options = $.extend(true, {}, options, _options);

        if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
          options.allowTimes = $.extend(true, [], _options.allowTimes);
        }

        if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
          options.weekends = $.extend(true, [], _options.weekends);
        }

        if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
                    options.disabledDates = $.extend(true, [], _options.disabledDates);
                }

        if ((options.open || options.opened) && (!options.inline)) {
          input.trigger('open.xdsoft');
        }

        if (options.inline) {
          triggerAfterOpen = true;
          datetimepicker.addClass('xdsoft_inline');
          input.after(datetimepicker).hide();
        }

        if (options.inverseButton) {
          options.next = 'xdsoft_prev';
          options.prev = 'xdsoft_next';
        }

        if (options.datepicker) {
          datepicker.addClass('active');
        } else {
          datepicker.removeClass('active');
        }

        if (options.timepicker) {
          timepicker.addClass('active');
        } else {
          timepicker.removeClass('active');
        }

        if (options.value) {
          if (input && input.val) {
            input.val(options.value);
          }
          _xdsoft_datetime.setCurrentTime(options.value);
        }

        if (isNaN(options.dayOfWeekStart)) {
          options.dayOfWeekStart = 0;
        } else {
          options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
        }

        if (!options.timepickerScrollbar) {
          timeboxparent.xdsoftScroller('hide');
        }

        if (options.minDate && /^-(.*)$/.test(options.minDate)) {
          options.minDate = _xdsoft_datetime.strToDateTime(options.minDate).dateFormat(options.formatDate);
        }

        if (options.maxDate &&  /^\+(.*)$/.test(options.maxDate)) {
          options.maxDate = _xdsoft_datetime.strToDateTime(options.maxDate).dateFormat(options.formatDate);
        }

        mounth_picker
          .find('.xdsoft_today_button')
            .css('visibility', !options.todayButton ? 'hidden' : 'visible');

        if (options.mask) {
          var e,
            getCaretPos = function (input) {
              try {
                if (document.selection && document.selection.createRange) {
                  var range = document.selection.createRange();
                  return range.getBookmark().charCodeAt(2) - 2;
                }
                if (input.setSelectionRange) {
                  return input.selectionStart;
                }
              } catch (e) {
                return 0;
              }
            },
            setCaretPos = function (node, pos) {
              node = (typeof node === "string" || node instanceof String) ? document.getElementById(node) : node;
              if (!node) {
                return false;
              }
              if (node.createTextRange) {
                var textRange = node.createTextRange();
                textRange.collapse(true);
                textRange.moveEnd('character', pos);
                textRange.moveStart('character', pos);
                textRange.select();
                return true;
              }
              if (node.setSelectionRange) {
                node.setSelectionRange(pos, pos);
                return true;
              }
              return false;
            },
            isValidValue = function (mask, value) {
              var reg = mask
                .replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1')
                .replace(/_/g, '{digit+}')
                .replace(/([0-9]{1})/g, '{digit$1}')
                .replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}')
                .replace(/\{digit[\+]\}/g, '[0-9_]{1}');
              return (new RegExp(reg)).test(value);
            };
          input.off('keydown.xdsoft');

          if (options.mask === true) {
            options.mask = options.format
              .replace(/Y/g, '9999')
              .replace(/F/g, '9999')
              .replace(/m/g, '19')
              .replace(/d/g, '39')
              .replace(/H/g, '29')
              .replace(/i/g, '59')
              .replace(/s/g, '59');
          }

          if ($.type(options.mask) === 'string') {
            if (!isValidValue(options.mask, input.val())) {
              input.val(options.mask.replace(/[0-9]/g, '_'));
            }

            input.on('keydown.xdsoft', function (event) {
              var val = this.value,
                key = event.which,
                pos,
                digit;

              if (((key >= KEY0 && key <= KEY9) || (key >= _KEY0 && key <= _KEY9)) || (key === BACKSPACE || key === DEL)) {
                pos = getCaretPos(this);
                digit = (key !== BACKSPACE && key !== DEL) ? String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key) : '_';

                if ((key === BACKSPACE || key === DEL) && pos) {
                  pos -= 1;
                  digit = '_';
                }

                while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                  pos += (key === BACKSPACE || key === DEL) ? -1 : 1;
                }

                val = val.substr(0, pos) + digit + val.substr(pos + 1);
                if ($.trim(val) === '') {
                  val = options.mask.replace(/[0-9]/g, '_');
                } else {
                  if (pos === options.mask.length) {
                    event.preventDefault();
                    return false;
                  }
                }

                pos += (key === BACKSPACE || key === DEL) ? 0 : 1;
                while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                  pos += (key === BACKSPACE || key === DEL) ? -1 : 1;
                }

                if (isValidValue(options.mask, val)) {
                  this.value = val;
                  setCaretPos(this, pos);
                } else if ($.trim(val) === '') {
                  this.value = options.mask.replace(/[0-9]/g, '_');
                } else {
                  input.trigger('error_input.xdsoft');
                }
              } else {
                if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
                  return true;
                }
              }

              event.preventDefault();
              return false;
            });
          }
        }
        if (options.validateOnBlur) {
          input
            .off('blur.xdsoft')
            .on('blur.xdsoft', function () {
              if (options.allowBlank && !$.trim($(this).val()).length) {
                $(this).val(null);
                datetimepicker.data('xdsoft_datetime').empty();
              } else if (!Date.parseDate($(this).val(), options.format)) {
                var splittedHours   = +([$(this).val()[0], $(this).val()[1]].join('')),
                    splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));
                
                // parse the numbers as 0312 => 03:12
                if(!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
                  $(this).val([splittedHours, splittedMinutes].map(function(item) {
                    return item > 9 ? item : '0' + item
                  }).join(':'));
                } else {
                  $(this).val((_xdsoft_datetime.now()).dateFormat(options.format));
                }
                
                datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
              } else {
                datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
              }
              
              datetimepicker.trigger('changedatetime.xdsoft');
            });
        }
        options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;

        datetimepicker
          .trigger('xchange.xdsoft')
          .trigger('afterOpen.xdsoft');
      };

      datetimepicker
        .data('options', options)
        .on('mousedown.xdsoft', function (event) {
          event.stopPropagation();
          event.preventDefault();
          yearselect.hide();
          monthselect.hide();
          return false;
        });

      //scroll_element = timepicker.find('.xdsoft_time_box');
      timeboxparent.append(timebox);
      timeboxparent.xdsoftScroller();

      datetimepicker.on('afterOpen.xdsoft', function () {
        timeboxparent.xdsoftScroller();
      });

      datetimepicker
        .append(datepicker)
        .append(timepicker);

      if (options.withoutCopyright !== true) {
        datetimepicker
          .append(xdsoft_copyright);
      }

      datepicker
        .append(mounth_picker)
        .append(calendar);

      $(options.parentID)
        .append(datetimepicker);

      XDSoft_datetime = function () {
        var _this = this;
        _this.now = function (norecursion) {
          var d = new Date(),
            date,
            time;

          if (!norecursion && options.defaultDate) {
            date = _this.strToDate(options.defaultDate);
            d.setFullYear(date.getFullYear());
            d.setMonth(date.getMonth());
            d.setDate(date.getDate());
          }

          if (options.yearOffset) {
            d.setFullYear(d.getFullYear() + options.yearOffset);
          }

          if (!norecursion && options.defaultTime) {
            time = _this.strtotime(options.defaultTime);
            d.setHours(time.getHours());
            d.setMinutes(time.getMinutes());
          }

          return d;
        };

        _this.isValidDate = function (d) {
          if (Object.prototype.toString.call(d) !== "[object Date]") {
            return false;
          }
          return !isNaN(d.getTime());
        };

        _this.setCurrentTime = function (dTime) {
          _this.currentTime = (typeof dTime === 'string') ? _this.strToDateTime(dTime) : _this.isValidDate(dTime) ? dTime : _this.now();
          datetimepicker.trigger('xchange.xdsoft');
        };

        _this.empty = function () {
          _this.currentTime = null;
        };

        _this.getCurrentTime = function (dTime) {
          return _this.currentTime;
        };

        _this.nextMonth = function () {

          if (_this.currentTime === undefined || _this.currentTime === null) {
            _this.currentTime = _this.now();
          }

          var month = _this.currentTime.getMonth() + 1,
            year;
          if (month === 12) {
            _this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
            month = 0;
          }

          year = _this.currentTime.getFullYear();

          _this.currentTime.setDate(
            Math.min(
              new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
              _this.currentTime.getDate()
            )
          );
          _this.currentTime.setMonth(month);

          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }

          if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
            options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }

          datetimepicker.trigger('xchange.xdsoft');
          return month;
        };

        _this.prevMonth = function () {

          if (_this.currentTime === undefined || _this.currentTime === null) {
            _this.currentTime = _this.now();
          }

          var month = _this.currentTime.getMonth() - 1;
          if (month === -1) {
            _this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
            month = 11;
          }
          _this.currentTime.setDate(
            Math.min(
              new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
              _this.currentTime.getDate()
            )
          );
          _this.currentTime.setMonth(month);
          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
          datetimepicker.trigger('xchange.xdsoft');
          return month;
        };

        _this.getWeekOfYear = function (datetime) {
          var onejan = new Date(datetime.getFullYear(), 0, 1);
          return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);
        };

        _this.strToDateTime = function (sDateTime) {
          var tmpDate = [], timeOffset, currentTime;

          if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
            return sDateTime;
          }

          tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime);
          if (tmpDate) {
            tmpDate[2] = Date.parseDate(tmpDate[2], options.formatDate);
          }
          if (tmpDate  && tmpDate[2]) {
            timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;
            currentTime = new Date((_xdsoft_datetime.now()).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
          } else {
            currentTime = sDateTime ? Date.parseDate(sDateTime, options.format) : _this.now();
          }

          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now();
          }

          return currentTime;
        };

        _this.strToDate = function (sDate) {
          if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
            return sDate;
          }

          var currentTime = sDate ? Date.parseDate(sDate, options.formatDate) : _this.now(true);
          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now(true);
          }
          return currentTime;
        };

        _this.strtotime = function (sTime) {
          if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
            return sTime;
          }
          var currentTime = sTime ? Date.parseDate(sTime, options.formatTime) : _this.now(true);
          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now(true);
          }
          return currentTime;
        };

        _this.str = function () {
          return _this.currentTime.dateFormat(options.format);
        };
        _this.currentTime = this.now();
      };

      _xdsoft_datetime = new XDSoft_datetime();

      mounth_picker
        .find('.xdsoft_today_button')
        .on('mousedown.xdsoft', function () {
          datetimepicker.data('changed', true);
          _xdsoft_datetime.setCurrentTime(0);
          datetimepicker.trigger('afterOpen.xdsoft');
        }).on('dblclick.xdsoft', function () {
          input.val(_xdsoft_datetime.str());
          datetimepicker.trigger('close.xdsoft');
        });
      mounth_picker
        .find('.xdsoft_prev,.xdsoft_next')
        .on('mousedown.xdsoft', function () {
          var $this = $(this),
            timer = 0,
            stop = false;

          (function arguments_callee1(v) {
            if ($this.hasClass(options.next)) {
              _xdsoft_datetime.nextMonth();
            } else if ($this.hasClass(options.prev)) {
              _xdsoft_datetime.prevMonth();
            }
            if (options.monthChangeSpinner) {
              if (!stop) {
                timer = setTimeout(arguments_callee1, v || 100);
              }
            }
          }(500));

          $([document.body, window]).on('mouseup.xdsoft', function arguments_callee2() {
            clearTimeout(timer);
            stop = true;
            $([document.body, window]).off('mouseup.xdsoft', arguments_callee2);
          });
        });

      timepicker
        .find('.xdsoft_prev,.xdsoft_next')
        .on('mousedown.xdsoft', function () {
          var $this = $(this),
            timer = 0,
            stop = false,
            period = 110;
          (function arguments_callee4(v) {
            var pheight = timeboxparent[0].clientHeight,
              height = timebox[0].offsetHeight,
              top = Math.abs(parseInt(timebox.css('marginTop'), 10));
            if ($this.hasClass(options.next) && (height - pheight) - options.timeHeightInTimePicker >= top) {
              timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
            } else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
              timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
            }
            timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox.css('marginTop'), 10) / (height - pheight))]);
            period = (period > 10) ? 10 : period - 10;
            if (!stop) {
              timer = setTimeout(arguments_callee4, v || period);
            }
          }(500));
          $([document.body, window]).on('mouseup.xdsoft', function arguments_callee5() {
            clearTimeout(timer);
            stop = true;
            $([document.body, window])
              .off('mouseup.xdsoft', arguments_callee5);
          });
        });

      xchangeTimer = 0;
      // base handler - generating a calendar and timepicker
      datetimepicker
        .on('xchange.xdsoft', function (event) {
          clearTimeout(xchangeTimer);
          xchangeTimer = setTimeout(function () {

            if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
              _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
            }

            var table = '',
              start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
              i = 0,
              j,
              today = _xdsoft_datetime.now(),
              maxDate = false,
              minDate = false,
              d,
              y,
              m,
              w,
              classes = [],
              customDateSettings,
              newRow = true,
              time = '',
              h = '',
              line_time;

            while (start.getDay() !== options.dayOfWeekStart) {
              start.setDate(start.getDate() - 1);
            }

            table += '<table><thead><tr>';

            if (options.weeks) {
              table += '<th></th>';
            }

            for (j = 0; j < 7; j += 1) {
              table += '<th>' + options.i18n[options.lang].dayOfWeek[(j + options.dayOfWeekStart) % 7] + '</th>';
            }

            table += '</tr></thead>';
            table += '<tbody>';

            if (options.maxDate !== false) {
              maxDate = _xdsoft_datetime.strToDate(options.maxDate);
              maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
            }

            if (options.minDate !== false) {
              minDate = _xdsoft_datetime.strToDate(options.minDate);
              minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
            }

            while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
              classes = [];
              i += 1;

              d = start.getDate();
              y = start.getFullYear();
              m = start.getMonth();
              w = _xdsoft_datetime.getWeekOfYear(start);

              classes.push('xdsoft_date');

              if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
                customDateSettings = options.beforeShowDay.call(datetimepicker, start);
              } else {
                customDateSettings = null;
              }

              if ((maxDate !== false && start > maxDate) || (minDate !== false && start < minDate) || (customDateSettings && customDateSettings[0] === false)) {
                classes.push('xdsoft_disabled');
              } else if (options.disabledDates.indexOf(start.dateFormat(options.formatDate)) !== -1) {
                classes.push('xdsoft_disabled');
              }

              if (customDateSettings && customDateSettings[1] !== "") {
                classes.push(customDateSettings[1]);
              }

              if (_xdsoft_datetime.currentTime.getMonth() !== m) {
                classes.push('xdsoft_other_month');
              }

              if ((options.defaultSelect || datetimepicker.data('changed')) && _xdsoft_datetime.currentTime.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
                classes.push('xdsoft_current');
              }

              if (today.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
                classes.push('xdsoft_today');
              }

              if (start.getDay() === 0 || start.getDay() === 6 || ~options.weekends.indexOf(start.dateFormat(options.formatDate))) {
                classes.push('xdsoft_weekend');
              }

              if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
                classes.push(options.beforeShowDay(start));
              }

              if (newRow) {
                table += '<tr>';
                newRow = false;
                if (options.weeks) {
                  table += '<th>' + w + '</th>';
                }
              }

              table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '">' +
                    '<div>' + d + '</div>' +
                  '</td>';

              if (start.getDay() === options.dayOfWeekStartPrev) {
                table += '</tr>';
                newRow = true;
              }

              start.setDate(d + 1);
            }
            table += '</tbody></table>';

            calendar.html(table);

            mounth_picker.find('.xdsoft_label span').eq(0).text(options.i18n[options.lang].months[_xdsoft_datetime.currentTime.getMonth()]);
            mounth_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

            // generate timebox
            time = '';
            h = '';
            m = '';
            line_time = function line_time(h, m) {
              var now = _xdsoft_datetime.now();
              now.setHours(h);
              h = parseInt(now.getHours(), 10);
              now.setMinutes(m);
              m = parseInt(now.getMinutes(), 10);
              var optionDateTime = new Date(_xdsoft_datetime.currentTime);
              optionDateTime.setHours(h);
              optionDateTime.setMinutes(m);
              classes = [];
              if((options.minDateTime !== false && options.minDateTime > optionDateTime) || (options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime()) || (options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime())) {
                classes.push('xdsoft_disabled');
              }
              if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && parseInt(_xdsoft_datetime.currentTime.getHours(), 10) === parseInt(h, 10) && (options.step > 59 || Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step === parseInt(m, 10))) {
                if (options.defaultSelect || datetimepicker.data('changed')) {
                  classes.push('xdsoft_current');
                } else if (options.initTime) {
                  classes.push('xdsoft_init_time');
                }
              }
              if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
                classes.push('xdsoft_today');
              }
              time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + now.dateFormat(options.formatTime) + '</div>';
            };

            if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
              for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
                for (j = 0; j < 60; j += options.step) {
                  h = (i < 10 ? '0' : '') + i;
                  m = (j < 10 ? '0' : '') + j;
                  line_time(h, m);
                }
              }
            } else {
              for (i = 0; i < options.allowTimes.length; i += 1) {
                h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
                m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
                line_time(h, m);
              }
            }

            timebox.html(time);

            opt = '';
            i = 0;

            for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
              opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
            }
            yearselect.children().eq(0)
                        .html(opt);

            for (i = 0, opt = ''; i <= 11; i += 1) {
              opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[options.lang].months[i] + '</div>';
            }
            monthselect.children().eq(0).html(opt);
            $(datetimepicker)
              .trigger('generate.xdsoft');
          }, 10);
          event.stopPropagation();
        })
        .on('afterOpen.xdsoft', function () {
          if (options.timepicker) {
            var classType, pheight, height, top;
            if (timebox.find('.xdsoft_current').length) {
              classType = '.xdsoft_current';
            } else if (timebox.find('.xdsoft_init_time').length) {
              classType = '.xdsoft_init_time';
            }
            if (classType) {
              pheight = timeboxparent[0].clientHeight;
              height = timebox[0].offsetHeight;
              top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
              if ((height - pheight) < top) {
                top = height - pheight;
              }
              timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
            } else {
              timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
            }
          }
        });

      timerclick = 0;
      calendar
        .on('click.xdsoft', 'td', function (xdevent) {
          xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
          timerclick += 1;
          var $this = $(this),
            currentTime = _xdsoft_datetime.currentTime;

          if (currentTime === undefined || currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
            currentTime = _xdsoft_datetime.currentTime;
          }

          if ($this.hasClass('xdsoft_disabled')) {
            return false;
          }

          currentTime.setDate(1);
          currentTime.setFullYear($this.data('year'));
          currentTime.setMonth($this.data('month'));
          currentTime.setDate($this.data('date'));

          datetimepicker.trigger('select.xdsoft', [currentTime]);

          input.val(_xdsoft_datetime.str());
          if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === 0 && !options.timepicker))) && !options.inline) {
            datetimepicker.trigger('close.xdsoft');
          }

          if (options.onSelectDate && $.isFunction(options.onSelectDate)) {
            options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
          }

          datetimepicker.data('changed', true);
          datetimepicker.trigger('xchange.xdsoft');
          datetimepicker.trigger('changedatetime.xdsoft');
          setTimeout(function () {
            timerclick = 0;
          }, 200);
        });

      timebox
        .on('click.xdsoft', 'div', function (xdevent) {
          xdevent.stopPropagation();
          var $this = $(this),
            currentTime = _xdsoft_datetime.currentTime;

          if (currentTime === undefined || currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
            currentTime = _xdsoft_datetime.currentTime;
          }

          if ($this.hasClass('xdsoft_disabled')) {
            return false;
          }
          currentTime.setHours($this.data('hour'));
          currentTime.setMinutes($this.data('minute'));
          datetimepicker.trigger('select.xdsoft', [currentTime]);

          datetimepicker.data('input').val(_xdsoft_datetime.str());
          if (!options.inline) {
            datetimepicker.trigger('close.xdsoft');
          }

          if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
            options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
          }
          datetimepicker.data('changed', true);
          datetimepicker.trigger('xchange.xdsoft');
          datetimepicker.trigger('changedatetime.xdsoft');
        });


      datepicker
        .on('mousewheel.xdsoft', function (event) {
          if (!options.scrollMonth) {
            return true;
          }
          if (event.deltaY < 0) {
            _xdsoft_datetime.nextMonth();
          } else {
            _xdsoft_datetime.prevMonth();
          }
          return false;
        });

      input
        .on('mousewheel.xdsoft', function (event) {
          if (!options.scrollInput) {
            return true;
          }
          if (!options.datepicker && options.timepicker) {
            current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
            if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
              current_time_index += event.deltaY;
            }
            if (timebox.children().eq(current_time_index).length) {
              timebox.children().eq(current_time_index).trigger('mousedown');
            }
            return false;
          }
          if (options.datepicker && !options.timepicker) {
            datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
            if (input.val) {
              input.val(_xdsoft_datetime.str());
            }
            datetimepicker.trigger('changedatetime.xdsoft');
            return false;
          }
        });

      datetimepicker
        .on('changedatetime.xdsoft', function (event) {
          if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
            var $input = datetimepicker.data('input');
            options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
            delete options.value;
            $input.trigger('change');
          }
        })
        .on('generate.xdsoft', function () {
          if (options.onGenerate && $.isFunction(options.onGenerate)) {
            options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
          if (triggerAfterOpen) {
            datetimepicker.trigger('afterOpen.xdsoft');
            triggerAfterOpen = false;
          }
        })
        .on('click.xdsoft', function (xdevent) {
          xdevent.stopPropagation();
        });

      current_time_index = 0;

      setPos = function () {
        var offset = datetimepicker.data('input').offset(), top = offset.top + datetimepicker.data('input')[0].offsetHeight - 1, left = offset.left, position = "absolute";
        if (options.fixed) {
          top -= $(window).scrollTop();
          left -= $(window).scrollLeft();
          position = "fixed";
        } else {
          if (top + datetimepicker[0].offsetHeight > $(window).height() + $(window).scrollTop()) {
            top = offset.top - datetimepicker[0].offsetHeight + 1;
          }
          if (top < 0) {
            top = 0;
          }
          if (left + datetimepicker[0].offsetWidth > $(window).width()) {
            left = $(window).width() - datetimepicker[0].offsetWidth;
          }
        }
        datetimepicker.css({
          left: left,
          top: top,
          position: position
        });
      };
      datetimepicker
        .on('open.xdsoft', function (event) {
          var onShow = true;
          if (options.onShow && $.isFunction(options.onShow)) {
            onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
          }
          if (onShow !== false) {
            datetimepicker.show();
            setPos();
            $(window)
              .off('resize.xdsoft', setPos)
              .on('resize.xdsoft', setPos);

            if (options.closeOnWithoutClick) {
              $([document.body, window]).on('mousedown.xdsoft', function arguments_callee6() {
                datetimepicker.trigger('close.xdsoft');
                $([document.body, window]).off('mousedown.xdsoft', arguments_callee6);
              });
            }
          }
        })
        .on('close.xdsoft', function (event) {
          var onClose = true;
          mounth_picker
            .find('.xdsoft_month,.xdsoft_year')
              .find('.xdsoft_select')
                .hide();
          if (options.onClose && $.isFunction(options.onClose)) {
            onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
          }
          if (onClose !== false && !options.opened && !options.inline) {
            datetimepicker.hide();
          }
          event.stopPropagation();
        })
        .on('toggle.xdsoft', function (event) {
          if (datetimepicker.is(':visible')) {
            datetimepicker.trigger('close.xdsoft');
          } else {
            datetimepicker.trigger('open.xdsoft');
          }
        })
        .data('input', input);

      timer = 0;
      timer1 = 0;

      datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
      datetimepicker.setOptions(options);

      function getCurrentValue() {

        var ct = false, time;

        if (options.startDate) {
          ct = _xdsoft_datetime.strToDate(options.startDate);
        } else {
          ct = options.value || ((input && input.val && input.val()) ? input.val() : '');
          if (ct) {
            ct = _xdsoft_datetime.strToDateTime(ct);
          } else if (options.defaultDate) {
            ct = _xdsoft_datetime.strToDate(options.defaultDate);
            if (options.defaultTime) {
              time = _xdsoft_datetime.strtotime(options.defaultTime);
              ct.setHours(time.getHours());
              ct.setMinutes(time.getMinutes());
            }
          }
        }

        if (ct && _xdsoft_datetime.isValidDate(ct)) {
          datetimepicker.data('changed', true);
        } else {
          ct = '';
        }

        return ct || 0;
      }

      _xdsoft_datetime.setCurrentTime(getCurrentValue());

      input
        .data('xdsoft_datetimepicker', datetimepicker)
        .on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function (event) {
          if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) {
            return;
          }
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (input.is(':disabled')) {
              return;
            }

            triggerAfterOpen = true;
            _xdsoft_datetime.setCurrentTime(getCurrentValue());

            datetimepicker.trigger('open.xdsoft');
          }, 100);
        })
        .on('keydown.xdsoft', function (event) {
          var val = this.value, elementSelector,
            key = event.which;
          if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
            elementSelector = $("input:visible,textarea:visible");
            datetimepicker.trigger('close.xdsoft');
            elementSelector.eq(elementSelector.index(this) + 1).focus();
            return false;
          }
          if ([TAB].indexOf(key) !== -1) {
            datetimepicker.trigger('close.xdsoft');
            return true;
          }
        });
    };
    destroyDateTimePicker = function (input) {
      var datetimepicker = input.data('xdsoft_datetimepicker');
      if (datetimepicker) {
        datetimepicker.data('xdsoft_datetime', null);
        datetimepicker.remove();
        input
          .data('xdsoft_datetimepicker', null)
          .off('.xdsoft');
        $(window).off('resize.xdsoft');
        $([window, document.body]).off('mousedown.xdsoft');
        if (input.unmousewheel) {
          input.unmousewheel();
        }
      }
    };
    $(document)
      .off('keydown.xdsoftctrl keyup.xdsoftctrl')
      .on('keydown.xdsoftctrl', function (e) {
        if (e.keyCode === CTRLKEY) {
          ctrlDown = true;
        }
      })
      .on('keyup.xdsoftctrl', function (e) {
        if (e.keyCode === CTRLKEY) {
          ctrlDown = false;
        }
      });
    return this.each(function () {
      var datetimepicker = $(this).data('xdsoft_datetimepicker');
      if (datetimepicker) {
        if ($.type(opt) === 'string') {
          switch (opt) {
          case 'show':
            $(this).select().focus();
            datetimepicker.trigger('open.xdsoft');
            break;
          case 'hide':
            datetimepicker.trigger('close.xdsoft');
            break;
          case 'toggle':
            datetimepicker.trigger('toggle.xdsoft');
            break;
          case 'destroy':
            destroyDateTimePicker($(this));
            break;
          case 'reset':
            this.value = this.defaultValue;
            if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(Date.parseDate(this.value, options.format))) {
              datetimepicker.data('changed', false);
            }
            datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
            break;
          }
        } else {
          datetimepicker
            .setOptions(opt);
        }
        return 0;
      }
      if ($.type(opt) !== 'string') {
        if (!options.lazyInit || options.open || options.inline) {
          createDateTimePicker($(this));
        } else {
          lazyInit($(this));
        }
      }
    });
  };
  $.fn.datetimepicker.defaults = default_options;
}(jQuery));
(function () {

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

// Parse and Format Library
//http://www.xaprb.com/blog/2005/12/12/javascript-closures-for-runtime-efficiency/
/*
 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the
 * Free Software Foundation, version 2.1.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
 * details.
 */
Date.parseFunctions={count:0};Date.parseRegexes=[];Date.formatFunctions={count:0};Date.prototype.dateFormat=function(b){if(b=="unixtime"){return parseInt(this.getTime()/1000);}if(Date.formatFunctions[b]==null){Date.createNewFormat(b);}var a=Date.formatFunctions[b];return this[a]();};Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;var codePrefix="Date.prototype."+funcName+" = function() {return ";var code="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;code+="'"+String.escape(ch)+"' + ";}else{code+=Date.getFormatCode(ch);}}}if(code.length==0){code="\"\"";}else{code=code.substring(0,code.length-3);}eval(codePrefix+code+";}");};Date.getFormatCode=function(a){switch(a){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(a)+"' + ";}};Date.parseDate=function(a,c){if(c=="unixtime"){return new Date(!isNaN(parseInt(a))?parseInt(a)*1000:0);}if(Date.parseFunctions[c]==null){Date.createParser(c);}var b=Date.parseFunctions[c];return Date[b](a);};Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++;var regexNum=Date.parseRegexes.length;var currentGroup=1;Date.parseFunctions[format]=funcName;var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {";var regex="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;regex+=String.escape(ch);}else{obj=Date.formatCodeToRegex(ch,currentGroup);currentGroup+=obj.g;regex+=obj.s;if(obj.g&&obj.c){code+=obj.c;}}}}code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$");eval(code);};Date.formatCodeToRegex=function(b,a){switch(b){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+a+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+a+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+a+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+a+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+a+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+a+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(b)};}};Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");};Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0");};Date.prototype.getDayOfYear=function(){var a=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var b=0;b<this.getMonth();++b){a+=Date.daysInMonth[b];}return a+this.getDate();};Date.prototype.getWeekOfYear=function(){var b=this.getDayOfYear()+(4-this.getDay());var a=new Date(this.getFullYear(),0,1);var c=(7-a.getDay()+4);return String.leftPad(Math.ceil((b-c)/7)+1,2,"0");};Date.prototype.isLeapYear=function(){var a=this.getFullYear();return((a&3)==0&&(a%100||(a%400==0&&a)));};Date.prototype.getFirstDayOfMonth=function(){var a=(this.getDay()-(this.getDate()-1))%7;return(a<0)?(a+7):a;};Date.prototype.getLastDayOfMonth=function(){var a=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return(a<0)?(a+7):a;};Date.prototype.getDaysInMonth=function(){Date.daysInMonth[1]=this.isLeapYear()?29:28;return Date.daysInMonth[this.getMonth()];};Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};String.escape=function(a){return a.replace(/('|\\)/g,"\\$1");};String.leftPad=function(d,b,c){var a=new String(d);if(c==null){c=" ";}while(a.length<b){a=c+a;}return a;};Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.y2kYear=50;Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"};
}());



/*  jquery.mb.YTPlayer */


function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+jQuery/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":jQuery.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>jQuery.CSS.filters[b].max?jQuery.CSS.filters[b].max:c,jQuery.CSS.filters[b].unit),a[e+"filter"]+=d+"("+c+") ",delete a[b]}function isTouchSupported(){var a=nAgt.msMaxTouchPoints,b="ontouchstart"in document.createElement("div");return a||b?!0:!1}function isTouchSupported(){var a=nAgt.msMaxTouchPoints,b="ontouchstart"in document.createElement("div");return a||b?!0:!1}var ytp=ytp||{},getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};!function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"3.2.1",build:"7072",author:"Matteo Bicocchi (pupunzi)",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:50,addRaster:!1,mask:!1,opacity:1,quality:"default",mute:!1,loop:!0,fadeOnStartTime:1500,showControls:!0,showAnnotations:!1,cc_load_policy:!1,showYTLogo:!0,stopMovieOnBlur:!0,realfullscreen:!0,abundance:.2,coverImage:!1,useOnMobile:!0,mobileFallbackImage:null,gaTrack:!0,optimizeDisplay:!0,remember_last_time:!1,playOnlyIfVisible:!1,anchor:"center,center",addFilters:null,onReady:function(a){},onError:function(a,b){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},controlBar:null,locationProtocol:"https:",defaultFilters:{grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},buildPlayer:function(options){function isIframe(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a}if(ytp.YTAPIReady||"undefined"!=typeof window.YT)setTimeout(function(){jQuery(document).trigger("YTAPIReady"),ytp.YTAPIReady=!0},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(tag)}return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);$YTPlayer.hide(),YTPlayer.loop=0,YTPlayer.state=0,YTPlayer.filters=jQuery.extend(!0,{},jQuery.mbYTPlayer.defaultFilters),YTPlayer.filtersEnabled=!0,YTPlayer.id=YTPlayer.id||"YTP_"+(new Date).getTime(),$YTPlayer.addClass("mb_YTPlayer"),YTPlayer.opt=jQuery.extend({},options),YTPlayer.property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property"),"undefined"!=typeof YTPlayer.property&&("undefined"!=typeof YTPlayer.property.vol&&0===YTPlayer.property.vol&&(YTPlayer.property.vol=1,YTPlayer.property.mute=!0),YTPlayer.property.loop&&"boolean"==typeof YTPlayer.property.loop&&(YTPlayer.property.loop=9999),YTPlayer.property.realfullscreen=isIframe()?!1:YTPlayer.property.realfullscreen,YTPlayer.property.showAnnotations=YTPlayer.property.showAnnotations?"1":"3",YTPlayer.property.cc_load_policy=YTPlayer.property.cc_load_policy?"1":"0",YTPlayer.property.coverImage=YTPlayer.property.coverImage||YTPlayer.property.backgroundImage,jQuery.mbBrowser.msie&&jQuery.mbBrowser.version<9&&(YTPlayer.property.opacity=1),YTPlayer.property.containment="self"==YTPlayer.property.containment?$YTPlayer:jQuery(YTPlayer.property.containment)),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1,$YTPlayer.attr("id")||$YTPlayer.attr("id","ytp_"+(new Date).getTime()),YTPlayer.playerID="iframe_"+YTPlayer.id,YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0,YTPlayer.videoID=YTPlayer.property.videoURL?getYTPVideoID(YTPlayer.property.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,YTPlayer.playlistID=YTPlayer.property.videoURL?getYTPVideoID(YTPlayer.property.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1,jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,YTPlayer.property),YTPlayer.opt.elementId=YTPlayer.id;var start_from_last=0;if(jQuery.mbCookie.get("YTPlayer_start_from"+YTPlayer.videoID)&&(start_from_last=parseFloat(jQuery.mbCookie.get("YTPlayer_start_from"+YTPlayer.videoID))),YTPlayer.opt.remember_last_time&&start_from_last&&(YTPlayer.start_from_last=start_from_last,jQuery.mbCookie.remove("YTPlayer_start_from"+YTPlayer.videoID)),YTPlayer.isPlayer="self"==YTPlayer.opt.containment||$YTPlayer.is(YTPlayer.opt.containment),YTPlayer.isBackground=YTPlayer.opt.containment.is("body"),!YTPlayer.isBackground||!ytp.backgroundIsInited){YTPlayer.isPlayer&&$YTPlayer.show(),YTPlayer.overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay"),YTPlayer.isPlayer&&YTPlayer.overlay.on("click",function(){$YTPlayer.YTPTogglePlay()}),YTPlayer.wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+YTPlayer.id),YTPlayer.wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0});var playerBox=jQuery("<div/>").attr("id",YTPlayer.playerID).addClass("playerBox");if(playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden",opacity:1}),YTPlayer.wrapper.append(playerBox),playerBox.after(YTPlayer.overlay),YTPlayer.isPlayer&&(YTPlayer.inlineWrapper=jQuery("<div/>").addClass("inline-YTPlayer"),YTPlayer.inlineWrapper.css({position:"relative",maxWidth:YTPlayer.opt.containment.css("width")}),YTPlayer.opt.containment.css({position:"relative",paddingBottom:"56.25%",overflow:"hidden",height:0}),YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),YTPlayer.wrapper.css({position:"fixed",top:0,left:0,zIndex:0})):"static"==YTPlayer.opt.containment.css("position")&&(YTPlayer.opt.containment.css({position:"relative"}),$YTPlayer.show()),YTPlayer.opt.containment.prepend(YTPlayer.wrapper),YTPlayer.isBackground||YTPlayer.overlay.on("mouseenter",function(){YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.removeClass("visible")}),jQuery.mbBrowser.mobile&&!YTPlayer.opt.useOnMobile)return YTPlayer.opt.mobileFallbackImage&&(YTPlayer.wrapper.css({backgroundImage:"url("+YTPlayer.opt.mobileFallbackImage+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat",opacity:1}),YTPlayer.wrapper.css({opacity:1})),$YTPlayer;jQuery.mbBrowser.mobile&&YTPlayer.opt.autoPlay&&YTPlayer.opt.useOnMobile&&jQuery("body").one("touchstart",function(){YTPlayer.player.playVideo()}),jQuery(document).one("YTAPIReady",function(){$YTPlayer.trigger("YTAPIReady_"+YTPlayer.id),ytp.YTAPIReady=!0}),YTPlayer.isOnScreen=jQuery.mbYTPlayer.isOnScreen(YTPlayer),$YTPlayer.one("YTAPIReady_"+YTPlayer.id,function(){var a=this,b=jQuery(a);a.isBackground&&ytp.backgroundIsInited||a.isInit||(a.isBackground&&(ytp.backgroundIsInited=!0),a.opt.autoPlay="undefined"==typeof a.opt.autoPlay?a.isBackground?!0:!1:a.opt.autoPlay,a.opt.vol=a.opt.vol?a.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(a),jQuery(a).on("YTPChanged",function(c){if(!a.isInit){a.isInit=!0;var d={modestbranding:1,autoplay:0,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:a.playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:a.opt.showAnnotations,cc_load_policy:a.opt.cc_load_policy,playsinline:jQuery.browser.mobile?1:0,html5:document.createElement("video").canPlayType?1:0};new YT.Player(a.playerID,{playerVars:d,events:{onReady:function(c){a.player=c.target,a.player.loadVideoById({videoId:a.videoID.toString(),suggestedQuality:a.opt.quality}),b.trigger("YTPlayerIsReady_"+a.id)},onStateChange:function(b){if("function"==typeof b.target.getPlayerState){var c=b.target.getPlayerState();if(a.preventTrigger)return void(a.preventTrigger=!1);a.state=c;var d;switch(c){case-1:d="YTPUnstarted";break;case 0:d="YTPRealEnd";break;case 1:d="YTPPlay",a.controlBar.length&&a.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause);break;case 2:d="YTPPause",a.controlBar.length&&a.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:a.player.setPlaybackQuality(a.opt.quality),d="YTPBuffering",a.controlBar.length&&a.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:d="YTPCued"}var e=jQuery.Event(d);e.time=a.currentTime,a.preventTrigger||jQuery(a).trigger(e)}},onPlaybackQualityChange:function(b){var c=b.target.getPlaybackQuality(),d=jQuery.Event("YTPQualityChange");d.quality=c,jQuery(a).trigger(d)},onError:function(c){switch("function"==typeof a.opt.onError&&a.opt.onError(b,c),c.data){case 2:console.error("video ID:: "+a.videoID+": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");break;case 5:console.error("video ID:: "+a.videoID+": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");break;case 100:console.error("video ID:: "+a.videoID+": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");break;case 101:case 150:console.error("video ID:: "+a.videoID+": The owner of the requested video does not allow it to be played in embedded players.")}a.isList&&jQuery(a).YTPPlayNext()}}}),b.on("YTPlayerIsReady_"+a.id,function(){return a.isReady?this:(a.playerEl=a.player.getIframe(),jQuery(a.playerEl).unselectable(),b.optimizeDisplay(),jQuery(window).off("resize.YTP_"+a.id).on("resize.YTP_"+a.id,function(){b.optimizeDisplay()}),a.opt.remember_last_time&&jQuery(window).on("unload.YTP_"+a.id,function(){var b=a.player.getCurrentTime();jQuery.mbCookie.set("YTPlayer_start_from"+a.videoID,b,0)}),void b.YTPCheckForState())})}}))}),$YTPlayer.off("YTPTime.mask"),jQuery.mbYTPlayer.applyMask(YTPlayer)}})},isOnScreen:function(a){var b=a.wrapper,c=jQuery(window).scrollTop(),d=c+jQuery(window).height(),e=b.offset().top+b.height()/1.2,f=b.offset().top+b.height()/2.8;return d>=f&&e>=c},getDataFromAPI:function(a){if(a.videoData=jQuery.mbStorage.get("YTPlayer_data_"+a.videoID),jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(a.hasData&&a.isPlayer&&!a.opt.autoPlay){var b="false"!=a.opt.coverImage?a.opt.coverImage:a.videoData.thumb_max||a.videoData.thumb_high||a.videoData.thumb_medium;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"})}}),a.videoData)setTimeout(function(){a.opt.ratio="auto"==a.opt.ratio?16/9:a.opt.ratio,a.dataReceived=!0;var b=jQuery.Event("YTPChanged");b.time=a.currentTime,b.videoId=a.videoID,b.opt=a.opt,jQuery(a).trigger(b);var c=jQuery.Event("YTPData");c.prop={};for(var d in a.videoData)c.prop[d]=a.videoData[d];jQuery(a).trigger(c)},a.opt.fadeOnStartTime),a.hasData=!0;else if(jQuery.mbYTPlayer.apiKey)jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+a.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(b){function c(b){a.videoData={},a.videoData.id=a.videoID,a.videoData.channelTitle=b.channelTitle,a.videoData.title=b.title,a.videoData.description=b.description.length<400?b.description:b.description.substring(0,400)+" ...",a.videoData.aspectratio="auto"==a.opt.ratio?16/9:a.opt.ratio,a.opt.ratio=a.videoData.aspectratio,a.videoData.thumb_max=b.thumbnails.maxres?b.thumbnails.maxres.url:null,a.videoData.thumb_high=b.thumbnails.high?b.thumbnails.high.url:null,a.videoData.thumb_medium=b.thumbnails.medium?b.thumbnails.medium.url:null,jQuery.mbStorage.set("YTPlayer_data_"+a.videoID,a.videoData)}a.dataReceived=!0;var d=jQuery.Event("YTPChanged");d.time=a.currentTime,d.videoId=a.videoID,jQuery(a).trigger(d),b.items[0]?(c(b.items[0].snippet),a.hasData=!0):(a.videoData={},a.hasData=!1);var e=jQuery.Event("YTPData");e.prop={};for(var f in a.videoData)e.prop[f]=a.videoData[f];jQuery(a).trigger(e)});else{if(setTimeout(function(){var b=jQuery.Event("YTPChanged");b.time=a.currentTime,b.videoId=a.videoID,jQuery(a).trigger(b)},50),!a.opt.autoPlay){var b="false"!=a.opt.coverImage?a.opt.coverImage:jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+a.videoID+"/maxresdefault.jpg";b&&a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"})}a.videoData=null,a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio}a.isPlayer&&!a.opt.autoPlay&&(a.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(a).append(a.loading),a.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},getPlaylistID:function(){var a=this.get(0);return a.playlistID||!1},setVideoQuality:function(a){var b=this.get(0);return b.player.setPlaybackQuality(a),this},playlist:function(a,b,c){function d(h,i){i=i||"";var j="https://www.googleapis.com/youtube/v3/playlistItems";jQuery.getJSON(j,{part:"snippet,contentDetails",playlistId:h,maxResults:50,pageToken:i,key:jQuery.mbYTPlayer.apiKey}).done(function(h){e(h),h.nextPageToken?(i=h.nextPageToken,d(plID,i,a)):f.YTPlaylist(g.videos,b,c)})}function e(a){for(var b=a.items.length,c=0;b>c;c++)g.videos.push({videoURL:a.items[c].contentDetails.videoId})}var f=this,g=f.get(0);return"String"==typeof a&&""!=jQuery.mbYTPlayer.apiKey?(d(a),this):(g.isList=!0,b&&(a=jQuery.shuffle(a)),g.videoID||(g.videos=a,g.videoCounter=1,g.videoLength=a.length,jQuery(g).data("property",a[0]),jQuery(g).YTPlayer()),"function"==typeof c&&jQuery(g).one("YTPChanged",function(){c(g)}),jQuery(g).on("YTPEnd",function(){jQuery(g).YTPPlayNext()}),this)},playNext:function(){var a=this.get(0);return a.videoCounter++,a.videoCounter>a.videoLength&&(a.videoCounter=1),jQuery(a).YTPPlayIndex(a.videoCounter),this},playPrev:function(){var a=this.get(0);return a.videoCounter--,a.videoCounter<=0&&(a.videoCounter=a.videoLength),jQuery(a).YTPPlayIndex(a.videoCounter),this},playIndex:function(a){var b=this.get(0);b.checkForStartAt&&(clearInterval(b.checkForStartAt),clearInterval(b.getState)),b.videoCounter=a,b.videoCounter>=b.videoLength&&(b.videoCounter=b.videoLength);var c=b.videos[b.videoCounter-1];return jQuery(b).YTPChangeVideo(c),this},changeVideo:function(a){var b=this,c=b.get(0);c.opt.startAt=0,c.opt.stopAt=0,c.opt.mask=!1,c.opt.mute=!0,c.opt.autoPlay=!0,c.opt.addFilters=!1,c.opt.coverImage=!1,c.hasData=!1,c.hasChanged=!0,c.player.loopTime=void 0,a&&jQuery.extend(c.opt,a),c.videoID=getYTPVideoID(c.opt.videoURL).videoID,c.opt.loop&&"boolean"==typeof c.opt.loop&&(c.opt.loop=9999),c.wrapper.css({background:"none"}),jQuery(c.playerEl).CSSAnimate({opacity:0},c.opt.fadeOnStartTime,function(){jQuery.mbYTPlayer.getDataFromAPI(c),b.YTPGetPlayer().loadVideoById({videoId:c.videoID,suggestedQuality:c.opt.quality}),b.YTPPause(),b.optimizeDisplay(),b.YTPCheckForState()});var d=jQuery.Event("YTPChangeVideo");return d.time=c.currentTime,jQuery(c).trigger(d),jQuery.mbYTPlayer.applyMask(c),this},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);return ytp.YTAPIReady=!0,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null,a.isReady=!1,a.wrapper.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState),this},fullscreen:function(real){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}function RunPrefixMethod(a,b){for(var c,d,e=["webkit","moz","ms","o",""],f=0;f<e.length&&!a[c];){if(c=b,""==e[f]&&(c=c.substr(0,1).toLowerCase()+c.substr(1)),c=e[f]+c,d=typeof a[c],"undefined"!=d)return e=[e[f]],"function"==d?a[c]():a[c];f++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isPlayer?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.mbBrowser.mozilla?"mozfullscreenchange":jQuery.mbBrowser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).YTPSetVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("YTPFullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}return YTPlayer.isAlone?(jQuery(document).off("mousemove.YTPlayer"),clearTimeout(YTPlayer.hideCursor),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(jQuery(document).on("mousemove.YTPlayer",function(a){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(a.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("YTPFullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},2*YTPlayer.opt.fadeOnStartTime),videoWrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},YTPlayer.opt.fadeOnStartTime)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},2*YTPlayer.opt.fadeOnStartTime),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0),this},toggleLoops:function(){var a=this.get(0),b=a.opt;return 1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1),this},play:function(){var a=this.get(0);if(!a.isReady)return this;a.player.playVideo(),jQuery(a.playerEl).css({opacity:1}),a.wrapper.css({backgroundImage:"none"}),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},a.opt.fadeOnStartTime);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.pause),a.state=1,a.orig_background=jQuery(a).css("background-image"),this},togglePlay:function(a){var b=this.get(0);return 1==b.state?this.YTPPause():this.YTPPlay(),"function"==typeof a&&a(b.state),this},stop:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo(),this},pause:function(){var a=this.get(0);return a.player.pauseVideo(),a.state=2,this},seekTo:function(a){var b=this.get(0);return b.player.seekTo(a,!0),this},setVolume:function(a){var b=this.get(0);return a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.opt.vol==a?b.isMute?jQuery(b).YTPUnmute():jQuery(b).YTPMute():(b.opt.vol=a,b.player.setVolume(b.opt.vol),b.volumeBar&&b.volumeBar.length&&b.volumeBar.updateSliderVal(a)):jQuery(b).YTPUnmute(),this},getVolume:function(){var a=this.get(0);return a.player.getVolume()},toggleVolume:function(){var a=this.get(0);return a?(a.player.isMuted()?jQuery(a).YTPUnmute():jQuery(a).YTPMute(),this):this},mute:function(){var a=this.get(0);if(a.isMute)return this;a.player.mute(),a.isMute=!0,a.player.setVolume(0),a.volumeBar&&a.volumeBar.length&&a.volumeBar.width()>10&&a.volumeBar.updateSliderVal(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.addClass("muted");var d=jQuery.Event("YTPMuted");return d.time=a.currentTime,a.preventTrigger||jQuery(a).trigger(d),this},unmute:function(){var a=this.get(0);if(!a.isMute)return this;a.player.unMute(),a.isMute=!1,a.player.setVolume(a.opt.vol),a.volumeBar&&a.volumeBar.length&&a.volumeBar.updateSliderVal(a.opt.vol>10?a.opt.vol:10);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.removeClass("muted");var d=jQuery.Event("YTPUnmuted");return d.time=a.currentTime,a.preventTrigger||jQuery(a).trigger(d),this},applyFilter:function(a,b){var c=this,d=c.get(0);d.filters[a].value=b,d.filtersEnabled&&c.YTPEnableFilters()},applyFilters:function(a){var b=this,c=b.get(0);if(!c.isReady)return jQuery(c).on("YTPReady",function(){b.YTPApplyFilters(a)}),this;for(var d in a)b.YTPApplyFilter(d,a[d]);b.trigger("YTPFiltersApplied")},toggleFilter:function(a,b){var c=this,d=c.get(0);return d.filters[a].value?d.filters[a].value=0:d.filters[a].value=b,d.filtersEnabled&&jQuery(d).YTPEnableFilters(),this},toggleFilters:function(a){var b=this,c=b.get(0);return c.filtersEnabled?(jQuery(c).trigger("YTPDisableFilters"),jQuery(c).YTPDisableFilters()):(jQuery(c).YTPEnableFilters(),jQuery(c).trigger("YTPEnableFilters")),"function"==typeof a&&a(c.filtersEnabled),this},disableFilters:function(){var a=this,b=a.get(0),c=jQuery(b.playerEl);return c.css("-webkit-filter",""),c.css("filter",""),b.filtersEnabled=!1,this},enableFilters:function(){var a=this,b=a.get(0),c=jQuery(b.playerEl),d="";for(var e in b.filters)b.filters[e].value&&(d+=e.replace("_","-")+"("+b.filters[e].value+b.filters[e].unit+") ");return c.css("-webkit-filter",d),c.css("filter",d),b.filtersEnabled=!0,this},removeFilter:function(a,b){var c=this,d=c.get(0);if("function"==typeof a&&(b=a,a=null),a)c.YTPApplyFilter(a,0),"function"==typeof b&&b(a);else{for(var e in d.filters)c.YTPApplyFilter(e,0);"function"==typeof b&&b(e),d.filters=jQuery.extend(!0,{},jQuery.mbYTPlayer.defaultFilters)}var f=jQuery.Event("YTPFiltersApplied");return c.trigger(f),this},getFilters:function(){var a=this.get(0);return a.filters},addMask:function(a){var b=this.get(0);a||(a=b.actualMask);var c=jQuery("<img/>").attr("src",a).on("load",function(){b.overlay.CSSAnimate({opacity:0},b.opt.fadeOnStartTime,function(){b.hasMask=!0,c.remove(),b.overlay.css({backgroundImage:"url("+a+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}),b.overlay.CSSAnimate({opacity:1},b.opt.fadeOnStartTime)})});return this},removeMask:function(){var a=this.get(0);return a.overlay.CSSAnimate({opacity:0},a.opt.fadeOnStartTime,function(){a.hasMask=!1,a.overlay.css({backgroundImage:"",backgroundRepeat:"",backgroundPosition:"",backgroundSize:""}),a.overlay.CSSAnimate({opacity:1},a.opt.fadeOnStartTime)}),this},applyMask:function(a){var b=jQuery(a);if(b.off("YTPTime.mask"),a.opt.mask)if("string"==typeof a.opt.mask)b.YTPAddMask(a.opt.mask),a.actualMask=a.opt.mask;else if("object"==typeof a.opt.mask){for(var c in a.opt.mask)if(a.opt.mask[c]){jQuery("<img/>").attr("src",a.opt.mask[c])}a.opt.mask[0]&&b.YTPAddMask(a.opt.mask[0]),b.on("YTPTime.mask",function(c){for(var d in a.opt.mask)c.time==d&&(a.opt.mask[d]?(b.YTPAddMask(a.opt.mask[d]),a.actualMask=a.opt.mask[d]):b.YTPRemoveMask())})}},toggleMask:function(){var a=this.get(0),b=jQuery(a);return a.hasMask?b.YTPRemoveMask():b.YTPAddMask(),this},manageProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildControls:function(YTPlayer){if(jQuery("#controlBar_"+YTPlayer.id).remove(),!YTPlayer.opt.showControls)return void(YTPlayer.controlBar=!1);if(YTPlayer.opt.showYTLogo=YTPlayer.opt.showYTLogo||YTPlayer.opt.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).YTPPause():jQuery(YTPlayer).YTPPlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).YTPUnmute():jQuery(YTPlayer).YTPMute()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=YTPlayer.opt.videoURL?YTPlayer.opt.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+YTPlayer.opt.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"]=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),YTPlayer.opt.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(a){0==a.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(a.value),YTPlayer.isMute||(YTPlayer.opt.vol=a.value)}})}},checkForState:function(){var YTPlayer=this.get(0),$YTPlayer=jQuery(YTPlayer);clearInterval(YTPlayer.getState);var interval=100;return jQuery.contains(document,YTPlayer)?(jQuery.mbYTPlayer.checkForStart(YTPlayer),void(YTPlayer.getState=setInterval(function(){var $YTPlayer=jQuery(YTPlayer);if(YTPlayer.isReady){var prog=jQuery(YTPlayer).YTPManageProgress(),stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.currentTime!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(YTPEvent)}if(YTPlayer.currentTime=prog.currentTime,YTPlayer.totalTime=YTPlayer.player.getDuration(),0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,YTPlayer.player.playVideo()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.YTPPause())),YTPlayer.opt.playOnlyIfVisible){var isOnScreen=jQuery.mbYTPlayer.isOnScreen(YTPlayer);isOnScreen||1!=YTPlayer.state?isOnScreen&&!YTPlayer.isOnScreen&&(YTPlayer.isOnScreen=!0,YTPlayer.player.playVideo()):(YTPlayer.isOnScreen=!1,$YTPlayer.YTPPause())}if(YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),YTPlayer.player.getPlayerState()>0&&(parseFloat(YTPlayer.player.getDuration()-.5)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},1e3),YTPlayer.isList){if(!YTPlayer.opt.loop||YTPlayer.opt.loop>0&&YTPlayer.player.loopTime===YTPlayer.opt.loop-1){YTPlayer.player.loopTime=void 0,clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.currentTime,void jQuery(YTPlayer).trigger(YTPEnd)}}else if(!YTPlayer.opt.loop||YTPlayer.opt.loop>0&&YTPlayer.player.loopTime===YTPlayer.opt.loop-1)return YTPlayer.player.loopTime=void 0,YTPlayer.preventTrigger=!0,YTPlayer.state=2,jQuery(YTPlayer).YTPPause(),void YTPlayer.wrapper.CSSAnimate({opacity:0},YTPlayer.opt.fadeOnStartTime,function(){YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);var a=jQuery.Event("YTPEnd");a.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(YTPlayer.opt.startAt,!0),YTPlayer.isBackground?YTPlayer.orig_background&&jQuery(YTPlayer).css("background-image",YTPlayer.orig_background):YTPlayer.opt.coverImage&&YTPlayer.isPlayer&&(YTPlayer.opt.coverImage=YTPlayer.opt.coverImage||YTPlayer.orig_background,YTPlayer.opt.containment.css({background:"url("+YTPlayer.opt.coverImage+") center center",backgroundSize:"cover"}))});YTPlayer.player.loopTime=YTPlayer.player.loopTime?++YTPlayer.player.loopTime:1,YTPlayer.opt.startAt=YTPlayer.opt.startAt||1,YTPlayer.preventTrigger=!0,YTPlayer.state=2,YTPlayer.player.pauseVideo(),YTPlayer.player.seekTo(YTPlayer.opt.startAt,!0),YTPlayer.player.playVideo()}}},interval))):($YTPlayer.YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt))},checkForStart:function(YTPlayer){var $YTPlayer=jQuery(YTPlayer);if(!jQuery.contains(document,YTPlayer))return void $YTPlayer.YTPPlayerDestroy();
if(jQuery.mbYTPlayer.buildControls(YTPlayer),YTPlayer.overlay)if(YTPlayer.opt.addRaster){var classN="dot"==YTPlayer.opt.addRaster?"raster-dot":"raster";YTPlayer.overlay.addClass(YTPlayer.isRetina?classN+" retina":classN)}else YTPlayer.overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});YTPlayer.preventTrigger=!0,YTPlayer.state=2,$YTPlayer.YTPPause(),$YTPlayer.YTPMute();var startAt=YTPlayer.start_from_last?YTPlayer.start_from_last:YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;return YTPlayer.player.playVideo(),$YTPlayer.YTPMute(),YTPlayer.player.seekTo(startAt,!0),YTPlayer.checkForStartAt=setInterval(function(){var canPlayVideo=YTPlayer.player.getVideoLoadedFraction()>=startAt/YTPlayer.player.getDuration();if(YTPlayer.player.getDuration()>0&&YTPlayer.player.getCurrentTime()>=startAt&&canPlayVideo){YTPlayer.start_from_last=null,clearInterval(YTPlayer.checkForStartAt),"function"==typeof YTPlayer.opt.onReady&&YTPlayer.opt.onReady(YTPlayer),YTPlayer.isReady=!0,$YTPlayer.YTPRemoveFilter(),YTPlayer.opt.addFilters?$YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters):$YTPlayer.YTPApplyFilters({}),$YTPlayer.YTPEnableFilters();var YTPready=jQuery.Event("YTPReady");if(YTPready.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(YTPready),YTPlayer.preventTrigger=!0,YTPlayer.state=2,jQuery(YTPlayer).YTPPause(),YTPlayer.opt.mute||jQuery(YTPlayer).YTPUnmute(),YTPlayer.preventTrigger=!1,"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)?_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]):"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()),YTPlayer.opt.autoPlay){var YTPStart=jQuery.Event("YTPStart");YTPStart.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(YTPStart),$YTPlayer.YTPPlay(),"mac"==jQuery.mbBrowser.os.name&&jQuery.mbBrowser.safari&&jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion,"10.1")<0&&(YTPlayer.safariPlay=setInterval(function(){1!=YTPlayer.state?$YTPlayer.YTPPlay():clearInterval(YTPlayer.safariPlay)},10))}else setTimeout(function(){YTPlayer.player.pauseVideo(),YTPlayer.start_from_last&&YTPlayer.player.seekTo(startAt,!0),YTPlayer.isPlayer||(YTPlayer.opt.coverImage?(YTPlayer.wrapper.css({opacity:0}),setTimeout(function(){YTPlayer.wrapper.css({background:"rgba(0,0,0,0.5) url("+YTPlayer.opt.coverImage+") center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}).CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime)},YTPlayer.opt.fadeOnStartTime)):(jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},YTPlayer.opt.fadeOnStartTime),YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime)))},150),YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay&&YTPlayer.loading&&YTPlayer.loading.length&&(YTPlayer.loading.html("Ready"),setTimeout(function(){YTPlayer.loading.fadeOut()},100)),YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.slideDown(1e3)}else"mac"==jQuery.mbBrowser.os.name&&jQuery.mbBrowser.safari&&jQuery.mbBrowser.fullVersion&&jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion,"10.1")<0&&(YTPlayer.player.playVideo(),startAt>=0&&YTPlayer.player.seekTo(startAt,!0))},500),$YTPlayer},getTime:function(){var a=this.get(0);return jQuery.mbYTPlayer.formatTime(a.currentTime)},getTotalTime:function(a){var b=this.get(0);return jQuery.mbYTPlayer.formatTime(b.totalTime)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)},setAnchor:function(a){var b=this;b.optimizeDisplay(a)},getAnchor:function(){var a=this.get(0);return a.opt.anchor}},jQuery.fn.optimizeDisplay=function(anchor){var YTPlayer=this.get(0),vid={};YTPlayer.opt.anchor=anchor||YTPlayer.opt.anchor,YTPlayer.opt.anchor="undefined "!=typeof YTPlayer.opt.anchor?YTPlayer.opt.anchor:"center,center";var YTPAlign=YTPlayer.opt.anchor.split(","),el=YTPlayer.wrapper,iframe=jQuery(YTPlayer.playerEl);if(YTPlayer.opt.optimizeDisplay){var abundance=iframe.height()*YTPlayer.opt.abundance,win={};win.width=el.outerWidth(),win.height=el.outerHeight()+abundance,YTPlayer.opt.ratio=eval(YTPlayer.opt.ratio),vid.width=win.width,vid.height=Math.ceil(vid.width/YTPlayer.opt.ratio),vid.marginTop=Math.ceil(-((vid.height-win.height)/2)),vid.marginLeft=0;var lowest=vid.height<win.height;lowest&&(vid.height=win.height,vid.width=Math.ceil(vid.height*YTPlayer.opt.ratio),vid.marginTop=0,vid.marginLeft=Math.ceil(-((vid.width-win.width)/2)));for(var a in YTPAlign)if(YTPAlign.hasOwnProperty(a)){var al=YTPAlign[a].replace(/ /g,"");switch(al){case"top":vid.marginTop=lowest?-((vid.height-win.height)/2):0;break;case"bottom":vid.marginTop=lowest?0:-(vid.height-win.height);break;case"left":vid.marginLeft=0;break;case"right":vid.marginLeft=lowest?-(vid.width-win.width):0;break;default:vid.width>win.width&&(vid.marginLeft=-((vid.width-win.width)/2))}}}else vid.width="100%",vid.height="100%",vid.marginTop=0,vid.marginLeft=0;iframe.css({width:vid.width,height:vid.height,marginTop:vid.marginTop,marginLeft:vid.marginLeft,maxWidth:"initial"})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.unselectable=function(){return this.each(function(){jQuery(this).css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).attr("unselectable","on")})},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPCheckForState=jQuery.mbYTPlayer.checkForState,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPGetPlaylistID=jQuery.mbYTPlayer.getPlaylistID,jQuery.fn.YTPChangeVideo=jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeVideo,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPPlayIndex=jQuery.mbYTPlayer.playIndex,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPGetVolume=jQuery.mbYTPlayer.getVolume,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.YTPGetFilters=jQuery.mbYTPlayer.getFilters,jQuery.fn.YTPGetTime=jQuery.mbYTPlayer.getTime,jQuery.fn.YTPGetTotalTime=jQuery.mbYTPlayer.getTotalTime,jQuery.fn.YTPAddMask=jQuery.mbYTPlayer.addMask,jQuery.fn.YTPRemoveMask=jQuery.mbYTPlayer.removeMask,jQuery.fn.YTPToggleMask=jQuery.mbYTPlayer.toggleMask,jQuery.fn.YTPSetAnchor=jQuery.mbYTPlayer.setAnchor,jQuery.fn.YTPGetAnchor=jQuery.mbYTPlayer.getAnchor}(jQuery,ytp),jQuery.support.CSStransition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-"),jQuery.CSS.sfx="";for(var c in b){if("transform"===c&&(b[jQuery.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[jQuery.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[jQuery.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]),"x"===c){var d=jQuery.CSS.sfx+"transform";b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]}"y"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b,c=[];for(b in a)0>c.indexOf(b)&&c.push(uncamel(b));return c.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function f(){g.called=!0,g.CSSAIsRunning=!1,h.off(jQuery.CSS.transitionEnd+"."+g.id),clearTimeout(g.timeout),h.css(jQuery.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(g),"function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)}var g=this,h=jQuery(this);g.id=g.id||"CSSA_"+(new Date).getTime();var i=i||{type:"noEvent"};if(g.CSSAIsRunning&&g.eventType==i.type&&!jQuery.browser.msie&&9>=jQuery.browser.version)g.CSSqueue=function(){h.CSSAnimate(a,b,c,d,e)};else if(g.CSSqueue=null,g.eventType=i.type,0!==h.length&&a){if(a=jQuery.normalizeCss(a),g.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var j in jQuery.fx.speeds){if(b==j){b=jQuery.fx.speeds[j];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),jQuery.support.CSStransition){var k={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k[d]&&(d=k[d]),h.off(jQuery.CSS.transitionEnd+"."+g.id),k=jQuery.CSS.getProp(a);var l={};jQuery.extend(l,a),l[jQuery.CSS.sfx+"transition-property"]=k,l[jQuery.CSS.sfx+"transition-duration"]=b+"ms",l[jQuery.CSS.sfx+"transition-delay"]=c+"ms",l[jQuery.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){h.one(jQuery.CSS.transitionEnd+"."+g.id,f),h.css(l)},1),g.timeout=setTimeout(function(){g.called||!e?(g.called=!1,g.CSSAIsRunning=!1):(h.css(jQuery.CSS.sfx+"transition",""),e.apply(g),g.CSSAIsRunning=!1,"function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null))},b+c+10)}else{for(k in a)"transform"===k&&delete a[k],"filter"===k&&delete a[k],"transform-origin"===k&&delete a[k],"auto"===a[k]&&delete a[k],"x"===k&&(i=a[k],j="left",a[j]=i,delete a[k]),"y"===k&&(i=a[k],j="top",a[j]=i,delete a[k]),"-ms-transform"!==k&&"-ms-filter"!==k||delete a[k];h.delay(c).animate(a,b,e)}}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(a){return this.each(function(){var b=jQuery(this),c=jQuery.normalizeCss(a);b.css(c)})};var nAgt=navigator.userAgent;jQuery.browser=jQuery.browser||{},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.edge=!1,jQuery.browser.ua=nAgt;var getOS=function(){var a={version:"Unknown version",name:"Unknown OS"};return-1!=navigator.appVersion.indexOf("Win")&&(a.name="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(a.name="Mac"),-1!=navigator.appVersion.indexOf("Linux")&&(a.name="Linux"),/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(a.version=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],a.version=a.version.replace(/_/g,".").substring(0,5)),/Windows/.test(nAgt)&&(a.version="Unknown.Unknown"),/Windows NT 5.1/.test(nAgt)&&(a.version="5.1"),/Windows NT 6.0/.test(nAgt)&&(a.version="6.0"),/Windows NT 6.1/.test(nAgt)&&(a.version="6.1"),/Windows NT 6.2/.test(nAgt)&&(a.version="6.2"),/Windows NT 10.0/.test(nAgt)&&(a.version="10.0"),/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(a.version="Unknown.Unknown"),a.name=a.name.toLowerCase(),a.major_version="Unknown",a.minor_version="Unknown","Unknown.Unknown"!=a.version&&(a.major_version=parseFloat(a.version.split(".")[0]),a.minor_version=parseFloat(a.version.split(".")[1])),a};jQuery.browser.os=getOS(),jQuery.browser.hasTouch=isTouchSupported(),jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion,jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width(),jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),jQuery.mbBrowser=jQuery.browser,jQuery.browser.versionCompare=function(a,b){if("stringstring"!=typeof a+typeof b)return!1;for(var c=a.split("."),d=b.split("."),e=0,f=Math.max(c.length,d.length);f>e;e++){if(c[e]&&!d[e]&&0<parseInt(c[e])||parseInt(c[e])>parseInt(d[e]))return 1;if(d[e]&&!c[e]&&0<parseInt(d[e])||parseInt(c[e])<parseInt(d[e]))return-1}return 0};var nAgt=navigator.userAgent;jQuery.browser=jQuery.browser||{},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.edge=!1,jQuery.browser.ua=nAgt;var getOS=function(){var a={version:"Unknown version",name:"Unknown OS"};return-1!=navigator.appVersion.indexOf("Win")&&(a.name="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(a.name="Mac"),-1!=navigator.appVersion.indexOf("Linux")&&(a.name="Linux"),/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(a.version=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],a.version=a.version.replace(/_/g,".").substring(0,5)),/Windows/.test(nAgt)&&(a.version="Unknown.Unknown"),/Windows NT 5.1/.test(nAgt)&&(a.version="5.1"),/Windows NT 6.0/.test(nAgt)&&(a.version="6.0"),/Windows NT 6.1/.test(nAgt)&&(a.version="6.1"),/Windows NT 6.2/.test(nAgt)&&(a.version="6.2"),/Windows NT 10.0/.test(nAgt)&&(a.version="10.0"),/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(a.version="Unknown.Unknown"),a.name=a.name.toLowerCase(),a.major_version="Unknown",a.minor_version="Unknown","Unknown.Unknown"!=a.version&&(a.major_version=parseFloat(a.version.split(".")[0]),a.minor_version=parseFloat(a.version.split(".")[1])),a};jQuery.browser.os=getOS(),jQuery.browser.hasTouch=isTouchSupported(),jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion,jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width(),jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),jQuery.mbBrowser=jQuery.browser,jQuery.browser.versionCompare=function(a,b){if("stringstring"!=typeof a+typeof b)return!1;for(var c=a.split("."),d=b.split("."),e=0,f=Math.max(c.length,d.length);f>e;e++){if(c[e]&&!d[e]&&0<parseInt(c[e])||parseInt(c[e])>parseInt(d[e]))return 1;if(d[e]&&!c[e]&&0<parseInt(d[e])||parseInt(c[e])<parseInt(d[e]))return-1}return 0},function(a){a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:a.browser.mobile?"touchstart":"mousedown",end:a.browser.mobile?"touchend":"mouseup",move:a.browser.mobile?"touchmove":"mousemove"},init:function(b){return this.each(function(){var c=this,d=a(c);d.addClass("simpleSlider"),c.opt={},a.extend(c.opt,a.simpleSlider.defaults,b),a.extend(c.opt,d.data());var e="h"==c.opt.orientation?"horizontal":"vertical";e=a("<div/>").addClass("level").addClass(e),d.prepend(e),c.level=e,d.css({cursor:"default"}),"auto"==c.opt.scale&&(c.opt.scale=a(c).outerWidth()),d.updateSliderVal(),c.opt.readonly||(d.on(a.simpleSlider.events.start,function(b){a.browser.mobile&&(b=b.changedTouches[0]),c.canSlide=!0,d.updateSliderVal(b),"h"==c.opt.orientation?d.css({cursor:"col-resize"}):d.css({cursor:"row-resize"}),a.browser.mobile||(b.preventDefault(),b.stopPropagation())}),a(document).on(a.simpleSlider.events.move,function(b){a.browser.mobile&&(b=b.changedTouches[0]),c.canSlide&&(a(document).css({cursor:"default"}),d.updateSliderVal(b),a.browser.mobile||(b.preventDefault(),b.stopPropagation()))}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"}),c.canSlide=!1,d.css({cursor:"auto"})}))})},updateSliderVal:function(b){var c=this.get(0);if(c.opt){c.opt.initialval="number"==typeof c.opt.initialval?c.opt.initialval:c.opt.initialval(c);var d=a(c).outerWidth(),e=a(c).outerHeight();c.x="object"==typeof b?b.clientX+document.body.scrollLeft-this.offset().left:"number"==typeof b?b*d/c.opt.scale:c.opt.initialval*d/c.opt.scale,c.y="object"==typeof b?b.clientY+document.body.scrollTop-this.offset().top:"number"==typeof b?(c.opt.scale-c.opt.initialval-b)*e/c.opt.scale:c.opt.initialval*e/c.opt.scale,c.y=this.outerHeight()-c.y,c.scaleX=c.x*c.opt.scale/d,c.scaleY=c.y*c.opt.scale/e,c.outOfRangeX=c.scaleX>c.opt.scale?c.scaleX-c.opt.scale:0>c.scaleX?c.scaleX:0,c.outOfRangeY=c.scaleY>c.opt.scale?c.scaleY-c.opt.scale:0>c.scaleY?c.scaleY:0,c.outOfRange="h"==c.opt.orientation?c.outOfRangeX:c.outOfRangeY,c.value="undefined"!=typeof b?"h"==c.opt.orientation?c.x>=this.outerWidth()?c.opt.scale:0>=c.x?0:c.scaleX:c.y>=this.outerHeight()?c.opt.scale:0>=c.y?0:c.scaleY:"h"==c.opt.orientation?c.scaleX:c.scaleY,"h"==c.opt.orientation?c.level.width(Math.floor(100*c.x/d)+"%"):c.level.height(Math.floor(100*c.y/e)),"function"==typeof c.opt.callback&&c.opt.callback(c)}}},a.fn.simpleSlider=a.simpleSlider.init,a.fn.updateSliderVal=a.simpleSlider.updateSliderVal}(jQuery),function(a){a.mbCookie={set:function(a,b,c,d){"object"==typeof b&&(b=JSON.stringify(b)),d=d?"; domain="+d:"";var e=new Date,f="";c>0&&(e.setTime(e.getTime()+864e5*c),f="; expires="+e.toGMTString()),document.cookie=a+"="+b+f+"; path=/"+d},get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))try{return JSON.parse(d.substring(a.length,d.length))}catch(e){return d.substring(a.length,d.length)}}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){"object"==typeof b&&(b=JSON.stringify(b)),localStorage.setItem(a,b)},get:function(a){if(!localStorage[a])return null;try{return JSON.parse(localStorage[a])}catch(b){return localStorage[a]}},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);
/* List Ticker by Alex Fish 
// www.alexefish.com
//
// options:
//
// effect: fade/slide
// speed: milliseconds
*/

(function($){
"use strict";
  $.fn.list_ticker = function(options){
    
    var defaults = {
      speed:4000,
    effect:'slide'
    };
    
    var options = $.extend(defaults, options);
    
    return this.each(function(){
      
      var obj = $(this);
      var list = obj.children();
      list.not(':first').hide();
      
      setInterval(function(){
        
        list = obj.children();
        list.not(':first').hide();
        
        var first_li = list.eq(0)
        var second_li = list.eq(1)
    
    if(options.effect == 'slide'){
      first_li.slideUp();
      second_li.slideDown(function(){
        first_li.remove().appendTo(obj);
      });
    } else if(options.effect == 'fade'){
      first_li.fadeOut(function(){
        second_li.fadeIn();
        first_li.remove().appendTo(obj);
      });
    }
      }, options.speed)
    });
  };
})(jQuery);

/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
(function($){$.fn.jflickrfeed=function(settings,callback){settings=$.extend(true,{flickrbase:'http://api.flickr.com/services/feeds/',feedapi:'photos_public.gne',limit:20,qstrings:{lang:'en-us',format:'json',jsoncallback:'?'},cleanDescription:true,useTemplate:true,itemTemplate:'',itemCallback:function(){}},settings);var url=settings.flickrbase+settings.feedapi+'?';var first=true;for(var key in settings.qstrings){if(!first)
url+='&';url+=key+'='+settings.qstrings[key];first=false;}
return $(this).each(function(){var $container=$(this);var container=this;$.getJSON(url,function(data){$.each(data.items,function(i,item){if(i<settings.limit){if(settings.cleanDescription){var regex=/<p>(.*?)<\/p>/g;var input=item.description;if(regex.test(input)){item.description=input.match(regex)[2]
if(item.description!=undefined)
item.description=item.description.replace('<p>','').replace('</p>','');}}
item['image_s']=item.media.m.replace('_m','_s');item['image_t']=item.media.m.replace('_m','_t');item['image_m']=item.media.m.replace('_m','_m');item['image']=item.media.m.replace('_m','');item['image_b']=item.media.m.replace('_m','_b');delete item.media;if(settings.useTemplate){var template=settings.itemTemplate;for(var key in item){var rgx=new RegExp('{{'+key+'}}','g');template=template.replace(rgx,item[key]);}
$container.append(template)}
settings.itemCallback.call(container,item);}});if($.isFunction(callback)){callback.call(container,data);}});});}})(jQuery);


/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});


// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('width', '')
              .css('position', '')
              .css('top', '');
            s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('width', s.stickyElement.width())
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i];
        if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
          s.stickyElement.css('width', $(s.getWidthFrom).width());
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName 
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom,
            responsiveWidth: o.responsiveWidth
          });
        });
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var unstickyElement = $(this);

          var removeIdx = -1;
          for (var i = 0; i < sticked.length; i++)
          {
            if (sticked[i].stickyElement.get(0) == unstickyElement.get(0))
            {
                removeIdx = i;
            }
          }
          if(removeIdx != -1)
          {
            sticked.splice(removeIdx,1);
            unstickyElement.unwrap();
            unstickyElement.removeAttr('style');
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }

  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);



/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
!function(e){function t(){var e=location.href;return hashtag=-1!==e.indexOf("#prettyPhoto")?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):!1,hashtag&&(hashtag=hashtag.replace(/<|>/g,"")),hashtag}function i(){"undefined"!=typeof theRel&&(location.hash=theRel+"/"+rel_index+"/")}function p(){-1!==location.href.indexOf("#prettyPhoto")&&(location.hash="prettyPhoto")}function o(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i="[\\?&]"+e+"=([^&#]*)",p=new RegExp(i),o=p.exec(t);return null==o?"":o[1]}e.prettyPhoto={version:"3.1.6"},e.fn.prettyPhoto=function(a){function s(){e(".pp_loaderIcon").hide(),projectedTop=scroll_pos.scrollTop+(I/2-f.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(".pp_content").animate({height:f.contentHeight,width:f.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:j/2-f.containerWidth/2<0?0:j/2-f.containerWidth/2,width:f.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width),$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),isSet&&"image"==h(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide(),settings.allow_expand&&(f.resized?e("a.pp_expand,a.pp_contract").show():e("a.pp_expand").hide()),!settings.autoplay_slideshow||P||v||e.prettyPhoto.startSlideshow(),settings.changepicturecallback(),v=!0}),m(),a.ajaxcallback()}function n(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden"),$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show(),t()})}function r(t){t>1?e(".pp_nav").show():e(".pp_nav").hide()}function l(e,t){if(resized=!1,d(e,t),imageWidth=e,imageHeight=t,(k>j||b>I)&&doresize&&settings.allow_resize&&!$){for(resized=!0,fitting=!1;!fitting;)k>j?(imageWidth=j-200,imageHeight=t/e*imageWidth):b>I?(imageHeight=I-200,imageWidth=e/t*imageHeight):fitting=!0,b=imageHeight,k=imageWidth;(k>j||b>I)&&l(k,b),d(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(b),containerWidth:Math.floor(k)+2*settings.horizontal_padding,contentHeight:Math.floor(y),contentWidth:Math.floor(w),resized:resized}}function d(t,i){t=parseFloat(t),i=parseFloat(i),$pp_details=$pp_pic_holder.find(".pp_details"),$pp_details.width(t),detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom")),$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(".ppt"),$pp_title.width(t),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),y=i+detailsHeight,w=t,b=y+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height(),k=t}function h(e){return e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)?"youtube":e.match(/vimeo\.com/i)?"vimeo":e.match(/\b.mov\b/i)?"quicktime":e.match(/\b.swf\b/i)?"flash":e.match(/\biframe=true\b/i)?"iframe":e.match(/\bajax=true\b/i)?"ajax":e.match(/\bcustom=true\b/i)?"custom":"#"==e.substr(0,1)?"inline":"image"}function c(){if(doresize&&"undefined"!=typeof $pp_pic_holder){if(scroll_pos=_(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=I/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>I)return;$pp_pic_holder.css({top:projectedTop,left:j/2+scroll_pos.scrollLeft-contentwidth/2})}}function _(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function g(){I=e(window).height(),j=e(window).width(),"undefined"!=typeof $pp_overlay&&$pp_overlay.height(e(document).height()).width(j)}function m(){isSet&&settings.overlay_gallery&&"image"==h(pp_images[set_position])?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((f.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,e.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}function u(){if(settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href))),settings.markup=settings.markup.replace("{pp_social}",""),e("body").append(settings.markup),$pp_pic_holder=e(".pp_pic_holder"),$ppt=e(".ppt"),$pp_overlay=e("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject="";for(var t=0;t<pp_images.length;t++)pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",img_src=pp_images[t]):(classname="default",img_src=""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find("#pp_full_res").after(toInject),$pp_gallery=e(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li"),$pp_gallery.find(".pp_arrow_next").click(function(){return e.prettyPhoto.changeGalleryPage("next"),e.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(".pp_arrow_previous").click(function(){return e.prettyPhoto.changeGalleryPage("previous"),e.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(t){e(this).find("a").click(function(){return e.prettyPhoto.changePage(t),e.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){return e.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme),$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind("click",function(){settings.modal||e.prettyPhoto.close()}),e("a.pp_close").bind("click",function(){return e.prettyPhoto.close(),!1}),settings.allow_expand&&e("a.pp_expand").bind("click",function(){return e(this).hasClass("pp_expand")?(e(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(e(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0),n(function(){e.prettyPhoto.open()}),!1}),$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return e.prettyPhoto.changePage("previous"),e.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return e.prettyPhoto.changePage("next"),e.prettyPhoto.stopSlideshow(),!1}),c()}a=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},a);var f,v,y,w,b,k,P,x=this,$=!1,I=e(window).height(),j=e(window).width();return doresize=!0,scroll_pos=_(),e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){c(),g()}),a.keyboard_shortcuts&&e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous"),t.preventDefault();break;case 39:e.prettyPhoto.changePage("next"),t.preventDefault();break;case 27:settings.modal||e.prettyPhoto.close(),t.preventDefault()}}),e.prettyPhoto.initialize=function(){return settings=a,"pp_default"==settings.theme&&(settings.horizontal_padding=16),theRel=e(this).attr(settings.hook),galleryRegExp=/\[(?:.*)\]/,isSet=galleryRegExp.exec(theRel)?!0:!1,pp_images=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).attr("href"):void 0}):e.makeArray(e(this).attr("href")),pp_titles=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):"":void 0}):e.makeArray(e(this).find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).attr("title")?e(t).attr("title"):"":void 0}):e.makeArray(e(this).attr("title")),pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1),set_position=jQuery.inArray(e(this).attr("href"),pp_images),rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this)),u(this),settings.allow_resize&&e(window).bind("scroll.prettyphoto",function(){c()}),e.prettyPhoto.open(),!1},e.prettyPhoto.open=function(t){return"undefined"==typeof settings&&(settings=a,pp_images=e.makeArray(arguments[0]),pp_titles=e.makeArray(arguments[1]?arguments[1]:""),pp_descriptions=e.makeArray(arguments[2]?arguments[2]:""),isSet=pp_images.length>1?!0:!1,set_position=arguments[3]?arguments[3]:0,u(t.target)),settings.hideflash&&e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),r(e(pp_images).size()),e(".pp_loaderIcon").show(),settings.deeplinking&&i(),settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)),$pp_pic_holder.find(".pp_social").html(facebook_like_link)),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size()),"undefined"!=typeof pp_descriptions[set_position]&&""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(o("width",pp_images[set_position]))?o("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(o("height",pp_images[set_position]))?o("height",pp_images[set_position]):settings.default_height.toString(),$=!1,-1!=movie_height.indexOf("%")&&(movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150),$=!0),-1!=movie_width.indexOf("%")&&(movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150),$=!0),$pp_pic_holder.fadeIn(function(){switch($ppt.html(settings.show_title&&""!=pp_titles[set_position]&&"undefined"!=typeof pp_titles[set_position]?unescape(pp_titles[set_position]):"&nbsp;"),imgPreloader="",skipInjection=!1,h(pp_images[set_position])){case"image":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<e(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){f=l(imgPreloader.width,imgPreloader.height),s()},imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist."),e.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case"youtube":f=l(movie_width,movie_height),movie_id=o("v",pp_images[set_position]),""==movie_id&&(movie_id=pp_images[set_position].split("youtu.be/"),movie_id=movie_id[1],movie_id.indexOf("?")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),movie_id.indexOf("&")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("&")))),movie="http://www.youtube.com/embed/"+movie_id,movie+=o("rel",pp_images[set_position])?"?rel="+o("rel",pp_images[set_position]):"?rel=1",settings.autoplay&&(movie+="&autoplay=1"),toInject=settings.iframe_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":f=l(movie_width,movie_height),movie_id=pp_images[set_position];var t=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,i=movie_id.match(t);movie="http://player.vimeo.com/video/"+i[3]+"?title=0&byline=0&portrait=0",settings.autoplay&&(movie+="&autoplay=1;"),vimeo_width=f.width+"/embed/?moog_width="+f.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,f.height).replace(/{path}/g,movie);break;case"quicktime":f=l(movie_width,movie_height),f.height+=15,f.contentHeight+=15,f.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":f=l(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf("?")),toInject=settings.flash_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":f=l(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1),toInject=settings.iframe_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1,f=l(movie_width,movie_height),doresize=!0,skipInjection=!0,e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,s()});break;case"custom":f=l(movie_width,movie_height),toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(),doresize=!1,f=l(e(myClone).width(),e(myClone).height()),doresize=!0,e(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,s())}),!1},e.prettyPhoto.changePage=function(t){currentGalleryPage=0,"previous"==t?(set_position--,set_position<0&&(set_position=e(pp_images).size()-1)):"next"==t?(set_position++,set_position>e(pp_images).size()-1&&(set_position=0)):set_position=t,rel_index=set_position,doresize||(doresize=!0),settings.allow_expand&&e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),n(function(){e.prettyPhoto.open()})},e.prettyPhoto.changeGalleryPage=function(e){"next"==e?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==e?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=e,slide_speed="next"==e||"previous"==e?settings.animation_speed:0,slide_to=currentGalleryPage*itemsPerPage*itemWidth,$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},e.prettyPhoto.startSlideshow=function(){"undefined"==typeof P?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){return e.prettyPhoto.stopSlideshow(),!1}),P=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)):e.prettyPhoto.changePage("next")},e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){return e.prettyPhoto.startSlideshow(),!1}),clearInterval(P),P=void 0},e.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(e.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible"),e(this).remove(),e(window).unbind("scroll.prettyphoto"),p(),settings.callback(),doresize=!0,v=!1,delete settings}))},!pp_alreadyInitialized&&t()&&(pp_alreadyInitialized=!0,hashIndex=t(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("/")),setTimeout(function(){e("a["+a.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)),this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;


/*
 * jQuery Superfish Menu Plugin - v1.7.5
 * Copyright (c) 2014 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */

;(function(e,s){"use strict";var n=function(){var n={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var n=/iPhone|iPad|iPod/i.test(navigator.userAgent);return n&&e(s).load(function(){e("body").children().on("click",e.noop)}),n}(),t=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),i=function(){return!!s.PointerEvent}(),r=function(e,s){var o=n.menuClass;s.cssArrows&&(o+=" "+n.menuArrowClass),e.toggleClass(o)},a=function(s,o){return s.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+n.bcClass).filter(function(){return e(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)},l=function(e){e.children("a").toggleClass(n.anchorClass)},h=function(e){var s=e.css("ms-touch-action"),n=e.css("touch-action");n=n||s,n="pan-y"===n?"auto":"pan-y",e.css({"ms-touch-action":n,"touch-action":n})},u=function(s,n){var r="li:has("+n.popUpSelector+")";e.fn.hoverIntent&&!n.disableHI?s.hoverIntent(c,f,r):s.on("mouseenter.superfish",r,c).on("mouseleave.superfish",r,f);var a="MSPointerDown.superfish";i&&(a="pointerdown.superfish"),o||(a+=" touchend.superfish"),t&&(a+=" mousedown.superfish"),s.on("focusin.superfish","li",c).on("focusout.superfish","li",f).on(a,"a",n,p)},p=function(s){var n=e(this),o=n.siblings(s.data.popUpSelector);o.length>0&&o.is(":hidden")&&(n.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?n.trigger("focus"):e.proxy(c,n.parent("li"))())},c=function(){var s=e(this),n=m(s);clearTimeout(n.sfTimer),s.siblings().superfish("hide").end().superfish("show")},f=function(){var s=e(this),n=m(s);o?e.proxy(d,s,n)():(clearTimeout(n.sfTimer),n.sfTimer=setTimeout(e.proxy(d,s,n),n.delay))},d=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(v(this)),s.$path.length&&e.proxy(c,s.$path)())},v=function(e){return e.closest("."+n.menuClass)},m=function(e){return v(e).data("sf-options")};return{hide:function(s){if(this.length){var n=this,o=m(n);if(!o)return this;var t=o.retainPath===!0?o.$path:"",i=n.find("li."+o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),r=o.speedOut;s&&(i.show(),r=0),o.retainPath=!1,o.onBeforeHide.call(i),i.stop(!0,!0).animate(o.animationOut,r,function(){var s=e(this);o.onHide.call(s)})}return this},show:function(){var e=m(this);if(!e)return this;var s=this.addClass(e.hoverClass),n=s.children(e.popUpSelector);return e.onBeforeShow.call(n),n.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(n)}),this},destroy:function(){return this.each(function(){var s,o=e(this),t=o.data("sf-options");return t?(s=o.find(t.popUpSelector).parent("li"),clearTimeout(t.sfTimer),r(o,t),l(s),h(o),o.off(".superfish").off(".hoverIntent"),s.children(t.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),t.$path.removeClass(t.hoverClass+" "+n.bcClass).addClass(t.pathClass),o.find("."+t.hoverClass).removeClass(t.hoverClass),t.onDestroy.call(o),o.removeData("sf-options"),void 0):!1})},init:function(s){return this.each(function(){var o=e(this);if(o.data("sf-options"))return!1;var t=e.extend({},e.fn.superfish.defaults,s),i=o.find(t.popUpSelector).parent("li");t.$path=a(o,t),o.data("sf-options",t),r(o,t),l(i),h(o),u(o,t),i.not("."+n.bcClass).superfish("hide",!0),t.onInit.call(this)})}}}();e.fn.superfish=function(s){return n[s]?n[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):n.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop}})(jQuery,window);







/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),s=i.data("bs.alert");s||i.data("bs.alert",s=new o(this)),"string"==typeof e&&s[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.2",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var s=t(this),n=s.attr("data-target");n||(n=s.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var a=t(n);e&&e.preventDefault(),a.length||(a=s.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var s=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=s,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.button"),n="object"==typeof e&&e;s||o.data("bs.button",s=new i(this,n)),"toggle"==e?s.toggle():e&&s.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.2",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,s=o.is("input")?"val":"html",n=o.data();e+="Text",null==n.resetText&&o.data("resetText",o[s]()),setTimeout(t.proxy(function(){o[s](null==n[e]?this.options[e]:n[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.carousel"),n=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:n.slide;s||o.data("bs.carousel",s=new i(this,n)),"number"==typeof e?s.to(e):a?s[a]():n.interval&&s.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.2",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var s="prev"==t?-1:1,n=(i+s)%this.$items.length;return this.$items.eq(n)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var s=this.$element.find(".item.active"),n=o||this.getItemForDirection(e,s),a=this.interval,r="next"==e?"left":"right",l=this;if(n.hasClass("active"))return this.sliding=!1;var h=n[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(n)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(n.addClass(e),n[0].offsetWidth,s.addClass(r),n.addClass(r),s.one("bsTransitionEnd",function(){n.removeClass([e,r].join(" ")).addClass("active"),s.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(s.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var s=function(i){var o,s=t(this),n=t(s.attr("data-target")||(o=s.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(n.hasClass("carousel")){var a=t.extend({},n.data(),s.data()),r=s.attr("data-slide-to");r&&(a.interval=!1),e.call(n,a),r&&n.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",s).on("click.bs.carousel.data-api","[data-slide-to]",s),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(s).remove(),t(n).each(function(){var o=t(this),s=i(o),n={relatedTarget:this};s.hasClass("open")&&(s.trigger(e=t.Event("hide.bs.dropdown",n)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),s.removeClass("open").trigger("hidden.bs.dropdown",n)))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var s=".dropdown-backdrop",n='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.2",a.prototype.toggle=function(o){var s=t(this);if(!s.is(".disabled, :disabled")){var n=i(s),a=n.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(n.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var s=i(o),a=s.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&s.find(n).trigger("focus"),o.trigger("click");var r=" li:not(.divider):visible a",l=s.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var h=l.index(e.target);38==e.which&&h>0&&h--,40==e.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,a.prototype.toggle).on("keydown.bs.dropdown.data-api",n,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,a)),"string"==typeof e?n[e](o):a.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.2",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.options.backdrop&&o.adjustBackdrop(),o.adjustDialog(),s&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});s?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t('<div class="modal-backdrop '+s+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},i.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=t(o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),o.data());o.is("a")&&i.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(n,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.tooltip"),n="object"==typeof e&&e;(s||"destroy"!=e)&&(s||o.data("bs.tooltip",s=new i(this,n)),"string"==typeof e&&s[e]())})}var i=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.3.2",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var s=this.options.trigger.split(" "),n=s.length;n--;){var a=s[n];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var s=this,n=this.tip(),a=this.getUID(this.type);this.setContent(),n.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&n.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var d=this.getPosition(),p=n[0].offsetWidth,c=n[0].offsetHeight;if(h){var f=r,u=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(u);r="bottom"==r&&d.bottom+c>g.bottom?"top":"top"==r&&d.top-c<g.top?"bottom":"right"==r&&d.right+p>g.width?"left":"left"==r&&d.left-p<g.left?"right":r,n.removeClass(f).addClass(r)}var v=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(v,r);var m=function(){var t=s.hoverState;s.$element.trigger("shown.bs."+s.type),s.hoverState=null,"out"==t&&s.leave(s)};t.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),s=o[0].offsetWidth,n=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top=e.top+a,e.left=e.left+r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=n&&(e.top=e.top+n-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-s+l:2*d.top-n+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=s.hoverState&&n.detach(),s.$element.removeAttr("aria-describedby").trigger("hidden.bs."+s.type),e&&e()}var s=this,n=this.tip(),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,s=i.getBoundingClientRect();null==s.width&&(s=t.extend({},s,{width:s.right-s.left,height:s.bottom-s.top}));var n=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},s,a,r,n)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s={top:0,left:0};if(!this.$viewport)return s;var n=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-n-a.scroll,l=e.top+n-a.scroll+o;r<a.top?s.top=a.top-r:l>a.top+a.height&&(s.top=a.top+a.height-l)}else{var h=e.left-n,d=e.left+n+i;h<a.left?s.left=a.left-h:d>a.width&&(s.left=a.left+a.width-d)}return s},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.popover"),n="object"==typeof e&&e;(s||"destroy"!=e)&&(s||o.data("bs.popover",s=new i(this,n)),"string"==typeof e&&s[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.2",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},i.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.tab");s||o.data("bs.tab",s=new i(this)),"string"==typeof e&&s[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.2",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a"),n=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:s[0]});if(s.trigger(n),e.trigger(a),!a.isDefaultPrevented()&&!n.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){s.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:s[0]})})}}},i.prototype.activate=function(e,o,s){function n(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}var a=o.find("> .active"),r=s&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var s=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',s).on("click.bs.tab.data-api",'[data-toggle="pill"]',s)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.affix"),n="object"==typeof e&&e;s||o.data("bs.affix",s=new i(this,n)),"string"==typeof e&&s[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.2",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var s=this.$target.scrollTop(),n=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>s?"top":!1;if("bottom"==this.affixed)return null!=i?s+this.unpin<=n.top?!1:"bottom":t-o>=s+a?!1:"bottom";var r=null==this.affixed,l=r?s:n.top,h=r?a:e;return null!=i&&i>=s?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,s=o.top,n=o.bottom,a=t("body").height();"object"!=typeof o&&(n=s=o),"function"==typeof s&&(s=o.top(this.$element)),"function"==typeof n&&(n=o.bottom(this.$element));var r=this.getState(a,e,s,n);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-n})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),s=i.data("bs.collapse"),n=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!s&&n.toggle&&"show"==e&&(n.toggle=!1),s||i.data("bs.collapse",s=new o(this,n)),"string"==typeof e&&s[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t(this.options.trigger).filter('[href="#'+e.id+'"], [data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.2",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,s=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(s&&s.length&&(e=s.data("bs.collapse"),e&&e.transitioning))){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){s&&s.length&&(i.call(s,"hide"),e||s.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(o.TRANSITION_DURATION):s.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var s=t(o);this.addAriaAndCollapsedClass(e(s),s)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var s=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=s,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var s=t(this);s.attr("data-target")||o.preventDefault();var n=e(s),a=n.data("bs.collapse"),r=a?"toggle":t.extend({},s.data(),{trigger:this});i.call(n,r)})}(jQuery),+function(t){"use strict";function e(i,o){var s=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(i).is("body")?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),s=o.data("bs.scrollspy"),n="object"==typeof i&&i;s||o.data("bs.scrollspy",s=new e(this,n)),"string"==typeof i&&s[i]()})}e.VERSION="3.3.2",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",i=0;t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var o=this;this.$body.find(this.selector).map(function(){var o=t(this),s=o.data("target")||o.attr("href"),n=/^#./.test(s)&&t(s);return n&&n.length&&n.is(":visible")&&[[n[e]().top+i,s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,n=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=n[n.length-1])&&this.activate(t);if(a&&e<s[0])return this.activeTarget=null,this.clear();for(t=s.length;t--;)a!=n[t]&&e>=s[t]&&(!s[t+1]||e<=s[t+1])&&this.activate(n[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);


/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: mb.bgndGallery.js
 *
 *  Copyright (c) 2001-2013. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site:   http://pupunzi.com
 *  blog: http://pupunzi.open-lab.com
 *  http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 24/06/13 18.06
 *  *****************************************************************************
 */

/*Browser detection patch*/
(function(){if(!(8>jQuery.fn.jquery.split(".")[1])){jQuery.browser={};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.msie=!1;var a=navigator.userAgent;jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var c,b;if(-1!=(b=a.indexOf("Opera"))){if(jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=a.substring(b+6),-1!=(b= a.indexOf("Version")))jQuery.browser.fullVersion=a.substring(b+8)}else if(-1!=(b=a.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=a.substring(b+5);else if(-1!=(b=a.indexOf("Chrome")))jQuery.browser.webkit=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=a.substring(b+7);else if(-1!=(b=a.indexOf("Safari"))){if(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=a.substring(b+7),-1!=(b=a.indexOf("Version")))jQuery.browser.fullVersion= a.substring(b+8)}else if(-1!=(b=a.indexOf("Firefox")))jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=a.substring(b+8);else if((c=a.lastIndexOf(" ")+1)<(b=a.lastIndexOf("/")))jQuery.browser.name=a.substring(c,b),jQuery.browser.fullVersion=a.substring(b+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName);if(-1!=(a=jQuery.browser.fullVersion.indexOf(";")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0, a);if(-1!=(a=jQuery.browser.fullVersion.indexOf(" ")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,a);jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));jQuery.browser.version=jQuery.browser.majorVersion}})(jQuery);

/*
 *   jquery.mb.components
 *  file: jquery.mb.CSSAnimate.js
 */

/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.CSSAnimate.js
 *
 *  Copyright (c) 2001-2013. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site:   http://pupunzi.com
 *  blog: http://pupunzi.open-lab.com
 *  http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 09/06/13 17.08
 *  *****************************************************************************
 */



/*Browser detection patch*/
(function(){if(!(8>jQuery.fn.jquery.split(".")[1])){jQuery.browser={};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.msie=!1;var a=navigator.userAgent;jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var c,b;if(-1!=(b=a.indexOf("Opera"))){if(jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=a.substring(b+6),-1!=(b= a.indexOf("Version")))jQuery.browser.fullVersion=a.substring(b+8)}else if(-1!=(b=a.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=a.substring(b+5);else if(-1!=(b=a.indexOf("Chrome")))jQuery.browser.webkit=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=a.substring(b+7);else if(-1!=(b=a.indexOf("Safari"))){if(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=a.substring(b+7),-1!=(b=a.indexOf("Version")))jQuery.browser.fullVersion= a.substring(b+8)}else if(-1!=(b=a.indexOf("Firefox")))jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=a.substring(b+8);else if((c=a.lastIndexOf(" ")+1)<(b=a.lastIndexOf("/")))jQuery.browser.name=a.substring(c,b),jQuery.browser.fullVersion=a.substring(b+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName);if(-1!=(a=jQuery.browser.fullVersion.indexOf(";")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0, a);if(-1!=(a=jQuery.browser.fullVersion.indexOf(" ")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,a);jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));jQuery.browser.version=jQuery.browser.majorVersion}})(jQuery);

/*CSSAnimate*/
jQuery.fn.CSSAnimate=function(a,f,k,m,e){return this.each(function(){var b=jQuery(this);this.id=this.id||"CSSA_"+(new Date).getTime();if(0!==b.length&&a){"function"==typeof f&&(e=f,f=jQuery.fx.speeds._default);"function"==typeof k&&(e=k,k=0);"function"==typeof m&&(e=m,m="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof f)for(var l in jQuery.fx.speeds)if(f==l){f=jQuery.fx.speeds[l];break}else f=null;if(jQuery.support.transition){var d="",j="transitionEnd";jQuery.browser.webkit?(d="-webkit-", j="webkitTransitionEnd"):jQuery.browser.mozilla?(d="-moz-",j="transitionend"):jQuery.browser.opera?(d="-o-",j="otransitionend"):jQuery.browser.msie&&(d="-ms-",j="msTransitionEnd");l=[];for(c in a){var g=c;"transform"===g&&(g=d+"transform",a[g]=a[c],delete a[c]);"transform-origin"===g&&(g=d+"transform-origin",a[g]=a[c],delete a[c]);l.push(g)}var c=l.join(","),n=function(){b.off(j+"_"+b.get(0).id);clearTimeout(b.get(0).timeout);b.css(d+"transition","");"function"==typeof e&&(b.called=!0,e(b))},h={}; $.extend(h,a);h[d+"transition-property"]=c;h[d+"transition-duration"]=f+"ms";h[d+"transition-delay"]=k+"ms";h[d+"transition-timing-function"]=m;h[d+"backface-visibility"]="hidden";setTimeout(function(){b.css(h);b.one(j+"_"+b.get(0).id,n)},1);b.get(0).timeout=setTimeout(function(){b.called||!e?b.called=!1:(b.css(d+"transition",""),e(b))},f+k+100)}else{for(var c in a)"transform"===c&&delete a[c],"transform-origin"===c&&delete a[c],"auto"===a[c]&&delete a[c];if(!e||"string"===typeof e)e="linear";b.animate(a, f,e)}}})};jQuery.support.transition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}();

(function($){

  $.mbBgndGallery ={
    name:"mb.bgndGallery",
    author:"Matteo Bicocchi",
    version:"1.8.0",
    defaults:{
      containment:"body",
      images:[],
      shuffle:false,
      controls:null,
      effect:"fade",
      timer:2000,
      effTimer:1500,
      raster:false, //"inc/raster.png"
      folderPath:false,
      autoStart:true,
      grayScale:false,
      activateKeyboard:true,
      preserveTop:false,
      preserveWidth:false,
      placeHolder:"",

      onStart:function(){},
      onChange:function(opt,idx){},
      onPause:function(opt){},
      onPlay:function(opt){},
      onNext:function(opt){},
      onPrev:function(opt){}
    },
    clear:false,


    effects:{
      fade:{enter:{left:0,opacity:0},exit:{left:0,opacity:0}, enterTiming:"ease-in", exitTiming:"ease-in"},
      slideUp:{enter:{top:"100%",opacity:1},exit:{top:0,opacity:0}, enterTiming:"ease-in", exitTiming:"ease-in"},
      slideDown:{enter:{top:"-100%",opacity:1},exit:{top:0,opacity:0}, enterTiming:"ease-in", exitTiming:"ease-in"},
      slideLeft:{enter:{left:"100%",opacity:1},exit:{left:0,opacity:0}, enterTiming:"ease-in", exitTiming:"ease-in"},
      slideRight:{enter:{left:"-100%",opacity:1},exit:{left:0,opacity:0}, enterTiming:"ease-in", exitTiming:"ease-in"},
      zoom:{enter:{transform:"scale("+(1+ Math.random()*5)+")",opacity:0},exit:{transform:"scale("+(1 + Math.random()*5)+")",opacity:0}, enterTiming:"cubic-bezier(0.19, 1, 0.22, 1)", exitTiming:"cubic-bezier(0.19, 1, 0.22, 1)"}
    },

    buildGallery:function(options){
      var opt = {};
      $.extend(opt, $.mbBgndGallery.defaults,options);
      opt.galleryID= new Date().getTime();
      var el= $(opt.containment).get(0);
      el.opt= opt;

      if(el.opt.onStart)
        el.opt.onStart();

      el.opt.gallery= $("<div/>").attr({id:"bgndGallery_"+el.opt.galleryID}).addClass("mbBgndGallery");
      var pos= el.opt.containment=="body"?"fixed":"absolute";
      el.opt.gallery.css({position:pos,top:0,let:0,width:"100%",height:"100%",overflow:"hidden"});

      var containment = el.opt.containment;

      if(containment !="body" && $(containment).text().trim()!=""){
        var wrapper=$("<div/>").css({"position":"absolute",minHeight:"100%", minWidth:"100%", zIndex:3});
        $(containment).wrapInner(wrapper);
        if($(containment).css("position")=="static")
          $(containment).css("position","relative");
      }
      if(opt.raster){
        var raster=$("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"url("+opt.raster+")",zIndex:1});
        opt.gallery.append(raster);
      }

      $(containment).prepend(opt.gallery);

      if(el.opt.folderPath && el.opt.images.length==0)
        el.opt.images = jQuery.loadFromSystem(el.opt.folderPath);


      if(el.opt.shuffle)
        el.opt.images= $.shuffle(el.opt.images);

      var totImg= el.opt.images.length;

      var loadCounter=0;

      $.mbBgndGallery.preload(el.opt.images[0],el);
      $(el.opt.gallery).on("imageLoaded."+el.opt.galleryID,function(){
        loadCounter++;
        if(loadCounter==totImg){
          $(el.opt.gallery).off("imageLoaded."+el.opt.galleryID);
          return;
        }
        $.mbBgndGallery.preload(el.opt.images[loadCounter],el);
      });

      el.opt.imageCounter=0;

      $.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],el);

      if (!opt.autoStart){
        el.opt.paused=true;
        $(el.opt.gallery).trigger("paused");
      }

      $(el.opt.gallery).on("imageReady."+el.opt.galleryID,function(){

        if(el.opt.paused)
          return;

        clearTimeout(el.opt.changing);

        $.mbBgndGallery.play(el);
      });

      $(window).on("resize",function(){
        var image=$("#bgndGallery_"+el.opt.galleryID+" img");
        $.mbBgndGallery.checkSize(image,el);
      });

      var controls = el.opt.controls;
      if(controls){
        var counter=$(el.opt.controls).find(".counter");
        counter.html(el.opt.imageCounter+1+" / "+el.opt.images.length);

        $.mbBgndGallery.buildControls(controls,el);
        $(el.opt.containment).on("paused",function(){
          $(el.opt.controls).find(".play").show();
          $(el.opt.controls).find(".pause").hide();
        });
        $(el.opt.containment).on("play",function(){
          $(el.opt.controls).find(".play").hide();
          $(el.opt.controls).find(".pause").show();
        });
      }
    },
    normalizeCss:function(opt){
      var newOpt = jQuery.extend(true, {}, opt);
      var sfx = "";
      var transitionEnd = "transitionEnd";
      if ($.browser.webkit) {
        sfx = "-webkit-";
        transitionEnd = "webkitTransitionEnd";
      } else if ($.browser.mozilla) {
        sfx = "-moz-";
        transitionEnd = "transitionend";
      } else if ($.browser.opera) {
        sfx = "-o-";
        transitionEnd = "oTransitionEnd";
      } else if ($.browser.msie) {
        sfx = "-ms-";
        transitionEnd = "msTransitionEnd";
      }

      for(var o in newOpt){
        if (o==="transform"){
          newOpt[sfx+"transform"]=newOpt[o];
          delete newOpt[o];
        }
        if (o==="transform-origin"){
          newOpt[sfx+"transform-origin"]=opt[o];
          delete newOpt[o];
        }
      }
      return newOpt;
    },
    preload:function(url,el){
      if($.mbBgndGallery.clear){
        $(el.opt.gallery).remove();
        return;
      }

      var img= $("<img/>").load(function(){
        $(el.opt.gallery).trigger("imageLoaded."+el.opt.galleryID);
      }).attr("src",url);
    },

    checkSize:function(image,el){

      if($.mbBgndGallery.changing)
        return;

      if($.mbBgndGallery.clear){
        $(el.opt.gallery).remove();
        return;
      }

      return image.each(function(){
        var image=$(this);
        var w= image.attr("w");
        var h= image.attr("h");

        var containment = el.opt.containment == "body"? window : el.opt.containment;
        var aspectRatio= w/h;
        var wAspectRatio=$(containment).width()/$(containment).height();
        if(aspectRatio>=wAspectRatio){
          image.css("height","100%");
          image.css("width","auto");
        } else{
          image.css("width","100%");
          image.css("height","auto");
        }
        image.css("margin-left",(($(containment).width()-image.width())/2));

        if(!el.opt.preserveTop)
          image.css("margin-top",(($(containment).height()-image.height())/2));

        if(el.opt.preserveWidth){
          image.css({width:"100%", height:"auto", left:0, marginLeft:0});
        }

      });
    },

    changePhoto:function(url,el){

      if($.mbBgndGallery.clear){
        $(el.opt.gallery).remove();
        return;
      }

      $.mbBgndGallery.changing=true;

      if(el.opt.onChange)
        el.opt.onChange(el.opt, el.opt.imageCounter);

      var image=$("<img/>").hide().load(function(){
        var image=$(this);

        var tmp=$("<div/>").css({position:"absolute",top:-5000});
        tmp.append(image);
        $("body").append(tmp);
        image.attr("w", image.width());
        image.attr("h", image.height());
        tmp.remove();

        el.opt.effect = typeof el.opt.effect == "object" ? el.opt.effect : $.mbBgndGallery.effects[el.opt.effect];


        $("#bgndGallery_"+el.opt.galleryID+" img").CSSAnimate(el.opt.effect.exit,el.opt.effTimer,0,el.opt.effect.exitTiming,function(el){
          el.remove();
        });
        image.css({position:"absolute"});
        $("#bgndGallery_"+el.opt.galleryID).append(image);

        //todo: add a property to let height for vertica  l images
        $.mbBgndGallery.changing=false;
        $.mbBgndGallery.checkSize(image, el);

        image.css($.mbBgndGallery.normalizeCss(el.opt.effect.enter)).show().CSSAnimate({top:0,left:0,opacity:1, transform:"scale(1) rotate(0deg)"},el.opt.effTimer,0,el.opt.effect.enterTiming,function(){
          $(el.opt.gallery).trigger("imageReady."+el.opt.galleryID);
        });
      }).attr("src",url);

      image.error(function(){
        var image=$(this);
        image.attr("src", el.opt.placeHolder);
      })

      if(el.opt.grayScale){
        image.greyScale();
      }

      var counter=$(el.opt.controls).find(".counter");
      counter.html(el.opt.imageCounter+1+" / "+el.opt.images.length);

    },

    play:function(el){

      clearTimeout(el.opt.changing);

      var imgToRemove = $("#bgndGallery_"+el.opt.galleryID+" img").not(":last");
      imgToRemove.remove();


      if($.mbBgndGallery.clear){
        $(el.opt.gallery).remove();
        return;
      }

      if(el.opt.onPlay)
        el.opt.onPlay(el.opt);

      el.opt.changing=setTimeout(function(){
        if(el.opt.paused)
          return;

        if(el.opt.onNext)
          el.opt.onNext(el.opt);

        if (el.opt.imageCounter>=el.opt.images.length-1)
          el.opt.imageCounter=-1;

        el.opt.imageCounter++;

        $.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],$(el.opt.containment).get(0));
      },el.opt.paused?0:el.opt.timer);

      $(el.opt.gallery).trigger("play");

    },

    pause:function(el){
      if($.mbBgndGallery.clear){
        $(el.opt.gallery).remove();
        return;
      }

      clearTimeout(el.opt.changing);
      el.opt.paused=true;
      $(el.opt.gallery).trigger("paused");

      if(el.opt.onPause)
        el.opt.onPause(el.opt);
    },

    next:function(el){
      if($.mbBgndGallery.clear){
        $(el.opt.gallery).remove();
        return;
      }

      if(el.opt.onNext)
        el.opt.onNext(el.opt);

      $.mbBgndGallery.pause(el);
      if (el.opt.imageCounter==el.opt.images.length-1)
        el.opt.imageCounter=-1;

      el.opt.imageCounter++;

      $.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],el);
      clearTimeout(el.opt.changing);
    },

    prev:function(el){
      if($.mbBgndGallery.clear){
        $(el.opt.gallery).remove();
        return;
      }

      if(el.opt.onPrev)
        el.opt.onPrev(el.opt);

      $.mbBgndGallery.pause(el);

      clearTimeout(el.opt.changing);
      if (el.opt.imageCounter==0)
        el.opt.imageCounter=el.opt.images.length;

      el.opt.imageCounter--;

      $.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],el);
    },

    loader:{
      show:function(){},
      hide:function(){}
    },

    keyboard:function(el){
      $(document).on("keydown.bgndGallery",function(e){
        switch(e.keyCode){
          case 32:
            if(el.opt.paused){
              $.mbBgndGallery.play(el);
              el.opt.paused=false;
            }else{
              el.opt.paused=true;
              $.mbBgndGallery.pause(el);
            }
            e.preventDefault();
            break;
          case 39:
            $.mbBgndGallery.next(el);
            e.preventDefault();

            break;
          case 37:
            $.mbBgndGallery.prev(el);
            e.preventDefault();

            break;
        }
      })
    },

    buildControls:function(controls,el){
      var pause=$(controls).find(".pause");
      var play=$(controls).find(".play");
      var next=$(controls).find(".next");
      var prev=$(controls).find(".prev");
      var fullScreen =  $(controls).find(".fullscreen");

      if(($.browser.msie || $.browser.opera)){
        fullScreen.remove();
      }

      if(el.opt.autoStart)
        play.hide();

      pause.on("click",function(){
        $.mbBgndGallery.pause(el);
        $(this).hide();
        play.show();
      });

      play.on("click",function(){
        if(!el.opt.paused) return;
        clearTimeout(el.opt.changing);
        $.mbBgndGallery.play(el);
        el.opt.paused=false;
      });

      next.on("click",function(){
        $.mbBgndGallery.next(el);
        pause.hide();
        play.show();

      });

      prev.on("click",function(){
        $.mbBgndGallery.prev(el);
        pause.hide();
        play.show();
      });

      fullScreen.on("click",function(){
        var gallery = $("#bgndGallery_"+el.opt.galleryID).get(0)
        $.mbBgndGallery.runFullscreen(gallery, el);
      });

      if(el.opt.activateKeyboard)
        $.mbBgndGallery.keyboard(el);
    },

    changeGallery:function(el,array){

      $(el.gallery).fadeOut();

      $.mbBgndGallery.pause(el);

      el.opt.images=array;
      var images= el.opt.images;
      var totImg= images.length;
      var loadCounter=0;

      $.mbBgndGallery.preload(images[0],el);
      $(el.opt.gallery).on("imageLoaded."+el.opt.galleryID,function(){
        loadCounter++;
        if(loadCounter==totImg){
          $(el.opt.gallery).off("imageLoaded."+el.opt.galleryID);
          $(el.gallery).fadeIn();
          $.mbBgndGallery.play(el);
          el.opt.paused=false;
          return;
        }
        $.mbBgndGallery.preload(images[loadCounter],el);
      });
      el.opt.imageCounter=0;
    },

    runFullscreen: function(gallery, el){
      function RunPrefixMethod(obj, method) {
        var pfx = ["webkit", "moz", "ms", "o", ""];
        var p = 0, m, t;
        while (p < pfx.length && !obj[m]) {
          m = method;
          if (pfx[p] == "") {
            m = m.substr(0,1).toLowerCase() + m.substr(1);
          }
          m = pfx[p] + m;
          t = typeof obj[m];
          if (t != "undefined") {
            pfx = [pfx[p]];
            return (t == "function" ? obj[m]() : obj[m]);
          }
          p++;
        }
      }

      function launchFullscreen(element) {
        RunPrefixMethod(element, "RequestFullScreen");
        setTimeout(function(){
          var fullscreenchange = $.browser.mozilla ? "mozfullscreenchange" : $.browser.webkit ? "webkitfullscreenchange" : $.browser.msie ? "msfullscreenchange" :  $.browser.opera ? "ofullscreenchange" : "fullscreenchange";
          $(document).one(fullscreenchange, function(e) {
            var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
            if (!isFullScreen) {
              el.isFullscreen = false;
              $(".fullScreen_controls").remove();
            }
          });
        },1000);
      }

      function cancelFullscreen() {
        if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
          RunPrefixMethod(document, "CancelFullScreen");
        }
      }

      if(el.isFullscreen){
        cancelFullscreen();
        el.isFullscreen = false;
        $(".fullScreen_controls").remove();
      }else{
        el.isFullscreen = true;
        var controls = $(el.opt.controls).clone(true).addClass("fullScreen_controls").css({position:"absolute", zIndex:1000, bottom: 20, right:20});
        controls.find(".fullscreen").html("exit");
        $(gallery).append(controls);
        $(gallery).addClass("fullScreen");
        launchFullscreen(gallery);
      }
    }

  };

  jQuery.loadFromSystem=function(folderPath, type){


    if(!folderPath)
      return;
    if(!type)
      type= ["jpg","jpeg","png"];
    var arr=[];
    $.ajax({
      url:folderPath,
      async:false,
      success:function(response){
        var tmp=$(response);
        var els= tmp.find("[href]");

        els.each(function(){
          for (var i in type){
            if ($(this).attr("href").indexOf(type[i])>=0)
              arr.push(folderPath+$(this).attr("href"));
            arr = $.unique(arr);
          }
        });
        tmp.remove();
      }
    });
    return arr;
  };

  $.fn.greyScale = function() {
    return this.each(function() {

      if ($.browser.msie && $.browser.version<9) {
        this.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayScale=1)";
      } else {
        this.src = grayScaleImage(this);
      }

    })
  };

  $.shuffle = function(arr) {
    var newArray = arr.slice();
    var len = newArray.length;
    var i = len;
    while (i--) {
      var p = parseInt(Math.random()*len);
      var t = newArray[i];
      newArray[i] = newArray[p];
      newArray[p] = t;
    }
    return newArray;
  };

  function grayScaleImage(imgObj){
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');

    var imgW = imgObj.width;
    var imgH = imgObj.height;
    canvas.width = imgW;
    canvas.height = imgH;

    canvasContext.drawImage(imgObj, 0, 0);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);

    for(var y = 0; y < imgPixels.height; y++){
      for(var x = 0; x < imgPixels.width; x++){
        var i = (y * 4) * imgPixels.width + x * 4;
        var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
        imgPixels.data[i] = avg;
        imgPixels.data[i + 1] = avg;
        imgPixels.data[i + 2] = avg;
      }
    }
    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
  }

})(jQuery);


/*!
 * Isotope PACKAGED v2.1.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):"object"==typeof exports?i(require("jquery")):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||o()}function o(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var o=s[t];o()}}function n(n){return"complete"===r.readyState?o():(n.bind(r,"DOMContentLoaded",i),n.bind(r,"readystatechange",i),n.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],n):"object"==typeof exports?module.exports=n(require("eventie")):t.docReady=n(t.eventie)}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){}function o(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function n(i){function n(){if(!d){d=!0;var o=t.getComputedStyle;if(p=function(){var t=o?function(t){return o(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||r("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1"),i}}(),h=i("boxSizing")){var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style[h]="border-box";var s=document.body||document.documentElement;s.appendChild(n);var a=p(n);f=200===e(a.width),s.removeChild(n)}}}function a(t){if(n(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=p(t);if("none"===i.display)return o();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var a=r.isBorderBox=!(!h||!i[h]||"border-box"!==i[h]),d=0,l=s.length;l>d;d++){var c=s[d],y=i[c];y=u(t,y);var m=parseFloat(y);r[c]=isNaN(m)?0:m}var g=r.paddingLeft+r.paddingRight,v=r.paddingTop+r.paddingBottom,_=r.marginLeft+r.marginRight,I=r.marginTop+r.marginBottom,L=r.borderLeftWidth+r.borderRightWidth,z=r.borderTopWidth+r.borderBottomWidth,b=a&&f,x=e(i.width);x!==!1&&(r.width=x+(b?0:g+L));var S=e(i.height);return S!==!1&&(r.height=S+(b?0:v+z)),r.innerWidth=r.width-(g+L),r.innerHeight=r.height-(v+z),r.outerWidth=r.width+_,r.outerHeight=r.height+I,r}}function u(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var o=e.style,n=o.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),o.left=i,i=o.pixelLeft,o.left=n,s&&(r.left=s),i}var p,h,f,d=!1;return a}var r="undefined"==typeof console?i:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("desandro-get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t){function e(t,e){return t[s](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){i(t);for(var o=t.parentNode.querySelectorAll(e),n=0,r=o.length;r>n;n++)if(o[n]===t)return!0;return!1}function n(t,o){return i(t),e(t,o)}var r,s=function(){if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,o=e.length;o>i;i++){var n=e[i],r=n+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),u=e(a,"div");r=u?e:n}else r=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var o=l[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=c[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property")):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=l(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):d(o)&&(i=o),this[t]=i?l(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=l(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=l(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize();var n=this.element.outlayerGUID;delete v[n],delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,d=i[s],l=d.getAttribute(n);try{f=l&&JSON.parse(l)}catch(c){u&&u.error("Error parsing "+n+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var y=new o(d,f);p&&p.data(d,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,d="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):"object"==typeof exports?module.exports=s(require("eventie"),require("doc-ready"),require("wolfy87-eventemitter"),require("get-size"),require("desandro-matches-selector"),require("./item")):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):"object"==typeof exports?module.exports=i(require("../layout-mode"),require("masonry-layout")):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var d=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=u,d.LayoutMode=h,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},d.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e
},d.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){function e(){o.reveal(i.needReveal),o.hide(i.needHide)}this.option(t),this._getIsInstant();var i=this._filter(this.items);this.filteredItems=i.matches;var o=this;this._isInstant?this._noTransition(e):e(),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],r=this._getFilterTest(e),s=0,a=t.length;a>s;s++){var u=t[s];if(!u.isIgnored){var p=r(u);p&&i.push(u),p&&u.isHidden?o.push(u):p||u.isHidden||n.push(u)}}return{matches:i,needReveal:o,needHide:n}},d.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},d.prototype.updateSortData=function(t){var e;t?(t=o(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d.prototype._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=d.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},d.prototype._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e).matches;for(i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var c=d.prototype.remove;return d.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(c.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;i>e;e++)t.push(this.filteredItems[e].element);return t},d}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):"object"==typeof exports?module.exports=r(require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);






/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
 
/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( Math.sqrt( (pX-cX)*(pX-cX) + (pY-cY)*(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = true;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = false;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = $.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type === "mouseenter"
            if (e.type === "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (!ob.hoverIntent_s) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);




/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: mb.bgndGallery.effects.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site:   http://pupunzi.com
 *  blog: http://pupunzi.open-lab.com
 *  http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 15/03/14 22.12
 *  *****************************************************************************
 */

/*******************************************************************************
 *
 * mb.bgndGallery.effects
 * Author: pupunzi
 * Creation date: 26/06/13
 *
 ******************************************************************************/



// ENTER/EXIT EFFECTS

$.mbBgndGallery.effects={
  fade:{
    enter:{left:0,opacity:0},
    exit:{left:0,opacity:0},
    enterTiming:"ease-in",
    exitTiming:"ease-in"
  },
  slideUp:{
    enter:{top:"100%",opacity:1},
    exit:{top:0,opacity:0},
    enterTiming:"ease-in",
    exitTiming:"ease-in"
  },
  slideDown:{
    enter:{top:"-100%",opacity:1},
    exit:{top:0,opacity:0},
    enterTiming:"ease-in",
    exitTiming:"ease-in"
  },
  slideLeft:{
    enter:{x:"100%",opacity:0},
    exit:{x:"-100%",opacity:0},
    enterTiming:"easeOutQuad",
    exitTiming:"easeOutQuad"
  },
  slideRight:{
    enter:{x:"-100%",opacity:1},
    exit:{y:"100%",opacity:0}
  },
  zoom:{
    enter:{transform:"scale("+(1+ Math.random()*5)+")",opacity:0},
    exit:{transform:"scale("+(1 + Math.random()*5)+")",opacity:0},
    enterTiming:"cubic-bezier(0.19, 1, 0.22, 1)",
    exitTiming:"cubic-bezier(0.19, 1, 0.22, 1)"
  },

  zoomBlur:{ //the blur effect only works on webkit browsers.
    enter:{opacity:0, filter:"blur(30px)", transform: "scale(2)"},
    exit:{opacity:0, filter:"blur(30px)", transform: "scale(2)"},
    enterTiming:"cubic-bezier(0.19, 1, 0.22, 1)",
    exitTiming:"cubic-bezier(0.19, 1, 0.22, 1)"
  },

  blur:{ //the blur effect only works on webkit browsers.
    enter:{opacity:0, filter:"blur(30px)"},
    exit:{opacity:0, filter:"blur(30px)"},
    enterTiming:"cubic-bezier(0.19, 1, 0.22, 1)",
    exitTiming:"cubic-bezier(0.19, 1, 0.22, 1)"
  }
}


/**
 * Swiper 3.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 22, 2015
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var t;return e(this).each(function(){var e=new Swiper(this,a);t||(t=e)}),t}}window.Swiper=function(e,a){function t(){return"horizontal"===m.params.direction}function r(){m.autoplayTimeoutId=setTimeout(function(){m.params.loop?(m.fixLoop(),m._slideNext()):m.isEnd?a.autoplayStopOnLast?m.stopAutoplay():m._slideTo(0):m._slideNext()},m.params.autoplay)}function s(e,a){var t=f(e.target);if(!t.is(a))if("string"==typeof a)t=t.parents(a);else if(a.nodeType){var r;return t.parents().each(function(e,t){t===a&&(r=a)}),r?a:void 0}return 0===t.length?void 0:t[0]}function i(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){m.onResize(),m.emit("onObserverUpdate",m,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),m.observers.push(r)}function n(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var r=!1;if(m.container.parents(".swiper-slide").length>0&&0===m.container.parents(".swiper-slide-active").length)return;for(var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,n=window.innerHeight,o=m.container.offset(),l=[[o.left,o.top],[o.left+m.width,o.top],[o.left,o.top+m.height],[o.left+m.width,o.top+m.height]],p=0;p<l.length;p++){var d=l[p];d[0]>=s.left&&d[0]<=s.left+i&&d[1]>=s.top&&d[1]<=s.top+n&&(r=!0)}if(!r)return}t()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),39===a&&m.slideNext(),37===a&&m.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&m.slideNext(),38===a&&m.slidePrev())}}function o(e){e.originalEvent&&(e=e.originalEvent);var a=m._wheelEvent,r=0;if(e.detail)r=-e.detail;else if("mousewheel"===a)if(m.params.mousewheelForceToAxis)if(t()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;r=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;r=e.wheelDeltaY}else r=e.wheelDelta;else if("DOMMouseScroll"===a)r=-e.detail;else if("wheel"===a)if(m.params.mousewheelForceToAxis)if(t()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;r=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;r=-e.deltaY}else r=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY;if(m.params.freeMode){var s=m.getWrapperTranslate()+r;if(s>0&&(s=0),s<m.maxTranslate()&&(s=m.maxTranslate()),m.setWrapperTransition(0),m.setWrapperTranslate(s),m.updateProgress(),m.updateActiveIndex(),0===s||s===m.maxTranslate())return}else(new Date).getTime()-m._lastWheelScrollTime>60&&(0>r?m.slideNext():m.slidePrev()),m._lastWheelScrollTime=(new Date).getTime();return m.params.autoplay&&m.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function l(e,a){e=f(e);var r,s,i;r=e.attr("data-swiper-parallax")||"0",s=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),s||i?(s=s||"0",i=i||"0"):t()?(s=r,i="0"):(i=r,s="0"),s=s.indexOf("%")>=0?parseInt(s,10)*a+"%":s*a+"px",i=i.indexOf("%")>=0?parseInt(i,10)*a+"%":i*a+"px",e.transform("translate3d("+s+", "+i+",0px)")}function p(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof Swiper))return new Swiper(e,a);var d={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,keyboardControl:!1,mousewheelControl:!1,mousewheelForceToAxis:!1,hashnav:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",runCallbacksOnInit:!0};a=a||{};for(var u in d)if("undefined"==typeof a[u])a[u]=d[u];else if("object"==typeof a[u])for(var c in d[u])"undefined"==typeof a[u][c]&&(a[u][c]=d[u][c]);var m=this;m.params=a,m.classNames=[];var f;if(f="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,f&&(m.$=f,m.container=f(e),0!==m.container.length)){if(m.container.length>1)return void m.container.each(function(){new Swiper(this,a)});m.container[0].swiper=m,m.container.data("swiper",m),m.classNames.push("swiper-container-"+m.params.direction),m.params.freeMode&&m.classNames.push("swiper-container-free-mode"),m.support.flexbox||(m.classNames.push("swiper-container-no-flexbox"),m.params.slidesPerColumn=1),(m.params.parallax||m.params.watchSlidesVisibility)&&(m.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(m.params.effect)>=0&&(m.support.transforms3d?(m.params.watchSlidesProgress=!0,m.classNames.push("swiper-container-3d")):m.params.effect="slide"),"slide"!==m.params.effect&&m.classNames.push("swiper-container-"+m.params.effect),"cube"===m.params.effect&&(m.params.resistanceRatio=0,m.params.slidesPerView=1,m.params.slidesPerColumn=1,m.params.slidesPerGroup=1,m.params.centeredSlides=!1,m.params.spaceBetween=0,m.params.virtualTranslate=!0,m.params.setWrapperSize=!1),"fade"===m.params.effect&&(m.params.slidesPerView=1,m.params.slidesPerColumn=1,m.params.slidesPerGroup=1,m.params.watchSlidesProgress=!0,m.params.spaceBetween=0,m.params.virtualTranslate=!0),m.params.grabCursor&&m.support.touch&&(m.params.grabCursor=!1),m.wrapper=m.container.children("."+m.params.wrapperClass),m.params.pagination&&(m.paginationContainer=f(m.params.pagination),m.params.paginationClickable&&m.paginationContainer.addClass("swiper-pagination-clickable")),m.rtl=t()&&("rtl"===m.container[0].dir.toLowerCase()||"rtl"===m.container.css("direction")),m.rtl&&m.classNames.push("swiper-container-rtl"),m.rtl&&(m.wrongRTL="-webkit-box"===m.wrapper.css("display")),m.params.slidesPerColumn>1&&m.classNames.push("swiper-container-multirow"),m.device.android&&m.classNames.push("swiper-container-android"),m.container.addClass(m.classNames.join(" ")),m.translate=0,m.progress=0,m.velocity=0,m.lockSwipeToNext=function(){m.params.allowSwipeToNext=!1},m.lockSwipeToPrev=function(){m.params.allowSwipeToPrev=!1},m.lockSwipes=function(){m.params.allowSwipeToNext=m.params.allowSwipeToPrev=!1},m.unlockSwipeToNext=function(){m.params.allowSwipeToNext=!0},m.unlockSwipeToPrev=function(){m.params.allowSwipeToPrev=!0},m.unlockSwipes=function(){m.params.allowSwipeToNext=m.params.allowSwipeToPrev=!0},m.params.grabCursor&&(m.container[0].style.cursor="move",m.container[0].style.cursor="-webkit-grab",m.container[0].style.cursor="-moz-grab",m.container[0].style.cursor="grab"),m.imagesToLoad=[],m.imagesLoaded=0,m.loadImage=function(e,a,t,r){function s(){r&&r()}var i;e.complete&&t?s():a?(i=new Image,i.onload=s,i.onerror=s,i.src=a):s()},m.preloadImages=function(){function e(){"undefined"!=typeof m&&null!==m&&(void 0!==m.imagesLoaded&&m.imagesLoaded++,m.imagesLoaded===m.imagesToLoad.length&&(m.params.updateOnImagesReady&&m.update(),m.emit("onImagesReady",m)))}m.imagesToLoad=m.container.find("img");for(var a=0;a<m.imagesToLoad.length;a++)m.loadImage(m.imagesToLoad[a],m.imagesToLoad[a].currentSrc||m.imagesToLoad[a].getAttribute("src"),!0,e)},m.autoplayTimeoutId=void 0,m.autoplaying=!1,m.autoplayPaused=!1,m.startAutoplay=function(){return"undefined"!=typeof m.autoplayTimeoutId?!1:m.params.autoplay?m.autoplaying?!1:(m.autoplaying=!0,m.emit("onAutoplayStart",m),void r()):!1},m.stopAutoplay=function(){m.autoplayTimeoutId&&(m.autoplayTimeoutId&&clearTimeout(m.autoplayTimeoutId),m.autoplaying=!1,m.autoplayTimeoutId=void 0,m.emit("onAutoplayStop",m))},m.pauseAutoplay=function(e){m.autoplayPaused||(m.autoplayTimeoutId&&clearTimeout(m.autoplayTimeoutId),m.autoplayPaused=!0,0===e?(m.autoplayPaused=!1,r()):m.wrapper.transitionEnd(function(){m.autoplayPaused=!1,m.autoplaying?r():m.stopAutoplay()}))},m.minTranslate=function(){return-m.snapGrid[0]},m.maxTranslate=function(){return-m.snapGrid[m.snapGrid.length-1]},m.updateContainerSize=function(){m.width=m.container[0].clientWidth,m.height=m.container[0].clientHeight,m.size=t()?m.width:m.height},m.updateSlidesSize=function(){m.slides=m.wrapper.children("."+m.params.slideClass),m.snapGrid=[],m.slidesGrid=[],m.slidesSizesGrid=[];var e,a=m.params.spaceBetween,r=0,s=0,i=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*m.size),m.virtualSize=-a,m.slides.css(m.rtl?{marginLeft:"",marginTop:""}:{marginRight:"",marginBottom:""});var n;m.params.slidesPerColumn>1&&(n=Math.floor(m.slides.length/m.params.slidesPerColumn)===m.slides.length/m.params.slidesPerColumn?m.slides.length:Math.ceil(m.slides.length/m.params.slidesPerColumn)*m.params.slidesPerColumn);var o;for(e=0;e<m.slides.length;e++){o=0;var l=m.slides.eq(e);if(m.params.slidesPerColumn>1){var p,d,u,c,f=m.params.slidesPerColumn;"column"===m.params.slidesPerColumnFill?(d=Math.floor(e/f),u=e-d*f,p=d+u*n/f,l.css({"-webkit-box-ordinal-group":p,"-moz-box-ordinal-group":p,"-ms-flex-order":p,"-webkit-order":p,order:p})):(c=n/f,u=Math.floor(e/c),d=e-u*c),l.css({"margin-top":0!==u&&m.params.spaceBetween&&m.params.spaceBetween+"px"}).attr("data-swiper-column",d).attr("data-swiper-row",u)}"none"!==l.css("display")&&("auto"===m.params.slidesPerView?o=t()?l.outerWidth(!0):l.outerHeight(!0):(o=(m.size-(m.params.slidesPerView-1)*a)/m.params.slidesPerView,t()?m.slides[e].style.width=o+"px":m.slides[e].style.height=o+"px"),m.slides[e].swiperSlideSize=o,m.slidesSizesGrid.push(o),m.params.centeredSlides?(r=r+o/2+s/2+a,0===e&&(r=r-m.size/2-a),Math.abs(r)<.001&&(r=0),i%m.params.slidesPerGroup===0&&m.snapGrid.push(r),m.slidesGrid.push(r)):(i%m.params.slidesPerGroup===0&&m.snapGrid.push(r),m.slidesGrid.push(r),r=r+o+a),m.virtualSize+=o+a,s=o,i++)}m.virtualSize=Math.max(m.virtualSize,m.size);var h;if(m.rtl&&m.wrongRTL&&("slide"===m.params.effect||"coverflow"===m.params.effect)&&m.wrapper.css({width:m.virtualSize+m.params.spaceBetween+"px"}),(!m.support.flexbox||m.params.setWrapperSize)&&m.wrapper.css(t()?{width:m.virtualSize+m.params.spaceBetween+"px"}:{height:m.virtualSize+m.params.spaceBetween+"px"}),m.params.slidesPerColumn>1&&(m.virtualSize=(o+m.params.spaceBetween)*n,m.virtualSize=Math.ceil(m.virtualSize/m.params.slidesPerColumn)-m.params.spaceBetween,m.wrapper.css({width:m.virtualSize+m.params.spaceBetween+"px"}),m.params.centeredSlides)){for(h=[],e=0;e<m.snapGrid.length;e++)m.snapGrid[e]<m.virtualSize+m.snapGrid[0]&&h.push(m.snapGrid[e]);m.snapGrid=h}if(!m.params.centeredSlides){for(h=[],e=0;e<m.snapGrid.length;e++)m.snapGrid[e]<=m.virtualSize-m.size&&h.push(m.snapGrid[e]);m.snapGrid=h,Math.floor(m.virtualSize-m.size)>Math.floor(m.snapGrid[m.snapGrid.length-1])&&m.snapGrid.push(m.virtualSize-m.size)}0===m.snapGrid.length&&(m.snapGrid=[0]),0!==m.params.spaceBetween&&m.slides.css(t()?m.rtl?{marginLeft:a+"px"}:{marginRight:a+"px"}:{marginBottom:a+"px"}),m.params.watchSlidesProgress&&m.updateSlidesOffset()},m.updateSlidesOffset=function(){for(var e=0;e<m.slides.length;e++)m.slides[e].swiperSlideOffset=t()?m.slides[e].offsetLeft:m.slides[e].offsetTop},m.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=m.translate||0),0!==m.slides.length){"undefined"==typeof m.slides[0].swiperSlideOffset&&m.updateSlidesOffset();var a=m.params.centeredSlides?-e+m.size/2:-e;m.rtl&&(a=m.params.centeredSlides?e-m.size/2:e);{m.container[0].getBoundingClientRect(),t()?"left":"top",t()?"right":"bottom"}m.slides.removeClass(m.params.slideVisibleClass);for(var r=0;r<m.slides.length;r++){var s=m.slides[r],i=m.params.centeredSlides===!0?s.swiperSlideSize/2:0,n=(a-s.swiperSlideOffset-i)/(s.swiperSlideSize+m.params.spaceBetween);if(m.params.watchSlidesVisibility){var o=-(a-s.swiperSlideOffset-i),l=o+m.slidesSizesGrid[r],p=o>=0&&o<m.size||l>0&&l<=m.size||0>=o&&l>=m.size;p&&m.slides.eq(r).addClass(m.params.slideVisibleClass)}s.progress=m.rtl?-n:n}}},m.updateProgress=function(e){"undefined"==typeof e&&(e=m.translate||0);var a=m.maxTranslate()-m.minTranslate();0===a?(m.progress=0,m.isBeginning=m.isEnd=!0):(m.progress=(e-m.minTranslate())/a,m.isBeginning=m.progress<=0,m.isEnd=m.progress>=1),m.isBeginning&&m.emit("onReachBeginning",m),m.isEnd&&m.emit("onReachEnd",m),m.params.watchSlidesProgress&&m.updateSlidesProgress(e),m.emit("onProgress",m,m.progress)},m.updateActiveIndex=function(){var e,a,t,r=m.rtl?m.translate:-m.translate;for(a=0;a<m.slidesGrid.length;a++)"undefined"!=typeof m.slidesGrid[a+1]?r>=m.slidesGrid[a]&&r<m.slidesGrid[a+1]-(m.slidesGrid[a+1]-m.slidesGrid[a])/2?e=a:r>=m.slidesGrid[a]&&r<m.slidesGrid[a+1]&&(e=a+1):r>=m.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/m.params.slidesPerGroup),t>=m.snapGrid.length&&(t=m.snapGrid.length-1),e!==m.activeIndex&&(m.snapIndex=t,m.previousIndex=m.activeIndex,m.activeIndex=e,m.updateClasses())},m.updateClasses=function(){m.slides.removeClass(m.params.slideActiveClass+" "+m.params.slideNextClass+" "+m.params.slidePrevClass);var e=m.slides.eq(m.activeIndex);if(e.addClass(m.params.slideActiveClass),e.next("."+m.params.slideClass).addClass(m.params.slideNextClass),e.prev("."+m.params.slideClass).addClass(m.params.slidePrevClass),m.bullets&&m.bullets.length>0){m.bullets.removeClass(m.params.bulletActiveClass);var a;m.params.loop?(a=Math.ceil(m.activeIndex-m.loopedSlides)/m.params.slidesPerGroup,a>m.slides.length-1-2*m.loopedSlides&&(a-=m.slides.length-2*m.loopedSlides),a>m.bullets.length-1&&(a-=m.bullets.length)):a="undefined"!=typeof m.snapIndex?m.snapIndex:m.activeIndex||0,m.paginationContainer.length>1?m.bullets.each(function(){f(this).index()===a&&f(this).addClass(m.params.bulletActiveClass)}):m.bullets.eq(a).addClass(m.params.bulletActiveClass)}m.params.loop||(m.params.prevButton&&(m.isBeginning?(f(m.params.prevButton).addClass(m.params.buttonDisabledClass),m.params.a11y&&m.a11y&&m.a11y.disable(f(m.params.prevButton))):(f(m.params.prevButton).removeClass(m.params.buttonDisabledClass),m.params.a11y&&m.a11y&&m.a11y.enable(f(m.params.prevButton)))),m.params.nextButton&&(m.isEnd?(f(m.params.nextButton).addClass(m.params.buttonDisabledClass),m.params.a11y&&m.a11y&&m.a11y.disable(f(m.params.nextButton))):(f(m.params.nextButton).removeClass(m.params.buttonDisabledClass),m.params.a11y&&m.a11y&&m.a11y.enable(f(m.params.nextButton)))))},m.updatePagination=function(){if(m.params.pagination&&m.paginationContainer&&m.paginationContainer.length>0){for(var e="",a=m.params.loop?Math.ceil((m.slides.length-2*m.loopedSlides)/m.params.slidesPerGroup):m.snapGrid.length,t=0;a>t;t++)e+=m.params.paginationBulletRender?m.params.paginationBulletRender(t,m.params.bulletClass):'<span class="'+m.params.bulletClass+'"></span>';m.paginationContainer.html(e),m.bullets=m.paginationContainer.find("."+m.params.bulletClass)}},m.update=function(e){function a(){r=Math.min(Math.max(m.translate,m.maxTranslate()),m.minTranslate()),m.setWrapperTranslate(r),m.updateActiveIndex(),m.updateClasses()}if(m.updateContainerSize(),m.updateSlidesSize(),m.updateProgress(),m.updatePagination(),m.updateClasses(),m.params.scrollbar&&m.scrollbar&&m.scrollbar.set(),e){var t,r;m.params.freeMode?a():(t="auto"===m.params.slidesPerView&&m.isEnd&&!m.params.centeredSlides?m.slideTo(m.slides.length-1,0,!1,!0):m.slideTo(m.activeIndex,0,!1,!0),t||a())}},m.onResize=function(){if(m.updateContainerSize(),m.updateSlidesSize(),m.updateProgress(),("auto"===m.params.slidesPerView||m.params.freeMode)&&m.updatePagination(),m.params.scrollbar&&m.scrollbar&&m.scrollbar.set(),m.params.freeMode){var e=Math.min(Math.max(m.translate,m.maxTranslate()),m.minTranslate());m.setWrapperTranslate(e),m.updateActiveIndex(),m.updateClasses()}else m.updateClasses(),"auto"===m.params.slidesPerView&&m.isEnd&&!m.params.centeredSlides?m.slideTo(m.slides.length-1,0,!1,!0):m.slideTo(m.activeIndex,0,!1,!0)};var h=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?h=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(h=["MSPointerDown","MSPointerMove","MSPointerUp"]),m.touchEvents={start:m.support.touch||!m.params.simulateTouch?"touchstart":h[0],move:m.support.touch||!m.params.simulateTouch?"touchmove":h[1],end:m.support.touch||!m.params.simulateTouch?"touchend":h[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===m.params.touchEventsTarget?m.container:m.wrapper).addClass("swiper-wp8-"+m.params.direction),m.initEvents=function(e){var t=e?"off":"on",r=e?"removeEventListener":"addEventListener",s="container"===m.params.touchEventsTarget?m.container[0]:m.wrapper[0],i=m.support.touch?s:document,n=m.params.nested?!0:!1;m.browser.ie?(s[r](m.touchEvents.start,m.onTouchStart,!1),i[r](m.touchEvents.move,m.onTouchMove,n),i[r](m.touchEvents.end,m.onTouchEnd,!1)):(m.support.touch&&(s[r](m.touchEvents.start,m.onTouchStart,!1),s[r](m.touchEvents.move,m.onTouchMove,n),s[r](m.touchEvents.end,m.onTouchEnd,!1)),!a.simulateTouch||m.device.ios||m.device.android||(s[r]("mousedown",m.onTouchStart,!1),i[r]("mousemove",m.onTouchMove,n),i[r]("mouseup",m.onTouchEnd,!1))),window[r]("resize",m.onResize),m.params.nextButton&&(f(m.params.nextButton)[t]("click",m.onClickNext),m.params.a11y&&m.a11y&&f(m.params.nextButton)[t]("keydown",m.a11y.onEnterKey)),m.params.prevButton&&(f(m.params.prevButton)[t]("click",m.onClickPrev),m.params.a11y&&m.a11y&&f(m.params.prevButton)[t]("keydown",m.a11y.onEnterKey)),m.params.pagination&&m.params.paginationClickable&&f(m.paginationContainer)[t]("click","."+m.params.bulletClass,m.onClickIndex),(m.params.preventClicks||m.params.preventClicksPropagation)&&s[r]("click",m.preventClicks,!0)},m.attachEvents=function(){m.initEvents()},m.detachEvents=function(){m.initEvents(!0)},m.allowClick=!0,m.preventClicks=function(e){m.allowClick||(m.params.preventClicks&&e.preventDefault(),m.params.preventClicksPropagation&&(e.stopPropagation(),e.stopImmediatePropagation()))},m.onClickNext=function(e){e.preventDefault(),m.slideNext()},m.onClickPrev=function(e){e.preventDefault(),m.slidePrev()},m.onClickIndex=function(e){e.preventDefault();var a=f(this).index()*m.params.slidesPerGroup;m.params.loop&&(a+=m.loopedSlides),m.slideTo(a)},m.updateClickedSlide=function(e){var a=s(e,"."+m.params.slideClass);if(!a)return m.clickedSlide=void 0,void(m.clickedIndex=void 0);if(m.clickedSlide=a,m.clickedIndex=f(a).index(),m.params.slideToClickedSlide&&void 0!==m.clickedIndex&&m.clickedIndex!==m.activeIndex){var t,r=m.clickedIndex;if(m.params.loop)if(t=f(m.clickedSlide).attr("data-swiper-slide-index"),r>m.slides.length-m.params.slidesPerView)m.fixLoop(),r=m.wrapper.children("."+m.params.slideClass+'[data-swiper-slide-index="'+t+'"]').eq(0).index(),setTimeout(function(){m.slideTo(r)},0);else if(r<m.params.slidesPerView-1){m.fixLoop();var i=m.wrapper.children("."+m.params.slideClass+'[data-swiper-slide-index="'+t+'"]');r=i.eq(i.length-1).index(),setTimeout(function(){m.slideTo(r)},0)}else m.slideTo(r);else m.slideTo(r)}};var v,g,w,x,y,T,b,S,C,M="input, select, textarea, button",z=Date.now(),P=[];m.animating=!1,m.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var I,E;if(m.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),I="touchstart"===e.type,I||!("which"in e)||3!==e.which){if(m.params.noSwiping&&s(e,"."+m.params.noSwipingClass))return void(m.allowClick=!0);if(!m.params.swipeHandler||s(e,m.params.swipeHandler)){if(v=!0,g=!1,x=void 0,E=void 0,m.touches.startX=m.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,m.touches.startY=m.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,w=Date.now(),m.allowClick=!0,m.updateContainerSize(),m.swipeDirection=void 0,m.params.threshold>0&&(b=!1),"touchstart"!==e.type){var a=!0;f(e.target).is(M)&&(a=!1),document.activeElement&&f(document.activeElement).is(M)&&document.activeElement.blur(),a&&e.preventDefault()}m.emit("onTouchStart",m,e)}}},m.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(I&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(m.params.onlyExternal)return g=!0,void(m.allowClick=!1);if(I&&document.activeElement&&e.target===document.activeElement&&f(e.target).is(M))return g=!0,void(m.allowClick=!1);if(m.emit("onTouchMove",m,e),!(e.targetTouches&&e.targetTouches.length>1)){if(m.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,m.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof x){var r=180*Math.atan2(Math.abs(m.touches.currentY-m.touches.startY),Math.abs(m.touches.currentX-m.touches.startX))/Math.PI;x=t()?r>m.params.touchAngle:90-r>m.params.touchAngle}if(x&&m.emit("onTouchMoveOpposite",m,e),"undefined"==typeof E&&m.browser.ieTouch&&(m.touches.currentX!==m.touches.startX||m.touches.currentY!==m.touches.startY)&&(E=!0),v){if(x)return void(v=!1);if(E||!m.browser.ieTouch){m.allowClick=!1,m.emit("onSliderMove",m,e),e.preventDefault(),m.params.touchMoveStopPropagation&&!m.params.nested&&e.stopPropagation(),g||(a.loop&&m.fixLoop(),T=m.getWrapperTranslate(),m.setWrapperTransition(0),m.animating&&m.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),m.params.autoplay&&m.autoplaying&&(m.params.autoplayDisableOnInteraction?m.stopAutoplay():m.pauseAutoplay()),C=!1,m.params.grabCursor&&(m.container[0].style.cursor="move",m.container[0].style.cursor="-webkit-grabbing",m.container[0].style.cursor="-moz-grabbin",m.container[0].style.cursor="grabbing")),g=!0;var s=m.touches.diff=t()?m.touches.currentX-m.touches.startX:m.touches.currentY-m.touches.startY;s*=m.params.touchRatio,m.rtl&&(s=-s),m.swipeDirection=s>0?"prev":"next",y=s+T;var i=!0;if(s>0&&y>m.minTranslate()?(i=!1,m.params.resistance&&(y=m.minTranslate()-1+Math.pow(-m.minTranslate()+T+s,m.params.resistanceRatio))):0>s&&y<m.maxTranslate()&&(i=!1,m.params.resistance&&(y=m.maxTranslate()+1-Math.pow(m.maxTranslate()-T-s,m.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!m.params.allowSwipeToNext&&"next"===m.swipeDirection&&T>y&&(y=T),!m.params.allowSwipeToPrev&&"prev"===m.swipeDirection&&y>T&&(y=T),m.params.followFinger){if(m.params.threshold>0){if(!(Math.abs(s)>m.params.threshold||b))return void(y=T);if(!b)return b=!0,m.touches.startX=m.touches.currentX,m.touches.startY=m.touches.currentY,y=T,void(m.touches.diff=t()?m.touches.currentX-m.touches.startX:m.touches.currentY-m.touches.startY)}(m.params.freeMode||m.params.watchSlidesProgress)&&m.updateActiveIndex(),m.params.freeMode&&(0===P.length&&P.push({position:m.touches[t()?"startX":"startY"],time:w}),P.push({position:m.touches[t()?"currentX":"currentY"],time:(new Date).getTime()})),m.updateProgress(y),m.setWrapperTranslate(y)}}}}}},m.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),m.emit("onTouchEnd",m,e),v){m.params.grabCursor&&g&&v&&(m.container[0].style.cursor="move",m.container[0].style.cursor="-webkit-grab",m.container[0].style.cursor="-moz-grab",m.container[0].style.cursor="grab");var a=Date.now(),t=a-w;if(m.allowClick&&(m.updateClickedSlide(e),m.emit("onTap",m,e),300>t&&a-z>300&&(S&&clearTimeout(S),S=setTimeout(function(){m&&(m.params.paginationHide&&m.paginationContainer.length>0&&!f(e.target).hasClass(m.params.bulletClass)&&m.paginationContainer.toggleClass(m.params.paginationHiddenClass),m.emit("onClick",m,e))},300)),300>t&&300>a-z&&(S&&clearTimeout(S),m.emit("onDoubleTap",m,e))),z=Date.now(),setTimeout(function(){m&&m.allowClick&&(m.allowClick=!0)},0),!v||!g||!m.swipeDirection||0===m.touches.diff||y===T)return void(v=g=!1);v=g=!1;var r;if(r=m.params.followFinger?m.rtl?m.translate:-m.translate:-y,m.params.freeMode){if(r<-m.minTranslate())return void m.slideTo(m.activeIndex);if(r>-m.maxTranslate())return void m.slideTo(m.slides.length-1);if(m.params.freeModeMomentum){if(P.length>1){var s=P.pop(),i=P.pop(),n=s.position-i.position,o=s.time-i.time;m.velocity=n/o,m.velocity=m.velocity/2,Math.abs(m.velocity)<.02&&(m.velocity=0),(o>150||(new Date).getTime()-s.time>300)&&(m.velocity=0)}else m.velocity=0;P.length=0;var l=1e3*m.params.freeModeMomentumRatio,p=m.velocity*l,d=m.translate+p;m.rtl&&(d=-d);var u,c=!1,h=20*Math.abs(m.velocity)*m.params.freeModeMomentumBounceRatio;d<m.maxTranslate()&&(m.params.freeModeMomentumBounce?(d+m.maxTranslate()<-h&&(d=m.maxTranslate()-h),u=m.maxTranslate(),c=!0,C=!0):d=m.maxTranslate()),d>m.minTranslate()&&(m.params.freeModeMomentumBounce?(d-m.minTranslate()>h&&(d=m.minTranslate()+h),u=m.minTranslate(),c=!0,C=!0):d=m.minTranslate()),0!==m.velocity&&(l=Math.abs(m.rtl?(-d-m.translate)/m.velocity:(d-m.translate)/m.velocity)),m.params.freeModeMomentumBounce&&c?(m.updateProgress(u),m.setWrapperTransition(l),m.setWrapperTranslate(d),m.onTransitionStart(),m.animating=!0,m.wrapper.transitionEnd(function(){C&&(m.emit("onMomentumBounce",m),m.setWrapperTransition(m.params.speed),m.setWrapperTranslate(u),m.wrapper.transitionEnd(function(){m.onTransitionEnd()}))})):m.velocity?(m.updateProgress(d),m.setWrapperTransition(l),m.setWrapperTranslate(d),m.onTransitionStart(),m.animating||(m.animating=!0,m.wrapper.transitionEnd(function(){m.onTransitionEnd()}))):m.updateProgress(d),m.updateActiveIndex()}return void((!m.params.freeModeMomentum||t>=m.params.longSwipesMs)&&(m.updateProgress(),m.updateActiveIndex()))}var x,b=0,M=m.slidesSizesGrid[0];for(x=0;x<m.slidesGrid.length;x+=m.params.slidesPerGroup)"undefined"!=typeof m.slidesGrid[x+m.params.slidesPerGroup]?r>=m.slidesGrid[x]&&r<m.slidesGrid[x+m.params.slidesPerGroup]&&(b=x,M=m.slidesGrid[x+m.params.slidesPerGroup]-m.slidesGrid[x]):r>=m.slidesGrid[x]&&(b=x,M=m.slidesGrid[m.slidesGrid.length-1]-m.slidesGrid[m.slidesGrid.length-2]);var I=(r-m.slidesGrid[b])/M;if(t>m.params.longSwipesMs){if(!m.params.longSwipes)return void m.slideTo(m.activeIndex);"next"===m.swipeDirection&&m.slideTo(I>=m.params.longSwipesRatio?b+m.params.slidesPerGroup:b),"prev"===m.swipeDirection&&m.slideTo(I>1-m.params.longSwipesRatio?b+m.params.slidesPerGroup:b)}else{if(!m.params.shortSwipes)return void m.slideTo(m.activeIndex);"next"===m.swipeDirection&&m.slideTo(b+m.params.slidesPerGroup),"prev"===m.swipeDirection&&m.slideTo(b)}}},m._slideTo=function(e,a){return m.slideTo(e,a,!0,!0)},m.slideTo=function(e,a,r,s){"undefined"==typeof r&&(r=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),m.snapIndex=Math.floor(e/m.params.slidesPerGroup),m.snapIndex>=m.snapGrid.length&&(m.snapIndex=m.snapGrid.length-1);var i=-m.snapGrid[m.snapIndex];m.params.autoplay&&m.autoplaying&&(s||!m.params.autoplayDisableOnInteraction?m.pauseAutoplay(a):m.stopAutoplay()),m.updateProgress(i);for(var n=0;n<m.slidesGrid.length;n++)-i>=m.slidesGrid[n]&&(e=n);if("undefined"==typeof a&&(a=m.params.speed),m.previousIndex=m.activeIndex||0,m.activeIndex=e,i===m.translate)return m.updateClasses(),!1;m.onTransitionStart(r);t()?i:0,t()?0:i;return 0===a?(m.setWrapperTransition(0),m.setWrapperTranslate(i),m.onTransitionEnd(r)):(m.setWrapperTransition(a),m.setWrapperTranslate(i),m.animating||(m.animating=!0,m.wrapper.transitionEnd(function(){m.onTransitionEnd(r)}))),m.updateClasses(),!0},m.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),m.lazy&&m.lazy.onTransitionStart(),e&&(m.emit("onTransitionStart",m),m.activeIndex!==m.previousIndex&&m.emit("onSlideChangeStart",m))},m.onTransitionEnd=function(e){m.animating=!1,m.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),m.lazy&&m.lazy.onTransitionEnd(),e&&(m.emit("onTransitionEnd",m),m.activeIndex!==m.previousIndex&&m.emit("onSlideChangeEnd",m)),m.params.hashnav&&m.hashnav&&m.hashnav.setHash()},m.slideNext=function(e,a,t){if(m.params.loop){if(m.animating)return!1;m.fixLoop();{m.container[0].clientLeft}return m.slideTo(m.activeIndex+m.params.slidesPerGroup,a,e,t)}return m.slideTo(m.activeIndex+m.params.slidesPerGroup,a,e,t)},m._slideNext=function(e){return m.slideNext(!0,e,!0)},m.slidePrev=function(e,a,t){if(m.params.loop){if(m.animating)return!1;m.fixLoop();{m.container[0].clientLeft}return m.slideTo(m.activeIndex-1,a,e,t)}return m.slideTo(m.activeIndex-1,a,e,t)},m._slidePrev=function(e){return m.slidePrev(!0,e,!0)},m.slideReset=function(e,a){return m.slideTo(m.activeIndex,a,e)},m.setWrapperTransition=function(e,a){m.wrapper.transition(e),"slide"!==m.params.effect&&m.effects[m.params.effect]&&m.effects[m.params.effect].setTransition(e),m.params.parallax&&m.parallax&&m.parallax.setTransition(e),m.params.scrollbar&&m.scrollbar&&m.scrollbar.setTransition(e),m.params.control&&m.controller&&m.controller.setTransition(e,a),m.emit("onSetTransition",m,e)},m.setWrapperTranslate=function(e,a,r){var s=0,i=0,n=0;t()?s=m.rtl?-e:e:i=e,m.params.virtualTranslate||m.wrapper.transform(m.support.transforms3d?"translate3d("+s+"px, "+i+"px, "+n+"px)":"translate("+s+"px, "+i+"px)"),m.translate=t()?s:i,a&&m.updateActiveIndex(),"slide"!==m.params.effect&&m.effects[m.params.effect]&&m.effects[m.params.effect].setTranslate(m.translate),m.params.parallax&&m.parallax&&m.parallax.setTranslate(m.translate),m.params.scrollbar&&m.scrollbar&&m.scrollbar.setTranslate(m.translate),m.params.control&&m.controller&&m.controller.setTranslate(m.translate,r),m.emit("onSetTranslate",m,m.translate)},m.getTranslate=function(e,a){var t,r,s,i;return"undefined"==typeof a&&(a="x"),m.params.virtualTranslate?m.rtl?-m.translate:m.translate:(s=window.getComputedStyle(e,null),window.WebKitCSSMatrix?i=new WebKitCSSMatrix("none"===s.webkitTransform?"":s.webkitTransform):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?i.m41:parseFloat(16===t.length?t[12]:t[4])),"y"===a&&(r=window.WebKitCSSMatrix?i.m42:parseFloat(16===t.length?t[13]:t[5])),m.rtl&&r&&(r=-r),r||0)},m.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=t()?"x":"y"),m.getTranslate(m.wrapper[0],e)},m.observers=[],m.initObservers=function(){if(m.params.observeParents)for(var e=m.container.parents(),a=0;a<e.length;a++)i(e[a]);i(m.container[0],{childList:!1}),i(m.wrapper[0],{attributes:!1})},m.disconnectObservers=function(){for(var e=0;e<m.observers.length;e++)m.observers[e].disconnect();m.observers=[]},m.createLoop=function(){m.wrapper.children("."+m.params.slideClass+"."+m.params.slideDuplicateClass).remove();
var e=m.wrapper.children("."+m.params.slideClass);m.loopedSlides=parseInt(m.params.loopedSlides||m.params.slidesPerView,10),m.loopedSlides=m.loopedSlides+m.params.loopAdditionalSlides,m.loopedSlides>e.length&&(m.loopedSlides=e.length);var a,t=[],r=[];for(e.each(function(a,s){var i=f(this);a<m.loopedSlides&&r.push(s),a<e.length&&a>=e.length-m.loopedSlides&&t.push(s),i.attr("data-swiper-slide-index",a)}),a=0;a<r.length;a++)m.wrapper.append(f(r[a].cloneNode(!0)).addClass(m.params.slideDuplicateClass));for(a=t.length-1;a>=0;a--)m.wrapper.prepend(f(t[a].cloneNode(!0)).addClass(m.params.slideDuplicateClass))},m.destroyLoop=function(){m.wrapper.children("."+m.params.slideClass+"."+m.params.slideDuplicateClass).remove()},m.fixLoop=function(){var e;m.activeIndex<m.loopedSlides?(e=m.slides.length-3*m.loopedSlides+m.activeIndex,e+=m.loopedSlides,m.slideTo(e,0,!1,!0)):("auto"===m.params.slidesPerView&&m.activeIndex>=2*m.loopedSlides||m.activeIndex>m.slides.length-2*m.params.slidesPerView)&&(e=-m.slides.length+m.activeIndex+m.loopedSlides,e+=m.loopedSlides,m.slideTo(e,0,!1,!0))},m.appendSlide=function(e){if(m.params.loop&&m.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&m.wrapper.append(e[a]);else m.wrapper.append(e);m.params.loop&&m.createLoop(),m.params.observer&&m.support.observer||m.update(!0)},m.prependSlide=function(e){m.params.loop&&m.destroyLoop();var a=m.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&m.wrapper.prepend(e[t]);a=m.activeIndex+e.length}else m.wrapper.prepend(e);m.params.loop&&m.createLoop(),m.params.observer&&m.support.observer||m.update(!0),m.slideTo(a,0,!1)},m.removeSlide=function(e){m.params.loop&&m.destroyLoop();var a,t=m.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],m.slides[a]&&m.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,m.slides[a]&&m.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);m.params.observer&&m.support.observer||m.update(!0),m.slideTo(t,0,!1)},m.removeAllSlides=function(){for(var e=[],a=0;a<m.slides.length;a++)e.push(a);m.removeSlide(e)},m.effects={fade:{setTranslate:function(){for(var e=0;e<m.slides.length;e++){var a=m.slides.eq(e),r=a[0].swiperSlideOffset,s=-r;m.params.virtualTranslate||(s-=m.translate);var i=0;t()||(i=s,s=0);var n=m.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:n}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){m.slides.transition(e),m.params.virtualTranslate&&0!==e&&m.slides.eq(m.activeIndex).transitionEnd(function(){for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],a=0;a<e.length;a++)m.wrapper.trigger(e[a])})}},cube:{setTranslate:function(){var e,a=0;m.params.cube.shadow&&(t()?(e=m.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=f('<div class="swiper-cube-shadow"></div>'),m.wrapper.append(e)),e.css({height:m.width+"px"})):(e=m.container.find(".swiper-cube-shadow"),0===e.length&&(e=f('<div class="swiper-cube-shadow"></div>'),m.container.append(e))));for(var r=0;r<m.slides.length;r++){var s=m.slides.eq(r),i=90*r,n=Math.floor(i/360);m.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(s[0].progress,1),-1),l=0,p=0,d=0;r%4===0?(l=4*-n*m.size,d=0):(r-1)%4===0?(l=0,d=4*-n*m.size):(r-2)%4===0?(l=m.size+4*n*m.size,d=m.size):(r-3)%4===0&&(l=-m.size,d=3*m.size+4*m.size*n),m.rtl&&(l=-l),t()||(p=l,l=0);var u="rotateX("+(t()?0:-i)+"deg) rotateY("+(t()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(a=90*r+90*o,m.rtl&&(a=90*-r-90*o)),s.transform(u),m.params.cube.slideShadows){var c=s.find(t()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),h=s.find(t()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===c.length&&(c=f('<div class="swiper-slide-shadow-'+(t()?"left":"top")+'"></div>'),s.append(c)),0===h.length&&(h=f('<div class="swiper-slide-shadow-'+(t()?"right":"bottom")+'"></div>'),s.append(h));{s[0].progress}c.length&&(c[0].style.opacity=-s[0].progress),h.length&&(h[0].style.opacity=s[0].progress)}}if(m.wrapper.css({"-webkit-transform-origin":"50% 50% -"+m.size/2+"px","-moz-transform-origin":"50% 50% -"+m.size/2+"px","-ms-transform-origin":"50% 50% -"+m.size/2+"px","transform-origin":"50% 50% -"+m.size/2+"px"}),m.params.cube.shadow)if(t())e.transform("translate3d(0px, "+(m.width/2+m.params.cube.shadowOffset)+"px, "+-m.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+m.params.cube.shadowScale+")");else{var v=Math.abs(a)-90*Math.floor(Math.abs(a)/90),g=1.5-(Math.sin(2*v*Math.PI/360)/2+Math.cos(2*v*Math.PI/360)/2),w=m.params.cube.shadowScale,x=m.params.cube.shadowScale/g,y=m.params.cube.shadowOffset;e.transform("scale3d("+w+", 1, "+x+") translate3d(0px, "+(m.height/2+y)+"px, "+-m.height/2/x+"px) rotateX(-90deg)")}var T=m.isSafari||m.isUiWebView?-m.size/2:0;m.wrapper.transform("translate3d(0px,0,"+T+"px) rotateX("+(t()?0:a)+"deg) rotateY("+(t()?-a:0)+"deg)")},setTransition:function(e){m.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),m.params.cube.shadow&&!t()&&m.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=m.translate,a=t()?-e+m.width/2:-e+m.height/2,r=t()?m.params.coverflow.rotate:-m.params.coverflow.rotate,s=m.params.coverflow.depth,i=0,n=m.slides.length;n>i;i++){var o=m.slides.eq(i),l=m.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(a-p-l/2)/l*m.params.coverflow.modifier,u=t()?r*d:0,c=t()?0:r*d,h=-s*Math.abs(d),v=t()?0:m.params.coverflow.stretch*d,g=t()?m.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(v)<.001&&(v=0),Math.abs(h)<.001&&(h=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var w="translate3d("+g+"px,"+v+"px,"+h+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(w),o[0].style.zIndex=-Math.abs(Math.round(d))+1,m.params.coverflow.slideShadows){var x=o.find(t()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),y=o.find(t()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===x.length&&(x=f('<div class="swiper-slide-shadow-'+(t()?"left":"top")+'"></div>'),o.append(x)),0===y.length&&(y=f('<div class="swiper-slide-shadow-'+(t()?"right":"bottom")+'"></div>'),o.append(y)),x.length&&(x[0].style.opacity=d>0?d:0),y.length&&(y[0].style.opacity=-d>0?-d:0)}}if(m.browser.ie){var T=m.wrapper[0].style;T.perspectiveOrigin=a+"px 50%"}},setTransition:function(e){m.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},m.lazy={initialImageLoaded:!1,loadImageInSlide:function(e){if("undefined"!=typeof e&&0!==m.slides.length){var a=m.slides.eq(e),t=a.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");0!==t.length&&t.each(function(){var e=f(this);e.addClass("swiper-lazy-loading");var t=e.attr("data-src");m.loadImage(e[0],t,!1,function(){e.attr("src",t),e.removeAttr("data-src"),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),a.find(".swiper-lazy-preloader, .preloader").remove(),m.emit("onLazyImageReady",m,a[0],e[0])}),m.emit("onLazyImageLoad",m,a[0],e[0])})}},load:function(){if(m.params.watchSlidesVisibility)m.wrapper.children("."+m.params.slideVisibleClass).each(function(){m.lazy.loadImageInSlide(f(this).index())});else if(m.params.slidesPerView>1)for(var e=m.activeIndex;e<m.activeIndex+m.params.slidesPerView;e++)m.slides[e]&&m.lazy.loadImageInSlide(e);else m.lazy.loadImageInSlide(m.activeIndex);if(m.params.lazyLoadingInPrevNext){var a=m.wrapper.children("."+m.params.slideNextClass);a.length>0&&m.lazy.loadImageInSlide(a.index());var t=m.wrapper.children("."+m.params.slidePrevClass);t.length>0&&m.lazy.loadImageInSlide(t.index())}},onTransitionStart:function(){m.params.lazyLoading&&(m.params.lazyLoadingOnTransitionStart||!m.params.lazyLoadingOnTransitionStart&&!m.lazy.initialImageLoaded)&&(m.lazy.initialImageLoaded=!0,m.lazy.load())},onTransitionEnd:function(){m.params.lazyLoading&&!m.params.lazyLoadingOnTransitionStart&&m.lazy.load()}},m.scrollbar={set:function(){if(m.params.scrollbar){var e=m.scrollbar;e.track=f(m.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=f('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=t()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=m.size/m.virtualSize,e.moveDivider=e.divider*(e.trackSize/m.size),e.dragSize=e.trackSize*e.divider,t()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.track[0].style.display=e.divider>=1?"none":"",m.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(m.params.scrollbar){var e,a=m.scrollbar,r=(m.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*m.progress,m.rtl&&t()?(e=-e,e>0?(r=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(r=a.trackSize+e)):0>e?(r=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(r=a.trackSize-e),t()?(a.drag.transform(m.support.transforms3d?"translate3d("+e+"px, 0, 0)":"translateX("+e+"px)"),a.drag[0].style.width=r+"px"):(a.drag.transform(m.support.transforms3d?"translate3d(0px, "+e+"px, 0)":"translateY("+e+"px)"),a.drag[0].style.height=r+"px"),m.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){m.params.scrollbar&&m.scrollbar.drag.transition(e)}},m.controller={setTranslate:function(e,a){var t,r,s=m.params.control;if(m.isArray(s))for(var i=0;i<s.length;i++)s[i]!==a&&s[i]instanceof Swiper&&(e=s[i].rtl&&"horizontal"===s[i].params.direction?-m.translate:m.translate,t=(s[i].maxTranslate()-s[i].minTranslate())/(m.maxTranslate()-m.minTranslate()),r=(e-m.minTranslate())*t+s[i].minTranslate(),m.params.controlInverse&&(r=s[i].maxTranslate()-r),s[i].updateProgress(r),s[i].setWrapperTranslate(r,!1,m),s[i].updateActiveIndex());else s instanceof Swiper&&a!==s&&(e=s.rtl&&"horizontal"===s.params.direction?-m.translate:m.translate,t=(s.maxTranslate()-s.minTranslate())/(m.maxTranslate()-m.minTranslate()),r=(e-m.minTranslate())*t+s.minTranslate(),m.params.controlInverse&&(r=s.maxTranslate()-r),s.updateProgress(r),s.setWrapperTranslate(r,!1,m),s.updateActiveIndex())},setTransition:function(e,a){var t=m.params.control;if(m.isArray(t))for(var r=0;r<t.length;r++)t[r]!==a&&t[r]instanceof Swiper&&t[r].setWrapperTransition(e,m);else t instanceof Swiper&&a!==t&&t.setWrapperTransition(e,m)}},m.hashnav={init:function(){if(m.params.hashnav){m.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=m.slides.length;r>t;t++){var s=m.slides.eq(t),i=s.attr("data-hash");if(i===e&&!s.hasClass(m.params.slideDuplicateClass)){var n=s.index();m.slideTo(n,a,m.params.runCallbacksOnInit,!0)}}}},setHash:function(){m.hashnav.initialized&&m.params.hashnav&&(document.location.hash=m.slides.eq(m.activeIndex).attr("data-hash")||"")}},m.disableKeyboardControl=function(){f(document).off("keydown",n)},m.enableKeyboardControl=function(){f(document).on("keydown",n)},m._wheelEvent=!1,m._lastWheelScrollTime=(new Date).getTime(),m.params.mousewheelControl){if(void 0!==document.onmousewheel&&(m._wheelEvent="mousewheel"),!m._wheelEvent)try{new WheelEvent("wheel"),m._wheelEvent="wheel"}catch(k){}m._wheelEvent||(m._wheelEvent="DOMMouseScroll")}m.disableMousewheelControl=function(){return m._wheelEvent?(m.container.off(m._wheelEvent,o),!0):!1},m.enableMousewheelControl=function(){return m._wheelEvent?(m.container.on(m._wheelEvent,o),!0):!1},m.parallax={setTranslate:function(){m.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){l(this,m.progress)}),m.slides.each(function(){var e=f(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);l(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=m.params.speed),m.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=f(this),t=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(t=0),a.transition(t)})}},m._plugins=[];for(var D in m.plugins){var L=m.plugins[D](m,m.params[D]);L&&m._plugins.push(L)}return m.callPlugins=function(e){for(var a=0;a<m._plugins.length;a++)e in m._plugins[a]&&m._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},m.emitterEventListeners={},m.emit=function(e){m.params[e]&&m.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(m.emitterEventListeners[e])for(a=0;a<m.emitterEventListeners[e].length;a++)m.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);m.callPlugins&&m.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},m.on=function(e,a){return e=p(e),m.emitterEventListeners[e]||(m.emitterEventListeners[e]=[]),m.emitterEventListeners[e].push(a),m},m.off=function(e,a){var t;if(e=p(e),"undefined"==typeof a)return m.emitterEventListeners[e]=[],m;if(m.emitterEventListeners[e]&&0!==m.emitterEventListeners[e].length){for(t=0;t<m.emitterEventListeners[e].length;t++)m.emitterEventListeners[e][t]===a&&m.emitterEventListeners[e].splice(t,1);return m}},m.once=function(e,a){e=p(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),m.off(e,t)};return m.on(e,t),m},m.a11y={makeFocusable:function(e){return e[0].tabIndex="0",e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(f(e.target).is(m.params.nextButton)?(m.onClickNext(e),m.a11y.notify(m.isEnd?m.params.lastSlideMsg:m.params.nextSlideMsg)):f(e.target).is(m.params.prevButton)&&(m.onClickPrev(e),m.a11y.notify(m.isBeginning?m.params.firstSlideMsg:m.params.prevSlideMsg)))},liveRegion:f('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=m.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){if(m.params.nextButton){var e=f(m.params.nextButton);m.a11y.makeFocusable(e),m.a11y.addRole(e,"button"),m.a11y.addLabel(e,m.params.nextSlideMsg)}if(m.params.prevButton){var a=f(m.params.prevButton);m.a11y.makeFocusable(a),m.a11y.addRole(a,"button"),m.a11y.addLabel(a,m.params.prevSlideMsg)}f(m.container).append(m.a11y.liveRegion)},destroy:function(){m.a11y.liveRegion&&m.a11y.liveRegion.length>0&&m.a11y.liveRegion.remove()}},m.init=function(){m.params.loop&&m.createLoop(),m.updateContainerSize(),m.updateSlidesSize(),m.updatePagination(),m.params.scrollbar&&m.scrollbar&&m.scrollbar.set(),"slide"!==m.params.effect&&m.effects[m.params.effect]&&(m.params.loop||m.updateProgress(),m.effects[m.params.effect].setTranslate()),m.params.loop?m.slideTo(m.params.initialSlide+m.loopedSlides,0,m.params.runCallbacksOnInit):(m.slideTo(m.params.initialSlide,0,m.params.runCallbacksOnInit),0===m.params.initialSlide&&(m.parallax&&m.params.parallax&&m.parallax.setTranslate(),m.lazy&&m.params.lazyLoading&&m.lazy.load())),m.attachEvents(),m.params.observer&&m.support.observer&&m.initObservers(),m.params.preloadImages&&!m.params.lazyLoading&&m.preloadImages(),m.params.autoplay&&m.startAutoplay(),m.params.keyboardControl&&m.enableKeyboardControl&&m.enableKeyboardControl(),m.params.mousewheelControl&&m.enableMousewheelControl&&m.enableMousewheelControl(),m.params.hashnav&&m.hashnav&&m.hashnav.init(),m.params.a11y&&m.a11y&&m.a11y.init(),m.emit("onInit",m)},m.destroy=function(e){m.detachEvents(),m.disconnectObservers(),m.params.keyboardControl&&m.disableKeyboardControl&&m.disableKeyboardControl(),m.params.mousewheelControl&&m.disableMousewheelControl&&m.disableMousewheelControl(),m.params.a11y&&m.a11y&&m.a11y.destroy(),m.emit("onDestroy"),e!==!1&&(m=null)},m.init(),m}},Swiper.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=(e.match(/(iPod)(.*OS\s([\d_]+))?/),!t&&e.match(/(iPhone\sOS)\s([\d_]+)/));return{ios:t||r||t,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var a=["jQuery","Zepto","Dom7"],t=0;t<a.length;t++)window[a[t]]&&e(window[a[t]]);var r;r="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}))}(),"undefined"!=typeof module?module.exports=Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});
//# sourceMappingURL=maps/swiper.jquery.min.js.map






/* ===========================================================
 * jquery-interactive_bg.js v1.0
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an interactive moving background
 * that reacts to viewer's cursor
 *
 * https://github.com/peachananr/interactive_bg
 * 
 * License: GPL v3
 *
 * ========================================================== */
!function(e){var t={strength:25,scale:1.05,animationSpeed:"100ms",contain:true,wrapContent:false};e.fn.interactive_bg=function(n){return this.each(function(){var r=e.extend({},t,n),i=e(this),s=i.outerHeight(),o=i.outerWidth(),u=r.strength/s,a=r.strength/o,f="ontouchstart"in document.documentElement;if(r.contain==true){i.css({overflow:"hidden"})}if(r.wrapContent==false){i.prepend("<div class='ibg-bg'></div>")}else{i.wrapInner("<div class='ibg-bg'></div>")}if(i.data("ibg-bg")!==undefined){i.find("> .ibg-bg").css({background:"url('"+i.data("ibg-bg")+"') no-repeat center center","background-size":"cover"})}i.find("> .ibg-bg").css({width:o,height:s});if(f||screen.width<=699){window.addEventListener("devicemotion",l,false);function l(e){var t=Math.round(event.accelerationIncludingGravity.x*10)/10,n=Math.round(event.accelerationIncludingGravity.y*10)/10,s=-(t/10)*r.strength,o=-(n/10)*r.strength,u=-(s*2),a=-(o*2);i.find("> .ibg-bg").css({"-webkit-transform":"matrix("+r.scale+",0,0,"+r.scale+","+u+","+a+")","-moz-transform":"matrix("+r.scale+",0,0,"+r.scale+","+u+","+a+")","-o-transform":"matrix("+r.scale+",0,0,"+r.scale+","+u+","+a+")",transform:"matrix("+r.scale+",0,0,"+r.scale+","+u+","+a+")"})}}else{i.mouseenter(function(e){if(r.scale!=1)i.addClass("ibg-entering");i.find("> .ibg-bg").css({"-webkit-transform":"matrix("+r.scale+",0,0,"+r.scale+",0,0)","-moz-transform":"matrix("+r.scale+",0,0,"+r.scale+",0,0)","-o-transform":"matrix("+r.scale+",0,0,"+r.scale+",0,0)",transform:"matrix("+r.scale+",0,0,"+r.scale+",0,0)","-webkit-transition":"-webkit-transform "+r.animationSpeed+" linear","-moz-transition":"-moz-transform "+r.animationSpeed+" linear","-o-transition":"-o-transform "+r.animationSpeed+" linear",transition:"transform "+r.animationSpeed+" linear"}).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){i.removeClass("ibg-entering")})}).mousemove(function(e){if(!i.hasClass("ibg-entering")&&!i.hasClass("exiting")){var t=e.pageX||e.clientX,n=e.pageY||e.clientY,t=t-i.offset().left-o/2,n=n-i.offset().top-s/2,f=a*t*-1,l=u*n*-1;i.find("> .ibg-bg").css({"-webkit-transform":"matrix("+r.scale+",0,0,"+r.scale+","+f+","+l+")","-moz-transform":"matrix("+r.scale+",0,0,"+r.scale+","+f+","+l+")","-o-transform":"matrix("+r.scale+",0,0,"+r.scale+","+f+","+l+")",transform:"matrix("+r.scale+",0,0,"+r.scale+","+f+","+l+")","-webkit-transition":"none","-moz-transition":"none","-o-transition":"none",transition:"none"})}}).mouseleave(function(e){if(r.scale!=1)i.addClass("ibg-exiting");i.addClass("ibg-exiting").find("> .ibg-bg").css({"-webkit-transform":"matrix(1,0,0,1,0,0)","-moz-transform":"matrix(1,0,0,1,0,0)","-o-transform":"matrix(1,0,0,1,0,0)",transform:"matrix(1,0,0,1,0,0)","-webkit-transition":"-webkit-transform "+r.animationSpeed+" linear","-moz-transition":"-moz-transform "+r.animationSpeed+" linear","-o-transition":"-o-transform "+r.animationSpeed+" linear",transition:"transform "+r.animationSpeed+" linear"}).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){i.removeClass("ibg-exiting")})})}})}}(window.jQuery)


/* okvideo by okfocus ~ v2.3.2 ~ https://github.com/okfocus/okvideo */
function vimeoPlayerReady(){options=jQuery(window).data("okoptions");var a=jQuery("#okplayer")[0];player=$f(a),window.setTimeout(function(){jQuery("#okplayer").css("visibility","visible")},2e3),player.addEvent("ready",function(){OKEvents.v.onReady(),OKEvents.utils.isMobile()?OKEvents.v.onPlay():(player.addEvent("play",OKEvents.v.onPlay),player.addEvent("pause",OKEvents.v.onPause),player.addEvent("finish",OKEvents.v.onFinish)),player.api("play")})}function onYouTubePlayerAPIReady(){options=jQuery(window).data("okoptions"),player=new YT.Player("okplayer",{videoId:options.video?options.video.id:null,playerVars:{autohide:1,autoplay:0,disablekb:options.keyControls,cc_load_policy:options.captions,controls:options.controls,enablejsapi:1,fs:0,modestbranding:1,origin:window.location.origin||window.location.protocol+"//"+window.location.hostname,iv_load_policy:options.annotations,loop:options.loop,showinfo:0,rel:0,wmode:"opaque",hd:options.hd},events:{onReady:OKEvents.yt.ready,onStateChange:OKEvents.yt.onStateChange,onError:OKEvents.yt.error}})}var player,OKEvents,options;!function(a){"use strict";var b="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D";a.okvideo=function(c){"object"!=typeof c&&(c={video:c});var d=this;d.init=function(){d.options=a.extend({},a.okvideo.options,c),null===d.options.video&&(d.options.video=d.options.source),d.setOptions();var e=d.options.target||a("body"),f=e[0]==a("body")[0]?"fixed":"absolute";e.css({position:"relative"});var g=3===d.options.controls?-999:"auto",h='<div id="okplayer-mask" style="position:'+f+';left:0;top:0;overflow:hidden;z-index:-998;height:100%;width:100%;"></div>';OKEvents.utils.isMobile()?e.append('<div id="okplayer" style="position:'+f+";left:0;top:0;overflow:hidden;z-index:"+g+';height:100%;width:100%;"></div>'):(3===d.options.controls&&e.append(h),1===d.options.adproof?e.append('<div id="okplayer" style="position:'+f+";left:-10%;top:-10%;overflow:hidden;z-index:"+g+';height:120%;width:120%;"></div>'):e.append('<div id="okplayer" style="position:'+f+";left:0;top:0;overflow:hidden;z-index:"+g+';height:100%;width:100%;"></div>')),a("#okplayer-mask").css("background-image","url("+b+")"),null===d.options.playlist.list?"youtube"===d.options.video.provider?d.loadYouTubeAPI():"vimeo"===d.options.video.provider&&(d.options.volume/=100,d.loadVimeoAPI()):d.loadYouTubeAPI()},d.setOptions=function(){for(var b in this.options)this.options[b]===!0&&(this.options[b]=1),this.options[b]===!1&&(this.options[b]=3);null===d.options.playlist.list&&(d.options.video=d.determineProvider()),a(window).data("okoptions",d.options)},d.loadYouTubeAPI=function(){d.insertJS("//www.youtube.com/player_api")},d.loadYouTubePlaylist=function(){player.loadPlaylist(d.options.playlist.list,d.options.playlist.index,d.options.playlist.startSeconds,d.options.playlist.suggestedQuality)},d.loadVimeoAPI=function(){a("#okplayer").replaceWith(function(){return'<iframe src="//player.vimeo.com/video/'+d.options.video.id+"?api=1&title=0&byline=0&portrait=0&playbar=0&loop="+d.options.loop+"&autoplay="+(1===d.options.autoplay?1:0)+'&player_id=okplayer" frameborder="0" style="'+a(this).attr("style")+'visibility:hidden;background-color:black;" id="'+a(this).attr("id")+'"></iframe>'}),d.insertJS("https://f.vimeocdn.com/js/froogaloop2.min.js",function(){vimeoPlayerReady()})},d.insertJS=function(a,b){var c=document.createElement("script");b&&(c.readyState?c.onreadystatechange=function(){("loaded"===c.readyState||"complete"===c.readyState)&&(c.onreadystatechange=null,b())}:c.onload=function(){b()}),c.src=a;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)},d.determineProvider=function(){var a=document.createElement("a");if(a.href=d.options.video,/youtube.com/.test(d.options.video))return{provider:"youtube",id:a.href.slice(a.href.indexOf("v=")+2).toString()};if(/vimeo.com/.test(d.options.video))return{provider:"vimeo",id:a.href.split("/")[3].toString()};if(/[-A-Za-z0-9_]+/.test(d.options.video)){var b=new String(d.options.video.match(/[-A-Za-z0-9_]+/));if(11==b.length)return{provider:"youtube",id:b.toString()};for(var c=0;c<d.options.video.length;c++)if("number"!=typeof parseInt(d.options.video[c]))throw"not vimeo but thought it was for a sec";return{provider:"vimeo",id:d.options.video}}throw"OKVideo: Invalid video source"},d.init()},a.okvideo.options={source:null,video:null,playlist:{list:null,index:0,startSeconds:0,suggestedQuality:"default"},disableKeyControl:1,captions:0,loop:1,hd:1,volume:0,adproof:!1,unstarted:null,onFinished:null,onReady:null,onPlay:null,onPause:null,buffering:null,controls:!1,autoplay:!0,annotations:!0,cued:null},a.fn.okvideo=function(b){return b.target=this,this.each(function(){new a.okvideo(b)})}}(jQuery),OKEvents={yt:{ready:function(a){a.target.setVolume(options.volume),1===options.autoplay&&(options.playlist.list?player.loadPlaylist(options.playlist.list,options.playlist.index,options.playlist.startSeconds,options.playlist.suggestedQuality):a.target.playVideo()),OKEvents.utils.isFunction(options.onReady)&&options.onReady()},onStateChange:function(a){switch(a.data){case-1:OKEvents.utils.isFunction(options.unstarted)&&options.unstarted();break;case 0:OKEvents.utils.isFunction(options.onFinished)&&options.onFinished(),options.loop&&a.target.playVideo();break;case 1:OKEvents.utils.isFunction(options.onPlay)&&options.onPlay();break;case 2:OKEvents.utils.isFunction(options.onPause)&&options.onPause();break;case 3:OKEvents.utils.isFunction(options.buffering)&&options.buffering();break;case 5:OKEvents.utils.isFunction(options.cued)&&options.cued();break;default:throw"OKVideo: received invalid data from YT player."}},error:function(a){throw a}},v:{onReady:function(){OKEvents.utils.isFunction(options.onReady)&&options.onReady()},onPlay:function(){OKEvents.utils.isMobile()||player.api("setVolume",options.volume),OKEvents.utils.isFunction(options.onPlay)&&options.onPlay()},onPause:function(){OKEvents.utils.isFunction(options.onPause)&&options.onPause()},onFinish:function(){OKEvents.utils.isFunction(options.onFinish)&&options.onFinish()}},utils:{isFunction:function(a){return"function"==typeof a?!0:!1},isMobile:function(){return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)?!0:!1}}};







/* Youtube background player */

function onYouTubePlayerAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}var ytp=ytp||{};!function(jQuery,ytp){var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.fn.CSSAnimate=function(a,b,c,d,e){function f(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function g(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}return jQuery.support.CSStransition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}(),this.each(function(){var h=this,i=jQuery(this);h.id=h.id||"CSSA_"+(new Date).getTime();var j=j||{type:"noEvent"};if(h.CSSAIsRunning&&h.eventType==j.type)h.CSSqueue=function(){i.CSSAnimate(a,b,c,d,e)};else if(h.CSSqueue=null,h.eventType=j.type,0!==i.length&&a){if(h.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var k in jQuery.fx.speeds){if(b==k){b=jQuery.fx.speeds[k];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),jQuery.support.CSStransition){j={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},j[d]&&(d=j[d]);var l="",m="transitionEnd";jQuery.browser.webkit?(l="-webkit-",m="webkitTransitionEnd"):jQuery.browser.mozilla?(l="-moz-",m="transitionend"):jQuery.browser.opera?(l="-o-",m="otransitionend"):jQuery.browser.msie&&(l="-ms-",m="msTransitionEnd"),j=[];for(n in a)k=n,"transform"===k&&(k=l+"transform",a[k]=a[n],delete a[n]),"filter"===k&&(k=l+"filter",a[k]=a[n],delete a[n]),("transform-origin"===k||"origin"===k)&&(k=l+"transform-origin",a[k]=a[n],delete a[n]),"x"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateX("+g(a[n],"px")+")",delete a[n]),"y"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateY("+g(a[n],"px")+")",delete a[n]),"z"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateZ("+g(a[n],"px")+")",delete a[n]),"rotate"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotate("+g(a[n],"deg")+")",delete a[n]),"rotateX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateX("+g(a[n],"deg")+")",delete a[n]),"rotateY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateY("+g(a[n],"deg")+")",delete a[n]),"rotateZ"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateZ("+g(a[n],"deg")+")",delete a[n]),"scale"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scale("+g(a[n],"")+")",delete a[n]),"scaleX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleX("+g(a[n],"")+")",delete a[n]),"scaleY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleY("+g(a[n],"")+")",delete a[n]),"scaleZ"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleZ("+g(a[n],"")+")",delete a[n]),"skew"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skew("+g(a[n],"deg")+")",delete a[n]),"skewX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skewX("+g(a[n],"deg")+")",delete a[n]),"skewY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skewY("+g(a[n],"deg")+")",delete a[n]),"perspective"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" perspective("+g(a[n],"px")+")",delete a[n]),0>j.indexOf(k)&&j.push(f(k));var n=j.join(","),o=function(){i.off(m+"."+h.id),clearTimeout(h.timeout),i.css(l+"transition",""),"function"==typeof e&&e(i),h.called=!0,h.CSSAIsRunning=!1,"function"==typeof h.CSSqueue&&(h.CSSqueue(),h.CSSqueue=null)},p={};jQuery.extend(p,a),p[l+"transition-property"]=n,p[l+"transition-duration"]=b+"ms",p[l+"transition-delay"]=c+"ms",p[l+"transition-style"]="preserve-3d",p[l+"transition-timing-function"]=d,setTimeout(function(){i.one(m+"."+h.id,o),i.css(p)},1),h.timeout=setTimeout(function(){i.called||!e?(i.called=!1,h.CSSAIsRunning=!1):(i.css(l+"transition",""),e(i),h.CSSAIsRunning=!1,"function"==typeof h.CSSqueue&&(h.CSSqueue(),h.CSSqueue=null))},b+c+100)}else{for(var n in a)"transform"===n&&delete a[n],"filter"===n&&delete a[n],"transform-origin"===n&&delete a[n],"auto"===a[n]&&delete a[n];e&&"string"!=typeof e||(e="linear"),i.animate(a,b,e)}}})};var getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.8.1",author:"Matteo Bicocchi",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:100,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnClick:!1,stopMovieOnBlur:!0,realfullscreen:!0,gaTrack:!0,optimizeDisplay:!0,onReady:function(){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0==property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe()),YTPlayer.canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.opt.containment="self"==YTPlayer.opt.containment?jQuery(this):jQuery(YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));if(YTPlayer.canPlayOnMobile=isPlayer&&0==jQuery(this).children().length,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide(),jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile)return $YTPlayer.remove(),void 0;if(YTPlayer.opt.addRaster){var classN="dot"==YTPlayer.opt.addRaster?"raster-dot":"raster";overlay.addClass(YTPlayer.isRetina?classN+" retina":classN)}else overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster-.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0,webkitTransform:"translateZ(0)"}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.browser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){$YTPlayer.find(".mb_YTPBar").addClass("visible")}).on("mouseleave",function(){$YTPlayer.find(".mb_YTPBar").removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/player_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head title").after(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&YTPlayer.opt.stopMovieOnClick&&jQuery(document).off("mousedown.ytplayer").on("mousedown.ytplayer",function(a){var b=jQuery(a.target);(b.is("a")||b.parents().is("a"))&&$YTPlayer.pauseYTP()}),YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromFeed(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){return YTPlayer.isInit?void 0:(YTPlayer.isInit=!0,jQuery.browser.mobile&&YTPlayer.canPlayOnMobile?(new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",videoId:YTPlayer.videoID,events:{onReady:function(a){YTPlayer.player=a.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:YTPlayer.opt.opacity}),$YTPlayer.optimizeDisplay()},onStateChange:function(){}}}),void 0):(new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){if(YTPlayer.player=a.target,!YTPlayer.isReady){YTPlayer.isReady=!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),YTPlayer.opt.showControls&&jQuery(YTPlayer).buildYTPControls();var b=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;YTPlayer.player.setVolume(0),jQuery(YTPlayer).muteYTPVolume(),jQuery.mbYTPlayer.checkForState(YTPlayer),YTPlayer.checkForStartAt=setInterval(function(){if(!jQuery.contains(document,YTPlayer))return jQuery(YTPlayer).playerDestroy(),void 0;var a=YTPlayer.player.getVideoLoadedFraction()>b/YTPlayer.player.getDuration();YTPlayer.player.getDuration()>0&&YTPlayer.player.getCurrentTime()>=b&&a?(clearInterval(YTPlayer.checkForStartAt),YTPlayer.player.setVolume(0),jQuery(YTPlayer).muteYTPVolume(),"function"==typeof YTPlayer.opt.onReady&&YTPlayer.opt.onReady(YTPlayer),YTPlayer.opt.mute||jQuery(YTPlayer).unmuteYTP(),YTPlayer.player.pauseVideo(),setTimeout(function(){YTPlayer.canTrigger=!0,YTPlayer.opt.autoPlay?($YTPlayer.playYTP(),$YTPlayer.css("background-image","none"),YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},2e3)):YTPlayer.player.pauseVideo()},100)):(YTPlayer.player.playVideo(),YTPlayer.player.seekTo(b,!0));var c=jQuery.Event("YTPReady");jQuery(YTPlayer).trigger(c)},1e3);var c=jQuery.Event("YTPUnstarted");c.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(c)}},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.state!=state){YTPlayer.state=state;var controls=jQuery("#controlBar_"+YTPlayer.id),eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPStart",controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.videoTitle||YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.videoTitle||YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:jQuery.browser.chrome||YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",jQuery.browser.chrome||YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play),setTimeout(function(){controls.show(1e3)},2e3);break;case 5:eventType="YTPCued"}var YTPevent=jQuery.Event(eventType);YTPevent.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPevent)}}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}}),void 0))}))})}})},getDataFromFeed:function(a){jQuery.browser.msie&&jQuery.browser.version<=9?("auto"==a.opt.ratio?a.opt.ratio="16/9":a.opt.ratio,a.hasData||(a.hasData=!0,setTimeout(function(){jQuery(a).trigger("YTPChanged")},100))):(jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//gdata.youtube.com/feeds/api/videos/"+a.videoID+"?v=2&alt=jsonc",function(b){a.dataReceived=!0,a.videoData=b.data,jQuery(a).trigger("YTPChanged");var e=jQuery.Event("YTPData");e.prop={};for(var f in a.videoData)e.prop[f]=a.videoData[f];if(jQuery(a).trigger(e),a.videoTitle=a.videoData.title,"auto"==a.opt.ratio&&(a.opt.ratio=a.videoData.aspectRatio&&"widescreen"===a.videoData.aspectRatio?"16/9":"4/3"),!a.hasData&&(a.hasData=!0,a.isPlayer)){var g=a.videoData.thumbnail.hqDefault;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+g+") center center",backgroundSize:"cover"})}}),setTimeout(function(){a.dataReceived||a.hasData||(a.hasData=!0,jQuery(a).trigger("YTPChanged"))},1500))},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);jQuery.browser.chrome||b.player.setPlaybackQuality(a)},YTPlaylist:function(a,b,c){var d=this.get(0);d.isPlayList=!0,b&&(a=jQuery.shuffle(a)),d.videoID||(d.videos=a,d.videoCounter=0,d.videoLength=a.length,jQuery(d).data("property",a[0]),jQuery(d).mb_YTPlayer()),"function"==typeof c&&jQuery(d).on("YTPChanged",function(){c(d)}),jQuery(d).on("YTPEnd",function(){jQuery(d).playNext()})},playNext:function(){var a=this.get(0);a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a.playerEl).css({opacity:0}),jQuery(a).changeMovie(a.videos[a.videoCounter])},playPrev:function(){var a=this.get(0);a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a.playerEl).css({opacity:0}),jQuery(a).changeMovie(a.videos[a.videoCounter])},changeMovie:function(a){var b=this.get(0);b.opt.startAt=0,b.opt.stopAt=0,b.opt.mute=!0,a&&jQuery.extend(b.opt,a),b.videoID=getYTPVideoID(b.opt.videoURL).videoID,jQuery(b).pauseYTP();var c=jQuery.browser.msie?1e3:0;jQuery(b.playerEl).CSSAnimate({opacity:0},c),setTimeout(function(){var a=jQuery.browser.chrome?"default":b.opt.quality;jQuery(b).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+b.videoID),1,a),jQuery(b).playYTP(),jQuery(b).one("YTPStart",function(){b.wrapper.CSSAnimate({opacity:b.isAlone?1:b.opt.opacity},1e3),jQuery(b.playerEl).CSSAnimate({opacity:1},c),b.opt.startAt&&b.player.seekTo(b.opt.startAt),jQuery.mbYTPlayer.checkForState(b),b.opt.autoPlay||jQuery(b).pauseYTP()}),b.opt.mute?jQuery(b).muteYTPVolume():jQuery(b).unmuteYTP()},c),b.opt.addRaster?b.overlay.addClass(b.isRetina?"raster retina":"raster"):b.overlay.removeClass("raster").removeClass("retina"),jQuery("#controlBar_"+b.id).remove(),b.opt.showControls&&jQuery(b).buildYTPControls(),jQuery.mbYTPlayer.getDataFromFeed(b),jQuery(b).optimizeDisplay()},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null;var b=a.wrapper;b.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState)},fullscreen:function(real){function RunPrefixMethod(a,b){for(var e,f,c=["webkit","moz","ms","o",""],d=0;d<c.length&&!a[e];){if(e=b,""==c[d]&&(e=e.substr(0,1).toLowerCase()+e.substr(1)),e=c[d]+e,f=typeof a[e],"undefined"!=f)return c=[c[d]],"function"==f?a[e]():a[e];d++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).setVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}YTPlayer.isAlone?(real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0)},playYTP:function(){var a=this.get(0);if("undefined"!=typeof a.player){var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");c.html(jQuery.mbYTPlayer.controls.pause),a.player.playVideo(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2e3),jQuery(a).on("YTPStart",function(){jQuery(a).css("background-image","none")})}},toggleLoops:function(){var a=this.get(0),b=a.opt;1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1)},stopYTP:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo()},pauseYTP:function(){var a=this.get(0);a.opt;var c=jQuery("#controlBar_"+a.id),d=c.find(".mb_YTPPlaypause");d.html(jQuery.mbYTPlayer.controls.play),a.player.pauseVideo()},seekToYTP:function(a){var b=this.get(0);b.player.seekTo(a,!0)},setYTPVolume:function(a){var b=this.get(0);a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.player.getVolume()==a?jQuery(b).muteYTPVolume():b.opt.vol=a:jQuery(b).unmuteYTP(),b.player.setVolume(b.opt.vol)},muteYTP:function(){var a=this.get(0);a.player.mute(),a.player.setVolume(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),jQuery(a).trigger("YTPMuted")},unmuteYTP:function(){var a=this.get(0);a.player.unMute(),a.player.setVolume(a.opt.vol);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),jQuery(a).trigger("YTPUnmuted")},manageYTPProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildYTPControls:function(){var YTPlayer=this.get(0),data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){var controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();YTPlayer.controlBar=controlBar;var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).pauseYTP():jQuery(YTPlayer).playYTP()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).unmuteYTP():jQuery(YTPlayer).muteYTP()}),idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).fullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer.goto=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer.goto),!0),controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(controlBar):(controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(controlBar))}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?10:1e3;clearInterval(YTPlayer.getState),YTPlayer.getState=setInterval(function(){if(!jQuery.contains(document,YTPlayer))return jQuery(YTPlayer).playerDestroy(),void 0;var prog=jQuery(YTPlayer).manageYTPProgress(),$YTPlayer=jQuery(YTPlayer),controlBar=jQuery("#controlBar_"+YTPlayer.id),data=YTPlayer.opt,startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1,stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.player.time!=prog.currentTime){var YTPevent=jQuery.Event("YTPTime");YTPevent.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPevent)}if(YTPlayer.player.time=prog.currentTime,0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.playYTP()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.pauseYTP())),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-3)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},2e3),YTPlayer.isPlayList){clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPEnd),void 0}data.loop?YTPlayer.player.seekTo(startAt,!0):(YTPlayer.player.pauseVideo(),YTPlayer.wrapper.CSSAnimate({opacity:0},1e3,function(){var a=jQuery.Event("YTPEnd");if(a.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),!YTPlayer.isBackground){var b=YTPlayer.videoData.thumbnail.hqDefault;jQuery(YTPlayer).css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"})}}))}},interval)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)}},jQuery.fn.toggleVolume=function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).unmuteYTP(),!0):(jQuery(a).muteYTP(),!1)},jQuery.fn.optimizeDisplay=function(){var a=this.get(0),b=a.opt,c=jQuery(a.playerEl),d={},e=a.wrapper;d.width=e.outerWidth(),d.height=e.outerHeight();var f=24,g=100,h={};b.optimizeDisplay?(h.width=d.width+d.width*f/100,h.height="16/9"==b.ratio?Math.ceil(9*d.width/16):Math.ceil(3*d.width/4),h.marginTop=-((h.height-d.height)/2),h.marginLeft=-(d.width*(f/2)/100),h.height<d.height&&(h.height=d.height+d.height*f/100,h.width="16/9"==b.ratio?Math.floor(16*d.height/9):Math.floor(4*d.height/3),h.marginTop=-(d.height*(f/2)/100),h.marginLeft=-((h.width-d.width)/2)),h.width+=g,h.height+=g,h.marginTop-=g/2,h.marginLeft-=g/2):(h.width="100%",h.height="100%",h.marginTop=0,h.marginLeft-=0),c.css({width:h.width,height:h.height,marginTop:h.marginTop,marginLeft:h.marginLeft})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.YTPlaylist,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildYTPControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.playYTP,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stopYTP,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pauseYTP,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekToYTP,jQuery.fn.muteYTP=jQuery.mbYTPlayer.muteYTP,jQuery.fn.unmuteYTP=jQuery.mbYTPlayer.unmuteYTP,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setYTPVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageYTPProgress,jQuery.fn.getDataFromFeed=jQuery.mbYTPlayer.getVideoData,jQuery.fn.mb_YTPlayer=jQuery.fn.YTPlayer,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.muteYTP,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmuteYTP}(jQuery,ytp);

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );


/* skipper jquery */
(function(){var e=function(){function e(e,t){var r=this;r.settings=$.extend($.fn.skippr.defaults,t),r.$element=$(e),r.$parent=r.$element.parent(),r.$photos=r.$element.children(),r.count=r.$photos.length,r.countString=String(r.count),r.init()}return e.prototype.init=function(){var e=this;e.setup(),e.navClick(),e.arrowClick(),e.resize(),e.keyPress(),1==e.settings.autoPlay&&(e.autoPlay(),e.autoPlayPause())},e.prototype.setup=function(){var e=this;if("img"==e.settings.childrenElementType){var t=[];for(i=0;i<e.count;i++){var r=e.$photos.eq(i).attr("src"),a='<div style="background-image: url('+r+')"></div>';t.push(a)}t.join(""),e.$element.append(t),e.$element.find("img").remove(),e.$photos=e.$element.children()}"fade"==e.settings.transition&&e.$photos.not(":first-child").hide(),"slide"==e.settings.transition&&e.setupSlider(),e.$photos.eq(0).addClass("visible"),e.$element.addClass("skippr"),e.navBuild(),1==e.settings.arrows&&e.arrowBuild()},e.prototype.resize=function(){var e=this;"slide"==e.settings.transition&&$(window).resize(function(){var t=e.$element.find(".skippr-nav-element-active").attr("data-slider");e.setupSlider(),e.$photos.each(function(){var r,a=parseFloat($(this).css("left")),n=e.$parent.width();t>1&&(r=a-n*(t-1)),$(this).css("left",r+"px")}),e.settings.autoPlay===!0&&(clearInterval(timer),e.autoPlay())})},e.prototype.arrowBuild=function(){var e,t,r=this,a=r.count,n="";1==r.settings.hidePrevious&&(n='style="display:none;"'),e='<nav class="skippr-nav-item skippr-arrow skippr-previous" data-slider="'+a+'" '+n+"></nav>",t='<nav class="skippr-nav-item skippr-arrow skippr-next" data-slider="2"></nav>',r.$element.append(e+t)},e.prototype.navBuild=function(){var e,t=this,r=[];if("block"==t.settings.navType)var a="skippr-nav-element-block";else if("bubble"==t.settings.navType)var a="skippr-nav-element-bubble";for(var n=0;n<t.count;n++){var o;o=0==n?"<div class='skippr-nav-element skippr-nav-item "+a+" skippr-nav-element-active' data-slider='"+(n+1)+"'></div>":"<div class='skippr-nav-element skippr-nav-item "+a+"' data-slider='"+(n+1)+"'></div>",r.push(o)}r=r.join(""),e='<nav class="skippr-nav-container">'+r+"</nav>",t.$element.append(e)},e.prototype.arrowClick=function(){var e=this,t=e.$element.find(".skippr-arrow");t.click(function(){$(this).hasClass("disabled")||e.change($(this))})},e.prototype.navClick=function(){var e=this,t=e.$element.find(".skippr-nav-element");t.click(function(){$(this).hasClass("disabled")||e.change($(this))})},e.prototype.change=function(e){{var t=this,r=e.attr("data-slider"),a=t.$element.find(".skippr-nav-item"),n=t.$element.find(".skippr-nav-element-active").attr("data-slider");t.$element.find(".skippr-next").attr("data-slider"),t.$element.find(".skippr-previous").attr("data-slider")}if(r!=n){"fade"==t.settings.transition&&(t.$photos.eq(r-1).css("z-index","10").siblings("div").css("z-index","9"),t.$photos.eq(r-1).fadeIn(t.settings.speed,function(){t.$element.find(".visible").fadeOut("fast",function(){$(this).removeClass("visible"),t.$photos.eq(r-1).addClass("visible")})})),"slide"==t.settings.transition&&t.$photos.each(function(){var e,o=parseFloat($(this).css("left")),i=t.$parent.width();r>n&&(e=o-i*(r-n)),n>r&&(e=o+i*(n-r)),a.addClass("disabled"),$(this).velocity({left:e+"px"},t.settings.speed,t.settings.easing,function(){a.removeClass("disabled")}),t.logs("slides sliding")}),t.$element.find(".skippr-nav-element").eq(r-1).addClass("skippr-nav-element-active").siblings().removeClass("skippr-nav-element-active");var o=Number(r)+1,i=Number(r)-1;r==t.count?t.$element.find(".skippr-next").attr("data-slider","1"):t.$element.find(".skippr-next").attr("data-slider",o),1==r?t.$element.find(".skippr-previous").attr("data-slider",t.countString):t.$element.find(".skippr-previous").attr("data-slider",i),1==t.settings.hidePrevious&&t.hidePrevious()}},e.prototype.autoPlay=function(){var e=this;timer=setInterval(function(){var t=e.$element.find(".skippr-nav-element-active"),r=t.attr("data-slider");if(r==e.count)var a=e.$element.find(".skippr-nav-element").eq(0);else var a=t.next();e.change(a)},e.settings.autoPlayDuration)},e.prototype.autoPlayPause=function(){var e=this;e.$parent.hover(function(){clearInterval(timer),e.logs("clearing timer on hover")},function(){e.autoPlay(),e.logs("resetting timer on un-hover")}),$(window).on("blur focus",function(t){var r=$(this).data("prevType");if(r!=t.type)switch(t.type){case"blur":clearInterval(timer),e.logs("clearing timer on window blur");break;case"focus":e.autoPlay(),e.logs("resetting timer on window focus")}$(this).data("prevType",t.type)})},e.prototype.setupSlider=function(){var e,t=this,r=t.$parent.width();for(t.$photos.css("position","absolute"),i=0;i<t.count;i++)e=r*i,t.$photos.eq(i).css("left",e)},e.prototype.keyPress=function(){var e=this;1==e.settings.keyboardOnAlways&&$(document).on("keydown",function(t){39==t.which&&e.$element.find(".skippr-next").trigger("click"),37==t.which&&e.$element.find(".skippr-previous").trigger("click")}),0==e.settings.keyboardOnAlways&&e.$parent.hover(function(){$(document).on("keydown",function(t){39==t.which&&e.$element.find(".skippr-next").trigger("click"),37==t.which&&e.$element.find(".skippr-previous").trigger("click")})},function(){$(document).off("keydown")})},e.prototype.hidePrevious=function(){var e=this;e.$element.find(".skippr-nav-element").eq(0).hasClass("skippr-nav-element-active")?e.$element.find(".skippr-previous").fadeOut():e.$element.find(".skippr-previous").fadeIn()},e.prototype.logs=function(e){var t=this;t.settings.logs===!0&&console.log(e)},e}();$.fn.skippr=function(t){var r;return(r=this.data("skippr"))?t===!0?r:("string"===$.type(t)&&r[t](),this):this.each(function(){return $(this).data("skippr",new e(this,t))})},$.fn.skippr.defaults={transition:"slide",speed:1e3,easing:"easeOutQuart",navType:"block",childrenElementType:"div",arrows:!0,autoPlay:!1,autoPlayDuration:5e3,keyboardOnAlways:!0,hidePrevious:!1,logs:!1}}).call(this),!function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return"[object Function]"===Object.prototype.toString.call(e)}function i(e){var t=Object.prototype.toString.call(e);return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)}function s(e){return e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e)}function l(e,t){var r=e;return"string"==typeof e?y.Easings[e]||(r=!1):r=m(e)&&2===e.length?P.apply(null,e.concat([t])):m(e)&&4===e.length?b.apply(null,e):!1,r===!1&&(r=y.Easings[y.defaults.easing]?y.defaults.easing:g),r}function u(e){if(e)for(var t=(new Date).getTime(),r=0,n=y.State.calls.length;n>r;r++)if(y.State.calls[r]){var o=y.State.calls[r],i=o[0],s=o[2],l=o[3];l||(l=y.State.calls[r][3]=t-16);for(var d=Math.min((t-l)/s.duration,1),g=0,f=i.length;f>g;g++){var m=i[g],b=m.element;if(v.data(b,p)){var P=!1;s.display&&"none"!==s.display&&x.setPropertyValue(b,"display",s.display);for(var w in m)if("element"!==w){var k,S=m[w],V="string"==typeof S.easing?y.Easings[S.easing]:S.easing;if(k=1===d?S.endValue:S.startValue+(S.endValue-S.startValue)*V(d),S.currentValue=k,x.Hooks.registered[w]){var C=x.Hooks.getRoot(w),$=v.data(b,p).rootPropertyValueCache[C];$&&(S.rootPropertyValue=$)}var T=x.setPropertyValue(b,w,S.currentValue+(0===parseFloat(k)?"":S.unitType),S.rootPropertyValue,S.scrollData);x.Hooks.registered[w]&&(v.data(b,p).rootPropertyValueCache[C]=x.Normalizations.registered[C]?x.Normalizations.registered[C]("extract",null,T[1]):T[1]),"transform"===T[0]&&(P=!0)}s.mobileHA&&v.data(b,p).transformCache.translate3d===a&&(v.data(b,p).transformCache.translate3d="(0px, 0px, 0px)",P=!0),P&&x.flushTransformCache(b)}}s.display&&"none"!==s.display&&(y.State.calls[r][2].display=!1),1===d&&c(r)}y.State.isTicking&&h(u)}function c(e){for(var t=y.State.calls[e][0],r=y.State.calls[e][1],n=y.State.calls[e][2],o=!1,i=0,s=t.length;s>i;i++){var l=t[i].element;if("none"!==n.display||n.loop||x.setPropertyValue(l,"display",n.display),(v.queue(l)[1]===a||!/\.velocityQueueEntryFlag/i.test(v.queue(l)[1]))&&v.data(l,p)){v.data(l,p).isAnimating=!1,v.data(l,p).rootPropertyValueCache={};var u,c=["transformPerspective","translateZ","rotateX","rotateY"],d=!1;for(var g in c)u=c[g],/^\(0[^.]/.test(v.data(l,p).transformCache[u])&&(d=!0,delete v.data(l,p).transformCache[u]);n.mobileHA&&(d=!0,delete v.data(l,p).transformCache.translate3d),d&&x.flushTransformCache(l)}if(i===s-1&&!n.loop&&n.complete){var f=r.jquery?r.get():r;n.complete.call(f,f)}n.queue!==!1&&v.dequeue(l,n.queue)}y.State.calls[e]=!1;for(var h=0,m=y.State.calls.length;m>h;h++)if(y.State.calls[h]!==!1){o=!0;break}o===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var p="velocity",d=400,g="swing",f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),h=t.requestAnimationFrame||function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},v=t.jQuery||e.Velocity&&e.Velocity.Utilities;if(!v)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(e.Velocity!==a&&!e.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(7>=f){if(t.jQuery)return void(t.jQuery.fn.velocity=t.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===f&&!t.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var y=e.Velocity=e.velocity=v.extend(e.Velocity||{},{State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:{},Sequences:{},Easings:{},defaults:{queue:"",duration:d,easing:g,complete:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},debug:!1});t.pageYOffset!==a?(y.State.scrollAnchor=t,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var b=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,n,o){return((e(n,o)*a+t(n,o))*a+r(n))*a}function n(a,n,o){return 3*e(n,o)*a*a+2*t(n,o)*a+r(n)}return function(e,t,r,o){function i(t){for(var o=t,i=0;8>i;++i){var s=n(o,e,r);if(0===s)return o;var l=a(o,e,r)-t;o-=l/s}return o}if(4!==arguments.length)return!1;for(var s=0;4>s;++s)if("number"!=typeof arguments[s]||isNaN(arguments[s])||!isFinite(arguments[s]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(n){return e===t&&r===o?n:a(i(n),t,o)}}}(),P=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,d=.016;for(e=parseFloat(e)||600,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*d):i=d;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();!function(){y.Easings.linear=function(e){return e},y.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},y.Easings.ease=b(.25,.1,.25,1),y.Easings["ease-in"]=b(.42,0,1,1),y.Easings["ease-out"]=b(0,0,.58,1),y.Easings["ease-in-out"]=b(.42,0,.58,1);var e={};v.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),v.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),v.each(e,function(e,t){y.Easings["easeIn"+e]=t,y.Easings["easeOut"+e]=function(e){return 1-t(1-e)},y.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}}),y.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}}();var x=y.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],borderTopColor:["Red Green Blue Alpha","255 255 255 1"],borderRightColor:["Red Green Blue Alpha","255 255 255 1"],borderBottomColor:["Red Green Blue Alpha","255 255 255 1"],borderLeftColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var e,t,r;if(f)for(e in x.Hooks.templates){t=x.Hooks.templates[e],r=t[0].split(" ");var a=t[1].match(x.RegEx.valueSplit);"Color"===r[0]&&(r.push(r.shift()),a.push(a.shift()),x.Hooks.templates[e]=[r.join(" "),a.join(" ")])}for(e in x.Hooks.templates){t=x.Hooks.templates[e],r=t[0].split(" ");for(var n in r){var o=e+r[n],i=n;x.Hooks.registered[o]=[e,i]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.Hooks.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=x.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(x.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){function e(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?"rgb("+(parseInt(t[1],16)+" "+parseInt(t[2],16)+" "+parseInt(t[3],16))+")":"rgb(0 0 0)"}var t=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];9>=f||y.State.isGingerbread||(t=t.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var r=0,n=t.length;n>r;r++)!function(){var e=t[r];x.Normalizations.registered[e]=function(t,r,n){switch(t){case"name":return"transform";case"extract":return v.data(r,p).transformCache[e]===a?/^scale/i.test(e)?1:0:v.data(r,p).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|\d)$/i.test(n);break;case"scal":case"scale":y.State.isAndroid&&v.data(r,p).transformCache[e]===a&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(v.data(r,p).transformCache[e]="("+n+")"),v.data(r,p).transformCache[e]}}}();for(var o=["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],r=0,i=o.length;i>r;r++)!function(){var t=o[r];x.Normalizations.registered[t]=function(r,n,o){switch(r){case"name":return t;case"extract":var i;if(x.RegEx.wrappedValueAlreadyExtracted.test(o))i=o;else{var s,l={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(o)?s=l[o]!==a?l[o]:l.black:/^#([A-f\d]{3}){1,2}$/i.test(o)?s=e(o):/^rgba?\(/i.test(o)||(s=l.black),i=(s||o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return 8>=f?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=f?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},prefixCheck:function(e){if(y.State.prefixMatches[e])return[y.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),"string"==typeof y.State.prefixElement.style[n])return y.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"}},getPropertyValue:function(e,r,n,o){function i(e,r){var n=0;if(8>=f)n=v.css(e,r);else{if(!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase())return e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase())return e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0)}var s;s=v.data(e,p)===a?t.getComputedStyle(e,null):v.data(e,p).computedStyle?v.data(e,p).computedStyle:v.data(e,p).computedStyle=t.getComputedStyle(e,null),f&&"borderColor"===r&&(r="borderTopColor"),n=9===f&&"filter"===r?s.getPropertyValue(r):s[r],(""===n||null===n)&&(n=e.style[r])}if("auto"===n&&/^(top|right|bottom|left)$/i.test(r)){var l=i(e,"position");("fixed"===l||"absolute"===l&&/top|left/i.test(r))&&(n=v(e).position()[r]+"px")}return n}var s;if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(l);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(u)[0])),x.Normalizations.registered[u]&&(n=x.Normalizations.registered[u]("extract",e,n)),s=x.Hooks.extractValue(l,n)}else if(x.Normalizations.registered[r]){var c,d;c=x.Normalizations.registered[r]("name",e),"transform"!==c&&(d=i(e,x.Names.prefixCheck(c)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),s=x.Normalizations.registered[r]("extract",e,d)}return/^[\d-]/.test(s)||(s=i(e,x.Names.prefixCheck(r)[0])),x.Values.isCSSNullValue(s)&&(s=0),y.debug>=2&&console.log("Get "+r+": "+s),s},setPropertyValue:function(e,r,a,n,o){var i=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),i="transform",a=v.data(e,p).transformCache[r];else{if(x.Hooks.registered[r]){var s=r,l=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,l),a=x.Hooks.injectValue(s,a,n),r=l}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),i=x.Names.prefixCheck(r)[0],8>=f)try{e.style[i]=a}catch(u){console.log("Error setting ["+i+"] to ["+a+"]")}else e.style[i]=a;y.debug>=2&&console.log("Set "+r+" ("+i+"): "+a)}return[i,a]},flushTransformCache:function(e){var t,r,a,n="";for(t in v.data(e,p).transformCache)r=v.data(e,p).transformCache[t],"transformPerspective"!==t?(9===f&&"rotateZ"===t&&(t="rotate"),n+=t+r+" "):a=r;a&&(n="perspective"+a+" "+n),x.setPropertyValue(e,"transform",n)}};x.Hooks.register(),x.Normalizations.register(),y.animate=function(){function e(){function e(){function e(e){var r=a,n=a,s=a;return m(e)?(r=e[0],!m(e[1])&&/^[\d-]/.test(e[1])||o(e[1])?s=e[1]:("string"==typeof e[1]||m(e[1]))&&(n=l(e[1],i.duration),e[2]&&(s=e[2]))):r=e,n=n||i.easing,o(r)&&(r=r.call(t,k,w)),o(s)&&(s=s.call(t,k,w)),[r||0,n,s]}function d(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function b(){var e={parent:t.parentNode,position:x.getPropertyValue(t,"position"),fontSize:x.getPropertyValue(t,"fontSize")},a=e.position===E.lastPosition&&e.parent===E.lastParent,n=e.fontSize===E.lastFontSize&&e.parent===E.lastParent;E.lastParent=e.parent,E.lastPosition=e.position,E.lastFontSize=e.fontSize,null===E.remToPxRatio&&(E.remToPxRatio=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16);var o={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},i={},s=10;if(i.remToPxRatio=E.remToPxRatio,f)var l=/^auto$/i.test(t.currentStyle.width),u=/^auto$/i.test(t.currentStyle.height);a&&n||(o.overflowX=x.getPropertyValue(t,"overflowX"),o.overflowY=x.getPropertyValue(t,"overflowY"),o.boxSizing=x.getPropertyValue(t,"boxSizing"),o.width=x.getPropertyValue(t,"width",null,!0),o.minWidth=x.getPropertyValue(t,"minWidth"),o.maxWidth=x.getPropertyValue(t,"maxWidth")||"none",o.height=x.getPropertyValue(t,"height",null,!0),o.minHeight=x.getPropertyValue(t,"minHeight"),o.maxHeight=x.getPropertyValue(t,"maxHeight")||"none",o.paddingLeft=x.getPropertyValue(t,"paddingLeft")),a?(i.percentToPxRatioWidth=E.lastPercentToPxWidth,i.percentToPxRatioHeight=E.lastPercentToPxHeight):(x.setPropertyValue(t,"overflowX","hidden"),x.setPropertyValue(t,"overflowY","hidden"),x.setPropertyValue(t,"boxSizing","content-box"),x.setPropertyValue(t,"width",s+"%"),x.setPropertyValue(t,"minWidth",s+"%"),x.setPropertyValue(t,"maxWidth",s+"%"),x.setPropertyValue(t,"height",s+"%"),x.setPropertyValue(t,"minHeight",s+"%"),x.setPropertyValue(t,"maxHeight",s+"%")),n?i.emToPxRatio=E.lastEmToPx:x.setPropertyValue(t,"paddingLeft",s+"em"),a||(i.percentToPxRatioWidth=E.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(t,"width",null,!0))||1)/s,i.percentToPxRatioHeight=E.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(t,"height",null,!0))||1)/s),n||(i.emToPxRatio=E.lastEmToPx=(parseFloat(x.getPropertyValue(t,"paddingLeft"))||1)/s);for(var c in o)null!==o[c]&&x.setPropertyValue(t,c,o[c]);return f?(l&&x.setPropertyValue(t,"width","auto"),u&&x.setPropertyValue(t,"height","auto")):(x.setPropertyValue(t,"height","auto"),o.height!==x.getPropertyValue(t,"height",null,!0)&&x.setPropertyValue(t,"height",o.height),x.setPropertyValue(t,"width","auto"),o.width!==x.getPropertyValue(t,"width",null,!0)&&x.setPropertyValue(t,"width",o.width)),y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),t),i}if(0===k&&h&&o(h.begin)){var P=c.jquery?c.get():c;h.begin.call(P,P)}if("scroll"===C){var S,V,$,T=/^x$/i.test(i.axis)?"Left":"Top",R=parseFloat(i.offset)||0;i.container?i.container.jquery||i.container.nodeType?(i.container=i.container[0]||i.container,S=i.container["scroll"+T],$=S+v(t).position()[T.toLowerCase()]+R):i.container=null:(S=y.State.scrollAnchor[y.State["scrollProperty"+T]],V=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===T?"Top":"Left")]],$=v(t).offset()[T.toLowerCase()]+R),s={scroll:{rootPropertyValue:!1,startValue:S,currentValue:S,endValue:$,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:T,alternateValue:V}},element:t}}else if("reverse"===C){if(!v.data(t,p).tweensContainer)return void v.dequeue(t,i.queue);"none"===v.data(t,p).opts.display&&(v.data(t,p).opts.display="block"),v.data(t,p).opts.loop=!1,v.data(t,p).opts.begin=null,v.data(t,p).opts.complete=null,h.easing||delete i.easing,h.duration||delete i.duration,i=v.extend({},v.data(t,p).opts,i);var A=v.extend(!0,{},v.data(t,p).tweensContainer);for(var z in A)if("element"!==z){var q=A[z].startValue;A[z].startValue=A[z].currentValue=A[z].endValue,A[z].endValue=q,h&&(A[z].easing=i.easing)}s=A}else if("start"===C){var A;v.data(t,p).tweensContainer&&v.data(t,p).isAnimating===!0&&(A=v.data(t,p).tweensContainer);for(var j in g){var F=e(g[j]),N=F[0],M=F[1],L=F[2];j=x.Names.camelCase(j);var B=x.Hooks.getRoot(j),O=!1;if(x.Names.prefixCheck(B)[1]!==!1||x.Normalizations.registered[B]!==a){i.display&&"none"!==i.display&&/opacity|filter/.test(j)&&!L&&0!==N&&(L=0),i._cacheValues&&A&&A[j]?(L===a&&(L=A[j].endValue+A[j].unitType),O=v.data(t,p).rootPropertyValueCache[B]):x.Hooks.registered[j]?L===a?(O=x.getPropertyValue(t,B),L=x.getPropertyValue(t,j,O)):O=x.Hooks.templates[B][1]:L===a&&(L=x.getPropertyValue(t,j));var I,W,X,Y;I=d(j,L),L=I[0],X=I[1],I=d(j,N),N=I[0].replace(/^([+-\/*])=/,function(e,t){return Y=t,""}),W=I[1],L=parseFloat(L)||0,N=parseFloat(N)||0;var Q;if("%"===W&&(/^(fontSize|lineHeight)$/.test(j)?(N/=100,W="em"):/^scale/.test(j)?(N/=100,W=""):/(Red|Green|Blue)$/i.test(j)&&(N=N/100*255,W="")),/[\/*]/.test(Y))W=X;else if(X!==W&&0!==L)if(0===N)W=X;else{Q=Q||b();var G=/margin|padding|left|right|width|text|word|letter/i.test(j)||/X$/.test(j)?"x":"y";switch(X){case"%":L*="x"===G?Q.percentToPxRatioWidth:Q.percentToPxRatioHeight;break;case"em":L*=Q.emToPxRatio;break;case"rem":L*=Q.remToPxRatio;break;case"px":}switch(W){case"%":L*=1/("x"===G?Q.percentToPxRatioWidth:Q.percentToPxRatioHeight);break;case"em":L*=1/Q.emToPxRatio;break;case"rem":L*=1/Q.remToPxRatio;break;case"px":}}switch(Y){case"+":N=L+N;break;case"-":N=L-N;break;case"*":N=L*N;break;case"/":N=L/N}s[j]={rootPropertyValue:O,startValue:L,currentValue:L,endValue:N,unitType:W,easing:M},y.debug&&console.log("tweensContainer ("+j+"): "+JSON.stringify(s[j]),t)}else y.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}s.element=t}s.element&&(H.push(s),v.data(t,p).tweensContainer=s,v.data(t,p).opts=i,v.data(t,p).isAnimating=!0,k===w-1?(y.State.calls.length>1e4&&(y.State.calls=n(y.State.calls)),y.State.calls.push([H,c,i]),y.State.isTicking===!1&&(y.State.isTicking=!0,u())):k++)}var t=this,i=v.extend({},y.defaults,h),s={};if("stop"===C)return v.queue(t,"string"==typeof h?h:"",[]),!0;switch(v.data(t,p)===a&&v.data(t,p,{isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),/^\d/.test(i.delay)&&i.queue!==!1&&v.queue(t,i.queue,function(e){y.velocityQueueEntryFlag=!0,setTimeout(e,parseFloat(i.delay))}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=d;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}i.easing=l(i.easing,i.duration),h&&h.complete&&!o(h.complete)&&(h.complete=null),i.display&&(i.display=i.display.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,i.queue===!1?i.delay?setTimeout(e,i.delay):e():v.queue(t,i.queue,function(t){y.velocityQueueEntryFlag=!0,e(t)}),""!==i.queue&&"fx"!==i.queue||"inprogress"===v.queue(t)[0]||v.dequeue(t)}var t,c,g,h,b=arguments[0]&&arguments[0].properties!==a,P=s(this);P?(c=this,t=0):(c=b?arguments[0].elements:arguments[0],c=s(c)?[].slice.call(c):c,t=1),b?(g=arguments[0].properties,h=arguments[0].options):(g=arguments[t],h=arguments[t+1]);var w=i(c)||m(c)?c.length:1,k=0;if("stop"!==g&&!v.isPlainObject(h)){var S=t+1;h={};for(var V=S;V<arguments.length;V++)!m(arguments[V])&&/^\d/.test(arguments[V])?h.duration=parseFloat(arguments[V]):"string"==typeof arguments[V]?h.easing=arguments[V]:!m(arguments[V])||2!==arguments[V].length&&4!==arguments[V].length?o(arguments[V])&&(h.complete=arguments[V]):h.easing=arguments[V]}var C;switch(g){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"stop":C="stop";break;default:if(!v.isPlainObject(g)||v.isEmptyObject(g)){if("string"==typeof g&&y.Sequences[g]){var $=c,T=h.duration;return h.backwards===!0&&(c=(c.jquery?[].slice.call(c):c).reverse()),v.each(c,function(e,t){parseFloat(h.stagger)&&(h.delay=parseFloat(h.stagger)*e),h.drag&&(h.duration=parseFloat(T)||(/^(callout|transition)/.test(g)?1e3:d),h.duration=Math.max(h.duration*(h.backwards?1-e/w:(e+1)/w),.75*h.duration,200)),y.Sequences[g].call(t,t,h||{},e,w)}),$}return console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."),c}C="start"}var E={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},H=[];if(P)c.each(e);else if(1===w&&c.nodeType)e.call(c);else for(var R in c)c[R].nodeType&&e.call(c[R]);var A,z=v.extend({},y.defaults,h);if(z.loop=parseInt(z.loop),A=2*z.loop-1,z.loop)for(var q=0;A>q;q++){var j={delay:z.delay};z.complete&&q===A-1&&(j.complete=z.complete),P?c.velocity("reverse",j):y.animate(c,"reverse",j)}return c};var w=t.jQuery||t.Zepto;w?(w.fn.velocity=y.animate,w.fn.velocity.defaults=y.defaults):"undefined"!=typeof define&&define.amd?define(function(){return y}):"undefined"!=typeof module&&module.exports&&(module.exports=y),v.each(["Down","Up"],function(e,t){y.Sequences["slide"+t]=function(e,r){var a=v.extend({},r),n={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},o=a.begin,i=a.complete,s=!1;a.display="Down"===t?a.display||"block":a.display||"none",a.begin=function(){function r(){e.style.display="block",n.height=y.CSS.getPropertyValue(e,"height"),e.style.height="auto",y.CSS.getPropertyValue(e,"height")===n.height&&(s=!0),y.CSS.setPropertyValue(e,"height",n.height+"px")}if("Down"===t){n.overflow=[y.CSS.getPropertyValue(e,"overflow"),0],n.overflowX=[y.CSS.getPropertyValue(e,"overflowX"),0],n.overflowY=[y.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in n)/^overflow/.test(a)||(n[a]=[y.CSS.getPropertyValue(e,a),0]);e.style.display="none"}else{r();for(var a in n)n[a]=[0,y.CSS.getPropertyValue(e,a)];e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}o&&o.call(e,e)},a.complete=function(e){var r="Down"===t?0:1;
s===!0?n.height[r]="auto":n.height[r]+="px";for(var a in n)e.style[a]=n[a][r];i&&i.call(e,e)},y.animate(e,n,a)}}),v.each(["In","Out"],function(e,t){y.Sequences["fade"+t]=function(e,r,a,n){var o=v.extend({},r),i={opacity:"In"===t?1:0};a!==n-1&&(o.complete=o.begin=null),null!==o.display&&(o.display="In"===t?y.CSS.Values.getDisplayType(e):"none"),y.animate(this,i,o)}})}(window.jQuery||window.Zepto||window,window,document);



/* scrollIt */

(function(e){"use strict";var t="ScrollIt",n="1.0.3";var r={upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};e.scrollIt=function(t){var n=e.extend(r,t),i=0,s=e("[data-scroll-index]:last").attr("data-scroll-index");var o=function(t){if(t<0||t>s)return;var r=e("[data-scroll-index="+t+"]").offset().top+n.topOffset+1;e("html,body").animate({scrollTop:r,easing:n.easing},n.scrollTime)};var u=function(t){var n=e(t.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||e(t.target).closest("[data-scroll-goto]").attr("data-scroll-goto");o(parseInt(n))};var a=function(t){var r=t.which;if(e("html,body").is(":animated")&&(r==n.upKey||r==n.downKey)){return false}if(r==n.upKey&&i>0){o(parseInt(i)-1);return false}else if(r==n.downKey&&i<s){o(parseInt(i)+1);return false}return true};var f=function(t){if(n.onPageChange&&t&&i!=t)n.onPageChange(t);i=t;e("[data-scroll-nav]").removeClass(n.activeClass);e("[data-scroll-nav="+t+"]").addClass(n.activeClass)};var l=function(){var t=e(window).scrollTop();var r=e("[data-scroll-index]").filter(function(r,i){return t>=e(i).offset().top+n.topOffset&&t<e(i).offset().top+n.topOffset+e(i).outerHeight()});var i=r.first().attr("data-scroll-index");f(i)};e(window).on("scroll",l).scroll();e(window).on("keydown",a);e("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(e){e.preventDefault();u(e)})}})(jQuery)



//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });




/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);



/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function(){function a(){}function b(a){return f.retinaImageSuffix+a}function c(a,c){if(this.path=a||"","undefined"!=typeof c&&null!==c)this.at_2x_path=c,this.perform_check=!1;else{if(void 0!==document.createElement){var d=document.createElement("a");d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href}else{var e=this.path.split("?");e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")}this.perform_check=!0}}function d(a){this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};e.Retina=a,a.configure=function(a){null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e);var b=a.onload||function(){};a.onload=function(){var a,c,e=document.getElementsByTagName("img"),f=[];for(a=0;a<e.length;a+=1)c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));b()}},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1};var g=/\.\w+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){var b,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){if(4!==b.readyState)return a(!1);if(b.status>=200&&b.status<=399){if(f.check_mime_type){var e=b.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return c.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){function b(){c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);var c=this;b()},a.isRetina()&&a.init(e)}();