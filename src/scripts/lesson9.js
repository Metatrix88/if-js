const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  count: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.count < this.data.length) {
      return {
        done: false,
        value: this.data[this.count++],
      };
    }

    if (this.count === this.data.length) {
      this.count = 0;
      return {
        done: false,
        value: this.data[this.count++],
      };
    }
  },
};

const changeColor = (color) => (event) => {
  event.target.style.color = color.next().value;
};

text1.addEventListener('click', changeColor({ ...colors }));

text2.addEventListener('click', changeColor({ ...colors }));

text3.addEventListener('click', changeColor({ ...colors }));


const getCalendarMonthLesson7 = (
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  checkInDate,
  checkOutDate,
) => {
  const calendarMonth = [];
  let week = [];
  let day = 1 - dayOfWeek;
  const previousMonth =  32 - new Date(2023, 5, 32).getDate();

  // В цикле создаю каждый день в виде объекта и пушу в неделю, а потом неделю в месяц
  while (calendarMonth.length < 5) {
    for (let i = 0; i < daysInWeek; i++) {
      if (day <= 0) {
        const dayWeek = {
          dayOfMonth: previousMonth + day,
          notCurrentMonth: true,
          selectedDay: daysInMonth + day >= checkInDate,
        };
        week.push(dayWeek);
      } else if (day > daysInMonth) {
        const dayWeek = {
          dayOfMonth: day - daysInMonth,
          notCurrentMonth: true,
          selectedDay: day - daysInMonth <= checkOutDate,
        };
        week.push(dayWeek);
      } else {
        const dayWeek = {
          dayOfMonth: day,
          notCurrentMonth: false,
          selectedDay:
            (day <= checkInDate &&
              checkInDate > checkOutDate &&
              day <= checkOutDate) ||
            (day >= checkInDate && day <= checkOutDate),
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

const daysInMonth = 32 - new Date(2023, 6, 32).getDate(); // - количество дней в месяце
const dayOfWeek  = new Date(2023, 6, 1).getDay();// - с какого дня недели начинается июль


const daysInWeek = 7;
const checkInDate = 30;
const checkOutDate = 5;

const resultLesson9 = getCalendarMonthLesson7(
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  checkInDate,
  checkOutDate,
);
console.log(resultLesson9);