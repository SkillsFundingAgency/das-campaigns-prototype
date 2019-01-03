$(window).scroll(function(){
	if ($(this).scrollTop() > 0) {
		$('header .header').addClass('active');
	} else {
		$('header .header').removeClass('active');
	}
});
