import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../config/theme';

export default function IconDestination({ disabled }) {
  return (

    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7.625C5.50272 7.625 5.02581 7.42746 4.67417 7.07583C4.32254 6.72419 4.125 6.24728 4.125 5.75C4.125 5.25272 4.32254 4.77581 4.67417 4.42417C5.02581 4.07254 5.50272 3.875 6 3.875C6.49728 3.875 6.97419 4.07254 7.32583 4.42417C7.67746 4.77581 7.875 5.25272 7.875 5.75C7.875 5.99623 7.8265 6.24005 7.73227 6.46753C7.63805 6.69502 7.49994 6.90172 7.32583 7.07583C7.15172 7.24994 6.94502 7.38805 6.71753 7.48227C6.49005 7.5765 6.24623 7.625 6 7.625ZM6 0.5C4.60761 0.5 3.27226 1.05312 2.28769 2.03769C1.30312 3.02226 0.75 4.35761 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 4.35761 10.6969 3.02226 9.71231 2.03769C8.72774 1.05312 7.39239 0.5 6 0.5Z" fill={disabled ? theme.color.black_30 : '#B7B7B7'} />
    </svg>
  );
}

IconDestination.propTypes = {
  disabled: PropTypes.bool,
};

IconDestination.defaultProps = {
  disabled: false,
};
