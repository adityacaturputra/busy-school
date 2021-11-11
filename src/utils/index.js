/* eslint-disable radix */
export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getWeek = () => {
  const weekArray = new Array(7);
  weekArray[0] = 'minggu';
  weekArray[1] = 'senin';
  weekArray[2] = 'selasa';
  weekArray[3] = 'rabu';
  weekArray[4] = 'kamis';
  weekArray[5] = 'jumat';
  weekArray[6] = 'sabtu';
  return weekArray;
};

const getMonthNames = (monthNumber) => {
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
  ];

  return monthNames[monthNumber];
};

export const getDay = () => {
  const d = new Date();
  const weekday = getWeek();
  return weekday[d.getDay()];
};

export const getDate = (YearMonthDayDateFormat) => {
  const dateObj = YearMonthDayDateFormat ? new Date(YearMonthDayDateFormat) : new Date();
  const month = getMonthNames(dateObj.getMonth()); // months from 1-12
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${capitalizeFirstLetter(getDay())}, ${day} ${month} ${year}`;
};

export const timeHHDDToIntFormatter = (time) => {
  const SplittedTime = time.split(':');
  return parseInt(SplittedTime[0] * 3600 + SplittedTime[1] * 60);
};

export const timeSorter = (coursesData) => coursesData.sort((course1, course2) => timeHHDDToIntFormatter(course1['start-time']) - timeHHDDToIntFormatter(course2['start-time']));
