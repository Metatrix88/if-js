const { desktopForm } = document.forms;

const offerEl = document.getElementById('offer'); // получил секцию offer по id
const mainEl = document.getElementById('main'); // получил tag main по id

const sectionElAvailableHotels = document.createElement('section'); // создал section
const ulElAvailableHotel = document.createElement('ul'); // создал tag ul

// Создаю секцию Available Hotel
const createSectionApartments = () => {
  mainEl.insertBefore(sectionElAvailableHotels, offerEl); // добавил новую секцию в tag main в нужное место

  const titleElAvailable = document.createElement('h2'); // создал tag h2
  titleElAvailable.textContent = 'Available hotels'; // добавил контент в tag h2

  sectionElAvailableHotels.appendChild(titleElAvailable); // добавил в tag section tag h2 с контентом
  sectionElAvailableHotels.appendChild(ulElAvailableHotel); // добавил tag ul в tag section за tag h2

  sectionElAvailableHotels.classList.add('container', 'available'); // добавил классы к tag section
  titleElAvailable.classList.add('available__title'); // добавил классы к tag h2
  ulElAvailableHotel.classList.add('row'); // добавил классы к tag ul
};

// Функция которая достает данные по ссылке
const getHotelsServer = () =>
  fetch('https://if-student-api.onrender.com/api/hotels')
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.error('Error!!!', e.message);
    });

//Функция которая получает данные которые ввели и данные с сервера(список отелей) и отфильтровывает отели по тем данным которые ввели
const getHotelsFilter = (dataInput, hotels) => {
  const dataInputLower = dataInput.toLowerCase();

  const filterHotel = hotels.filter((hotel) => {
    const dataHotelNameLower = hotel.name.toLowerCase();
    const dataHotelCityLower = hotel.city.toLowerCase();
    const dataHotelCountryLower = hotel.country.toLowerCase();

    if (
      dataHotelNameLower.includes(dataInputLower) ||
      dataHotelCityLower.includes(dataInputLower) ||
      dataHotelCountryLower.includes(dataInputLower)
    ) {
      return hotel;
    }
  });

  return filterHotel;
};

//создал функцию которая принимает объект с атрибутами отеля и создает карточку одного отеля)
const createHotelCardAvailable = ({ imageUrl, name, city, country }) => {
  return `<li class="col-lg-3 col-md-6 col-sm-3 available__card">
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
const addHotelsAvailable = (hotels) => {
  hotels.forEach((hotel) => {
    const cardAvailable = createHotelCardAvailable(hotel);
    ulElAvailableHotel.innerHTML += cardAvailable;
  });
};

//Функция которая очищает секцию при каждом нажатии перед ее заполнением
const sectionClear = () => {
  const sectionAvailableEl = document.querySelector('.available');
  if (sectionAvailableEl) {
    sectionElAvailableHotels.innerHTML = '';
  }
  if (ulElAvailableHotel.children.length >= 1) {
    ulElAvailableHotel.innerHTML = '';
  }
};

const searchHotels = async (e) => {
  e.preventDefault();

  sectionClear();
  const desktopFormInputCity = desktopForm.city.value;
  const hotels = await getHotelsServer();

  await createSectionApartments();
  addHotelsAvailable(getHotelsFilter(desktopFormInputCity, hotels));
};

desktopForm.addEventListener('submit', searchHotels);
