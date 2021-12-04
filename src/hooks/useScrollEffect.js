/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';

const useScrollEffect = () => {
  const [scroll, setScroll] = useState({
    scrolling: false,
    scrollTop: 0,
  });
  useEffect(() => {
    const onScroll = (e) => {
      const isScrolling = e.target.documentElement.scrollTop > scroll.scrollTop;
      const lastScrollPosition = e.target.documentElement.scrollTop;
      const scrollCondition = {
        scrolling: isScrolling,
        scrollTop: lastScrollPosition,
      };
      setScroll(scrollCondition);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scroll.scrollTop]);

  return scroll;
};

export default useScrollEffect;
