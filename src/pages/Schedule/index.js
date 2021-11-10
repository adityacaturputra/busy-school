/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import {
  Nav, Courses, Header, Modal,
  Fade,
} from '../../components';
import { Wrapper } from '../../style';
import { IconSchedule } from '../../assets';
import AddCourse from './AddCourse';
import { getDate, getDay, getWeek } from '../../utils';

function Schedule() {
  const { mataKuliah: coursesData } = useSelector((state) => state.courses);
  const [addClick, setAddClick] = useState(false);
  const week = getWeek();
  const closeForm = () => setAddClick(false);
  const matkulDayFilter = (day) => coursesData?.filter((course) => course.day === day);

  return (
    <>
      <Header Icon={<IconSchedule size="24px" />} title="Minggu ke-3" description={getDate()} />
      <Wrapper>
        {week.map((day, i) => (
          <Fade duration={i * 300} key={day}>
            {i === 0 && <Courses data={matkulDayFilter(getDay())} />}
            <Courses day={day} data={matkulDayFilter(day)} />
          </Fade>
        ))}
      </Wrapper>
      <Nav active="schedule" />
      <Modal show={addClick} onClick={() => setAddClick(!addClick)}>
        <AddCourse closeForm={closeForm} />
      </Modal>
    </>
  );
}

export default Schedule;
