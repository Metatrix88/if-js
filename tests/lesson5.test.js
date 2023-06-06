import { getDate } from '../src/scripts/lesson5';


describe('Ввод даты формат: гггг-мм-дд', () => {
  test('должна вернуться дата формата дд.мм.гггг', () => {
    expect(getDate('2020-13-24')).toBe('24.13.2020');
  });
});