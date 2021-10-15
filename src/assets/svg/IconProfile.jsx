import React from 'react';
import PropTypes from 'prop-types';

export default function IconProfile({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8C26.1217 8 28.1566 8.84285 29.6569 10.3431C31.1571 11.8434 32 13.8783 32 16C32 18.1217 31.1571 20.1566 29.6569 21.6569C28.1566 23.1571 26.1217 24 24 24C21.8783 24 19.8434 23.1571 18.3431 21.6569C16.8429 20.1566 16 18.1217 16 16C16 13.8783 16.8429 11.8434 18.3431 10.3431C19.8434 8.84285 21.8783 8 24 8ZM24 28C32.84 28 40 31.58 40 36V40H8V36C8 31.58 15.16 28 24 28ZM14 44H18V48H14V44ZM22 44H26V48H22V44ZM30 44H34V48H30V44Z" fill="#333333" />
    </svg>

  );
}

IconProfile.propTypes = {
  size: PropTypes.number,
};

IconProfile.defaultProps = {
  size: 48,
};
