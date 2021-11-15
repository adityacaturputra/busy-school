/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  IconCourse, IconDestination, IconSetting, IconTeacher,
} from '../../../assets';
import { Gap } from '../../../style';
import theme from '../../../config/theme';
import { editCourse } from '../../../store/actions';
import useCourseRemainingTime from '../../../hooks/useCourseRemainingTime';

const Course = (props) => {
  const {
    id, title, place, teacher, time, disabled, last, isCurrentDay,
  } = props;
  const { remainingTime, courseInfo } = useCourseRemainingTime(isCurrentDay, time);
  const dispatch = useDispatch();
  const handleEditCourse = (id) => () => {
    dispatch(editCourse(id));
  };

  return (
    <Container last={last}>
      <TitleContainer>
        <IconCourse disabled={courseInfo.isCourseTimePassed || disabled} />
        <Gap width="6px" />
        <Title disabled={courseInfo.isCourseTimePassed || disabled}>{title}</Title>
        {
          !isCurrentDay
          && (
            <ForceToRight>
              <IconSetting onClick={handleEditCourse(id)} />
            </ForceToRight>
          )
        }
      </TitleContainer>
      <Gap height="8px" />
      <DescriptionContainer>
        <IconDestination disabled={courseInfo.isCourseTimePassed || disabled} />
        <SubText disabled={courseInfo.isCourseTimePassed || disabled}>{place}</SubText>
        <IconTeacher disabled={courseInfo.isCourseTimePassed || disabled} />
        <SubText disabled={courseInfo.isCourseTimePassed || disabled}>{teacher}</SubText>
        <ForceToRight disabled={courseInfo.isCourseTimePassed || disabled}>
          {courseInfo.isCurrentCourseTime
            ? remainingTime
            : `${time.startTime} - ${time.endTime}`}
        </ForceToRight>
      </DescriptionContainer>
    </Container>
  );
};

Course.propTypes = {
  id: PropTypes.any.isRequired,
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
    padding: 12px 24px ${({ last }) => (last ? '36' : '12')}px 24px;
    border-bottom: 1px solid ${({ last }) => (last ? theme.color.black_30 : theme.color.black_10)};
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
    @media (max-width: 345px){
    font-size: 14px;
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

const ForceToRight = styled(SubText)`
    margin: 0 0 0 auto;
  `;

export default Course;
