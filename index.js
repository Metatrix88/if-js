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
} from './src/js/desktopFormFilter/createdFilterInputFilter.js';
import {
  createdAndAddedCard,
  createSectionApartments,
} from './src/js/sections/createdSectionApartments.js';
import { desktopForm } from './src/js/constants-utils/constants.js';
import { searchHotels } from './src/js/desktopFormFilter/searchHotels.js';

//Фильтр и счетчики
inputFilterEl.addEventListener('click', countersFilter);
buttonPlusAdultsEl.addEventListener('click', counterPlusAdults);
buttonMinusAdultsEl.addEventListener('click', counterMinusAdults);
buttonPlusChildrenEl.addEventListener('click', counterPlusChildren);
buttonMinusChildrenEl.addEventListener('click', counterMinusChildren);
buttonPlusRoomsEl.addEventListener('click', counterPlusRooms);
buttonMinusRoomsEl.addEventListener('click', counterMinusRooms);

createdAndAddedCard();
createSectionApartments();

desktopForm.addEventListener('submit', searchHotels);
