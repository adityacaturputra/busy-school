import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import theme from '../../../../config/theme';
import { IconListTaskClock, IconListTaskDeadline, IconListTaskDescription } from '../../../../assets';

function TaskDetail(props) {
  const {
    onClick, show, disabled, description, deadlineDate, deadlineTime,
  } = props;
  return (
    <>
      <Transition in={show} timeout={200}>
        {(state) => (
          <Container onClick={onClick} show={state} disabled={disabled}>
            <Content>
              <IconListTaskDescription />
              <Description>{description}</Description>
            </Content>
            <Content>
              <IconListTaskDeadline />
              <Text>{deadlineDate.toDateString()}</Text>
            </Content>
            <Content>
              <IconListTaskClock />
              <Text>{deadlineTime}</Text>
            </Content>
          </Container>
        )}
      </Transition>
    </>
  );
}

TaskDetail.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  description: PropTypes.string.isRequired,
  deadlineDate: PropTypes.instanceOf(Date).isRequired,
  deadlineTime: PropTypes.string.isRequired,
};

TaskDetail.defaultProps = {
  show: false,
  disabled: false,
};

export default TaskDetail;

const Container = styled.div`
    display: ${({ show }) => (show === 'entered' || show === 'entering' ? 'flex' : 'none')};
    opacity: ${({ show }) => (show === 'entering' ? '.3' : '1')};
    opacity: ${({ disabled }) => disabled && '.3'};
    flex-direction: column;
    padding: 4px 28px 8px;
    border-bottom: 1px solid ${theme.color.black_10};
    cursor: default;
    transition: 0.5s;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.p`
    font-size: 12px;
    color: ${theme.color.black_70};
    margin-left: 12px;
`;

const Description = styled(Text)`
line-height: 150%;
`;
