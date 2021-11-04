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
  if (list !== 0) console.log(list[0]);
  return (
    <>
      <TitleWithIcon title="Pengingat Tugas" Icon={<IconCurrentTasksTitle size="24px" />} />
      {
        list === 0
          ? <></>
          : list.map((task, i) => (
            <Fade duration={i * 250}>
              <Task task={task} />
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
