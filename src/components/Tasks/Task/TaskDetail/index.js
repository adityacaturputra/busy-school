import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import theme from '../../../../config/theme';
import { IconListTaskClock, IconListTaskDeadline, IconListTaskDescription } from '../../../../assets';
import { getDate } from '../../../../utils';

function TaskDetail(props) {
  const {
    onClick, show, disabled, description, deadlineDate, deadlineTime,
  } = props;
  const timeRemainingValue = new Date(`${deadlineDate}T${deadlineTime}:00`).getTime() - new Date().getTime();
  const [timeRemaining, setTimeRemaining] = useState(timeRemainingValue);
  const TimeRemainingConverter = ({ milliseconds }) => {
    let day; let hour; let minute; let seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds %= 60;
    hour = Math.floor(minute / 60);
    minute %= 60;
    day = Math.floor(hour / 24);
    hour %= 24;
    let isLate;
    if (seconds < 0 || minute < 0 || hour < 0 || day < 0) {
      isLate = true;
      seconds *= -1;
      minute *= -1;
      hour *= -1;
      day *= -1;
    } else {
      isLate = false;
    }
    let time;
    if (day === 0) {
      time = `${hour} jam ${minute} menit ${seconds} detik`;
      if (hour === 0) {
        time = `${minute} menit ${seconds} detik`;
        if (minute === 0) {
          time = `${seconds} detik`;
        }
      }
    } else {
      time = `${day} hari ${hour} jam ${minute} menit ${seconds} detik`;
    }

    return (
      isLate ? `Sudah terlewat ${time}` : time
    );
  };
  useEffect(() => {
    const timeRemainingInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1000);
    }, 1000);
    return () => {
      clearInterval(timeRemainingInterval);
    };
  }, []);

  return (
    <>
      <Transition in={show} timeout={200}>
        {(state) => (
          <Container onClick={onClick} show={state} disabled={disabled}>
            <Content className="description">
              <IconListTaskDescription />
              <Description>{description}</Description>
            </Content>
            <Content>
              <IconListTaskDeadline />
              <Text>
                {getDate(deadlineDate)}
                {'   '}
                -----
                {'   '}
                {deadlineTime}
              </Text>
            </Content>
            <Content>
              <IconListTaskClock />
              <Text>
                <TimeRemainingConverter milliseconds={timeRemaining} />
              </Text>
            </Content>
          </Container>
        )}
      </Transition>
    </>
  );
}

TaskDetail.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  description: PropTypes.string.isRequired,
  deadlineDate: PropTypes.instanceOf(Date).isRequired,
  deadlineTime: PropTypes.string.isRequired,
};

TaskDetail.defaultProps = {
  show: false,
  disabled: false,
};

export default TaskDetail;

const Container = styled.div`
    display: ${({ show }) => (show === 'entered' || show === 'entering' ? 'flex' : 'none')};
    opacity: ${({ show }) => (show === 'entering' ? '.3' : '1')};
    opacity: ${({ disabled }) => disabled && '.3'};
    flex-direction: column;
    padding: 4px 28px 8px;
    border-bottom: 1px solid ${theme.color.black_10};
    cursor: default;
    transition: 0.5s;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    /* &.description {
      margin-left: -2px;
    } */
`;

const Text = styled.p`
    font-size: 12px;
    color: ${theme.color.black_70};
    margin-left: 12px;
`;

const Description = styled(Text)`
    line-height: 150%;
`;
