import React from 'react'

import TaskInput from '../TaskInput/TaskInput'
import Task from '../Task/Task'
import Button from '../Task/Button/Button'

const TaskAdd = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = document.getElementsByName('taskName')[0].value
        const description = document.getElementsByName('taskDescription')[0].value
        console.log('here they are', {name, description})

        return (
            <Task
                id='test'
                name={name}
                description={description}
                completed='false'
            />
        )
    }

    return (
        <form>
            <h2>Create new task</h2>
            <TaskInput/>
            <Button 
                onClick={handleSubmit}
                btnName={'Submit'}
            />
        </form>
    )
  }

export default TaskAdd