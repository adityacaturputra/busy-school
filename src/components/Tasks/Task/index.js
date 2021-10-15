import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { IconListTask } from '../../../assets';
import theme from '../../../config/theme';
import TaskDetail from './TaskDetail';

export default function Task({ title }) {
  const [taskDetailShow, setTaskDetailShow] = useState(false);

  return (
    <>
      <Container onClick={() => setTaskDetailShow(!taskDetailShow)}>
        <IconListTask />
        <p>{title}</p>
      </Container>
      <TaskDetail show={taskDetailShow} onClick={() => setTaskDetailShow(!taskDetailShow)} />
    </>
  );
}

const Container = styled.div`
    padding: 12px 28px;
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      margin-left: 8px;
      font-weight: 500;
      color: ${theme.color.black_100}
    }
    border-bottom: 1px solid ${theme.color.black_10};
`;

Task.propTypes = {
  title: PropTypes.string.isRequired,
};
