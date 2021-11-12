/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { capitalizeFirstLetter } from '../letter';

const getMonthNames = (monthNumber) => {
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
  ];

  return monthNames[monthNumber];
};

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

export const getDayName = (dateObj) => {
  let date;
  if (!dateObj) {
    date = new Date();
  } else {
    date = dateObj;
  }
  const weekday = getWeek();
  return weekday[date.getDay()];
};

export const getDate = (YearMonthDayDateFormat) => {
  const dateObj = YearMonthDayDateFormat ? new Date(YearMonthDayDateFormat) : new Date();
  const month = getMonthNames(dateObj.getMonth()); // months from 1-12
  const dayName = getDayName(dateObj);
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${capitalizeFirstLetter(dayName)}, ${day} ${month} ${year}`;
};

export const timeHHDDToIntFormatter = (time) => {
  const SplittedTime = time.split(':');
  return parseInt(SplittedTime[0] * 3600 + SplittedTime[1] * 60, 10);
};

export const timeSorter = (coursesData) => coursesData.sort((course1, course2) => timeHHDDToIntFormatter(course1['start-time']) - timeHHDDToIntFormatter(course2['start-time']));

export const convertDateToSecondsInDay = (date) => {
  if (!date) {
    date = new Date();
  }
  return (date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds();
};

// Function for sorting business in tasks reducers
const convertTaskDateToMiliSeconds = (task) => Date.parse(`${task.deadlineDate}T${task.deadlineTime}:00`);
export const sortNewList = (tasks, list) => {
  list.deadlineDateMiliSeconds = convertTaskDateToMiliSeconds(list);
  tasks.push(list);
  const newTasks = tasks.sort((task1, task2) => task1.deadlineDateMiliSeconds - task2.deadlineDateMiliSeconds);
  return newTasks;
};

export const sortList = (list) => {
  const newList = list.sort((task1, task2) => {
    task1.deadlineDateMiliSeconds = convertTaskDateToMiliSeconds(task1);
    task2.deadlineDateMiliSeconds = convertTaskDateToMiliSeconds(task2);
    return task1.deadlineDateMiliSeconds - task2.deadlineDateMiliSeconds;
  });
  return newList;
};
