/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FormContainer } from '../../../style';

function AddTask(props) {
  const [addCourseForm, setAddCourseForm] = useState({
    title: '',
    description: '',
    deadline: '',
  });

  const handleForm = (type) => async (e) => {
    if (type === 'submit') {
      e.preventDefault();
      return;
    }
    setAddCourseForm({ ...addCourseForm, [e.target.name]: e.target.value });
  };
  return (
    <FormContainer>
      <form onChange={handleForm()} onSubmit={handleForm('submit')}>
        <label htmlFor="title">Pilih Mata Kuliah</label>
        <select name="title" id="title">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <label htmlFor="teacher">Dosen Pengampu</label>
        <input type="text" placeholder="e.g. Aditya Catur S.Kom" id="teacher" name="teacher" />
        <label htmlFor="place">Kode Tempat</label>
        <input type="text" placeholder="e.g. D003" id="place" name="place" />
        <label htmlFor="start-time">Waktu Mulai</label>
        <input type="time" id="start-time" name="start-time" />
        <label htmlFor="end-time">Waktu Selesai</label>
        <input type="time" id="end-time" name="end-time" />
        <label htmlFor="hari">Hari</label>
        <div>
          <input type="radio" name="day" id="senin" value="senin" />
          <label htmlFor="senin" className="day">Senin</label>
          <input type="radio" name="day" id="selasa" value="selasa" />
          <label htmlFor="selasa" className="day">Selasa</label>
          <input type="radio" name="day" id="rabu" value="rabu" />
          <label htmlFor="rabu" className="day">Rabu</label>
          <input type="radio" name="day" id="kamis" value="kamis" />
          <label htmlFor="kamis" className="day">Kamis</label>
          <input type="radio" name="day" id="jumat" value="jumat" />
          <label htmlFor="jumat" className="day">Jumat</label>
        </div>
        <button type="submit">Tambah Tugas Kuliah</button>
      </form>
    </FormContainer>
  );
}

AddTask.propTypes = {

};

export default AddTask;
