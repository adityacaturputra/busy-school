/* eslint-disable no-param-reassign */
const TimeRemainingConverter = ({ milliseconds }) => {
  let isLate;
  if (milliseconds < 0) {
    isLate = true;
    milliseconds *= -1;
  } else {
    isLate = false;
  }
  let day; let hour; let minute; let seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds %= 60;
  hour = Math.floor(minute / 60);
  minute %= 60;
  // eslint-disable-next-line prefer-const
  day = Math.floor(hour / 24);
  hour %= 24;
  let time;
  if (day === 0) {
    time = `${hour} jam ${minute} menit ${seconds} detik`;
    if (hour === 0) {
      time = `${minute} menit ${seconds} detik`;
      if (minute === 0) {
        time = `${seconds} detik`;
      }
    }
  } else {
    time = `${day} hari ${hour} jam ${minute} menit ${seconds} detik`;
  }

  return (
    isLate ? `terlewat ${time}` : time
  );
};
export default TimeRemainingConverter;
