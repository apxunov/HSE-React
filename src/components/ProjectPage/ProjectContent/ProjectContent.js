import React from 'react'

// Импорт компонентов
import ProjectHeader from './ProjectHeader/ProjectHeader'
import TaskList from './TaskList/TaskList'
import {TaskAdd} from './TaskAdd/TaskAdd';

// Импорт стилей
import classes from './ProjectContent.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

class ProjectContent extends React.Component {
  render() {
    const tasks = this.props.tasks
    const projectId = this.props.projectId
    const projectName = this.props.projectName
    
    return (
      <> 
        <ProjectHeader 
          projectName={projectName}
          numberOfTasks={tasks?.length}
        />
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
      </>
    )    
  }
}

export default ProjectContent
