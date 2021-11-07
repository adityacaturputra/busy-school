/* eslint-disable no-param-reassign */
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
      <Fade duration={250}>

        <TitleWithIcon title="Pengingat Tugas" Icon={<IconCurrentTasksTitle size="24px" />} />
        {
        list.length === 0
          ? <h1 style={{ textAlign: 'center' }}>Tidak ada tugas</h1>
          : list.map((task) => (
            <Task task={task} key={task.id} />
          ))
        }
      </Fade>
    </>
  );
}

Tasks.propTypes = {
  list: PropTypes.array,
};

Tasks.defaultProps = {
  list: [],
};
