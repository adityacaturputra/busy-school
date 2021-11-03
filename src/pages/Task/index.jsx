import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav';
import Tasks from '../../components/Tasks';
import Header from '../../components/Header';
import { IconTask } from '../../assets';
import { Wrapper } from '../../style';
import { Modal } from '../../components';
import AddTask from './AddTask';

function Task(props) {
  const [addClick, setAddClick] = useState(false);

  const closeForm = () => setAddClick(false);
  return (
    <div>
      <Header Icon={<IconTask size="24px" />} title="Tugas Kamu" description="3 Tugas" />
      <Wrapper>
        <Tasks />
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
