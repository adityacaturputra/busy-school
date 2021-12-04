/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import {
  ADD_TASK, CHECK_TASK, DELETE_TASK, ERROR_TASK, FETCH_TASKS,
} from '../../lib/constants';
import { sortList, sortNewList } from '../../utils';

const initialState = {
  list: [],
  error: '',
  isFetched: false,
};

const tasksReducer = (tasks = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        list: sortList(action.payload.list),
        error: action.payload.error,
        isFetched: true,
      };
    case ADD_TASK:
      return {
        list: sortNewList(tasks.list, action.payload.list),
        error: action.payload.error,
        isFetched: true,
      };
    case CHECK_TASK:
      tasks.list = tasks.list.filter((task) => task.id !== action.payload.task.id);
      return {
        list: sortNewList(tasks.list, action.payload.task),
        error: action.payload.error,
        isFetched: true,
      };
    case DELETE_TASK:
      return {
        list: tasks.list.filter((task) => action.payload.task.id !== task.id),
        isFetched: true,
      };
    case ERROR_TASK:
      return {
        ...tasks,
        error: action.payload,
        isFetched: true,
      };
    default:
      return tasks;
  }
};

export default tasksReducer;
