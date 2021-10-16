import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../config/theme';
import { Gap } from '../../style';

function Header(props) {
  const { Icon, title, description } = props;
  return (
    <>
      <Container>
        {Icon}
        <Gap width="8px" />
        <Text>{title}</Text>
        <TextDescription>{description}</TextDescription>
      </Container>
      <Gap height="36px" />
    </>
  );
}

Header.propTypes = {
  Icon: PropTypes.objectOf(React.Component).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.black_70};
  line-height: 0;
`;

const TextDescription = styled(Text)`
  margin-left: auto;
  color: ${theme.color.black_50}
`;

const Container = styled.div`
@media (min-width: 1024px) {
  padding: 12px 144px;
}
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid ${theme.color.black_50};
  path {
    fill: ${theme.color.black_70};
    height: 24px;
    width: 24px;
  }
`;
