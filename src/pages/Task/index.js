/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Nav, Tasks, Header, Modal,
} from '../../components';
import { IconTask } from '../../assets';
import { Wrapper } from '../../style';
import AddTask from './AddTask';
import IsFetched from '../../components/IsFetched';
import Loader from '../../components/Loader';
import TextError from '../../components/TextError';

function Task() {
  const [addClick, setAddClick] = useState(false);
  const { list, isFetched: isFetchedTask, error: errorTask } = useSelector((state) => state.tasks);
  const unCompleteTask = list.filter((task) => !task.disabled);
  const closeForm = () => setAddClick(false);
  return (
    <div>
      <Header Icon={<IconTask size="24px" />} title={`${unCompleteTask.length} tersisa`} description={`${list.length - unCompleteTask.length} sudah diselesaikan`} />
      <Wrapper>
        <IsFetched isFetched={isFetchedTask} isError={errorTask} Loader={<Loader />} Error={<TextError title={errorTask} />}>
          <Tasks list={list} />
        </IsFetched>
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
