const counters = document.querySelectorAll('.counter');

console.log(counters);

if(counters) {
  counters.forEach((counter) => {
    const getMoreLess = (event) => {
      const target = event.target;

      if (target.closest('.counter__button')) {
        let value = parseInt(target.closest('.counter').querySelector('.counter__input').value);

        if (target.classList.contains('counter__button--plus')) {
          value++;
        } else {
          --value;
        }

        target.closest('.counter').querySelector('.counter__input').value = value;
        console.log(value);
      }


    };

    counter.addEventListener('click', getMoreLess);

  });
}


// const getMoreLess = (event) => {
//   const target = event.target;
//
//   if (target.closest('.counter__button')) {
//     let value = parseInt(target.closest('.counter').querySelector('.counter__input'));
//
//     if(target.classList.contains('counter__button--plus')) {
//       value++;
//     } else {
//       --value;
//     }
//
//     target.closest('.counter').querySelector('.counter__input').value = value;
//   }
// };
//
//
//
//
// counters.addEventListener('click', getMoreLess);