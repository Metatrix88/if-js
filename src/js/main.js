import { data } from './constants/cardsData.js';

const destinationsEl = document.getElementById('destinations'); // получил секцию destinations по id
const mainEl = document.getElementById('main');// получил tag main по id

const sectionElApartments = document.createElement('section'); // создал section
const ulElApartments = document.createElement('ul');// создал tag ul

mainEl.insertBefore(sectionElApartments, destinationsEl);// добавил новую секцию в tag main в нужное место

const titleElApartments = document.createElement('h2');// создал tag h2
titleElApartments.textContent = 'Homes guests loves';// добавил контент в tag h2


sectionElApartments.appendChild(titleElApartments);// добавил в tag section tag h2 с контентом
sectionElApartments.appendChild(ulElApartments);// добавил tag ul в tag section за tag h2

sectionElApartments.classList.add('container', 'apartments');// добавил классы к tag section
titleElApartments.classList.add('apartments__title');// добавил классы к tag h2
ulElApartments.classList.add('row');// добавил классы к tag ul

const createHotelCard = ({imageUrl, name, city, country }) => {
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

const addedCard = (apartments) => {
  apartments.forEach((apartment) => {
    const cardApartment = createHotelCard(apartment);
    ulElApartments.innerHTML += cardApartment;
  });
};

addedCard(data);

const button = document.createElement('button');
button.classList.add('button-next', 'apartments__button-next');
button.setAttribute('type', 'button');
button.setAttribute('aria-label', 'Next apartments');
button.innerHTML = `<svg class="button-next__icon">
            <use href="./src/images/svg/sprite.svg#arrow" />
          </svg>`;

sectionElApartments.appendChild(button);
console.log(button)