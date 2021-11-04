/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { ADD_TASK, CHECK_TASK, FETCH_TASKS } from '../../lib/constants';

const initialState = {
  list: [],
};

const tasksReducer = (tasks = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    case ADD_TASK:
      return {
        list: [
          ...tasks.list,
          action.payload.list,
        ],
        error: action.payload.error,
      };
    case CHECK_TASK:
      const newTask = tasks.list.filter((task) => task.id !== action.payload.task.id)[0];
      return {
        list: [
          newTask,
          action.payload.task,
        ],
        error: action.payload.error,
      };
    default:
      return tasks;
  }
};

export default tasksReducer;
