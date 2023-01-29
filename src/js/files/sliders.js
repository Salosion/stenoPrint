/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
  if (document.querySelector('.hero__slider')) {
    new Swiper('.hero__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
      modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
      allowTouchMove: false,
			slidesPerView: 1,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
        el: '.slider-hero__pagination',
				clickable: false,
			},
			// Arrows
			navigation: {
        nextEl: '.slider-hero__next',
        prevEl: '.slider-hero__prev',
			},
			// breakpoints: {
			// 	320: {
			// 	},
			// 	768: {
			// 	},
			// 	992: {

			// 	},
			// 	1400: {
			// 	},
			// },
			on: {}
		});
	}

  if (document.querySelector('.blog-home__slider')) {
    new Swiper('.blog-home__slider', {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      /*
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      */
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 10,
      speed: 800,
      loop: true,
      preloadImages: true,
      //lazy: true,
      // Dotts
      pagination: {
        el: '.blog-home__slider-pag',
        clickable: false,
      },
      // Arrows
      navigation: {
        nextEl: '.nav-blog-home__next',
        prevEl: '.nav-blog-home__prev',
      },
      breakpoints: {
      	320: {},
      	768:  { slidesPerView: 1, },
      	1024: { slidesPerView: 2, },
        1920: { slidesPerView: 3, },
      },
      on: {}
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});