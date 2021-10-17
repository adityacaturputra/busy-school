import styled from 'styled-components';
import Form from '../../../style/Form';

const FormContainer = styled(Form)`
  padding: 36px;
  background-color: #fff;
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
