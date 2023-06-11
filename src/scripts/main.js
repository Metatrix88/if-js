import * as lesson3 from './lesson3.js';
import * as lesson4 from './lesson4.js';
import { click1, click2, click3 } from './lesson4.js';
import { getDate, getObject } from './lesson5.js';

console.log('--------------lesson-3-----------------');
console.log(lesson3.myFun(lesson3.value));
console.log(lesson3.min(lesson3.num1, lesson3.num2));
console.log(lesson3.max(lesson3.num1, lesson3.num2));
console.log(lesson3.min1(lesson3.num1, lesson3.num2));
console.log(lesson3.max1(lesson3.num1, lesson3.num2));
console.log(lesson3.getList(lesson3.array));

console.log('--------------lesson-4-----------------');
const num1 = 7;
const num2 = 12;
console.log(lesson4.sum(num1)(num2));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
text1.addEventListener('click', (event) => {
  event.target.style.color = click1(colors);
});

text2.addEventListener('click', (event) => {
  event.target.style.color = click2(colors);
});

text3.addEventListener('click', (event) => {
  event.target.style.color = click3(colors);
});
console.log('--------------lesson-5-----------------');
const value = '2023-22-13';
const value1 = 'mar';
console.log(getDate(value));
console.log(getObject(value1));
