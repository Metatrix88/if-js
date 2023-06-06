export const getDate = (date) => {
  const re = /(?<year>\d+)\S(?<monch>\d+)\S(?<day>\d+)/;
  let corDate = '';
  const arrDate = date.split('-');
  if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 2 &&
    arrDate[2].length === 2
  ) {
    corDate = date.replace(re, '$<day>.$<monch>.$<year>');
    return corDate;
  } else if (
    arrDate[0].length !== 4 ||
    arrDate[1].length > 2 ||
    arrDate[2].length > 2
  ) {
    return 'Введите дату согласно шаблону: гггг-мм-дд';
  } else if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 1 &&
    arrDate[2].length === 1
  ) {
    corDate = date.replace(re, '0$<day>.0$<monch>.$<year>');
    return corDate;
  } else if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 1 &&
    arrDate[2].length === 2
  ) {
    corDate = date.replace(re, '$<day>.0$<monch>.$<year>');
    return corDate;
  } else if (
    arrDate[0].length === 4 &&
    arrDate[1].length === 2 &&
    arrDate[2].length === 1
  ) {
    corDate = date.replace(re, '0$<day>.$<monch>.$<year>');
    return corDate;
  }
};
