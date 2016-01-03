/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 angular-file-upload v2.2.0
 https://github.com/nervgh/angular-file-upload
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["angular-file-upload"] = factory();
	else
		root["angular-file-upload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var CONFIG = _interopRequire(__webpack_require__(1));

	var options = _interopRequire(__webpack_require__(2));

	var serviceFileUploader = _interopRequire(__webpack_require__(3));

	var serviceFileLikeObject = _interopRequire(__webpack_require__(4));

	var serviceFileItem = _interopRequire(__webpack_require__(5));

	var serviceFileDirective = _interopRequire(__webpack_require__(6));

	var serviceFileSelect = _interopRequire(__webpack_require__(7));

	var serviceFileDrop = _interopRequire(__webpack_require__(8));

	var serviceFileOver = _interopRequire(__webpack_require__(9));

	var directiveFileSelect = _interopRequire(__webpack_require__(10));

	var directiveFileDrop = _interopRequire(__webpack_require__(11));

	var directiveFileOver = _interopRequire(__webpack_require__(12));

	angular.module(CONFIG.name, []).value("fileUploaderOptions", options).factory("FileUploader", serviceFileUploader).factory("FileLikeObject", serviceFileLikeObject).factory("FileItem", serviceFileItem).factory("FileDirective", serviceFileDirective).factory("FileSelect", serviceFileSelect).factory("FileDrop", serviceFileDrop).factory("FileOver", serviceFileOver).directive("nvFileSelect", directiveFileSelect).directive("nvFileDrop", directiveFileDrop).directive("nvFileOver", directiveFileOver).run(["FileUploader", "FileLikeObject", "FileItem", "FileDirective", "FileSelect", "FileDrop", "FileOver", function (FileUploader, FileLikeObject, FileItem, FileDirective, FileSelect, FileDrop, FileOver) {
	    // only for compatibility
	    FileUploader.FileLikeObject = FileLikeObject;
	    FileUploader.FileItem = FileItem;
	    FileUploader.FileDirective = FileDirective;
	    FileUploader.FileSelect = FileSelect;
	    FileUploader.FileDrop = FileDrop;
	    FileUploader.FileOver = FileOver;
	}]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"name": "angularFileUpload"
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    url: "/",
	    alias: "file",
	    headers: {},
	    queue: [],
	    progress: 0,
	    autoUpload: false,
	    removeAfterUpload: false,
	    method: "POST",
	    filters: [],
	    formData: [],
	    queueLimit: Number.MAX_VALUE,
	    withCredentials: false
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var CONFIG = _interopRequire(__webpack_require__(1));

	var copy = angular.copy;
	var extend = angular.extend;
	var forEach = angular.forEach;
	var isObject = angular.isObject;
	var isNumber = angular.isNumber;
	var isDefined = angular.isDefined;
	var isArray = angular.isArray;
	var element = angular.element;

	module.exports = function (fileUploaderOptions, $rootScope, $http, $window, FileLikeObject, FileItem) {
	    var File = $window.File;
	    var FormData = $window.FormData;

	    var FileUploader = (function () {
	        /**********************
	         * PUBLIC
	         **********************/
	        /**
	         * Creates an instance of FileUploader
	         * @param {Object} [options]
	         * @constructor
	         */

	        function FileUploader(options) {
	            _classCallCheck(this, FileUploader);

	            var settings = copy(fileUploaderOptions);

	            extend(this, settings, options, {
	                isUploading: false,
	                _nextIndex: 0,
	                _failFilterIndex: -1,
	                _directives: { select: [], drop: [], over: [] }
	            });

	            // add default filters
	            this.filters.unshift({ name: "queueLimit", fn: this._queueLimitFilter });
	            this.filters.unshift({ name: "folder", fn: this._folderFilter });
	        }

	        _createClass(FileUploader, {
	            addToQueue: {
	                /**
	                 * Adds items to the queue
	                 * @param {File|HTMLInputElement|Object|FileList|Array<Object>} files
	                 * @param {Object} [options]
	                 * @param {Array<Function>|String} filters
	                 */

	                value: function addToQueue(files, options, filters) {
	                    var _this = this;

	                    var list = this.isArrayLikeObject(files) ? files : [files];
	                    var arrayOfFilters = this._getFilters(filters);
	                    var count = this.queue.length;
	                    var addedFileItems = [];

	                    forEach(list, function (some /*{File|HTMLInputElement|Object}*/) {
	                        var temp = new FileLikeObject(some);

	                        if (_this._isValidFile(temp, arrayOfFilters, options)) {
	                            var fileItem = new FileItem(_this, some, options);
	                            addedFileItems.push(fileItem);
	                            _this.queue.push(fileItem);
	                            _this._onAfterAddingFile(fileItem);
	                        } else {
	                            var filter = arrayOfFilters[_this._failFilterIndex];
	                            _this._onWhenAddingFileFailed(temp, filter, options);
	                        }
	                    });

	                    if (this.queue.length !== count) {
	                        this._onAfterAddingAll(addedFileItems);
	                        this.progress = this._getTotalProgress();
	                    }

	                    this._render();
	                    if (this.autoUpload) this.uploadAll();
	                }
	            },
	            removeFromQueue: {
	                /**
	                 * Remove items from the queue. Remove last: index = -1
	                 * @param {FileItem|Number} value
	                 */

	                value: function removeFromQueue(value) {
	                    var index = this.getIndexOfItem(value);
	                    var item = this.queue[index];
	                    if (item.isUploading) item.cancel();
	                    this.queue.splice(index, 1);
	                    item._destroy();
	                    this.progress = this._getTotalProgress();
	                }
	            },
	            clearQueue: {
	                /**
	                 * Clears the queue
	                 */

	                value: function clearQueue() {
	                    while (this.queue.length) {
	                        this.queue[0].remove();
	                    }
	                    this.progress = 0;
	                }
	            },
	            uploadItem: {
	                /**
	                 * Uploads a item from the queue
	                 * @param {FileItem|Number} value
	                 */

	                value: function uploadItem(value) {
	                    var index = this.getIndexOfItem(value);
	                    var item = this.queue[index];
	                    var transport = this.isHTML5 ? "_xhrTransport" : "_iframeTransport";

	                    item._prepareToUploading();
	                    if (this.isUploading) {
	                        return;
	                    }this.isUploading = true;
	                    this[transport](item);
	                }
	            },
	            cancelItem: {
	                /**
	                 * Cancels uploading of item from the queue
	                 * @param {FileItem|Number} value
	                 */

	                value: function cancelItem(value) {
	                    var index = this.getIndexOfItem(value);
	                    var item = this.queue[index];
	                    var prop = this.isHTML5 ? "_xhr" : "_form";
	                    if (item && item.isUploading) item[prop].abort();
	                }
	            },
	            uploadAll: {
	                /**
	                 * Uploads all not uploaded items of queue
	                 */

	                value: function uploadAll() {
	                    var items = this.getNotUploadedItems().filter(function (item) {
	                        return !item.isUploading;
	                    });
	                    if (!items.length) {
	                        return;
	                    }forEach(items, function (item) {
	                        return item._prepareToUploading();
	                    });
	                    items[0].upload();
	                }
	            },
	            cancelAll: {
	                /**
	                 * Cancels all uploads
	                 */

	                value: function cancelAll() {
	                    var items = this.getNotUploadedItems();
	                    forEach(items, function (item) {
	                        return item.cancel();
	                    });
	                }
	            },
	            isFile: {
	                /**
	                 * Returns "true" if value an instance of File
	                 * @param {*} value
	                 * @returns {Boolean}
	                 * @private
	                 */

	                value: function isFile(value) {
	                    return this.constructor.isFile(value);
	                }
	            },
	            isFileLikeObject: {
	                /**
	                 * Returns "true" if value an instance of FileLikeObject
	                 * @param {*} value
	                 * @returns {Boolean}
	                 * @private
	                 */

	                value: function isFileLikeObject(value) {
	                    return this.constructor.isFileLikeObject(value);
	                }
	            },
	            isArrayLikeObject: {
	                /**
	                 * Returns "true" if value is array like object
	                 * @param {*} value
	                 * @returns {Boolean}
	                 */

	                value: function isArrayLikeObject(value) {
	                    return this.constructor.isArrayLikeObject(value);
	                }
	            },
	            getIndexOfItem: {
	                /**
	                 * Returns a index of item from the queue
	                 * @param {Item|Number} value
	                 * @returns {Number}
	                 */

	                value: function getIndexOfItem(value) {
	                    return isNumber(value) ? value : this.queue.indexOf(value);
	                }
	            },
	            getNotUploadedItems: {
	                /**
	                 * Returns not uploaded items
	                 * @returns {Array}
	                 */

	                value: function getNotUploadedItems() {
	                    return this.queue.filter(function (item) {
	                        return !item.isUploaded;
	                    });
	                }
	            },
	            getReadyItems: {
	                /**
	                 * Returns items ready for upload
	                 * @returns {Array}
	                 */

	                value: function getReadyItems() {
	                    return this.queue.filter(function (item) {
	                        return item.isReady && !item.isUploading;
	                    }).sort(function (item1, item2) {
	                        return item1.index - item2.index;
	                    });
	                }
	            },
	            destroy: {
	                /**
	                 * Destroys instance of FileUploader
	                 */

	                value: function destroy() {
	                    var _this = this;

	                    forEach(this._directives, function (key) {
	                        forEach(_this._directives[key], function (object) {
	                            object.destroy();
	                        });
	                    });
	                }
	            },
	            onAfterAddingAll: {
	                /**
	                 * Callback
	                 * @param {Array} fileItems
	                 */

	                value: function onAfterAddingAll(fileItems) {}
	            },
	            onAfterAddingFile: {
	                /**
	                 * Callback
	                 * @param {FileItem} fileItem
	                 */

	                value: function onAfterAddingFile(fileItem) {}
	            },
	            onWhenAddingFileFailed: {
	                /**
	                 * Callback
	                 * @param {File|Object} item
	                 * @param {Object} filter
	                 * @param {Object} options
	                 */

	                value: function onWhenAddingFileFailed(item, filter, options) {}
	            },
	            onBeforeUploadItem: {
	                /**
	                 * Callback
	                 * @param {FileItem} fileItem
	                 */

	                value: function onBeforeUploadItem(fileItem) {}
	            },
	            onProgressItem: {
	                /**
	                 * Callback
	                 * @param {FileItem} fileItem
	                 * @param {Number} progress
	                 */

	                value: function onProgressItem(fileItem, progress) {}
	            },
	            onProgressAll: {
	                /**
	                 * Callback
	                 * @param {Number} progress
	                 */

	                value: function onProgressAll(progress) {}
	            },
	            onSuccessItem: {
	                /**
	                 * Callback
	                 * @param {FileItem} item
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 */

	                value: function onSuccessItem(item, response, status, headers) {}
	            },
	            onErrorItem: {
	                /**
	                 * Callback
	                 * @param {FileItem} item
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 */

	                value: function onErrorItem(item, response, status, headers) {}
	            },
	            onCancelItem: {
	                /**
	                 * Callback
	                 * @param {FileItem} item
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 */

	                value: function onCancelItem(item, response, status, headers) {}
	            },
	            onCompleteItem: {
	                /**
	                 * Callback
	                 * @param {FileItem} item
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 */

	                value: function onCompleteItem(item, response, status, headers) {}
	            },
	            onCompleteAll: {
	                /**
	                 * Callback
	                 */

	                value: function onCompleteAll() {}
	            },
	            _getTotalProgress: {
	                /**********************
	                 * PRIVATE
	                 **********************/
	                /**
	                 * Returns the total progress
	                 * @param {Number} [value]
	                 * @returns {Number}
	                 * @private
	                 */

	                value: function _getTotalProgress(value) {
	                    if (this.removeAfterUpload) {
	                        return value || 0;
	                    }var notUploaded = this.getNotUploadedItems().length;
	                    var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
	                    var ratio = 100 / this.queue.length;
	                    var current = (value || 0) * ratio / 100;

	                    return Math.round(uploaded * ratio + current);
	                }
	            },
	            _getFilters: {
	                /**
	                 * Returns array of filters
	                 * @param {Array<Function>|String} filters
	                 * @returns {Array<Function>}
	                 * @private
	                 */

	                value: function _getFilters(filters) {
	                    if (!filters) {
	                        return this.filters;
	                    }if (isArray(filters)) {
	                        return filters;
	                    }var names = filters.match(/[^\s,]+/g);
	                    return this.filters.filter(function (filter) {
	                        return names.indexOf(filter.name) !== -1;
	                    });
	                }
	            },
	            _render: {
	                /**
	                 * Updates html
	                 * @private
	                 */

	                value: function _render() {
	                    if (!$rootScope.$$phase) $rootScope.$apply();
	                }
	            },
	            _folderFilter: {
	                /**
	                 * Returns "true" if item is a file (not folder)
	                 * @param {File|FileLikeObject} item
	                 * @returns {Boolean}
	                 * @private
	                 */

	                value: function _folderFilter(item) {
	                    return !!(item.size || item.type);
	                }
	            },
	            _queueLimitFilter: {
	                /**
	                 * Returns "true" if the limit has not been reached
	                 * @returns {Boolean}
	                 * @private
	                 */

	                value: function _queueLimitFilter() {
	                    return this.queue.length < this.queueLimit;
	                }
	            },
	            _isValidFile: {
	                /**
	                 * Returns "true" if file pass all filters
	                 * @param {File|Object} file
	                 * @param {Array<Function>} filters
	                 * @param {Object} options
	                 * @returns {Boolean}
	                 * @private
	                 */

	                value: function _isValidFile(file, filters, options) {
	                    var _this = this;

	                    this._failFilterIndex = -1;
	                    return !filters.length ? true : filters.every(function (filter) {
	                        _this._failFilterIndex++;
	                        return filter.fn.call(_this, file, options);
	                    });
	                }
	            },
	            _isSuccessCode: {
	                /**
	                 * Checks whether upload successful
	                 * @param {Number} status
	                 * @returns {Boolean}
	                 * @private
	                 */

	                value: function _isSuccessCode(status) {
	                    return status >= 200 && status < 300 || status === 304;
	                }
	            },
	            _transformResponse: {
	                /**
	                 * Transforms the server response
	                 * @param {*} response
	                 * @param {Object} headers
	                 * @returns {*}
	                 * @private
	                 */

	                value: function _transformResponse(response, headers) {
	                    var headersGetter = this._headersGetter(headers);
	                    forEach($http.defaults.transformResponse, function (transformFn) {
	                        response = transformFn(response, headersGetter);
	                    });
	                    return response;
	                }
	            },
	            _parseHeaders: {
	                /**
	                 * Parsed response headers
	                 * @param headers
	                 * @returns {Object}
	                 * @see https://github.com/angular/angular.js/blob/master/src/ng/http.js
	                 * @private
	                 */

	                value: function _parseHeaders(headers) {
	                    var parsed = {},
	                        key,
	                        val,
	                        i;

	                    if (!headers) {
	                        return parsed;
	                    }forEach(headers.split("\n"), function (line) {
	                        i = line.indexOf(":");
	                        key = line.slice(0, i).trim().toLowerCase();
	                        val = line.slice(i + 1).trim();

	                        if (key) {
	                            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
	                        }
	                    });

	                    return parsed;
	                }
	            },
	            _headersGetter: {
	                /**
	                 * Returns function that returns headers
	                 * @param {Object} parsedHeaders
	                 * @returns {Function}
	                 * @private
	                 */

	                value: function _headersGetter(parsedHeaders) {
	                    return function (name) {
	                        if (name) {
	                            return parsedHeaders[name.toLowerCase()] || null;
	                        }
	                        return parsedHeaders;
	                    };
	                }
	            },
	            _xhrTransport: {
	                /**
	                 * The XMLHttpRequest transport
	                 * @param {FileItem} item
	                 * @private
	                 */

	                value: function _xhrTransport(item) {
	                    var _this = this;

	                    var xhr = item._xhr = new XMLHttpRequest();
	                    var form = new FormData();

	                    this._onBeforeUploadItem(item);

	                    forEach(item.formData, function (obj) {
	                        forEach(obj, function (value, key) {
	                            form.append(key, value);
	                        });
	                    });

	                    if (typeof item._file.size != "number") {
	                        throw new TypeError("The file specified is no longer valid");
	                    }

	                    form.append(item.alias, item._file, item.file.name);

	                    xhr.upload.onprogress = function (event) {
	                        var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
	                        _this._onProgressItem(item, progress);
	                    };

	                    xhr.onload = function () {
	                        var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	                        var response = _this._transformResponse(xhr.response, headers);
	                        var gist = _this._isSuccessCode(xhr.status) ? "Success" : "Error";
	                        var method = "_on" + gist + "Item";
	                        _this[method](item, response, xhr.status, headers);
	                        _this._onCompleteItem(item, response, xhr.status, headers);
	                    };

	                    xhr.onerror = function () {
	                        var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	                        var response = _this._transformResponse(xhr.response, headers);
	                        _this._onErrorItem(item, response, xhr.status, headers);
	                        _this._onCompleteItem(item, response, xhr.status, headers);
	                    };

	                    xhr.onabort = function () {
	                        var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	                        var response = _this._transformResponse(xhr.response, headers);
	                        _this._onCancelItem(item, response, xhr.status, headers);
	                        _this._onCompleteItem(item, response, xhr.status, headers);
	                    };

	                    xhr.open(item.method, item.url, true);

	                    xhr.withCredentials = item.withCredentials;

	                    forEach(item.headers, function (value, name) {
	                        xhr.setRequestHeader(name, value);
	                    });

	                    xhr.send(form);
	                    this._render();
	                }
	            },
	            _iframeTransport: {
	                /**
	                 * The IFrame transport
	                 * @param {FileItem} item
	                 * @private
	                 */

	                value: function _iframeTransport(item) {
	                    var _this = this;

	                    var form = element("<form style=\"display: none;\" />");
	                    var iframe = element("<iframe name=\"iframeTransport" + Date.now() + "\">");
	                    var input = item._input;

	                    if (item._form) item._form.replaceWith(input); // remove old form
	                    item._form = form; // save link to new form

	                    this._onBeforeUploadItem(item);

	                    input.prop("name", item.alias);

	                    forEach(item.formData, function (obj) {
	                        forEach(obj, function (value, key) {
	                            var element_ = element("<input type=\"hidden\" name=\"" + key + "\" />");
	                            element_.val(value);
	                            form.append(element_);
	                        });
	                    });

	                    form.prop({
	                        action: item.url,
	                        method: "POST",
	                        target: iframe.prop("name"),
	                        enctype: "multipart/form-data",
	                        encoding: "multipart/form-data" // old IE
	                    });

	                    iframe.bind("load", function () {
	                        var html = "";
	                        var status = 200;

	                        try {
	                            // Fix for legacy IE browsers that loads internal error page
	                            // when failed WS response received. In consequence iframe
	                            // content access denied error is thrown becouse trying to
	                            // access cross domain page. When such thing occurs notifying
	                            // with empty response object. See more info at:
	                            // http://stackoverflow.com/questions/151362/access-is-denied-error-on-accessing-iframe-document-object
	                            // Note that if non standard 4xx or 5xx error code returned
	                            // from WS then response content can be accessed without error
	                            // but 'XHR' status becomes 200. In order to avoid confusion
	                            // returning response via same 'success' event handler.

	                            // fixed angular.contents() for iframes
	                            html = iframe[0].contentDocument.body.innerHTML;
	                        } catch (e) {
	                            // in case we run into the access-is-denied error or we have another error on the server side
	                            // (intentional 500,40... errors), we at least say 'something went wrong' -> 500
	                            status = 500;
	                        }

	                        var xhr = { response: html, status: status, dummy: true };
	                        var headers = {};
	                        var response = _this._transformResponse(xhr.response, headers);

	                        _this._onSuccessItem(item, response, xhr.status, headers);
	                        _this._onCompleteItem(item, response, xhr.status, headers);
	                    });

	                    form.abort = function () {
	                        var xhr = { status: 0, dummy: true };
	                        var headers = {};
	                        var response;

	                        iframe.unbind("load").prop("src", "javascript:false;");
	                        form.replaceWith(input);

	                        _this._onCancelItem(item, response, xhr.status, headers);
	                        _this._onCompleteItem(item, response, xhr.status, headers);
	                    };

	                    input.after(form);
	                    form.append(input).append(iframe);

	                    form[0].submit();
	                    this._render();
	                }
	            },
	            _onWhenAddingFileFailed: {
	                /**
	                 * Inner callback
	                 * @param {File|Object} item
	                 * @param {Object} filter
	                 * @param {Object} options
	                 * @private
	                 */

	                value: function _onWhenAddingFileFailed(item, filter, options) {
	                    this.onWhenAddingFileFailed(item, filter, options);
	                }
	            },
	            _onAfterAddingFile: {
	                /**
	                 * Inner callback
	                 * @param {FileItem} item
	                 */

	                value: function _onAfterAddingFile(item) {
	                    this.onAfterAddingFile(item);
	                }
	            },
	            _onAfterAddingAll: {
	                /**
	                 * Inner callback
	                 * @param {Array<FileItem>} items
	                 */

	                value: function _onAfterAddingAll(items) {
	                    this.onAfterAddingAll(items);
	                }
	            },
	            _onBeforeUploadItem: {
	                /**
	                 *  Inner callback
	                 * @param {FileItem} item
	                 * @private
	                 */

	                value: function _onBeforeUploadItem(item) {
	                    item._onBeforeUpload();
	                    this.onBeforeUploadItem(item);
	                }
	            },
	            _onProgressItem: {
	                /**
	                 * Inner callback
	                 * @param {FileItem} item
	                 * @param {Number} progress
	                 * @private
	                 */

	                value: function _onProgressItem(item, progress) {
	                    var total = this._getTotalProgress(progress);
	                    this.progress = total;
	                    item._onProgress(progress);
	                    this.onProgressItem(item, progress);
	                    this.onProgressAll(total);
	                    this._render();
	                }
	            },
	            _onSuccessItem: {
	                /**
	                 * Inner callback
	                 * @param {FileItem} item
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 * @private
	                 */

	                value: function _onSuccessItem(item, response, status, headers) {
	                    item._onSuccess(response, status, headers);
	                    this.onSuccessItem(item, response, status, headers);
	                }
	            },
	            _onErrorItem: {
	                /**
	                 * Inner callback
	                 * @param {FileItem} item
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 * @private
	                 */

	                value: function _onErrorItem(item, response, status, headers) {
	                    item._onError(response, status, headers);
	                    this.onErrorItem(item, response, status, headers);
	                }
	            },
	            _onCancelItem: {
	                /**
	                 * Inner callback
	                 * @param {FileItem} item
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 * @private
	                 */

	                value: function _onCancelItem(item, response, status, headers) {
	                    item._onCancel(response, status, headers);
	                    this.onCancelItem(item, response, status, headers);
	                }
	            },
	            _onCompleteItem: {
	                /**
	                 * Inner callback
	                 * @param {FileItem} item
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 * @private
	                 */

	                value: function _onCompleteItem(item, response, status, headers) {
	                    item._onComplete(response, status, headers);
	                    this.onCompleteItem(item, response, status, headers);

	                    var nextItem = this.getReadyItems()[0];
	                    this.isUploading = false;

	                    if (isDefined(nextItem)) {
	                        nextItem.upload();
	                        return;
	                    }

	                    this.onCompleteAll();
	                    this.progress = this._getTotalProgress();
	                    this._render();
	                }
	            }
	        }, {
	            isFile: {
	                /**********************
	                 * STATIC
	                 **********************/
	                /**
	                 * Returns "true" if value an instance of File
	                 * @param {*} value
	                 * @returns {Boolean}
	                 * @private
	                 */

	                value: function isFile(value) {
	                    return File && value instanceof File;
	                }
	            },
	            isFileLikeObject: {
	                /**
	                 * Returns "true" if value an instance of FileLikeObject
	                 * @param {*} value
	                 * @returns {Boolean}
	                 * @private
	                 */

	                value: function isFileLikeObject(value) {
	                    return value instanceof FileLikeObject;
	                }
	            },
	            isArrayLikeObject: {
	                /**
	                 * Returns "true" if value is array like object
	                 * @param {*} value
	                 * @returns {Boolean}
	                 */

	                value: function isArrayLikeObject(value) {
	                    return isObject(value) && "length" in value;
	                }
	            },
	            inherit: {
	                /**
	                 * Inherits a target (Class_1) by a source (Class_2)
	                 * @param {Function} target
	                 * @param {Function} source
	                 */

	                value: function inherit(target, source) {
	                    target.prototype = Object.create(source.prototype);
	                    target.prototype.constructor = target;
	                    target.super_ = source;
	                }
	            }
	        });

	        return FileUploader;
	    })();

	    /**********************
	     * PUBLIC
	     **********************/
	    /**
	     * Checks a support the html5 uploader
	     * @returns {Boolean}
	     * @readonly
	     */
	    FileUploader.prototype.isHTML5 = !!(File && FormData);
	    /**********************
	     * STATIC
	     **********************/
	    /**
	     * @borrows FileUploader.prototype.isHTML5
	     */
	    FileUploader.isHTML5 = FileUploader.prototype.isHTML5;

	    return FileUploader;
	};

	module.exports.$inject = ["fileUploaderOptions", "$rootScope", "$http", "$window", "FileLikeObject", "FileItem"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var CONFIG = _interopRequire(__webpack_require__(1));

	var copy = angular.copy;
	var isElement = angular.isElement;
	var isString = angular.isString;

	module.exports = function () {
	    var FileLikeObject = (function () {
	        /**
	         * Creates an instance of FileLikeObject
	         * @param {File|HTMLInputElement|Object} fileOrInput
	         * @constructor
	         */

	        function FileLikeObject(fileOrInput) {
	            _classCallCheck(this, FileLikeObject);

	            var isInput = isElement(fileOrInput);
	            var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
	            var postfix = isString(fakePathOrObject) ? "FakePath" : "Object";
	            var method = "_createFrom" + postfix;
	            this[method](fakePathOrObject);
	        }

	        _createClass(FileLikeObject, {
	            _createFromFakePath: {
	                /**
	                 * Creates file like object from fake path string
	                 * @param {String} path
	                 * @private
	                 */

	                value: function _createFromFakePath(path) {
	                    this.lastModifiedDate = null;
	                    this.size = null;
	                    this.type = "like/" + path.slice(path.lastIndexOf(".") + 1).toLowerCase();
	                    this.name = path.slice(path.lastIndexOf("/") + path.lastIndexOf("\\") + 2);
	                }
	            },
	            _createFromObject: {
	                /**
	                 * Creates file like object from object
	                 * @param {File|FileLikeObject} object
	                 * @private
	                 */

	                value: function _createFromObject(object) {
	                    this.lastModifiedDate = copy(object.lastModifiedDate);
	                    this.size = object.size;
	                    this.type = object.type;
	                    this.name = object.name;
	                }
	            }
	        });

	        return FileLikeObject;
	    })();

	    return FileLikeObject;
	};

	module.exports.$inject = [];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var CONFIG = _interopRequire(__webpack_require__(1));

	var copy = angular.copy;
	var extend = angular.extend;
	var element = angular.element;
	var isElement = angular.isElement;

	module.exports = function ($compile, FileLikeObject) {
	    var FileItem = (function () {
	        /**
	         * Creates an instance of FileItem
	         * @param {FileUploader} uploader
	         * @param {File|HTMLInputElement|Object} some
	         * @param {Object} options
	         * @constructor
	         */

	        function FileItem(uploader, some, options) {
	            _classCallCheck(this, FileItem);

	            var isInput = isElement(some);
	            var input = isInput ? element(some) : null;
	            var file = !isInput ? some : null;

	            extend(this, {
	                url: uploader.url,
	                alias: uploader.alias,
	                headers: copy(uploader.headers),
	                formData: copy(uploader.formData),
	                removeAfterUpload: uploader.removeAfterUpload,
	                withCredentials: uploader.withCredentials,
	                method: uploader.method
	            }, options, {
	                uploader: uploader,
	                file: new FileLikeObject(some),
	                isReady: false,
	                isUploading: false,
	                isUploaded: false,
	                isSuccess: false,
	                isCancel: false,
	                isError: false,
	                progress: 0,
	                index: null,
	                _file: file,
	                _input: input
	            });

	            if (input) this._replaceNode(input);
	        }

	        _createClass(FileItem, {
	            upload: {
	                /**********************
	                 * PUBLIC
	                 **********************/
	                /**
	                 * Uploads a FileItem
	                 */

	                value: function upload() {
	                    try {
	                        this.uploader.uploadItem(this);
	                    } catch (e) {
	                        this.uploader._onCompleteItem(this, "", 0, []);
	                        this.uploader._onErrorItem(this, "", 0, []);
	                    }
	                }
	            },
	            cancel: {
	                /**
	                 * Cancels uploading of FileItem
	                 */

	                value: function cancel() {
	                    this.uploader.cancelItem(this);
	                }
	            },
	            remove: {
	                /**
	                 * Removes a FileItem
	                 */

	                value: function remove() {
	                    this.uploader.removeFromQueue(this);
	                }
	            },
	            onBeforeUpload: {
	                /**
	                 * Callback
	                 * @private
	                 */

	                value: function onBeforeUpload() {}
	            },
	            onProgress: {
	                /**
	                 * Callback
	                 * @param {Number} progress
	                 * @private
	                 */

	                value: function onProgress(progress) {}
	            },
	            onSuccess: {
	                /**
	                 * Callback
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 */

	                value: function onSuccess(response, status, headers) {}
	            },
	            onError: {
	                /**
	                 * Callback
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 */

	                value: function onError(response, status, headers) {}
	            },
	            onCancel: {
	                /**
	                 * Callback
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 */

	                value: function onCancel(response, status, headers) {}
	            },
	            onComplete: {
	                /**
	                 * Callback
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 */

	                value: function onComplete(response, status, headers) {}
	            },
	            _onBeforeUpload: {
	                /**********************
	                 * PRIVATE
	                 **********************/
	                /**
	                 * Inner callback
	                 */

	                value: function _onBeforeUpload() {
	                    this.isReady = true;
	                    this.isUploading = true;
	                    this.isUploaded = false;
	                    this.isSuccess = false;
	                    this.isCancel = false;
	                    this.isError = false;
	                    this.progress = 0;
	                    this.onBeforeUpload();
	                }
	            },
	            _onProgress: {
	                /**
	                 * Inner callback
	                 * @param {Number} progress
	                 * @private
	                 */

	                value: function _onProgress(progress) {
	                    this.progress = progress;
	                    this.onProgress(progress);
	                }
	            },
	            _onSuccess: {
	                /**
	                 * Inner callback
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 * @private
	                 */

	                value: function _onSuccess(response, status, headers) {
	                    this.isReady = false;
	                    this.isUploading = false;
	                    this.isUploaded = true;
	                    this.isSuccess = true;
	                    this.isCancel = false;
	                    this.isError = false;
	                    this.progress = 100;
	                    this.index = null;
	                    this.onSuccess(response, status, headers);
	                }
	            },
	            _onError: {
	                /**
	                 * Inner callback
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 * @private
	                 */

	                value: function _onError(response, status, headers) {
	                    this.isReady = false;
	                    this.isUploading = false;
	                    this.isUploaded = true;
	                    this.isSuccess = false;
	                    this.isCancel = false;
	                    this.isError = true;
	                    this.progress = 0;
	                    this.index = null;
	                    this.onError(response, status, headers);
	                }
	            },
	            _onCancel: {
	                /**
	                 * Inner callback
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 * @private
	                 */

	                value: function _onCancel(response, status, headers) {
	                    this.isReady = false;
	                    this.isUploading = false;
	                    this.isUploaded = false;
	                    this.isSuccess = false;
	                    this.isCancel = true;
	                    this.isError = false;
	                    this.progress = 0;
	                    this.index = null;
	                    this.onCancel(response, status, headers);
	                }
	            },
	            _onComplete: {
	                /**
	                 * Inner callback
	                 * @param {*} response
	                 * @param {Number} status
	                 * @param {Object} headers
	                 * @private
	                 */

	                value: function _onComplete(response, status, headers) {
	                    this.onComplete(response, status, headers);
	                    if (this.removeAfterUpload) this.remove();
	                }
	            },
	            _destroy: {
	                /**
	                 * Destroys a FileItem
	                 */

	                value: function _destroy() {
	                    if (this._input) this._input.remove();
	                    if (this._form) this._form.remove();
	                    delete this._form;
	                    delete this._input;
	                }
	            },
	            _prepareToUploading: {
	                /**
	                 * Prepares to uploading
	                 * @private
	                 */

	                value: function _prepareToUploading() {
	                    this.index = this.index || ++this.uploader._nextIndex;
	                    this.isReady = true;
	                }
	            },
	            _replaceNode: {
	                /**
	                 * Replaces input element on his clone
	                 * @param {JQLite|jQuery} input
	                 * @private
	                 */

	                value: function _replaceNode(input) {
	                    var clone = $compile(input.clone())(input.scope());
	                    clone.prop("value", null); // FF fix
	                    input.css("display", "none");
	                    input.after(clone); // remove jquery dependency
	                }
	            }
	        });

	        return FileItem;
	    })();

	    return FileItem;
	};

	module.exports.$inject = ["$compile", "FileLikeObject"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var CONFIG = _interopRequire(__webpack_require__(1));

	var extend = angular.extend;

	module.exports = function () {
	    var FileDirective = (function () {
	        /**
	         * Creates instance of {FileDirective} object
	         * @param {Object} options
	         * @param {Object} options.uploader
	         * @param {HTMLElement} options.element
	         * @param {Object} options.events
	         * @param {String} options.prop
	         * @constructor
	         */

	        function FileDirective(options) {
	            _classCallCheck(this, FileDirective);

	            extend(this, options);
	            this.uploader._directives[this.prop].push(this);
	            this._saveLinks();
	            this.bind();
	        }

	        _createClass(FileDirective, {
	            bind: {
	                /**
	                 * Binds events handles
	                 */

	                value: function bind() {
	                    for (var key in this.events) {
	                        var prop = this.events[key];
	                        this.element.bind(key, this[prop]);
	                    }
	                }
	            },
	            unbind: {
	                /**
	                 * Unbinds events handles
	                 */

	                value: function unbind() {
	                    for (var key in this.events) {
	                        this.element.unbind(key, this.events[key]);
	                    }
	                }
	            },
	            destroy: {
	                /**
	                 * Destroys directive
	                 */

	                value: function destroy() {
	                    var index = this.uploader._directives[this.prop].indexOf(this);
	                    this.uploader._directives[this.prop].splice(index, 1);
	                    this.unbind();
	                    // this.element = null;
	                }
	            },
	            _saveLinks: {
	                /**
	                 * Saves links to functions
	                 * @private
	                 */

	                value: function _saveLinks() {
	                    for (var key in this.events) {
	                        var prop = this.events[key];
	                        this[prop] = this[prop].bind(this);
	                    }
	                }
	            }
	        });

	        return FileDirective;
	    })();

	    /**
	     * Map of events
	     * @type {Object}
	     */
	    FileDirective.prototype.events = {};

	    return FileDirective;
	};

	module.exports.$inject = [];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var CONFIG = _interopRequire(__webpack_require__(1));

	var extend = angular.extend;

	module.exports = function (FileDirective) {
	    var FileSelect = (function (_FileDirective) {
	        /**
	         * Creates instance of {FileSelect} object
	         * @param {Object} options
	         * @constructor
	         */

	        function FileSelect(options) {
	            _classCallCheck(this, FileSelect);

	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: "destroy",
	                    change: "onChange"
	                },
	                // Name of property inside uploader._directive object
	                prop: "select"
	            });

	            _get(Object.getPrototypeOf(FileSelect.prototype), "constructor", this).call(this, extendedOptions);

	            if (!this.uploader.isHTML5) {
	                this.element.removeAttr("multiple");
	            }
	            this.element.prop("value", null); // FF fix
	        }

	        _inherits(FileSelect, _FileDirective);

	        _createClass(FileSelect, {
	            getOptions: {
	                /**
	                 * Returns options
	                 * @return {Object|undefined}
	                 */

	                value: function getOptions() {}
	            },
	            getFilters: {
	                /**
	                 * Returns filters
	                 * @return {Array<Function>|String|undefined}
	                 */

	                value: function getFilters() {}
	            },
	            isEmptyAfterSelection: {
	                /**
	                 * If returns "true" then HTMLInputElement will be cleared
	                 * @returns {Boolean}
	                 */

	                value: function isEmptyAfterSelection() {
	                    return !!this.element.attr("multiple");
	                }
	            },
	            onChange: {
	                /**
	                 * Event handler
	                 */

	                value: function onChange() {
	                    var files = this.uploader.isHTML5 ? this.element[0].files : this.element[0];
	                    var options = this.getOptions();
	                    var filters = this.getFilters();

	                    if (!this.uploader.isHTML5) this.destroy();
	                    this.uploader.addToQueue(files, options, filters);
	                    if (this.isEmptyAfterSelection()) {
	                        this.element.prop("value", null);
	                        this.element.replaceWith(this.element = this.element.clone(true)); // IE fix
	                    }
	                }
	            }
	        });

	        return FileSelect;
	    })(FileDirective);

	    return FileSelect;
	};

	module.exports.$inject = ["FileDirective"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var CONFIG = _interopRequire(__webpack_require__(1));

	var extend = angular.extend;
	var forEach = angular.forEach;

	module.exports = function (FileDirective) {
	    var FileDrop = (function (_FileDirective) {
	        /**
	         * Creates instance of {FileDrop} object
	         * @param {Object} options
	         * @constructor
	         */

	        function FileDrop(options) {
	            _classCallCheck(this, FileDrop);

	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: "destroy",
	                    drop: "onDrop",
	                    dragover: "onDragOver",
	                    dragleave: "onDragLeave"
	                },
	                // Name of property inside uploader._directive object
	                prop: "drop"
	            });

	            _get(Object.getPrototypeOf(FileDrop.prototype), "constructor", this).call(this, extendedOptions);
	        }

	        _inherits(FileDrop, _FileDirective);

	        _createClass(FileDrop, {
	            getOptions: {
	                /**
	                 * Returns options
	                 * @return {Object|undefined}
	                 */

	                value: function getOptions() {}
	            },
	            getFilters: {
	                /**
	                 * Returns filters
	                 * @return {Array<Function>|String|undefined}
	                 */

	                value: function getFilters() {}
	            },
	            onDrop: {
	                /**
	                 * Event handler
	                 */

	                value: function onDrop(event) {
	                    var transfer = this._getTransfer(event);
	                    if (!transfer) {
	                        return;
	                    }var options = this.getOptions();
	                    var filters = this.getFilters();
	                    this._preventAndStop(event);
	                    forEach(this.uploader._directives.over, this._removeOverClass, this);
	                    this.uploader.addToQueue(transfer.files, options, filters);
	                }
	            },
	            onDragOver: {
	                /**
	                 * Event handler
	                 */

	                value: function onDragOver(event) {
	                    var transfer = this._getTransfer(event);
	                    if (!this._haveFiles(transfer.types)) {
	                        return;
	                    }transfer.dropEffect = "copy";
	                    this._preventAndStop(event);
	                    forEach(this.uploader._directives.over, this._addOverClass, this);
	                }
	            },
	            onDragLeave: {
	                /**
	                 * Event handler
	                 */

	                value: function onDragLeave(event) {
	                    if (event.currentTarget === this.element[0]) {
	                        return;
	                    }this._preventAndStop(event);
	                    forEach(this.uploader._directives.over, this._removeOverClass, this);
	                }
	            },
	            _getTransfer: {
	                /**
	                 * Helper
	                 */

	                value: function _getTransfer(event) {
	                    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
	                }
	            },
	            _preventAndStop: {
	                /**
	                 * Helper
	                 */

	                value: function _preventAndStop(event) {
	                    event.preventDefault();
	                    event.stopPropagation();
	                }
	            },
	            _haveFiles: {
	                /**
	                 * Returns "true" if types contains files
	                 * @param {Object} types
	                 */

	                value: function _haveFiles(types) {
	                    if (!types) {
	                        return false;
	                    }if (types.indexOf) {
	                        return types.indexOf("Files") !== -1;
	                    } else if (types.contains) {
	                        return types.contains("Files");
	                    } else {
	                        return false;
	                    }
	                }
	            },
	            _addOverClass: {
	                /**
	                 * Callback
	                 */

	                value: function _addOverClass(item) {
	                    item.addOverClass();
	                }
	            },
	            _removeOverClass: {
	                /**
	                 * Callback
	                 */

	                value: function _removeOverClass(item) {
	                    item.removeOverClass();
	                }
	            }
	        });

	        return FileDrop;
	    })(FileDirective);

	    return FileDrop;
	};

	module.exports.$inject = ["FileDirective"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var CONFIG = _interopRequire(__webpack_require__(1));

	var extend = angular.extend;

	module.exports = function (FileDirective) {
	    var FileOver = (function (_FileDirective) {
	        /**
	         * Creates instance of {FileDrop} object
	         * @param {Object} options
	         * @constructor
	         */

	        function FileOver(options) {
	            _classCallCheck(this, FileOver);

	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: "destroy"
	                },
	                // Name of property inside uploader._directive object
	                prop: "over",
	                // Over class
	                overClass: "nv-file-over"
	            });

	            _get(Object.getPrototypeOf(FileOver.prototype), "constructor", this).call(this, extendedOptions);
	        }

	        _inherits(FileOver, _FileDirective);

	        _createClass(FileOver, {
	            addOverClass: {
	                /**
	                 * Adds over class
	                 */

	                value: function addOverClass() {
	                    this.element.addClass(this.getOverClass());
	                }
	            },
	            removeOverClass: {
	                /**
	                 * Removes over class
	                 */

	                value: function removeOverClass() {
	                    this.element.removeClass(this.getOverClass());
	                }
	            },
	            getOverClass: {
	                /**
	                 * Returns over class
	                 * @returns {String}
	                 */

	                value: function getOverClass() {
	                    return this.overClass;
	                }
	            }
	        });

	        return FileOver;
	    })(FileDirective);

	    return FileOver;
	};

	module.exports.$inject = ["FileDirective"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var CONFIG = _interopRequire(__webpack_require__(1));

	module.exports = function ($parse, FileUploader, FileSelect) {

	    return {
	        link: function (scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);

	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError("\"Uploader\" must be an instance of FileUploader");
	            }

	            var object = new FileSelect({
	                uploader: uploader,
	                element: element
	            });

	            object.getOptions = $parse(attributes.options).bind(object, scope);
	            object.getFilters = function () {
	                return attributes.filters;
	            };
	        }
	    };
	};

	module.exports.$inject = ["$parse", "FileUploader", "FileSelect"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var CONFIG = _interopRequire(__webpack_require__(1));

	module.exports = function ($parse, FileUploader, FileDrop) {

	    return {
	        link: function (scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);

	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError("\"Uploader\" must be an instance of FileUploader");
	            }

	            if (!uploader.isHTML5) return;

	            var object = new FileDrop({
	                uploader: uploader,
	                element: element
	            });

	            object.getOptions = $parse(attributes.options).bind(object, scope);
	            object.getFilters = function () {
	                return attributes.filters;
	            };
	        }
	    };
	};

	module.exports.$inject = ["$parse", "FileUploader", "FileDrop"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var CONFIG = _interopRequire(__webpack_require__(1));

	module.exports = function (FileUploader, FileOver) {

	    return {
	        link: function (scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);

	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError("\"Uploader\" must be an instance of FileUploader");
	            }

	            var object = new FileOver({
	                uploader: uploader,
	                element: element
	            });

	            object.getOverClass = function () {
	                return attributes.overClass || object.overClass;
	            };
	        }
	    };
	};

	module.exports.$inject = ["FileUploader", "FileOver"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-file-upload.js.map

//# sourceMappingURL=all.js.map
