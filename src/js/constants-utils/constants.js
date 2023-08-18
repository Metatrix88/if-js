const destinationsEl = document.getElementById('destinations'); // получил секцию destinations по id
const mainEl = document.getElementById('main'); // получил tag main по id
const urlPopularHotel = 'https://if-student-api.onrender.com/api/hotels/popular';
const urlAllHotels = new URL('https://if-student-api.onrender.com/api/hotels');
const { desktopForm } = document.forms;

const offerEl = document.getElementById('offer'); // получил секцию offer по id


export { destinationsEl, mainEl, urlPopularHotel, offerEl, desktopForm, urlAllHotels };
