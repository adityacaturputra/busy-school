/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconCourse, IconDestination, IconTeacher } from '../../../assets';
import { Gap } from '../../../style';
import theme from '../../../config/theme';
import { convertDateToSecondsInDay } from '../../../utils';

const Course = (props) => {
  const {
    title, place, teacher, time, disabled, last, isCurrentDay,
  } = props;
  const [remainingTime, setRemainingTime] = useState('');
  const [courseInfo, setCourseInfo] = useState({ isCurrentCourseTime: false, isCourseTimePassed: false });
  useEffect(() => {
    const remainingCourseTimeInterval = setInterval(() => {
      if (isCurrentDay) {
        const courseTimeStart = convertDateToSecondsInDay(new Date(`1970-01-01T${time.startTime}:00`));
        const courseTimeEnd = convertDateToSecondsInDay(new Date(`1970-01-01T${time.endTime}:00`));
        const currentTime = convertDateToSecondsInDay();
        const isCourseTimePassed = currentTime > courseTimeEnd;
        const isCurrentCourseTime = currentTime > courseTimeStart && currentTime < courseTimeEnd;
        setCourseInfo({ isCourseTimePassed, isCurrentCourseTime });
        if (isCurrentCourseTime) {
          const remainingTimeTest = courseTimeEnd - currentTime - 10;
          const seconds = remainingTimeTest % 60;
          const minutes = Math.floor((remainingTimeTest % (3600)) / 60);
          const hours = Math.floor(remainingTimeTest / 3600);
          setRemainingTime(() => `${hours > 0 ? `${hours}:` : ''}${minutes > 0 ? `${minutes}:` : ''}${seconds}`);
        }
      }
    }, 1000);
    return () => {
      clearInterval(remainingCourseTimeInterval);
    };
  }, []);
  return (
    <Container last={last}>
      <TitleContainer>
        <IconCourse disabled={courseInfo.isCourseTimePassed || disabled} />
        <Gap width="6px" />
        <Title disabled={courseInfo.isCourseTimePassed || disabled}>{title}</Title>
      </TitleContainer>
      <Gap height="8px" />
      <DescriptionContainer>
        <IconDestination disabled={courseInfo.isCourseTimePassed || disabled} />
        <SubText disabled={courseInfo.isCourseTimePassed || disabled}>{place}</SubText>
        <IconTeacher disabled={courseInfo.isCourseTimePassed || disabled} />
        <SubText disabled={courseInfo.isCourseTimePassed || disabled}>{teacher}</SubText>
        <SubTextTime disabled={courseInfo.isCourseTimePassed || disabled}>
          {courseInfo.isCurrentCourseTime
            ? remainingTime
            : `${time.startTime} - ${time.endTime}`}
        </SubTextTime>
      </DescriptionContainer>
    </Container>
  );
};

Course.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  last: PropTypes.bool,
  isCurrentDay: PropTypes.bool,
};

Course.defaultProps = {
  disabled: false,
  last: false,
  isCurrentDay: false,
};

const Container = styled.div`
    padding: 12px 24px 12px 24px;
    border-bottom: 1px solid ${({ last }) => (last ? theme.color.black_50 : theme.color.black_10)};
  `;

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
  `;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
  `;

const Title = styled.p`
    @media (min-width: 1024px){
    font-size: 18px;
    }
    font-size: 16px;
    color: ${(props) => (props.disabled ? theme.color.black_30 : theme.color.black_100)};
  `;

const SubText = styled.p`
    @media (min-width: 375px){
      font-size: 12px;
      margin-right: 12px;
    }
    color: ${(props) => (props.disabled ? theme.color.black_30 : theme.color.black_50)};
    font-size: 10px;
    font-weight: 400;
    margin-right: 8px;
    margin-left: 2px;
    line-height: 0;
  `;

const SubTextTime = styled(SubText)`
    margin: 0 0 0 auto;
  `;

export default Course;
