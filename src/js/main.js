// import { data } from './cardsData.js';

const sectionElApartments = document.createElement('section');

const titleElApartments = document.createElement('h2');
const titleContentApartments = document.createTextNode('Homes guests loves');
titleElApartments.appendChild(titleContentApartments);

const ulElApartments = document.createElement('ul');

sectionElApartments.appendChild(titleElApartments);
// sectionElApartments.appendChild(ulElApartments);


const destinationsEl = document.getElementById('destinations');
const mainEl = document.getElementById('main');

mainEl.insertBefore(sectionElApartments, destinationsEl);

// console.log(document.mainEl);