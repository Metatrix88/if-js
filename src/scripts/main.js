import * as lesson3 from './lesson3.js';
import * as lesson4 from './lesson4.js';
import {colors, getColors, text1, text2, text3} from './lesson4.js';




console.log('--------------lesson-3-----------------');
console.log(lesson3.myFun(lesson3.value));
console.log(lesson3.min(lesson3.num1, lesson3.num2));
console.log(lesson3.max(lesson3.num1, lesson3.num2));
console.log(lesson3.min1(lesson3.num1, lesson3.num2));
console.log(lesson3.max1(lesson3.num1, lesson3.num2));
console.log(lesson3.getList(lesson3.array));

console.log('--------------lesson-4-----------------');
console.log(lesson4.sum(lesson4.num1)(lesson4.num2));

text1.addEventListener('click', (event) => {
  event.target.style.color = getColors(colors);
});

text2.addEventListener('click', (event) => {
  event.target.style.color = getColors(colors);
});

text3.addEventListener('click', (event) => {
  event.target.style.color = getColors(colors);
});

