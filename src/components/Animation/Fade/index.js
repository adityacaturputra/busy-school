import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

function Fade(props) {
  const { children, duration } = props;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const appearVisibility = setTimeout(() => {
      setVisible(true);
    }, duration);
    return () => {
      clearTimeout(appearVisibility);
    };
  }, []);
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      timeout={500}
      unmountOnExit
    >
      {
        () => (
          <FadeContainer>
            {children}
          </FadeContainer>
        )
      }
    </CSSTransition>
  );
}

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
};

Fade.defaultProps = {
  duration: 100,
};

const FadeContainer = styled.div`
    opacity: 1;
    transition: .5s;
  &.fade-enter {
    opacity: .3;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to 
  &.fade-exit-active {
    opacity: 0;
  }
`;

export default Fade;
