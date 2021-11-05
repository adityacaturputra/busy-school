/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import {
  ADD_TASK, CHECK_TASK, FETCH_TASKS,
} from '../../lib/constants';

const convertTaskDateToMiliSeconds = (task) => Date.parse(`${task.deadlineDate}T${task.deadlineTime}:00`);
const sortNewList = (tasks, list) => {
  list.deadlineDateMiliSeconds = convertTaskDateToMiliSeconds(list);
  tasks.push(list);
  const newTasks = tasks.sort((task1, task2) => task1.deadlineDateMiliSeconds - task2.deadlineDateMiliSeconds);
  return newTasks;
};

const sortList = (list) => {
  const newList = list.sort((task1, task2) => {
    task1.deadlineDateMiliSeconds = convertTaskDateToMiliSeconds(task1);
    task2.deadlineDateMiliSeconds = convertTaskDateToMiliSeconds(task2);
    return task1.deadlineDateMiliSeconds - task2.deadlineDateMiliSeconds;
  });
  return newList;
};

const initialState = {
  list: [],
};

const tasksReducer = (tasks = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        list: [...sortList(action.payload.list)],
        error: action.payload.error,
      };
    case ADD_TASK:
      return {
        list: [
          ...sortNewList(tasks.list, action.payload.list),
        ],
        error: action.payload.error,
      };
    case CHECK_TASK:
      const newTask = tasks.list.filter((task) => task.id !== action.payload.task.id);
      return {
        list: [
          ...sortNewList(newTask, action.payload.task),
        ],
        error: action.payload.error,
      };
    default:
      return tasks;
  }
};

export default tasksReducer;
