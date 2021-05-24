import React from 'react'

// Импорт компонентов
import TaskInput from './TaskInput/TaskInput'

// Импорт контекста 
import { ThemeContext } from '../../../App/ThemeContext'

// Импорт стилей
import './TaskAdd.module.scss';
import classes from '../TaskList/Task/Task.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const TaskAdd = ({taskAddHandler, projectId}) => {
    return (
        <ThemeContext>
            {theme => (
                <div className={cx("task", `task-theme-${theme}`)}>
                    <h2>Create new task</h2>
                    <TaskInput
                        projectId={projectId}
                        taskAddHandler={taskAddHandler}
                    />
                </div>
            )}
        </ThemeContext>
    )
  }

export default TaskAdd