import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

export const getSwiperCoverflow = () => {
  return new Swiper('.swiper__coverflow', {
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
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enable:true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
    },
    watchOverflow: true,
  });
};

export const getSwiperSlides = () => {
  return new Swiper('.swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enable:true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
    },
  });
};
