/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, updateCourse } from '../../../store/actions';
import { FormContainer } from '../../../style';
import { TitleForm } from '../../../style/Form';
import { getWeek } from '../../../utils/time';
import { capitalizeFirstLetter } from '../../../utils/letter';

export default function CourseForm({ closeForm, isEditForm }) {
  const courseState = useSelector((state) => state.courses.editCourse.courseState);
  const initialState = isEditForm ? courseState
    : {
      name: '',
      teacher: '',
      place: '',
      'start-time': '',
      'end-time': '',
      day: '',
    };
  const [courseForm, setCourseForm] = useState(initialState);
  const dispatch = useDispatch();
  const week = getWeek();
  const handleForm = (type) => (e) => {
    if (type === 'submit') {
      e.preventDefault();
      if (isEditForm) {
        dispatch(updateCourse(courseForm));
      } else {
        dispatch(addCourse(courseForm));
      }
      closeForm();
      return;
    }
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <TitleForm text={isEditForm ? 'Edit Mata Kuliah' : 'Tambah Mata Kuliah'} />
      <form onChange={handleForm()} onSubmit={handleForm('submit')}>
        <label htmlFor="mata-kuliah">Nama Mata Kuliah</label>
        <input type="text" placeholder="e.g. Matematika Informatika" id="mata-kuliah" name="name" value={courseForm.name} />
        <label htmlFor="teacher">Dosen Pengampu</label>
        <input type="text" placeholder="e.g. Aditya Catur S.Kom" id="teacher" name="teacher" value={courseForm.teacher} />
        <label htmlFor="place">Kode Tempat</label>
        <input type="text" placeholder="e.g. D003" id="place" name="place" value={courseForm.place} />
        <label htmlFor="start-time">Waktu Mulai</label>
        <input type="time" id="start-time" name="start-time" value={courseForm['start-time']} />
        <label htmlFor="end-time">Waktu Selesai</label>
        <input type="time" id="end-time" name="end-time" value={courseForm['end-time']} />
        <label htmlFor="hari">Hari</label>
        <div>
          {
            week.map((dayName) => (
              <>
                <input type="radio" name="day" id={dayName} value={dayName} defaultChecked={isEditForm && (courseState.day === dayName)} />
                <label htmlFor={dayName} className="day" key={`${dayName} day`}>{capitalizeFirstLetter(dayName)}</label>
              </>
            ))
          }
        </div>
        <button type="submit">{isEditForm ? 'Update Mata Kuliah' : 'Tambah Mata Kuliah'}</button>
      </form>
    </FormContainer>
  );
}

CourseForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  isEditForm: PropTypes.bool,
};

CourseForm.defaultProps = {
  isEditForm: false,
};