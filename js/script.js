const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');const plates = document.querySelectorAll('.plate');
const ourMenu = document.querySelector('#our-menu');
const atmosphereTitle = document.querySelector('#atmosphere-title');
const exposition = document.querySelector('.exposition');
const founder = document.querySelector('.founder');
const servicesBtn = document.querySelector('#services-button');
const pizzasTitle = document.querySelector('#pizzas-title');
const dishes = document.querySelectorAll('.dish');
const dishTitle = document.querySelector('#best-dish-title')
const saladTitle = document.querySelector('#salad-title');
const contactBtn = document.querySelector('#contact-button');
const commentsTitle = document.querySelector('#comments-title');

let plateEven = [];
let plateOdd = [];

let dishEven = [];
let dishOdd = [];

// splitting array on even and odd index
plates.forEach((plate, index) => index  % 2 == 0 ? plateEven.push(plate) : plateOdd.push(plate));
dishes.forEach((dish, index) => index  % 2 == 0 ? dishEven.push(dish) : dishOdd.push(dish));

// Array of pizza's images
const imgArr = [
	'slide-1-1920x753.png',
	'slide-2-1920x753.png',
	'slide-3-1920x753.png',
	'slide-4-1920x753.png'
]

// changing image under arrows when you click to previous pizza
function previousArrowImg() {
	const currentUrl = slider.getAttribute('style').split('img/')[1].split('")')[0];
	for (let i = 0; i < imgArr.length; i++) {
		if (currentUrl === imgArr[i]) {
			if (i < imgArr.length - 1 && i != 0) { 
				rightArrow.children[2].setAttribute('src', `img/${imgArr[i+1]}`);
				leftArrow.children[2].setAttribute('src', `img/${imgArr[i-1]}`);
			}
			else if (i == 0) { // if you are at the start of an array
				rightArrow.children[2].setAttribute('src', `img/${imgArr[i+1]}`);
				leftArrow.children[2].setAttribute('src', `img/${imgArr[imgArr.length - 1]}`);
			}
			else  { // if you are at the end of an array
				rightArrow.children[2].setAttribute('src', `img/${imgArr[0]}`);
				leftArrow.children[2].setAttribute('src', `img/${imgArr[i-1]}`);
			}
			break;
		}
	}
}

// Set previous image as main
function previousImg() {
	const currentImg = getComputedStyle(slider).backgroundImage.split('img/')[1].split('")')[0];
	for (let i = 0; i < imgArr.length; i++) {
		if (currentImg === imgArr[i]) {
			if (i == 0) { // if you are at the end of an array
				slider.style.backgroundImage = `url(../img/${imgArr[imgArr.length-1]})`; 
			} else {
				slider.style.backgroundImage = `url(../img/${imgArr[i-1]})`;
			}
			previousArrowImg();
			break;
		}
	}
}

// changing image under arrows when you click to next pizza
function nextArrowImg() {
	const currentUrl = slider.getAttribute('style').split('img/')[1].split('")')[0];
	for (let i = 0; i < imgArr.length; i++) {
		if (currentUrl === imgArr[i]) {
			if (i < imgArr.length - 1 && i != 0) { 
				rightArrow.children[2].setAttribute('src', `img/${imgArr[i+1]}`);
				leftArrow.children[2].setAttribute('src', `img/${imgArr[i-1]}`);
			}
			else if (i == imgArr.length - 1) { // if you are at the end of an array
				rightArrow.children[2].setAttribute('src', `img/${imgArr[0]}`);
				leftArrow.children[2].setAttribute('src', `img/${imgArr[i-1]}`);
			}
			else { // if you are at the start of an array
				rightArrow.children[2].setAttribute('src', `img/${imgArr[i+1]}`);
				leftArrow.children[2].setAttribute('src', `img/${imgArr[imgArr.length - 1]}`);
			}
			break;
		}
	}
}

// Set next image as main
function nextImg() {
	const currentImg = getComputedStyle(slider).backgroundImage.split('img/')[1].split('")')[0];
	for (let i = 0; i < imgArr.length; i++) {
		if (currentImg === imgArr[i]) {
			if (i < imgArr.length - 1) {
				slider.style.backgroundImage = `url(../img/${imgArr[i+1]})`;
			} else { // if you are at the end of an array
				slider.style.backgroundImage = `url(../img/${imgArr[0]})`;
			}
			nextArrowImg();
			break;
		}
	}
}

// Event listeners for button
rightArrow.addEventListener('click', nextImg);
leftArrow.addEventListener('click', previousImg);

// Functions that are starting animation
function animation(element, animationName) {
	if (!element.classList.contains(animationName)) { // checking whether to run the animation
		if ((window.innerHeight + window.scrollY) > element.offsetTop - 20) { // starting animation if your window lower than position of element
			element.classList.add(animationName);
		}
	}
}

function doubleAnimation(firstElement, secondElement, firstAnimation, secondAnimation) {
	if (!firstElement[0].classList.contains(firstAnimation)) {
		if ((window.innerHeight + window.scrollY) > firstElement[0].offsetTop - 20) {
			firstElement.forEach((elem) => elem.classList.add(firstAnimation));
			secondElement.forEach((elem) => elem.classList.add(secondAnimation));
		}
	}

}

// function that is starting on scroll
function launchAnimations() {
	animation(ourMenu, 'slideOutDown');
	doubleAnimation(plateEven, plateOdd, 'slideOutDown', 'slideOutUp');
	animation(atmosphereTitle, 'slideOutDown');
	animation(exposition, 'slideOutLeft');
	animation(founder, 'slideOutRight');
	animation(servicesBtn, 'slideOutUp');
	animation(pizzasTitle, 'slideOutUp');
	doubleAnimation(dishEven, dishOdd, 'slideOutRight', 'slideOutLeft');
	animation(dishTitle, 'slideOutLeft');
	animation(saladTitle, 'slideOutUp');
	animation(contactBtn, 'slideOutRight');
	animation(commentsTitle, 'slideOutRight')
}

// Event listeners for animations
window.addEventListener('scroll', launchAnimations);

// jQuery carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:45,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});