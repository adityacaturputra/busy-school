/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IconListTask, IconListTaskCross, IconListTaskCheck } from '../../../assets';
import theme from '../../../config/theme';
import TaskDetail from './TaskDetail';
import { checkTask, unCheckTask } from '../../../store/actions';
import { Fade } from '../../Animation';

export default function Task(props) {
  const {
    title, description, deadlineDate, deadlineTime, disabled, id,
  } = props.task;
  const [taskDetailShow, setTaskDetailShow] = useState(false);
  const dispatch = useDispatch();
  const handleCheckTask = (taskId) => (e) => {
    dispatch(checkTask(taskId));
    e.stopPropagation();
  };

  const handleUncheckTask = (taskId) => (e) => {
    dispatch(unCheckTask(taskId));
    e.stopPropagation();
  };

  return (
    <Fade>
      <Container onClick={() => setTaskDetailShow(!taskDetailShow)} disabled={disabled}>
        <IconListTask disabled={disabled} />
        <p>{title}</p>
        {
          disabled
            ? <IconListTaskCross onClick={handleUncheckTask(id)} />
            : <IconListTaskCheck onClick={handleCheckTask(id)} />
        }
      </Container>
      <TaskDetail description={description} deadlineDate={deadlineDate} deadlineTime={deadlineTime} show={taskDetailShow} onClick={() => setTaskDetailShow(!taskDetailShow)} disabled={disabled} />

    </Fade>
  );
}

const Container = styled.div`
    padding: 12px 28px;
    display: flex;
    align-items: center;
    :active{
    background-color: ${theme.color.black_10};
    }
    cursor: pointer;
    p {
      font-size: 14px;
      margin-left: 8px;
      margin-right: auto;
      font-weight: 500;
      color: ${({ disabled }) => (disabled ? theme.color.black_30 : theme.color.black_100)};
    }
    border-bottom: 1px solid ${theme.color.black_10};
`;

Task.propTypes = {
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // deadlineDate: PropTypes.string.isRequired,
  // deadlineTime: PropTypes.string.isRequired,
  // disabled: PropTypes.bool,
  // key: PropTypes.any.isRequired,
  task: PropTypes.object.isRequired,
};

Task.defaultProps = {
  // disabled: false,

};
