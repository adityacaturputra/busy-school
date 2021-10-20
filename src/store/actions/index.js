/* eslint-disable import/prefer-default-export */
import { fetchCourses, sendCourse } from '../../lib/api';
import { FETCH_COURSES, ADD_COURSE } from '../../lib/constants';

export const getCourses = () => async (dispatch) => {
  try {
    const { mataKuliah, error } = await fetchCourses();
    dispatch({ type: FETCH_COURSES, payload: { mataKuliah, error } });
  } catch (error) {
    console.log(error);
  }
};

export const addCourse = (courseForm) => async (dispatch) => {
  try {
    const { addedCourse, error } = await sendCourse(courseForm);
    dispatch({ type: ADD_COURSE, payload: { addedCourse, error } });
  } catch (error) {
    console.log(error);
  }
};
