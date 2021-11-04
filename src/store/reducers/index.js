import { combineReducers } from 'redux';
import courses from './courses';
import tasks from './tasks';

export default combineReducers({
  courses,
  tasks,
});
