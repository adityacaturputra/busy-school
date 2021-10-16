/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Nav from '../../components/Nav';
import { Wrapper } from '../../style';
import Courses from '../../components/Courses';
import Header from '../../components/Header';
import { IconSchedule } from '../../assets';
import Add from '../../components/Add';
import theme from '../../config/theme';

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
            <Form>
              <form>
                <label htmlFor="mata-kuliah">Nama Mata Kuliah</label>
                <input type="text" placeholder="e.g. Matematika Informatika" id="mata-kuliah" />
                <label htmlFor="teacher">Dosen Pengampu</label>
                <input type="text" placeholder="e.g. Aditya Catur S.Kom" id="teacher" />
                <label htmlFor="place">Kode Tempat</label>
                <input type="text" placeholder="e.g. D003" id="place" />
                <label htmlFor="hari">Hari</label>
                <Day>
                  <input type="radio" name="day" id="senin" />
                  <label htmlFor="senin" className="day">Senin</label>
                  <input type="radio" name="day" id="selasa" />
                  <label htmlFor="selasa" className="day">Selasa</label>
                  <input type="radio" name="day" id="rabu" />
                  <label htmlFor="rabu" className="day">Rabu</label>
                  <input type="radio" name="day" id="kamis" />
                  <label htmlFor="kamis" className="day">Kamis</label>
                  <input type="radio" name="day" id="jumat" />
                  <label htmlFor="jumat" className="day">Jumat</label>
                </Day>
              </form>
            </Form>
          )
          }
        </CSSTransition>

      </Wrapper>
      <Nav active="schedule" />
      <Add clicked={addClick} onClick={() => setAddClick(!addClick)} />

    </>
  );
}

const Day = styled.div`
  input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
  }
  label.day {
    display: inline-block;
    background-color: #fff;
    font-weight: 400;
    padding: 4px;
    margin: 2px;
    font-size: 16px; 
    color: ${theme.color.black_70};
    border: 2px solid ${theme.color.black_10};
  }
  input[type="radio"]:checked + label {
    border-color: ${theme.color.black_50};
  }
  label:hover {
  background-color: ${theme.color.black_10};
  }
`;

const Form = styled.div`
  padding: 36px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  label {
    font-size: 18px;
    font-weight: 500;
    color: ${theme.color.black_100};
    margin-bottom: 8px;
    display: block;
  }
  input[type="text"] {
    width: 256px;
    padding: 4px;
    margin-bottom: 36px;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.color.black_70};
    border: none;
    border-bottom: 2px solid ${theme.color.black_30};
    :focus {
    outline: none;
    border-bottom: 2px solid ${theme.color.black_100};
    }
  }
  transition: .5s;
  // enter from
  &.appear-enter {
    top: 150%;
  }

  // enter to
  &.appear-enter-active {
    top: 36%;
  }

  // exit from
  &.appear-exit {
    top: 36;
  }

  // exit to 
  &.appear-exit-active {
    top: 150%;
  }
`;

const Layer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color:  rgba(0, 0, 0, 0.75);
  transition: opacity 0.3s;

  // enter from
  &.animate-enter {
    opacity: 0;
  }

  // enter to
  &.animate-enter-active {
    opacity: 1;
  }

  // exit from
  &.animate-exit {
    opacity: 1;
  }

  // exit to 
  &.animate-exit-active {
    opacity: 0;
  }
`;

Schedule.propTypes = {

};

export default Schedule;
