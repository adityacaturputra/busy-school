/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

Home.propTypes = {

};

export default Home;

const Wrapper = styled.div`
  @media (min-width: 1024px){
    margin-left: 122px;
  }  
  margin-bottom: 100px;
`;
