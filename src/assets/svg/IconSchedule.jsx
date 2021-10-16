import React from 'react';
import PropTypes from 'prop-types';

export default function IconSchedule({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 20V24H14V20H18ZM26 20V24H22V20H26ZM34 20V24H30V20H34ZM38 6C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H12V2H16V6H32V2H36V6H38ZM38 38V16H10V38H38ZM18 28V32H14V28H18ZM26 28V32H22V28H26ZM34 28V32H30V28H34Z" fill="#333333" />
    </svg>
  );
}

IconSchedule.propTypes = {
  size: PropTypes.string,

};

IconSchedule.defaultProps = {
  size: '48px',
};
