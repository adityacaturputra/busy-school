/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Nav from '../../components/Nav';
import { Wrapper } from '../../style';
import Courses from '../../components/Courses';
import Header from '../../components/Header';
import { IconSchedule } from '../../assets';
import Add from '../../components/Add';
import Layer from '../../style/Layer';
import AddCourse from './AddCourse';
import { getCourses } from '../../lib/api';
import { getDay } from '../../utils';

const getDate = () => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

function Schedule() {
  const [coursesData, setCoursesData] = useState([]);
  const [addClick, setAddClick] = useState(false);

  console.log(getDay());

  useEffect(() => {
    getCourses().then((res) => setCoursesData(res.mataKuliah));
  }, []);

  const matkulDayFilter = (day) => coursesData.filter((course) => course.day === day);

  return (
    <>
      <Header Icon={<IconSchedule size="24px" />} title="Minggu ke-3" description={getDate()} />
      <Wrapper>
        <Courses data={matkulDayFilter(getDay())} />
        <Courses day="Senin" data={matkulDayFilter('senin')} />
        <Courses day="Selasa" data={matkulDayFilter('selasa')} />
        <Courses day="Rabu" data={matkulDayFilter('rabu')} />
        <Courses day="Kamis" data={matkulDayFilter('kamis')} />
        <Courses day="Jumat" data={matkulDayFilter('jumat')} />

      </Wrapper>
      <Nav active="schedule" />
      <Add clicked={addClick} onClick={() => setAddClick(!addClick)} />
      <CSSTransition
        in={addClick}
        classNames="animate"
        timeout={300}
        unmountOnExit
      >
        {
          () => (
            <Layer onClick={() => setAddClick(!addClick)} />
          )
          }
      </CSSTransition>
      <CSSTransition
        in={addClick}
        classNames="appear"
        timeout={500}
        unmountOnExit
      >
        {
          () => (
            <AddCourse />
          )
          }
      </CSSTransition>

    </>
  );
}

export default Schedule;
