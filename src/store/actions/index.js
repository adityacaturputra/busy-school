/* eslint-disable import/prefer-default-export */
import {
  fetchCourses, fetchTasks, sendCourse, sendTask,
} from '../../lib/api';
import {
  FETCH_COURSES, ADD_COURSE, FETCH_TASKS, ADD_TASK,
} from '../../lib/constants';

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

export const getTasks = () => async (dispatch) => {
  try {
    const { list, error } = await fetchTasks();
    dispatch({ type: FETCH_TASKS, payload: { list, error } });
  } catch (error) {
    console.log(error);
  }
};

export const addTasks = (taskForm) => async (dispatch) => {
  try {
    const { list, error } = await sendTask(taskForm);
    dispatch({ type: ADD_TASK, payload: { list, error } });
  } catch (error) {
    console.log(error);
  }
};
