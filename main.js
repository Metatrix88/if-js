// Функция palindrome
const polindrome = function (str) {
  let word = '';
  let revWord = '';
  let end = str.length - 1;

  for (let i = 0; i < str.length; i++ ) {
    word += str[i];
    revWord += str[end];
    end -= 1;
  }
  return word === revWord;
};

// Функция min(a, b)
const min = function (a, b) {
  if (a < b) {
    return a;
  }
  return b;
};

// Функция max(a, b)
const max = function (a, b) {
  if (a > b) {
    return a;
  }
  return b;
};


// Функция min(a, b)
// попробуйте переписать функцию, используя тернарный оператор.
const min1 = function (a, b) {
  return (a < b ? a : b);
};

// функция max(a,b)
// попробуйте переписать функцию, используя тернарный оператор.
const max1 = function (a, b) {
  return (a > b ? a : b);
};

let value = '3334'; // Таким образом добился чтобы и цифры тоже приводил к строке и сравнивал, но не уверен что так правильно))
value = String(value);


console.log(polindrome(value));
console.log(min(20,15));
console.log(max(50,30));
console.log(min1(20,15));
console.log(max1(50,30));


