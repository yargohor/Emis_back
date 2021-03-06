$(function() {
	$(window).load(function(){
		var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
	 
		$('.portfolioFilter a').click(function(){
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		}); 
	});

	function openModal(){
		alert('hi');
	}

	/*Modal*/
	$('.openModal').on('click', function(e){
		e.preventDefault();
		var currentModal = $(this).attr("href");
		$(currentModal + ", .overlay").fadeIn(500);
		$('body').addClass('openedModal');
	});

	$('.overlay').on('click', function(e) {
		e.preventDefault();
		$('.modal, .overlay').fadeOut(100);
		$('body').removeClass('openedModal');
	});
	
	/*Slick*/
	$('.slideDiv').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		autoplay: true,
		autoplaySpeed: 2000
	});
	
	/*Mask*/
	$(document).ready(function() {
		$('input[name="phone"]').mask('+38 0(99) 999-99-99');
		$('button').on('click', function(event) {
			event.preventDefault();
		});
	});
	
	/*FORM*/
	$.ajaxSetup({
		url: 'http://ДОМЕН/controller/controller.php',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(){ 
			console.debug('Спасибо. Форма отправлена');
		},
		error: function(req, text, error){
			console.error('Что-то пошло не так: ' + text + ' | ' + error);
		},
		complete: function(){
			console.debug('Запрос полностью завершен!');
		}
	});
	
	$(function(){
		var currentId = $(this).attr("id");
		console.log(currentId);
		$(currentId).on('submit', function(e){
			e.preventDefault();
			var $that = $(this),
			formData = new FormData($that.get(0));
			$.ajax({
				contentType: false,
				processData: false,
				data: formData,
				success: function(json){
					if(json){
						//here we can some thing do with answer
					}
				}
			});
		});
	});

});
