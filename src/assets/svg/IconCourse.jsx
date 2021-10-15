import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../config/theme';

export default function IconCourse({ disabled }) {
  return (

    <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0.399994L0 8.79999L4.8 10.96V15.04C3.36 15.52 2.4 16.96 2.4 18.4C2.4 19.84 3.36 21.28 4.8 21.76V22L2.64 27.04C1.92 29.2 2.4 31.6 6 31.6C9.6 31.6 10.08 29.2 9.36 27.04L7.2 22C8.64 21.28 9.6 20.08 9.6 18.4C9.6 16.72 8.64 15.52 7.2 15.04V12.16L18 17.2L36 8.79999L18 0.399994ZM28.56 16L17.76 20.8L12 18.16V18.4C12 20.08 11.28 21.52 10.08 22.72L11.52 26.08V26.32C11.76 27.28 12 28.24 11.76 29.2C13.44 29.92 15.36 30.4 17.76 30.4C25.68 30.4 28.56 25.6 28.56 23.2V16Z" fill={disabled ? theme.color.black_30 : '#333333'} />
    </svg>
  );
}

IconCourse.propTypes = {
  disabled: PropTypes.bool,
};

IconCourse.defaultProps = {
  disabled: false,
};
