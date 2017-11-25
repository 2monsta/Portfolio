$(document).ready(()=>{
	$('[data-toggle="tooltip"]').tooltip();
	$(".button-collapse").sideNav();
	$('.parallax').parallax();

	$(".navbar-fixed").hide();
	$(window).scroll(function () {
				// set distance user needs to scroll before we start fadeIn
		if ($(this).scrollTop() > 100) {
			$('.navbar-fixed').fadeIn(500);
		} else {
			$('.navbar-fixed').slideUp(1500);
		}
	});

})