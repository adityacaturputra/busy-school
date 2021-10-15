import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { IconListTask } from '../../../assets';
import theme from '../../../config/theme';

export default function Task({ title }) {
  return (
    <Container>
      <IconListTask />
      <p>{title}</p>
    </Container>
  );
}

const Container = styled.div`
    padding: 12px 28px;
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      margin-left: 8px;
      font-weight: 500;
    }
    border-bottom: 1px solid ${theme.color.black_10};
`;

Task.propTypes = {
  title: PropTypes.string.isRequired,
};
