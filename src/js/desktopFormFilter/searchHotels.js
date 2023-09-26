import {
  sectionClear,
  createdURLSearchParams,
  createSectionAvailable,
  addHotelsAvailable,
} from '../sections/createdSectionAvailable.js';
import { getPopularHotels } from '../constants-utils/helpers.js';
import { urlAllHotels } from '../constants-utils/constants.js';

import { getSwiper } from '../constants-utils/swiper.js';

export const searchHotels = async (e) => {
  e.preventDefault();

  sectionClear();

  const searchURL = await createdURLSearchParams(urlAllHotels);
  const hotels = await getPopularHotels(searchURL);
  await createSectionAvailable();
  await addHotelsAvailable(hotels);

  getSwiper();
};
