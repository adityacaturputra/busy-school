/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer } from '../../../style';
import { TitleForm } from '../../../style/Form';

function AddTask(props) {
  const [addTaskForm, setAddTaskForm] = useState({
    title: '',
    description: '',
    deadline: '',
  });

  const courseListState = useSelector((state) => state.courses.mataKuliah);
  const courseList = courseListState.map((course) => ({ id: course.id, name: course.name }));

  const handleForm = (type) => async (e) => {
    if (type === 'submit') {
      e.preventDefault();
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
          {
          courseList.map((course) => (
            <option value={course.name} key={course.id}>{course.name}</option>
          ))
        }
        </select>
        <label htmlFor="title">Judul Tugas</label>
        <input type="text" placeholder="e.g. Aditya Catur S.Kom" id="title" name="title" />

        <label htmlFor="end-time">Waktu Selesai</label>
        <input type="time" id="end-time" name="end-time" />

        <div>
          <button type="submit">Tambah Tugas Kuliah</button>
        </div>
      </form>
    </FormContainer>
  );
}

AddTask.propTypes = {

};

export default AddTask;
