$('.nav-bar-main a').on('click', function() {
	$('.nav-bar-main a').removeClass('active');
	$(this).addClass('active');
})


let slider = $('.slider');
let viewer = $('.viewer');
let slogan = $('.slogan h1');
let description = $('.description p');
let menuButton = $('.menu-btn a');
let atmosphere = $('.atmosphere');
let atmosphereBG = $('.atmosphere img');
$(window).on('load', function() {
	slider.css({
		"height": viewer.css("height")
	});
	atmosphere.css({
		"height": atmosphereBG.css("height")
	});
	let textChange = setInterval (textAnimation, 5500);
	function textAnimation () {
		slogan.each(function () {
			if ($(this).hasClass('animated-up')) {
				$(this).removeClass('animated-up');
				$(this).addClass('hide');
			}
			else {
				$(this).removeClass('hide');
				$(this).addClass('animated-up');
			}
		})
		description.each(function () {
			if ($(this).hasClass('animated-left')) {
				$(this).removeClass('animated-left');
				$(this).addClass('hide');
			}
			else {
				$(this).removeClass('hide');
				$(this).addClass('animated-left');
			}
		})
		menuButton.each(function () {
			if ($(this).hasClass('animated-link')) {
				$(this).removeClass('animated-link');
				$(this).addClass('hide');
			}
			else {
				$(this).removeClass('hide');
				$(this).addClass('animated-link');
			}
		})
	}
});
$(window).resize(function() {
	slider.css({
		"height": viewer.css("height")
	});
	atmosphere.css({
		"height": atmosphereBG.css("height")
	});
});


let leftArrow = $('.left');
let rightArrow = $('.right');
let arrows = $('.arrow');
let slide = $('.slide');
function switchImg (){
	if ($(this).hasClass('viewer')) {
		let previewIndex = slide.index(this) - 1;
		if (previewIndex < 0) {
			previewIndex = slide.length - 1;
		}
		let nextIndex = slide.index(this) + 1;
		if (nextIndex > slide.length - 1) {
			nextIndex = 0;
		}
		leftArrow.children('.before')[0].attributes.src.textContent = slide[previewIndex].attributes.src.textContent;
		rightArrow.children('.before')[0].attributes.src.textContent = slide[nextIndex].attributes.src.textContent;
	}
}
slide.each(switchImg);
arrows.on('click', function() {
	let nextSlide = $(this).children('.before').attr('src');
	slide.removeClass('viewer');
	slide.each(function() {
		if ($(this).attr('src') == nextSlide) {
			$(this).addClass('viewer');
			slide.each(switchImg);
		}
	})
});


let plateEven = $('.plate:even');
let plateOdd = $('.plate:odd');
let ourMenu = $('.menu-container h1');
let slogan2 = $('.atmosphere-text h3');
let slogan3 = $('.pizzas h1');
let exposition = $('.exposition');
let founder = $('.founder');
let atmoBtn = $('.atmosphere-text a');
let dish = $('.dish');
let slogan4 = $('.best-dish-text h2');
let salad = $('.best-dish-text p');
let bestDishBtn = $('.best-dish-text a');
let slogan5 = $('.comments h1');
$(window).on('load', function(){
	ourMenu.each(function() {
		let ourMenuPosition = $(this).offset().top;
		let topOfWindow = $(window).scrollTop() + $(window).height();
		if (ourMenuPosition < topOfWindow - 20) {
			$(this).addClass('slideOutDown');
		}
	})
	plateEven.each(function() {
		let evenPosition = $(this).offset().top;
		let topOfWindow = $(window).scrollTop() + $(window).height();
		if (evenPosition < topOfWindow - 20) {
			$(this).addClass('slideOutDown');
		}
	})
	plateOdd.each(function() {
		let oddPosition = $(this).offset().top;
		let topOfWindow = $(window).scrollTop() + $(window).height();
		if (oddPosition < topOfWindow - 20) {
			$(this).addClass('slideOutUp');
		}
	})
})
$(window).scroll( function () {
	ourMenu.each(function() {
		let ourMenuPosition = $(this).offset().top;
		let topOfWindow = $(window).scrollTop() + $(window).height();
		if (ourMenuPosition < topOfWindow - 20) {
			$(this).addClass('slideOutDown');
		}
	})
	plateEven.each(function() {
		let evenPosition = $(this).offset().top;
		let topOfWindow = $(window).scrollTop() + $(window).height();
		if (evenPosition < topOfWindow - 20) {
			$(this).addClass('slideOutDown');
		}
	})
	plateOdd.each(function() {
		let oddPosition = $(this).offset().top;
		let topOfWindow = $(window).scrollTop() + $(window).height();
		if (oddPosition < topOfWindow - 20) {
			$(this).addClass('slideOutUp');
		}
	})
	let slogan2Position = slogan2.offset().top;
	let topOfWindow = $(window).scrollTop() + $(window).height();
	if (slogan2Position < topOfWindow - 20) {
		slogan2.addClass('slideOutDown');
	}
	let expositionPosition = exposition.offset().top;
	if (expositionPosition < topOfWindow - 20) {
		exposition.addClass('slideOutLeft');
	}
	let founderPosition = founder.offset().top;
	if (founderPosition < topOfWindow - 20) {
		founder.addClass('slideOutRight');
	}
	let atmoBtnPosition = atmoBtn.offset().top;
	if (atmoBtnPosition < topOfWindow - 20) {
		atmoBtn.addClass('slideOutUp');
	}
	let slogan3Position = slogan3.offset().top;
	if (slogan3Position < topOfWindow - 20) {
		slogan3.addClass('slideOutUp');
	}
	dish.each(function () {
		let dishPosition = $(this).offset().top;
		let topOfWindow = $(window).scrollTop() + $(window).height();
		if (dishPosition < topOfWindow - 20) {
			$(this).addClass('slideOutRight');
		}
	})
	let slogan4Position = slogan4.offset().top;
	if (slogan4Position < topOfWindow - 20) {
		slogan4.addClass('slideOutLeft');
	}
	let saladPosition = salad.offset().top;
	if (saladPosition < topOfWindow - 20) {
		salad.addClass('slideOutUp');
	}
	let bestDishBtnPosition = bestDishBtn.offset().top;
	if (bestDishBtnPosition < topOfWindow - 20) {
		bestDishBtn.addClass('slideOutRight');
	}
	let slogan5Position = slogan5.offset().top;
	if (slogan5Position < topOfWindow - 20) {
		slogan5.addClass('slideOutRight');
	}
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:45,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
