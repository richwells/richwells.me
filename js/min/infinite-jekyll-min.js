$(function(){function n(){if(o){e=!0;var n=0,l=$(".post-list").children().length,f=function(){n++;var c=l+n;return c>o.length-1?void t():void(s>n?i(c,f):e=!1)};i(l+n,f)}}function i(n,i){var t=o[n];$.get(t,function(n){$(n).find(".post").appendTo(".post-list"),i()})}function t(){l=!1,e=!1,$(".infinite-spinner").fadeOut()}var o,e=!1,l=!0,s=$(".post-list").children().length,f=3e3;$.getJSON("/all-posts.json",function(n){o=n.posts,o.length<=s&&t()}),$(".infinite-spinner").length<1&&(l=!1),$(window).scroll(function(i){if(l&&!e){var t=$(window).height(),o=$(window).scrollTop(),s=t+o,c=$(document).height();s>c-f&&n()}})});