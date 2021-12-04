/* eslint-disable max-len */
import {
  ADD_COURSE, CANCEL_EDIT_COURSE, DELETE_COURSE, EDIT_COURSE, ERROR_COURSE, FETCH_COURSES, SEND_EDIT_COURSE,
} from '../../lib/constants';

const initialState = {
  mataKuliah: [],
  error: '',
  isFetched: false,
  editCourse: {
    isEdit: false,
    courseState: {},
  },
};

const coursesReducer = (courses = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...courses,
        mataKuliah: action.payload.mataKuliah,
        isFetched: true,
      };
    case ADD_COURSE:
      return {
        ...courses,
        mataKuliah: [
          ...courses.mataKuliah,
          action.payload.addedCourse,
        ],
        error: action.payload.error,
        isFetched: true,
      };
    case EDIT_COURSE:
      return {
        ...courses,
        editCourse: {
          isEdit: true,
          courseState: courses.mataKuliah.filter((course) => course.id === action.payload.id)[0],
        },
        isFetched: true,
      };
    case CANCEL_EDIT_COURSE:
      return {
        ...courses,
        editCourse: {
          isEdit: false,
          courseState: {},
        },
        isFetched: true,
      };
    case SEND_EDIT_COURSE:
      return {
        ...courses,
        mataKuliah: [
          ...courses.mataKuliah.filter((course) => course.id !== action.payload.editedCourse.id),
          action.payload.editedCourse,
        ],
        error: action.payload.error,
        editCourse: {
          isEdit: false,
          courseState: {},
        },
      };
    case DELETE_COURSE:
      return {
        ...courses,
        mataKuliah: courses.mataKuliah.filter((course) => course.id !== action.payload.deletedCourse.id),
        error: action.payload.error,
      };
    case ERROR_COURSE:
      return {
        ...courses,
        error: action.payload,
        isFetched: true,
      };
    default:
      return courses;
  }
};

export default coursesReducer;
