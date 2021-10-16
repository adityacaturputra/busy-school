/* eslint-disable no-unused-vars */
import React from 'react';
import { Wrapper } from '../../style';
import Nav from '../../components/Nav';
import { IconHome } from '../../assets';
import Header from '../../components/Header';
import Courses from '../../components/Courses';
import Tasks from '../../components/Tasks';

function Home(props) {
  return (
    <>
      <Header Icon={<IconHome size="24px" />} title="Selamat Datang" description="30120044" />
      <Wrapper>
        <Courses />
        <Tasks />
      </Wrapper>
      <Nav active="/" />
    </>

  );
}

export default Home;
