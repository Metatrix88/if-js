const counters = document.querySelectorAll('.counter');
const selectEl = document.createElement('select');
// const optionEl = document.createElement('option');
//Создание select
const createSelect = () => {
  selectEl.classList.add('filter__children-select');

  for (let i = 0; i <= 17; i++) {
    const optionEl = document.createElement('option');
    optionEl.textContent = `${i} years old`;
    optionEl.setAttribute('value', `${i} years`)
    selectEl.appendChild(optionEl);
  }
  return selectEl;
};

const createSelectEl = createSelect();

if (counters) {
  counters.forEach((counter) => {
    // console.log(counter)
    const getMoreLess = (event) => {
      const target = event.target;

      if (target.closest('.counter__button')) {

        let value = parseInt(
          target.closest('.counter').querySelector('.counter__input').value);

        if (target.classList.contains('counter__button--plus')) {
          value++;
        } else {
          --value;
        }

        if (value <= 0) {
          value = 0;
          target.closest('.counter').querySelector('.counter__button--minus').classList.add('button-disabled');
        } else {
          target.closest('.counter').querySelector('.counter__button--minus').classList.remove('button-disabled');
        }

        target.closest('.counter').querySelector('.counter__input').value =
          value;
      }

      if (target.closest('.counter').querySelector('.counter__button-children')) {
        const filterInfoEl = document.querySelector('.filter__children-info');
        let valueInputChildren = parseInt(document.getElementById('counter-children').value) ;

        filterInfoEl.classList.remove('filter__children--disabled');
        filterInfoEl.appendChild(createSelectEl);
        if (valueInputChildren === 0) {
          filterInfoEl.classList.add('filter__children--disabled');
        }
        console.log(valueInputChildren);
        // if (valueInputChildren) {
        //   console.log(valueInputChildren);
        // }

        // if (--valueInputChildren) {
        //   console.log('-');
        // }
        // console.log(valueInputChildren)
        // console.log(filterInfoEl)


      }
    };

    counter.addEventListener('click', getMoreLess);
  });
}

