import * as lesson3 from './lesson3.js';
import * as lesson4 from './lesson4.js';

console.log('--------------lesson-3-----------------');
console.log(lesson3.myFun(lesson3.value));
console.log(lesson3.min(lesson3.num1, lesson3.num2));
console.log(lesson3.max(lesson3.num1, lesson3.num2));
console.log(lesson3.min1(lesson3.num1, lesson3.num2));
console.log(lesson3.max1(lesson3.num1, lesson3.num2));
console.log(lesson3.getList(lesson3.array));

console.log('--------------lesson-4-----------------');
console.log(lesson4.sum(lesson4.a)(lesson4.b));

// (lessonNumber => {
//   console.log(lessonNumber);
//
//   // Функция palindrome:
//   const myFun = (str) => {
//     let word = '';
//     let revWord = '';
//     let end = str.length - 1;
//
//     for (let i = 0; i < str.length; i++) {
//       word += str[i];
//       revWord += str[end];
//       end -= 1;
//     }
//     return word === revWord;
//   };
//
// // Функция min(a, b):
//   const min = (a, b) => {
//     if (a < b) {
//       return a;
//     }
//     return b;
//   };
//
// // Функция max(a, b):
//   const max = (a, b) => {
//     if (a > b) {
//       return a;
//     }
//     return b;
//   };
//
// // Функция min(a, b):
// // попробуйте переписать функцию, используя тернарный оператор.
//   const min1 = (a, b) => {
//     return a < b ? a : b;
//   };
//
// // Функция max(a,b):
// // попробуйте переписать функцию, используя тернарный оператор.
//
//   const max1 = (a, b) => {
//     return a > b ? a : b;
//   };
//
// // Замена элементов массива:
// // создайте массив с десятью случайными элементами от 0 до 100;
//
//   const getRandomList = (min, max) => {
//     const list = [];
//     for (let i = 0; i < 10; i++) {
//       const numRandom = Math.floor(Math.random() * (max - min)) + min;
//       list.push(numRandom);
//     }
//     return list;
//   };
//
// // напишите функцию, которая будет заменять все 0 на строку 'zero';
// // выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).
//   const getList = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//       const value = `${arr[i]}`;
//       let newValue = '';
//
//       for (let j = 0; j < value.length; j++) {
//         if (value[j] === '0') {
//           newValue += 'zero';
//         } else {
//           newValue += value[j];
//         }
//       }
//       const isNumber = +newValue;
//
//       if (Number.isNaN(isNumber)) {
//         arr[i] = newValue;
//       }
//     }
//     return arr;
//   };
//
//   let value = '3334'; // Таким образом добился чтобы и цифры тоже приводил к строке и сравнивал, но не уверен, что так правильно
//   value = String(value);
//   const num1 = 20;
//   const num2 = 50;
//   const minNum = 0;
//   const maxNum = 101;
//   const array = getRandomList(minNum, maxNum);
//
//   console.log(myFun(value));
//   console.log(min(num1, num2));
//   console.log(max(num1, num2));
//   console.log(min1(num1, num2));
//   console.log(max1(num1, num2));
//   console.log(getList(array));
// })('Lesson number-3, author: Davidovich Andrey.');
//
// console.log('----------------------------------------------');

// (lessonNumber => {
//   console.log(lessonNumber);

// Напишите функцию sum, которая возвращает сумму чисел следующим образом
// const sum = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };
//
// console.log(sum(8)(4));

// const users = [
//   { firstName: 'John', lastName: 'Smith' },
//   { firstName: 'Todd', lastName: 'Lee' },
//   { firstName: 'Taylor', lastName: 'Fox' },
// ];
//
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//
//   user.getFullName = () => (
//     `${user.firstName} ${user.lastName}`
//   );
// }
//
// console.log(users[0].getFullName()); // ?
// console.log(users[1].getFullName()); // ?
// console.log(users[2].getFullName()); // ?

// const users = [
//   { firstName: 'John', lastName: 'Smith' },
//   { firstName: 'Todd', lastName: 'Lee' },
//   { firstName: 'Taylor', lastName: 'Fox' },
// ];
// const getFullName = (firstName, lastName) => () => (
//   `${firstName} ${lastName}`
// );
// for (let i = 0; i < users.length; i++) {
//   var user = users[i];
//   user.getFullName = getFullName(user.firstName, user.lastName);
// }
// console.log(users[0].getFullName()); // 'John Smith'
// console.log(users[1].getFullName()); // 'Todd Lee'
// console.log(users[2].getFullName()); // 'Taylor Fox'

// })('Lesson number-4, author: Davidovich Andrey.');
