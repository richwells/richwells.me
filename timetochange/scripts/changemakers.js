$(document).ready(function(){
	$("a.filter-strip__link").click(function () {
			$(".filter-strip").toggleClass("active");
	 });

	 // initialize Isotope after all images have loaded
	        var $container = $('#content.cm-wrapper').imagesLoaded( function() {
	          $container.isotope({
	            // options
	            itemSelector: '.cm-box',
	            layoutMode: 'masonry'
	          });
	        });


	 // wait for twitter embeds to load and then refresh masonry
	       twttr.events.bind(
	         'rendered',
	         function (event) {
	           var $container = $('#content.cm-wrapper').imagesLoaded( function() {
	             $container.isotope({
	               // options
	               itemSelector: '.cm-box',
	               layoutMode: 'masonry'
	             });
	           });
	         }
	       );

});
