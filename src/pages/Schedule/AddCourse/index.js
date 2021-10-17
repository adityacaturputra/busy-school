/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormContainer from '../FormContainer';

export default function AddCourse() {
  const [addCourseForm, setAddCourseForm] = useState({
    matkulName: '',
    teacher: '',
    place: '',
    time: '',
    day: 'senin',
  });
  console.log(addCourseForm);

  const handleForm = (type) => (e) => {
    if (type === 'submit') {
      e.preventDefault();
      return;
    }
    setAddCourseForm({ ...addCourseForm, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <form onChange={handleForm()} onSubmit={handleForm('submit')}>
        <label htmlFor="mata-kuliah">Nama Mata Kuliah</label>
        <input type="text" placeholder="e.g. Matematika Informatika" id="mata-kuliah" name="matkulName" />
        <label htmlFor="teacher">Dosen Pengampu</label>
        <input type="text" placeholder="e.g. Aditya Catur S.Kom" id="teacher" name="teacher" />
        <label htmlFor="place">Kode Tempat</label>
        <input type="text" placeholder="e.g. D003" id="place" name="place" />
        <label htmlFor="place">Waktu</label>
        <input type="time" id="place" name="time" />
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
        <button type="submit">Tambah Mata Kuliah</button>
      </form>
    </FormContainer>
  );
}
