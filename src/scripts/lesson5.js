import { data } from './constants/constansLesson5.js';

// Преобразование формата даты:
//   в переменной date лежит дата в формате '2020-11-26';
//   преобразуйте эту дату в формат '26.11.2020';
//   функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.
export const getDate = (str) => {
  const re = /(?<day>\d+)\S(?<monch>\d+)\S(?<year>\d+)/;
  const date = str !== undefined && str !== '' && str !== null;
  if (!date) {
    return 'Вы не ввели дату';
  }
  const corDateArr = str.split('-').reverse();
  const isCorrectDate =
    corDateArr[0].length <= 2 &&
    corDateArr[1].length <= 2 &&
    corDateArr[2].length === 4;
  const isNotCorrectDay = corDateArr[0].length === 1;
  const isNotCorrectMonth = corDateArr[1].length === 1;
  if (!isCorrectDate || !date) {
    return 'Введите дату согласно шаблону: гггг-мм-дд';
  }
  if (isNotCorrectDay && isNotCorrectMonth) {
    return corDateArr.join('.').replace(re, '0$<day>.0$<monch>.$<year>');
  }
  if (isNotCorrectDay) {
    return corDateArr.join('.').replace(re, '0$<day>.$<monch>.$<year>');
  }
  if (isNotCorrectMonth) {
    return corDateArr.join('.').replace(re, '$<day>.0$<monch>.$<year>');
  }
  return corDateArr.join('.');
};

// Поиск объектов размещения:
//   дан массив;
//   напишите функцию поиска, которая будет принимать строку;
//   по полученной строке найдите все совпадения в массиве;
//   верните список строк в формате: страна, город, отель.
export const getObject = (value) => {
  let result = '';
  const lowerVal = value.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    const country = data[i].country.toLowerCase();
    const city = data[i].city.toLowerCase();
    const hotel = data[i].hotel.toLowerCase();
    if (
      country.includes(lowerVal) ||
      city.includes(lowerVal) ||
      hotel.includes(lowerVal)
    ) {
      result += `${data[i].country}, ${data[i].city}, ${data[i].hotel}; `;
    }
  }
  return result;
};
