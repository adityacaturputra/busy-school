import {
  ADD_COURSE, CANCEL_EDIT_COURSE, EDIT_COURSE, FETCH_COURSES, SEND_EDIT_COURSE,
} from '../../lib/constants';

const initialState = {
  mataKuliah: [],
  error: false,
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
      };
    case ADD_COURSE:
      return {
        ...courses,
        mataKuliah: [
          ...courses.mataKuliah,
          action.payload.addedCourse,
        ],
        error: action.payload.error,
      };
    case EDIT_COURSE:
      return {
        ...courses,
        editCourse: {
          isEdit: true,
          courseState: courses.mataKuliah.filter((course) => course.id === action.payload.id)[0],
        },
      };
    case CANCEL_EDIT_COURSE:
      return {
        ...courses,
        editCourse: {
          isEdit: false,
          courseState: {},
        },
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
    default:
      return courses;
  }
};

export default coursesReducer;
