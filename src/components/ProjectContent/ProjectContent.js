import React from 'react'

// Импорт компонентов
import TaskList from './TaskList/TaskList'
import TaskAdd from './TaskAdd/TaskAdd';

// Импорт стилей
import classes from './ProjectContent.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

class ProjectContent extends React.Component {
  render() {
    const tasks = this.props.tasks

    return (
      <div className={cx('tasks-wrapper__layout')}>
        <TaskAdd
            submitHandler={this.props.submitHandler}
        />
        <TaskList
            tasksList={tasks}
            onClick={this.props.handleTaskStatus}
        />
      </div>
    )    
  }
}

export default ProjectContent
