import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../config/theme';

export default function IconTeacher({ disabled }) {
  return (

    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 11.75C14.3978 11.75 14.7794 11.592 15.0607 11.3107C15.342 11.0294 15.5 10.6478 15.5 10.25V2C15.5 1.60218 15.342 1.22064 15.0607 0.93934C14.7794 0.658035 14.3978 0.5 14 0.5H6.095C6.3575 0.9575 6.5 1.475 6.5 2H14V10.25H7.25V11.75H14ZM10.25 4.25V5.75H5.75V15.5H4.25V11H2.75V15.5H1.25V9.5H0.125V5.75C0.125 5.35218 0.283035 4.97064 0.56434 4.68934C0.845644 4.40804 1.22718 4.25 1.625 4.25H10.25ZM5 2C5 2.39782 4.84196 2.77936 4.56066 3.06066C4.27936 3.34196 3.89782 3.5 3.5 3.5C3.10218 3.5 2.72064 3.34196 2.43934 3.06066C2.15804 2.77936 2 2.39782 2 2C2 1.60218 2.15804 1.22064 2.43934 0.93934C2.72064 0.658035 3.10218 0.5 3.5 0.5C3.89782 0.5 4.27936 0.658035 4.56066 0.93934C4.84196 1.22064 5 1.60218 5 2Z" fill={disabled ? theme.color.black_30 : '#B7B7B7'} />
    </svg>
  );
}

IconTeacher.propTypes = {
  disabled: PropTypes.bool,
};

IconTeacher.defaultProps = {
  disabled: false,
};
