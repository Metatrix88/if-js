import { desktopForm, mainEl, offerEl } from '../constants-utils/constants.js';

const sectionElAvailableHotels = document.createElement('section'); // создал section
const ulElAvailableHotel = document.createElement('ul'); // создал tag ul
const divElSwiperWrapper = document.createElement('div'); // создал tag div
const divElPagination = document.createElement('div'); // создал tag div
const divElSwiperButPrev = document.createElement('div'); // создал tag div
const divElSwiperButNext = document.createElement('div'); // создал tag div

//создал функцию которая принимает объект с атрибутами отеля и создает карточку одного отеля)
const createHotelCardAvailable = ({ imageUrl, name, city, country }) => {
  return `<li class="col-lg-3 col-md-6 col-sm-3 available__card swiper-slide">
      <a class="link available__link" href="#" target="_blank">
        <img class="images available__img"
         src=${imageUrl}
           alt=${name}/>
        ${name}
      </a>
      <h3 class="available__subtitle">${city}, ${country}</h3>
      </li>`;
};

// принимает массив объектов и добавляет Отели в Ul по очереди
export const addHotelsAvailable = (hotels) => {
  hotels.forEach((hotel) => {
    const cardAvailable = createHotelCardAvailable(hotel);
    ulElAvailableHotel.innerHTML += cardAvailable;
  });
};

// Функция которая очищает секцию при каждом нажатии перед ее заполнением
export const sectionClear = () => {
  const sectionAvailableEl = document.querySelector('.available');
  if (sectionAvailableEl) {
    sectionElAvailableHotels.innerHTML = '';
  }
  if (ulElAvailableHotel.children.length >= 1) {
    ulElAvailableHotel.innerHTML = '';
  }
};

//Функция которая получает значения селектов из формы desktop
const getValueSelect = () => {
  const valuesSelect = [];
  const selectEl = document.querySelectorAll('select.filter__children-select');
  const selectArr = Array.from(selectEl);
  selectArr.forEach((item) => {
    valuesSelect.push(item.value);
  });
  return valuesSelect.join(',');
};

export const createdURLSearchParams = (url) => {
  const desktopFormInputCity = desktopForm.city.value;

  const inputAdultsEl = document.getElementById('counter-adults').value;
  const valuesSelectInputChildren = getValueSelect();
  const inputRoomsEl = document.getElementById('counter-rooms').value;

  url.searchParams.set('search', `${desktopFormInputCity}`);
  url.searchParams.set('adults', `${inputAdultsEl}`);
  url.searchParams.set('children', `${valuesSelectInputChildren}`);
  url.searchParams.set('rooms', `${inputRoomsEl}`);
  return url;
};

// Создаю секцию Available Hotel
export const createSectionAvailable = () => {
  mainEl.insertBefore(sectionElAvailableHotels, offerEl); // добавил новую секцию в tag main в нужное место

  const titleElAvailable = document.createElement('h2'); // создал tag h2
  titleElAvailable.textContent = 'Available hotels'; // добавил контент в tag h2

  sectionElAvailableHotels.appendChild(titleElAvailable); // добавил в tag section tag h2 с контентом
  sectionElAvailableHotels.appendChild(divElSwiperWrapper); // добавил swiper обертку в tag section за tag h2
  divElSwiperWrapper.appendChild(ulElAvailableHotel); // добавил tag ul в swiper обертку за tag h2
  divElSwiperWrapper.appendChild(divElSwiperButPrev); // добавил div кнопку "назад" в swiper обертку за Pagination
  divElSwiperWrapper.appendChild(divElSwiperButNext); // добавил div кнопку "вперед" в swiper обертку за кнопкой назад
  divElSwiperWrapper.appendChild(divElPagination); // добавил Pagination в swiper обертку за tag ul

  sectionElAvailableHotels.classList.add('container', 'available'); // добавил классы к tag section
  titleElAvailable.classList.add('available__title'); // добавил классы к tag h2
  divElSwiperWrapper.classList.add('swiper', 'swiper__coverflow'); // добавил классы к обертке swiper
  ulElAvailableHotel.classList.add('swiper-wrapper'); // добавил классы к tag ul
  divElPagination.classList.add('swiper-pagination'); // добавил классы к Pagination
  divElSwiperButPrev.classList.add('swiper-button-prev'); // добавил классы к кнопке назад
  divElSwiperButNext.classList.add('swiper-button-next'); // добавил классы к кнопке вперед
};
