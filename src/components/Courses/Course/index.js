import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconCourse, IconDestination } from '../../../assets';
import { Gap } from '../../../style';
import theme from '../../../config/theme';
import IconTeacher from '../../../assets/svg/IconTeacher';

const Course = (props) => {
  const {
    title, place, teacher, time, disabled, last,
  } = props;
  return (
    <Container last={last}>
      <TitleContainer>
        <IconCourse disabled={disabled} />
        <Gap width="6px" />
        <Title disabled={disabled}>{title}</Title>
      </TitleContainer>
      <Gap height="8px" />
      <DescriptionContainer>
        <IconDestination disabled={disabled} />
        <SubText disabled={disabled}>{place}</SubText>
        <IconTeacher disabled={disabled} />
        <SubText disabled={disabled}>{teacher}</SubText>
        <SubTextTime disabled={disabled}>{time}</SubTextTime>
      </DescriptionContainer>
    </Container>
  );
};

Course.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  time: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  last: PropTypes.bool,
};

Course.defaultProps = {
  disabled: false,
  last: false,
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
    color: ${(props) => (props.disabled ? theme.color.black_30 : theme.color.black_50)};
    font-size: 12px;
    font-weight: 400;
    margin-right: 12px;
    margin-left: 2px;
  `;

const SubTextTime = styled(SubText)`
    margin: 0 0 0 auto;
  `;

export default Course;
