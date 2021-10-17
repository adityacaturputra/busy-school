/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import {
  IconHome, IconProfile, IconSchedule, IconTask,
} from '../../assets';
import theme from '../../config/theme';

export default function Nav(props) {
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
  const { active } = props;
  return (
    <CSSTransition
      in={scroll.scrolling}
      classNames="animate"
      timeout={500}
      unmountOnExit
    >
      {
          () => (
            <Container>
              <NavItem to="/" active={active === '/'}>
                <IconHome />
              </NavItem>
              <NavItem to="/schedule" active={active === 'schedule'}>
                <IconSchedule />
              </NavItem>
              <NavItem to="/task" active={active === 'task'}>
                <IconTask />
              </NavItem>
              <NavItem to="profile" active={active === 'profile'}>
                <IconProfile />
              </NavItem>
            </Container>
          )
          }
    </CSSTransition>

  );
}

Nav.propTypes = {
  active: PropTypes.oneOf(['/', 'schedule', 'task', 'profile']),
};

Nav.defaultProps = {
  active: '/',
};

const Container = styled.div`
  @media (min-width: 1024px) {
    flex-direction: column;
    width: unset;
    height: 100vh;
    border-right: 2px solid ${theme.color.black_30};
    justify-content: space-around;
    position: fixed;
    top: 0;
    float: left;
    // enter from
    &.animate-enter {
      transform: translateX(-100%);
    }

    // enter to
    &.animate-enter-active {
      transform: translateX(0);
    }

    // exit from
    &.animate-exit {
      transform: translateX(0);
    }

    // exit to 
    &.animate-exit-active {
      transform: translateX(-100%);
    }
  }
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100vw;
  padding: 12px 36px;
  position: fixed;
  bottom: 0;
  border-top: 2px solid ${theme.color.black_30};
  img {
    width: 48px;
    height: 48px;
  }
  transition: .3s;
  @media (max-width: 1024px) {
  // enter from
  &.animate-enter {
    transform: translateY(100%);
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
    transform: translateY(100%);
  }
  }
`;

const NavItem = styled(Link)`
  @media (min-width: 1024px) {
    border-bottom: 2px solid ${(props) => (props.active ? theme.color.black_50 : '#fff')};
    :hover{
      border-bottom: 2px solid ${theme.color.black_30};
    }
  }
  box-sizing: border-box;
  border-bottom: 2px solid ${(props) => (props.active ? theme.color.black_50 : '#fff')};
  transition: .3s;
  path {
    fill: ${((props) => (props.active ? theme.color.black_100 : theme.color.black_30))};
  }
  :hover{
    border-bottom: 2px solid ${theme.color.black_30};
  }
`;
