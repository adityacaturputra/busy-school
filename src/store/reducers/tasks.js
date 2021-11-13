/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import {
  ADD_TASK, CHECK_TASK, DELETE_TASK, FETCH_TASKS,
} from '../../lib/constants';
import { sortList, sortNewList } from '../../utils';

const initialState = {
  list: [],
};

const tasksReducer = (tasks = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        list: sortList(action.payload.list),
        error: action.payload.error,
      };
    case ADD_TASK:
      return {
        list: sortNewList(tasks.list, action.payload.list),
        error: action.payload.error,
      };
    case CHECK_TASK:
      tasks.list = tasks.list.filter((task) => task.id !== action.payload.task.id);
      return {
        list: sortNewList(tasks.list, action.payload.task),
        error: action.payload.error,
      };
    case DELETE_TASK:
      return {
        list: tasks.list.filter((task) => action.payload.task.id !== task.id),
      };
    default:
      return tasks;
  }
};

export default tasksReducer;
