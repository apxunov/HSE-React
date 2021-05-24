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
    const projectId = this.props.projectId
    
    return (
      <div className={cx('tasks-wrapper__layout')}>
        <TaskAdd
            projectId={projectId}
            taskAddHandler={this.props.taskAddHandler}
        />
        <TaskList
            tasksList={tasks}
            onClick={this.props.changeTaskStatusHandler}
        />
      </div>
    )    
  }
}

export default ProjectContent
