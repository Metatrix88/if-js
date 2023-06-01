// Функция palindrome:
export const myFun = (str) => {
  let word = '';
  let revWord = '';
  let end = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    word += str[i];
    revWord += str[end];
    end -= 1;
  }
  return word === revWord;
};

// Функция min(a, b):
export const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

// Функция max(a, b):
export const max = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

// Функция min(a, b):
// попробуйте переписать функцию, используя тернарный оператор.
export const min1 = (a, b) => {
  return a < b ? a : b;
};

// Функция max(a,b):
// попробуйте переписать функцию, используя тернарный оператор.

export const max1 = (a, b) => {
  return a > b ? a : b;
};

// Замена элементов массива:
// создайте массив с десятью случайными элементами от 0 до 100;

export const getRandomList = (min, max) => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    const numRandom = Math.floor(Math.random() * (max - min)) + min;
    list.push(numRandom);
  }
  return list;
};

// напишите функцию, которая будет заменять все 0 на строку 'zero';
// выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).
export const getList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const value = `${arr[i]}`;
    let newValue = '';

    for (let j = 0; j < value.length; j++) {
      if (value[j] === '0') {
        newValue += 'zero';
      } else {
        newValue += value[j];
      }
    }
    const isNumber = +newValue;

    if (Number.isNaN(isNumber)) {
      arr[i] = newValue;
    }
  }
  return arr;
};

export const value = String('ggggggs'); // Таким образом добился чтобы и цифры тоже приводил к строке и сравнивал
export const num1 = 20;
export const num2 = 50;
export const minNum = 0;
export const maxNum = 101;
export const array = getRandomList(minNum, maxNum);
