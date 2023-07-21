import {
  createdAndAddedCards,
  createSectionApartments,
} from './sections/sectionApartments.js';

export const destinationsEl = document.getElementById('destinations'); // получил секцию destinations по id
export const mainEl = document.getElementById('main'); // получил tag main по id

createdAndAddedCards();
createSectionApartments();
