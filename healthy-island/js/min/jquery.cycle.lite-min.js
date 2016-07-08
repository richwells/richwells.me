!function($){"use strict";function e(t,i,c,s){function o(i){i.timeout&&(l.cycleTimeout=setTimeout(function(){e(t,i,0,!i.rev)},i.timeout))}if(!i.busy){var l=t[0].parentNode,a=t[i.currSlide],r=t[i.nextSlide];if(0!==l.cycleTimeout||c)if(c||!l.cyclePause){i.before.length&&$.each(i.before,function(e,t){t.apply(r,[a,r,i,s])});var u=function(){n&&this.style.removeAttribute("filter"),$.each(i.after,function(e,t){t.apply(r,[a,r,i,s])}),o(i)};i.nextSlide!=i.currSlide&&(i.busy=1,$.fn.cycle.custom(a,r,i,u));var d=i.nextSlide+1==t.length;i.nextSlide=d?0:i.nextSlide+1,i.currSlide=d?t.length-1:i.nextSlide-1}else o(i)}}function t(t,i,n){var c=t[0].parentNode,s=c.cycleTimeout;return s&&(clearTimeout(s),c.cycleTimeout=0),i.nextSlide=i.currSlide+n,i.nextSlide<0?i.nextSlide=t.length-1:i.nextSlide>=t.length&&(i.nextSlide=0),e(t,i,1,n>=0),!1}var i="Lite-1.7",n=/MSIE/.test(navigator.userAgent);$.fn.cycle=function(i){return this.each(function(){i=i||{},this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=0,this.cyclePause=0;var c=$(this),s=i.slideExpr?$(i.slideExpr,this):c.children(),o=s.get();if(o.length<2)return void(window.console&&console.log("terminating; too few slides: "+o.length));var l=$.extend({},$.fn.cycle.defaults,i||{},$.metadata?c.metadata():$.meta?c.data():{}),a=$.isFunction(c.data)?c.data(l.metaAttr):null;a&&(l=$.extend(l,a)),l.before=l.before?[l.before]:[],l.after=l.after?[l.after]:[],l.after.unshift(function(){l.busy=0});var r=this.className;l.width=parseInt((r.match(/w:(\d+)/)||[])[1],10)||l.width,l.height=parseInt((r.match(/h:(\d+)/)||[])[1],10)||l.height,l.timeout=parseInt((r.match(/t:(\d+)/)||[])[1],10)||l.timeout,"static"==c.css("position")&&c.css("position","relative"),l.width&&c.width(l.width),l.height&&"auto"!=l.height&&c.height(l.height);var u=0;s.css({position:"absolute",top:0}).each(function(e){$(this).css("z-index",o.length-e)}),$(o[u]).css("opacity",1).show(),n&&o[u].style.removeAttribute("filter"),l.fit&&l.width&&s.width(l.width),l.fit&&l.height&&"auto"!=l.height&&s.height(l.height),l.pause&&c.hover(function(){this.cyclePause=1},function(){this.cyclePause=0});var d=$.fn.cycle.transitions[l.fx];if(d&&d(c,s,l),s.each(function(){var e=$(this);this.cycleH=l.fit&&l.height?l.height:e.height(),this.cycleW=l.fit&&l.width?l.width:e.width()}),l.cssFirst&&$(s[u]).css(l.cssFirst),l.timeout)for(l.speed.constructor==String&&(l.speed={slow:600,fast:200}[l.speed]||400),l.sync||(l.speed=l.speed/2);l.timeout-l.speed<250;)l.timeout+=l.speed;l.speedIn=l.speed,l.speedOut=l.speed,l.slideCount=o.length,l.currSlide=u,l.nextSlide=1;var h=s[u];l.before.length&&l.before[0].apply(h,[h,h,l,!0]),l.after.length>1&&l.after[1].apply(h,[h,h,l,!0]),l.click&&!l.next&&(l.next=l.click),l.next&&$(l.next).unbind("click.cycle").bind("click.cycle",function(){return t(o,l,l.rev?-1:1)}),l.prev&&$(l.prev).unbind("click.cycle").bind("click.cycle",function(){return t(o,l,l.rev?1:-1)}),l.timeout&&(this.cycleTimeout=setTimeout(function(){e(o,l,0,!l.rev)},l.timeout+(l.delay||0)))})},$.fn.cycle.custom=function(e,t,i,n){var c=$(e),s=$(t);s.css(i.cssBefore);var o=function(){s.animate(i.animIn,i.speedIn,i.easeIn,n)};c.animate(i.animOut,i.speedOut,i.easeOut,function(){c.css(i.cssAfter),i.sync||o()}),i.sync&&o()},$.fn.cycle.transitions={fade:function(e,t,i){t.not(":eq(0)").hide(),i.cssBefore={opacity:0,display:"block"},i.cssAfter={display:"none"},i.animOut={opacity:0},i.animIn={opacity:1}},fadeout:function(e,t,i){i.before.push(function(e,t,i,n){$(e).css("zIndex",i.slideCount+(n===!0?1:0)),$(t).css("zIndex",i.slideCount+(n===!0?0:1))}),t.not(":eq(0)").hide(),i.cssBefore={opacity:1,display:"block",zIndex:1},i.cssAfter={display:"none",zIndex:0},i.animOut={opacity:0},i.animIn={opacity:1}}},$.fn.cycle.ver=function(){return i},$.fn.cycle.defaults={animIn:{},animOut:{},fx:"fade",after:null,before:null,cssBefore:{},cssAfter:{},delay:0,fit:0,height:"auto",metaAttr:"cycle",next:null,pause:!1,prev:null,speed:1e3,slideExpr:null,sync:!0,timeout:4e3}}(jQuery);