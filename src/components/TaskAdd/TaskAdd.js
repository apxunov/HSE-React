import React from 'react'

import TaskInput from '../TaskInput/TaskInput'

import classes from '../Task/Task.module.css'
import './TaskAdd.module.css';

const TaskAdd = ({submitHandler}) => {
    return (
        <div className={classes.task}>
            <h2>Create new task</h2>
            <TaskInput
                onSubmitHandler={submitHandler}
            />
        </div>
    )
  }

export default TaskAdd