
$(function() {
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
		windowTop > 100 ? $('#logo').css('width','200px') : $('#logo').css('width','242px');
		windowTop > 100 ? $('#slogan').removeClass('sloganShadow') : $('#slogan').addClass('sloganShadow');
		windowTop > 100 ? $('#slogan').css('font-size','14px') : $('#slogan').css('font-size','18px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	

});
