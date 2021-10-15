import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../config/theme';
import Gap from '../../style/Gap';

export default function TitleWithIcon({ title, Icon }) {
  return (
    <>
      <TitleContainer>
        {Icon}
        <Gap width="8px" />
        <Text>{title}</Text>
      </TitleContainer>
      <Gap height="6px" />
    </>
  );
}

TitleWithIcon.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
};

const TitleContainer = styled.div`
    path {
        fill: ${theme.color.black_70};
    } 
    display: flex;
    align-items: center;
    margin-left: 24px;
`;
const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: ${theme.color.black_70};
    line-height: 0;
`;
