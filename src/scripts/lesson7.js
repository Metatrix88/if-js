// Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности

export const deepEqual = (object1, object2) => {
  const arrKeysObject1 = Object.getOwnPropertyNames(object1);
  const arrKeysObject2 = Object.getOwnPropertyNames(object2);

  if (arrKeysObject1.length !== arrKeysObject2.length) {
    return false;
  }

  for (let i = 0; i < arrKeysObject1.length; i++) {
    const key = arrKeysObject1[i];
    const isObject =
      typeof object1[key] === 'object' && typeof object2[key] === 'object';

    if (
      (!isObject && object1[key] !== object2[key]) ||
      (isObject && !deepEqual(object1[key], object2[key]))
    ) {
      return false;
    }
  }

  return true;
};
