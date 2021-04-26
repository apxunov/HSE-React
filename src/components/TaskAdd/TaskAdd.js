import React from 'react'

import TaskInput from '../TaskInput/TaskInput'
import Button from '../Task/Button/Button'

const TaskAdd = ({onSubmit}) => {
    return (
        <form>
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