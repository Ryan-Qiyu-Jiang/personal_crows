$(document).ready(function() {
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        event.preventDefault();
	        console.log(target);
	        console.log($('div#parallax').scrollTop());
	        console.log(target.offset().top);
	        $('div#parallax').animate({
	          scrollTop: ($('div#parallax').scrollTop()+target.offset().top)
	        }, 1000, function() {
	        	console.log($('div#parallax').scrollTop());

	        });
	      }
	    }
	  });
});