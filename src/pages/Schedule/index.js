/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  Nav, Courses, Header, Modal,
  Fade,
} from '../../components';
import { Wrapper } from '../../style';
import { IconSchedule } from '../../assets';
import CourseForm from './CourseForm';
import { getDate, getDayName, getWeek } from '../../utils';
import { cancelEditCourse } from '../../store/actions';

function Schedule() {
  const { mataKuliah: coursesData, editCourse } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [addClick, setAddClick] = useState(false);
  const week = getWeek();
  const weekPassed = Math.floor((new Date().getTime() - new Date('2021/9/27').getTime()) / (1000 * 60 * 60 * 24 * 7)) + 1;
  const closeForm = () => {
    console.log(editCourse.isEdit);
    setAddClick(false);
    dispatch(cancelEditCourse());
  };
  const matkulDayFilter = (day) => coursesData?.filter((course) => course.day === day);

  const handleModal = () => {
    if (addClick || editCourse.isEdit) {
      dispatch(cancelEditCourse());
      setAddClick(false);
    } else {
      setAddClick(true);
    }
  };

  return (
    <>
      <Header Icon={<IconSchedule size="24px" />} title={`Minggu ke - ${weekPassed}`} description={getDate()} />
      <Wrapper>
        {week.map((day, i) => (
          <Fade duration={i * 300} key={day}>
            {i === 0 && <Courses data={matkulDayFilter(getDayName())} />}
            <Courses day={day} data={matkulDayFilter(day)} />
          </Fade>
        ))}
      </Wrapper>
      <Nav active="schedule" />
      <Modal show={addClick || editCourse.isEdit} onClick={handleModal}>
        <CourseForm closeForm={closeForm} isEditForm={editCourse.isEdit} />
      </Modal>
    </>
  );
}

export default Schedule;
