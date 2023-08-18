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
} from './desktopFormFilter/createdFilterInputFilter.js';
import {
  createdAndAddedCard,
  createSectionApartments,
} from './sections/createdSectionApartments.js';

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
