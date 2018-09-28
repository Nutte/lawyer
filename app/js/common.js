
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
	
	$(".ack-adv-tabs-item__toggler").on('click', function () {
		//$(".ack-adv-tabs-item").removeClass('is-active');
		$(this).next('.ack-adv-tabs-item__content').slideToggle('fast');
		$(this).closest('.ack-adv-tabs-item').toggleClass('is-active');
		
		
        
		
	}); 
		
	

		var list = $(".img-h");
		$(list).on('mouseenter', function () {
			$(list).toggleClass('filter-img');
			$(this).removeClass('filter-img');
		}).on('mouseleave', function() {
			$(list).removeClass('filter-img');
		});



		$('.owl-carousel').owlCarousel({
		items:5,
		loop:false,
		margin:10,
		merge:true,
	
		responsive:{
		
        
        1000:{
            items:4,
		},
		0:{
			items:1,
		
	
        },
    }
});
});
