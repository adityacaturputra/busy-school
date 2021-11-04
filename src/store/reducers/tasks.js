import { ADD_TASK, FETCH_TASKS } from '../../lib/constants';

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
    default:
      return tasks;
  }
};

export default tasksReducer;
