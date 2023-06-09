!function(h){"use strict";window.qodef={},qodef.body=h("body"),qodef.html=h("html"),qodef.window=h(window),qodef.windowWidth=h(window).width(),qodef.windowHeight=h(window).height(),qodef.scroll=0,h(document).ready(function(){qodef.scroll=h(window).scrollTop(),i.init(),_.init(),o.init(),s.init(),n.init(),t.init(),a.init(),r.init()}),h(window).load(function(){l.init()}),h(window).resize(function(){qodef.windowWidth=h(window).width(),qodef.windowHeight=h(window).height()}),h(window).scroll(function(){qodef.scroll=h(window).scrollTop()}),h(document).on("munich_trigger_get_new_posts",function(){_.init(),o.init(),r.init(),n.init(),t.init()}),h(document.body).on("wc_fragments_loaded",function(){n.refresh()}),h(document.body).on("wc_fragments_refreshed",function(){n.refresh()}),h(document.body).on("wc_update_cart",function(){n.refresh()}),h(document.body).on("cart_page_refreshed",function(){n.init()}),h(document.body).on("updated_checkout",function(){n.init()}),h(document.body).on("removed_from_cart",function(){n.refresh()});var i={init:function(){i.addBodyClassName()},isBrowser:function(e){var t=!1;switch(e){case"chrome":t=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);break;case"safari":t=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);break;case"firefox":t=-1<navigator.userAgent.toLowerCase().indexOf("firefox");break;case"ie":t=0<window.navigator.userAgent.indexOf("MSIE ")||!!navigator.userAgent.match(/Trident.*rv\:11\./);break;case"edge":t=/Edge\/\d./i.test(navigator.userAgent)}return t},addBodyClassName:function(){h.each(["chrome","safari","firefox","ie","edge"],function(e,t){i.isBrowser(t)&&void 0!==qodef.body&&("ie"===t&&(t="ms-explorer"),qodef.body.addClass("qodef-browser--"+t))})}},_={init:function(e){this.holder=h(".qodef-swiper-container"),h.extend(this.holder,e),this.holder.length&&this.holder.each(function(){_.initSlider(h(this))})},initSlider:function(e){var t=_.getOptions(e),i=_.getEvents(e,t);new Swiper(e,Object.assign(t,i))},getOptions:function(e,c){var t=void 0!==e.data("options")?e.data("options"):{},i=void 0!==t.direction&&""!==t.direction?t.direction:"horizontal",f=void 0!==t.spaceBetween&&""!==t.spaceBetween?t.spaceBetween:0,o=void 0!==t.slidesPerView&&""!==t.slidesPerView?t.slidesPerView:1,u=void 0!==t.centeredSlides&&""!==t.centeredSlides&&t.centeredSlides,h=void 0!==t.sliderScroll&&""!==t.sliderScroll&&t.sliderScroll,g=void 0===t.loop||""===t.loop||t.loop,n=void 0===t.autoplay||""===t.autoplay||t.autoplay,p=(void 0!==t.speed&&""!==t.speed&&parseInt(t.speed,10),void 0!==t.speedAnimation&&""!==t.speedAnimation?parseInt(t.speedAnimation,10):800),m=void 0!==t.slideAnimation&&""!==t.slideAnimation?t.slideAnimation:"",a=void 0!==t.customStages&&""!==t.customStages&&t.customStages,s=void 0!==t.outsideNavigation&&"yes"===t.outsideNavigation,w=s?".swiper-button-next-"+t.unique:e.find(".swiper-button-next"),s=s?".swiper-button-prev-"+t.unique:e.find(".swiper-button-prev"),v=e.find(".swiper-pagination"),r=(!1!==n&&(n={disableOnInteraction:!1}),void 0!==t.slidesPerView1440&&""!==t.slidesPerView1440?parseInt(t.slidesPerView1440,10):5),d=void 0!==t.slidesPerView1366&&""!==t.slidesPerView1366?parseInt(t.slidesPerView1366,10):4,l=void 0!==t.slidesPerView1024&&""!==t.slidesPerView1024?parseInt(t.slidesPerView1024,10):3,q=void 0!==t.slidesPerView768&&""!==t.slidesPerView768?parseInt(t.slidesPerView768,10):2,y=void 0!==t.slidesPerView680&&""!==t.slidesPerView680?parseInt(t.slidesPerView680,10):1,a=(a||(o<2?q=l=d=r=o:o<3?l=d=r=o:o<4?d=r=o:o<5&&(r=o)),{direction:i,slidesPerView:o="vertical"===i?1:o,centeredSlides:u,sliderScroll:h,spaceBetween:f,autoplay:n,loop:g,speed:p,navigation:{nextEl:w,prevEl:s},pagination:{el:v,clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"><svg class="qodef-svg--bullet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20.8 21.3" style="enable-background:new 0 0 20.8 21.3;" xml:space="preserve"><polygon points="20.3,17 16.9,20.3 10.6,14 4.1,20.5 0.7,17.2 7.3,10.7 0.9,4.3 4.3,1 10.6,7.3 16.7,1.2 20,4.5 13.9,10.6 "/></svg></span>'}},breakpoints:{0:{slidesPerView:void 0!==t.slidesPerView480&&""!==t.slidesPerView480?parseInt(t.slidesPerView480,10):1},481:{slidesPerView:y},681:{slidesPerView:q},769:{slidesPerView:l},1025:{slidesPerView:d},1367:{slidesPerView:r},1441:{slidesPerView:o}}});return m.length&&"fade"===m&&(a.effect="fade",a.fadeEffect={crossFade:!0}),Object.assign(a,_.getSliderDatas(e))},getSliderDatas:function(e){var t,i=e.data(),o={};for(t in i)i.hasOwnProperty(t)&&"options"!==t&&void 0!==i[t]&&""!==i[t]&&(o[t]=i[t]);return o},getEvents:function(o,n){return{on:{beforeInit:function(){var e,t,i;"vertical"===n.direction&&(t=e=0,(i=o.find(".qodef-e")).length&&i.each(function(){t=h(this).outerHeight(),e<t&&(e=t)}),o.css("height",e),i.css("height",e))},init:function(){var t;o.addClass("qodef-swiper--initialized"),qodef.body.trigger("munich_trigger_swiper_is_initialized",[o,n]),n.sliderScroll&&(t=!1,o.on("mousewheel",function(e){e.preventDefault(),t||(t=!0,e.deltaY<0?o[0].swiper.slideNext():o[0].swiper.slidePrev(),setTimeout(function(){t=!1},1e3))}))}}}}},o=(qodef.qodefSwiper=_,{init:function(e){this.holder=h(".qodef-magnific-popup"),h.extend(this.holder,e),this.holder.length&&this.holder.each(function(){o.initPopup(h(this))})},initPopup:function(e){e.hasClass("qodef-popup-item")?o.initSingleImagePopup(e):e.hasClass("qodef-popup-gallery")&&o.initGalleryPopup(e)},initSingleImagePopup:function(e){var t=e.data("type");e.magnificPopup({type:t,titleSrc:"title",removalDelay:350,mainClass:"mfp-fade",image:{cursor:null},closeMarkup:'<button title="%title%" type="button" class="mfp-close">'+qodefGlobal.vars.iconClose+"</button>"})},initGalleryPopup:function(e){var e=e.find(".qodef-popup-item"),t=o.generateGalleryItems(e);e.each(function(e){h(this).magnificPopup({items:t,gallery:{enabled:!0,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">'+qodefGlobal.vars.iconArrowLeft+"</button>"},index:e,type:"image",mainClass:"mfp-fade",removalDelay:350,image:{cursor:null},closeMarkup:'<button title="%title%" type="button" class="mfp-close">'+qodefGlobal.vars.iconClose+"</button>",callbacks:{open:function(){qodef.qodefTilt.init()}}})})},generateGalleryItems:function(e){var t=[];return e.length&&e.each(function(){var e=h(this),e={src:e.attr("href"),title:e.attr("title"),type:e.data("type")};t.push(e)}),t}}),e=(qodef.qodefMagnificPopup=o,{init:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}}),s=(qodef.qodefGetRandomIntegerInRange=e,{items:"",init:function(e){this.holder=h(".qodef-anchor"),h.extend(this.holder,e),this.holder.length&&(s.items=this.holder,s.clickTrigger(),h(window).on("load",function(){s.checkAnchorOnScroll(),s.checkAnchorOnLoad()}))},clickTrigger:function(){s.items.on("click",function(e){var t=s.getAnchorItem(this),i=t.attr("href"),o=t.prop("hash").split("#")[1],n=window.location.href,a=-1<n.indexOf("#")?n.split("#")[1]:0;(i.indexOf("http")<0||i===n||0!==a&&i.substring(0,i.length-o.length-1)===n.substring(0,n.length-a.length-1)||0===a&&i.substring(0,i.length-o.length-1)===n)&&e.preventDefault(),s.animateScroll(t,o)})},checkAnchorOnLoad:function(){var t=window.location.hash.split("#")[1];void 0!==t&&""!==t&&s.items.length&&s.items.each(function(){var e=s.getAnchorItem(this);-1<e.attr("href").indexOf(t)&&s.animateScroll(e,t)})},checkAnchorOnScroll:function(){var e;1024<qodef.windowWidth&&((e=h("#qodef-page-inner *[id]")).length&&e.each(function(){var e=h(this),t=h('[href*="#'+e.attr("id")+'"]');t.length&&(s.isTargetInView(e)&&s.setActiveState(t),h(window).scroll(function(){s.isTargetInView(e)?s.setActiveState(t):t.removeClass(s.getItemClasses(t))}))}))},isTargetInView:function(e){var e=e[0].getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;return!(Math.floor(100-(0<=e.top?0:e.top)/-+e.height*100)<20||Math.floor(100-(e.bottom-t)/e.height*100)<20)},getAnchorItem:function(e){return"A"===e.tagName?h(e):h(e).children("a")},animateScroll:function(e,t){var i=""!==t?h('[id="'+t+'"]'):"";if(i.length)return i=i.offset().top-s.getHeaderHeight()-qodefGlobal.vars.adminBarHeight,s.setActiveState(e),qodef.html.stop().animate({scrollTop:Math.round(i)},1e3,function(){history.pushState&&history.pushState(null,"","#"+t)}),!1},getHeaderHeight:function(){var e=0;return e=1024<qodef.windowWidth&&null!==qodefGlobal.vars.headerHeight&&""!==qodefGlobal.vars.headerHeight?parseInt(qodefGlobal.vars.headerHeight,10):e},setActiveState:function(e){var t=!e.parent().hasClass("qodef-anchor"),i=s.getItemClasses(e);s.items.removeClass(i),(t?e:e.parent()).addClass(i)},getItemClasses:function(e){return"qodef-anchor--active"+(e.parents("#qodef-page-header")?" current-menu-item current_page_item":"")}}),n=(qodef.qodefAnchor=s,{init:function(){var e=h('#respond .qodef-comment-form .form-submit button, .woocommerce-form-login__submit, .woocommerce-account .button, .coupon button, button[name="update_cart"], .checkout-button, #place_order, .wc-forward, .woocommerce-Button, .wc-backward, .qodef-woo-product-button-holder a, .single_add_to_cart_button, .woocommerce-form-coupon button, .qodef-order-tracking .button, .woocommerce-widget-layered-nav-dropdown__submit, .widget_price_filter .button, .qodef-woo-product-image-inner a.button, a.qodef-m-action-link');n.addHtml(e)},refresh:function(){var e=h(".wc-forward,.wc-backward, .qodef-m-checkout-link, .qodef-m-cart-link, .qodef-woo-product-button-holder a, a.qodef-m-action-link");n.addHtml(e)},addHtml:function(e){e.length&&e.each(function(){var e=h(this),t=e.text(),i=`<span class="qodef-m-bg">
												<svg class="qodef-svg--custom-shape-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="14 2 176.17 65.11" preserveAspectRatio="none" xml:space="preserve">
   													 <path id=${"qodef-svg--custom-shape-2"+Math.floor(1e3*Math.random())} d="m21.343 17.704 146.42-8.886 12.96 46.846-138.677 4.783-8.026.109-4.086.161-3.248.091-.316-3.089-.368-2.928-.305-3.184-.627-5.157-.869-6.005-2.858-22.741Z"></path>
												</svg>
											</span>`;e.find("qodef-m-bg").length||e.html(`<span class="qodef-m-text"> ${t} </span> `+i),qodef.html.hasClass("touchevents")||n.initMorph(e)})},initMorph:function(e){gsap.registerPlugin(MorphSVGPlugin),h('button[name="update_cart"]').removeAttr("aria-disabled disabled");let t=e.find("svg"),i=t.find("path").attr("id"),o="m21.652 74.297-10.368-4.565-3.145-1.394-5.556 3.324c-.011.021 2.066-5.221 3.513-7.95l-5.54-2.671 6.741-1.462-2.972-2.682-5.152-4.879 11.29-1.734 4.457-31.75 157.577-.296-.958-6.593 4.104 5.924 6.852-10.173-.306 10.127 7.743 1.19-4.312 7.695 4.811 5.015-4.775.144 4.144 35.49-174.239.286 6.091 6.954Z",n=!1,a=(o=t.hasClass("qodef-svg--custom-shape-1")?o:"m24.253 16.921 143.011-6.98 10.117 44.498-139.66 6.223-4.722 12.303-2.697-6.957-10.583 9.238-.116-11.633-13.944 5.775 14.129-14.065-6.807-11.658 8.935 2.44 2.337-29.184Z",gsap.timeline({repeat:-1,paused:!0,onRepeat:()=>{n?a.pause():a.resume()}}));a.to("#"+i,{morphSVG:o,duration:.7,repeat:1,yoyo:!0,ease:"circ.inOut"}),e.on("mouseenter",function(){n=!1,a.play()}).on("mouseleave",function(){n=!0})}}),t=(qodef.qodefModifiedButton=n,{init:function(){var e=h(".qodef--custom-hover a, .qodef-breadcrumbs a, .qodef-breadcrumbs .qodef-breadcrumbs-current, .woocommerce-tabs li a, .tagcloud a, .wp-block-tag-cloud a, .wp-block-page-list li a, .widget.widget_pages li a, .wp-block-archives-list li a, .widget.widget_archive li a, .widget.widget_meta li a, .widget.widget_nav_menu li a, .wp-block-categories li a, .widget.widget_categories li a, .widget.widget_layered_nav li a, .wc-block-product-categories li a, .wc-block-product-categories-list li a, .widget.widget_product_categories li a, .widget.widget_recent_comments li a, .widget.widget_recent_entries li a");t.addHtml(e)},addHtml:function(e){e.length&&e.each(function(){var e=h(this),t=e.text();e.html('<span class="qodef-m-text">'+t+'</span><svg class="qodef-svg--custom-shape-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 46.8 7.9" xml:space="preserve"><path fill="none" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" d="M1.5,5.8c0-0.3-0.1-0.7-0.2-1.2C1,3.3,0.7,2.5,0.9,2.4c0.1,0,0.1,0,0.3,0.1c0.5,0.3,0.7,0.7,0.7,0.7 C2.8,4.7,3.6,6,4.1,5.9c0.1,0,0.2-0.1,0.3-0.2C4.7,5.4,4.7,5,4.6,4.6C4.6,3.7,4.5,2.9,4.7,2.3C4.8,2.1,4.8,2,4.9,2 c0.1,0,0.3,0.3,0.3,0.4c0.3,0.6,0.7,1,1,1.6c0.6,1.2,1.8,2.5,2.3,2.3c0.2-0.1,0.3-0.3,0.5-0.8c0.1-0.2,0.1-0.3,0.2-0.9 c0.1-0.6,0.1-0.7,0.2-1.1c0.2-0.8,0.2-0.7,0.3-1.2C10,1.4,9.9,1,10.1,1c0.2-0.1,0.5,0.4,0.7,0.8c0.9,1.4,1.9,2.7,2.7,4.1 c0.1,0.1,0.2,0.4,0.4,0.4c0.2,0,0.5-0.2,0.6-0.4c0.6-0.7,0.9-1.6,1-1.9c0.6-1.9,0.8-2.3,1-2.3c0.1,0,0.2,0.1,0.2,0.2 c0.7,1.4,2,5.1,2.8,5.1c0.2,0,0.5-0.2,0.6-0.3c0,0,0.2-0.2,0.4-0.5c0.5-0.9,0.5-2.8,0.8-2.9c0.1,0,0.1,0.1,0.2,0.1 c1,1.3,2.6,1.6,3.4,2.4c0,0,0.1,0.1,0.2,0.1c0.1,0,0.1-0.2,0.1-1c0-1-0.2-1.5,0-1.6c0.1,0,0.2,0,0.4,0.1c1.1,0.7,1.3,1.7,1.9,1.7 c0,0,0.2,0,0.4-0.1c0.6-0.5,0-2,0.2-2.1c0.1,0,0.2,0.1,0.3,0.2c0.3,0.4,0.7,0.7,1,1.1C29.8,5,30.6,6.1,30.9,6C31,6,31,5.8,31,5.4 c0.1-0.8,0.3-0.8,0.7-1.8c0-0.1,0.1-0.2,0.2-0.3c0.2-0.1,0.5,0.1,0.7,0.3c2,1.6,2.2,1.8,2.2,1.8c0.1,0.1,0.2,0.2,0.4,0.2 c0.1,0,0.2-0.2,0.2-0.4c0.1-0.5,0-0.9,0-1.1c0-0.2,0.1-0.7,0.3-1.6c0.1-0.4,0.1-0.7,0.2-0.7C36,1.9,36,2,36,2.1 c0.1,0.2,0.2,0.4,0.5,0.6c1,0.9,1.5,1.1,1.8,1.2c0.1,0,0.3,0.1,0.4,0c0.2-0.1,0.1-0.4,0.1-0.9c0-0.3,0.1-0.6,0.2-0.6 c0.2,0,0.4,0.2,0.5,0.4c1.4,1.8,1.6,1.8,1.7,1.7c0.2-0.1,0.3-0.5,0.3-0.6c0-0.2,0-0.3,0-0.7c0-0.4,0.1-0.5,0.1-0.5 c0.1-0.1,0.2,0,0.6,0.2c0.4,0.3,0.7,0.4,0.8,0.4c0.2,0,0.3,0,1-0.3c0.8-0.3,1-0.4,1.2-0.4c0.3,0,0.6,0,0.7,0.1"/></svg>')})}}),a=(qodef.qodefModifiedSimpleButton=t,{init:function(){var e=h(".qodef-social-icons-group .qodef-icon-holder.qodef--textual a");a.addHtml(e)},addHtml:function(e){e.length&&e.each(function(){var e=h(this),t=e.text();e.find("svg").length||e.html('<span class="qodef-btn-text">'+t+'</span><svg class="qodef-svg--custom-shape-7 qodef-e-bg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.83 63.96" preserveAspectRatio="none" style="enable-background:new 0 0 45.83 63.96;" xml:space="preserve"><polygon fill="none" stroke-miterlimit="10" stroke-width="1.5" points="3.64,7.91 41.36,3.7 40.21,57.26 7.02,56.3"/></svg>'),a.drawOnHover(e)})},drawOnHover:function(e){var t=e.find("polygon");let i=gsap.timeline({paused:!0});i.from(t,{drawSVG:"-32% -32%",duration:1.3,ease:"power2.inOut"}),e.on("mouseenter touchstart",function(){i.play()}).on("mouseleave touchend",function(){i.reverse()})}}),r=(qodef.qodefAddHoverFrame=a,{init:function(){var e=[{triggers:h(".qodef-single-image:not(.qodef--disabled-tilt)"),elements:h(".qodef-single-image:not(.qodef--disabled-tilt)")},{triggers:h(".qodef-interactive-link-showcase .qodef-m-image"),elements:h(".qodef-interactive-link-showcase .qodef-m-image-holder")},{triggers:h(".qodef-vertical-split-slider .qodef-m-slide-image"),elements:h(".qodef-vertical-split-slider .qodef-m-slide-image")},{triggers:h(".qodef--custom-tilt"),elements:h(".qodef--custom-tilt")},{triggers:h("#qodef-page-sidebar .qodef-author-info"),elements:h("#qodef-page-sidebar .qodef-author-info .qodef-author-info-image")},{triggers:h(".qodef-video-button .qodef-m-play-inner"),elements:h(".qodef-video-button .qodef-m-play-inner"),isSmallVariation:!0}];1024<qodef.windowWidth&&e.forEach(function(e){var i=e.triggers,t=e.elements,o=e.isSmallVariation,n=e.isExtraSmallVariation;t.length&&t.each(function(e,t){e=i[e];t&&r.addTilt(e,t,o,n)})})},addTilt:function(i,e,t,o){gsap.set(e,{transformOrigin:"50% 50%",transformPerspective:1e3});let n=0,c=0,a=t?10:20,s=t?10:20,r=0,d=0,l=.6,f=(o&&(a=4,s=4,l=.1),gsap.to(e,{duration:l,x:()=>r*a,y:()=>d*s,rotateY:()=>t&&!o?d*s*4:o?.001:d*s,skewY:()=>t&&!o?d*s+"deg":0,skewX:()=>t&&!o?r*a+"deg":0,paused:!0,force3D:!0}));function u(){var e=h(i).outerWidth(),t=h(i).outerHeight();n=gsap.utils.mapRange(0,e,-1,1),c=gsap.utils.mapRange(0,t,-1,1)}window.addEventListener("resize",u),u(),i&&i.addEventListener("mousemove",e=>{r=n(e.pageX-h(i).offset().left),d=c(e.pageY-h(i).offset().top),f.invalidate().restart()}),i&&i.addEventListener("mouseleave",()=>{f.pause(),gsap.to(e,{duration:l,x:0,y:0,skewX:0,rotateY:0,skewY:0,scale:1,overwrite:!0})})}}),d=(qodef.qodefTilt=r,{init:function(){var e=h(".qodef--custom-tilt-rev-holder");e.length&&e.each(function(e,t){d.addTilt(t)})},addTilt:function(i){let e=h(i).find(".qodef--custom-tilt-rev"),o=(gsap.set(e,{transformOrigin:()=>"50% 50%",transformPerspective:1e3}),0),n=0,t=0,a=0,s=gsap.to(e,{duration:e=>e/2+.8,x:e=>e%2==0?30*t:-30*t,y:()=>30*a,rotateY:()=>30*a*.7,paused:!0});function r(){var e=h(i).outerWidth(),t=h(i).outerHeight();o=gsap.utils.mapRange(0,e,-1,1),n=gsap.utils.mapRange(0,t,-1,1)}window.addEventListener("resize",r),r(),i&&i.addEventListener("mouseenter",()=>{s.resume()}),i&&i.addEventListener("mousemove",e=>{t=o(e.pageX-h(i).offset().left),a=n(e.pageY-h(i).offset().top),s.invalidate().restart()}),i.addEventListener("mouseleave",()=>{s.pause(),gsap.to(e,{duration:.4,x:0,y:0,skewX:0,rotateY:0,scale:1})})}}),e=(qodef.qodefRevTilt=d,{check:function(e,t){if(e.length){var i=e.find("img");if(i.length)for(var o=0,n=0;n<i.length;n++){var a,s=i[n];s.complete?++o===i.length&&t.call(e):((a=new Image).addEventListener("load",function(){if(++o===i.length)return t.call(e),!1},!1),a.src=s.src)}else t.call(e)}}}),l=(qodef.qodefWaitForImages=e,"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var t=1;t<arguments.length;t++){var i=arguments[t];if(null!==i)for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e}),{init:function(){var e=h("rs-module");e.length&&e.each(function(){h(this).on("revolution.slide.onafterswap",function(e,t){d.init(),r.init()})})}});qodef.qodefRevSliderJs=l}(jQuery),function(o){"use strict";o(document).ready(function(){n.init()}),o(window).resize(function(){n.init()}),o(document).on("munich_trigger_get_new_posts",function(e,t){t.hasClass("qodef-blog")&&(i.resize(t),n.resize(t))});var i={init:function(){var e=o(".qodef-blog");e.length&&i.resize(e)},resize:function(e){e=e.find(".wp-video-shortcode, .wp-audio-shortcode").not(".mejs-container");e.length&&e.each(function(){var e=o(this);"function"==typeof e.mediaelementplayer&&e.mediaelementplayer({videoWidth:"100%",videoHeight:"56.5%"})})}},n=(qodef.qodefReInitMediaElementPostFormats=i,{init:function(){var e=o(".qodef-blog");e.length&&n.resize(e)},resize:function(e){e=e.find(".qodef-e-media iframe");e.length&&e.each(function(){var e=o(this),t=e.attr("width"),i=e.attr("height"),t=e.width()/t*i;e.css("height",t)})}});qodef.qodefResizeIframes=n}(jQuery),function(n){"use strict";n(document).ready(function(){a.init()}),n(document).on("munich_trigger_get_new_posts",function(e,t){t.hasClass("qodef-filter--on")&&t.removeClass("qodef--filter-loading")});var a={init:function(e){this.holder=n(".qodef-filter--on"),n.extend(this.holder,e),this.holder.length&&this.holder.each(function(){var e=n(this),t=e.find(".qodef-m-filter-item"),i=a.checkCustomListQuery(e.data("options"));a.clickEvent(e,t,i)})},checkCustomListQuery:function(e){if(void 0!==e.additional_query_args&&void 0!==e.additional_query_args.tax_query)return e.additional_query_args.tax_query},clickEvent:function(t,i,o){i.on("click",function(e){e.preventDefault();e=n(this);e.hasClass("qodef--active")||(t.addClass("qodef--filter-loading"),i.removeClass("qodef--active"),e.addClass("qodef--active"),a.setVisibility(t,e,o))})},setVisibility:function(e,t,i){var o=t.data("taxonomy"),t=t.data("filter"),n={},n="*"===t?i:{0:{taxonomy:o,field:"number"==typeof t?"term_id":"slug",terms:t}};e.data("options").additional_query_args={tax_query:n},qodef.body.trigger("munich_trigger_load_more",[e,1])},isMasonryLayout:function(e){return e.hasClass("qodef-layout--masonry")},hasLoadMore:function(e){return e.hasClass("qodef-pagination-type--load-more")}};qodef.qodefFilter=a}(jQuery),function(r){"use strict";r(document).ready(function(){t.init()}),r(document).on("munich_trigger_get_new_posts",function(){t.init()});var t={init:function(){var e=r(".qodef-layout--justified-gallery");e.length&&e.each(function(){t.setJustifyGallery(r(this))})},setJustifyGallery:function(e){var t=e.data("options"),i=e.children(".qodef-grid-inner"),o=void 0!==t.justified_gallery_row_height&&""!==t.justified_gallery_row_height?t.justified_gallery_row_height:150,n=void 0!==t.justified_gallery_row_height_max&&""!==t.justified_gallery_row_height_max&&t.justified_gallery_row_height_max,a=void 0!==t.space_value?2*t.space_value:0,s=void 0!==t.justified_gallery_treshold&&""!==t.justified_gallery_treshold?t.justified_gallery_treshold:.75;qodef.qodefWaitForImages.check(i,function(){"function"==typeof i.justifiedGallery&&i.justifiedGallery({captions:!1,rowHeight:o,maxRowHeight:n,margins:a,border:0,lastRow:"nojustify",justifyThreshold:s,selector:".qodef-grid-item"}).on("jg.complete jg.rowflush",function(){var t=r(this),i=!1;t.find(".qodef-grid-item").addClass("show").each(function(){var e=r(this);e.height(Math.round(e.height())),i||0!==e.width()||(t.height(t.height()-e.height()-a),i=!0)})}),e.addClass("qodef--justified-gallery-init")})}};qodef.qodefJustifiedGallery=t}(jQuery),function(t){"use strict";t(document).ready(function(){n.init()}),t(window).resize(function(){n.reInit()}),t(document).on("munich_trigger_get_new_posts",function(e,t){t.hasClass("qodef-layout--masonry")&&n.init()});var n={init:function(e){this.holder=t(".qodef-layout--masonry"),t.extend(this.holder,e),this.holder.length&&this.holder.each(function(){n.createMasonry(t(this))})},reInit:function(e){this.holder=t(".qodef-layout--masonry"),t.extend(this.holder,e),this.holder.length&&this.holder.each(function(){var e=t(this).find(".qodef-grid-inner");"function"==typeof e.isotope&&e.isotope("layout")})},createMasonry:function(t){var i=t.find(".qodef-grid-inner"),o=i.find(".qodef-grid-item");qodef.qodefWaitForImages.check(i,function(){var e;"function"==typeof i.isotope&&(i.isotope({layoutMode:"packery",itemSelector:".qodef-grid-item",percentPosition:!0,masonry:{columnWidth:".qodef-grid-masonry-sizer",gutter:".qodef-grid-masonry-gutter"}}),t.hasClass("qodef-items--fixed")&&(e=n.getFixedImageSize(i,o),n.setFixedImageProportionSize(i,o,e)),i.isotope("layout")),i.addClass("qodef--masonry-init")})},getFixedImageSize:function(e,t){var i,o=e.find(".qodef-item--square");return o.length?(i=(o=o.find("img")).width())!==(o=o.height())?o:i:e.find(".qodef-grid-masonry-sizer").width()-2*parseInt(t.css("paddingLeft"),10)},setFixedImageProportionSize:function(e,t,i){var o=parseInt(t.css("paddingLeft"),10),n=(e.find(".qodef-item--square"),e.find(".qodef-item--landscape")),a=e.find(".qodef-item--portrait"),e=e.find(".qodef-item--huge-square"),s=qodef.windowWidth<=680;t.css("height",i),n.length&&n.css("height",Math.round(i/2)),a.length&&a.css("height",Math.round(2*(i+o))),s||(n.length&&n.css("height",i),e.length&&e.css("height",Math.round(2*(i+o))))}};qodef.qodefMasonryLayout=n}(jQuery),function(t){"use strict";t(document).ready(function(){i.init()});var i={init:function(){var e=t("#qodef-page-mobile-header");e.length&&(i.initMobileHeaderOpener(e),i.initDropDownMobileMenu())},initMobileHeaderOpener:function(e){var t,i=e.find(".qodef-mobile-header-opener");i.length&&(t=e.find(".qodef-mobile-header-navigation"),i.on("tap click",function(e){e.preventDefault(),t.is(":visible")?(t.slideUp(450),i.removeClass("qodef--opened")):(t.slideDown(450),i.addClass("qodef--opened"))}))},initDropDownMobileMenu:function(){var e=t(".qodef-mobile-header-navigation .menu-item-has-children > .qodef-menu-item-arrow, .qodef-mobile-header-navigation .menu-item-has-children.qodef--hide-link > a");e.length&&e.each(function(){var o=t(this);o.on("tap click",function(e){e.preventDefault();var t,e=o.parent(),i=e.siblings(".menu-item-has-children");e.hasClass("menu-item-has-children")&&((t=e.find("ul.sub-menu").first()).is(":visible")?(t.slideUp(450),e.removeClass("qodef--opened")):(e.addClass("qodef--opened"),(0===i.length?e:e.siblings().removeClass("qodef--opened")).find(".sub-menu").slideUp(400,function(){t.slideDown(400)})))})})}}}(jQuery),function(a){a(document).ready(function(){e.init()});var e={init:function(){var e=a(".qodef-header-navigation.qodef-header-navigation-initial > ul > li.qodef-menu-item--narrow.menu-item-has-children");e.length&&e.each(function(){var e,t=a(this),i=t.offset().left,o=t.find(" > ul"),n=o.outerWidth(),i=a(window).width()-i;0<t.find("li.menu-item-has-children").length&&(e=i-n),o.removeClass("qodef-drop-down--right"),(i<n||e<n)&&o.addClass("qodef-drop-down--right")})}}}(jQuery),function(a){"use strict";a(document).ready(function(){s.init()}),a(window).scroll(function(){s.scroll()}),a(document).on("munich_trigger_load_more",function(e,t,i){s.triggerLoadMore(t,i)});var s={init:function(e){this.holder=a(".qodef-pagination--on"),a.extend(this.holder,e),this.holder.length&&this.holder.each(function(){var e=a(this);s.initPaginationType(e)})},scroll:function(e){this.holder=a(".qodef-pagination--on"),a.extend(this.holder,e),this.holder.length&&this.holder.each(function(){var e=a(this);e.hasClass("qodef-pagination-type--infinite-scroll")&&s.initInfiniteScroll(e)})},initPaginationType:function(e){e.hasClass("qodef-pagination-type--standard")?s.initStandard(e):e.hasClass("qodef-pagination-type--load-more")?s.initLoadMore(e):e.hasClass("qodef-pagination-type--infinite-scroll")&&s.initInfiniteScroll(e)},initStandard:function(i,e){var t,o=i.find(".qodef-m-pagination-items");o.length&&(t=i.data("options"),e=void 0!==e&&""!==e?parseInt(e,10):1,s.changeStandardState(i,t.max_pages_num,e),o.children().each(function(){var t=a(this);t.on("click",function(e){e.preventDefault(),t.hasClass("qodef--active")||s.getNewPosts(i,t.data("paged"))})}))},changeStandardState:function(e,t,i){var o,n,a;e.hasClass("qodef-pagination-type--standard")&&(o=(e=e.find(".qodef-m-pagination-items")).children(".qodef--number"),n=e.children(".qodef--prev"),a=e.children(".qodef--next"),s.standardPaginationVisibility(e,t),o.removeClass("qodef--active").eq(i-1).addClass("qodef--active"),n.data("paged",i-1),1<i?(n.show(),n.next().removeClass("qodef-prev--hidden")):(n.hide(),n.next().addClass("qodef-prev--hidden")),a.data("paged",i+1),i===t?a.hide():a.show())},standardPaginationVisibility:function(e,t){1===t?e.hide():1<t&&!e.is(":visible")&&e.show()},changeStandardHtml:function(e,t,i,o){var n,a;e.hasClass("qodef-pagination-type--standard")&&(n=e.find(".qodef-m-pagination"),a=e.find(".qodef-m-pagination-spinner"),s.standardPaginationVisibility(n,t),n.remove(),a.remove(),e.append(o),s.initStandard(e,i))},triggerStandardScrollAnimation:function(e){e.hasClass("qodef-pagination-type--standard")&&a("html, body").animate({scrollTop:e.offset().top-100},500)},initLoadMore:function(t){t.find(".qodef-load-more-button").on("click",function(e){e.preventDefault(),s.getNewPosts(t)})},triggerLoadMore:function(e,t){s.getNewPosts(e,t)},loadMoreButtonVisibility:function(e,t){e.hasClass("qodef-pagination-type--load-more")&&(t.next_page>t.max_pages_num||1===t.max_pages_num?e.find(".qodef-load-more-button").hide():1<t.max_pages_num&&t.next_page<=t.max_pages_num&&e.find(".qodef-load-more-button").show())},initInfiniteScroll:function(e){var t=e.outerHeight()+e.offset().top,i=qodef.scroll+qodef.windowHeight,o=e.data("options");!e.hasClass("qodef--loading")&&t<i&&o.max_pages_num>=o.next_page&&s.getNewPosts(e)},getNewPosts:function(t,i){t.addClass("qodef--loading");var o=t.children(".qodef-grid-inner"),n=t.data("options");s.setNextPageValue(n,i,!1),a.ajax({type:"GET",url:qodefGlobal.vars.restUrl+qodefGlobal.vars.paginationRestRoute,data:{options:n},beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",qodefGlobal.vars.restNonce)},success:function(e){"success"===e.status?(n.max_pages_num!==e.data.max_pages_num&&(n.max_pages_num=e.data.max_pages_num),s.setNextPageValue(n,i,!0),s.changeStandardHtml(t,n.max_pages_num,i,e.data.pagination_html),s.addPosts(o,e.data.html,i),s.reInitMasonryPosts(t,o),setTimeout(function(){qodef.body.trigger("munich_trigger_get_new_posts",[t,e.data,i])},300),s.triggerStandardScrollAnimation(t),s.loadMoreButtonVisibility(t,n)):console.log(e.message)},complete:function(){t.removeClass("qodef--loading")}})},setNextPageValue:function(e,t,i){void 0===t||""===t||i?i&&(e.next_page=parseInt(e.next_page,10)+1):e.next_page=t},addPosts:function(e,t,i){void 0!==i&&""!==i?e.html(t):e.append(t)},reInitMasonryPosts:function(e,t){e.hasClass("qodef-layout--masonry")&&(t.isotope("reloadItems").isotope({sortBy:"original-order"}),setTimeout(function(){t.isotope("layout")},200))}};qodef.qodefPagination=s}(jQuery),function(d){"use strict";d(document).ready(function(){e.init(),t.init(),o.init()}),d(window).on("load",function(){i.init()});var i={init:function(e){this.holder=[],this.holder.push({holder:d("#qodef-woo-page .woocommerce-ordering select"),options:{minimumResultsForSearch:1/0}}),this.holder.push({holder:d('.variations select:not(.yith_wccl_custom):not([data-type="colorpicker"]):not([data-type="image"]):not([data-type="label"])'),options:{minimumResultsForSearch:1/0}}),this.holder.push({holder:d("#qodef-woo-page #calc_shipping_country"),options:{}}),this.holder.push({holder:d("#qodef-woo-page .shipping select#calc_shipping_state"),options:{}}),this.holder.push({holder:d(".widget.widget_archive select"),options:{}}),this.holder.push({holder:d(".widget .wp-block-group .wp-block-archives-dropdown select")}),this.holder.push({holder:d(".widget.widget_categories select"),options:{}}),this.holder.push({holder:d(".widget .wp-block-group .wp-block-categories-dropdown select"),options:{}}),this.holder.push({holder:d(".widget.widget_text select"),options:{}}),d.extend(this.holder,e),"object"==typeof this.holder&&d.each(this.holder,function(e,t){i.createSelect2(t.holder,t.options)})},createSelect2:function(e,t){"function"==typeof e.select2&&e.select2(t)}},e={init:function(){d(document).on("click",".qodef-quantity-minus, .qodef-quantity-plus",function(e){e.stopPropagation();var t,e=d(this),i=e.siblings(".qodef-quantity-input"),o=parseFloat(i.data("step")),n=parseFloat(i.data("max")),a=parseFloat(i.data("min")),s=!1,r="function"==typeof Number.isNaN&&Number.isNaN(parseFloat(i.val()))?a:parseFloat(i.val());(s=e.hasClass("qodef-quantity-minus")?!0:s)?a<=(t=r-o)?i.val(t):i.val(a):(t=r+o,void 0!==n&&n<=t?i.val(n):i.val(t)),i.trigger("change")})}},t={init:function(){var e;"object"!=typeof qodef.qodefMagnificPopup||(e=d(".qodef--single.qodef-magnific-popup.qodef-popup-gallery .woocommerce-product-gallery__image")).length&&(e.each(function(){d(this).children("a").attr("data-type","image").addClass("qodef-popup-item")}),qodef.qodefMagnificPopup.init())}},o=(qodef.qodefWooMagnificPopup=t,{init:function(){var e=d(".widget .wc-block-product-search");e.length&&e.each(function(){var e=d(this).find(".wc-block-product-search__label"),t=d(this).find(".wc-block-product-search__fields"),i=d(this).find(".wc-block-product-search__field"),o=d(this).find(".wc-block-product-search__button");e.length&&e.removeClass().addClass("qodef-search-form-label"),t.length&&t.removeClass().addClass("qodef-search-form-inner"),i.length&&i.removeClass().addClass("qodef-search-form-field"),o.length&&(o.removeClass().addClass("qodef-search-form-button qodef--button-inside qodef--has-icon"),o.html('<svg class="qodef-svg--search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32.2 32.2" style="enable-background:new 0 0 32.2 32.2;" xml:space="preserve"><g><path d="M19,0C11.8,0,6,5.8,6,13c0,3.1,1.1,5.9,2.9,8.2l-8.6,8.6c-0.5,0.5-0.5,1.4,0,2s1.4,0.5,2,0l8.6-8.6 c2.2,1.8,5.1,2.9,8.2,2.9c7.2,0,13-5.8,13-13S26.2,0,19,0z M19,24c-6.1,0-11-4.9-11-11S12.9,2,19,2s11,4.9,11,11S25.1,24,19,24z"/></g></svg>'))})}})}(jQuery);