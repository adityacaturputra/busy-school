/* eslint-disable import/prefer-default-export */
export const getDay = () => {
  const d = new Date();
  const weekday = new Array(7);
  weekday[0] = 'minggu';
  weekday[1] = 'senin';
  weekday[2] = 'selasa';
  weekday[3] = 'rabu';
  weekday[4] = 'kamis';
  weekday[5] = 'jumat';
  weekday[6] = 'sabtu';

  return weekday[d.getDay()];
};
