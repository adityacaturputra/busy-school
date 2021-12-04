import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextError = ({ title }) => (
  <Text>{title}</Text>
);

const Text = styled.h2`
  padding-left: 24px;
  text-align: 'center';
`;

TextError.propTypes = {
  title: PropTypes.string,
};

TextError.defaultProps = {
  title: '',
};

export default TextError;
