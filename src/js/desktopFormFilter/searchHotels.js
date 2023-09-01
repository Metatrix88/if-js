import {
  sectionClear,
  createdURLSearchParams,
  createSectionAvailable,
  addHotelsAvailable,
} from '../sections/createdSectionAvailable.js';
import { getPopularHotels } from '../constants-utils/helpers.js';
import { urlAllHotels } from '../constants-utils/constants.js';

// core version + navigation, pagination modules:
import Swiper from '../../../node_modules/swiper/swiper-bundle.min.mjs';
import { Navigation, Pagination } from '../../../node_modules/swiper/modules';

export const searchHotels = async (e) => {
  e.preventDefault();

  sectionClear();

  const searchURL = await createdURLSearchParams(urlAllHotels);
  const hotels = await getPopularHotels(searchURL);
  await createSectionAvailable();
  await addHotelsAvailable(hotels);

  const swiper = new Swiper('.swiper', {
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
