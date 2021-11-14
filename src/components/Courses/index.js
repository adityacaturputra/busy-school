/* eslint-disable radix */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { IconCurrentScheduleTitle } from '../../assets';
import { Gap } from '../../style';
import TitleWithIcon from '../TitleWithIcon';
import Course from './Course';
import { capitalizeFirstLetter, timeSorter } from '../../utils';
import { Fade } from '../Animation';

export default function Courses({ day, data, isCurrentDay }) {
  if (data.length === 0) return <></>;

  const dataSorted = timeSorter(data);
  return (
    <>
      <TitleWithIcon title={capitalizeFirstLetter(day)} Icon={<IconCurrentScheduleTitle size="24px" />} />
      {
         dataSorted.map((courseData, i) => (
           <Fade duration={i * 200} key={courseData.id}>
             <Course id={courseData.id} title={courseData.name} place={courseData.place} teacher={courseData.teacher} time={{ startTime: courseData['start-time'], endTime: courseData['end-time'] }} isCurrentDay={isCurrentDay} last={dataSorted.length - 1 === i} />
           </Fade>
         ))
      }
      <Gap height="36px" />
    </>
  );
}

Courses.propTypes = {
  day: PropTypes.string,
  data: PropTypes.array,
  isCurrentDay: PropTypes.bool,
};

Courses.defaultProps = {
  isCurrentDay: false,
  day: 'Mata Kuliah Hari Ini',
  data: [],
};
