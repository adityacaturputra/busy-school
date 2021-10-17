/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { IconCurrentScheduleTitle } from '../../assets';
import { Gap } from '../../style';
import TitleWithIcon from '../TitleWithIcon';
import Course from './Course';

export default function Courses({ day, data }) {
  return (
    <>
      <TitleWithIcon title={day} Icon={<IconCurrentScheduleTitle size="24px" />} />
      {
         data.map((courseData) => (
           <Course title={courseData.name} place={courseData.place} teacher={courseData.teacher} time={courseData['start-time']} key={courseData.id} />
         ))
      }
      <Gap height="36px" />
    </>
  );
}

Courses.propTypes = {
  day: PropTypes.string,
  data: PropTypes.array,
};

Courses.defaultProps = {
  day: 'Mata Kuliah Hari Ini',
  data: [],
};
