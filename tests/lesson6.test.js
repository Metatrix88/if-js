import { myFuncPol, searchObject } from '../src/scripts/lesson6.js';

describe('Function polindromme:', () => {
  test('is true', () => {
    expect(myFuncPol('шалаш')).toBe(true);
    expect(myFuncPol('Hello')).toBe(false);
  });
});

describe('Search object', () => {
  test('Entering only part of a word', () => {
    expect(searchObject('ger')).toEqual([
      'Germany, Berlin, Hostel Friendship',
      'Germany, Hamburg, Steigenberger Hotel',
    ]);
    expect(searchObject('marocco')).toBe('Совпадений не найдено');
  });
});
