import React from 'react';
import PropTypes from 'prop-types';

export default function IconDestination({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 18H19V20H5V18ZM9.6 15.3L5 10.7L7 8.8L9.6 11.4L17 4L19 6L9.6 15.3Z" fill="#333333" />
      </svg>
    </button>
  );
}

IconDestination.propTypes = {
  onClick: PropTypes.func.isRequired,
};
