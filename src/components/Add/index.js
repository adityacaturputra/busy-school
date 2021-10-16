import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import AddIcon from '../../assets/svg/add-icon.svg';

function Add({ clicked, onClick }) {
  return (
    <Transition in={clicked} timeout={200}>
      {(state) => (
        <Container clicked={state} onClick={onClick}>
          <img src={AddIcon} alt="add" />
        </Container>
      )}
    </Transition>
  );
}

Add.propTypes = {
  clicked: PropTypes.bool,
  onClick: PropTypes.func,
};

Add.defaultProps = {
  clicked: false,
  onClick: () => {},
};

const Container = styled.div`
    @media (min-width: 1024px){
    right: 121px;
    }
    position: fixed;
    bottom: 121px;
    right: 36px;
    border-radius: 50%;
    transform: rotate(${({ clicked }) => (clicked === 'entered' || clicked === 'entering' ? '315deg' : '0deg')});
    transition: 1s;
    cursor: pointer;
`;

export default Add;
