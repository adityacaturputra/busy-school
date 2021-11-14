/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import {
  fetchCourses, fetchTasks, sendCheckTask, sendCourse, sendDeleteCourse, sendDeleteTask, sendTask, sendUnCheckTask, sendUpdateCourse,
} from '../../lib/api';
import {
  FETCH_COURSES, ADD_COURSE, FETCH_TASKS, ADD_TASK, CHECK_TASK, DELETE_TASK, EDIT_COURSE, CANCEL_EDIT_COURSE, SEND_EDIT_COURSE, DELETE_COURSE,
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

export const editCourse = (id) => (dispatch) => {
  dispatch({ type: EDIT_COURSE, payload: { id } });
};

export const updateCourse = (courseForm) => async (dispatch) => {
  try {
    const { editedCourse, error } = await sendUpdateCourse(courseForm);
    dispatch({ type: SEND_EDIT_COURSE, payload: { editedCourse, error } });
  } catch (error) {
    console.log(error);
  }
};

export const cancelEditCourse = () => (dispatch) => {
  dispatch({ type: CANCEL_EDIT_COURSE, payload: {} });
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    const { deletedCourse, error } = await sendDeleteCourse(id);
    dispatch({ type: DELETE_COURSE, payload: { deletedCourse, error } });
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

export const deleteTask = (id) => async (dispatch) => {
  const { task, error } = await sendDeleteTask(id);
  dispatch({ type: DELETE_TASK, payload: { task, error } });
};

export const checkTask = (id) => async (dispatch) => {
  const { task, error } = await sendCheckTask(id);
  dispatch({ type: CHECK_TASK, payload: { task, error } });
};
export const unCheckTask = (id) => async (dispatch) => {
  const { task, error } = await sendUnCheckTask(id);
  dispatch({ type: CHECK_TASK, payload: { task, error } });
};
