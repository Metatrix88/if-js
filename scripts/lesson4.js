// Напишите функцию sum, которая возвращает сумму чисел следующим образом
export const sum = (a) => {
  return (b) => {
    return a + b;
  };
};

// console.log(sum(8)(4));