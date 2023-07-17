import { randProductName, randNumber } from '@ngneat/falso';
import {
  addProduct,
  sum,
  click1,
  click2,
  click3,
} from '../scripts/lesson4';

document.body.innerHTML = `
  <p id="text1">Text 1</p>
  <p id="text2">Text 2</p>
  <p id="text3">Text 3</p>`;

describe('check color', () => {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const textArr = [text1, text2, text3];
  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  text1.addEventListener('click', (event) => {
    event.target.style.color = click1(colors);
  });

  text2.addEventListener('click', (event) => {
    event.target.style.color = click2(colors);
  });

  text3.addEventListener('click', (event) => {
    event.target.style.color = click3(colors);
  });

  test('1 click color is magenta', () => {
    for (let i = 0; i < textArr.length; i++) {
      textArr[i].click();
      const { color } = textArr[i].style;
      expect(color).toBe('magenta');
    }
  });

  test('2 click color is cyan', () => {
    for (let i = 0; i < textArr.length; i++) {
      textArr[i].click();
      const { color } = textArr[i].style;
      expect(color).toBe('cyan');
    }
  });

  test('3 click color is firebrick', () => {
    for (let i = 0; i < textArr.length; i++) {
      textArr[i].click();
      const { color } = textArr[i].style;
      expect(color).toBe('firebrick');
    }
  });

  test('4 click color is springgreen', () => {
    for (let i = 0; i < textArr.length; i++) {
      textArr[i].click();
      const { color } = textArr[i].style;
      expect(color).toBe('springgreen');
    }
  });

  test('5 click color is skyblue', () => {
    for (let i = 0; i < textArr.length; i++) {
      textArr[i].click();
      const { color } = textArr[i].style;
      expect(color).toBe('skyblue');
    }
  });

  test('6 click color is magenta', () => {
    for (let i = 0; i < textArr.length; i++) {
      textArr[i].click();
      const { color } = textArr[i].style;
      expect(color).toBe('magenta');
    }
  });
});

describe('letters only', () => {
  test('When adding new valid product, get successful confirmation', () => {
    const name = randProductName();
    const price = randNumber();
    // Generated random input: { 'Handmade Granite Cheese', 704809 }
    expect(addProduct(name, price)).toBe(true);
    // Test failed, the random input triggered some path we never planned for.
    // We discovered a bug early!
  });
});

describe('receive sum a and b', () => {
  test('Sum should return sum of two values', () => {
    expect(sum(7)(12)).toBe(19);
  });
});
