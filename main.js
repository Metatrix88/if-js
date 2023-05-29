// Функция palindrome:
const myFun = (str) => {
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
const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

// Функция max(a, b):
const max = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

// Функция min(a, b):
// попробуйте переписать функцию, используя тернарный оператор.
const min1 = (a, b) => {
  return a < b ? a : b;
};

// Функция max(a,b):
// попробуйте переписать функцию, используя тернарный оператор.

const max1 = (a, b) => {
  return a > b ? a : b;
};

// Замена элементов массива:
// создайте массив с десятью случайными элементами от 0 до 100;

const getRandomList = (min, max) => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    const numRandom = Math.floor(Math.random() * (max - min)) + min;
    list.push(numRandom);
  }
  return list;
};

// напишите функцию, которая будет заменять все 0 на строку 'zero';
// выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).
const getList = () => {
  for (let i = 0; i < array.length; i++) {
    const value = `${array[i]}`;
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
      array[i] = newValue;
    }
  }
  return array;
};

let value = '3334'; // Таким образом добился чтобы и цифры тоже приводил к строке и сравнивал, но не уверен, что так правильно
value = String(value);
const num1 = 20;
const num2 = 50;
const array = getRandomList(0, 101);

console.log(myFun(value));
console.log(min(num1, num2));
console.log(max(num1, num2));
console.log(min1(num1, num2));
console.log(max1(num1, num2));
console.log(getList(array));
