import { ADD_COURSE, FETCH_COURSES } from '../../lib/constants';

const coursesReducer = (courses = {}, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    case ADD_COURSE:
      return {
        mataKuliah: [
          ...courses.mataKuliah,
          action.payload.addedCourse,
        ],
        error: action.payload.error,
      };
    default:
      return courses;
  }
};

export default coursesReducer;
