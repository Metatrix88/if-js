import { getDate, getObject } from '../scripts/lesson5';

describe('Возврат даты формат:', () => {
  test('дд.мм.гггг', () => {
    expect(getDate(null)).toBe('Вы не ввели дату');
    expect(getDate('dsdsd')).toBe('Вы не ввели дату');
    expect(getDate('')).toBe('Вы не ввели дату');
    expect(getDate('20202-1-1')).toBe(
      'Введите дату согласно шаблону: гггг-мм-дд',
    );
    expect(getDate('2020-10-4')).toBe('04.10.2020');
    expect(getDate('2020-1-4')).toBe('04.01.2020');
    expect(getDate('2020-1-14')).toBe('14.01.2020');
  });
});

describe('Object list output:', () => {
  test('Name output', () => {
    expect(getObject('ger')).toBe(
      'Germany, Berlin, Hostel Friendship; Germany, Berlin, Hotel Rehberge Berlin Mitte; ',
    );
  });
});
