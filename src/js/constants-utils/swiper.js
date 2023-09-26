// core version + navigation, pagination modules:
//import Swiper from '../../../node_modules/swiper/swiper-bundle.min.mjs';
import { Navigation, Pagination } from '../../../node_modules/swiper/modules';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

export const getSwiper = () => {
  return new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
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
