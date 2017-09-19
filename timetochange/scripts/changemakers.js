$(document).ready(function(){
	$("a.filter-strip__link").click(function () {
			$(".filter-strip").toggleClass("active");
	 });


			 // wait for twitter embeds to load and then refresh masonry (needs refining)
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
