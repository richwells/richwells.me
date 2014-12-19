$(document).ready(function() {

//	Fitvids Responsive video 	
  	 $(".video-responsive").fitVids()
  	
//	Make the navbar toggle show active when clicked
  	$("a.btn-navbar").click(function () {
		$(this).toggleClass("active");
  	});  	



//	Scroll to top link
		$.scrollUp();	
		$('#scrollUp').html("<i class='fa fa-chevron-up'></i>");

//	Add webkit masks to modernizr	
  	if (document.body.style["-webkit-mask-repeat"] !== undefined) {
  	  Modernizr.cssmasks = true;
  	  $("html").addClass("cssmasks");
  	} else {
  	  Modernizr.cssmasks = false;
  	  $("html").addClass("no-cssmasks");
  	}

//	activate .fixed class on ym-nav
	IntroPageNav.init();
	

});	

	
window.IntroPageNav = {
  init: function() {
    return $(window).scroll(function() {
      if ($("body").scrollTop() > 1) {
        $('#ym-navbar').addClass('fixed');
      } else {
        $('#ym-navbar').removeClass('fixed');
      }
    });
  }
};
	
	
	

  	
  	



      




	
	/* scrollUp full options
	$(function () {
		$.scrollUp({
			scrollName: 'scrollUp',
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: 'Scroll to top', // Text for element
			scrollImg: false,
			activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});
	});
	*/






