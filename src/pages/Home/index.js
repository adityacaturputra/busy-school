/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from '../../style';
import { IconHome } from '../../assets';
import {
  Header, Courses, Tasks, Nav,
} from '../../components';
import { getDay } from '../../utils';

function Home() {
  const { mataKuliah: coursesData } = useSelector((state) => state.courses);
  const { list } = useSelector((state) => state.tasks);
  const matkulDayFilter = (day) => coursesData?.filter((course) => course.day === day);
  const unCompleteTask = list.filter((task) => !task.disabled);
  return (
    <>
      <Header Icon={<IconHome size="24px" />} title="Selamat Datang" description="30120044" />
      <Wrapper>
        <Courses data={matkulDayFilter(getDay())} />
        <Tasks list={unCompleteTask} />
      </Wrapper>
      <Nav active="home" />
    </>

  );
}

export default Home;
