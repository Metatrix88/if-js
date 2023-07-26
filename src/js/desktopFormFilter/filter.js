const inputFilterEl = document.querySelector('.desktop-form__input-filter');
const buttonMinusAdultsEl = document.querySelector('.counter__button--minus.counter__button-adults');
const buttonMinusChildrenEl = document.querySelector('.counter__button--minus.counter__button-children');
const buttonMinusRoomsEl = document.querySelector('.counter__button--minus.counter__button-rooms');
const buttonPlusAdultsEl = document.querySelector('.counter__button--plus.counter__button-adults');
const buttonPlusChildrenEl = document.querySelector('.counter__button--plus.counter__button-children');
const buttonPlusRoomsEl = document.querySelector('.counter__button--plus.counter__button-rooms');
let inputAdultsEl = document.querySelector('.counter__input--adults').value;




// открывает панель со счетчиками
const countersFilter = (e) => {
  const countersEl = document.querySelector('.desktop-form__filter');
  const input = e.target.closest('.desktop-form__input-filter');

  if (input) {
    countersEl.classList.toggle('desktop-form__filter--disabled');
  }
};

// Функция увеличивает Adults и ограничивает до 30!
const counterPlusAdults = (e) => {
  const target = e.target;

  if (target.classList.contains('counter__button--plus')) {
    inputAdultsEl++;
  }

  if (inputAdultsEl >= 30) {
    inputAdultsEl = 30;
  }

  if (inputAdultsEl >= 1) {
    buttonMinusAdultsEl.classList.remove('button-disabled');
  }

  target.closest('.counter').querySelector('.counter__input--adults').value = inputAdultsEl;
};

// Функция уменьшает Adults и ограничивает до 0, так же делает кнопку минус серой при значении 0!
const counterMinusAdults = (e) => {
  const target = e.target;

  if (target.classList.contains('counter__button--minus')) {
    --inputAdultsEl;
  }

  if (inputAdultsEl <= 1) {
    inputAdultsEl = 1;
    buttonMinusAdultsEl.classList.add('button-disabled');
  }

  target.closest('.counter').querySelector('.counter__input--adults').value = inputAdultsEl;
};




inputFilterEl.addEventListener('click', countersFilter);
buttonPlusAdultsEl.addEventListener('click', counterPlusAdults);
buttonMinusAdultsEl.addEventListener('click', counterMinusAdults);








// const counters = document.querySelectorAll('.counter');
//
//
//
//
//
// //Если на странице появились счетчики, то мы создаем значения в каждом инпуте
// if (counters) {
//   counters.forEach((counter) => {
//     // console.log(counter)
//     const getMoreLess = (event) => {
//       const target = event.target;
//
//       if (target.closest('.counter__button')) {
//         let value = parseInt(
//           target.closest('.counter').querySelector('.counter__input').value,
//         );
//
//         if (target.classList.contains('counter__button--plus')) {
//           value++;
//         } else {
//           --value;
//         }
//
//         const inputCounterAdults = document.querySelector(
//           '.counter__input--adults',
//         ).value;
//         const inputCounterChildren = document.querySelector(
//           '.counter__input--children',
//         ).value;
//         const inputCounterRooms = document.querySelector(
//           '.counter__input--rooms',
//         ).value;
//         // console.log(inputCounterAdults)
//         // console.log(inputCounterChildren)
//         // console.log(inputCounterRooms)
//
//         if (value <= 0) {
//           value = 0;
//           target
//             .closest('.counter')
//             .querySelector('.counter__button--minus')
//             .classList.add('button-disabled');
//         } else {
//           target
//             .closest('.counter')
//             .querySelector('.counter__button--minus')
//             .classList.remove('button-disabled');
//         }
//
//         target.closest('.counter').querySelector('.counter__input').value =
//           value;
//       }
//       getValueCounters();
//     };
//
//     counter.addEventListener('click', getMoreLess);
//   });
// }
//
// //Функция которая передает значения счетчиков в основной инпут
// const getValueCounters = () => {
//   const inputCounterAdults = document.querySelector(
//     '.counter__input--adults',
//   ).value;
//   const inputCounterChildren = document.querySelector(
//     '.counter__input--children',
//   ).value;
//   const inputCounterRooms = document.querySelector(
//     '.counter__input--rooms',
//   ).value;
//   document.querySelector(
//     '.desktop-form__input-filter',
//   ).value = `${inputCounterAdults} Adults — ${inputCounterChildren} Children — ${inputCounterRooms} Room`;
// };
//
// //Функция которая создает и наполняет option select
// // const createSelect = () => {
// //   selectEl.classList.add('filter__children-select');
// //
// //   for (let i = 0; i <= 17; i++) {
// //     const optionEl = document.createElement('option');
// //     optionEl.textContent = `${i} years old`;
// //     optionEl.setAttribute('value', `${i} years`);
// //     selectEl.appendChild(optionEl);
// //   }
// //   return selectEl;
// // };
// // // Записал функцию в переменную
// // const createSelectEl = createSelect();
//
// const buttonsChildrenEl = document.querySelector('.filter__children.counter');
//
// const openChildrenInfo = (e) => {
//   const target = e.target;
//   const filterInfoEl = document.querySelector('.filter__children-info');
//
//   if (target.closest('.counter').querySelector('.counter__button-children')) {
//     const valueInputChildren = parseInt(
//       document.getElementById('counter-children').value,
//     );
//     const buttonChildrenPlusEl = document.querySelector(
//       '.counter__button--plus.counter__button-children',
//     );
//     const buttonChildrenMinusEl = document.querySelector(
//       '.counter__button--minus.counter__button-children',
//     );
//
//     const selectEl = document.createElement('select');
//     selectEl.classList.add('filter__children-select');
//
//     for (let i = 0; i <= 17; i++) {
//       const optionEl = document.createElement('option');
//       optionEl.textContent = `${i} years old`;
//       optionEl.setAttribute('value', `${i} years`);
//       selectEl.appendChild(optionEl);
//     }
//
//     filterInfoEl.classList.remove('filter__children--disabled');
//     filterInfoEl.appendChild(selectEl);
//     console.log(buttonChildrenPlusEl);
//     console.log(buttonChildrenMinusEl);
//     // if (buttonChildrenMinusEl) {
//     //   filterInfoEl.removeChild(selectEl);
//     // }
//
//     if (valueInputChildren === 0) {
//       filterInfoEl.classList.add('filter__children--disabled');
//     }
//   }
// };
//
// buttonsChildrenEl.addEventListener('click', openChildrenInfo);
