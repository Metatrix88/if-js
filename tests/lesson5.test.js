import { getDate } from '../src/scripts/lesson5';

describe('Возврат даты формат:', () => {
  const date = '2020-10-4';
  const arrDate = date.split('-');
  if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 2 &&
    arrDate[2].length === 2
  ) {
    test('дд.мм.гггг', () => {
      expect(getDate(date)).toBe('24.10.2020');
    });
  }
    else if (
    arrDate[0].length !== 4 ||
    arrDate[1].length > 2 ||
    arrDate[2].length > 2
  ) {
    test('должна вернуться строка', () => {
      expect(getDate(date)).toBe('Введите дату согласно шаблону: гггг-мм-дд');
    });
  }
    else if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 1 &&
    arrDate[2].length === 1
  ) { test('добавляет 0 в месяц и день, если вводится цифры от 1-9', () => {
        expect(getDate(date)).toBe('04.10.2020');
    });
  }
    else if (
      arrDate[0].length === 4 &&
      arrDate[1].length === 1 &&
      arrDate[2].length === 2
  ) { test('добавляет 0 в месяц, если вводится цифры от 1-9', () => {
        expect(getDate(date)).toBe('24.10.2020');
    });
  }
    else if (
      arrDate[0].length === 4 &&
      arrDate[1].length === 2 &&
      arrDate[2].length === 1
  ) { test('добавляет 0 ко дню, если вводится цифры от 1-9', () => {
        expect(getDate(date)).toBe('04.10.2020');
  });
  }
});
