// Напишите функцию sum, которая возвращает сумму чисел следующим образом
export const sum = (a) => {
  return (b) => {
    return a + b;
  };
};

// module.exports = { sum };

// Функция со слайда и тест на нее тоже
export function addProduct(name, price) {
  const productNameRegexNoSpace = /[a-zA-Z]/g; // no white-space allowed
  if (!productNameRegexNoSpace.test(name)) {
    return false;
  }
  return typeof price === 'number';
}

// Покрасьте абзацы по клику
// дан массив цветов:
//   const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// по первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
// цвета из массива меняются бесконечно;
// все абзацы работают независимо.
export const getColors = () => {
  let color = '';
  let count = 0;
  return (array) => {
    for (let i = 1; i < array.length; i++) {
      if (count <= i) {
        color = array[count];
        count++;
        return color;
      } else if (count === array.length) {
        count = 0;
      }
    }
  };
};



export const click1 = getColors();
export const click2 = getColors();
export const click3 = getColors();


