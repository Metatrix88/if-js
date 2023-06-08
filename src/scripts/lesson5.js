// Преобразование формата даты:
//   в переменной date лежит дата в формате '2020-11-26';
//   преобразуйте эту дату в формат '26.11.2020';
//   функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.
export const getDate = (date) => {
  const re = /(?<day>\d+)\S(?<monch>\d+)\S(?<year>\d+)/;
  const corDate = date.split('-').reverse();
    if (corDate[0].length > 2 || corDate[1].length > 2 || corDate[2].length !== 4) {
      return 'Введите дату согласно шаблону: гггг-мм-дд';
    }
    if (corDate[0].length === 1 && corDate[1].length === 1) {
      return corDate.join('.').replace(re, '0$<day>.0$<monch>.$<year>' );
    }
    if (corDate[0].length === 1) {
      return corDate.join('.').replace(re, '0$<day>.$<monch>.$<year>' );
    }
    if (corDate[1].length === 1) {
      return corDate.join('.').replace(re, '$<day>.0$<monch>.$<year>' );
    }
  return corDate.join('.');
};

const date = '2020-13-04';

console.log(getDate(date));

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
    const country = data[i].country.toLowerCase();
    const city = data[i].city.toLowerCase();
    const hotel = data[i].hotel.toLowerCase();
    if ( country.includes(lowerVal) || city.includes(lowerVal) || hotel.includes(lowerVal)
    ) {
      result += `${data[i].country}, ${data[i].city}, ${data[i].hotel}; `;
    }
  }
  return result;
};
