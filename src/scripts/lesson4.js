// Напишите функцию sum, которая возвращает сумму чисел следующим образом
export const sum = (a) => {
  return (b) => {
    return a + b;
  };
};

export const a = 7;
export const b = 10;


export function addProduct(name, price) {
  const productNameRegexNoSpace = /[a-zA-Z\s]/g;
  if (!productNameRegexNoSpace.test(name)) {
    return false;
  }
  return typeof price === 'number';
}