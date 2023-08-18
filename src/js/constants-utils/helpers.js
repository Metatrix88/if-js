// Функция которая достает данные по ссылке
export const getPopularHotels = (url) =>
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.error('Error!!!', e.message);
    });

//Сортировка массива методом пузырька
export const bubbleSort = (arr) => {
  const newArrHotels = [...arr];

  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (newArrHotels[j - 1].name > newArrHotels[j].name) {
        const temp = newArrHotels[j - 1];
        newArrHotels[j - 1] = newArrHotels[j];
        newArrHotels[j] = temp;
      }
    }
  }
  return newArrHotels;
};
