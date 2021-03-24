document.addEventListener("DOMContentLoaded", function(event) {

	// Preview slider
	const swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		effect: 'fade',
		speed: 1000,
		autoplay: {
			delay: 6000,
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

	// Add to cart buttons change text
	function cartBtn() {
		let btnAddedText = document.querySelectorAll('.btn-added');
		btnAddedText.forEach((el) => {
			el.textContent = 'Добавлено';
		});

		let btnAddText = document.querySelectorAll('.btn-add');
		btnAddText.textContent = 'В корзину';
		btnAddText.forEach((el) => {
			el.textContent = 'В корзину';
		});
	}
	cartBtn();

	let myBtns = document.querySelectorAll('.categories-item__btn');
	myBtns.forEach((btn) => {
		btn.addEventListener('DOMElementNameChanged', () => {
			btn.classList.toggle('btn-added');
			btn.classList.toggle('btn-add');
			cartBtn();
		});
	});

	// Sliders of different categories
	let sliderCategories = document.querySelectorAll('.categories__slider');
	sliderCategories.forEach((el) => {
		var sliderCategory = new Swiper(el, {
			wrapperClass: 'categories__slider-wrapper',
			slideClass: 'categories__slider-slide',
			slidesPerView: 'auto',
			spaceBetween: 29,
			navigation: {
				nextEl: el.parentElement.querySelector('.categories__slide-btnnext'),
				prevEl: el.parentElement.querySelector('.categories__slide-btnprev'),
			}
		});
	});

	//Bestseller slider
	const HitSlider = new Swiper('.hit__slider', {
		wrapperClass: 'hit__slider-wrapper',
		slideClass: 'hit__slider-slide',
		slidesPerView: 5,
		slidesPerGroup: 5,
		speed: 2000,
		loop: true,
		spaceBetween: 25,
		pagination: {
			el: '.hit__slider-pagination',
			type: 'bullets',
		},
	});
});


