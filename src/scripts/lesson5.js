// Преобразование формата даты:
//   в переменной date лежит дата в формате '2020-11-26';
//   преобразуйте эту дату в формат '26.11.2020';
//   функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.
export const getDate = (date) => {
  const re = /(?<year>\d+)\S(?<monch>\d+)\S(?<day>\d+)/;
  let corDate = '';
  const arrDate = date.split('-');
  if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 2 &&
    arrDate[2].length === 2
  ) {
    corDate = date.replace(re, '$<day>.$<monch>.$<year>');
    return corDate;
  } else if (
    arrDate[0].length !== 4 ||
    arrDate[1].length > 2 ||
    arrDate[2].length > 2
  ) {
    return 'Введите дату согласно шаблону: гггг-мм-дд';
  } else if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 1 &&
    arrDate[2].length === 1
  ) {
    corDate = date.replace(re, '0$<day>.0$<monch>.$<year>');
    return corDate;
  } else if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 1 &&
    arrDate[2].length === 2
  ) {
    corDate = date.replace(re, '$<day>.0$<monch>.$<year>');
    return corDate;
  } else if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 2 &&
    arrDate[2].length === 1
  ) {
    corDate = date.replace(re, '0$<day>.$<monch>.$<year>');
    return corDate;
  }
};

// Поиск объектов размещения:
//   дан массив;
//   напишите функцию поиска, которая будет принимать строку;
//   по полученной строке найдите все совпадения в массиве;
//   верните список строк в формате: страна, город, отель.
export const getObject = (value) => {
  const data = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];
  let result = '';
  const lowerVal = value.toLowerCase();
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].country.toLowerCase().match(lowerVal) ||
      data[i].city.toLowerCase().match(lowerVal) ||
      data[i].hotel.toLowerCase().match(lowerVal)
    ) {
      result += `${data[i].country}, ${data[i].city}, ${data[i].hotel}; `;
    }
  }
  return result;
};
