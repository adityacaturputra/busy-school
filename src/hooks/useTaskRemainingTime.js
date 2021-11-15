import { useEffect, useState } from 'react';

const useTaskRemainingTime = (deadlineDate, deadlineTime) => {
  const timeRemainingValue = new Date(`${deadlineDate}T${deadlineTime}:00`).getTime() - new Date().getTime();
  const [timeRemaining, setTimeRemaining] = useState(timeRemainingValue);
  useEffect(() => {
    const timeRemainingInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1000);
    }, 1000);
    return () => {
      clearInterval(timeRemainingInterval);
    };
  }, []);
  return timeRemaining;
};

export default useTaskRemainingTime;
