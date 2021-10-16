import React from 'react';
import PropTypes from 'prop-types';

function IconHome({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H8V40H44V44H4V4ZM14 20H34V26H14V20ZM22 30H42V36H22V30ZM12 8H44V16H40V12H16V16H12V8Z" fill="#333333" />
    </svg>
  );
}

export default IconHome;

IconHome.propTypes = {
  size: PropTypes.string,
};

IconHome.defaultProps = {
  size: '48px',
};
