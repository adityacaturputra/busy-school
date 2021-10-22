/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { IconCurrentTasksTitle } from '../../assets';
import TitleWithIcon from '../TitleWithIcon';
import Task from './Task';

const taskList = [
  {
    title: 'Pemrograman Olah Berkas',
    description: 'Istilah - istilah dalam pemrograman cobol',
    deadline: '2 Mei 2021',
  },
  {
    title: 'Pemrograman Olah Berkas',
    description: 'Istilah - istilah dalam pemrograman cobol',
    deadline: '2 Mei 2021',
  },
  {
    title: 'Pemrograman Olah Berkas',
    description: 'Istilah - istilah dalam pemrograman cobol',
    deadline: '2 Mei 2021',
  },
  {
    title: 'Pemrograman Olah Berkas',
    description: 'Istilah - istilah dalam pemrograman cobol',
    deadline: '2 Mei 2021',
  },
];
export default function Tasks(props) {
  return (
    <>
      <TitleWithIcon title="Pengingat Tugas" Icon={<IconCurrentTasksTitle size="24px" />} />
      {
        taskList.map((task) => (
          <Task title={task.title} description={task.description} deadline={task.deadline} />
        ))
      }
    </>
  );
}

Tasks.propTypes = {
};

Tasks.defaultProps = {
};
