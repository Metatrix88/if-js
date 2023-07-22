const counters = document.querySelectorAll('.counter');
const selectEl = document.createElement('select');
const inputFilterEl = document.querySelector('.desktop-form__input-filter');


//Создание select
const createSelect = () => {
  selectEl.classList.add('filter__children-select');

  for (let i = 0; i <= 17; i++) {
    const optionEl = document.createElement('option');
    optionEl.textContent = `${i} years old`;
    optionEl.setAttribute('value', `${i} years`);
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
          target.closest('.counter').querySelector('.counter__input').value,
        );

        if (target.classList.contains('counter__button--plus')) {
          value++;
        } else {
          --value;
        }

        if (value <= 0) {
          value = 0;
          target
            .closest('.counter')
            .querySelector('.counter__button--minus')
            .classList.add('button-disabled');
        } else {
          target
            .closest('.counter')
            .querySelector('.counter__button--minus')
            .classList.remove('button-disabled');
        }

        target.closest('.counter').querySelector('.counter__input').value =
          value;
      }
    };

    const openChildrenInfo = (e) => {
      const target = e.target;

      if (target.closest('.counter').querySelector('.counter__button-children')) {
        const filterInfoEl = document.querySelector('.filter__children-info');
        const buttonPlusChildren = target.closest('.counter__button--plus.counter__button-children');
        const valueInputChildren = parseInt(document.getElementById('counter-children').value);

        filterInfoEl.classList.remove('filter__children--disabled');

        if (valueInputChildren === 0) {
          filterInfoEl.classList.add('filter__children--disabled');
        }

        if (buttonPlusChildren) {
          filterInfoEl.appendChild(createSelectEl);
        }
      }
    };

    counter.addEventListener('click', getMoreLess);
    counter.addEventListener('click', openChildrenInfo);
  });
}

const countersFilter = (e) => {
  const countersEl = document.querySelector('.desktop-form__filter');
  const input = e.target.closest('.desktop-form__input-filter');

  if (input) {
    countersEl.classList.toggle('desktop-form__filter--disabled');
  }
};

inputFilterEl.addEventListener('click', countersFilter);