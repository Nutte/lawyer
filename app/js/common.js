
$(function() {
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
		if(screen.width > 900){
		windowTop > 100 ? $('#logo').css('width','200px') : $('#logo').css('width','242px');
		
		windowTop > 100 ? $('#slogan').removeClass('sloganShadow') : $('#slogan').addClass('sloganShadow');
		windowTop > 100 ? $('#slogan').css('font-size','14px') : $('#slogan').css('font-size','18px');
	}
		
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
		


	$(document).ready(function() {
		  $('#accordeon .acc-head').on('click', f_acc);	  
	  });	  
	  function f_acc(){

      var th = $(this),
			item = th.closest('.ack-adv-tabs'),
			itemMaxHeight = 0;

            item.toggleClass('is-active').siblings().removeClass('is-active');

			th.next().slideToggle('fast').addClass('is-opened').closest(item).siblings().find('.is-opened').slideUp('fast').removeClass('is-opened');

			item.siblings().each(function () { 

				if ( $(this).outerHeight() > itemMaxHeight ) {

					itemMaxHeight = $(this).outerHeight();

				} 

			 });

			if ( $(window).width() < 993 ) {

				$('html,body').animate({
					scrollTop: $(this).offset().top - itemMaxHeight - 100
				}, 200);

			} 

     }

		var list = $(".img-h");
		$(list).on('mouseenter', function () {
			$(list).toggleClass('filter-img');
			$(this).removeClass('filter-img');
		}).on('mouseleave', function() {
			$(list).removeClass('filter-img');
		});



		$('.owl-carousel').owlCarousel({
			loop:false,
		margin:10,
		merge:true,
	responsive:{
1000:{
			items:4,
			mouseDrag: false,
			touchDrag: true,
			loop:false,
		},
		0:{
		items:1,
		
        },
    }
});


	function waypoints() {

		var slogan = $("#slogan"),
			waypoint = $('[data-waypoint]'); 
		
		if ( $(window).width() < 992 ) {

			$(window).on('scroll', function() {

				slogan.text( 'Сложно, дорого, но помочь можно' );
	
				waypoint.each(function () {
	
					if ( $(window).scrollTop() >= $(this).offset().top - 135 && $(window).scrollTop() < $(this).offset().top + $(this).outerHeight() ) {
	
						slogan.text( $(this).attr('data-text') );
		
					} 
	
				});
	
			});

		}

	}

	waypoints();

});
