/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { IconCurrentTasksTitle } from '../../assets';
import TitleWithIcon from '../TitleWithIcon';
import Task from './Task';
import Fade from '../Animation/Fade';

export default function Tasks(props) {
  const { list } = props;
  return (
    <>
      <TitleWithIcon title="Pengingat Tugas" Icon={<IconCurrentTasksTitle size="24px" />} />
      {
        list.map((task, i) => (
          <Fade duration={i * 250}>
            <Task title={task.title} description={task.description} deadlineDate={task.deadlineDate} deadlineTime={task.deadlineTime} />
          </Fade>
        ))
      }
    </>
  );
}

Tasks.propTypes = {
  list: PropTypes.array,
};

Tasks.defaultProps = {
  list: [],
};
