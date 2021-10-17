/* eslint-disable import/prefer-default-export */
import { fetchCourses } from '../../lib/api';
import { FETCH_COURSES } from '../../lib/constants';

export const getCourses = () => async (dispatch) => {
  try {
    const { mataKuliah, error } = await fetchCourses();
    console.log(mataKuliah);
    dispatch({ type: FETCH_COURSES, payload: { mataKuliah, error } });
  } catch (error) {
    console.log(error);
  }
};
