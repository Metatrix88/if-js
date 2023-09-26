import {
  destinationsEl,
  mainEl,
  urlPopularHotel,
} from '../constants-utils/constants.js';
import { getPopularHotels, bubbleSort } from '../constants-utils/helpers.js';
import { getSwiperSlides } from '../constants-utils/swiper.js';

const sectionElApartments = document.createElement('section'); // создал section
const ulElApartments = document.createElement('ul'); // создал tag ul
const divElSwiperWrapper = document.createElement('div'); // создал tag div
const divElPagination = document.createElement('div'); // создал tag div
const divElSwiperButPrev = document.createElement('div'); // создал tag div
const divElSwiperButNext = document.createElement('div'); // создал tag div
// const button = document.createElement('button'); // создал кнопку

// Создаю секцию Apartments
export const createSectionApartments = () => {
  mainEl.insertBefore(sectionElApartments, destinationsEl); // добавил новую секцию в tag main в нужное место

  const titleElApartments = document.createElement('h2'); // создал tag h2
  titleElApartments.textContent = 'Homes guests loves'; // добавил контент в tag h2

  sectionElApartments.appendChild(titleElApartments); // добавил в tag section tag h2 с контентом
  sectionElApartments.appendChild(divElSwiperWrapper); // добавил swiper обертку в tag section за tag h2
  divElSwiperWrapper.appendChild(ulElApartments); // добавил tag ul в swiper обертку за tag h2
  divElSwiperWrapper.appendChild(divElSwiperButPrev); // добавил div кнопку "назад" в swiper обертку за Pagination
  divElSwiperWrapper.appendChild(divElSwiperButNext); // добавил div кнопку "вперед" в swiper обертку за кнопкой назад
  divElSwiperWrapper.appendChild(divElPagination); // добавил Pagination в swiper обертку за tag ul

  sectionElApartments.classList.add('container', 'apartments'); // добавил классы к tag section
  titleElApartments.classList.add('apartments__title'); // добавил классы к tag h2
  divElSwiperWrapper.classList.add('swiper'); // добавил классы к обертке swiper
  ulElApartments.classList.add('swiper-wrapper'); // добавил классы к tag ul
  divElPagination.classList.add('swiper-pagination'); // добавил классы к Pagination
  divElSwiperButPrev.classList.add('swiper-button-prev'); // добавил классы к кнопке назад
  divElSwiperButNext.classList.add('swiper-button-next'); // добавил классы к кнопке вперед

  // button.classList.add('button-next', 'apartments__button-next'); // Добавил классы к кнопке
  // button.setAttribute('type', 'button'); // добавил атрибуты к кнопке
  // button.setAttribute('aria-label', 'Next apartments'); // добавил атрибуты к кнопке
  // //добавил svg в кнопку
  // button.innerHTML = `<svg class="button-next__icon">
  //           <use href="./src/images/svg/sprite.svg#arrow" />
  //         </svg>`;
  //
  // sectionElApartments.appendChild(button); // Добавил кнопку в секцию в конец
};

//создал функцию которая принимает объект с атрибутами отеля и создает карточку одного отеля)
const createHotelCard = ({ imageUrl, name, city, country }) => {
  return `<li class="col-lg-3 col-md-6 col-sm-3 apartments__card swiper-slide">
      <a class="link apartments__link" href="#" target="_blank">
        <img class="images apartments__img"
         src=${imageUrl}
           alt=${name}/>
        ${name}
      </a>
      <h3 class="apartments__subtitle">${city}, ${country}</h3>
      </li>`;
};

// принимает массив объектов и добавляет Отели в Ul по очереди
const addedCard = (apartments) => {
  apartments.forEach((apartment) => {
    const cardApartment = createHotelCard(apartment);
    ulElApartments.innerHTML += cardApartment;
  });
};

//Создал функцию которая добавляет класс к последним картинкам, чтобы они скрывались изначально
// const addClassNone = (cards) => {
//   cards.forEach((card, index) => {
//     if (index >= 4) {
//       card.classList.toggle('apartments__card--none');
//     }
//   });
// };

// функция которая вызывает функции выше
export const createdAndAddedCard = async () => {
  const dataStorage = sessionStorage.getItem('hotels');

  if (dataStorage === null) {
    const data = await getPopularHotels(urlPopularHotel);
    const sortHotels = await bubbleSort(data);
    await addedCard(sortHotels);
    sessionStorage.setItem('hotels', JSON.stringify(sortHotels));
  } else {
    const dataInSessionStorage = JSON.parse(dataStorage);
    await addedCard(dataInSessionStorage);
  }

  getSwiperSlides();

  // const apartmentsCardsEl = document.querySelectorAll('.apartments__card'); // получил все карточки по классу

  // Функция которая по клику меняет картинки, добавляет класс и убирает его
  // const nextApartments = () => {
  //   apartmentsCardsEl.forEach((card, index) => {
  //     if (index <= 3) {
  //       card.classList.toggle('apartments__card--none');
  //     } else if (index >= 4) {
  //       card.classList.toggle('apartments__card--none');
  //     }
  //   });
  // };

  // addClassNone(apartmentsCardsEl);
  // button.addEventListener('click', nextApartments);
};
