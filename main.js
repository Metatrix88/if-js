// Работа с переменными
let user = 'John Doe';

console.log(user);

const student = 'Andrey';

console.log(student);

user = student;
// Если присвоить переменную 'user' через const, то будет ошибка, так как переопределить ее значение нельзя, если же через let то в переменной 'user' будет значение переменной 'student'.
console.log(user);

// Работа с примитивами
let test = 1;

test += 1;
test = test + '1';
// будет значение 21, так как при сложении все приводится к типу 'strong', происходит просто склеивание двух строк 2 и 1
console.log(test);

test = test - 1;
// будет результат равным 20, потому что при вычитании все приводиться к числовому типу, 21 - 1 = 20
console.log(test);

test = Boolean(test);
// будет true так как все положительные числа, это true
console.log(test);

// Дан массив [2, 3, 5, 8]

const list = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < list.length; i++) {
  result *= list[i];
}
console.log(result);

// Дан массив [2, 5, 8, 15, 0, 6, 20, 3]

const list2 = [2, 5, 8, 15, 0, 6, 20, 3];
let result2 = '';

for (let i = 0; i < list2.length; i++) {
  if (list2[i] <= 5 || list2[i] >= 10) {
    continue;
  }
  else {
    result2 += list2[i];
  }
}

console.log(result2);

// Дан массив [2, 5, 8, 15, 0, 6, 20, 3]

const list3 = [2, 5, 8, 15, 0, 6, 20, 3];
let result3 = '';

for (let i = 0; i < list3.length; i++) {
  if (list3[i] % 2 === 0) {
    result3 += list3[i];
  }
}

console.log(result3);