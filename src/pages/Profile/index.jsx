import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import { Wrapper } from '../../style';

function Profile(props) {
  return (
    <>
      <Wrapper>
        <h1 style={{ textAlign: 'center' }}>
          Available Soon
        </h1>
      </Wrapper>
      <Nav active="profile" />
    </>
  );
}

Profile.propTypes = {

};

export default Profile;
