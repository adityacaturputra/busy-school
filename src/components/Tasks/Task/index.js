/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconListTask } from '../../../assets';
import { ReactComponent as IconListTaskCross } from '../../../assets/svg/IconListTaskCross.svg';
import { ReactComponent as IconListTaskCheck } from '../../../assets/svg/IconListTaskCheck.svg';
import theme from '../../../config/theme';
import TaskDetail from './TaskDetail';

export default function Task({
  title, description, deadline, disabled,
}) {
  const [taskDetailShow, setTaskDetailShow] = useState(false);

  const handleCheckTask = (e) => {
    alert('hello checked');
    e.stopPropagation();
  };

  const handleUncheckTask = (e) => {
    alert('hello unchecked');
    e.stopPropagation();
  };

  return (
    <>
      <Container onClick={() => setTaskDetailShow(!taskDetailShow)} disabled={disabled}>
        <IconListTask disabled={disabled} />
        <p>{title}</p>
        {
          disabled
            ? <IconListTaskCross onClick={handleUncheckTask} />
            : <IconListTaskCheck onClick={handleCheckTask} />
        }
      </Container>
      <TaskDetail description={description} deadline={deadline} show={taskDetailShow} onClick={() => setTaskDetailShow(!taskDetailShow)} disabled={disabled} />

    </>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Task.defaultProps = {
  disabled: false,
};
