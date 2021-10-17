/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Nav from '../../components/Nav';
import { Wrapper } from '../../style';
import Courses from '../../components/Courses';
import Header from '../../components/Header';
import { IconSchedule } from '../../assets';
import Add from '../../components/Add';
import Layer from '../../style/Layer';
import AddCourse from './AddCourse';

const hardCoursesData = [
  {
    name: 'Implementasi Sistem Informasi',
    place: 'D001',
    teacher: 'Ronggo Permono',
    time: '07:00',
  },
  {
    name: 'Implementasi Sistem Informasi',
    place: 'D001',
    teacher: 'Ronggo Permono',
    time: '07:00',
  },
  {
    name: 'Implementasi Sistem Informasi',
    place: 'D001',
    teacher: 'Ronggo Permono',
    time: '07:00',
  },
  {
    name: 'Implementasi Sistem Informasi',
    place: 'D001',
    teacher: 'Ronggo Permono',
    time: '07:00',
  },
];

const getDate = () => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

function Schedule(props) {
  const [coursesData, setCoursesData] = useState(hardCoursesData);
  const [addClick, setAddClick] = useState(false);
  return (
    <>
      <Header Icon={<IconSchedule size="24px" />} title="Minggu ke-3" description={getDate()} />
      <Wrapper>
        <Courses data={coursesData} />
        <Courses day="Senin" data={coursesData} />
        <Courses day="Selasa" data={coursesData} />
        <Courses day="Rabu" data={coursesData} />
        <Courses day="Kamis" data={coursesData} />
        <Courses day="Jumat" data={coursesData} />

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

      </Wrapper>
      <Nav active="schedule" />
      <Add clicked={addClick} onClick={() => setAddClick(!addClick)} />

    </>
  );
}

Schedule.propTypes = {

};

export default Schedule;
