




// ibg
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();


// burger menu

$(document).ready(function () {
	$(' .icon-menu').click(function (event) {
		$('.icon-menu , .menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//slides
if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		//autoplay: true;
		//infinite: false;
		dots: true,
		arrow: false,
		accessibility: false,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplaySpeed: 3000,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-next"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}