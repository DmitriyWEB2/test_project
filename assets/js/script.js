$(document).ready(function(){

});

$(function() {
	//Intro

	$('.js__more_btn').on("click", function(){
		console.log('worked1');
		var target = $(this).attr('data-target'),
			dop_photo = $(this).attr('data-photo');
		console.log('worked1');
		if($(target).hasClass('active')){
			console.log('worked2');
			$(target).removeClass('active');
			$(dop_photo).removeClass('active');
			$(this).html('Показать больше');
		}else{
			console.log('worked3');
			$(target).addClass('active');
			$(dop_photo).addClass('active');
			$(this).html('Скрыть');
		};
	});
});