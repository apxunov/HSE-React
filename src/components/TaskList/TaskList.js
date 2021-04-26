import React from 'react'
import Task from '../Task/Task'

const TaskList = ({tasksList}) => {
    return (
        tasksList.map( task => {
            return (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    description={task.description}
                    completed={task.completed}
                />
            )
        })
    )
}

export default TaskList