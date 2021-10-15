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
      <Wrapper>
        <Header Icon={<IconHome size={24} />} title="Selamat Datang" description="30120044" />
        <Courses />
        <Tasks />
      </Wrapper>
      <Nav />
    </>

  );
}

export default Home;
