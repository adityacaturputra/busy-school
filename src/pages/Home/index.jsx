/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from '../../style';
import Nav from '../../components/Nav';
import { IconHome } from '../../assets';
import Header from '../../components/Header';
import Courses from '../../components/Courses';
import Tasks from '../../components/Tasks';
import { getDay } from '../../utils';

function Home(props) {
  const { mataKuliah: coursesData } = useSelector((state) => state.courses);
  const { list, error } = useSelector((state) => state.tasks);
  const matkulDayFilter = (day) => coursesData.filter((course) => course.day === day);
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
