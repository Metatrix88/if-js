import {
  sectionClear,
  createdURLSearchParams,
  createSectionAvailable,
  addHotelsAvailable,
} from '../sections/createdSectionAvailable.js';
import { getPopularHotels } from '../constants-utils/helpers.js';
import { urlAllHotels } from '../constants-utils/constants.js';

export const searchHotels = async (e) => {
  e.preventDefault();

  sectionClear();

  const searchURL = await createdURLSearchParams(urlAllHotels);
  const hotels = await getPopularHotels(searchURL);
  await createSectionAvailable();
  await addHotelsAvailable(hotels);
};
