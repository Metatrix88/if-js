function checkBracketsSyntax(inputString) {
  const stack = [];
  const openingBrackets = '{';
  const closingBrackets = '}';

  for (let value of inputString) {
    if (openingBrackets.includes(value)) {
      stack.push(value);
    } else if (closingBrackets.includes(value)) {
      if (stack.length === 0 || stack[stack.length-1] !== '{') {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

let inputString = '{user: {name: "John", age: 21}}';
console.log(checkBracketsSyntax(inputString));

inputString = '{user: {name: }{"John", age: 21{}}';
console.log(checkBracketsSyntax(inputString));