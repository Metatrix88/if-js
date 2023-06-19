// Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности

export const deepEqual = (object1, object2) => {
  const arrKeysObject1 = Object.getOwnPropertyNames(object1);
  const arrKeysObject2 = Object.getOwnPropertyNames(object2);

  if (arrKeysObject1.length !== arrKeysObject2.length) {
    return false;
  }

  for (let i = 0; i < arrKeysObject1.length; i++) {
    const key = arrKeysObject1[i];
    const isObject =
      typeof object1[key] === 'object' && typeof object2[key] === 'object';

    if (
      (!isObject && object1[key] !== object2[key]) ||
      (isObject && !deepEqual(object1[key], object2[key]))
    ) {
      return false;
    }
  }

  return true;
};

export const getCalendarMonthLesson7 = (daysInMonth, daysInWeek, dayOfWeek) => {
  const calendarMonth = [];
  let week = [];
  let day = 1 - dayOfWeek;

  while (calendarMonth.length < 5) {
    for (let i = 0; i < daysInWeek; i++) {
      if (day <= 0) {
        const dayWeek = {
          dayOfMonth: daysInMonth + day,
          notCurrentMonth: true,
          selectedDay: true,
        };
        week.push(dayWeek);
      } else if (day > daysInMonth) {
        const dayWeek = {
          dayOfMonth: day - daysInMonth,
          notCurrentMonth: true,
          selectedDay: true,
        };
        week.push(dayWeek);
      } else {
        const dayWeek = {
          dayOfMonth: day,
          notCurrentMonth: false,
          selectedDay: true,
        };
        week.push(dayWeek);
      }
      day++;
    }
    calendarMonth.push(week);
    week = [];
  }

  return calendarMonth;
};

