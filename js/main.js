var topMenuMobile = document.getElementsByClassName("main__catalog-top")[0];
var btnMenuMobile = document.getElementsByClassName("main__catalog-btn")[0];
var menuMobile = document.getElementsByClassName("main__catalog-dropdown")[0];


topMenuMobile.addEventListener("click", function(){
	menuMobile.classList.toggle("active");
	btnMenuMobile.classList.toggle("active");

}, false);





var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	height: 333,
	width: 576,
	loop: true,
	autoplay: true,
	effect: 'fade',
	autoplay: {
		delay: 3000,
	},
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});