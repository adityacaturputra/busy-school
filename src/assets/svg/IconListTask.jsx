import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../config/theme';

export default function IconDestination({ disabled }) {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12H12V10H0V12ZM0 0V2H18V0H0ZM0 7H18V5H0V7Z" fill={disabled ? theme.color.black_30 : theme.color.black_100} />
    </svg>
  );
}

IconDestination.propTypes = {
  disabled: PropTypes.bool,
};

IconDestination.defaultProps = {
  disabled: false,
};
