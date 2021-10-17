import { FETCH_COURSES } from '../../lib/constants';

const coursesReducer = (courses = {}, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    default:
      return courses;
  }
};

export default coursesReducer;
