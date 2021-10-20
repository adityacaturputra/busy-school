/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import Nav from '../../components/Nav';
import { Wrapper } from '../../style';
import Courses from '../../components/Courses';
import Header from '../../components/Header';
import { IconSchedule } from '../../assets';
import Add from '../../components/Add';
import Layer from '../../style/Layer';
import AddCourse from './AddCourse';
import { getDay } from '../../utils';

const getDate = () => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

function Schedule() {
  const { mataKuliah: coursesData } = useSelector((state) => state.courses);
  const [addClick, setAddClick] = useState(false);

  const closeForm = () => setAddClick(false);

  const matkulDayFilter = (day) => coursesData.filter((course) => course.day === day);

  return (
    <>
      <Header Icon={<IconSchedule size="24px" />} title="Minggu ke-3" description={getDate()} />
      <Wrapper>
        {
          coursesData
            ? (
              <>
                <Courses data={matkulDayFilter(getDay())} />
                <Courses day="Senin" data={matkulDayFilter('senin')} />
                <Courses day="Selasa" data={matkulDayFilter('selasa')} />
                <Courses day="Rabu" data={matkulDayFilter('rabu')} />
                <Courses day="Kamis" data={matkulDayFilter('kamis')} />
                <Courses day="Jumat" data={matkulDayFilter('jumat')} />
              </>
            )
            : <p>loading...</p>
        }

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
            <AddCourse closeForm={closeForm} />
          )
          }
      </CSSTransition>

    </>
  );
}

export default Schedule;
