import { hotels } from './constants/constantsLesson6.js';

// Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
// создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное функции слово палиндромом или нет;
// теперь уже зная как работать со строками и массивами запишите реализацию этого метода в одну строку.
export const myFuncPol = (str) => {
  return str === str.split('').reverse().join('');
};

// Поиск объектов размещения:
//   дан массив;
// напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения в массиве по любому из полей;
// верните масcив строк в формате: страна, город, отель;
// зная, как работать с массивами, сократите вашу функцию, избавившись от цикла for.
export const searchObject = (str) => {
  const lowerStr = str.toLowerCase();
  let result = [];
  const newArrHotels = hotels.filter(({ name, city, country }) => {
    const nameLowerCase = name.toLowerCase();
    const cityLowerCase = city.toLowerCase();
    const countryLowerCase = country.toLowerCase();
    const matched =
      nameLowerCase.includes(lowerStr) ||
      cityLowerCase.includes(lowerStr) ||
      countryLowerCase.includes(lowerStr);

    return matched;
  });

  if (newArrHotels.length === 0) {
    return 'Совпадений не найдено';
  }

  result = newArrHotels.map((element) => {
    return `${element.country}, ${element.city}, ${element.name}`;
  });
  return result;
};

export const getCitiesAndCountries = (arr) => {
  const obj = {};
  // Получаю массив всех стран которые есть
  const countriesArr = arr.map((element) => {
    return element.country;
  });
  // Получаю уникальный массив из стран
  const countries = countriesArr.filter((el, index) => {
    return countriesArr.indexOf(el) === index;
  });
  // Прохожу циклом по массиву и сравниваю страны если страна из уникального массива равна стране из ибщего
  // то создаю массив городов и пушу туда города этой страны. Потом присваиваю этот список в качестве значения ключа страны
  // при этом фильтруя массивы городов и удаляя дубликаты
  for (let i = 0; i < countries.length; i++) {
    const cities = [];
    arr.filter((element) => {
      if (countries[i] === element.country) {
        cities.push(element.city);
      }
    });
    obj[countries[i]] = cities.filter((element, index) => {
      return cities.indexOf(element) === index;
    });
  }
  return obj;
};

export const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  const calendarMonth = [];
  let week = [];
  let day = 1 - dayOfWeek;

  while (calendarMonth.length < 5) {
    for (let i = 0; i < daysInWeek; i++) {
      if (day <= 0) {
        week.push(daysInMonth + day);
      } else if (day > daysInMonth) {
        week.push(day - daysInMonth);
      } else {
        week.push(day);
      }
      day++;
    }
    calendarMonth.push(week);
    week = [];
  }

  return calendarMonth;
};
