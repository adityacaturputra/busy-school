/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import {
  IconHome, IconSchedule, IconTask,
} from '../../assets';
import theme from '../../config/theme';
import useScrollEffect from '../../hooks/useScrollEffect';

export default function Nav(props) {
  const { active } = props;
  const scroll = useScrollEffect();
  return (
    <CSSTransition
      in={!scroll.scrolling}
      classNames="animate"
      timeout={500}
      unmountOnExit
    >
      {
          () => (
            <Content>
              <NavItem to="/" active={active === 'home'}>
                <IconHome size="36px" />
              </NavItem>
              <NavItem to="/schedule" active={active === 'schedule'}>
                <IconSchedule size="36px" />
              </NavItem>
              <NavItem to="/task" active={active === 'task'}>
                <IconTask size="36px" />
              </NavItem>
              {/* <NavItem to="profile" active={active === 'profile'}>
                <IconProfile size={'36px'} />
              </NavItem> */}
            </Content>
          )
          }
    </CSSTransition>

  );
}

Nav.propTypes = {
  active: PropTypes.string,
};

Nav.defaultProps = {
  active: 'home',
};

const Content = styled.div`
  @media (min-width: 1024px) {
    padding: 18px 36px;
    flex-direction: column;
    width: unset;
    height: 100vh;
    border-right: 2px solid ${theme.color.black_70};
    justify-content: space-around;
    position: fixed;
    top: 0;
    float: left;
    svg {
      width: 48px;
      height: 48px;
    }
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
  justify-content: space-around;
  box-sizing: border-box;
  width: 100vw;
  position: fixed;
  bottom: 0;
  img {
    width: 48px;
    height: 48px;
  }
  transition: .3s;
  @media (max-width: 1024px) {
    border-top: 2px solid ${theme.color.black_70};
    padding: 12px 0;
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
  box-sizing: border-box;
  transition: .3s;
  path {
    fill: ${((props) => (props.active ? theme.color.black_100 : theme.color.black_50))};
  }
`;
