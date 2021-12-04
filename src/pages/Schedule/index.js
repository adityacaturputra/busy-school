/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
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
import IsFetched from '../../components/IsFetched';
import Loader from '../../components/Loader';

function Schedule() {
  const {
    mataKuliah: coursesData, editCourse, isFetched: isFetchedCourse, error: errorCourse,
  } = useSelector((state) => state.courses);

  const dispatch = useDispatch();
  const [addClick, setAddClick] = useState(false);
  const week = getWeek();
  const weekPassed = Math.floor((new Date().getTime() - new Date('2021/9/27').getTime()) / (1000 * 60 * 60 * 24 * 7)) + 1;
  const closeForm = () => {
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
        <IsFetched isFetched={isFetchedCourse} isError={errorCourse} Loader={<Loader />} Error={<Error>{errorCourse}</Error>}>
          {week.map((day, i) => (
            <Fade duration={i * 300} key={day}>
              {i === 0 && <Courses data={matkulDayFilter(getDayName())} />}
              <Courses day={day} data={matkulDayFilter(day)} />
            </Fade>
          ))}
        </IsFetched>
      </Wrapper>
      <Nav active="schedule" />
      <Modal show={addClick || editCourse.isEdit} onClick={handleModal}>
        <CourseForm closeForm={closeForm} isEditForm={editCourse.isEdit} />
      </Modal>
    </>
  );
}

const Error = styled.h2`
  padding-left: 24px;
  text-align: 'center';
`;

export default Schedule;
