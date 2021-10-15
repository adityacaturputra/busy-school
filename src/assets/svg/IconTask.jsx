import React from 'react';
import PropTypes from 'prop-types';

export default function IconTask({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 34L26 38.56V44H12C9.78 44 8 42.22 8 40V8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4H14V18L19 15L24 18V4H36C37.0609 4 38.0783 4.42143 38.8284 5.17157C39.5786 5.92172 40 6.93913 40 8V25.08L37 23.44L17.64 34ZM48 34L37 28L26 34L37 40L48 34ZM30 38.18V42.18L37 46L44 42.18V38.18L37 42L30 38.18Z" fill="#333333" />
    </svg>
  );
}

IconTask.propTypes = {
  size: PropTypes.number,
};

IconTask.defaultProps = {
  size: 48,
};
