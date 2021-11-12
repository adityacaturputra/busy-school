const TimeRemainingConverter = ({ milliseconds }) => {
  let day; let hour; let minute; let seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds %= 60;
  hour = Math.floor(minute / 60);
  minute %= 60;
  day = Math.floor(hour / 24);
  hour %= 24;
  let isLate;
  if (seconds < 0 || minute < 0 || hour < 0 || day < 0) {
    isLate = true;
    seconds *= -1;
    minute *= -1;
    hour *= -1;
    day *= -1;
  } else {
    isLate = false;
  }
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
