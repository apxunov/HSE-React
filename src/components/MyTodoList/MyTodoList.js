import React from 'react'

// Импорт компонентов
import TaskList from './TaskList/TaskList'
import TaskAdd from './TaskAdd/TaskAdd';

class MyTodoList extends React.Component {
  render() {
    const tasks = this.props.tasks

    return (
      <>
        <TaskAdd
            submitHandler={this.props.submitHandler}
        />
        <TaskList
            tasksList={tasks}
            onClick={this.props.handleTaskStatus}
        />
      </>
    )    
  }
}

export default MyTodoList
