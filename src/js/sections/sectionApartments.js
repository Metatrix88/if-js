const destinationsEl = document.getElementById('destinations'); // получил секцию destinations по id
const mainEl = document.getElementById('main'); // получил tag main по id

const sectionElApartments = document.createElement('section'); // создал section
const ulElApartments = document.createElement('ul'); // создал tag ul
const button = document.createElement('button'); // создал кнопку

// Создаю секцию Apartments
const createSectionApartments = () => {
  mainEl.insertBefore(sectionElApartments, destinationsEl); // добавил новую секцию в tag main в нужное место

  const titleElApartments = document.createElement('h2'); // создал tag h2
  titleElApartments.textContent = 'Homes guests loves'; // добавил контент в tag h2

  sectionElApartments.appendChild(titleElApartments); // добавил в tag section tag h2 с контентом
  sectionElApartments.appendChild(ulElApartments); // добавил tag ul в tag section за tag h2

  sectionElApartments.classList.add('container', 'apartments'); // добавил классы к tag section
  titleElApartments.classList.add('apartments__title'); // добавил классы к tag h2
  ulElApartments.classList.add('row'); // добавил классы к tag ul

  button.classList.add('button-next', 'apartments__button-next'); // Добавил классы к кнопке
  button.setAttribute('type', 'button'); // добавил атрибуты к кнопке
  button.setAttribute('aria-label', 'Next apartments'); // добавил атрибуты к кнопке
  //добавил svg в кнопку
  button.innerHTML = `<svg class="button-next__icon">
            <use href="./src/images/svg/sprite.svg#arrow" />
          </svg>`;

  sectionElApartments.appendChild(button); // Добавил кнопку в секцию в конец
};

// Функция которая достает данные по ссылке
const getPopularHotels = () =>
  fetch('https://if-student-api.onrender.com/api/hotels/popular')
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.error('Error!!!', e.message);
    });

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

// принимает массив объектов и добавляет Отели в Ul по очереди
const addedCard = (apartments) => {
  apartments.forEach((apartment) => {
    const cardApartment = createHotelCard(apartment);
    ulElApartments.innerHTML += cardApartment;
  });
};

//Создал функцию которая добавляет класс к последним картинкам, чтобы они скрывались изначально
const addClassNone = (cards) => {
  cards.forEach((card, index) => {
    if (index >= 4) {
      card.classList.toggle('apartments__card--none');
    }
  });
};

//Сортировка отелей методом пузырька
const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1].name > arr[j].name) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// функция которая вызывает функции выше
async function createdAndAddedCard() {
  const dataStorage = sessionStorage.getItem('hotels');

  if (dataStorage === null) {
    const data = await getPopularHotels();

    await bubbleSort(data);

    await addedCard(data);

    sessionStorage.setItem('hotels', JSON.stringify(data));
  } else {
    const dataInSessionStorage = JSON.parse(dataStorage);

    await bubbleSort(dataInSessionStorage);
    await addedCard(dataInSessionStorage);
  }

  const apartmentsCardsEl = document.querySelectorAll('.apartments__card'); // получил все карточки по классу

  // Функция которая по клику меняет картинки, добавляет класс и убирает его
  const nextApartments = () => {
    apartmentsCardsEl.forEach((card, index) => {
      if (index <= 3) {
        card.classList.toggle('apartments__card--none');
      } else if (index >= 4) {
        card.classList.toggle('apartments__card--none');
      }
    });
  };

  addClassNone(apartmentsCardsEl);
  button.addEventListener('click', nextApartments);
}

createdAndAddedCard();
createSectionApartments();
