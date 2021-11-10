import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './Router';
import { getCourses, getTasks } from './store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
    dispatch(getTasks());
  }, [dispatch]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
