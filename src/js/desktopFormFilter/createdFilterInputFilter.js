export const inputFilterEl = document.querySelector(
  '.desktop-form__input-filter',
);
export const buttonMinusAdultsEl = document.querySelector(
  '.counter__button--minus.counter__button-adults',
);
export const buttonMinusChildrenEl = document.querySelector(
  '.counter__button--minus.counter__button-children',
);
export const buttonMinusRoomsEl = document.querySelector(
  '.counter__button--minus.counter__button-rooms',
);
export const buttonPlusAdultsEl = document.querySelector(
  '.counter__button--plus.counter__button-adults',
);
export const buttonPlusChildrenEl = document.querySelector(
  '.counter__button--plus.counter__button-children',
);
export const buttonPlusRoomsEl = document.querySelector(
  '.counter__button--plus.counter__button-rooms',
);
let inputAdultsEl = document.querySelector('.counter__input--adults').value;
let inputChildrenEl = document.querySelector('.counter__input--children').value;
let inputRoomsEl = document.querySelector('.counter__input--rooms').value;
const counterChildrenInfoEl = document.querySelector('.filter__children-info');

// открывает панель со счетчиками
export const countersFilter = (e) => {
  const countersEl = document.querySelector('.desktop-form__filter');
  const input = e.target.closest('.desktop-form__input-filter');

  if (input) {
    countersEl.classList.toggle('desktop-form__filter--disabled');
  }
};

//Функция которая передает значения счетчиков в основной инпут
export const getValueCounters = () => {
  document.querySelector(
    '.desktop-form__input-filter',
  ).value = `${inputAdultsEl} Adults — ${inputChildrenEl} Children — ${inputRoomsEl} Room`;
};

// Функция которая создает и наполняет option select
export const createSelect = () => {
  const selectEl = document.createElement('select');
  selectEl.classList.add('filter__children-select');

  for (let i = 0; i <= 17; i++) {
    const optionEl = document.createElement('option');
    optionEl.textContent = `${i} years old`;
    optionEl.setAttribute('value', `${i}`);
    selectEl.appendChild(optionEl);
  }
  return selectEl;
};

// Функция увеличивает Adults и ограничивает до 30!
export const counterPlusAdults = (e) => {
  const target = e.target;

  if (target.classList.contains('counter__button--plus')) {
    inputAdultsEl++;
  }

  if (inputAdultsEl >= 30) {
    inputAdultsEl = 30;
  }

  if (inputAdultsEl > 1) {
    buttonMinusAdultsEl.classList.remove('button-disabled');
  }

  target.closest('.counter').querySelector('.counter__input--adults').value =
    inputAdultsEl;
  getValueCounters();
};

// Функция уменьшает Adults и ограничивает до 1, так же делает кнопку минус серой при значении 1!
export const counterMinusAdults = (e) => {
  const target = e.target;

  if (target.classList.contains('counter__button--minus')) {
    --inputAdultsEl;
  }

  if (inputAdultsEl <= 1) {
    inputAdultsEl = 1;
    buttonMinusAdultsEl.classList.add('button-disabled');
  }

  target.closest('.counter').querySelector('.counter__input--adults').value =
    inputAdultsEl;
  getValueCounters();
};

// Функция увеличивает Children и ограничивает до 10!
export const counterPlusChildren = (e) => {
  const target = e.target;

  if (target.classList.contains('counter__button--plus')) {
    inputChildrenEl++;
  }

  if (inputChildrenEl >= 10) {
    inputChildrenEl = 10;
  }

  if (inputChildrenEl >= 0) {
    buttonMinusChildrenEl.classList.remove('button-disabled');
    counterChildrenInfoEl.classList.remove('filter__children--disabled');
  }

  if (
    target
      .closest('.counter')
      .querySelector('.counter__button--plus.counter__button-children')
  ) {
    counterChildrenInfoEl.appendChild(createSelect());
  }

  target.closest('.counter').querySelector('.counter__input--children').value =
    inputChildrenEl;

  getValueCounters();

  if (counterChildrenInfoEl.childElementCount >= 11) {
    buttonPlusChildrenEl.setAttribute('disabled', '');
  }
};

// Функция уменьшает Children и ограничивает до 0, так же делает кнопку минус серой при значении 0!
export const counterMinusChildren = (e) => {
  const target = e.target;

  if (target.classList.contains('counter__button--minus')) {
    --inputChildrenEl;
  }

  if (inputChildrenEl <= 0) {
    inputChildrenEl = 0;
    buttonMinusChildrenEl.classList.add('button-disabled');
    counterChildrenInfoEl.classList.add('filter__children--disabled');
  }

  if (
    target
      .closest('.counter')
      .querySelector('.counter__button--minus.counter__button-children')
  ) {
    const selectEl = document.querySelector('.filter__children-select');
    counterChildrenInfoEl.removeChild(selectEl);
  }

  target.closest('.counter').querySelector('.counter__input--children').value =
    inputChildrenEl;
  getValueCounters();

  if (counterChildrenInfoEl.childElementCount <= 1) {
    buttonPlusChildrenEl.removeAttribute('disabled');
  }
};

// Функция увеличивает Rooms и ограничивает до 30!
export const counterPlusRooms = (e) => {
  const target = e.target;

  if (target.classList.contains('counter__button--plus')) {
    inputRoomsEl++;
  }

  if (inputRoomsEl >= 30) {
    inputRoomsEl = 30;
  }

  if (inputRoomsEl > 1) {
    buttonMinusRoomsEl.classList.remove('button-disabled');
  }

  target.closest('.counter').querySelector('.counter__input--rooms').value =
    inputRoomsEl;
  getValueCounters();
};

// Функция уменьшает Rooms и ограничивает до 1, так же делает кнопку минус серой при значении 1!
export const counterMinusRooms = (e) => {
  const target = e.target;

  if (target.classList.contains('counter__button--minus')) {
    --inputRoomsEl;
  }

  if (inputRoomsEl <= 1) {
    inputRoomsEl = 1;
    buttonMinusRoomsEl.classList.add('button-disabled');
  }

  target.closest('.counter').querySelector('.counter__input--rooms').value =
    inputRoomsEl;
  getValueCounters();
};


