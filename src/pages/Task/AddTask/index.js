/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer } from '../../../style';
import { TitleForm } from '../../../style/Form';
import { sendTask } from '../../../lib/api';
import { addTasks } from '../../../store/actions';

function AddTask({ closeForm }) {
  const [addTaskForm, setAddTaskForm] = useState({
    title: '',
    description: '',
    deadlineDate: '',
    deadlineTime: '',
    disabled: false,
  });
  const dispatch = useDispatch();
  const courseListState = useSelector((state) => state.courses.mataKuliah);
  const courseList = courseListState.map((course) => ({ id: course.id, name: course.name }));

  const handleForm = (type) => async (e) => {
    if (type === 'submit') {
      e.preventDefault();
      console.log(addTaskForm);
      dispatch(addTasks(addTaskForm));
      closeForm();
      return;
    }
    setAddTaskForm({ ...addTaskForm, [e.target.name]: e.target.value });
  };
  return (
    <FormContainer>
      <TitleForm text="Tambah Tugas Kuliah" />
      <form onChange={handleForm()} onSubmit={handleForm('submit')}>
        <label htmlFor="title">Pilih Mata Kuliah</label>
        <select name="title" id="title">
          <option value="">Pilih</option>
          {
          courseList.map((course) => (
            <option value={course.name} key={course.id}>{course.name}</option>
          ))
        }
        </select>
        <label htmlFor="description">Judul Tugas</label>
        <input type="text" placeholder="e.g Penyusunan Neraca Saldo" id="description" name="description" />
        <label htmlFor="deadlineDate">Deadline</label>
        <input type="date" id="deadlineDate" name="deadlineDate" />
        <label htmlFor="deadlineTime">Waktu Selesai</label>
        <input type="time" id="deadlineTime" name="deadlineTime" />

        <div>
          <button type="submit">Tambah Tugas Kuliah</button>
        </div>
      </form>
    </FormContainer>
  );
}

AddTask.propTypes = {
  closeForm: PropTypes.func.isRequired,
};

export default AddTask;
