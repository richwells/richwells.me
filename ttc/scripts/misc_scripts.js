/* Pledge Thumbnail */

jQuery(function() {
	var gridRow			= jQuery('.gridRow');
	var thumb 			= jQuery('.pull-pledgethumb');
	var	pledgetext 		= jQuery('.pledge-text');
	var	arrow	 		= jQuery('.arrow-thumb');

	jQuery(thumb).click(function(e) {
		e.preventDefault();
		arrow.hide();
		gridRow.find('.pledge-text-jquery').remove();
		jQuery(this).children('.arrow-thumb').toggle();

		var parentRow = jQuery(this).parents(':eq(2)');
		var pledgetextTmp = jQuery(this).siblings(pledgetext);
		parentRow.append('<div class="pledge-text-jquery">' + jQuery(pledgetextTmp).html() + '</div>');

	});

	jQuery(window).resize(function(){
		var w = jQuery(window).width();
		if(w > 320) {
			gridRow.find('.pledge-text-jquery').remove();
		}
		if(w > 320 && arrow.is(':hidden')) {
			arrow.removeAttr('style');
		}
	});

});

/* Search button */

jQuery(function() {

	jQuery('.at-menu-toggle-button').prepend('<a id="pull-search"><span>Search</span></a>');

	var pull 		= jQuery('#pull-search');
	var	searchbar 	= jQuery('.region-search-bar');

	var w = jQuery(window).width();
	if(w < 768) {
		jQuery(pull).click(function(e) {
			e.preventDefault();
			searchbar.slideToggle();
		});

		jQuery(window).resize(function(){
			var w = jQuery(window).width();
			if(w > 320 && searchbar.is(':hidden')) {
				searchbar.removeAttr('style');
			}
		});
	}

});

/* Add span wrapper to home button */

jQuery(function() {
	jQuery('.home-btn').wrapInner('<span></span>');
});

/* Scroll to anchor */

jQuery(function() {
	jQuery('a[href^="#"]').click(function(event) {
	    var target = jQuery( jQuery(this).attr('href') );
	    if( target.length ) {
	        event.preventDefault();
	        jQuery('html, body').animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});
});

/* Filter ideas button */

function toggleIdeasFilters() {
	var	ideas_filters = jQuery('#views-exposed-form-event-suggestions-page');
	ideas_filters.slideToggle();
}

/* Printable area */

function printDiv(divID) {
    var printContents = document.getElementById(divID).innerHTML;
	var originalContents = document.body.innerHTML;
	document.body.innerHTML = "<html><head><title></title></head><body>" + printContents + "</body>";
	window.print();
	document.body.innerHTML = originalContents;
}
