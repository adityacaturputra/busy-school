import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Add from '../Add';
import { Layer } from '../../style';

function Modal(props) {
  const { children, show, onClick } = props;
  return (
    <>
      <Add clicked={show} onClick={onClick} />
      <CSSTransition
        in={show}
        classNames="animate"
        timeout={300}
        unmountOnExit
      >
        {
          () => (
            <Layer onClick={onClick} />
          )
          }
      </CSSTransition>
      <CSSTransition
        in={show}
        classNames="appear"
        timeout={500}
        unmountOnExit
      >
        {
          () => (
            children
          )
          }
      </CSSTransition>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
