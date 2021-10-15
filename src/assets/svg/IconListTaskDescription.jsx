import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../config/theme';

export default function IconDestination({ disabled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.25 3.75V14.25C2.25 15.9008 3.5955 16.5 4.5 16.5H15.75V15H4.509C4.1625 14.991 3.75 14.8545 3.75 14.25C3.75 13.6455 4.1625 13.509 4.509 13.5H15.75V3C15.75 2.17275 15.0773 1.5 14.25 1.5H4.5C3.5955 1.5 2.25 2.09925 2.25 3.75Z" fill={disabled ? theme.color.black_30 : '#BCBCBC'} />
    </svg>
  );
}

IconDestination.propTypes = {
  disabled: PropTypes.bool,
};

IconDestination.defaultProps = {
  disabled: false,
};
