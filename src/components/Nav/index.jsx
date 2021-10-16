import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  IconHome, IconProfile, IconSchedule, IconTask,
} from '../../assets';
import theme from '../../config/theme';

export default function Nav(props) {
  const { active } = props;
  return (
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
