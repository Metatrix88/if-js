import Swiper from '../libraries/swiper/swiper-bundle.min.mjs';
import { Navigation, Pagination } from '../libraries/swiper/modules';

export const getSwiperCoverflow = () => {
  return new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export const getSwiperSlides = () => {
  return new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
