import React from 'react'

import TaskInput from '../TaskInput/TaskInput'
import Button from '../Task/Button/Button'

import classes from '../Task/Task.module.css'
import './TaskAdd.module.css';

const TaskAdd = ({onSubmit}) => {
    const cls = [classes.task]
    return (
        <form className={cls.join(' ')}>
            <h2>Create new task</h2>
            <TaskInput/>
            <Button 
                onClick={onSubmit}
                btnName={'Submit'}
            />
        </form>
    )
  }

export default TaskAdd