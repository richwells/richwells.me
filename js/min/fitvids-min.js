!function($){$.fn.fitVids=function(e){var t={customSelector:null},i=document.createElement("div"),r=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return i.className="fit-vids-style",i.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",r.parentNode.insertBefore(i,r),e&&$.extend(t,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","iframe[src*='slideshare.net']","iframe[src*='instagram.com']","object","embed"];t.customSelector&&e.push(t.customSelector);var i=$(this).find(e.join(","));i.each(function(){var e=$(this);if(!("embed"==this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var t="object"==this.tagName.toLowerCase()||e.attr("height")?e.attr("height"):e.height(),i=e.attr("width")?e.attr("width"):e.width(),r=t/i;if(!e.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());e.attr("id",a)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),e.removeAttr("height").removeAttr("width")}})})}}(jQuery);