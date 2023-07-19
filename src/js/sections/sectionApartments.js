import { destinationsEl, mainEl } from '../main.js';
import {data} from '../constants/apartmentsConstants/cardsDataApartments.js';

const sectionElApartments = document.createElement('section'); // создал section
const ulElApartments = document.createElement('ul'); // создал tag ul
const button = document.createElement('button');// создал кнопку

export const createSectionApartments = () => {
  mainEl.insertBefore(sectionElApartments, destinationsEl); // добавил новую секцию в tag main в нужное место

  const titleElApartments = document.createElement('h2'); // создал tag h2
  titleElApartments.textContent = 'Homes guests loves'; // добавил контент в tag h2

  sectionElApartments.appendChild(titleElApartments); // добавил в tag section tag h2 с контентом
  sectionElApartments.appendChild(ulElApartments); // добавил tag ul в tag section за tag h2

  sectionElApartments.classList.add('container', 'apartments'); // добавил классы к tag section
  titleElApartments.classList.add('apartments__title'); // добавил классы к tag h2
  ulElApartments.classList.add('row'); // добавил классы к tag ul

  button.classList.add('button-next', 'apartments__button-next');// Добавил классы к кнопке
  button.setAttribute('type', 'button');// добавил атрибуты к кнопке
  button.setAttribute('aria-label', 'Next apartments');// добавил атрибуты к кнопке
  //добавил svg в кнопку
  button.innerHTML = `<svg class="button-next__icon">
            <use href="./src/images/svg/sprite.svg#arrow" />
          </svg>`;

  sectionElApartments.appendChild(button);// Добавил кнопку в секцию в конец

  const apartmentsCardsEl = document.querySelectorAll('.apartments__card'); // получил все карточки по классу

  //Создал функцию которая добавляет класс к последним четырем картинкам, чтобы они скрывались изначально
  const addClassNone = (cards) => {
    cards.forEach((card, index) => {
      if (index >= 4) {
        card.classList.toggle('apartments__card--none');
      }
    });
  };

  addClassNone(apartmentsCardsEl);

  // Функция которая по клику меняет картинки, добавляет класс и убирает его
  const nextApartments = (evt) => {

    apartmentsCardsEl.forEach((card, index) => {
      if (index <= 3) {
        card.classList.toggle('apartments__card--none');
      }
      else if (index >= 4) {
        card.classList.toggle('apartments__card--none');
      }
    });
  };

  button.addEventListener('click', nextApartments);
};

//Создал функцию в которой создается карточка и добавляется в tag Ul
export const createdAndAddedCards = () => {
//создал функцию которая принимает объект с атрибутами отеля и создает карточку одного отеля)
  const createHotelCard = ({ imageUrl, name, city, country }) => {
    return `<li class="col-lg-3 col-md-6 col-sm-3 apartments__card">
    <a class="link apartments__link" href="#" target="_blank">
      <img class="images apartments__img"
       src=${imageUrl}
         alt=${name}/>
      ${name}
    </a>
    <h3 class="apartments__subtitle">${city}, ${country}</h3>
  </li>`;
  };

  //принимает массив объектов и добавляет Отели в Ul по очереди
  const addedCard = (apartments) => {
    apartments.forEach((apartment) => {
      const cardApartment = createHotelCard(apartment);
      ulElApartments.innerHTML += cardApartment;
    });
  };

  addedCard(data);
};

