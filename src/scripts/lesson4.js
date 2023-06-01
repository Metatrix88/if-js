// Напишите функцию sum, которая возвращает сумму чисел следующим образом
export const sum = (a) => {
  return (b) => {
    return a + b;
  };
};

// Функция со слайда и тест на нее тоже
export function addProduct(name, price) {
  const productNameRegexNoSpace = /[a-zA-Z]/g; // no white-space allowed
  if (!productNameRegexNoSpace.test(name)) {
    return false;
  }
  return typeof price === 'number';
}

export const num1 = 7;
export const num2 = 12;

// Покрасьте абзацы по клику
// дан массив цветов:
//   const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// по первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
// цвета из массива меняются бесконечно;
// все абзацы работают независимо.
export const text1 = document.getElementById('text1');
export const text2 = document.getElementById('text2');
export const text3 = document.getElementById('text3');

export const colorState = {
  text1: null,
  text2: null,
  text3: null,
};
export let count = 0;
export const getColors = (array) => {

  for ( let i = 1; i < array.length; i++) {
    if (count <= i) {
      colorState.text1 = array[count];
      count++;
      return colorState.text1;
    } else if (count === array.length) {
      count = 0;
    }
  }
};

export const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];




