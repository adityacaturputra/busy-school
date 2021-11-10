import React from 'react';
import { Nav } from '../../components';
import { Wrapper } from '../../style';

function Profile() {
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
