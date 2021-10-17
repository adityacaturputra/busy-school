import styled from 'styled-components';

const Layer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color:  rgba(0, 0, 0, 0.75);
  transition: opacity 0.3s;

  // enter from
  &.animate-enter {
    opacity: 0;
  }

  // enter to
  &.animate-enter-active {
    opacity: 1;
  }

  // exit from
  &.animate-exit {
    opacity: 1;
  }

  // exit to 
  &.animate-exit-active {
    opacity: 0;
  }
`;

export default Layer;
