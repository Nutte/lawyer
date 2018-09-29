
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
		$('#accordeon .acc-body').not($(this).next()).slideUp('400');
		$(this).next().slideToggle('fast');
		$(".ack-adv-tabs .ack-adv-tabs-item").removeClass('is-active');
		$(this).closest('.ack-adv-tabs-item').toggleClass('is-active');
	  }

	  /*$('#accordeon .acc-head').on('click', function() {
		if (!$(this).hasClass('is-active')) { // если класса нет
		  $(this).closest('.ack-adv-tabs-item').addClass('is-active'); // добавляем класс
		} else { // если есть
		  $(this).closest('.ack-adv-tabs-item').removeClass('is-active'); // убираем класс
		 
		}
	  }); */

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
});
