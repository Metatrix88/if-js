import {
  createdAndAddedCards,
  createSectionApartments,
} from './sections/sectionApartments.js';
import {
  counterMinusAdults,
  counterMinusChildren,
  counterMinusRooms,
  counterPlusAdults,
  counterPlusChildren,
  counterPlusRooms,
  countersFilter,
  inputFilterEl,
  buttonPlusAdultsEl,
  buttonMinusAdultsEl,
  buttonPlusChildrenEl,
  buttonMinusChildrenEl,
  buttonPlusRoomsEl,
  buttonMinusRoomsEl,
} from './desktopFormFilter/filter.js';

export const destinationsEl = document.getElementById('destinations'); // получил секцию destinations по id
export const mainEl = document.getElementById('main'); // получил tag main по id

//Фильтр и счетчики
inputFilterEl.addEventListener('click', countersFilter);
buttonPlusAdultsEl.addEventListener('click', counterPlusAdults);
buttonMinusAdultsEl.addEventListener('click', counterMinusAdults);
buttonPlusChildrenEl.addEventListener('click', counterPlusChildren);
buttonMinusChildrenEl.addEventListener('click', counterMinusChildren);
buttonPlusRoomsEl.addEventListener('click', counterPlusRooms);
buttonMinusRoomsEl.addEventListener('click', counterMinusRooms);

createdAndAddedCards();
createSectionApartments();
