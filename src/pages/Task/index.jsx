import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav';

function Task(props) {
  return (
    <div>
      Task
      <Nav active="task" />
    </div>
  );
}

Task.propTypes = {

};

export default Task;
