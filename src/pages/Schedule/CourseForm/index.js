/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, deleteCourse, updateCourse } from '../../../store/actions';
import { IconDelete } from '../../../assets';
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
    if (type === 'delete') {
      e.preventDefault();
      dispatch(deleteCourse(courseForm.id));
      closeForm();
    }
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <TitleForm text={isEditForm ? 'Edit Mata Kuliah' : 'Tambah Mata Kuliah'} />
      <form onSubmit={handleForm('submit')}>
        <label htmlFor="mata-kuliah">Nama Mata Kuliah</label>
        <input type="text" placeholder="e.g. Matematika Informatika" id="mata-kuliah" name="name" value={courseForm.name} onChange={handleForm()} />
        <label htmlFor="teacher">Dosen Pengampu</label>
        <input type="text" placeholder="e.g. Aditya Catur S.Kom" id="teacher" name="teacher" value={courseForm.teacher} onChange={handleForm()} />
        <label htmlFor="place">Kode Tempat</label>
        <input type="text" placeholder="e.g. D003" id="place" name="place" value={courseForm.place} onChange={handleForm()} />
        <label htmlFor="start-time">Waktu Mulai</label>
        <input type="time" id="start-time" name="start-time" value={courseForm['start-time']} onChange={handleForm()} />
        <label htmlFor="end-time">Waktu Selesai</label>
        <input type="time" id="end-time" name="end-time" value={courseForm['end-time']} onChange={handleForm()} />
        <label htmlFor="hari">Hari</label>
        <div>
          {
            week.map((dayName) => (
              <>
                <input type="radio" name="day" id={dayName} value={dayName} defaultChecked={isEditForm && (courseState.day === dayName)} onChange={handleForm()} />
                <label htmlFor={dayName} className="day" key={`${dayName}-day`}>{capitalizeFirstLetter(dayName)}</label>
              </>
            ))
          }
        </div>
        <button type="submit">{isEditForm ? 'Update Mata Kuliah' : 'Tambah Mata Kuliah'}</button>
        {
          isEditForm
          && <IconDelete onClick={handleForm('delete')} caption="Hapus Mata Kuliah" />
        }
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
