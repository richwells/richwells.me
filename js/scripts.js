$(document).ready(function() {

//	Fitvids Responsive video
  	$(".fitvids").fitVids();


    //	Scroll to top link
    $.scrollUp();
    $('#scrollUp').html("<i class='fa fa-angle-up'></i>");


    // initialize Isotope after all images have loaded
    var $container = $('#isotope').imagesLoaded( function() {
      $container.isotope({
        // options
        itemSelector: '.col-related',
        layoutMode: 'masonry'
      });
    });


    // spinny thing
      var $cog = $('.freelance-cog-img'),
      $body = $(document.body),
      bodyHeight = $body.height();

      $(window).scroll(function () {
        $cog.css({
            'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 560) + 'deg)'
        });
      });



});
