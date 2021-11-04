import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Nav from '../../components/Nav';
import Tasks from '../../components/Tasks';
import Header from '../../components/Header';
import { IconTask } from '../../assets';
import { Wrapper } from '../../style';
import { Modal } from '../../components';
import AddTask from './AddTask';

function Task(props) {
  const [addClick, setAddClick] = useState(false);
  const { list, error } = useSelector((state) => state.tasks);
  console.log(list);

  const closeForm = () => setAddClick(false);
  return (
    <div>
      <Header Icon={<IconTask size="24px" />} title="Tugas Kamu" description="3 Tugas" />
      <Wrapper>
        <Tasks list={list} />
      </Wrapper>
      <Nav active="task" />
      <Modal show={addClick} onClick={() => setAddClick(!addClick)}>
        <AddTask closeForm={closeForm} />
      </Modal>
    </div>
  );
}

Task.propTypes = {

};

export default Task;
