/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { convertDateToSecondsInDay } from '../utils';

const useCourseRemainingTime = (isCurrentDay, time) => {
  // const remainingTime = useRef('');
  const [remainingTime, setRemainingTime] = useState('');
  // const courseInfo = useRef({ isCurrentCourseTime: false, isCourseTimePassed: false });
  const [courseInfo, setCourseInfo] = useState({ isCurrentCourseTime: false, isCourseTimePassed: false });
  useEffect(() => {
    const remainingCourseTimeInterval = setInterval(() => {
      if (isCurrentDay) {
        const courseTimeStart = convertDateToSecondsInDay(new Date(`1970-01-01T${time.startTime}:00`));
        const courseTimeEnd = convertDateToSecondsInDay(new Date(`1970-01-01T${time.endTime}:00`));
        const currentTime = convertDateToSecondsInDay();
        const isCourseTimePassed = currentTime > courseTimeEnd;
        const isCurrentCourseTime = currentTime > courseTimeStart && currentTime < courseTimeEnd;
        // courseInfo.current = { isCourseTimePassed, isCurrentCourseTime };
        setCourseInfo({ isCourseTimePassed, isCurrentCourseTime });
        if (isCurrentCourseTime) {
          const remainingTimeSeconds = courseTimeEnd - currentTime;
          const seconds = remainingTimeSeconds % 60;
          const minutes = Math.floor((remainingTimeSeconds % (3600)) / 60);
          const hours = Math.floor(remainingTimeSeconds / 3600);
          // remainingTime.current = `${hours}:${minutes}:${seconds}`;
          setRemainingTime(() => `${hours}:${minutes}:${seconds}`);
        }
      }
    }, 1000);
    return () => {
      clearInterval(remainingCourseTimeInterval);
    };
  }, []);

  return { remainingTime, courseInfo };
};

export default useCourseRemainingTime;
