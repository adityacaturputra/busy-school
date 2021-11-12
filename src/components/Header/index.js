/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import theme from '../../config/theme';
import { Gap } from '../../style';

function Header(props) {
  const [scroll, setScroll] = useState({
    scrolling: true,
    scrollTop: 0,
  });

  useEffect(() => {
    const onScroll = (e) => {
      setScroll({ ...scroll, scrollTop: e.target.documentElement.scrollTop, scrolling: e.target.documentElement.scrollTop < scroll.scrollTop });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scroll.scrollTop]);
  const { Icon, title, description } = props;
  return (
    <>
      <CSSTransition
        in={scroll.scrolling}
        classNames="animate"
        timeout={500}
        unmountOnExit
      >
        {() => (
          <Container>
            {Icon}
            <Gap width="8px" />
            <Text>{title}</Text>
            <TextDescription>{description}</TextDescription>
          </Container>
        )}
      </CSSTransition>
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
  transform: translateY(0);
  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid ${theme.color.black_50};
  path {
    fill: ${theme.color.black_70};
    height: 24px;
    width: 24px;
  }
  transition: .3s;
  &.animate-enter {
    transform: translateY(-100%);
  }

  // enter to
  &.animate-enter-active {
    transform: translateY(0);
  }

  // exit from
  &.animate-exit {
    transform: translateY(0);
  }

  // exit to 
  &.animate-exit-active {
    transform: translateY(-100%);
  }
`;
