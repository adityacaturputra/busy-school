import styled from 'styled-components';
import Form from '../Form';

const FormContainer = styled(Form)`
@media (min-width: 1024px){
    height: unset;
  }
@media (max-height: 768px){
  max-height: 75vh;
  }
  height: 500px;
  padding: 36px;
  background-color: #fff;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: .5s;
  // enter from
  &.appear-enter {
    top: 150%;
  }

  // enter to
  &.appear-enter-active {
    top: 36%;
  }

  // exit from
  &.appear-exit {
    top: 36;
  }

  // exit to 
  &.appear-exit-active {
    top: 150%;
  }
`;

export default FormContainer;
