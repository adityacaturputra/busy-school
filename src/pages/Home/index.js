/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Wrapper } from '../../style';
import { IconHome } from '../../assets';
import {
  Header, Courses, Tasks, Nav, Fade,
} from '../../components';
import { getDayName } from '../../utils';
import Loader from '../../components/Loader';
import IsFetched from '../../components/IsFetched';
import TextError from '../../components/TextError';

function Home() {
  const { mataKuliah: coursesData, error: errorCourse, isFetched: isFetchedCourse } = useSelector((state) => state.courses);
  const { list, error: errorTask, isFetched: isFetchedTask } = useSelector((state) => state.tasks);
  const matkulDayFilter = (day) => coursesData?.filter((course) => course.day === day);
  const unCompleteTask = list.filter((task) => !task.disabled);
  return (
    <>
      <Header Icon={<IconHome size="24px" />} title="Selamat Datang" description="30120044" />
      <Wrapper>
        <IsFetched isFetched={isFetchedCourse} isError={errorCourse} Loader={<Loader />} Error={<TextError title={errorCourse} />}>
          <Courses data={matkulDayFilter(getDayName())} isCurrentDay />
        </IsFetched>
        <IsFetched isFetched={isFetchedTask} isError={errorTask} Loader={<Loader />} Error={<TextError title={errorTask} />}>
          <Tasks list={unCompleteTask} />
        </IsFetched>
      </Wrapper>
      <Nav active="home" />
    </>

  );
}

export default Home;
